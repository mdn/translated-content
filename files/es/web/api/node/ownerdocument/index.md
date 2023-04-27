---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
---

{{APIRef("DOM")}}

La propiedad de lectura **`ownerDocument`** de la interfaz {{domxref("Node")}} devuelve el objeto Document de más alto nivel/jerarquia para ese nodo.

## Sintaxis

```
var document = element.ownerDocument;
```

### Resultado

`document` es el objeto {{domxref("Document")}} de más alto nivel, con el que todos los nodos descendientes se crean. Si la propiedad se usa en un nodo que el mismo es un Document, el resultado es `null`.

## Ejemplo

```js
// dado un nodo "p",  coge el hijo que tenga la más alta jerarquia
// del objeto Document

var d = p.ownerDocument;
var html = d.documentElement;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
