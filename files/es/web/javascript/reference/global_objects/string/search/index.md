---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/search
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/search
---
{{JSRef("Objetos_globales", "String")}}

## Resumen

El método **`search()`** ejecuta una búsqueda que encaje entre una expresión regular y el objeto `String` desde el que se llama.

## Sintaxis

```
str.search(expresionregular)
```

### Parámetros

- regexp
  - : Un objeto [expresión regular](/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp). Si se pasa un objeto `obj` que no sea una expresión regular, se convierte implicitamente en una expresión regualar usando `new RegExp(obj)`.

### Valor devuelto

El índice de la primera coincidencia entre la expresión regular y la cadena de texto proporcionada, si no se encuentra devuelve **-1**.

## Descripción

Cuando se desee saber en qué casos un patrón se encuentra en una cadena de texto utiliza `search()` (si sólo deseas saber si existe, utiliza el método {{jsxref("RegExp.prototype.test()", "test()")}} del prototipo de `RegExp`); para más información (pero de ejecución más lenta) utiliza {{jsxref("String.prototype.match()", "match()")}} (similar al método {{jsxref("RegExp.prototype.exec()", "exec()")}} de las expresiones regulares).

## Ejemplos

### Utilizando `search()`

El siguiente ejemplo imprime un mensaje dependiendo de cuál sea el resultado de la evaluación.

```js
function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
  console.log(str + midstring + re);
}
```

## Especificaciones

| Especificaciones                                                                                             | Estado                       | Comentario                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Definición inicial. Implementado en JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.12', 'String.prototype.search')}}                     | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-string.prototype.search', 'String.prototype.search')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-string.prototype.search', 'String.prototype.search')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.String.search")}}

## Notas específicas de Gecko

- Antes de {{Gecko("8.0")}}, `search()` estaba mal implementado; cuando se invocaba sin parámetros o con {{jsxref("undefined")}}, buscaría coincidencias con la cadena 'undefined' en lugar de la cadena vacía. Esto está corregido; ahora `'a'.search()` y `'a'.search(undefined)` devuelven correctamente un 0.
- Desde Gecko 39 {{geckoRelease(39)}}, el argumento no estándar `flags` está obsoleto y muestra un aviso en la consola ({{bug(1142351)}}).
- Desde Gecko 47 {{geckoRelease(47)}}, el argumento no estándar `flags` no es soportado en compilaciones que no sean lanzamientos y pronto serán eliminadas por completo ({{bug(1245801)}}).
- Desde Gecko 49 {{geckoRelease(49)}}, el argumento no estándar `flags` no es soportado ({{bug(1108382)}}).

## Vea también

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
