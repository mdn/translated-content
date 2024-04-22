---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
---

{{JSRef}}

**`Boolean`** オブジェクトは論理値（`true` または `false`）を表します。

## 解説

### 論理値プリミティブと Boolean オブジェクト

{{Glossary("Primitive", "プリミティブ")}}の論理値である `true` や `false` を、 `true` や `false` の値を持った `Boolean` オブジェクトと混同しないでください。

`Boolean` オブジェクトの値が `false` である場合も含めて、オブジェクトは条件文に渡されると **すべて** `true` と評価されます。例えば、以下の {{jsxref("Statements/if...else", "if")}} 文の条件は `true` と評価されます。

```js
const x = new Boolean(false);
if (x) {
  // このコードは実行されます。
}
```

この振る舞いは論理値プリミティブには適用されません。例えば、以下の {{jsxref("Statements/if...else", "if")}} 文の条件は `false` に評価されます。

```js
const x = false;
if (x) {
  // このコードは実行されません
}
```

オブジェクトを論理値でない値から論理値へ変換するために `new` を使って `Boolean()` コンストラクターを使わないでください。代わりに、 `Boolean()` を関数として使ったり、[二重否定](/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT#二重否定_!!)を使用したりすることで同じことが行えます。

```js
const good = Boolean(expression); // これか、もしくは…
const good2 = !!expression; // 　…これを使ってください
const bad = new Boolean(expression); // これは使わないこと！！
```

`Boolean` オブジェクトの初期値として何らかのオブジェクトを指定した場合、それが値 `false` を持つ `Boolean` オブジェクトであっても、新しい `Boolean` オブジェクトは値 `true` を持ちます。

```js
const myFalse = new Boolean(false); // Booleanオブジェクト: false
const g = Boolean(myFalse); // true
const myString = new String("Hello"); // Stringオブジェクト
const s = Boolean(myString); // true
```

> **警告:** コンストラクターとして `Boolean` を使うことは滅多にありません。

### 論理値への型強制

論理値を期待する多くの組み込み演算は、まず引数を論理値に[型強制 (Type coercion)](/ja/docs/Glossary/Type_coercion)します。[この変換](https://tc39.es/ecma262/#sec-tostring)は次のように要約されます。

- 論理値（boolean）はそのまま返されます。
- [`undefined`](/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined) は `false` に変換されます。
- [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) は `false` に変換されます。
- `0`, `-0`, `NaN` は `false` に、それ以外の数値は `true` に変換されます。
- `0n` は `false` に、その他の [`BigInt`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt) は `true` に変換されます。
- [`Symbol`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol) は `true` になります。
- すべてのオブジェクトは `true` になります。

> **メモ:** 非推奨のプロパティ [`document.all`](/ja/docs/Web/API/Document/all) はオブジェクトであるにもかかわらず、論理値に変換されると `false` になります。このプロパティはレガシーで非標準であるため、使用しないでください。

> **注意:** [文字列への型強制](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)や[数値への型強制](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)などの他の型の変換とは異なり、論理値への型強制はオブジェクトからプリミティブに変換しようとするわけではありません。

言い換えれば、`false` に強制される値はほんの一握りで、これらは [falsy (偽値)](/ja/docs/Glossary/Falsy) と呼ばれる値です。それ以外の値は [truthy (真値)](/ja/docs/Glossary/Truthy) と呼ばれます。値が truthy (真値)であるかどうかは、論理演算子や条件文と共に使われるとき、あるいはあらゆる真偽値の文脈で使われるときに重要です。

JavaScriptで型強制と同じ効果を得るには、2つの方法があります。

- [二重否定](/ja/docs/Web/JavaScript/Reference/Operators/Logical_NOT#二重否定_!!): `!!x` は `x` を 2 回否定し、上記と同じアルゴリズムで `x` を論理値に変換します。
- [`Boolean()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)関数、つまり `Boolean(x)` は上記と同じアルゴリズムを用いて `x` を論理値に変換します。

なお、truthy / falsy であることは、論理値プリミティブ `true` や `false` と [緩く等しい (==)](/ja/docs/Web/JavaScript/Reference/Operators/Equality) こととは異なることに注意してください。

```js
if ([]) {
  console.log("[] is truthy");
}
if ([] == false) {
  console.log("[] == false");
}
// [] is truthy
// [] == false
```

`[]` は truthy ですが、`false` と緩く等しいです。すべてのオブジェクトは truthy であるため、`[]` も truthy です。しかし、プリミティブである `false` と比較する場合、 `[]` も {{jsxref("Array.prototype.toString()") }} によって `""` というプリミティブに変換されます。文字列と論理値を比較すると、どちらも[数値に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)され、どちらも `0` になるので、`[] == false` は `true` となります。一般に、falsy であることと `== false` は次のようなケースで異なります。

- `NaN`, `undefined`, `null` は falsy ですが、 `false` と緩く異なります。
- `"0"`（および `""` ではないが [0 に型強制される](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) 他の文字列リテラル）は truthy ですが、`false` と緩く等しいです。
- オブジェクトは常に truthy ですが、そのプリミティブ表現は `false` と緩く等しくなる可能性があります。

truthy な値が `true` と緩く等しくなる可能性はさらに低いです。すべての値は truthy か falsy のどちらかですが、ほとんどの値は `true` と `false` のどちらとも緩く異なります。

## コンストラクター

- {{jsxref("Global_Objects/Boolean/Boolean", "Boolean()")}}
  - : 新しい `Boolean` オブジェクトを生成します。

## インスタンスメソッド

- {{jsxref("Boolean.prototype.toString()")}}
  - : このオブジェクトの値に応じて、文字列で `true` または `false` のどちらかを返します。 {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。
- {{jsxref("Boolean.prototype.valueOf()")}}
  - : {{jsxref("Boolean")}} オブジェクトのプリミティブ値を返します。 {{jsxref("Object.prototype.valueOf()")}} メソッドを上書きします。

## 例

### Boolean オブジェクトを初期値 false で生成

```js
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean("");
const bfalse = new Boolean(false);
```

### Boolean オブジェクトを初期値 true で生成

```js
const btrue = new Boolean(true);
const btrueString = new Boolean("true");
const bfalseString = new Boolean("false");
const bSuLin = new Boolean("Su Lin");
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Boolean](/ja/docs/Glossary/Boolean)
- [論理値プリミティブ](/ja/docs/Web/JavaScript/Data_structures#論理型)
- [ブーリアン型 (Wikipedia)](https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%BC%E3%83%AA%E3%82%A2%E3%83%B3%E5%9E%8B)
