//Создание новой карточки

import { removeCard, likedCard, deletedLike } from "../api";

function createCard(
  card,
  userInfo,
  link,
  name,
  deleteCard,
  openPopupTypeImage,
  likeCard,
  cardId,
  userId
) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likesCounter = cardElement.querySelector(".card__likes");

  likesCounter.textContent = card.likes.length;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  if (userInfo._id === card.owner._id) {
    deleteButton.classList.add("card__delete-button_visible");
    deleteButton.addEventListener("click", () => {
      deleteCard(cardId, cardElement);
    });
  }

  likeButton.addEventListener("click", () => {
    likeCard(cardId, likeButton, likesCounter);
  });

  cardImage.addEventListener("click", () => {
    openPopupTypeImage(name, link);
  });

  return cardElement;
}

//Удаление карточки

function deleteCard(cardId, card) {
  removeCard(cardId)
    .then(() => {
      card.remove();
    })
    .catch((err) => {
      console.log("Ошибка");
    });
}

//Лайк карточки

function likeCard(cardId, likeButton, likesCounter) {
  if (!likeButton.classList.contains("card__like-button_is-active")) {
    likedCard(cardId)
      .then((res) => {
        console.log(res);
        likeButton.classList.add("card__like-button_is-active");
        likesCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log("Ошибка");
      });
  } else {
    deletedLike(cardId)
      .then((res) => {
        console.log(res);
        likeButton.classList.remove("card__like-button_is-active");
        likesCounter.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log("Ошибка");
      });
  }
}

export { createCard, deleteCard, likeCard };
