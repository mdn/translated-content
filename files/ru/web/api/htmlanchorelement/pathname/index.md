---
title: HTMLHyperlinkElementUtils.pathname
slug: Web/API/HTMLAnchorElement/pathname
tags:
  - API
  - Experimental
  - HTMLHyperlinkElementUtils
  - Property
  - URL API
translation_of: Web/API/HTMLHyperlinkElementUtils/pathname
original_slug: Web/API/HTMLHyperlinkElementUtils/pathname
---

{{ApiRef("URL API")}}

Свойство **`HTMLHyperlinkElementUtils.pathname`** – это {{domxref("USVString")}}, содержащий первый `'/'` после хоста с последующим текстом URL.

## Синтаксис

```
string = object.pathname;
object.pathname = string;
```

## Примеры

```js
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/en-US/docs/HTMLHyperlinkElementUtils.pathname">
var anchor = document.getElementById("myAnchor");
var result = anchor.pathname; // Вернёт: '/en-US/docs/HTMLHyperlinkElementUtils.pathname'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
