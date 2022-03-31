---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
tags:
  - クラス
  - JavaScript
  - Number
  - リファレンス
  - ポリフィル
browser-compat: javascript.builtins.Number
translation_of: Web/JavaScript/Reference/Global_Objects/Number
---
{{JSRef}}**`Number`** は[プリミティブラッパーオブジェクト](/ja/docs/Glossary/Primitive#primitive_wrapper_objects_in_javascript)で、 `37` や `-9.25` のような数値を表現したり操作したりするために使用されます。

**`Number`** コンストラクターは、数値を扱うための定数とメソッドを含んでいます。他の型の値は **`Number()` 関数**を用いて数値に変換することができます。

JavaScript の **Number** 型は [IEEE 754 の倍精度 64ビットバイナリー形式](https://ja.wikipedia.org/wiki/%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0)であり、 Java や C# の `double` のようなものです。これは小数点以下の数値を表すことができることを意味しますが、格納できる値にはいくつかの制限があります。 Number は小数点以下約 17 桁の精度しか保持できません。演算は[丸め誤差](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding)の影響を受けます。 Number が保持できる最大の値は約 1.8E308 です。それ以上の数値は、特殊な `Number` の定数 {{jsxref("Infinity")}} に置き換えられます。

JavaScript コードにおける `37` のような数値リテラルは浮動小数点値であり、整数ではありません。日常的に使用される独立した整数型はありません。 (JavaScript は {{jsxref("BigInt")}} 型を持つようになりましたが、日常の利用で Number を置き換えるように設計されてはいません。 `37` は Number であり、 BigInt ではありません。)

`Number` は `0b101`, `0o13`, `0x0A` のようなリテラル形式で表現することもできます。数値の[字句文法はこちら](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals)を参照してください。

## 解説

関数として使用された場合、 `Number(value)` は文字列やその他の値を Number 型に変換します。値が変換できない場合は、 {{jsxref("NaN")}} を返します。

### リテラル構文

```js
123    // 百二十三
123.0  // 同じ
123 === 123.0  // true
```

### 関数構文

```js
Number('123')  // 数値 123 を返す
Number('123') === 123  // true

Number("unicorn")  // NaN
Number(undefined)  // NaN
```

## コンストラクター

- [`Number()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
  - : 新しい `Number` 値を生成します。

## 静的プロパティ

- {{jsxref("Number.EPSILON")}}
  - : 数値として表される 2 個の数の最小の差です。
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : JavaScript における確実な整数の最大値 (`2^53 - 1`) です。
- {{jsxref("Number.MAX_VALUE")}}
  - : 表現可能な正の数の最大値です。
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : JavaScript における確実な整数の最小値 (`-(2^53 - 1)`) です。
- {{jsxref("Number.MIN_VALUE")}}
  - : 表現可能な正の数の最小値。0 に最も近い正の数です (0 ではありません)。
- {{jsxref("Number.NaN")}}
  - : 特殊な "**N**ot **a** **N**umber" (数値ではない) の値です。
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : 負の無限大を表す特別な値です。オーバーフロー時に返されます。
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : 無限大を表す特別な値です。オーバーフロー時に返されます。
- {{jsxref("Number", "Number.prototype")}}
  - : `Number` オブジェクトへプロパティの追加ができるようにします。

## 静的メソッド

- {{jsxref("Number.isNaN()")}}
  - : 渡された値が `NaN` であるかどうかを判断します。
- {{jsxref("Number.isFinite()")}}
  - : 渡された値が有限数であるかどうかを判断します。
- {{jsxref("Number.isInteger()")}}
  - : 渡された値が整数であるかどうかを判断します。
- {{jsxref("Number.isSafeInteger()")}}
  - : 渡された値が確実な範囲の整数 (`-(2^53 - 1)` から `2^53 - 1` の間) であるかどうかを判断します。
- {{jsxref("Number.parseFloat()", "Number.parseFloat(<var>string</var>)")}}
  - : これはグローバルの {{jsxref("parseFloat", "parseFloat()")}} 関数と同じです。
- {{jsxref("Number.parseInt()", "Number.parseInt(<var>string</var>, [<var>radix</var>])")}}
  - : これはグローバルの {{jsxref("parseInt", "parseInt()")}} 関数と同じです。

## インスタンスメソッド

- {{jsxref("Number.prototype.toExponential()" ,"Number.prototype.toExponential(<var>fractionDigits</var>)")}}
  - : 指数表記で数値を表す文字列を返します。
- {{jsxref("Number.prototype.toFixed()", "Number.prototype.toFixed(<var>digits</var>)")}}
  - : 固定小数点表記で数値を表す文字列を返します。
- {{jsxref("Number.prototype.toLocaleString()", "Number.prototype.toLocaleString([<var>locales</var> [, <var>options</var>]])")}}
  - : この値を言語依存の表現で表す文字列を返します。 {{jsxref("Object.prototype.toLocaleString()")}} メソッドを上書きします。
- {{jsxref("Number.prototype.toPrecision()", "Number.prototype.toPrecision(<var>precision</var>)")}}
  - : 指定された精度で、固定小数点表記または指数表記で数値で表す文字列を返します。
- {{jsxref("Number.prototype.toString()", "Number.prototype.toString([<var>radix</var>])")}}
  - : 指定された基数を元に、指定されたオブジェクトを表す文字列を返します。 {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。
- {{jsxref("Number.prototype.valueOf()")}}
  - : 指定されたオブジェクトのプリミティブ値を返します。 {{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。

## 例

### Number オブジェクトを使用して変数に値を代入する

以下の例では、`Number` オブジェクトのプロパティを使用して、いくつかの数の変数に値を代入します。

```js
const biggestNum     = Number.MAX_VALUE
const smallestNum    = Number.MIN_VALUE
const infiniteNum    = Number.POSITIVE_INFINITY
const negInfiniteNum = Number.NEGATIVE_INFINITY
const notANum        = Number.NaN
```

### Number の整数の範囲

次の例は、`Number` オブジェクトで表現可能な最小の整数値と最大の整数値です (詳細は、ECMAScript 標準の [6.1.6 The Number Type](https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type) の節を参照してください)。

```js
const biggestInt  = Number.MAX_SAFE_INTEGER  //  (2**53 - 1) =>  9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER  // -(2**53 - 1) => -9007199254740991
```

JSON にシリアライズされたデータを解析する場合、整数値がこの範囲を超えていると、 JSON パーサーがこの値を `Number` 型に変換したときに信頼できない値になります。

可能な回避策として、代わりに {{jsxref("String")}} を使用してください。

大きい数値は {{jsxref("BigInt")}} 型を用いて表すことができます。

### Number を使用して Date オブジェクトを変換する

以下の例は、 `Number` を関数として用いて、{{jsxref("Date")}} オブジェクトを数値に変換します。

```js
let d = new Date('December 17, 1995 03:24:00')
console.log(Number(d))
```

これは、コンソールに "819199440000" を出力します。

### 数字や null を数値に変換する

```js
Number('123')     // 123
Number('123') === 123 // true
Number('12.3')    // 12.3
Number('12.00')   // 12
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN
Number('-Infinity') // -Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 最新の `Number` の動作（2 進数と 8 進数のリテラルに対応）のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) にあります
- {{jsxref("NaN")}}
- [算術演算子](/ja/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- {{jsxref("Math")}} グローバルオブジェクト
- 任意の精度の整数型: {{jsxref("BigInt")}}
