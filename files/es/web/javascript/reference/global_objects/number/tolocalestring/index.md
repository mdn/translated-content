---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
---

{{JSRef}}

El método **`toLocaleString()`** retorna una representacion localizada del número en forma de texto

{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}

## Sintaxis

```
numObj.toLocaleString([locales [, options]])
```

### Parametros

Los argumentos `locales` y `options` personalizan el comportamiento de la funcion y permite especificar el lenguaje cuyo formato deberá ser utilizado. En implementaciones, que ignoran los argumentos `locales` y `options` la localización utilizada y la forma del texto retornado es enteramente dependiente de la implementación.

Mira el [constructor Intl.NumberFormat()](/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) para ver más detalles sobre los parámetros y como se utilizan.

### Valor de retorno

Un texto con una representación localizada del número dado.

## Performance

Cuando formateas una gran cantidad de números, es mejor crear un objeto {{jsxref("NumberFormat")}} y utilizar la función {{jsxref("NumberFormat.format")}}.

## Ejemplos

### Usando `toLocaleString`

Un uso básico sin especificar `locales`, retorna un texto formateado con el `locales` y `options` por defecto.

```js
var number = 3500;

console.log(number.toLocaleString()); // Muestra "3,500" si se está utilizando la localización U.S. English
```

### Verificando el soporte de los parámetros `locales` y `options`

Los parámetros `locales` y `options` no son soportados aún por todos los navegadores. Para verificar el soporte en ES5.1 y posteriores implementaciones, se puede utilizar el hecho que los tags inválidos en la localización son rechazados con una excepción {{jsxref("Global_Objects/RangeError", "RangeError")}}:

```js
function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

Antes de ES5.1, las implementaciones no requieren devolver una exepción {{jsxref("Global_Objects/RangeError", "RangeError")}} cuando `toLocaleString` es llamado sin argumentos.

Para verificar que funciona todos los navegadores, incluyendo aquellos que soportan ECMA-262, anterior a ES5.1, se puede verificar por las funcionalidades especificadas en ECMA-402 que requieren soportar opciones regionales para `Number.prototype.toLocaleString` directamente:

```js
function toLocaleStringSupportsOptions() {
  return !!(
    typeof Intl == "object" &&
    Intl &&
    typeof Intl.NumberFormat == "function"
  );
}
```

Esta validación del objeto global `Intl` , verificar que no es `null` (nulo) y que tiene la propiedad `NumberFormat` que es una función.

### Utilizando `locales`

Este ejemplo muestra alguna de las variaciones en los formatos de números localizados. Para obtener el formato de la localización utilizada en la interfaz del usuario de tu aplicación, asegurate de especificar la localización (y de ser posible alguna localización de respaldo) utilizando el parámetro `locales`:

```js
var number = 123456.789;

// Aleman utiliza comas como separador decimal y puntos miles
console.log(number.toLocaleString("de-DE"));
// → 123.456,789

// Arabe en la mayoría de países de habla Arabe utilizan numerales Eastern Arabic
console.log(number.toLocaleString("ar-EG"));
// → ١٢٣٤٥٦٫٧٨٩

// India utiliza separadores de miles/lakh/crore
console.log(number.toLocaleString("en-IN"));
// → 1,23,456.789

// la extensión nu requiere un sistema numerico, e.g. Decimales Chino
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六.七八九

// cuando solicitas un lenguage que podria no ser soportado, como
// Balinese, incluye un lenguaje de respaldo, en este caso Indonesio
console.log(number.toLocaleString(["ban", "id"]));
// → 123.456,789
```

### Utilizando `options`

El resultado proveido por `toLocaleString` puede ser personalizado utilizando el parámetro `options` :

```js
var number = 123456.789;

// solicitar un formato de moneda
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// → 123.456,79 €

// en Japones yen no utiliza una moneda menor
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// → ￥123,457

// limitar a tres digitos el significante
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// → 1,23,000

// Utilizar el lenguaje por defecto del host con opciones para el formato del número
var num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// → "30,000.65" donde English es el lenguaje por defecto, o
// → "30.000,65" donde Aleman es el lenguaje por defecto, o
// → "30 000,65" donde French es el lenguaje por defecto
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Number.prototype.toString()")}}
