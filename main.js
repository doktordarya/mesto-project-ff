(()=>{"use strict";var t=function(){return fetch("https://nomoreparties.co/v1/wff-cohort-5/users/me",{headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639"}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то не так: ".concat(t.status))}))},e=function(){return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards",{headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639"}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то не так: ".concat(t.status))}))};function n(t,e,n,o,r){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),i=c.querySelector(".card__image"),a=c.querySelector(".card__delete-button"),u=c.querySelector(".card__like-button"),s=c.querySelector(".card__likes");return s.textContent=t.likes.length,i.src=t.link,i.alt=t.name,c.querySelector(".card__title").textContent=t.name,e===t.owner._id&&(a.classList.add("card__delete-button_visible"),a.addEventListener("click",(function(){n(t._id,c)}))),t.likes.forEach((function(t){e===t._id&&u.classList.add("card__like-button_is-active")})),u.addEventListener("click",(function(){r(t._id,u,s)})),i.addEventListener("click",(function(){o(t.name,t.link)})),c}function o(t,e){(function(t){return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards/".concat(t),{method:"DELETE",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то не так: ".concat(t.status))}))})(t).then((function(){e.remove()})).catch((function(t){console.log("Ошибка")}))}function r(t,e,n){e.classList.contains("card__like-button_is-active")?function(t){return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards/likes/".concat(t),{method:"DELETE",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то не так: ".concat(t.status))}))}(t).then((function(t){e.classList.remove("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(t){console.log("Ошибка")})):function(t){return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards/likes/".concat(t),{method:"PUT",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то не так: ".concat(t.status))}))}(t).then((function(t){e.classList.add("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(t){console.log("Ошибка")}))}function c(t){t.classList.add("popup_is-opened"),t.classList.add("popup_is-animated"),document.addEventListener("keydown",a)}function i(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}function a(t){"Escape"===t.key&&i(document.querySelector(".popup_is-opened"))}function u(t){t.target.classList.contains("popup_is-opened")&&i(t.currentTarget)}var s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},l=function(t,e,n){var o=e.querySelector(".".concat(n.id,"-error"));n.classList.remove(t.inputErrorClass),o.classList.remove(t.errorClass),o.textContent=""},p=function(t,e){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?l(s,t,e):function(t,e,n,o){var r=e.querySelector(".".concat(n.id,"-error"));n.classList.add(t.inputErrorClass),r.textContent=o,r.classList.add(t.errorClass)}(s,t,e,e.validationMessage)},d=function(t,e,n){!function(t){return t.some((function(t){return!t.validity.valid}))}(e)?(n.disabled=!1,n.classList.remove(t.inactiveButtonClass)):(n.disabled=!0,n.classList.add(t.inactiveButtonClass))},f=function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);n.forEach((function(r){l(e,t,r),d(e,n,o)}))};function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var m,y=document.querySelector(".places__list"),h=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_new-card"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup__image"),E=document.querySelector(".popup_type_image"),k=document.querySelector(".profile__image"),g=document.querySelector(".popup_type_update_avatar"),C=document.querySelectorAll(".popup"),L=document.querySelector(".popup__caption"),j=document.getElementById("edit_profile"),w=document.getElementById("new_place"),x=document.getElementById("update_avatar"),A=document.querySelector(".profile__title"),T=document.querySelector(".profile__description");function P(t,e){q.src=e,q.alt=t,L.textContent=t,c(E)}t().then((function(t){console.log(t)})).catch((function(t){console.log("Ошибка")})),e().then((function(t){console.log(t)})).catch((function(t){console.log("Ошибка")})),Promise.all([t(),e()]).then((function(t){var e,c,i=(c=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,c,i,a=[],u=!0,s=!1;try{if(c=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(a.push(o.value),a.length!==e);u=!0);}catch(t){s=!0,r=t}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw r}}return a}}(e,c)||function(t,e){if(t){if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(t,e):void 0}}(e,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],u=i[1];A.textContent=a.name,T.textContent=a.about,k.src=a.avatar,m=a._id,u.forEach((function(t){y.append(n(t,m,o,P,r)),console.log("Промисы выполнены")}))})).catch((function(t){console.log("Ошибка")})),h.addEventListener("click",(function(){c(v),f(w,s)})),S.addEventListener("click",(function(){O.value=document.querySelector(".profile__title").textContent,I.value=document.querySelector(".profile__description").textContent,c(b),f(j,s)})),k.addEventListener("click",(function(){c(g),f(x,s)})),v.querySelector(".popup__close").addEventListener("click",(function(){w.reset(),i(v)})),b.querySelector(".popup__close").addEventListener("click",(function(){i(b)})),E.querySelector(".popup__close").addEventListener("click",(function(){i(E)})),g.querySelector(".popup__close").addEventListener("click",(function(){x.reset(),i(g)})),C.forEach((function(t){t.addEventListener("click",u)}));var B=w.querySelector(".popup__input_type_card-name"),z=w.querySelector(".popup__input_type_url");w.addEventListener("submit",(function(t){var e,c;t.preventDefault(),(e=B.value,c=z.value,fetch("https://nomoreparties.co/v1/wff-cohort-5/cards",{method:"POST",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"},body:JSON.stringify({name:e,link:c})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то не так: ".concat(t.status))}))).then((function(t){w.querySelector(".popup__button").textContent="Сохранение...",y.prepend(n(t,m,o,P,r)),w.reset(),i(v)})).catch((function(t){console.log("Ошибка")}))}));var O=j.querySelector(".popup__input_type_name"),I=j.querySelector(".popup__input_type_description");j.addEventListener("submit",(function(t){t.preventDefault();var e=I.value;(function(t,e){return fetch("https://nomoreparties.co/v1/wff-cohort-5/users/me",{method:"PATCH",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то не так: ".concat(t.status))}))})(O.value,e).then((function(t){j.querySelector(".popup__button").textContent="Сохранение...",A.textContent=t.name,T.textContent=t.about,j.reset(),i(b)})).catch((function(t){console.log("Ошибка")}))}));var D=document.getElementById("update-avatar-input");x.addEventListener("submit",(function(t){var e;t.preventDefault(),(e=D.value,fetch("https://nomoreparties.co/v1/wff-cohort-5/users/me/avatar",{method:"PATCH",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то не так: ".concat(t.status))}))).then((function(t){x.querySelector(".popup__button").textContent="Сохранение...",k.src=t.avatar,x.reset(),i(g)})).catch((function(t){console.log("Ошибка")}))})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){!function(t,e){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);d(t,n,o),n.forEach((function(r){r.addEventListener("input",(function(){p(e,r),d(t,n,o)}))}))}(t,e)}))}(s)})();