---
title: Argumento
slug: Glossary/Argument
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Los **argumentos** son {{glossary("value", "valores")}} ({{Glossary("primitive", "primitivos")}} u {{Glossary("object", "objetos")}}) que se pasan como entrada a una {{Glossary("function", "función")}}. No confundas los argumentos con los {{Glossary("parameter","parámetros")}}, que son los nombres que se usan en la definición de la función para referirse a los argumentos.

Por ejemplo:

```js
const argument1 = "Web";
const argument2 = "Desarrollo";
example(argument1, argument2); // pasamos dos argumentos

// Esta función recibe dos valores
function example(parameter1, parameter2) {
  console.log(parameter1); // Salida = "Web"
  console.log(parameter2); // Salida = "Desarrollo"
}
```

El orden de los argumentos en la llamada a la función debe ser el mismo que el de los parámetros en la definición de la función.

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // pasamos dos argumentos

// Esta función recibe un solo valor, así que se ignora el segundo argumento que se le pasa
function example(parameter) {
  console.log(parameter); // Salida = foo
}
```

## Véase también

- [Diferencia entre parámetro y argumento](/es/docs/Glossary/Parameter#parámetros_versus_argumentos)
- El objeto {{jsxref("Functions/arguments", "arguments")}} de JavaScript
- Términos relacionados del glosario:
  - {{Glossary("Function", "Función")}}
  - {{Glossary("Parameter", "Parámetro")}}
  - {{glossary("JavaScript")}}
