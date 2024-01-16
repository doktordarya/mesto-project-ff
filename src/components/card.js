//Создание новой карточки

function createCard(link, name, deleteCard, openPopupTypeImage, likeCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").alt = name;

  cardImage.addEventListener("click", function () {
    openPopupTypeImage(name, link);
  });
  deleteButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", likeCard);

  return cardElement;
}

//Удаление карточки

function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

//Лайк карточки

function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

export { createCard, deleteCard, likeCard };
