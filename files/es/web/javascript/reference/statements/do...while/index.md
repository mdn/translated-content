---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
---

{{jsSidebar("Statements")}}

La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

{{InteractiveExample("JavaScript Demo: Statement - Do...While")}}

```js interactive-example
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

## Sintaxis

```
do
  sentencia
while (condición);
```

- `sentencia`
  - : Una sentencia que se ejecuta al menos una vez y es reejecutada cada vez que la condición se evalúa a verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utilice la sentencia {{jsxref("Statements/block", "block")}} (`{ ... }`) para agrupar aquellas sentencias.

- `condición`
  - : Una expresión se evalúa después de cada pase del bucle. Si `condición` se evalúa como verdadera, la `sentencia` se re-ejecuta. Cuando `condición` se evalúa como falsa, el control pasa a la siguiente sentencia hacer mientras.

## Ejemplos

### Usando `hacer mientras`

En el siguiente ejemplo, el bucle hacer mientras itera al menos una vez y se reitera hasta que `i` ya no sea menor que 5.

```js
do {
  i += 1;
  document.write(i);
} while (i < 5);
```

## Vea También

- {{jsxref("Sentencias/while", "while")}}
- {{jsxref("Sentencias/for", "for")}}
