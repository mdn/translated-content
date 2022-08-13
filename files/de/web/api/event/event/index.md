---
title: Event()
slug: Web/API/Event/Event
translation_of: Web/API/Event/Event
---
{{APIRef("DOM")}}

Der Konstruktor: **`Event()`** erstellt ein neues {{domxref("Event")}}.

## Syntax

     event = new Event(typeArg, eventInit);

### Values

- _typeArg_
  - : ist ein {{domxref("DOMString")}} und bestimmt den Namen des Events.
- _eventInit_ {{optional_inline}}
  - : ist ein {{jsxref("Object")}} und beinhaltet folgende Felder:\* `"bubbles"`: (Optional) Ein {{jsxref("Boolean")}}, welcher angibt, ob das Event gebubbled werden soll. Der Standardwert ist `false`.
    - `"cancelable"`: (Optional) Ein {{jsxref("Boolean")}}, welcher angibt, ob das Event abgebrochen werden kann. Der Standardwert `false`.
    - `"composed"`: (Optional) Ein {{jsxref("Boolean")}}, welcher angibt, ob das Event auch außerhalb eines Shadow-Root-Elements empfangen werden kann. Der Standardwert ist `false`.

## Example

```js
// create a look event that bubbles up and cannot be canceled

var evt = new Event("look", {"bubbles":true, "cancelable":false});
document.dispatchEvent(evt);

// event can be dispached from any elmement, not only the document
myDiv.dispatchEvent(evt);
```

## Specifications

| Specification                                                            | Status                           | Comment             |
| ------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG','#interface-event','Event()')}} | {{Spec2('DOM WHATWG')}} | Initial definition. |

## Browser compatibility

{{Compat("api.Event.Event")}}

## See also

- {{domxref("Event")}}
