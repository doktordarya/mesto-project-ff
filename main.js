(()=>{"use strict";var e=function(){return fetch("https://nomoreparties.co/v1/wff-cohort-5/users/me",{headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то не так: ".concat(e.status))}))},t=function(){return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards",{headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то не так: ".concat(e.status))}))};function n(e,t,n,o,r,c,i,a,u){var s=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),l=s.querySelector(".card__image"),p=s.querySelector(".card__delete-button"),d=s.querySelector(".card__like-button"),f=s.querySelector(".card__likes");return f.textContent=e.likes.length,l.src=e.link,l.alt=e.name,s.querySelector(".card__title").textContent=e.name,t._id===e.owner._id&&(p.classList.add("card__delete-button_visible"),p.addEventListener("click",(function(){r(a,s)}))),d.addEventListener("click",(function(){i(a,d,f)})),l.addEventListener("click",(function(){c(o,n)})),s}function o(e,t){(function(e){return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards/".concat(e),{method:"DELETE",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то не так: ".concat(e.status))}))})(e).then((function(){t.remove()})).catch((function(e){console.log("Ошибка")}))}function r(e,t,n){t.classList.contains("card__like-button_is-active")?function(e){return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то не так: ".concat(e.status))}))}(e).then((function(e){console.log(e),t.classList.remove("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.log("Ошибка")})):function(e){return fetch("https://nomoreparties.co/v1/wff-cohort-5/cards/likes/".concat(e),{method:"PUT",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то не так: ".concat(e.status))}))}(e).then((function(e){console.log(e),t.classList.add("card__like-button_is-active"),n.textContent=e.likes.length})).catch((function(e){console.log("Ошибка")}))}function c(e){e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),document.addEventListener("keydown",a)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function u(e){e.target.classList.contains("popup_is-opened")&&i(e.currentTarget)}var s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},l=function(e,t,n){var o=t.querySelector(".".concat(n.id,"-error"));n.classList.remove(e.inputErrorClass),o.classList.remove(e.errorClass),o.textContent=""},p=function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(s,e,t):function(e,t,n,o){var r=t.querySelector(".".concat(n.id,"-error"));n.classList.add(e.inputErrorClass),r.textContent=o,r.classList.add(e.errorClass)}(s,e,t,t.validationMessage)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(t)?(n.disabled=!1,n.classList.remove(e.inactiveButtonClass)):(n.disabled=!0,n.classList.add(e.inactiveButtonClass))},f=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);n.forEach((function(r){l(t,e,r),d(t,n,o)}))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m,y=document.querySelector(".places__list"),h=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_new-card"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup__image"),g=document.querySelector(".popup_type_image"),k=document.querySelector(".profile__image"),E=document.querySelector(".popup_type_update_avatar"),C=document.querySelectorAll(".popup"),L=document.querySelector(".popup__caption"),j=document.getElementById("edit_profile"),w=document.getElementById("new_place"),x=document.getElementById("update_avatar"),A=document.querySelector(".profile__title"),T=document.querySelector(".profile__description");function P(e,t){q.src=t,q.alt=e,L.textContent=e,c(g)}e().then((function(e){console.log(e)})).catch((function(e){console.log("Ошибка")})),t().then((function(e){console.log(e)})).catch((function(e){console.log("Ошибка")})),Promise.all([e(),t()]).then((function(e){var t,c,i=(c=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,i,a=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(a.push(o.value),a.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw r}}return a}}(t,c)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],u=i[1];A.textContent=a.name,T.textContent=a.about,k.src=a.avatar,a._id,u.forEach((function(e){y.append(n(e,a,e.link,e.name,o,P,r,m)),console.log("Промисы выполнены")}))})).catch((function(e){console.log("Ошибка")})),h.addEventListener("click",(function(){c(v),f(w,s)})),S.addEventListener("click",(function(){I.value=document.querySelector(".profile__title").textContent,O.value=document.querySelector(".profile__description").textContent,c(b),f(j,s)})),k.addEventListener("click",(function(){c(E),f(x,s)})),v.querySelector(".popup__close").addEventListener("click",(function(){w.reset(),i(v)})),b.querySelector(".popup__close").addEventListener("click",(function(){i(b)})),g.querySelector(".popup__close").addEventListener("click",(function(){i(g)})),E.querySelector(".popup__close").addEventListener("click",(function(){x.reset(),i(E)})),C.forEach((function(e){e.addEventListener("click",u)}));var B=w.querySelector(".popup__input_type_card-name"),z=w.querySelector(".popup__input_type_url");w.addEventListener("submit",(function(e){var t,c;e.preventDefault(),w.querySelector(".popup__button").textContent="Сохранение...",(t=B.value,c=z.value,fetch("https://nomoreparties.co/v1/wff-cohort-5/cards",{method:"POST",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"},body:JSON.stringify({name:t,link:c})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то не так: ".concat(e.status))}))).then((function(e){console.log(e),y.prepend(n(card,userInfo,e.link,e.name,o,P,r,m)),w.reset(),i(v)})).catch((function(e){console.log("Ошибка")}))}));var I=j.querySelector(".popup__input_type_name"),O=j.querySelector(".popup__input_type_description");j.addEventListener("submit",(function(e){e.preventDefault(),j.querySelector(".popup__button").textContent="Сохранение...";var t=O.value;(function(e,t){return fetch("https://nomoreparties.co/v1/wff-cohort-5/users/me",{method:"PATCH",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то не так: ".concat(e.status))}))})(I.value,t).then((function(e){console.log(e),A.textContent=e.name,T.textContent=e.about})).catch((function(e){console.log("Ошибка")})),j.reset(),i(b)}));var D=document.getElementById("update-avatar-input");x.addEventListener("submit",(function(e){!function(e){var t;e.preventDefault(),x.querySelector(".popup__button").textContent="Сохранение...",(t=D.value,fetch("https://nomoreparties.co/v1/wff-cohort-5/users/me/avatar",{method:"PATCH",headers:{authorization:"fa9c1e0c-5d9d-42b0-9688-51c0eef5b639","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то не так: ".concat(e.status))}))).then((function(e){k.src=e.link,i(E)})).catch((function(e){console.log("Ошибка")}))}(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);d(e,n,o),n.forEach((function(r){r.addEventListener("input",(function(){p(t,r),d(e,n,o)}))}))}(e,t)}))}(s)})();