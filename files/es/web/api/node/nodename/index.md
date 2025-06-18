---
title: element.nodeName
slug: Web/API/Node/nodeName
---

{{APIRef("DOM")}}

### Resumen

Devuelve el nombre del nodo actual, en forma de cadena.

### Sintaxis

```
var str = node.nodeName;
```

`str` es una variable de cadena en la que se almacena el nombre del elemento actual.

`nodeName` es un atributo de solo-lectura.

### Notas

Aquí tenemos el valor devuelto por varios tipos de nodo.

| Interfaz                                                        | nodeName                                                                              |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Attr](/es/docs/Web/API/Attr)                                   | igual que [`Attr.name`](/es/docs/DOM/Attr.name)                                       |
| [CDATASection](/es/docs/Web/API/CDATASection)                   | "#cdata-section"                                                                      |
| [Comment](/es/docs/Web/API/Comment)                             | "#comment"                                                                            |
| [Document](/es/docs/Web/API/Document)                           | "#document"                                                                           |
| [DocumentFragment](/es/docs/Web/API/DocumentFragment)           | "#document-fragment"                                                                  |
| [DocumentType](/es/docs/Web/API/DocumentType)                   | igual que [`DocumentType.name`](/es/docs/DOM/DocumentType.name)                       |
| [Element](/es/docs/Web/API/Element)                             | igual que [`Element.tagName`](/es/docs/Web/API/Element/tagName)                       |
| [Entity](/es/docs/DOM/Entity)                                   | nombre de entity                                                                      |
| [EntityReference](/es/docs/DOM/EntityReference)                 | nombre de la identidad de referencia                                                  |
| [Notation](/es/docs/DOM/Notation)                               | nombre de la notación                                                                 |
| [ProcessingInstruction](/es/docs/Web/API/ProcessingInstruction) | igual que [`ProcessingInstruction.target`](/es/docs/DOM/ProcessingInstruction.target) |
| Text                                                            | "#text"                                                                               |

### Ejemplo

Dado el siguiente código:

```
<div id="d1">hola mundo</div>
<input type="text" id="t"/>
```

y el siguiente script:

```
var div1 = document.getElementById("d1");
var text_field = document.getElementById("t");
text_field.value = div1.nodeName;
```

En XHTML (o alguna otra forma de XML) el valor de `text_field` será "div". Sin embargo, en HTML, el valor de `text_field` sería "DIV".

Ten en cuenta que podríamos haber usado la propiedad [`tagName`](/es/docs/Web/API/Element/tagName) en su lugar, ya que `nodeName` tiene el mismo valor que `tagName` para un elemento. Presta atención, sin embargo, a que `nodeName` devolverá `#text` para los nodos de texto, mientras que `tagName` devolverá `undefined`.

### Especificaciones

[DOM Level 2 Core: Node.nodeName](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D095)

[DOM Level 3 Core: Node.nodeName](https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-F68D095)
