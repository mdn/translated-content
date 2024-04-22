---
title: 'SyntaxError: indicador de expresión regular no válido "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
---

{{jsSidebar("Errors", "Errores")}}

La excepción de JavaScript "indicador de expresión regular no válido" se produce cuando las indicadores, definidas después de la segunda barra en la expresión regular literal, no son de `g`, `i`, `m`, `s`, `u` o `y`.

## Mensaje

```
SyntaxError: error de sintaxis en la expresión regular (Edge)
SyntaxError: marca de expresión regular no válida "x" (Firefox)
SyntaxError: indicadores de expresión regular no válidos (Chrome)
```

## Tipo `Error`

{{jsxref("SyntaxError")}}

## ¿Qué salió mal?

Hay indicadores de expresión regular no válidos en el código. En una expresión regular literal, que consiste en un patrón encerrado entre barras, los indicadores se definen después de la segunda barra. También se pueden definir en la función constructora del objeto {{jsxref("RegExp")}} (segundo parámetro). Los indicadores de expresión regular se pueden usar por separado o juntos en cualquier orden, pero solo hay seis de ellos en ECMAScript.

Para incluir una bandera con la expresión regular, usa esta sintaxis:

```js
var re = /patrón/indicadores;
```

o

```js
var re = new RegExp("patrón", "indicadores");
```

| Bandera | Descripción                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `g`     | Búsqueda global.                                                                                                                                    |
| i       | Búsqueda que no distingue entre mayúsculas y minúsculas.                                                                                            |
| m       | Búsqueda multilínea.                                                                                                                                |
| s       | Permite que el punto (`.`) coincida con las nuevas líneas (agregado en ECMAScript 2018)                                                             |
| u       | Unicode; trata el patrón como una secuencia de puntos de código Unicode                                                                             |
| y       | Realiza una búsqueda "pegajosa" que coincida a partir de la posición actual en la cadena de destino. Consulta {{jsxref("RegExp.sticky", "sticky")}} |

## Ejemplos

Solo hay seis indicadores de expresión regular válidos.

```js example-bad
/foo/bar;

// SyntaxError: indicador de expresión regular no válido "b"
```

¿Tenías la intención de crear una expresión regular? Una expresión que contiene dos barras se interpreta como una expresión regular literal.

```js example-bad
let obj = {
  url: /docs/Web
};

// SyntaxError: indicador de expresión regular no válido "W"
```

¿O pretendías crear una cadena en su lugar? Agrega comillas simples o dobles para crear una cadena literal.

```js example-good
let obj = {
  url: "/docs/Web",
};
```

### Indicadores de expresión regular válidos

Consulta la tabla anterior para ver las seis marcas de expresiones regulares válidas que están permitidas en JavaScript.

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Expresiones regulares")}}
- [Indicadores de RegEx](http://xregexp.com/flags/) – biblioteca de expresiones regulares que proporciona cuatro nuevos indicadores (`n`, `s`, `x`, `A`)
