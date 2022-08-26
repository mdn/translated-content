---
title: 'IIFE: Expresión de función ejecutada inmediatamente'
slug: Glossary/IIFE
tags:
  - Funciones
translation_of: Glossary/IIFE
---
Las expresiones de función ejecutadas inmediatamente (**IIFE** por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.

```js
(function () {
    statements
})();
```

Es un patrón de diseño también conocido cómo **función autoejecutable** ({{glossary("Self-Executing Anonymous Function")}} ) y se compone por dos partes. La primera es la función anónima con alcance léxico encerrado por el {{jsxref("Operadores/Grouping", "Operador de Agrupación")}} `()`. Esto impide accesar variables fuera del IIFE, así cómo contaminar el alcance (scope) global.

La segunda parte crea la expresión de función cuya ejecución es inmediata `()`, siendo interpretado directamente en el engine de JavaScript.

## Ejemplos

La función se convierte en una expresión de función que es ejecutada inmediatamente. La variable dentro de la expresíon no puede ser accesada desde afuera.

```js
(function () {
    var aName = "Barry";
})();
// Variable name is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"
```

Asignar el IIFE a una variable almacena el valor de retorno, no la definición de la función.

```js
var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result; // "Barry"
```

## Aprende mas

### Aprende acerca de

- [Ben Alman's blog post defining IIFEs](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
- [Quick example](/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions) "Ejemplo Rápido"(al final de la sección "Functions" , justo despues de "Custom objects")

### General knowledge

- {{interwiki("wikipedia", "Immediately-invoked function expression", "IIFE")}} on Wikipedia
