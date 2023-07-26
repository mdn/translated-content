---
title: Node.removeChild()
slug: Web/API/Node/removeChild
---

{{APIRef ( "DOM")}}

El método **`Node.removeChild()`** elimina un nodo hijo del DOM y puede devolver el nodo eliminado.

## Sintaxis

```
var antiguoHijo = elemento.removeChild(child);
O
elemento.removeChild(child);
```

- `child` es el nodo hijo a eliminar del DOM.
- `elemento` es el nodo padre de `hijo`.(ver nota mas abajo)
- `antiguoHijo` tiene una referencia al hijo eliminado. `antiguoHijo === child`.

El hijo(child) eliminado aún existe en memoria pero ya no es parte del DOM. Con la primera forma de sintaxis mostrada, se puede reutilizar el nodo eliminado más tarde en el código, por medio de la referencia al objeto `antiguoHijo`. Sin embargo, en la segunda forma, la referencia a `antiguoHijo` se pierde, y suponiendo que el código no mantenga una referencia a ese objeto en alguna otra parte, inmediatamente será inutilizable e irrecuperable y será [eliminada automáticamente](/es/docs/Web/JavaScript/Gestion_de_Memoria)de memoria después de poco tiempo.

Si hijo(`child)` no es en realidad hijo del nodo `elemento`, el método lanza una excepción. Esto también sucederá si `child` es en realidad hijo de `elemento` al momento de llamar al método, pero fue eliminado por un controlador(manejador) de eventos(event handler) invocado en el curso de tratar de eliminar el elemento. (e.g. blur).

Por lo tanto el método removeChild(child) lanza una excepción de 2 casos diferentes:

1\. Si child es un hijo del elemento y por lo tanto existe en el DOM, pero se retiró el método lanza la siguiente excepción:

`Uncaught NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node`.

2\. Si `child` no existe en el DOM de la página, el método emite la siguiente excepción:

`Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.`

## Ejemplos

```html
<!--Ejemplo 1 HTML-->
<div id="top" align="center"></div>
```

```js
<!--Javascript-->
// El método lanza la excepción correspondiente al (caso 2)
var top = document.getElementById("top");
var nested = document.getElementById("nested");
var garbage = top.removeChild(nested);
```

```html
<!--Ejemplo 2 HTML-->
<div id="top">
  <div id="anidados"></div>
</div>
```

```js
<!--Javascript-->
// Eliminando un elemento específico cuando se conoce su nodo padre
var d = document.getElementById("top");
var d_nested = document.getElementById("anidados");
var throwawayNode = d.removeChild(d_nested);
```

```js
<!--Javascript-->
// Eliminando un elemento específico utilizando la propiedad parentNode, que siempre hace referencia al nodo padre de un nodo (nodoHijo.parentNode.).
nodo var = document.getElementById("anidados");
if (node.parentNode) {
  node.parentNode.removeChild(nodo);
}
```

```js
<!--Javascript-->
// Eliminando todos los hijos de un elemento
elemento var = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

## Notas

**`removeChild()`** se debe invocar sobre el nodo padre del nodo que se va a eliminar.

## Especificación

- [DOM Nivel 1 Core: removeChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild)
- [DOM Nivel 2 Core: removeChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1734834066)
- [DOM Nivel 3 Core: removeChild](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066)

## Vea también

- {{Domxref ( "Node.replaceChild")}}
- {{Domxref ( "Node.parentNode")}}
- {{Domxref ( "ChildNode.remove")}}
