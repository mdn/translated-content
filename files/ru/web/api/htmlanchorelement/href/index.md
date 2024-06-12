---
title: "HTMLAnchorElement: свойство href"
slug: Web/API/HTMLAnchorElement/href
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Свойство **`HTMLAnchorElement.href`** — это {{Glossary("stringifier", "строковый преобразователь")}}, который возвращает строку, содержащую полный URL, и позволяет его изменять.

## Значение

Строка.

## Примеры

```js
// Документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement">
const anchor = document.getElementById("myAnchor");
anchor.href; // вернёт 'https://developer.mozilla.org/en-US/HTMLAnchorElement'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("HTMLAnchorElement")}}.
