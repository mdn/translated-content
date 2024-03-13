---
title: Node.replaceChild()
slug: Web/API/Node/replaceChild
---

{{APIRef("DOM")}}

El método **`Node.replaceChild()`** reemplaza un nodo hijo del elemento especificado por otro.

## Sintáxis

```
replacedNode = parentNode.replaceChild(newChild, oldChild);
```

- `newChild` es el nuevo nodo con el que reemplazar `oldChild`. Si ya existe en el DOM, será eliminado previamente.
- `oldChild` es el nodo existente para ser reemplazado.
- `replacedNode` es el nodo reemplazado. Es el mismo nodo que `oldChild`.

## Ejemplo

```js
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// crear un nodo con un elemento vacío
// sin ID, atributos, ni contenido
var sp1 = document.createElement("span");

// darle un atributo id llamado 'newSpan'
sp1.setAttribute("id", "newSpan");

// crear algún contenido para el nuevo elemento
var sp1_content = document.createTextNode(
  "Nuevo elemento span para reemplazo.",
);

// aplicar dicho contenido al nuevo elemento
sp1.appendChild(sp1_content);

// construir una referencia al nodo existente que va a ser reemplazado
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// reemplazar el nodo sp2 existente con el nuevo elemento span sp1
parentDiv.replaceChild(sp1, sp2);

// resultado:
// <div>
//   <span id="newSpan">Nuevo elemento span para reemplazo.</span>
// </div>
```

## Especificación

- [DOM Level 1 Core: replaceChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-replaceChild)
- [DOM Level 2 Core: replaceChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-785887307)
- [DOM Level 3 Core: replaceChild](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-785887307)

## Ver también

- {{domxref("Node.removeChild")}}
