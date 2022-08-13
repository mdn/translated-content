---
title: Event
slug: Web/API/Event
tags:
  - API
  - DOM
  - Event
  - Interface
  - NeedsTranslation
  - Reference
  - TopicStub
  - UI
translation_of: Web/API/Event
---
{{APIRef("DOM")}}

Das **`Event`** Interface repräsentiert jegliches Ereignis, das im DOM auftritt.

Ein Ereignis kann durch Benutzerinteraktion ausgelöst werden, z.B das Klicken einer Maustaste oder Eingaben der Tastatur, oder durch eine API generiert werden um den Fortschritt eines asynchronen Prozesses zu repräsentieren. Es kann auch durch ein Programm ausgelöst werden, beispielsweise indem die [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click "The HTMLElement.click() method simulates a mouse click on an element.") Method eines Elements aufgerufen wird, oder indem ein Ereignis definiert wird und es danach mithilfe von [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent "Dispatches an Event at the specified EventTarget, (synchronously) invoking the affected EventListeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().") an ein Ziel versandt wird.

Es gibt eine Vielzahl verschiedener Typen von Ereignissen, von denen manche erweiterte Schnittstellen basieren auf dem zentralen **`Event`** Interface benutzen. **`Event`** beinhaltet alle Attribute und Methoden, die allen Ereignissen gemein sind.

Viele DOM-Element können für das Empfangen dieser Events konfiguriert werden und rufen Code auf, um sie zu behandeln. Event-Handler werden normalerweise mit unterschiedlichen [HTML-Elementen](/de/docs/Web/HTML/Element) (so wie `<button>`, `<div>`, `<span>`, etc.) verbunden, durch den Aufruf von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener "The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target."). Dies ersetzt größtenteils die alten HTML Event Handler Attribute. Die neueren Event-Handler können außerdem nötigenfalls mithilfe von [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener "The EventTarget.removeEventListener() method removes from the EventTarget an event listener previously registered with EventTarget.addEventListener(). The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process; see Matching event listeners for removal") wieder entfernt werden.

> **Note:** Ein Element kann mehrere solcher Handler besitzen, sogar für das selbe Ereignis—so können sie verschiedene, unabhängige Code-Module angebracht werden, jeweils für deren unabhängige Zwecke. (Zum Beispiel eine Webseite mit einem Werbemodul und einem Statistikmodel, die beide Videowiedergabe überwachen.)

Gitb es viele verschachtelte Element, jedes mit eigenen Event-Handlern, kann das Verarbeiten von Ereignissen siehr schnell komplex werden—im Speziellen wenn ein Elternelement die selben Ereignissen wie sein Kindelement empfängt, weil sie sich überlappen und so Ereignisse technisch gesehen in beiden geschehen. Die Behandlungsreihenfolge solcher Ereignisse hängen von [Event bubbling and capture](/de/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture) Konfigurationen jedes ausgelösten Event-Handlers ab.

## Interfaces based on `Event`

Below is a list of interfaces which are based on the main `Event` interface, with links to their respective documentation in the MDN API reference. Note that all event interfaces have names which end in "Event".

