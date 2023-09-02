---
title: HTMLHyperlinkElementUtils.protocol
slug: Web/API/HTMLAnchorElement/protocol
---

{{ApiRef("URL API")}}

Свойство **`HTMLHyperlinkElementUtils.protocol`** – это {{domxref("USVString")}}, содержащий протокол URL включая `':'` в конце.

## Синтаксис

```
string = object.protocol;
object.protocol = string;
```

## Примеры

```js
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLHyperlinkElementUtils.protocol">
var anchor = document.getElementByID("myAnchor");
var result = anchor.protocol; // Вернёт: 'https:'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
