---
title: Operador de agrupación
slug: Web/JavaScript/Reference/Operators/Grouping
---

{{jsSidebar("Operators")}}

El operador de agrupación `( )` controla la precedencia de las expresiones a evaluar.

## Sintaxis

```
( )
```

## Descripción

El operador de agrupación consiste en un par de paréntesis alrededor de la expresión (o sub-expresión) que sobrescribe el comportamiento por defecto de la [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), lo que causa que expresiones con menor precedencia puedan ser evaluadas antes que expresiones con una mayor precedencia.

## Ejemplos

Sobrescribir la precedencia de operadores aritméticos por defecto para que se evalúe primero la adición y luego la multiplicación.

```js-nolint
var a = 1;
var b = 2;
var c = 3;

// precedencia por defecto
a + b * c; // 7
// es evaluada por defecto como:
a + (b * c); // 7

// ahora se sobrescribe la precedencia
// para que la adición se evalúe antes que la multiplicación
(a + b) * c; // 9

// que es equivalente a:
a * c + b * c; // 9
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Temas relacionados

- [Precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
