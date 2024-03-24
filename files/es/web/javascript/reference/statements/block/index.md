---
title: block
slug: Web/JavaScript/Reference/Statements/block
---

{{jsSidebar("Statements")}}

## Resumen

Una sentencia block se utiliza para agrupar cero o más sentencias. Este grupo block se delimita por un par de llaves.

## Sintaxis

```
{ sentencia_1; sentencia_2; ... sentencia_n; }
```

- `sentencia_1`, `sentencia_2`, `sentencia_n`
  - : Sentencias agrupadas dentro de una sentencia block.

## Descripción

Esta sentencia se utiliza comúnmente para controlar sentencias de flujo (es decir `if`, `for`, `while`). Por ejemplo:

```js
while (x < 10) {
  x++;
}
```

Las variables declaradas con `var` **no** tienen alcance de bloque(block scope). Las variables introducidas dentro de un grupo block tienen el alcance de la función que lo contiene o del script, y los efectos de su asignación persisten más allá del grupo block en sí mismo. En otras palabras, las sentencias block no incluyen ningún alcance. Aunque los grupos block "en solitario" (standalone) son una sintaxis válida, usted no querrá utilizar grupos block en solitario en JavaScript, ya que ellos no hacen lo que parecen, si piensa que funcionan de manera similar a los bloques en C o Java. Por ejemplo:

```js
var x = 1;
{
  var x = 2;
}
alert(x); // resultado 2
```

Este obtiene el resultado 2 ya que la sentencia `var x` dentro del grupo block tiene el mismo alcance que la sentencia `var x` antes del mismo. En C o Java, el código equivalente tendría como resultado 1.

#### Con `let` y [const](/es/docs/Web/JavaScript/Referencia/Sentencias/const)

Por el contrario, las variables declaradas con `let` y `const` tienen alcance de bloque.

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // logs 1
```

El alcance `x = 2` es limitado solamente al bloque en el que está definido.

Lo mismo para `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // logs 1 y no lanza SyntaxError...
```

Tenga en cuenta que la variable `const c = 2 con alcance de bloque`, **_no_ lanza** un `SyntaxError:` El identificador 'c' ya ha sido declarado. Esto es porque **se puede declarar de forma única** dentro del bloque, sin interferir con la otra que tiene un alcance global.

#### Con `function`

La [declaración de una función](/es/docs/Web/JavaScript/Reference/Statements/function) también tiene un alcance limitado dentro del bloque donde se produce la declaración:

```js
nacion("frances"); // TypeError: nacion no es una función
{
  function nacion(nacionalidad) {
    console.log("Yo soy " + nacionalidad);
  }
  nacion("español"); // correcto. logs Yo soy español
}
```

## Vea También

- {{jsxref("Sentencias/while", "while")}}
