---
title: Document.origin
slug: Web/API/origin
tags:
  - API
  - DOM
  - Read-only
  - Интерфейс
  - Свойство
  - Экспериментальный
translation_of: Web/API/Document/origin
original_slug: Web/API/Document/origin
---

{{APIRef("DOM")}}{{SeeCompatTable}}

**Document.origin —** это свойство, доступное только для чтения, которое возвращает **origin** документа. В большинстве случаев это свойство эквивалентно `document.defaultView.location.origin.`

## Примеры

```js
var origin = document.origin;
// На этой странице вернёт:'https://developer.mozilla.org'

var origin = document.origin;
// Для "about:blank" вернёт:'null'

var origin = document.origin;
// Для "data:text/html,<b>foo</b>" вернёт:'null'
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Свойство {{domxref("URLUtils.origin")}}.
