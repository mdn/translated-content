---
title: Node.appendChild()
slug: Web/API/Node/appendChild
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
translation_of: Web/API/Node/appendChild
---
{{APIRef("DOM")}}

Die **`Node.appendChild()`** Methode fügt einen Kind-Knoten am Ende der Liste aller Kinder des angegebenen Eltern-Knotens an (to append = anhängen).

Wenn das gegebene Kind eine Referenz zu einem existierenden Knoten im Dokument ist, wird `appendChild()` es von der aktuellen Position zu der neuen Position bewegen. Es gibt also keine Notwendigkeit den Knoten erst zu entfernen, weil ein Knoten in einem Dokument nicht gleichzeitig an zwei Stellen vorkommen kann. Also, wenn der Knoten bereits einen Eltern-Knoten hat, wird der Knoten zuerst entfernt und dann erneut am Ende der Kind-Knoten-Liste angehängt.

Das {{domxref("Node.cloneNode()")}} kann genutzt werden um eine Kopie des Knotens zu machen, bevor es an einen neuen Eltern-Knoten angehängt wird. Zu beachten: Kopien die mit `cloneNode` gemacht wurden, werden nicht automatisch Synchron gehalten.

## Syntax

    var aChild = element.appendChild(aChild);

## Parameter

`aChild`

Der Knoten, der an den gegebenen Eltern-Knoten angehängt wird (für gewöhnlich ein Element).

## Rückgabewert

Der Rückgabewert ist das angehängte Kindelement (`aChild`), außer wenn aChild ein {{domxref("DocumentFragment")}} ist. In diesem Fall wird ein {{domxref("DocumentFragment")}} zurückgegeben.

## Anmerkungen

Eine Verkettung kann anders ablaufen als erwartet, da appendChild() das Kindelement zurück gibt.

```html
var aBlock = doc.createElement('block').appendChild(doc.createElement('b'));
```

Setzt nur `aBlock` auf `<b></b>`, was möglicherweise nicht das gewünschte ist.

## Beispiele

```js
//  Erstellen Sie ein neues Absatz-Element und fügen Sie es an das Ende des Dokument-Körpers (body)
var p = document.createElement("p");
document.body.appendChild(p);
```

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Kommentar                                        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------ |
| {{SpecName('DOM WHATWG', '#dom-node-appendchild', 'Node.appendChild()')}}         | {{Spec2('DOM WHATWG')}} | No change from {{SpecName("DOM3 Core")}}. |
| {{SpecName('DOM3 Core', 'core.html#ID-184E7107', 'Node.appendChild()')}}         | {{Spec2('DOM3 Core')}}     | No change from {{SpecName("DOM2 Core")}}. |
| {{SpecName('DOM2 Core', 'core.html#ID-184E7107', 'Node.appendChild()')}}         | {{Spec2('DOM2 Core')}}     | No change from {{SpecName("DOM1")}}.     |
| {{SpecName('DOM1', 'level-one-core.html#ID-184E7107', 'Node.appendChild()')}} | {{Spec2('DOM1')}}         | Initial definition.                              |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("ParentNode.append()")}}
