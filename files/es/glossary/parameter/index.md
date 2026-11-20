---
title: Parámetro
slug: Glossary/Parameter
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Los **parámetros** son variables con nombre declaradas como parte de una {{Glossary("function", "función")}}. Se usan para hacer referencia a los {{Glossary("argument", "argumentos")}} que se pasan a la función.

Por ejemplo:

```js
const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // pasamos dos argumentos

// Esta función recibe dos valores
function example(parameter1, parameter2) {
  console.log(parameter1); // Salida = "Web"
  console.log(parameter2); // Salida = "Development"
}
```

Hay dos tipos de parámetros:

- parámetros de entrada
  - : el tipo más común; pasan valores a las funciones. Según el lenguaje de programación, los parámetros de entrada se pueden pasar de varias maneras (por ejemplo, llamada por valor, llamada por dirección, llamada por referencia).
- parámetros de salida o de retorno
  - : principalmente devuelven varios valores de una función, pero no se recomiendan ya que generan confusión.

## Parámetros versus argumentos

Ten en cuenta la diferencia entre _parámetros_ y _argumentos_:

- Los parámetros de una función son los nombres que aparecen en su definición.
- Los {{Glossary("argument", "argumentos")}} de una función son los valores reales que se le pasan.
- Los parámetros se inicializan con los valores de los argumentos proporcionados.

## Véase también

- [Diferencia entre _parámetros_ y _argumentos_](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>)
- [Declaración de función](/es/docs/Web/JavaScript/Reference/Statements/function)
- [Expresión de función](/es/docs/Web/JavaScript/Reference/Operators/function)
- Términos relacionados del glosario:
  - {{Glossary("Function", "Función")}}
  - {{Glossary("Argument", "Argumento")}}
