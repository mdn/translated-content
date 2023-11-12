---
title: empty
slug: Web/JavaScript/Reference/Statements/Empty
---

{{jsSidebar("Statements")}}

Un **empty statement** o sentencia vacía es usada para no proveer una sentencia, incluso si la sintaxis JavaScript esperase una.

## Sintaxis

```
;
```

## Descripción

La sentencia vacía es un punto y coma (;) que indica que no se ejecutará ninguna sentencia, incluso si la sintaxis JavaScript requiere una. El comportamiento opuesto, donde se desean ejecutar varias sentencias pero JavaScript solo permite una sola, es posible usando una [sentencia de bloque](/es/docs/Web/JavaScript/Referencia/Sentencias/block); la cual combina varias declaraciones en una.

## Ejemplos

La sentencia vacía es comúnmente usada en bucles. Por ejemplo, un bucle for sin bloque de sentencias:

```js
var arr = [1, 2, 3];

// Asignar el valor 0 a todos los elementos del array
for (i = 0; i < arr.length; arr[i++] = 0) {
  /* sentencia vacía */
}

console.log(arr);
// [0, 0, 0]
```

**Nota:** Es una buena práctica comentar el uso intencional de la sentencia vacía, ya que no es fácilmente distinguible de un punto y coma normal. Un ejemplo de uso probablemente no intencional:

```js-nolint
if (condicion); // Esta condición no ejerce ningún control!
  borrarTodo(); // Por lo cual esta sentencia será ejecutada siempre!!!
```

Otro ejemplo de uso:

```js
var a = 1,
  b = 1;
if (a == 0 || (b = 0)); // Asigna a 'b' el valor cero si 'a' no es cero.
console.log(b); // 0
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Sentencias/block", "Sentencia de bloque")}}
