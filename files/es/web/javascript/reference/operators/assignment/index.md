---
title: Asignacion (=)
slug: Web/JavaScript/Reference/Operators/Assignment
tags:
  - JS
  - JavaScript
  - Operador de Asignacion
  - Operadores JavaScript
  - Referências
translation_of: Web/JavaScript/Reference/Operators/Assignment
original_slug: Web/JavaScript/Referencia/Operadores/Asignacion
---
{{jsSidebar("Operators")}}

El operador de asignación (=) se utiliza para asignar un valor a una variable. La operación de asignación evalúa el valor asignado. Es posible encadenar el operador de asignación para asignar un solo valor a múltiples variables

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

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

x = n     // La variable x contiene el valor 10
x = n = z // x = n (es decir 10) y z pisa el valor total remplazandolo por 25
```

## Especificaciones

| Especificación                                                                                       |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-assignment-operators', 'Assignment operators')}} |

## Compatibilidad con Navegadores

{{Compat("javascript.operators.assignment")}}

## Ver también

- [Assignment operators in the JS guide](/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment)
