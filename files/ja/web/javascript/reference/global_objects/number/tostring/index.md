---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
tags:
  - JavaScript
  - メソッド
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toString
---
{{JSRef}}

**`toString()`** メソッドは、指定された {{jsxref("Number")}} オブジェクトを表す文字列を返します。

{{EmbedInteractiveExample("pages/js/number-tostring.html")}}

## 構文

```js
toString()
toString(radix)
```

### 引数

- `radix` {{optional_inline}}
  - : 数値を表すために使われる基数を指定する、 `2` から `36` までの整数です。

### 返値

指定された {{jsxref("Number")}} オブジェクトを表す文字列です。

## 例外

- {{jsxref("RangeError")}}
  - : `toString()` は、与えられた `radix` が `2` 未満、または `36` を超える場合、{{jsxref("RangeError")}} が発生します。

## 解説

{{jsxref("Number")}} オブジェクトは {{jsxref("Object")}} の `toString()` メソッドを上書きします。つまり、 {{jsxref("Object.prototype.toString()")}} を継承しません。 {{jsxref("Number")}} オブジェクトでは、 `toString()` メソッドは指定された基数でオブジェクトを表した文字列を返します。

`toString()` メソッドはその最初の引数を解釈し、 `radix` で指定された基数で表した文字列を返します。 `10` より大きい基数では、 9 より大きい数をアルファベットの文字で示します。例えば、16進表記 (基数 16) では、`a` から `f` までが使われます。

`radix` が指定されなかった場合、基数は `10` と見なされます。

`numObj` が負の場合、符号は保存されます。これは基数が 2 の場合も同様です。返される文字列は、`numObj` の 2 の補数**ではなく**、先頭に `-` 符号がついた `numObj` の正のバイナリー表現です。

`numObj` が整数でない場合、「ドット」符号は小数点以下を区切るために使われます。

## 例

### toString の使用

```js
let count = 10

console.log(count.toString())    // '10' を表示します。
console.log((17).toString())     // '17' を表示します。
console.log((17.2).toString())   // '17.2' を表示します。

let x = 6

console.log(x.toString(2))       // '110' を表示します。
console.log((254).toString(16))  // 'fe' を表示します。

console.log((-10).toString(2))   // '-1010' を表示します。
console.log((-0xff).toString(2)) // '-11111111' を表示します。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
