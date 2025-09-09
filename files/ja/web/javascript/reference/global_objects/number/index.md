---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Number`** （数値）の値は `37` や `-9.25` のような浮動小数点数を表します。

**`Number`** コンストラクターは、数値を扱うための定数とメソッドを含んでいます。他の型の値は `Number()` 関数を用いて数値に変換することができます。

## 解説

数値は、`255` や `3.14159` のようなリテラル形式で表現するのが最も一般的です。[字句文法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#数値リテラル)には、より詳しい参照があります。

```js
255; // 二百五十五
255.0; // 同じ数値
255 === 255.0; // true
255 === 0xff; // true （16 進記法）
255 === 0b11111111; // true （2 進記法）
255 === 0.255e3; // true （10 進指数記法）
```

JavaScript コードにおける `37` のような数値リテラルは浮動小数点値であり、整数ではありません。日常的に使用される独立した整数型はありません。（JavaScript は長整数 ({{jsxref("BigInt")}}) 型を持つようになりましたが、日常の利用で数値を置き換えるように設計されてはいません。 `37` は数値であり、長整数ではありません。）

関数として使用された場合、 `Number(value)` は文字列やその他の値を数値型に変換します。値が変換できない場合は、 {{jsxref("NaN")}} を返します。

```js
Number("123"); // 数値 123 を返す
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

### 数値のエンコーディング

