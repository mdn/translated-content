---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
tags:
  - Cadena
  - Internacionalizacion
  - Prototipo
  - Referencia
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/toLocaleLowerCase
---
{{JSRef}}El método **`toLocaleLowerCase()`** retorna la cadena de texto desde la que se llama convertida en minúsculas, de acuerdo con cualquier localización específica de correspondencia de mayúsculas y minúsculas.{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

Los fuentes para este ejemplo interactivo están almacenados en un repositorio GitHub. Si quieres contribuir en el proyecto de ejemplos interactivos, por favor clona https\://github.com/mdn/interactive-examples y envíanos un pull request.

## Sintaxis

```
str.toLocaleLowerCase()
str.toLocaleLowerCase(locale)
str.toLocaleLowerCase([locale, locale, ...])
```

### Parámetros

- `locale` {{optional_inline}}
  - : El parámetro `locale` indica la localización que se utilizará para convertir a minúsculas de acuerdo con culalquier correspondencia de mayúsculas y minúsculas. Si se proporcionan múltiples locales en un {{jsxref("Array")}}, se utiliza [el mejor local disponible](https://tc39.github.io/ecma402/#sec-bestavailablelocale). La localización por defecto es la localización actual configurada en el _host_.

### Valor retornado

Una nueva cadena que representa la cadena desde la que se llama convertida a minúsculas, de acuerdo con cualquier localización específica de correspondencia de mayúsculas y minúsculas.

### Excepciones

- Una excepción de tipo {{jsxref("RangeError")}} ("invalid language tag: xx_yy") se lanzará si el argumento `locale` no es una etiqueta válida de lenguaje.
- Una excepción de tipo {{jsxref("TypeError")}} ("invalid element in locales argument") se lanzará si un elemento del arreglo no es del tipo cadena.

## Descripción

El método `toLocaleLowerCase()` retorna la cadena de texto desde la que se llama convertida en minúsculas, de acuerdo con cualquier localización específica de correspondencia de mayúsculas y minúsculas. `toLocaleLowerCase()` no afecta el valor de la cadena desde la que se llama. En la mayoría de los casos, producirá el mismo resultado que {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}, pero para algunos locales, como el turco, cuyas correspondencias de mayúsculas y minúsculas no siguen las correpsondencias por defecto de Unicode, podría producir de un resultado diferente.

## Ejemplos

### Utilizando `toLocaleLowerCase()`

```js
'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // true
```

## Especificaciones

| Especificación                                                                                                                                   | Estatus                          | Comentario                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                                         | {{Spec2('ES3')}}             | Initial definition. Implemented in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.17', 'String.prototype.toLocaleLowerCase')}}                                         | {{Spec2('ES5.1')}}         |                                                    |
| {{SpecName('ES6', '#sec-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}}             | {{Spec2('ES6')}}             |                                                    |
| {{SpecName('ESDraft', '#sec-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}}     | {{Spec2('ESDraft')}}     |                                                    |
| {{SpecName('ES Int Draft', '#sup-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}} | {{Spec2('ES Int Draft')}} | ES Intl 2017 added the `locale` parameter.         |

## Compatibilidad entre navegadores

{{Compat("javascript.builtins.String.toLocaleLowerCase")}}

## Vea también

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
