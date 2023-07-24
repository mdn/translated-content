---
title: Node.nodeType
slug: Web/API/Node/nodeType
---

{{APIRef("DOM")}}La propiedad de solo lectura **`Node.nodeType`** retornará un valor positivo entero representando el tipo de nodo.

## Sintaxis

```
var type = node.nodeType;
```

la variable type será un entero positivo con alguno de los siguientes valores:

| Name                                                                    | Value |
| ----------------------------------------------------------------------- | ----- |
| [`ELEMENT_NODE`](/es/docs/Web/API/Element)                              | `1`   |
| `ATTRIBUTE_NODE` {{deprecated_inline()}}                                | `2`   |
| [`TEXT_NODE`](/es/docs/Web/API/Text)                                    | `3`   |
| `CDATA_SECTION_NODE` {{deprecated_inline()}}                            | `4`   |
| `ENTITY_REFERENCE_NODE` {{deprecated_inline()}}                         | `5`   |
| `ENTITY_NODE` {{deprecated_inline()}}                                   | `6`   |
| [`PROCESSING_INSTRUCTION_NODE`](/es/docs/Web/API/ProcessingInstruction) | `7`   |
| [`COMMENT_NODE`](/es/docs/Web/API/document.createComment)               | `8`   |
| [`DOCUMENT_NODE`](/es/docs/Web/HTML/Element/html)                       | `9`   |
| [`DOCUMENT_TYPE_NODE`](/es/docs/Web/API/document.doctype)               | `10`  |
| [`DOCUMENT_FRAGMENT_NODE`](/es/docs/Web/API/DocumentFragment)           | `11`  |
| `NOTATION_NODE` {{deprecated_inline()}}                                 | `12`  |

## Ejemplo

Este es un ejemplo que verifica si el primer nodo dentro de un elemento tipo documento (document) es un comentario nodo, y si no lo es, muestra un mensaje.

```js
var node = document.documentElement.firstChild;
if (node.nodeType != Node.COMMENT_NODE)
  console.log("You should comment your code well!");
```

## Especificación

- [DOM Level 2 Core: Node.nodeType](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-111237558)
- [DOM Level 3 Core: Node.nodeType](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-111237558)
- [DOM Standard](http://dom.spec.whatwg.org/#node)
