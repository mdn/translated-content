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

**`toLocaleString()`** メソッドは、配列の要素を表す文字列を返します。配列の要素は、それぞれの `toLocaleString` メソッドを使い、ロケール固有の文字列に変換されます (例えばカンマ “,”など)。

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html","shorter")}}

## 構文

```
arr.toLocaleString([locales[, options]]);
```

### 引数

- `locales` {{optional_inline}}
  - : BCP 47 言語タグの文字列か、その配列です。`locales` 引数の一般的な形式と解釈については {{jsxref("Intl")}} ページを参照してください。
- `options` {{optional_inline}}
  - : 設定プロパティのオブジェクトです。数値に関しては {{jsxref("Number.prototype.toLocaleString()")}} を、日付に関しては {{jsxref("Date.prototype.toLocaleString()")}} を見てください。

### 返値

配列の要素を表す文字列です。

## ポリフィル

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

[`Object.defineProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) が利用できないとても古い JavaScript エンジンをサポートする必要がある場合、`Array.prototype` のメソッドを polyfill するのは避けたほうがよいでしょう。それらを列挙不可にすることができないからです。

## 例

### locales と options の使用

配列の要素は、その `toLocaleString` メソッドを使用して文字列に変換されます。

- `Object`: {{jsxref("Object.prototype.toLocaleString()")}}
- `Number`: {{jsxref("Number.prototype.toLocaleString()")}}
- `Date`: {{jsxref("Date.prototype.toLocaleString()")}}

`prices` 配列内の文字列と数値の通貨を常に表示します。

```js
var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
```

さらに多くの例を知りたいなら、 {{jsxref("Intl")}} や {{jsxref("NumberFormat")}}、{{jsxref("DateTimeFormat")}} ページを見てください。

## 仕様書

| 仕様書                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.tolocalestring', 'Array.prototype.toLocaleString')}}         |
| {{SpecName('ES Int Draft', '#sup-array.prototype.tolocalestring', 'Array.prototype.toLocaleString')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.toLocaleString")}}

## 関連情報

- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
