---
title: HTMLSlotElement.assignedNodes()
slug: Web/API/HTMLSlotElement/assignedNodes
translation_of: Web/API/HTMLSlotElement/assignedNodes
---
{{APIRef("Shadow DOM API")}}

Die Eigenschaft **`assignedNodes()`** der Schnittstelle {{domxref("HTMLSlotElement")}} gibt die Reihenfolge der diesem Slot zugewiesenen Elemente oder alternativ den Fallback-Inhalt des Slots zurück.

## Syntax

    var assignedNodes[] = HTMLSlotElement.assignedNodes([options])

### Parameter

- options {{optional_inline}}
  - : Ein Objekt, das Optionen für die zurückzugebenden Knoten festlegt. Die verfügbaren Optionen sind:\* `flatten`: Ein {{jsxref('Boolean')}}, das angibt, ob die dem Slot zugewiesenen Elemente zurückgegeben werden sollen (wenn dieser Wert `false` ist) oder der Fallback-Inhalt des Slots (wenn dieser Wert `true` ist). Die Vorgabe ist `false`.

### Rückgabewerte

Ein Array von Knoten.

## Beispiele

Das folgende Schnippsel ist unserem [Slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/master/slotchange) entnommen ([siehe auch live](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll('slot');
slots[1].addEventListener('slotchange', function(e) {
  let nodes = slots[1].assignedNodes();
  console.log('Element in Slot "' + slots[1].name + '" changed to "' + nodes[0].outerHTML + '".');
});
```

Hier nehmen wir Verweise auf alle Slots und fügen dann einen Slotchange Event Listener zum zweiten Slot in der Vorlage hinzu - derjenige, dessen Inhalt im Beispiel geändert wird.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, protokollieren wir einen Bericht an die Konsole, aus dem hervorgeht, welcher Slot sich geändert hat und was der neue Knoten im Slot ist.

## Spezifikationen

| Specification                                                                                                    | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG','scripting.html#dom-slot-assignednodes','assignedNodes')}} | {{Spec2('HTML WHATWG')}} |         |

## Browser Kompatibilität

{{Compat("api.HTMLSlotElement.assignedNodes")}}
