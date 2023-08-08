---
title: HTMLHyperlinkElementUtils.username
slug: Web/API/HTMLAnchorElement/username
---

{{ApiRef("URL API")}}

Свойство **`HTMLHyperlinkElementUtils.username`** – это {{domxref("USVString")}}, содержащий имя пользователя, указанное перед именем домена.

## Синтаксис

```
string = object.username;
object.username = string;
```

## Примеры

```js
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/ru/docs/HTMLHyperlinkElementUtils.username">
var anchor = document.getElementByID("myAnchor");
var result = anchor.username; // Вернёт: 'anonymous'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
