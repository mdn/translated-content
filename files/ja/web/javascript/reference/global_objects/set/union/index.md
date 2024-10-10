---
title: Set.prototype.union()
slug: Web/JavaScript/Reference/Global_Objects/Set/union
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{JSRef}}

**`union()`** は {{jsxref("Set")}} インスタンスのメソッドで、集合を受け取り、この Set と与えられた集合のどちらかまたは両方にある要素の入った新しい Set を返します。

## 構文

```js-nolint
union(other)
```

### 引数

- `other`
  - : {{jsxref("Set")}} オブジェクト、または [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風オブジェクト)オブジェクトです。

### 返値

新しい {{jsxref("Set")}} オブジェクトで、この Set と `other` の集合のどちらかまたは両方にある要素が入ったものです。

## 解説

数学的な記法では、和集合 (_union_) は次のように定義されます。

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∣</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mtext>&nbsp;or&nbsp;</mtext><mi>x</mi><mo>∊</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\cup B = \\{x\midx\in A\text{ or }x\in B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

ベン図を使うとこうなります。

![2 つの円が重なっているベン図。A と B の共通部分は、どちらか一方または両方の円に囲まれた領域です。](diagram.svg)

`union()` は、[Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects)オブジェクトを `other` 引数として受け入れます。{{jsxref("Operators/this", "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxref("Set")}} インスタンスであることが要求されます。次に、`other` の `keys()` メソッドを呼び出して繰り返し処理を行い、`this` に存在するすべての要素、次に `other` に存在して `this` に存在しないすべての要素をすべて含む新しい Set を構築します。

返される Set 内の要素の順序は、まず `this` の要素、次に `other` の要素となります。

## 例

### union() の使用

次の例では、偶数（10 未満）と完全平方（10 未満）の和集合を計算します。結果は、完全平方または偶数のどちら、または両方にある数の集合となります。

```js
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Set.prototype.union` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
