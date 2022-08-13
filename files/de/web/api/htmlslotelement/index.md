---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
tags:
  - API
  - HTMLSlotElement
  - Interface
  - NeedsTranslation
  - Reference
  - TopicStub
  - shadow dom
translation_of: Web/API/HTMLSlotElement
---
{{APIRef('Web Components')}}

The **`HTMLSlotElement`** interface of the [Shadow DOM API](/de/docs/Web/Web_Components/Shadow_DOM) enables access to the name and assigned nodes of an HTML {{HTMLElement("slot")}} element.

## Properties

- {{domxref('HTMLSlotElement.name')}}
  - : {{domxref("DOMString")}}: Can be used to get and set the slot's name.

## Methods

- {{domxref('HTMLSlotElement.assignedNodes()')}}
  - : Returns the sequence of elements assigned to this slot, or alternatively the slot's fallback content.

## Examples

The following snippet is taken from our [slotchange example](https://github.com/mdn/web-components-examples/tree/master/slotchange) ([see it live also](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll('slot');
slots[1].addEventListener('slotchange', function(e) {
  let nodes = slots[1].assignedNodes();
  console.log('Element in Slot "' + slots[1].name + '" changed to "' + nodes[0].outerHTML + '".');
});
```

Here we grab references to all the slots, then add a slotchange event listener to the 2nd slot in the template — which is the one that keeps having its contents changed in the example.

Every time the element inserted in the slot changes, we log a report to the console saying which slot has changed, and what the new node inside the slot is.

## Specifications

| Specification                                                                                            | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG','scripting.html#htmlslotelement','HTMLSlotElement')}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat("api.HTMLSlotElement")}}
