import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import {
  openModal,
  closeModal,
  closePopupByOverlay,
} from "./components/modal.js";
import {
  validationConfig,
  showInputError,
  hideInputError,
  isValid,
  setEventListeners,
  hasInvalidInput,
  toggleButton,
  enableValidation,
  clearValidation,
} from "./validation.js";

import {
  getProfileInfo,
  getInitialCards,
  editProfileSave,
  addNewCard,
  removeCard,
  likedCard,
  deletedLike,
  updateUserAvatar,
} from "./api";

//DOM узлы

const placesList = document.querySelector(".places__list");
const profileAddButton = document.querySelector(".profile__add-button"); //кнопка добавления новой карточки
const popupTypeNewCard = document.querySelector(".popup_type_new-card"); //попап новой карточки
const profileEditButton = document.querySelector(".profile__edit-button"); //кнопка редактирования профиля
const popupTypeEdit = document.querySelector(".popup_type_edit"); //попап профиля
const popupImage = document.querySelector(".popup__image"); //фулскрин картинка
const popupTypeImage = document.querySelector(".popup_type_image"); //попап фулскрин картинки
const profileImage = document.querySelector(".profile__image"); //аватар пользователя
const popupTypeUpdAvatar = document.querySelector(".popup_type_update_avatar"); //попап обновления аватара
const popup = document.querySelectorAll(".popup"); //все попапы
const popupCaption = document.querySelector(".popup__caption"); //название фулскрин картинки
const profileForm = document.getElementById("edit_profile"); //форма попапа редактирования профиля
const newCardForm = document.getElementById("new_place"); //форма попапа новой карточки
const updAvatarForm = document.getElementById("update_avatar"); //форма попапа обновления аватара
const profileName = document.querySelector(".profile__title"); //имя пользователя
const profileAbout = document.querySelector(".profile__description"); //род деятельности пользователя

//Получить информацию о пользователе с сервера

getProfileInfo()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Ошибка");
  });

//Вывести карточки на страницу с сервера

getInitialCards()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Ошибка");
  });

let userId;
let cardId;
let cardOwnerId;

Promise.all([getProfileInfo(), getInitialCards()])
  .then(([userInfo, initialCards]) => {
    profileName.textContent = userInfo.name;
    profileAbout.textContent = userInfo.about;
    profileImage.src = userInfo.avatar;
    userId = userInfo._id;

    initialCards.forEach((card) => {
      placesList.append(
        createCard(
          card,
          userInfo,
          card.link,
          card.name,
          deleteCard,
          openPopupTypeImage,
          likeCard,
          cardId,
          userId
        )
      );
      console.log("Промисы выполнены");
    });
  })
  .catch((err) => {
    console.log("Ошибка");
  });

//Открытие попапа новой карточки

profileAddButton.addEventListener("click", function () {
  openModal(popupTypeNewCard);
  clearValidation(newCardForm, validationConfig);
});

//Открытие попапа профиля

profileEditButton.addEventListener("click", function () {
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
  openModal(popupTypeEdit);
  clearValidation(profileForm, validationConfig);
});

//Открытие попапа с картинкой

function openPopupTypeImage(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(popupTypeImage);
}

//Открытие попапа обновления аватара

profileImage.addEventListener("click", function () {
  openModal(popupTypeUpdAvatar);
  clearValidation(updAvatarForm, validationConfig);
});

//Закрытие попапов

popupTypeNewCard
  .querySelector(".popup__close")
  .addEventListener("click", function () {
    newCardForm.reset();
    closeModal(popupTypeNewCard);
  });

popupTypeEdit
  .querySelector(".popup__close")
  .addEventListener("click", function () {
    closeModal(popupTypeEdit);
  });

popupTypeImage
  .querySelector(".popup__close")
  .addEventListener("click", function () {
    closeModal(popupTypeImage);
  });

popupTypeUpdAvatar
  .querySelector(".popup__close")
  .addEventListener("click", function () {
    updAvatarForm.reset();
    closeModal(popupTypeUpdAvatar);
  });

//Закрытие попапов кликом на оверлэй

popup.forEach(function (item) {
  item.addEventListener("click", closePopupByOverlay);
});

//Добавление новой карточки

const cardNameInput = newCardForm.querySelector(".popup__input_type_card-name"); //инпут названия картинки
const linkInput = newCardForm.querySelector(".popup__input_type_url"); //инпут ссылки на картинку

newCardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  newCardForm.querySelector(".popup__button").textContent = "Сохранение...";

  const nameValue = cardNameInput.value;
  const linkValue = linkInput.value;

  addNewCard(nameValue, linkValue)
    .then((res) => {
      console.log(res);
      placesList.prepend(
        createCard(
          card,
          userInfo,
          res.link,
          res.name,
          deleteCard,
          openPopupTypeImage,
          likeCard,
          cardId,
          userId
        )
      );
      newCardForm.reset();
      closeModal(popupTypeNewCard);
    })
    .catch((err) => {
      console.log("Ошибка");
    });
});

//Редактирование формы профиля

const nameInput = profileForm.querySelector(".popup__input_type_name"); //инпут имени
const jobInput = profileForm.querySelector(".popup__input_type_description"); //инпут занятия

function editFormEditProfile(evt) {
  evt.preventDefault();

  profileForm.querySelector(".popup__button").textContent = "Сохранение...";

  const jobValue = jobInput.value;
  const nameValue = nameInput.value;

  editProfileSave(nameValue, jobValue)
    .then((res) => {
      console.log(res);
      profileName.textContent = res.name;
      profileAbout.textContent = res.about;
    })
    .catch((err) => {
      console.log("Ошибка");
    });

  profileForm.reset();
  closeModal(popupTypeEdit);
}

profileForm.addEventListener("submit", editFormEditProfile);

//Обновление аватара

const avatarLink = document.getElementById("update-avatar-input"); //инпут ссылки аватара

function updatingUserAvatar(evt) {
  evt.preventDefault();

  updAvatarForm.querySelector(".popup__button").textContent = "Сохранение...";

  const linkAvatar = avatarLink.value;

  updateUserAvatar(linkAvatar)
    .then((res) => {
      profileImage.src = res.link;
      closeModal(popupTypeUpdAvatar);
    })
    .catch((err) => {
      console.log("Ошибка");
    });
}

updAvatarForm.addEventListener("submit", (evt) => {
  updatingUserAvatar(evt);
});

//Валидация форм

enableValidation(validationConfig);
