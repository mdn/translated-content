---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

論理値 (**`Boolean`**) は、 2 つの値、 `true` または `false` のどちらかです。これは論理命題の真偽値を表します。

## 解説

論理値は、通常、[関係演算子](/ja/docs/Web/JavaScript/Reference/Operators#関係演算子)、[等値演算子](/ja/docs/Web/JavaScript/Reference/Operators#等値演算子)、[論理 NOT (`!`)] によって生成されます。また、条件を表す関数、例えば{{jsxref("Array.isArray()")}} によっても生成されます。 なお、[バイナリー論理演算子](/ja/docs/Web/JavaScript/Reference/Operators#バイナリー論理演算子)、例えば `&&` や `||` などは、オペランドの値を返します。これらの値は論理値である場合もあれば、そうでない場合もあります。

論理値は一般に条件分岐の検査、例えば {{jsxref("Statements/if...else", "if...else")}} や {{jsxref("Statements/while", "while")}} 文の条件、[条件演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator) (`? :`)、 {{jsxref("Array.prototype.filter()")}} の述語の返値などに使用されます。

JavaScript では、論理値への明示的な変換はほとんど必要ありません。 JavaScript は論理値のコンテキストにおいて自動的に変換を行うため、値が[真値であるかどうか](#論理値への変換)に基づいて、任意の値を論理値として使用することができます。また、自分のコードでは、`if (condition)` や `if (!condition)` を `if (condition === true)` や `if (condition === false)` の代わりに使用するよう推奨します。これにより、この規約の利点を活かすことができます。ただし、条件を表す値が常に論理値であることを確認することで、コードの意図を明確にすることができます。

```js
// 良い例:
// これは常に論理値を返す
const isObject = (obj) => !!obj && typeof obj === "object";

// これもよい例:
const isObject = (obj) => Boolean(obj) && typeof obj === "object";

// これもよい例:
const isObject = (obj) => obj !== null && typeof obj === "object";

// 悪い例:
// これは偽値であっても false とは等しくない値が返される可能性がある
const isObject = (obj) => obj && typeof obj === "object";
```

### 論理値プリミティブと Boolean オブジェクト

論理値でない値を論理値に変換するには、`Boolean` を関数として使用するか、[二重否定](/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT#二重否定_!!)演算子を使用します。 `Boolean()` コンストラクターを `new` と一緒に使用しないでください。

```js example-good
const good = Boolean(expression);
const good2 = !!expression;
```

```js example-bad
const bad = new Boolean(expression); // これを使用しない
```

これは、すべてのオブジェクトが（`Boolean` オブジェクトで `false` をラップしているものであっても）{{glossary("truthy", "真値")}}であり、条件文などの場面では `true` と評価されるためです。（詳細は下記の[論理型への変換](#論理型への変換)の節を参照。）

```js
if (new Boolean(true)) {
  console.log("このログは表示されます");
}

if (new Boolean(false)) {
  console.log("このログも表示されます");
}

const myFalse = new Boolean(false); // myFalse は Boolean オブジェクト（プリミティブ値 false ではない）
const g = Boolean(myFalse); // g は true
const myString = new String("Hello"); // myString は String オブジェクト
const s = Boolean(myString); // s は true
```

> [!WARNING]
> コンストラクターとして `Boolean` を使うことは滅多にありません。

### 論理型への変換

論理値を期待する多くの組み込み演算は、まず引数を論理値に型変換します。[この処理](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toboolean)は次のように要約されます。

- 論理値はそのまま返されます。
- [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) は `false` に変換されます。
- [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) は `false` に変換されます。
- `0`, `-0`, `NaN` は `false` に、それ以外の数値は `true` に変換されます。
- `0n` は `false` に、その他の [`BigInt`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt) は `true` に変換されます。
- [`Symbol`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) は `true` になります。
- すべてのオブジェクトは `true` になります。

> [!NOTE]
> 古い動作により、 [`document.all`](/ja/docs/Web/API/Document/all) はオブジェクトであるにもかかわらず、論理値に変換されると `false` になります。このプロパティは古く標準外であるため、使用しないでください。

> [!NOTE]
> [文字列への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#文字列変換)や[数値への変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)などの他の型変換とは異なり、論理型への変換は[オブジェクトからプリミティブに変換](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)しようとするわけではありません。

言い換えれば、 `false` に強制される値はほんの一握りで、これらは[偽値 (falsy)](/ja/docs/Glossary/Falsy) と呼ばれる値です。それ以外の値は[真値 (truthy)](/ja/docs/Glossary/Truthy) と呼ばれます。値が真値であるかどうかは、論理演算子や条件文と共に使われるとき、あるいはあらゆる論理型の文脈で使われるときに重要です。

JavaScript で型変換と同じ効果を得るには、 2 つの方法があります。

- [二重否定](/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT#二重否定_!!): `!!x` は `x` を 2 回否定し、上記と同じアルゴリズムで `x` を論理値に変換します。
- [`Boolean()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)関数、つまり `Boolean(x)` は上記と同じアルゴリズムを用いて `x` を論理値に変換します。

なお、真値であるかどうかは、 `true` または `false` と[緩い等価性](/ja/docs/Web/JavaScript/Reference/Operators/Equality)があるかどうかと同じではありません。

```js
if ([]) {
  console.log("[] は真値です");
}
if ([] == false) {
  console.log("[] == false");
}
// [] は真値です
// [] == false
```

`[]` は真値ですが、`false` と緩い等価です。すべてのオブジェクトは真値であるため、`[]` も真値です。しかし、プリミティブである `false` と比較する場合、 `[]` も {{jsxref("Array.prototype.toString()")}} によって `""` というプリミティブに変換されます。文字列と論理値を比較すると、どちらも[数値に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)され、どちらも `0` になるので、`[] == false` は `true` となります。一般に、偽値であることと `== false` は次のようなケースで異なります。

- `NaN`, `undefined`, `null` は偽値ですが、 `false` と緩い等価ではありません。
- `"0"`（および `""` ではないが [0 に型変換される](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) 他の文字列リテラル）は真値ですが、`false` と緩い等価です。
- オブジェクトは常に真値ですが、そのプリミティブ表現は `false` と緩い等価になる可能性があります。

真値の値が `true` と緩い等価になる可能性はさらに低いです。すべての値は真値か偽値のどちらかですが、ほとんどの値は `true` と `false` のどちらとも緩い等価ではありません。

## コンストラクター

- {{jsxref("Boolean/Boolean", "Boolean()")}}
  - : `Boolean` オブジェクトを生成します。関数として呼び出された場合、論理型のプリミティブ値を返します。

## インスタンスプロパティ

これらのプロパティは `Boolean.prototype` に定義されており、すべての `Boolean` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Boolean.prototype.constructor")}}
  - : インスタンスオブジェクトを生成するコンストラクター関数。 `Boolean` インスタンスの場合、初期値は {{jsxref("Boolean/Boolean", "Boolean")}} コンストラクターです。

## インスタンスメソッド

- {{jsxref("Boolean.prototype.toString()")}}
  - : このオブジェクトの値に応じて、文字列で `true` または `false` のどちらかを返します。 {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : `Boolean` オブジェクトのプリミティブ値を返します。 {{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。

## 例

### false 値の生成

```js
const bNoParam = Boolean();
const bZero = Boolean(0);
const bNull = Boolean(null);
const bEmptyString = Boolean("");
const bfalse = Boolean(false);
```

### true 値の生成

```js
const btrue = Boolean(true);
const btrueString = Boolean("true");
const bfalseString = Boolean("false");
const bSuLin = Boolean("Su Lin");
const bArrayProto = Boolean([]);
const bObjProto = Boolean({});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Boolean](/ja/docs/Glossary/Boolean)
- [論理値プリミティブ](/ja/docs/Web/JavaScript/Guide/Data_structures#論理型)
- [ブーリアン型](https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%BC%E3%83%AA%E3%82%A2%E3%83%B3%E5%9E%8B)（ウィキペディア）
