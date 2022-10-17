---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
tags:
  - JavaScript
  - Method
  - Prototype
  - RegExp
  - Regular Expressions
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/match
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/match
---
{{JSRef("Objetos_globales", "String")}}

## Resumen

El método **`match()`** se usa para obtener todas las ocurrencias de una _expresión regular_ dentro de una _cadena_.

## Sintaxis

```
cadena.match(regexp)
```

### Parámetros

- `regexp`
  - : Un objeto [expresión regular](/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp). Si se pasa un objeto `obj` que no es expresión regular, se convierte implícitamente a RegExp usando `new RegExp(obj)`.

## Descripción

Si la expresión regular no incluye el flag `g`, devuelve el mismo resultado que {{jsxref("Regexp.exec()")}}.

Si la expresión regular incluye el flag `g`, el método devuelve un {{jsxref("Array")}} que contiene todos los emparejamientos.

### Notas

- Si necesita conocer si una cadena se empareja con una expresión regular `regexp`, use {{jsxref("Regexp.test()")}}.
- Si sólo quiere el primer emparejamiento hallado, podría querer usar {{jsxref("Regexp.exec()")}} a cambio.

## Ejemplos

### Ejemplo: Usando `match`

En el siguiente ejemplo, se usa `match` para hallar "`Capítulo`" seguido de 1 o más caracteres numéricos seguidos de un punto decimal y caracteres numéricos cero o más veces. La expresión regular incluye el flag `i` por lo que las mayúsculas serán ignoradas.

```js
cadena = "Para más información, vea Capítulo 3.4.5.1";
expresion = /(capítulo \d+(\.\d)*)/i;
hallado = cadena.match(expresion);
console.log(hallado);
```

Esto devuelve un array que contiene Capítulo 3.4.5.1,Capítulo 3.4.5.1,.1

"`Capítulo 3.4.5.1`" es el primer emparejamiento y el primer valor referenciado por `(Chapter \d+(\.\d)*)`.

"`.1`" es el segundo valor referenciado por `(\.\d)`.

### Ejemplo: Usando los flags global e ignorar mayúsculas con `match`

El siguiente ejemplo demuestra el uso de los flags global e ignorar mayúsculas con `match`. Todas las letras de A hasta E y de a hasta e son devueltas, en su propio elemento dentro del array.

```js
var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var expresion = /[A-E]/gi;
var array_emparejamientos = cadena.match(expresion);
console.log(array_emparejamientos);
```

`array_emparejamientos` será `{{ mediawiki.external('\'A\', \'B\', \'C\', \'D\', \'E\', \'a\', \'b\', \'c\', \'d\', \'e\'') }}`

## Vea También

- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
