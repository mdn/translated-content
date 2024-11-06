---
title: Document.getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
---

{{APIRef("DOM")}}

Retorna un objecto similar a un array de los elementos hijos que tengan todos los nombres de clase indicados. Cuando es llamado sobre el objeto document , la busqueda se realiza en todo el document, incluido el nodo raíz. También puedes llamar {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} sobre cualquier elemento; en ese caso retornara sólo los elementos hijos del elemento raíz indicado que contengan los nombres de clase indicados.

## Sintaxis

```js
var elementos = document.getElementsByClassName(nombres); // ó :
var elementos = elementoRaiz.getElementsByClassName(nombres);
```

- _elementos es una_ {{ domxref("HTMLCollection") }} de los elementos encontrados.
- _nombres es un string que representa la lista de nombres de clase a buscar; los nombres de clase se separan con un espacio._
- getElementsByClassName se puede llamar sobre cualquier elemento, no solo sobre document. El elemento sobre el que se llama será usado como la raíz de la busqueda.

## Ejemplos

Obtener todos los elementos de la clase 'prueba'

```js
document.getElementsByClassName("prueba");
```

Obtener todos los elementos que tengan al mismo tiempo las clases 'rojo' y 'prueba'

```js
document.getElementsByClassName("rojo prueba");
```

Obtener todos los elementos que tengan la clase 'prueba' y que estén dentro de un elemento de ID 'principal'

```js
document.getElementById("principal").getElementsByClassName("prueba");
```

También podemos usar los metodos de Array.prototype en cualquier {{ domxref("HTMLCollection") }} pasando el _HTMLCollection_ como el valor _this_ del método. Aquí buscaremos todos los elementos div de la clase 'test':

```js
var testElements = document.getElementsByClassName("test");
var testDivs = Array.prototype.filter.call(
  testElements,
  function (testElement) {
    return testElement.nodeName === "DIV";
  },
);
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
