---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`NaN`** はグローバルプロパティで、非数 (Not-A-Number) を表す値です。

{{InteractiveExample("JavaScript デモ: NaN")}}

```js interactive-example
function sanitize(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitize("1"));
// 予想される結果: "1"

console.log(sanitize("NotANumber"));
// 予想される結果: NaN
```

## 値

{{jsxref("Number.NaN")}} と同じ数値です。

{{js_property_attributes(0, 0, 0)}}

## 解説

`NaN` はグローバルオブジェクトのプロパティです。言い換えれば、グローバルスコープにある変数です。

最近のブラウザーでは、`NaN` は構成不可かつ書き込み不可のプロパティです。そうでない場合でも、これを上書きすることは避けてください。

`NaN` を返す演算には 5 種類があります。

- 数値への変換に失敗した（`parseInt("blabla")` や `Number(undefined)` 等の明示的なもの、`Math.abs(undefined)` のような暗黙的なもの）
- 結果が実数値にならない算術演算（`Math.sqrt(-1)` など）
- 不確定形（`0 * Infinity`、`1 ** Infinity`、`Infinity / Infinity`、`Infinity - Infinity`、など）
- オペランドが `NaN` である、または `NaN` を取得するメソッドや式（`7 ** NaN`、`7 * "blabla"` など。このことは `NaN` が伝染性を持つことを意味します。
- 不正な値を数値として表す必要があるその他の場合（不正な [Date](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date) である `new Date("blabla").getTime()`、`"".charCodeAt(1)` など）

`NaN` とその挙動は JavaScript が発明したものではありません。浮動小数点演算におけるその意味づけ（`NaN !== NaN` を含む）は [IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) によって指定されています。`NaN` の挙動には以下が含まれます。

- 数学演算（ただし[ビット演算](/ja/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)を除く）において`NaN`が関与する場合、結果は通常`NaN`となります。（下記の[反例](#silently_escaping_nan)を参照してください。）
- 関係演算子（`>`、`<`、`>=`、`<=`）のいずれかのオペランドが `NaN` の場合、結果は常に `false` となります。
- `NaN` は、他の値（別の `NaN` 値を含む）とは等しくない（[`==`](/ja/docs/Web/JavaScript/Reference/Operators/Equality)、[`!=`](/ja/docs/Web/JavaScript/Reference/Operators/Inequality)、[`===`](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)、[`!==`](/ja/docs/Web/JavaScript/Reference/Operators/Strict_inequality)）を含む他のいかなる値とも等しくない。

`NaN` は JavaScript で[偽値](/ja/docs/Glossary/Falsy)の値の一つと同時にあります。

## 例

### NaN に対する検査

ある値が `NaN` かどうかを判断するには、{{jsxref("Number.isNaN()")}} または {{jsxref("isNaN()")}} を使用すると最も明確に判定できます。あるいは、`NaN` は自身と等しくない唯一の値であるため、`x !== x` のような自己比較で検査することも可能です。

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

ただし、 `isNaN()` と `Number.isNaN()` には違いがあることに気をつけてください。前者は、値そのものが `NaN` であったり、値の変換の結果 `NaN` になる場合に `true` を返します。後者は値そのものが `NaN` のときにだけ `true` を返します。

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

同じ理由で、長整数値の場合は `isNaN()` ではエラーが発生しますが、 `Number.isNaN()` では発生しません。

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

さらに、配列メソッドの中には `NaN` を探せないものもあれば、探せるものもあります。具体的には、インデックス検索メソッド（{{jsxref("Array/indexOf", "indexOf()")}}、{{jsxref("Array/lastIndexOf", "lastIndexOf()")}}）は `NaN` を探すことはできませんが、値検索メソッド（{{jsxref("Array/includes", "includes()")}}）は探すことができます：

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// 適切に定義された述語を受け入れるメソッドは常に NaN を探すことができる
arr.findIndex((n) => Number.isNaN(n)); // 2
```

`NaN` とその比較について詳しくは、[等価性の比較と同一性](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)を参照してください。

### 明確に識別可能な NaN 値

2 つの浮動小数点数が異なる二進表現を持ちながらも両方とも `NaN` となる可能性があります。これは [IEEE 754 エンコード方式](https://ja.wikipedia.org/wiki/NaN#浮動小数点数の_NaN)において、指数が `0x7ff` で仮数部が0でない浮動小数点数はすべて `NaN` となるためです。JavaScript で、[型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)を使用してビット単位の操作を行うことができます。

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// NaN のバイト表現の取得
const n = f2b(NaN);
const m = f2b(NaN);
// 符号ビットを変更する（NaN には影響しない）
n[7] += 2 ** 7;
// n[0] += 2**7; ビッグエンディアンの処理系のため
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 255]
// まず最初のビットを変更する。これは仮数の最下位ビットであり、NaN には影響しない。
m[0] = 1;
// m[7] = 1; ビッグエンディアンの処理系のため
const nan3 = b2f(m);
console.log(nan3); // NaN
console.log(Object.is(nan3, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan3)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

### 暗黙に NaN をエスケープ

`NaN` は数学演算を通じて伝播するため、通常は計算の最後に一度 `NaN` を検査するだけでエラー状態を検出できます。`NaN` が黙って無視される唯一の場合は、指数が `0` の[べき乗](/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation)を使用する場合であり、この場合基数の値を検査せずに即座に `1` を返します。

```js
NaN ** 0 === 1; // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN()")}}
