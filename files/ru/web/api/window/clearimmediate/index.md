---
title: "Window: метод clearImmediate()"
slug: Web/API/Window/clearImmediate
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("HTML DOM")}} {{deprecated_header}}{{non-standard_header}}

Данный метод очищает действие, определённое методом {{DOMxRef("window.setImmediate")}}.

## Синтаксис

```js-nolint
clearImmediate(immediateID)
```

### Параметры

- `immediateID`
  - : ID, возвращаемый {{DOMxRef("window.setImmediate")}}.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

## Примеры

```js
let immediateID = setImmediate(() => {
  // Выполнение необходимого кода
});

document.getElementById("button").addEventListener(() => {
  clearImmediate(immediateID);
});
```

## Спецификации

Не является частью какой-либо спецификации.
Спецификация [Efficient Script Yielding](https://w3c.github.io/setImmediate/#si-setImmediate) больше не разрабатывается.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `clearImmediate` в `core-js`](https://github.com/zloirock/core-js#setimmediate)
- {{DOMxRef("Window.setImmediate()")}}
