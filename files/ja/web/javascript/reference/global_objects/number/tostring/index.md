---
title: Number.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toString()`** は {{jsxref("Number")}} 値のメソッドで、この数値を表現する文字列を返します。

{{InteractiveExample("JavaScript デモ: Number.prototype.toString()")}}

```js interactive-example
function hexColor(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

console.log(hexColor(233));
// 予想される結果: "e9"

console.log(hexColor("11"));
// 予想される結果: "b"
```

## 構文

```js-nolint
toString()
toString(radix)
```

### 引数

- `radix` {{optional_inline}}
  - : 数値を表現するために使われる基数を指定する、 `2` から `36` までの整数です。既定値は 10 です。

### 返値

指定された数値を表現する文字列です。基数が 10 で、（符号を無視した）数値の規模が 10<sup>21</sup> 以上または 10<sup>-6</sup> 以下の場合には、科学記数法が使用されます。

## 例外

- {{jsxref("RangeError")}}
  - : `radix` が 2 未満、または 36 を超える場合に発生します。
- {{jsxref("TypeError")}}
  - : {{jsxref("Number")}} ではないオブジェクトに対してこのメソッドが呼び出された場合に発生します。

## 解説

{{jsxref("Number")}} オブジェクトは {{jsxref("Object")}} の `toString()` メソッドを上書きします。つまり、 {{jsxref("Object.prototype.toString()")}} を継承していません。`Number` の値では、`toString` メソッドは指定された基数でオブジェクトを表した文字列を返します。

10 より大きい基数では、 9 より大きい数をアルファベットの文字で示します。例えば、16 進表記（基数 16）では、`a` から `f` までが使われます。

`numObj` が負の場合、符号は保存されます。これは基数が 2 の場合も同様です。返される文字列は、`-` 記号で始まる数値の正の 2 進数表現であり、数値の 2 の補数では**ありません**。

`0` と `-0` はどちらも文字列表現が `"0"` となります。{{jsxref("Infinity")}} は `"Infinity"` を返し、 {{jsxref("NaN")}} は `"NaN"` を返します。

数値が整数でない場合、小数点 `.` を用いて小数点以下の位置を区切ります。[科学的記数法](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#指数)は、基数が10で、数の大きさ（符号は無視）が 10<sup>21</sup> 以上、10<sup>-6</sup> 以下の場合に使用します。この場合、返す文字列は常に指数の符号を明示的に指定します。

```js
console.log((10 ** 21.5).toString()); // "3.1622776601683794e+21"
console.log((10 ** 21.5).toString(8)); // "526665530627250154000000"
```

浮動小数点数の基本的な表現は、2 進法の科学記法です（[数値エンコード](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値のエンコーディング)を参照）。しかし、`toString()` メソッドは、数値の値のこの最も正確な表現を直接使用しません。むしろ、アルゴリズムは、隣接する数値の値から出力を区別するために必要な最小の有効数字を使用します。例えば、数値が大きい場合、同じ浮動小数点数に対して等価な文字列表現が多数存在することになり、`toString()` は右側に最も多くの 0 があるもの（任意の基数に対して）を選択します。

```js
console.log((1000000000000000128).toString()); // "1000000000000000100"
console.log(1000000000000000100 === 1000000000000000128); // true
```

一方、{{jsxref("Number.prototype.toFixed()")}} および {{jsxref("Number.prototype.toPrecision()")}} を使用すると、精度を指定でき、 `toString()` よりも正確な結果を得ることができます。

この `toString()` メソッドは、`this` 値が数値プリミティブまたは `Number` ラッパーオブジェクトである必要があります。他の `this` 値に対しては、数値に変換しようとせずに {{jsxref("TypeError")}} を発生させます。

`Number` には [`[Symbol.toPrimitive]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) メソッドがないので、 `Number` _オブジェクト_ が[テンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals) などのように文字列を期待するコンテキストで用いられるとき、 JavaScript は `toString()` メソッドを自動的に呼び出します。しかし、数値プリミティブは `toString()` メソッドを参照して[文字列へ変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)するのではなく、初期の `toString()` 実装と同じアルゴリズムを使用して直接変換される。

```js
Number.prototype.toString = () => "Overridden";
console.log(`${1}`); // "1"
console.log(`${new Number(1)}`); // "Overridden"
```

## 例

### toString の使用

```js
const count = 10;
console.log(count.toString()); // "10"

console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"

const x = 6;
console.log(x.toString(2)); // "110"
console.log((254).toString(16)); // "fe"
console.log((-10).toString(2)); // "-1010"
console.log((-0xff).toString(2)); // "-11111111"
```

### 数値文字列の基数変換

10 進数でない基数の数値を表す文字列がある場合、[`parseInt()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt) と `toString()` を使用して別の基数に変換することが可能です。

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

精度の低下に注意してください。元となる数値文字列が大きすぎる（例えば [`Number.MAX_SAFE_INTEGER`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) より大きい）場合、代わりに [`BigInt`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) を使用してください。ただし、`BigInt` コンストラクターは、数値リテラルを表す文字列（`0b`, `0o`, `0x` から始まる文字列）にしか対応していません。元の基数が 2 進数、8 進数、10 進数、16 進数のいずれでもない場合は、基数変換を手で書くか、ライブラリーを使用する必要があるかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
