---
title: HTMLHyperlinkElementUtils.toString()
slug: Web/API/HTMLAnchorElement/toString
---

{{ApiRef("URL API")}}

Метод **`HTMLHyperlinkElementUtils.toString()`** возвращает {{domxref("USVString")}}, содержащий URL целиком. Это версия {{domxref("HTMLHyperlinkElementUtils.href")}} только для чтения.

## Синтаксис

```
string = object.toString();
```

## Примеры

```js
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/ru/docs/HTMLHyperlinkElementUtils/toString">
var anchor = document.getElementById("myAnchor");
var result = anchor.toString(); // Вернёт: 'https://developer.mozilla.org/ru/docs/HTMLHyperlinkElementUtils/toString'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит этот метод.
