---
title: transitionend
slug: Web/API/Element/transitionend_event
---

Событие `transitionend` срабатывает, когда [CSS transition](/ru/docs/CSS/Using_CSS_transitions) закончил своё выполнение. В случае, когда анимация удаляется до её завершения(например, если [transition-property \[en-US\]](/ru/docs/Web/CSS/transition-property) удаляется), то событие не срабатывает.

## Общая информация

- Интерфейс
  - : {{domxref("TransitionEvent")}}
- Всплывает
  - : Да
- Отменяемое
  - : Да
- Элемент
  - : {{domxref("document")}}, {{domxref("element")}}
- Действие по умолчанию
  - : Нет

## Свойства

| Property                           | Type                       | Description                                                                                                                                                                                                                                                                                                |
| ---------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                                                                                                                                                                                                                                     |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}   | The type of event.                                                                                                                                                                                                                                                                                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.                                                                                                                                                                                                                                                                 |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.                                                                                                                                                                                                                                                                   |
| `propertyName` {{readonlyInline}}  | {{domxref("DOMString")}}   | The name of the CSS property associated with the transition.                                                                                                                                                                                                                                               |
| `elapsedTime` {{readonlyInline}}   | Float                      | The amount of time the transition has been running, in seconds, as of the time the event was generated. This value is not affected by the value of `transition-delay`.                                                                                                                                     |
| `pseudoElement` {{readonlyInline}} | {{domxref("DOMString")}}   | The name (beginning with two colons) of the CSS pseudo-element on which the transition occured (in which case the target of the event is that pseudo-element's corresponding element), or the empty string if the transition occurred on an element (which means the target of the event is that element). |

## Пример

```js
/*
 * Обрабатывать событие transitionend на определённом элементе, т.е. #slidingMenu
 * Затем, вызвать определённую функцию, т.е. showMessage()
 */
function showMessage() {
  alert("Transition закончил своё выполнение");
}

var element = document.getElementById("slidingMenu");
element.addEventListener("transitionend", showMessage, false);
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Также

- The {{ domxref("TransitionEvent") }} interface and the [`transitionend`](/ru/docs/Mozilla_event_reference/transitionend) event.
