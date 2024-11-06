---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
---

{{jsSidebar("Operators")}}

## Resumen

El operador `typeof` se usa en cualquiera de los siguientes modos:

1. `typeof operando`
2. `typeof (operando)`

El operador `typeof` devuelve una cadena que indica el tipo del operando sin evaluarlo. `operando` es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo. Los paréntesis son opcionales.

Suponga que define las siguientes variables:

```js
var miFuncion = new Function("5+2");
var forma = "redonda";
var tamano = 1;
var hoy = new Date();
```

El operador `typeof` devuelve los siguientes resultados para estas variables

```js
typeof miFuncion === "function";
typeof forma === "string";
typeof tamano === "number";
typeof hoy === "object";
typeof noExiste === "undefined";
```

Para las palabras clave `true` y `null`, el operador `typeof` devuelve los siguientes resultados:

```js
typeof true === "boolean";
typeof null === "object";
```

Para un número o una cadena, el operador `typeof` devuelve los siguientes resultados:

```js
typeof 62 === "number";
typeof "Hola mundo" === "string";
```

Para valores de propiedades, el operador `typeof` devuelve el tipo del valor que contiene la propiedad:

```js
typeof document.lastModified === "string";
typeof window.length === "number";
typeof Math.LN2 === "number";
```

Para métodos y funciones, el operador `typeof` devuelve los resultados siguientes:

```js
typeof blur === "function";
typeof eval === "function";
typeof parseInt === "function";
typeof shape.split === "function";
```

Para objetos predefinidos, el operador `typeof` devuelve los siguientes resultados:

```js
typeof Date === "function";
typeof Function === "function";
typeof Math === "object";
typeof Object === "function";
typeof String === "function";
```
