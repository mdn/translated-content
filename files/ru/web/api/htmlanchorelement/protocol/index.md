---
title: "HTMLAnchorElement: свойство protocol"
slug: Web/API/HTMLAnchorElement/protocol
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Свойство **`HTMLAnchorElement.protocol`** — это строка, представляющая схему протокола URL, включая завершающий символ `':'`.

## Значение

Строка.

## Примеры

### Получение протокола из ссылки

```js
// Документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/en-US/docs/HTMLAnchorElement">
const anchor = document.getElementByID("myAnchor");
anchor.protocol; // 'https:'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("HTMLAnchorElement")}}.
