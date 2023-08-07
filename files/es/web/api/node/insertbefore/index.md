---
title: Node.insertBefore()
slug: Web/API/Node/insertBefore
---

{{APIRef("DOM")}}

El método **`Node.insertBefore()`** inserta un nodo antes del nodo de referencia como hijo de un nodo padre indicado. Si el nodo hijo es una referencia a un nodo ya existente en el documento, `insertBefore()` lo mueve de la posición actual a la nueva posición (no hay necesidad de eliminar el nodo de su nodo padre antes de agregarlo al algún nodo nuevo).

Esto significa que el nodo no puede estar en dos puntos del documento al simultáneamente. Por lo que si el nodo ya tiene un padre, primero se elimina el nodo, y luego se inserta en la nueva posición. {{domxref("Node.cloneNode()")}} puede utilizarse para hacer una copia de un nodo antes de insertarlo en un nuevo padre. Ten en cuenta que las copias hechas con `cloneNode()` no se mantendrán sincronizadas automáticamente.

Si el nodo de referencia es `null`, el nodo indicado se añadirá al final de la lista de hijos del nodo padre especificado.

Si el hijo proporcionado es un {{domxref("DocumentFragment")}}, el contenido completo del `DocumentFragment` se moverá a la lista de hijos del nodo padre indicado.

## Sintaxis

```
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

- `insertedNode` El nodo que esta siendo insertado, es decir, `newNode`
- `parentNode` El padre del nodo recién insertado.
- `newNode` El nodo a insertar.
- `referenceNode` El nodo antes del cual se inserta `newNode`.

Si `referenceNode` es `null`, el `newNode` se insertará al final de la lista de nodos hijos.

> **Nota:** `referenceNode` **no** es un parámetro opcional — debes pasar explícitamente un `Node` o `null`. No proporcionándolo o pasando valores no válidos podría provocar un [comportamiento](https://code.google.com/p/chromium/issues/detail?id=419780) [distinto](https://bugzilla.mozilla.org/show_bug.cgi?id=119489) en diferentes versiones de navegadores.

### Valor devuelto

El valor devuelto es el hijo añadido excepto cuando `newNode` es un {{domxref("DocumentFragment")}}, en cuyo caso se devuelve un {{domxref("DocumentFragment")}}.

## Ejemplo

### Ejemplo 1

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // Crear el nodo a insertar
  var newNode = document.createElement("span");

  // Obtener una referencia al nodo padre
  var parentDiv = document.getElementById("childElement").parentNode;

  // Comienzo del test [ 1 ] : Existe un childElement --> Todo funciona correctamente
  var sp2 = document.getElementById("childElement");
  parentDiv.insertBefore(newNode, sp2);
  // Fin del test [ 1 ]

  // Comienzo del test [ 2 ] : childElement no es del tipo undefined
  var sp2 = undefined; // No existe un nodo con id "childElement"
  parentDiv.insertBefore(newNode, sp2); // Implicit dynamic cast to type Node
  // Fin del test [ 2 ]

  // Comienzo del test [ 3 ] : childElement es de Tipo "undefined" ( string )
  var sp2 = "undefined"; // No existe un nodo con id "childElement"
  parentDiv.insertBefore(newNode, sp2); // Genera "Type Error: Invalid Argument"
  // Fin del test [ 3 ]
</script>
```

### Ejemplo 2

```html
<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>

<script>
  // Crea un nuevo, elemento <span>
  var sp1 = document.createElement("span");

  // Obtener una referencia al elemento, antes de donde queremos insertar el elemento
  var sp2 = document.getElementById("childElement");
  // Obtener una referencia al nodo padre
  var parentDiv = sp2.parentNode;

  // Inserta un nuevo elemento en el DOM antes de sp2
  parentDiv.insertBefore(sp1, sp2);
</script>
```

No existe el método `insertAfter()`. Puede ser emulado mediante la combinación del método con {{domxref("Node.nextSibling()")}}.

En el ejemplo anterior, `sp1` podría insertarse después de `sp2` usando:

```js
parentDiv.insertBefore(sp1, sp2.nextSibling);
```

Si `sp2` no tiene ningún hermano depués de él, entonces debe ser el último hijo — `sp2.nextSibling` devuelve `null`, y `sp1` se inserta al final de la lista de nodos hijos (inmediatamente después de `sp2`).

### Ejemplo 3

Inserta un elemento antes del primer elemento hijo, utilizando la propiedad [firstChild](/es/docs/DOM/Node.firstChild).

```js
// Obtener una referencia al elemento en el que se quiere insertar un nuevo nodo
var parentElement = document.getElementById("parentElement");
// Obtener una referencia al primer hijo
var theFirstChild = parentElement.firstChild;

// Crear un nuevo elemento
var newElement = document.createElement("div");

// Insertar el nuevo elemento antes que el primer hijo
parentElement.insertBefore(newElement, theFirstChild);
```

Cuando el elemento no tiene ub primer hijo, entonces `firstChild` es `null`. Aun así, el elemento se añade al padre después del último hijo. Puesto que el elemento padre no tenía primer hijo, tampoco tiene último hijo. Por tanto, el nuevo elemento es el único elemento después de ser insertado.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("ParentNode.prepend()")}}
