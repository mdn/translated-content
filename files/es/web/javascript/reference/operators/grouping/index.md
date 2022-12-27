---
title: Operador de agrupación
slug: Web/JavaScript/Reference/Operators/Grouping
tags:
  - Expresiones primarias
  - JavaScript
  - Operador
translation_of: Web/JavaScript/Reference/Operators/Grouping
original_slug: Web/JavaScript/Referencia/Operadores/Grouping
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

```js
var a = 1;
var b = 2;
var c = 3;

// precedencia por defecto
a + b * c     // 7
// es evaluada por defecto como:
a + (b * c)   // 7

// ahora se sobrescribe la precedencia
// para que la adición se evalúe antes que la multiplicación
(a + b) * c   // 9

// que es equivalente a:
a * c + b * c // 9
```

## Especificaciones

| Especificación                                                                               | Estatus                  | Comentario                                         |
| -------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------- |
| ECMAScript 1st Edition.                                                                      | Estándar                 | Definición inicial. Implementado en JavaScript 1.0 |
| {{SpecName('ES5.1', '#sec-11.1.6', 'The Grouping Operator')}}             | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-grouping-operator', 'The Grouping Operator')}} | {{Spec2('ES6')}}     |                                                    |

## Compatibilidad en navegadores

{{Compat("javascript.operators.grouping")}}

## Temas relacionados

- [Precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
