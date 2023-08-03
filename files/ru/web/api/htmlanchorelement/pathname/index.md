---
title: HTMLHyperlinkElementUtils.pathname
slug: Web/API/HTMLAnchorElement/pathname
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
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/ru/docs/HTMLHyperlinkElementUtils.pathname">
var anchor = document.getElementById("myAnchor");
var result = anchor.pathname; // Вернёт: '/ru/docs/HTMLHyperlinkElementUtils.pathname'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
