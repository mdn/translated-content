---
title: "SyntaxError: illegal character"
slug: Web/JavaScript/Reference/Errors/Illegal_character
---

{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: illegal character (Firefox)
SyntaxError: Invalid or unexpected token (Chrome)

ErrorDeSintasix: Carácter ilegal (Firefox)
ErrorDeSintasix: Componente léxico inválido o inesperado (Chrome)
```

## Tipo de error

{{jsxref("SyntaxError")}} {{jsxref("ErrorDeSintaxis")}}

## ¿Qué salió mal?

Hay un componente léxico inválido o inesperado que no pertenece a su posición en el código. Utilice un editor que soporte el resaltado de sintaxis y que revise cuidadosamente su código contra discrepancias como un signo menos (`-`) contra un guion (`–`) o comillas simples (`"`) contra comillas no estándar (`“`).

## Ejemplos

### Caracteres no coincidentes

Algunos caracteres parecen iguales, pero hará que el analizador falle al interpretar su código.

```js example-bad
“Esto parece una cadena de caracteres”;
// SyntaxError: illegal character
// ErrorDeSintaxis: Carácter ilegal

42 – 13;
// SyntaxError: illegal character
// ErrorDeSintaxis: Carácter ilegal
```

Esto debería funcionar:

```js example-good
"Esto en realidad es una cadena de caracteres";

42 - 13;
```

### Caracteres olvidados

Es fácil olvidar caracteres aquí o allí.

```js example-bad
var colors = ['#000', #333', '#666'];
// SyntaxError: illegal character
// ErrorDeSintaxis: Carácter ilegal
```

Agregue la comilla olvidada para `'#333'`.

```js example-good
var colors = ["#000", "#333", "#666"];
```

### Caracteres escondidos

Cuando copia y pega un código de una fuente externa, puede haber caracteres inválidos. ¡Cuidado!

```js example-bad
var foo = 'bar';​
// SyntaxError: illegal character
// ErrorDeSintaxis: Carácter ilegal
```

Al inspeccionar este código en un editor como Vim, puede ver que en realidad hay un carácter de [espacio de ancho cero (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space).

```js
var foo = 'bar';​<200b>
```

## Vea también

- [Gramática léxica](/es/docs/Web/JavaScript/Reference/Lexical_grammar)
