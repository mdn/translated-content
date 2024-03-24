---
title: "SyntaxError: missing formal parameter"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
---

{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: missing formal parameter (Firefox)
```

## Tipo de error

{{jsxref("SyntaxError")}}

## ¿Que es lo que fue mal?

"Formal parameter" es una forma adornada de decir "parámetro de función". Tu declaración de funcion carece de parámetros válidos. En la declaración de la función, los parámetros deben ser {{Glossary("Identifier", "identifiers")}}, no ningún valor cómo números, cadenas, o objetos. Declarar las funciones y invocarlas son dos pasos distindos. La declaración sólo requiere identificador/es. Es en la invocación que asignas los valores.

En {{glossary("JavaScript")}}, los indentificadosres sólo pueden contener carácteres alfanuméricos (o "$" y "\_"), no pueden comenzar por número. Un identificador difiere de una **cadena** en que la cadena son datos, mientras que lo primero es parte del código.

## Ejemplos

Los parámetros de función deben ser identificadores cuando creas la función. Todas estas declaraciones fallan, ya que proveen parámetros:

```js example-bad
function square(3) {
  return number * number;
};
// SyntaxError: missing formal parameter

function greet("Howdy") {
  return greeting;
};
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
};
// SyntaxError: missing formal parameter
```

Necesitarás usar identificadores en las funciones:

```js example-good
function square(number) {
  return number * number;
}

function greet(greeting) {
  return greeting;
}

function log(arg) {
  console.log(arg);
}
```

Entonces podrás invocarlas con argumentos a tu gusto:

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({ obj: "value" }); // Object { obj: "value" }
```

## También interesante

- Otros errores relacionados con parámetros formales:

  - [SyntaxError: Malformed formal parameter](/es/docs/Web/JavaScript/Reference/Errors/Malformed_formal_parameter)
  - [SyntaxError: redeclaration of formal parameter "x"](/es/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
