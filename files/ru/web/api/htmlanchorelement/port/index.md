---
title: "HTMLAnchorElement: свойство port"
slug: Web/API/HTMLAnchorElement/port
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Свойство **`HTMLAnchorElement.port`** — это строка, содержащая номер порта сервера, указанный в URL. Если в URL явно не указан номер порта, то значение этого свойства будет установлено в `''`.

## Значение

Строка.

## Примеры

### Получение номера порта из ссылки

```js
// Документ содержит элемент <a id="myAnchor" href="https://developer.mozilla.org:443/en-US/docs/HTMLAnchorElement">
const anchor = document.getElementByID("myAnchor");
anchor.port; // '443'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("HTMLAnchorElement")}}.
