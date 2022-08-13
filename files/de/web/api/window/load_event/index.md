---
title: load
slug: Web/API/Window/load_event
translation_of: Web/API/Window/load_event
original_slug: Web/Events/load
---
Das `load` Ereignis wird ausgelöst, sobald eine Ressource und die von ihr abhängigen Ressourcen das Laden beendet haben.

## General info

- Spezifikation
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-load)
- Schnittstelle
  - : UIEvent
- bubbles
  - : Nein
- cancelable
  - : Nein
- Ziel
  - : Window,Document,Element
- Default Action
  - : None.

## Properties

| Property                              | Type                                                                                                                                                         | Description                                                                                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | [`EventTarget`](/de/docs/Web/API/EventTarget "EventTarget is an interface implemented by objects that can receive events and may have listeners for them.")  | The event target (the topmost target in the DOM tree).                                                                                                                                                             |
| `type` {{readonlyInline}}       | [`DOMString`](/de/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") | The type of event.                                                                                                                                                                                                 |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/de/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event normally bubbles or not.                                                                                                                                                                         |
| `cancelable` {{readonlyInline}} | [`Boolean`](/de/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event is cancellable or not.                                                                                                                                                                           |
| `view` {{readonlyInline}}       | [`WindowProxy`](/de/docs/Web/API/WindowProxy "The documentation about this has not yet been written; please consider contributing!")                         | [`document.defaultView`](/de/docs/Web/API/Document/defaultView "In browsers, document.defaultView returns the window object associated with a document, or null if none is available.") (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                                                                                                                             | 0.                                                                                                                                                                                                                 |

## Example

```html
<script>
  window.addEventListener("load", function(event) {
    console.log("Alle Ressourcen haben das Laden beendet!");
  });
</script>
```

## Related Events

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
