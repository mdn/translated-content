---
title: HTMLHyperlinkElementUtils.hostname
slug: Web/API/HTMLAnchorElement/hostname
---

{{ApiRef("URL API")}}

Свойство **`HTMLHyperlinkElementUtils.hostname`** – это {{domxref("USVString")}}, содержащий домен.

## Синтаксис

```
string = object.hostname;
object.hostname = string;
```

## Примеры

```js
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/ru/docs/HTMLHyperlinkElementUtils.hostname">
var anchor = document.getElementByID("myAnchor");
var result = anchor.hostname; // Вернёт: 'developer.mozilla.org'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
