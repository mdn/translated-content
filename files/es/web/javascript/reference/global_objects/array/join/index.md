---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
---

{{JSRef}}

El método **`join()`** une todos los elementos de una matriz (o un [objeto similar a una matriz](/es/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)) en una cadena y devuelve esta cadena.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## Sintaxis

```
arr.join([separator])
```

### Parámetros

- `separador` {{optional_inline}}
  - : Es una `cadena` usada para separar cada uno de los elementos del arreglo. El separador es convertido a una `cadena` si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (","). Si el `separador` es una `cadena` vacía todos los elementos son unidos sin ningún carácter entre ellos.

### Valor de retorno

Una cadena con todos los elementos de la matriz unidos. Si `arr.length` es `0`, se devuelve la cadena vacía.

## Descripción

Las conversiones de cadena de todos los elementos de la matriz se unen en una cadena.

> **Advertencia:** Si un elemento `no está definido` o es `nulo`, se convierte en la cadena vacía.

## Ejemplos

### Uniendo un arreglo cuatro veces en diferentes formas

El siguiente ejemplo crea un arreglo `a` con tres elementos para luego unir el arreglo cuatro veces: usando el separador predeterminado, luego una coma y un espacio, luego un signo de suma, y finalmente una cadena vacío.

```js
var a = ["Viento", "Lluvia", "Fuego"];
var miVar1 = a.join(); // asigna 'Viento,Lluvia,Fuego' a miVar1
var miVar2 = a.join(", "); // asigna 'Viento, Lluvia, Fuego' a miVar2
var miVar3 = a.join(" + "); // asigna 'Viento + Lluvia + Fuego' a miVar3
var miVar4 = a.join(""); // asigna 'VientoLluviaFuego' a miVar4
```

### Unirse a un objeto tipo matriz

El siguiente ejemplo une un objeto parecido a una matriz ([`argumentos`](/es/docs/Web/JavaScript/Reference/Functions/arguments)), llamando a {{jsxref("Function.prototype.call")}} en `Array.prototype.join`.

```js
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, "a", true);
//resultado esperado: "1,a,true"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
