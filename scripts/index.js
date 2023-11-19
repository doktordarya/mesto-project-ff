// @todo: Темплейт карточки
const placesList = document.querySelector(".places__list");

// @todo: DOM узлы

// @todo: Функция создания карточки

function createCard(srcCard, titleCard, deleteCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__image").src = srcCard;
  cardElement.querySelector(".card__title").textContent = titleCard;

  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function ({ link, name }) {
  const newcard = createCard(link, name, deleteCard);
  placesList.append(newcard);
});
