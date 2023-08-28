---
title: "SyntaxError: Malformed formal parameter"
slug: conflicting/Web/JavaScript/Reference/Errors/Missing_formal_parameter
original_slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
---

## Mensaje

```
SyntaxError: Expected {x} (Edge)
SyntaxError: malformed formal parameter (Firefox)
```

## Tipo de error

{{jsxref("SyntaxError")}}

## ¿Qué salió mal?

Hay un constructor [`Function()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function) con al menos dos argumentos pasados en el código. El último argumento es el código fuente de la nueva función que está creando. Todo lo demás forma la lista de argumentos de su nueva función.

La lista de argumentos no es válida de alguna manera. Quizás eligió accidentalmente una palabra clave como `if` o `var` como nombre de argumento, o tal vez haya algún signo de puntuación en su lista de argumentos. O tal vez accidentalmente pasó un valor no válido, como un número u objeto.

## OK, eso solucionó mi problema. Pero, ¿Por qué no dijiste eso en primer lugar?

Es cierto que la redacción del mensaje de error es un poco extraña. El "parámetro formal" es una forma elegante de decir "argumento de función". Y usamos la palabra "malformada" porque todos los ingenieros de Firefox son grandes admiradores de las novelas de terror góticas del siglo XIX.

## Ejemplos

### Casos no validos

```js example-bad
var f = Function('x y', 'return x + y;');
// SyntaxError (Falta una coma)

var f = Function('x,', 'return x;');
// SyntaxError (Coma extraña)

var f = Function(37, "alert('OK')");
// SyntaxError (Números no pueden ser nombres de argumentos)
```

### Casos validos

```js example-good
var f = Function('x, y', 'return x + y;');  // Correctamente puntuado

var f = Function('x', 'return x;');

// Si puede, evite usar Function - Esto es mucho más rápido
var f = function(x) { return x; };
```

## Ver tambien

- [`Function()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Sobre functions](/es/docs/Web/JavaScript/Guide/Functions)
- [_Frankenstein_ por Mary Wollstonecraft Shelley, texto completo en línea](https://www.gutenberg.org/ebooks/84) ("Maldito (aunque me maldiga a mí mismo) ¡sé las manos que te formaron! Me has hecho miserable más allá de toda expresión. No me has dejado ningún poder para considerar si soy justo para ti o no. ¡Fuera! Aléjame de la vista de tu forma detestada ")
