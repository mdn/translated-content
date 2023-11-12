---
title: HTMLHyperlinkElementUtils.href
slug: Web/API/HTMLAnchorElement/href
---

{{ApiRef("URL API")}}

Свойство **`HTMLHyperlinkElementUtils.href`** – это {{domxref("USVString")}}, содержащий URL целиком.

## Синтаксис

```
string = object.href;
object.href = string;
```

## Примеры

```js
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLHyperlinkElementUtils/href">
var anchor = document.getElementById("myAnchor");
var result = anchor.href; // Вернёт: 'https://developer.mozilla.org/en-US/HTMLHyperlinkElementUtils/href'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
