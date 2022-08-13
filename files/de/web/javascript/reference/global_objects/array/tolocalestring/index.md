---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
tags:
  - Array
  - Internationalization
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
---
{{JSRef}}

Die Methode **`toLocaleString()`** gibt als Rückgabewert einen String zurück, welcher die Elemente des Arrays darstellt. Die Array-Elemente werden mittels ihrer `toLocaleString` Methode in Strings umgewandelt und durch einen sprachspezifischen String (wie zum Beispiel ein Kommazeichen “,”) separiert.

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html")}}

## Syntax

    arr.toLocaleString([locales [, options]]);

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem Language-Tag nach BCP 47 oder ein Array solcher Strings. Für die allgemeine Art und Interpretation des `locales` Parameters, siehe Seite {{jsxref("Intl")}}.
- `options` {{optional_inline}}
  - : Ein Objekt mit konfigurierbaren Eigenschaften, für Numbers siehe {{jsxref("Number.prototype.toLocaleString()")}}, und für Datumsangaben siehe {{jsxref("Date.prototype.toLocaleString()")}}.

### Rückgabewert

Ein einzelner String der die Elemente des Arrays darstellt.

## Beispiele

### Verwendung von `locales` und `options`

Die Elemente des Arrays werden mittels der `toLocaleString` Methode in einen String umgewandelt.

- `Object`: {{jsxref("Object.prototype.toLocaleString()")}}
- `Number`: {{jsxref("Number.prototype.toLocaleString()")}}
- `Date`: {{jsxref("Date.prototype.toLocaleString()")}}

Jedem Strings und Numbers Element im Array `prices` die Währung zuordnen:

```js
var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
```

Für weitere Beispiele, siehe auch {{jsxref("Global_Objects/Intl","Intl")}}, {{jsxref("Global_Objects/NumberFormat","NumberFormat")}} und {{jsxref("Global_Objects/DateTimeFormat","DateTimeFormat")}}.

## Polyfill

```js
// https://tc39.github.io/ecma402/#sup-array.prototype.tolocalestring
if (!Array.prototype.toLocaleString) {
  Object.defineProperty(Array.prototype, 'toLocaleString', {
    value: function(locales, options) {
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
      var separator = ',';

      // 4. If len is zero, return the empty String.
      if (len === 0) {
        return '';
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
      var r = firstElement == null ?
        '' : firstElement.toLocaleString(locales, options);

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
        r = nextElement == null ?
          '' : nextElement.toLocaleString(locales, options);

        // e. Let R be a String value produced by
        //   concatenating S and R.
        r = s + r;

        // f. Increase k by 1.
        k++;
      }

      // 10. Return R.
      return r;
    }
  });
}
```

Für die Unterstützung von veralteten JavaScript Engines, die [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) nicht kennen, sollte kein Polyfill für `Array.prototype` Methoden eingesetzt werden, da sie auf diese Weise nicht mehr nicht-durchzählbar gemacht werden können.

## Spezifikationen

| Spezifikation                                                                                                                            | Status                           | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.tolocalestring', 'Array.prototype.toLocaleString')}}         | {{Spec2('ESDraft')}}     | Initiale Definition war in ECMAScript 3.              |
| {{SpecName('ES Int Draft', '#sup-array.prototype.tolocalestring', 'Array.prototype.toLocaleString')}} | {{Spec2('ES Int Draft')}} | Diese Definition ersetzt die Definition aus ECMA-262. |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.toLocaleString")}}

## Siehe auch

- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("Global_Objects/Intl","Intl")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