JavaScript の数値 (`Number`) 型は [IEEE 754 の倍精度 64ビットバイナリー形式](https://ja.wikipedia.org/wiki/%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0)であり、 Java や C# の `double` のようなものです。つまり、小数値を表しますが、格納される数値の大きさと精度には制限があります。とても簡単に説明すると、IEEE 754 の倍精度数は、3 つの部分を表すのに 64 ビットを使用します。

- 1 ビットの符号（_sign_, 正の数または負の数）
- 11 ビットの指数部（_exponent_, -1022 から 1023）
- 52 ビットの仮数部（_mantissa_, 0 と 1 の間の数値を表す）

仮数部（_significand_ とも呼ばれる）は、実際の値を表す部分（有効数字）です。指数は、仮数を乗じるべき 2 のべき乗です。科学的記数法として考えると、次のようになります。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

仮数部は 52 ビットで格納され、2 進数の小数でいうところの `1.…` 以降の桁と解釈されます。したがって，仮数部の精度は 2<sup>-52</sup>（{{jsxref("Number.EPSILON")}} で取得可能）、すなわち小数点以下 15 ～ 17 桁程度となります。演算は[丸め誤差](https://ja.wikipedia.org/wiki/浮動小数点数#エラー（誤差）)の影響を受けます。

数値が保持できる最大の値は 2<sup>1023</sup> × (2 - 2<sup>-52</sup>)（2 進数で指数が 1023、仮数が 0.1111...）であり、これは {{jsxref("Number.MAX_VALUE")}} で取得可能です。それ以上の値は、特殊な数値定数 {{jsxref("Infinity")}} で置き換えられます。

整数は、仮数が 53 ビット（先頭の 1 も含む）しか保持できないため、精度を落とさずに表せるのは -2<sup>53</sup> + 1 から 2<sup>53</sup> - 1 の範囲（{{jsxref("Number.MIN_SAFE_INTEGER")}} と {{jsxref("Number.MAX_SAFE_INTEGER")}} で取得できる）だけです。

これについては、[ECMAScript 標準](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type)に記述されています。

### 数値への変換

数字を期待する多くの組み込み演算は、最初に引数を数字に変換します（`Number`オブジェクトが数字プリミティブと似たような動作をするのは、このためです）。[この操作](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber) は以下のように要約されます。

- 数値はそのまま返されます。
- [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) は [`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) になります。
- [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) は `0` になります。
- `true` は `1` に、`false` は `0` になります。
- 文字列は、[数値リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#数値リテラル)が入っているかのように解釈して変換されます。解釈に失敗した場合は `NaN` が返されます。実際の数値リテラルと比較すると、いくつかの異なる点があります。
  - 先頭および末尾のホワイトスペース/改行文字は無視されます。
  - 先頭が数字 `0` である場合、数値が 8 進数のリテラルとなる（または厳格モードで拒否される）ことはありません。
  - 文字列の始めには、符号を示すために `+` と `-` を置くことができます。（実際のコードでは、これらはリテラルの一部に「見える」のですが、実際には別個の単項演算子です。）ただし、符号は一度しか現れず、空白が続いてはいけません。
  - `Infinity` と `-Infinity` はリテラルとして認識されます。実際のコードでは、これらはグローバル変数です。
  - 空文字列またはホワイトスペースのみの文字列は `0` に変換されます。
  - [数値の区切り文字](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#数値の区切り文字)は許可されません。
- [長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)は、意図しない精度の低下を防ぐために {{jsxref("TypeError")}} 例外が発生します。
- [シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)は {{jsxref("TypeError")}} 例外が発生します。
- オブジェクトはまず[プリミティブに変換されます](/ja/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion)（[`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)を `"number"` のヒント付きで、`valueOf()`、`toString()` メソッドをこの順で呼び出すことで）。結果のプリミティブは数値へ変換されます。

JavaScript でほぼ同じ効果を得るには、2 つの方法があります。

- [単項プラス](/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus): `+x` は上で説明した数値変換の手順を、`x` を変換するためにそのまま実行します。
- [`Number()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) 関数: `Number(x)` は `x` を変換する同じアルゴリズムを使用します。ただし[長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)は {{jsxref("TypeError")}} 例外を発生させず、精度が落ちる可能性があるものの、数値としての値を返します。

{{jsxref("Number.parseFloat()")}} および {{jsxref("Number.parseInt()")}} は `Number()` と似ていますが、文字列のみを若干異なる解釈ルールで変換します。例えば、`parseInt()` は小数点を解釈せず、 `parseFloat()` は `0x` の接頭辞を解釈しません。

#### 整数への変換

演算子の中には整数を期待するものがあり ます。特に、配列や文字列の添字、時刻の成分、数値の基数を扱う演算子はそうです。上記の数値強制の手順を実行した後、結果は[切り捨て](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)て（小数部分を捨てて）整数に変換します。数値が無限大 (±Infinity) の場合は、そのまま返します。数値が `NaN` または `-0` の場合、`0` を返します。したがって、結果は常に整数（`-0`ではない）か ±Infinity となります。

注目すべきは、整数に変換すると `undefined` も `null` も `0` になることです。これは `undefined` が `NaN` に変換され、これも `0` になるためです。

#### 固定長数値への変換

JavaScript には整数の 2 進数エンコーダーを処理する低レベルの関数がいくつかあり、特に[ビット演算子](/ja/docs/Web/JavaScript/Reference/Operators#ビットシフト演算子)と {{jsxref("TypedArray") }} オブジェクトが有名です。ビット演算子は常にオペランドを 32 ビット整数に変換します。この場合、値を数値に変換した後、最初の[切り捨て](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)で小数部を取り除き、次に整数の 2 の補数で最低ビットを導いて、数値を指定の幅に正規化します。

```js
new Int32Array([1.1, 1.9, -1.1, -1.9]); // Int32Array(4) [ 1, 1, -1, -1 ]

new Int8Array([257, -257]); // Int8Array(2) [ 1, -1 ]
// 257 = 0001 0000 0001
//     =      0000 0001 (mod 2^8)
//     = 1
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = -1 (as signed integer)

new Uint8Array([257, -257]); // Uint8Array(2) [ 1, 255 ]
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = 255 (as unsigned integer)
```

## コンストラクター

- {{jsxref("Number/Number", "Number()")}}
  - : `Number` オブジェクトを生成します。関数として呼び出された場合は、数値型のプリミティブ値を返します。

## 静的プロパティ

- {{jsxref("Number.EPSILON")}}
  - : 数値として表される 2 個の数の最小の差です。
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : JavaScript における確実な整数の最大値 (2<sup>53</sup> - 1) です。
- {{jsxref("Number.MAX_VALUE")}}
  - : 表現可能な正の数の最大値です。
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : JavaScript における確実な整数の最小値 (-(2<sup>53</sup> - 1)) です。
- {{jsxref("Number.MIN_VALUE")}}
  - : 表現可能な正の数の最小値。0 に最も近い正の数です（0 ではありません）。
- {{jsxref("Number.NaN")}}
  - : 特殊な "**N**ot **a** **N**umber" （数値ではない）の値です。
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : 負の無限大を表す特別な値です。オーバーフロー時に返されます。
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : 無限大を表す特別な値です。オーバーフロー時に返されます。

## 静的メソッド

- {{jsxref("Number.isFinite()")}}
  - : 渡された値が有限数であるかどうかを判断します。
- {{jsxref("Number.isInteger()")}}
  - : 渡された値が整数であるかどうかを判断します。
- {{jsxref("Number.isNaN()")}}
  - : 渡された値が `NaN` であるかどうかを判断します。
- {{jsxref("Number.isSafeInteger()")}}
  - : 渡された値が確実な範囲の整数（-(2<sup>53</sup> - 1) から 2<sup>53</sup> - 1 の間）であるかどうかを判断します。
- {{jsxref("Number.parseFloat()")}}
  - : これはグローバルの {{jsxref("parseFloat()")}} 関数と同じです。
- {{jsxref("Number.parseInt()")}}
  - : これはグローバルの {{jsxref("parseInt()")}} 関数と同じです。

## インスタンスプロパティ

これらのプロパティは `Number.prototype` に定義されており、すべての `Number` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`Number` インスタンスの場合、初期値は {{jsxref("Number/Number", "Number")}} コンストラクターです。

## インスタンスメソッド

- {{jsxref("Number.prototype.toExponential()")}}
  - : 指数表記で数値を表す文字列を返します。
- {{jsxref("Number.prototype.toFixed()")}}
  - : 固定小数点表記で数値を表す文字列を返します。
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : この値を言語依存の表現で表す文字列を返します。 {{jsxref("Object.prototype.toLocaleString()")}} メソッドを上書きします。
- {{jsxref("Number.prototype.toPrecision()")}}
  - : 指定された精度で、固定小数点表記または指数表記で数値で表す文字列を返します。
- {{jsxref("Number.prototype.toString()")}}
  - : 指定された基数を元に、指定されたオブジェクトを表す文字列を返します。 {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。
- {{jsxref("Number.prototype.valueOf()")}}
  - : 指定されたオブジェクトのプリミティブ値を返します。 {{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。

## 例

### Number オブジェクトを使用して変数に値を代入する

以下の例では、`Number` オブジェクトのプロパティを使用して、いくつかの数の変数に値を代入します。

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

### Number の整数の範囲

次の例は、`Number` オブジェクトで表現可能な最小の整数値と最大の整数値です。

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

JSON にシリアライズされたデータを解析する場合、整数値がこの範囲を超えていると、 JSON パーサーがこの値を `Number` 型に変換したときに信頼できない値になります。

可能な回避策として、代わりに {{jsxref("String")}} を使用してください。

大きい数値は {{jsxref("BigInt")}} 型を用いて表すことができます。

### Number を使用して Date オブジェクトを変換する

以下の例は、 `Number` を関数として用いて、{{jsxref("Date")}} オブジェクトを数値に変換します。

```js
const d = new Date("December 17, 1995 03:24:00");
console.log(Number(d));
```

これは、コンソールに `819199440000` を出力します。

### 数字や null を数値に変換する

```js
Number("123"); // 123
Number("123") === 123; // true
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
Number("-Infinity"); // -Infinity
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [最新の `Number` の動作（2 進数と 8 進数のリテラルに対応）のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- [算術演算子](/ja/docs/Web/JavaScript/Reference/Operators#算術演算子)
- {{jsxref("Math")}} グローバルオブジェクト
- 任意の精度の整数型: {{jsxref("BigInt")}}
