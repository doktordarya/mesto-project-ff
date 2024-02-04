//Загрузка информации о пользователе с сервера

const getProfileInfo = () => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-5/users/me", {
    headers: {
      authorization: "fa9c1e0c-5d9d-42b0-9688-51c0eef5b639",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так: ${res.status}`);
  });
};

//Загрузка карточек с сервера

const getInitialCards = () => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards", {
    headers: {
      authorization: "fa9c1e0c-5d9d-42b0-9688-51c0eef5b639",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так: ${res.status}`);
  });
};

//Редактирование профиля

const editProfileSave = (nameValue, jobValue) => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-5/users/me", {
    method: "PATCH",
    headers: {
      authorization: "fa9c1e0c-5d9d-42b0-9688-51c0eef5b639",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameValue,
      about: jobValue,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так: ${res.status}`);
  });
};

//Добавление новой карточки

const addNewCard = (nameValue, linkValue) => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards", {
    method: "POST",
    headers: {
      authorization: "fa9c1e0c-5d9d-42b0-9688-51c0eef5b639",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameValue,
      link: linkValue,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так: ${res.status}`);
  });
};

//Удаление карточки

const removeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-5/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: "fa9c1e0c-5d9d-42b0-9688-51c0eef5b639",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так: ${res.status}`);
  });
};

//Поставить лайк

const likedCard = (cardId) => {
  return fetch(
    `https://nomoreparties.co/v1/wff-cohort-5/cards/likes/${cardId}`,
    {
      method: "PUT",
      headers: {
        authorization: "fa9c1e0c-5d9d-42b0-9688-51c0eef5b639",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так: ${res.status}`);
  });
};

//Снять лайк

const deletedLike = (cardId) => {
  return fetch(
    `https://nomoreparties.co/v1/wff-cohort-5/cards/likes/${cardId}`,
    {
      method: "DELETE",
      headers: {
        authorization: "fa9c1e0c-5d9d-42b0-9688-51c0eef5b639",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так: ${res.status}`);
  });
};

//Сменить аватар

const updateUserAvatar = (linkAvatar) => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-5/users/me/avatar", {
    method: "PATCH",
    headers: {
      authorization: "fa9c1e0c-5d9d-42b0-9688-51c0eef5b639",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: linkAvatar,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то не так: ${res.status}`);
  });
};

export {
  getProfileInfo,
  getInitialCards,
  editProfileSave,
  addNewCard,
  removeCard,
  likedCard,
  deletedLike,
  updateUserAvatar,
};
