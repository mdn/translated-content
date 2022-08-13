---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
tags:
  - API
  - DOM
  - Nodo
  - Propiedad
  - Referencia
translation_of: Web/API/Node/ownerDocument
---
{{APIRef("DOM")}}

La propiedad de lectura **`ownerDocument`** de la interfaz {{domxref("Node")}} devuelve el objeto Document de más alto nivel/jerarquia para ese nodo.

## Sintaxis

    var document = element.ownerDocument;

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

| Especificación                                                                                       | Estado                       | Comentario         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("DOM4", "#dom-node-ownerdocument", "Node.ownerDocument")}}         | {{Spec2("DOM4")}}     |                    |
| {{SpecName("DOM3 Core", "core.html#node-ownerDoc", "Node.ownerDocument")}} | {{Spec2("DOM3 Core")}} | No change          |
| {{SpecName("DOM2 Core", "core.html#node-ownerDoc", "Node.ownerDocument")}} | {{Spec2("DOM2 Core")}} | Initial definition |

## Compatibilidad de navegador

{{Compat("api.Node.ownerDocument")}}
