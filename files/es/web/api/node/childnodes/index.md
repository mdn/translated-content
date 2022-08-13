---
title: Node.childNodes
slug: Web/API/Node/childNodes
tags:
  - API
  - DOM
  - Propiedad
  - Referencia
  - Referência DOM
translation_of: Web/API/Node/childNodes
---
{{APIRef("DOM")}}

La propiedad de solo lectura **`Node.childNodes`** devuelve una colección de hijos {{domxref("Node","nodes")}} del elemento dado donde el primer nodo hijo es asignado un índice 0.

## Sintaxis

    var nodeList = elementNodeReference.childNodes;

## Ejemplos

### Uso simple

```js
// parg is an object reference to a <p> element

// First check that the element has child nodes
if (parg.hasChildNodes()) {
  var children = parg.childNodes;

  for (var i = 0; i < children.length; i++) {
    // do something with each child as children[i]
    // NOTE: List is live, adding or removing children will change the list
  }
}
```

### Eliminar todos los hijos de un nodo

```js
// This is one way to remove all children from a node
// box is an object reference to an element

while (box.firstChild) {
    //The list is LIVE so it will re-index each call
    box.removeChild(box.firstChild);
}
```

## Notas

Los items en una colección de nodos son objetos y no cadenas de caracteres. Para obtener los datos de los objetos del nodo, use sus propiedades (ej. `elementNodeReference.childNodes[1].nodeName` para obtener el nombre, etc.).

El objeto `document` contiene 2 hijos: la declaración del Doctype y el elemento raíz, generalmente referido como `documentElement`. (En documentos (X)HTML es el elemento `HTML`)

`childNodes` incluye todos los nodos hijos, incluidos los nodos no elementos, como nodos de tipo textos y comentarios. Para obtener una colección de solo elementos, use {{domxref("ParentNode.children")}}.

## Especificaciones

| Especificación                                                                                       | Estado                           | Comentarios        |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('DOM WHATWG', '#dom-node-childnodes', 'Node.childNodes')}}         | {{Spec2('DOM WHATWG')}} | Sin cambios        |
| {{SpecName('DOM3 Core', 'core.html#ID-1451460987', 'Node.childNodes')}}     | {{Spec2('DOM3 Core')}}     | Sin cambios        |
| {{SpecName('DOM2 Core', 'core.html#ID-1451460987', 'Node.childNodes')}}     | {{Spec2('DOM2 Core')}}     | Sin cambios        |
| {{SpecName('DOM1', 'level-one-core.html#ID-1451460987', 'Node.childNodes')}} | {{Spec2('DOM1')}}         | Definición inicial |

## Compatibilidad con navegadores

{{Compat("api.Node.childNodes")}}

## Vea también

- {{domxref("Node.firstChild")}}
- {{domxref("Node.lastChild")}}
- {{domxref("Node.nextSibling")}}
- {{domxref("Node.previousSibling")}}
- {{domxref("ParentNode.children")}}
