---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Statements")}}

La sentencia **`if...else`** ejecuta una sentencia, si una condición específicada es evaluada como {{Glossary("truthy", "verdadera")}}. Si la condición es evaluada como {{Glossary("falsy", "falsa")}}, otra sentencia en la clausula opcional `else` será ejecutada.

{{InteractiveExample("JavaScript Demo: Statement - If...Else")}}

```js interactive-example
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"
```

## Sintaxis

```js-nolint
if (condición)
  sentencia1

// Con una clausula else
if (condición)
  sentencia1
else
  sentencia2
```

- `condición`
  - : Una expresión que puede ser evaluada como {{Glossary("truthy", "verdadera")}} o {{Glossary("falsy", "falsa")}}.

- `sentencia1`
  - : Sentencia que se ejecutará si `condición` es evaluada como {{Glossary("truthy", "verdadera")}}. Puede ser cualquier sentencia, incluyendo otras sentenccias `if` anidadas. Para ejecutar múltiples sentencias, use una sentencia [_block_](/es/docs/Web/JavaScript/Reference/Statements/block) ({ ... }) para agruparlas. Para no ejecutar ninguna sentencia, usa una sentencia [vacía](/es/docs/Web/JavaScript/Reference/Statements/Empty).

- `sentencia2`
  - : Sentencia que se ejecutará si `condición` se evalúa como {{Glossary("falsy", "falsa")}}, y existe una cláusula `else`. Puede ser cualquier sentencia, incluyendo sentencias _block_ y otras sentencias `if` anidadas.

## Descripción

Multiples sentencias `if...else` pueden ser anidadas para crear una cláusula `else if`. Note que no hay una palabra clave `elseif` (en una sola palabra) en JavaScript.

```
if (condición1)
   sentencia1
else if (condición2)
   sentencia2
else if (condición3)
   sentencia3
//...
else
   sentenciaN
```

Para entender como esto funciona, así es como se vería si el anidamiento hubiera sido indentado correctamente:

```
if (condición1)
   sentencia1
else
   if (condición2)
      sentencia2
   else
      if (condición3)
      ...
```

Para ejecutar varias sentencias en una cláusula, use una sentencia _block_ (`{/* ... */ }`) para agruparlas.

```js
if (condición) {
  sentencia1;
} else {
  sentencia2;
}
```

No usar _blocks_ puede ocacionar un comportamiento inesperado, especialmente si el código es estructurado manualmente. Por ejemplo:

```js-nolint example-bad
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
  else
    console.log("a is not 1");
}
```

Este código puede parece inocente — sin embargo, si ejecutamos `checkValue(1, 3)` registrara el mensaje "a is not 1". Esto debido a que en el caso de [dangling else](https://en.wikipedia.org/wiki/Dangling_else), la clausula `else` se conectará a la clausula `if` más cercana. Por lo tanto, el código anterior, indentado apropiadamente, se vería así:

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
```

Generalmente, es una buena práctica usar siempre sentencias block, especialmente en código que incluya sentencias if anidadas.

```js example-good
function checkValue(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a is 1 and b is 2");
    }
  } else {
    console.log("a is not 1");
  }
}
```

No confundir los valores booleanos primitivos `true` y `false` con los valores verdadero y falso del objeto {{jsxref("Boolean")}}. Cualquier valor diferente de `undefined`, `null`, `0`, `-0`, `NaN`, o la cadena vacía (`""`), y cualquier objecto, incluso un objeto Boolean cuyo valor es false, se evalúa como {{Glossary("truthy", "verdadero")}} en una sentencia condicional. Por ejemplo:

```js
const b = new Boolean(false);
// Esta condición se evalúa como verdadera
if (b) {
  console.log("b is truthy"); // "b is truthy"
}
```

## Ejemplos

### Uso de `if...else`

Note que no hay sintaxis `elseif` en JavaScript. Sin embargo, puede escribirse con un espacio entre `else` y `if`:

```js
if (cipherChar === fromChar) {
  result += toChar;
  x++;
} else {
  result += clearChar;
}
```

### Using else if

Note que no hay sintaxis `elseif` en JavaScript. Sin embargo, puede escribirse con un espacio entre `else` y `if`:

```js
if (x > 50) {
  /* hace algo */
} else if (x > 5) {
  /* hace algo */
} else {
  /* hace algo */
}
```

### Asignación en una expresión condicional

Casi nunca deberías tener un `if...else` con una asignacion `x = y` como condición:

```js example-bad
if ((x = y)) {
  // …
}
```

Porque a diferencia de los bucles {{jsxref("Statements/while", "while")}}, la condición es evaluada sólo una vez, así que la asignación es ejecutada una vez. El código anterior es equivalente a:

```js example-good
x = y;
if (x) {
  // …
}
```

El cual es mucho más claro. Sin embargo, en el raro caso que te encuentres en la situación de hacer algo como eso, la documentación del bucle [`while`](/es/docs/Web/JavaScript/Reference/Statements/while) tiene una sección llamada [Usando una asignación como una condición](/es/docs/Web/JavaScript/Reference/Statements/while#usando_una_asignacion_como_condicion) con nuestras recomendaciones.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase También

- {{jsxref("Sentencias/block", "block")}}
- {{jsxref("Sentencias/switch", "switch")}}
