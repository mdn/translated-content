---
title: "SyntaxError: missing variable name"
slug: Web/JavaScript/Reference/Errors/No_variable_name
---

{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)
```

## Error

{{jsxref("SyntaxError")}}

## ¿Qué anda mal?

Una variable no tiene nombre. Esto es un error recurrente en el código. Probablemente una coma está mal colocada en algún lugar o nombraste mal una variable. Completamente entendible. Nombrar cosas es difícil.

## Ejemplos

### Missing a variable name

```js example-bad
var = "foo";
```

Es bueno nombrar buenas variables. Todos hemos estado así.

```js example-good
var ohGodWhy = "foo";
```

### Palabras reservadas no pueden ser nombre de variables

Hay algunas palabras que son reservadas. No puedes usarlas para nombrar variables, lo siento :(

```js example-bad
var debugger = "whoop";
// SyntaxError: missing variable name
```

### Declarar multiples variables

Toma especial atención a las comas cuando declaras multiples variables. ¿Hay un exceso de comas? ¿Accidentalmente añadiste comas en vez de punto y coma?

```js example-bad
var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
```

La versión arreglada:

```js example-good
var x,
  y = "foo";
var x = "foo";

var first = document.getElementById("one");
var second = document.getElementById("two");
```

### Arrays

{{jsxref("Array")}} literales en JavaScript necesitan corchetes alrededor de los valores. Esto no funciona:

```js example-bad
var arr = 1, 2, 3, 4, 5;
// SyntaxError: missing variable name
```

Esto es correcto:

```js example-good
var arr = [1, 2, 3, 4, 5];
```

## Ver también

- [Good variable names](http://wiki.c2.com/?GoodVariableNames)
- [`var`](/es/docs/Web/JavaScript/Reference/Statements/var)
- [Variable declarations in the JavaScript Guide](/es/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)
