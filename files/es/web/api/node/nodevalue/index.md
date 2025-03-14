---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
---

{{APIRef("DOM")}}

La propiedad **`Nodo.nodeValue`** devuelve o actualiza el valor del nodo actual.

## Sintaxis

```
valor= nodo.nodeValue;
```

`valor` es una cadena contenedora del valor del nodo actual, si es que tiene alguno.

## Notas

Para el nodo en si, `nodeValue` devuelve `null`. Para texto, comentarios, y nodos CDATA, `nodeValue` devuelve el contenido de dicho nodo. Para nodos atributos, el valor del atributo es devuelto.

La siguiente table muestra los distintos valores retornados por los diferentes elementos.

| Atributo              | valor del atributo                      |
| --------------------- | --------------------------------------- |
| CDATASection          | contenido de la sección CDATA           |
| Comment               | Contenido del comentario                |
| Document              | null                                    |
| DocumentFragment      | null                                    |
| DocumentType          | null                                    |
| Element               | null                                    |
| NamedNodeMap          | null                                    |
| EntityReference       | null                                    |
| Notation              | null                                    |
| ProcessingInstruction | Todo el contexto excluyendo el objetivo |
| Text                  | Contenido del nodo de texto             |

Cuando `nodeValue` es definido como `null`, actualizarlo no tiene efecto.

## Especificación

- [DOM Level 2 Core: Node.nodeValue](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080)