- {{domxref("AnimationEvent")}}
- {{domxref("AudioProcessingEvent")}}
- {{domxref("BeforeInputEvent")}}
- {{domxref("BeforeUnloadEvent")}}
- {{domxref("BlobEvent")}}
- {{domxref("ClipboardEvent")}}
- {{domxref("CloseEvent")}}
- {{domxref("CompositionEvent")}}
- {{domxref("CSSFontFaceLoadEvent")}}
- {{domxref("CustomEvent")}}
- {{domxref("DeviceLightEvent")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DeviceProximityEvent")}}
- {{domxref("DOMTransactionEvent")}}
- {{domxref("DragEvent")}}
- {{domxref("EditingBeforeInputEvent")}}
- {{domxref("ErrorEvent")}}
- {{domxref("FetchEvent")}}
- {{domxref("FocusEvent")}}
- {{domxref("GamepadEvent")}}
- {{domxref("HashChangeEvent")}}
- {{domxref("IDBVersionChangeEvent")}}
- {{domxref("InputEvent")}}
- {{domxref("KeyboardEvent")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MessageEvent")}}
- {{domxref("MouseEvent")}}
- {{domxref("MutationEvent")}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("PageTransitionEvent")}}
- {{domxref("PointerEvent")}}
- {{domxref("PopStateEvent")}}
- {{domxref("ProgressEvent")}}
- {{domxref("RelatedEvent")}}
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCIdentityErrorEvent")}}
- {{domxref("RTCIdentityEvent")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("SensorEvent")}}
- {{domxref("StorageEvent")}}
- {{domxref("SVGEvent")}}
- {{domxref("SVGZoomEvent")}}
- {{domxref("TimeEvent")}}
- {{domxref("TouchEvent")}}
- {{domxref("TrackEvent")}}
- {{domxref("TransitionEvent")}}
- {{domxref("UIEvent")}}
- {{domxref("UserProximityEvent")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## Constructor

- {{domxref("Event.Event", "Event()")}}
  - : Creates an `Event` object, returning it to the caller.

## Properties

- {{domxref("Event.bubbles")}} {{readonlyinline}}
  - : A Boolean indicating whether the event bubbles up through the DOM or not.
- {{domxref("Event.cancelBubble")}}
  - : A historical alias to {{domxref("Event.stopPropagation()")}}. Setting its value to `true` before returning from an event handler prevents propagation of the event.
- {{domxref("Event.cancelable")}} {{readonlyinline}}
  - : A Boolean indicating whether the event is cancelable.
- {{domxref("Event.composed")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether or not the event can bubble across the boundary between the shadow DOM and the regular DOM.
- {{domxref("Event.currentTarget")}} {{readonlyinline}}
  - : A reference to the currently registered target for the event. This is the object to which the event is currently slated to be sent; it's possible this has been changed along the way through _retargeting_.
- {{domxref("Event.deepPath")}} {{non-standard_inline}}
  - : An {{jsxref("Array")}} of DOM {{domxref("Node")}}s through which the event has bubbled.
- {{domxref("Event.defaultPrevented")}} {{readonlyinline}}
  - : Indicates whether or not {{domxref("event.preventDefault()")}} has been called on the event.
- {{domxref("Event.eventPhase")}} {{readonlyinline}}
  - : Indicates which phase of the event flow is being processed.
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : The explicit original target of the event (Mozilla-specific).
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{readonlyinline}}
  - : The original target of the event, before any retargetings (Mozilla-specific).
- {{domxref("Event.returnValue")}} {{non-standard_inline}}
  - : A non-standard alternative (from old versions of Microsoft Internet Explorer) to {{domxref("Event.preventDefault()")}} and {{domxref("Event.defaultPrevented")}}.
- {{domxref("Event.scoped")}} {{readonlyinline}} {{obsolete_inline}}
  - : A {{jsxref("Boolean")}} indicating whether the given event will bubble across through the shadow root into the standard DOM. This property has been renamed to {{domxref("Event.composed", "composed")}}.
- {{domxref("Event.srcElement")}} {{non-standard_inline}}
  - : A non-standard alias (from old versions of Microsoft Internet Explorer) for {{domxref("Event.target")}}.
- {{domxref("Event.target")}} {{readonlyinline}}
  - : A reference to the target to which the event was originally dispatched.
- {{domxref("Event.timeStamp")}} {{readonlyinline}}
  - : The time at which the event was created, in milliseconds. By specification, this value is time since epoch, but in reality browsers' definitions vary; in addition, work is underway to change this to be a {{domxref("DOMHighResTimeStamp")}} instead.
- {{domxref("Event.type")}} {{readonlyinline}}
  - : The name of the event (case-insensitive).
- {{domxref("Event.isTrusted")}} {{readonlyinline}}
  - : Indicates whether or not the event was initiated by the browser (after a user click for instance) or by a script (using an event creation method, like [event.initEvent](/de/docs/DOM/event.initEvent))

## Methods

- {{domxref("Event.initEvent()")}} {{deprecated_inline}}
  - : Initializes the value of an Event created. If the event has already being dispatched, this method does nothing.
- {{domxref("Event.preventBubble()")}} {{non-standard_inline}} {{Obsolete_inline(24)}}
  - : Prevents the event from bubbling. Obsolete, use {{domxref("event.stopPropagation")}} instead.
- {{domxref("Event.preventCapture()")}} {{non-standard_inline}} {{Obsolete_inline(24)}}
  - : Obsolete, use {{domxref("event.stopPropagation")}} instead.
- {{domxref("Event.preventDefault()")}}
  - : Cancels the event (if it is cancelable).
- {{domxref("Event.stopImmediatePropagation()")}}
  - : For this particular event, no other listener will be called. Neither those attached on the same element, nor those attached on elements which will be traversed later (in capture phase, for instance)
- {{domxref("Event.stopPropagation()")}}
  - : Stops the propagation of events further along in the DOM.
- {{domxref("Event.getPreventDefault()")}} {{non-standard_inline}}
  - : Non-standard. Returns the value of {{domxref("Event.defaultPrevented")}}. Use {{domxref("Event.defaultPrevented")}} instead.

## Specifications

| Specification                                                            | Status                           | Comment |
| ------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('DOM WHATWG', '#interface-event', 'Event')}} | {{Spec2('DOM WHATWG')}} |         |

## Browser compatibility

{{Compat}}

\[1] Previous to Firefox 52, this property was defined on the {{domxref("UIEvent")}} interface. See {{bug(1298970)}} for more details.

## See also

- Types of events available: [Event reference](/de/docs/Web/Reference/Events)
- [Comparison of Event Targets](/de/docs/Web/API/Event/Comparison_of_Event_Targets) (target vs currentTarget vs relatedTarget vs originalTarget)
- [Creating and triggering custom events](/de/docs/Web/Guide/DOM/Events/Creating_and_triggering_events)
- For Firefox add-on developers:

  - [Listening to events in Firefox extensions](/de/docs/Listening_to_events_in_Firefox_extensions)
  - [Listening to events on all tabs](/de/docs/Listening_to_events_on_all_tabs)
