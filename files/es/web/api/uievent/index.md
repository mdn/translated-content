---
title: UIEvent
slug: Web/API/UIEvent
---

{{APIRef("DOM Events")}}

The **`UIEvent`** interface represents simple user interface events.

`UIEvent` derives from {{domxref("Event")}}. Though the {{domxref("UIEvent.initUIEvent()")}} method is kept for backward compatibility, creating of a `UIEvent` object should be done using the {{domxref("UIEvent.UIEvent", "UIEvent()")}} constructor.

Several interfaces are direct or indirect descendants of this one: {{domxref("MouseEvent")}}, {{domxref("FocusEvent")}}, {{domxref("KeyboardEvent")}}, {{domxref("WheelEvent")}}, {{domxref("InputEvent")}}, and {{domxref("CompositionEvent")}}.

## Constructors

- {{domxref("UIEvent.UIEvent()", "UIEvent()")}}
  - : Creates a `UIEvent` object.

## Properties

_This interface also inherits properties of its parent, {{domxref("Event")}}._

- {{domxref("UIEvent.cancelBubble")}} {{Deprecated_inline}}{{Non-standard_inline}}
  - : Is a {{jsxref("Boolean")}} indicating whether the bubbling of the event has been canceled or not.

<!---->

- {{domxref("UIEvent.detail")}}{{readonlyinline}}
  - : Returns a `long` that gives some detail about the event, depending on the type of event.
- {{domxref("UIEvent.isChar")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns a {{jsxref("Boolean")}} indicating whether the event produced a key character or not.
- {{domxref("UIEvent.layerX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the horizontal coordinate of the event relative to the current layer.
- {{domxref("UIEvent.layerY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the vertical coordinate of the event relative to the current layer.
- {{domxref("UIEvent.pageX")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the horizontal coordinate of the event relative to the whole document.
- {{domxref("UIEvent.pageY")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the vertical coordinate of the event relative to the whole document.
- {{domxref("UIEvent.view")}}{{readonlyinline}}
  - : Returns a {{domxref("WindowProxy")}} that contains the view that generated the event.
- {{domxref("UIEvent.which")}} {{Non-standard_inline}} {{readonlyinline}}
  - : Returns the numeric `keyCode` of the key pressed, or the character code (`charCode`) for an alphanumeric key pressed.

## Methods

_This interface also inherits methods of its parent, {{domxref("Event")}}._

- {{domxref("UIEvent.initUIEvent()")}} {{deprecated_inline}}
  - : Initializes a `UIEvent` object. If the event has already being dispatched, this method does nothing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("api.UIEvent")}}

## See also

- {{ domxref("Event") }}
