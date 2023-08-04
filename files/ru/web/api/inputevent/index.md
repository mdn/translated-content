---
title: InputEvent
slug: Web/API/InputEvent
---

{{APIRef("DOM Events")}} {{SeeCompatTable}}

The **`InputEvent`** interface represents an event notifying of editable content change.

{{InheritanceDiagram}}

## Конструктор

- {{domxref("InputEvent.InputEvent", "InputEvent()")}}
  - : Создаёт `InputEvent` объект.

## Свойства

This interface inherits properties from its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}.

- {{domxref("InputEvent.data")}}{{readOnlyInline}}
  - : Returns a {{domxref("DOMString")}} with the inserted characters. This may be an empty string if the change doesn't insert text (such as when deleting characters, for example).
- {{domxref("InputEvent.dataTransfer")}}{{readonlyinline}}
  - : Returns a {{domxref("DataTransfer")}} object containing information about richtext or plaintext data being added to or removed from editable content.
- {{domxref("InputEvent.inputType")}}{{readonlyinline}}
  - : Returns the type of change for editable content such as, for example, inserting, deleting, or formatting text. See the property page for a complete list of input types.
- {{domxref("InputEvent.isComposing")}}{{readOnlyInline}}
  - : Returns a {{jsxref("Boolean")}} value indicating if the event is fired after {{event("compositionstart")}} and before {{event("compositionend")}}.

## Methods

This interface inherits methods from its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}.

- {{domxref('InputEvent.getTargetRanges()')}}
  - : Returns an array of static ranges that will be affected by a change to the DOM if the input event is not canceled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ event("beforeinput") }}
- [`input` event](/ru/docs/Web/API/InputEvent/input_event)
