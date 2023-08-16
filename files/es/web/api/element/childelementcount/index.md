---
title: ParentNode.childElementCount
slug: Web/API/Element/childElementCount
---

{{ APIRef }}

La propiedad de sólo lectura `ParentNode.childElementCount` devuelve un número del tipo `unsigned long` que representa la cantidad de elementos hijo que penden del elemento padre (ParentNode).

> **Nota:** Esta propiedad fue inicialmente definida en la interfaz pura {{domxref("ElementTraversal")}}. Como esta interfaz contenía dos conjuntos distintos de propiedades: una apuntaba al {{domxref("Node")}} con hijos y otra a los hijos, fueron trasladados a dos interfaces puras separadas: {{domxref("ParentNode")}} y {{domxref("ChildNode")}}. En este caso, `childElementCount` se mudó a {{domxref("ParentNode")}}. Este es un cambio bastante técnico que no debería afectar a la compatibilidad.

## Sintaxis

```js
var elCount = elementNodeReference.childElementCount;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Las interfaces puras {{domxref("ParentNode")}} y {{domxref("ChildNode")}}.
- Tipos de objeto que implementan estas interfaces: {{domxref("Document")}}, {{domxref("Element")}}, y {{domxref("DocumentFragment")}}.
