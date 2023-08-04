---
title: HTMLHyperlinkElementUtils.hash
slug: Web/API/HTMLAnchorElement/hash
---

{{ APIRef("URLUtils") }}

Свойство **`HTMLHyperlinkElementUtils.hash`** – это {{domxref("USVString")}}, содержащий `'#'` с последующим идентификатором. Идентификатор не декодирован.

## Синтаксис

```
string = object.hash;
object.hash = string;
```

## Примеры

```js
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org/ru/docs/HTMLHyperlinkElementUtils.href#youhou">
var anchor = document.getElementByID("myAnchor");
var result = anchor.hash; // Вернёт: '#youhou'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
