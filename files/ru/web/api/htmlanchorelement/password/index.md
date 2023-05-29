---
title: HTMLHyperlinkElementUtils.password
slug: Web/API/HTMLAnchorElement/password
tags:
  - API
  - Experimental
  - HTMLHyperlinkElementUtils
  - Property
  - URL API
translation_of: Web/API/HTMLHyperlinkElementUtils/password
original_slug: Web/API/HTMLHyperlinkElementUtils/password
---

{{ApiRef("URL API")}}

Свойство **`HTMLHyperlinkElementUtils.password`** – это {{domxref("USVString")}}, содержащий пароль, указанный перед именем домена.

`password` игнорируется без предупреждения, если свойство [`username`](/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username) не установлено.

## Синтаксис

```
string = object.password;
object.password = string;
```

## Примеры

```js
// Допустим, что документ содержит элемент <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLHyperlinkElementUtils.username">
var anchor = document.getElementByID("myAnchor");
var result = anchor.password; // Вернёт: 'flabada'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
