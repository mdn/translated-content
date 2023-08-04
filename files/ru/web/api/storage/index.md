---
title: Storage
slug: Web/API/Storage
---

{{APIRef("Web Storage API")}}

`Интерфейс Storage` из Web Storage API предоставляет доступ для session storage или local storage для конкретного домена, позволяя вам к примеру добавлять, изменять или удалять сохранённые элементы данных.

Если вы хотите управлять session storage для домена, вы вызываете {{domxref("Window.sessionStorage")}} метод; Если вы хотите управлять local storage домена, вы вызываете {{domxref("Window.localStorage")}}.

## Свойства

- {{domxref("Storage.length")}} {{readonlyInline}}
  - : Возвращает число, представляющее количество элементов в объекте `Storage`.

## Методы

- {{domxref("Storage.key()")}}
  - : Приняв число n, метод вернёт имя n-ного ключа в Storage

<!---->

- {{domxref("Storage.getItem()")}}
  - : Приняв имя ключа, метод вернёт для него значение.
- {{domxref("Storage.setItem()")}}
  - : Приняв имя ключа и значение, метод добавит этот ключ в Storage или обновит его значение, если ключ уже существовал.
- {{domxref("Storage.removeItem()")}}
  - : Приняв имя ключа, метод удалит этот ключ из Storage
- {{domxref("Storage.clear()")}}
  - : При вызове метод удалит все ключи из Storage.

## Примеры

В данном примере мы получаем доступ к объекту Storage вызывая localStorage. Для начала мы проверяем содержит ли local storage элементы данных используя `!localStorage.getItem('bgcolor')`. Если да, мы вызываем функцию `setStyles()` которая получает элементы данных используя {{domxref("localStorage.getItem()")}} и использует их значения для обновления стилей на странице. Если нет, мы вызывает другую функцию, `populateStorage()`, которая использует {{domxref("localStorage.setItem()")}} что бы установить значения для элементов, потом вызываем `setStyles()`.

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}

function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> **Примечание:** Если хотите увидеть данный пример в работе, посмотрите наше [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Используя Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
