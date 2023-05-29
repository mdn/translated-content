---
title: Event.cancelable
slug: Web/API/Event/cancelable
translation_of: Web/API/Event/cancelable
---
{{ ApiRef("DOM") }}

## Описание

Указывает, является ли событие отменяемым.

## Синтаксис

```
bool = event.cancelable
```

- Возвращает булево значение `true`, если событие может быть отменено.

## Пример

```js
var bool = event.cancelable;
```

`bool` содержит `true` или `false` в зависимости от того, можно ли предотвратить действие события по умолчанию или нет.

## Примечание

Независимо от того, может событие быть отменено или нет, свойство определяется при инициализации события.

Вызов на событии метода {{domxref("event.preventDefault", "preventDefault()")}} отменяет событие. При этом действие по умолчанию, связанное с событием, не выполняется.

## Спецификации

- [DOM Level 2 Events: cancelable](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event-canCancel)
