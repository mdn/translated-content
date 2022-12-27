---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
---

{{JSRef}}

**`padStart()`** メソッドは、結果の文字列が指定した長さになるように、現在の文字列を他の文字列で (必要に応じて繰り返して) 延長します。延長は、現在の文字列の先頭から適用されます。

{{EmbedInteractiveExample("pages/js/string-padstart.html")}}

## 構文

```
str.padStart(targetLength [, padString])
```

### 引数

- `targetLength`
  - : 現在の `str` の延長後に返される文字列の長さです。この値が `str.length` よりも短い場合、 `str` がそのまま返されます。
- `padString` {{optional_inline}}
  - : 現在の `str` を延長するための文字列です。 `padString` が `targetLength` より長い場合は、右からその長さ分が切り捨てられます。この引数の既定値は、 " " (`U+0020 'SPACE'`) です。

### 返値

現在の文字列の先頭に `padString` が適用された、指定された `targetLength` の長さの {{jsxref("String")}} です。

## 例

### 基本的な例

```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

### 数値を固定長文字列へ変換

```js
// Javascript version of: (unsigned)
//  printf "%0*d" width num
function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}

const num = 123;
console.log(leftFillNum(num, 5));
// expected output: "00123"
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.padstart', 'String.prototype.padStart')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.String.padStart")}}

## 関連情報

- {{jsxref("String.prototype.padEnd()")}}
- [A polyfill](https://github.com/uxitten/polyfill/blob/master/string.polyfill.js)
