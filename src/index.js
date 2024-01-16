import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import {
  openModal,
  closeModal,
  closePopupByOverlay,
} from "./components/modal.js";

//DOM узлы

const placesList = document.querySelector(".places__list");
const profileAddButton = document.querySelector(".profile__add-button"); //кнопка добавления новой карточки
const popupTypeNewCard = document.querySelector(".popup_type_new-card"); //попап новой карточки
const profileEditButton = document.querySelector(".profile__edit-button"); //кнопка редактирования профиля
const popupTypeEdit = document.querySelector(".popup_type_edit"); //попап профиля
const popupImage = document.querySelector(".popup__image"); //фулскрин картинка
const popupTypeImage = document.querySelector(".popup_type_image"); //попап фулскрин картинки
const popup = document.querySelectorAll(".popup"); //все попапы
const popupCaption = document.querySelector(".popup__caption"); //название фулскрин картинки

//Вывести карточки на страницу

initialCards.forEach(function ({ link, name }) {
  const newcard = createCard(
    link,
    name,
    deleteCard,
    openPopupTypeImage,
    likeCard
  );
  placesList.append(newcard);
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
});

//Открытие попапа с картинкой

function openPopupTypeImage(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openModal(popupTypeImage);
}

//Закрытие попапов

popupTypeNewCard
  .querySelector(".popup__close")
  .addEventListener("click", function () {
    formNewPlace.reset();
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

//Закрытие попапов кликом на оверлэй

popup.forEach(function (item) {
  item.addEventListener("click", closePopupByOverlay);
});

//Добавление новой карточки

const formNewPlace = document.querySelector(
  ".popup_type_new-card .popup__form"
);

const cardNameInput = formNewPlace.querySelector(
  ".popup__input_type_card-name"
);
const linkInput = formNewPlace.querySelector(".popup__input_type_url");

formNewPlace.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameValue = cardNameInput.value;
  const linkValue = linkInput.value;

  const newPlaceCard = createCard(
    linkValue,
    nameValue,
    deleteCard,
    openPopupTypeImage,
    likeCard
  );
  placesList.prepend(newPlaceCard);

  formNewPlace.reset();
  closeModal(popupTypeNewCard);
});

//Редактирование формы профиля

const formEditProfile = document.querySelector(".popup_type_edit .popup__form");
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);

function editFormEditProfile(evt) {
  evt.preventDefault();

  const jobValue = jobInput.value;
  const nameValue = nameInput.value;
  document.querySelector(".profile__title").textContent = nameValue;
  document.querySelector(".profile__description").textContent = jobValue;

  formEditProfile.reset();

  closeModal(popupTypeEdit);
}

formEditProfile.addEventListener("submit", editFormEditProfile);
