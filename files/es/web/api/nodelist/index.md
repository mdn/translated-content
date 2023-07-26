---
title: NodeList
slug: Web/API/NodeList
---

{{APIRef("DOM")}}

Los objetos **`NodeList`** son colecciones de nodos como los devueltos por propiedades como {{domxref ("Node.childNodes")}} y el método {{domxref ("document.querySelectorAll ()")}}..

> **Nota:** Aunque `NodeList` no es un `Array`, es posible iterar sobre él utilizando `forEach()`. También puede convertirse a un `Array` usando `Array.from`.
>
> Sin embargo, algunos navegadores antiguos no han implementado `NodeList.forEach()` ni `Array.from()`. Pero esas limitaciones pueden eludirse utilizando {{jsxref("Array.forEach()", "Array.prototype.forEach()")}} (más en este documento).

En algunos casos, `NodeList` es una colección _en vivo_, lo que significa que los cambios en el DOM se reflejan en la colección. Por ejemplo, {{domxref ("Node.childNodes")}} está en vivo:

```js
var parent = document.getElementById("parent");
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // asumamos "2"
parent.appendChild(document.createElement("div"));
console.log(child_nodes.length); // debería imprimir "3"
```

En otros casos, `NodeList` es una colección estática, lo que significa que cualquier cambio posterior en el DOM no afecta el contenido de la colección. {{domxref ("document.querySelectorAll ()")}} devuelve un `NodeList` estático.

Es bueno tener en cuenta esta distinción cuando elige cómo iterar sobre los elementos en `NodeList`, y cómo guarda en caché la longitud de la lista en particular.

## Propiedades

- {{domxref("NodeList.length")}}
  - : El número de nodos en la `NodeList`.

## Métodos

- {{domxref("NodeList.item()")}}
  - : Devuelve un elemento en la lista por su índice, o `null` si el índice está fuera de límites; se puede utilizar como una alternativa para acceder simplemente a `nodeList[idx]` (que en cambio devuelve indefinido cuando idx está fuera de límites).
- {{domxref("NodeList.entries()")}}
  - : Devuelve un {{jsxref ("Iteration_protocols", "iterator")}} que permite pasar por todos los pares clave / valor contenidos en este objeto.
- {{domxref("NodeList.forEach()")}}
  - : Ejecuta una función proporcionada una vez por elemento `NodeList`.
- {{domxref("NodeList.keys()")}}
  - : Devuelve un {{jsxref ("Iteration_protocols", "iterator")}} que permite pasar por todas las claves de los pares clave / valor contenidos en este objeto.
- {{domxref("NodeList.values()")}}
  - : Devuelve un {{jsxref ("Iteration_protocols", "iterator")}} que permite recorrer todos los valores de los pares clave / valor contenidos en este objeto.

## Ejemplo

Es posible iterar sobre los items en un `NodeList` usando:

```js
for (var i = 0; i < myNodeList.length; i++) {
  var item = myNodeList[i]; // No es necesario llamar a myNodeList.item(i) en JavaScript
}
```

No se sienta tentado a [`for...in`](/es/docs/JavaScript/Reference/Statements/for...in) or [`for each...in`](/es/docs/JavaScript/Reference/Statements/for_each...in) para enumerar los elementos en la lista, ya que eso también enumerará la longitud y las propiedades del elemento de `NodeList` y causará errores si su secuencia de comandos asume que solo tiene que tratar con objetos {{domxref ("element")}}. Además, `for..in` no garantiza visitar las propiedades en ningún orden en particular.

Los bucles [`for...of`](/es/docs/JavaScript/Reference/Statements/for...of) harán un bucle sobre los objetos `NodeList` correctamente:

```js
var list = document.querySelectorAll("input[type=checkbox]");
for (var item of list) {
  item.checked = true;
}
```

Los navegadores recientes también son compatibles con los métodos de iteración, {{domxref("NodeList.forEach()", "forEach()")}}, así como {{domxref("NodeList.entries()", "entries()")}}, {{domxref("NodeList.values()", "values()")}}, y {{domxref("NodeList.keys()", "keys()")}}

También hay una forma compatible con Internet Explorer de usar {{jsxref ("Array.forEach ()", "Array.prototype.forEach")}} para la iteración.

```js
var list = document.querySelectorAll("input[type=checkbox]");
Array.prototype.forEach.call(list, function (item) {
  item.checked = true;
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
