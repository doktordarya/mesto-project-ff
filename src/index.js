import "./pages/index.css";

import { createCard, deleteCard, likeCard } from "./components/card.js";

import {
  openModal,
  closeModal,
  closePopupByOverlay,
} from "./components/modal.js";

import { enableValidation, clearValidation } from "./validation.js";

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

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export { validationConfig };

//DOM узлы

const placesList = document.querySelector(".places__list"); //список карточек
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

let userId;

//Вывести карточки на страницу и получить информацию о пользователе с сервера

Promise.all([getProfileInfo(), getInitialCards()])
  .then(([userInfo, card]) => {
    profileName.textContent = userInfo.name;
    profileAbout.textContent = userInfo.about;
    profileImage.src = userInfo.avatar;
    userId = userInfo._id;

    card.forEach((card) => {
      placesList.append(
        createCard(card, userId, deleteCard, openPopupTypeImage, likeCard)
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
});

//Закрытие попапов

popupTypeNewCard
  .querySelector(".popup__close")
  .addEventListener("click", function () {
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
    closeModal(popupTypeUpdAvatar);
  });

//Закрытие попапов кликом на оверлэй

popup.forEach(function (item) {
  item.addEventListener("click", closePopupByOverlay);
});

//Добавление новой карточки

const cardNameInput = newCardForm.querySelector(".popup__input_type_card-name"); //инпут названия картинки
const linkInput = newCardForm.querySelector(".popup__input_type_url"); //инпут ссылки на картинку

newCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  newCardForm.querySelector(".popup__button").textContent = "Сохранение...";

  const nameValue = cardNameInput.value;
  const linkValue = linkInput.value;

  addNewCard(nameValue, linkValue)
    .then((card) => {
      placesList.prepend(
        createCard(card, userId, deleteCard, openPopupTypeImage, likeCard)
      );
      newCardForm
        .querySelector(".popup__button")
        .classList.add("popup__button_disabled");
      newCardForm.reset();
      closeModal(popupTypeNewCard);
    })
    .catch((err) => {
      console.log("Ошибка");
    })
    .finally(() => {
      newCardForm.querySelector(".popup__button").textContent = "Сохранить";
    });
});

//Редактирование формы профиля

const nameInput = profileForm.querySelector(".popup__input_type_name"); //инпут имени
const jobInput = profileForm.querySelector(".popup__input_type_description"); //инпут занятия

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileForm.querySelector(".popup__button").textContent = "Сохранение...";

  const jobValue = jobInput.value;
  const nameValue = nameInput.value;

  editProfileSave(nameValue, jobValue)
    .then((res) => {
      profileName.textContent = res.name;
      profileAbout.textContent = res.about;
      profileForm.reset();
      closeModal(popupTypeEdit);
    })
    .catch((err) => {
      console.log("Ошибка");
    })
    .finally(() => {
      profileForm.querySelector(".popup__button").textContent = "Сохранить";
    });
});

//Обновление аватара

const avatarLink = document.getElementById("update-avatar-input"); //инпут ссылки аватара

updAvatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  updAvatarForm.querySelector(".popup__button").textContent = "Сохранение...";

  const linkAvatar = avatarLink.value;

  updateUserAvatar(linkAvatar)
    .then((res) => {
      profileImage.src = res.avatar;
      updAvatarForm
        .querySelector(".popup__button")
        .classList.add("popup__button_disabled");
      updAvatarForm.reset();
      closeModal(popupTypeUpdAvatar);
    })
    .catch((err) => {
      console.log("Ошибка");
    })
    .finally(() => {
      updAvatarForm.querySelector(".popup__button").textContent = "Сохранить";
    });
});

//Валидация форм

enableValidation(validationConfig);
