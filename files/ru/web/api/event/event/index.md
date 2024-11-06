---
title: Event()
slug: Web/API/Event/Event
---

{{APIRef("DOM")}}

Конструктор **`Event()`** создаёт новый объект события {{domxref("Event")}}.

## Синтаксис

```
 event = new Event(typeArg, eventInit);
```

### Параметры

- _typeArg_
  - : Строковое ({{domxref("DOMString")}}) значение, представляющее имя события.
- _eventInit_ {{optional_inline}}

  - : Is an `EventInit` dictionary, having the following fields:

    - `"bubbles"`: (Необязательный) логическое значение ({{jsxref("Boolean")}}) указывающее – будет ли событие всплывающим. По умолчанию `false`.
    - `"cancelable"`: (Необязательный) логическое значение ({{jsxref("Boolean")}}) указывает, может ли событие быть отменено. По умолчанию `false`.
    - `"composed"`: (Необязательный) логическое значение {{jsxref("Boolean")}} указывающее – будет ли событие всплывать наружу за пределы shadow root. По умолчанию `false`.

## Пример

```js
//  создать событие "look", событие всплывающее и не может быть отменено

var evt = new Event("look", { bubbles: true, cancelable: false });
document.dispatchEvent(evt);

// событие может быть инициализировано на любом элементе, а не только на документе
myDiv.dispatchEvent(evt);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Event")}}
