---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
---

{{JSRef}}

El método **`toLocaleUpperCase()`** devuelve el valor de la cadena que lo llama convertido en mayúsculas, de acuerdo con las asignaciones de casos específicos de la configuración regional.

## Syntaxis

```
str.toLocaleUpperCase()
str.toLocaleUpperCase(locale)
str.toLocaleUpperCase([locale, locale, ...])
```

### Parámetros

- `locale` {{optional_inline}}
  - : El parámetro `locale` indica la configuración regional que se va a utilizar para convertir en mayúsculas según las asignaciones de casos específicos de la configuración regional. Si se proporcionan varios locales en un {{jsxref ("Array")}}, se utiliza la mejor configuración regional disponible. La configuración regional predeterminada es la configuración regional actual del entorno de host.

### Valor de retorno

Una nueva cadena que representa la cadena de llamada convertida en mayúsculas, de acuerdo con cualquier asignación de mayúsculas de idioma específico.

### Exceciones

- Un {{jsxref("RangeError")}} ("invalid language tag: xx_yy") se arroja si un argumento de configuración regional no es una etiqueta de idioma válida.
- Un {{jsxref("TypeError")}} ("invalid element in locales argument") se lanzará si un elemento de matriz no es de tipo cadena.

## Descripción

El método `toLocaleUpperCase()` devuelve el valor de la cadena convertida en mayúsculas según las asignaciones de casos específicos de la configuración regional. `toLocaleUpperCase()` no afecta al valor de la cadena en sí. En la mayoría de los casos, esto producirá el mismo resultado que {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}, pero para algunas localidades, como turco, cuyas asignaciones de mayúsculas y minúsculas no siguen la mayúsculas y minúsculas en Unicode, puede haber un resultado diferente.

## Ejemplos

### Usando `toLocaleUpperCase()`

```js
"alphabet".toLocaleUpperCase(); // 'ALPHABET'

"i\u0307".toLocaleUpperCase("lt-LT"); // 'I'

let locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
"i\u0307".toLocaleUpperCase(locales); // 'I'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
