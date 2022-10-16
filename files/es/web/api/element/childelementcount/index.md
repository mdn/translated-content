---
title: ParentNode.childElementCount
slug: Web/API/Element/childElementCount
tags:
  - API
  - ChildNode
  - DOM
  - ParentNode
  - childElement
  - children
translation_of: Web/API/ParentNode/childElementCount
original_slug: Web/API/ParentNode/childElementCount
---
{{ APIRef("DOM") }}

La propiedad de sólo lectura **`ParentNode.childElementCount`** devuelve un número del tipo `unsigned long` que representa la cantidad de elementos hijo que penden del elemento padre (ParentNode).

> **Nota:** Esta propiedad fue inicialmente definida en la interfaz pura {{domxref("ElementTraversal")}}. Como esta interfaz contenía dos conjuntos distintos de propiedades: una apuntaba al {{domxref("Node")}} con hijos y otra a los hijos, fueron trasladados a dos interfaces puras separadas: {{domxref("ParentNode")}} y {{domxref("ChildNode")}}. En este caso, `childElementCount` se mudó a {{domxref("ParentNode")}}. Este es un cambio bastante técnico que no debería afectar a la compatibilidad.

## Sintaxis

```
var elCount = elementNodeReference.childElementCount;
```

## Especificaciones

| Espacificación                                                                                                                           | Estado                                   | Comentario                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-parentnode-childElementCount', 'ParentNode.childElementCount')}}         | {{Spec2('DOM WHATWG')}}         | Dividida la interfaz `ElementTraversal` en {{domxref("ChildNode")}} y `ParentNode`. Este método está ahora definido en la segunda. Se implementaron las nuevas interfaces en {{domxref("Document")}} y {{domxref("DocumentFragment")}}. |
| {{SpecName('Element Traversal', '#attribute-childElementCount', 'ElementTraversal.childElementCount')}} | {{Spec2('Element Traversal')}} | Añadida su definición inicial a la interfaz pura `ElementTraversal` y se emplea en {{domxref("Element")}}.                                                                                                                                                  |

## Compatibilidad en navegadores

{{Compat("api.Element.childElementCount")}}

## Véase también

- Las interfaces puras {{domxref("ParentNode")}} y {{domxref("ChildNode")}}.
- Tipos de objeto que implementan estas interfaces: {{domxref("Document")}}, {{domxref("Element")}}, y {{domxref("DocumentFragment")}}.
