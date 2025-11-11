---
title: Set.prototype.symmetricDifference()
short-title: symmetricDifference()
slug: Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`symmetricDifference()`** は {{jsxref("Set")}} インスタンスのメソッドで、集合を受け取り、この Set と与えられた集合のどちらかにあるが、両方にはない要素の入った新しい Set を返します。

## 構文

```js-nolint
symmetricDifference(other)
```

### 引数

- `other`
  - : {{jsxref("Set")}} オブジェクト、または [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風オブジェクト)オブジェクトです。

### 返値

新しい {{jsxref("Set")}} オブジェクトで、この Set と `other` の集合のどちらかにあるものの、両方にはない要素が入ったものです。

## 解説

数学的な記法では、対称差分 (_symmetric difference_) は次のように定義されます。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">A\ominus B = (A\setminus B)\cup(B\setminus A)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

ベン図を使うとこうなります。

![2 つの円が重なっているベン図。A と B の対称差は、どちらかの円に含まれるが、両方の円に含まれない領域です。](diagram.svg)

`symmetricDifference()` は、[Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects)オブジェクトを `other` 引数として受け入れます。{{jsxref("Operators/this", "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxref("Set")}} インスタンスであることが要求されます。次に、`other` の `keys()` メソッドを呼び出して繰り返し処理を行い、`this` に存在し、`other` に存在しないすべての要素と、`other` に存在し、`this` に存在しないすべての要素をすべて含む新しい Set を構築します。

返される Set 内の要素の順序は、まず `this` の要素、次に `other` の要素となります。

## 例

### symmetricDifference() の使用

次の例では、偶数（10 未満）と完全平方（10 未満）の集合の対称差分を計算します。結果は、完全平方または偶数のどちらかで、両方にはない数の集合となります。

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); // Set(5) { 2, 6, 8, 1, 9 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Set.prototype.symmetricDifference` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#new-set-methods)
- [es-shims による `Set.prototype.symmetricDifference` のポリフィル](https://www.npmjs.com/package/set.prototype.symmetricdifference)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.union()")}}
