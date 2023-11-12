---
title: Nodo appendChild
slug: Web/API/Node/appendChild
---

{{APIRef("DOM")}}

Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.

Si el hijo(Child) **es una referencia**(hace referencia) hacia un nodo existente en el documento actual, este es quitado del padre actual para ser puesto en el nodo padre nuevo. La clave está en **si el (Child) es una referencia a un nodo existente en el documento**.

> **Nota:** **Nueva API disponible**
> El método {{domxref("ParentNode.append()")}} soporta varios argumentos y cadenas para adjuntar.

## Sintaxis

```
element.appendChild(aChild);
```

### Parámetros

- **aChild**
  - : El nodo a adjuntar al nodo padre proporcionado (normalmente un elemento).

### Valor de retorno

El valor devuelto es el hijo adjunto excepto cuando el hijo proporcionado es un {{domxref("DocumentFragment")}}, en cuyo caso el {{domxref("DocumentFragment")}} vacío es devuelto.

## Notas

El encadenamiento podría no funcionar como se espera debido a que `appendChild()` devuelve un elemento hijo:

```js
var aBlock = doc.createElement("block").appendChild(doc.createElement("b"));
```

Establece `aBlock` como `<b></b>` sólo, que no es probablemente lo que quieras.

Si el `child` hace una referencia a un nodo existente en el documento, el método `appendChild` se mueve de su posición actual a su nueva posición (ej. no existen requerimientos para eliminar el nodo desde su nodo padre antes de añadirlo a cualquier otro nodo).

Ésto significa también que el nodo no puede estar en dos puntos del documento de manera simultánea. Así que si el nodo ya contiene un padre, primero es eliminado, y después se añade a la nueva posición.

Se puede usar {{domxref("Node.cloneNode")}} para hacer una copia del nodo antes de añadirlo debajo de su nuevo elemento padre. (Nota: las copias echas con `cloneNode` no serán guardadas automáticamente en sincronía.)

Éste método no es permitido para mover nodos entre distintos documentos. Si se quiere añadir un nodo desde un documento diferente (por ejemplo para mostrar los resultados de una petición AJAX) se debe usar primero:
{{domxref("document.importNode")}}.

`appendChild()` Es uno de los métodos fundamentales de la programación web usando el DOM. El método `appendChild()` inserta un nuevo nodo dentro de la estructura DOM de un documento, y es la segunda parte del proceso central uno-dos, crear-y-añadir para construir páginas web a base de programación.

## Ejemplo

```js
// Crea un nuevo elemento párrafo, y lo agrega al final del cuerpo del documento
var p = document.createElement("p");
document.body.appendChild(p);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Node.removeChild")}}
- {{domxref("Node.replaceChild")}}
- {{domxref("Node.insertBefore")}}
- {{domxref("Node.hasChildNodes")}}
- {{domxref("ParentNode.append()")}}
