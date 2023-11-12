---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
---

{{JSRef}}

El método **`toLocaleString()`** devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos a texto usando su método `toLocaleString` y dichos Strings son separados por un caracter específico para la localidad (como una coma para la separación de decimales ",").

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html")}}

## Sintaxis

```
arr.toLocaleString([locales[, options]]);
```

### Parámetros

- `locales` {{optional_inline}}
  - : Una cadena de texto con una etiqueta de idioma BCP 47, o un array de dichos strings. Para la forma general e interpretación the los argumentos `locales`, ver la página {{jsxref("Intl")}}.
- `options` {{optional_inline}}
  - : Un objeto con las configuraciones, para números ver {{jsxref("Number.prototype.toLocaleString()")}}, y para fechas ver {{jsxref("Date.prototype.toLocaleString()")}}.

### Valor de retorno

Una cadena de texto representando los elementos del array.

## Ejemplos

### Usando `locales` y `options`

Los elementos del array son convertidos a strings usando sus métodos `toLocaleString`.

- `Object`: {{jsxref("Object.prototype.toLocaleString()")}}
- `Number`: {{jsxref("Number.prototype.toLocaleString()")}}
- `Date`: {{jsxref("Date.prototype.toLocaleString()")}}

Siempre mostrar la moneda para los strings y números en el array `precios`:

```js
var precios = ["$7", 500, 8123, 12];
precios.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

// "$7, $500, $8.123, $12"
```

Para más ejemplos, ver también {{jsxref("Intl")}}, {{jsxref("NumberFormat")}}, y {{jsxref("DateTimeFormat")}}.

## Polyfill

```js
// https://tc39.github.io/ecma402/#sup-array.prototype.tolocalestring
if (!Array.prototype.toLocaleString) {
  Object.defineProperty(Array.prototype, "toLocaleString", {
    value: function (locales, options) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var a = Object(this);

      // 2. Let len be ? ToLength(? Get(A, "length")).
      var len = a.length >>> 0;

      // 3. Let separator be the String value for the
      //    list-separator String appropriate for the
      //    host environment's current locale (this is
      //    derived in an implementation-defined way).
      // NOTE: In this case, we will use a comma
      var separator = ",";

      // 4. If len is zero, return the empty String.
      if (len === 0) {
        return "";
      }

      // 5. Let firstElement be ? Get(A, "0").
      var firstElement = a[0];
      // 6. If firstElement is undefined or null, then
      //  a.Let R be the empty String.
      // 7. Else,
      //  a. Let R be ?
      //     ToString(?
      //       Invoke(
      //        firstElement,
      //        "toLocaleString",
      //        « locales, options »
      //       )
      //     )
      var r =
        firstElement == null
          ? ""
          : firstElement.toLocaleString(locales, options);

      // 8. Let k be 1.
      var k = 1;

      // 9. Repeat, while k < len
      while (k < len) {
        // a. Let S be a String value produced by
        //   concatenating R and separator.
        var s = r + separator;

        // b. Let nextElement be ? Get(A, ToString(k)).
        var nextElement = a[k];

        // c. If nextElement is undefined or null, then
        //   i. Let R be the empty String.
        // d. Else,
        //   i. Let R be ?
        //     ToString(?
        //       Invoke(
        //        nextElement,
        //        "toLocaleString",
        //        « locales, options »
        //       )
        //     )
        r =
          nextElement == null
            ? ""
            : nextElement.toLocaleString(locales, options);

        // e. Let R be a String value produced by
        //   concatenating S and R.
        r = s + r;

        // f. Increase k by 1.
        k++;
      }

      // 10. Return R.
      return r;
    },
  });
}
```

Si necesitas soportar motores de JavaScript obsoletos que no compatibilizan con [`Object.defineProperty`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), es mejor no utilizar los métodos `Array.prototype`, ya que no se pueden hacer no-enumerables.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
