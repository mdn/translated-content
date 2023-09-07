---
title: HTMLHyperlinkElementUtils.search
slug: Web/API/HTMLAnchorElement/search
---

{{ApiRef("URL API")}}

Свойство **`HTMLHyperlinkElementUtils.search`** – это {{domxref("USVString")}}, содержащий `'?'` с последующими параметрами URL.

## Синтаксис

```
string = object.search;
object.search = string;
```

## Примеры

```js
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/ru/docs/HTMLHyperlinkElementUtils.search?q=123">
var anchor = document.getElementById("myAnchor");
var result = anchor.search; // Вернёт: '?q=123'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
