---
title: Node.isSameNode()
slug: Web/API/Node/isSameNode
translation_of: Web/API/Node/isSameNode
---
{{APIRef("DOM")}} {{Obsolete_header}}

**`Node.isSameNode()`** comprueba si dos nodos son iguales, es decir si hacen referencia al mismo objecto.

> **Nota:** **Warning:** This method is no longer implemented in recent browsers.```js
> // Instead of using
> node1.isSameNode(node2)
>
> // use
> node1 === node2 // or
> node1 == node2
>
> ```
>
> ```

## Sintaxis

    var isSameNode = node.isSameNode(other);

- `other` El nodo contra el cual se realiza la comparación.

## Especificaciones

| Specification                                                                                        | Status                           | Comment                         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------- |
| {{SpecName('DOM WHATWG', '#interface-node', 'Node')}}                             | {{Spec2('DOM WHATWG')}} | Eliminado de la especificación. |
| {{SpecName('DOM3 Core', 'core.html#Node3-isSameNode', 'Node.isSameNode()')}} | {{Spec2('DOM3 Core')}}     | Definición inicial              |

## Compatibilidad entre navegadores

{{Compat("api.Node.isSameNode")}}

## Ver además

- {{domxref("Node.isEqualNode()")}}
