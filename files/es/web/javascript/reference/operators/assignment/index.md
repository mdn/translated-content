---
title: Asignacion (=)
slug: Web/JavaScript/Reference/Operators/Assignment
---

{{jsSidebar("Operators")}}

El operador de asignación (=) se utiliza para asignar un valor a una variable. La operación de asignación evalúa el valor asignado. Es posible encadenar el operador de asignación para asignar un solo valor a múltiples variables

{{InteractiveExample("JavaScript Demo: Expressions - Assignment")}}

```js interactive-example
let x = 2;
const y = 3;

console.log(x);
// Expected output: 2

console.log((x = y + 1)); // 3 + 1
// Expected output: 4

console.log((x = x * y)); // 4 * 3
// Expected output: 12
```

## Sintaxis

```
Operador: x = y
```

## Ejemplos

### Asignación

```js
// Asumimos las siguientes variables
//  x = 5
//  n = 10
//  z = 25

x = n; // La variable x contiene el valor 10
x = n = z; // x = n (es decir 10) y z pisa el valor total remplazandolo por 25
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Assignment operators in the JS guide](/es/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment)
