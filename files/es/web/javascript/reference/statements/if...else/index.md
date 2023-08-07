---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
---

{{jsSidebar("Statements")}}

## Resumen

Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.

## Sintaxis

```
if (condición) sentencia1 [else sentencia2]
```

- `condición`

  - : Una expresión que puede ser evaluada como verdadera o falsa.

- `sentencia1`

  - : Sentencia que se ejecutará si `condición` es evaluada como verdadera. Puede ser cualquier sentencia, incluyendo otras sentenccias `if` anidadas. Para ejecutar múltiples sentencias, use una sentencia {{jsxref("Sentencias/block", "block")}} ({ ... }) para agruparlas.

- `sentencia2`
  - : Sentencia que se ejecutará si `condición` se evalúa como falsa, y exista una cláusula `else`. Puede ser cualquier sentencia, incluyendo sentencias block y otras sentencias `if` anidadas.

## Descripción

Multiples sentencias `if...else` pueden ser anidadas para crear una cláusula `else if`:

```
if (condición1)
   sentencia1
else if (condición2)
   sentencia2
else if (condición3)
   sentencia3
...
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

Para ejecutar varias sentencias en una cláusula, use una sentencia block (`{ ... }`) para agruparlas. Generalmente, es una buena práctica usar siempre sentencias block, especialmente en código que incluya sentencias if anidadas:

```js
if (condición) {
  sentencia1;
} else {
  sentencia2;
}
```

No confundir los valores primitivos `true` y `false` con los valores true y false del objeto {{jsxref("Boolean")}}. Cualquier valor diferente de `undefined`, `null`, `0`, `-0`, `NaN`, o la cadena vacía (`""`), y cualquier objecto, incluso un objeto Boolean cuyo valor es false, se evalúa como verdadero en una sentencia condicional. Por ejemplo:

```js
var b = new Boolean(false);
if (b) // Esta condición se evalúa como verdadera
```

## Ejemplos

### Ejemplo: Uso de `if...else`

```js
if (cipher_char == from_char) {
  result = result + to_char;
  x++;
} else result = result + clear_char;
```

### Ejemplo: Asignación en una expresión condicional

Es aconsejable no usar asignaciones simples en una expresión condicional, porque la asignación puede ser confundida con igualdad (operador relacional) cuando se lee el código. Por ejemplo, no use el siguiente código:

```js
if ((x = y)) {
  /* sentencia */
}
```

Si realmente necesita una asignación dentro de una exprsión condicional, una práctica común es poner paréntesis adicionales alrededor del la asignación, por ejemplo:

```js
if ((x = y)) {
  /* sentencia */
}
```

## Vea También

- {{jsxref("Sentencias/block", "block")}}
- {{jsxref("Sentencias/switch", "switch")}}
