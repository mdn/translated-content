---
title: "HTMLAnchorElement: свойство password"
slug: Web/API/HTMLAnchorElement/password
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Свойство **`HTMLAnchorElement.password`** — это строка, содержащая пароль, указанный перед именем домена.

Игнорируется, если свойство [`username`](/ru/docs/Web/API/HTMLAnchorElement/username) не установлено.

## Значение

Строка.

## Примеры

```js
// Документ содержит элемент <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAnchorElement">
const anchor = document.getElementByID("myAnchor");
anchor.password; // вернёт 'flabada'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("HTMLAnchorElement")}}.
