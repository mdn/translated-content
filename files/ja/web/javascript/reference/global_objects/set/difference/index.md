---
title: Set.prototype.difference()
short-title: difference()
slug: Web/JavaScript/Reference/Global_Objects/Set/difference
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`difference()`** は {{jsxref("Set")}} インスタンスのメソッドで、集合を一つ受け取り、この Set に含まれており、与えられた集合に含まれない要素を含む新しい Set を返します。

## 構文

```js-nolint
difference(other)
```

### 引数

- `other`
  - : {{jsxref("Set")}} オブジェクト、または [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風オブジェクト)オブジェクトです。

### 返値

新しい {{jsxref("Set")}} オブジェクトで、この Set に含まれる要素で、`other` 集合には含まれない要素が入ったものです。

## 解説

数学的な記法では、差 (_difference_) は次のように定義されます。

<!-- Note: the {} need to be double-escaped, once for Yari -->
<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>∣</mo><mi>x</mi><mo>∉</mo><mi>B</mi><mo stretchy="false">}</mo></mrow><annotation encoding="TeX">A\setminus B = \\{x\in A\mid x\notin B\\}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

ベン図を使うとこうなります。

![2 つの円が重なり合うベン図。A と B の差は、A の B と重なり合わない部分です。](diagram.svg)

`difference()` は、[Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects)オブジェクトを `other` 引数として受け入れます。{{jsxref("Operators/this", "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxref("Set")}} インスタンスであることが要求されます。その後、その動作は `this` と `other` のサイズに依存します。

- `this` の中の要素が `other.size` よりも多かった場合、`other` を `keys()` メソッドを呼び出すことで走査し、`this` の中のすべての要素のうち `other` にない要素で新しい Set を構築します。
- そうでなければ、`this` の要素を走査し、`this` の要素 `e` のうち、`other.has(e)` が[偽値](/ja/docs/Glossary/Falsy)を返すすべてを含む新しい Set を構築します。

返される Set の要素の順序は、`this` の順序と同じです。

## 例

### difference() の使用

次の例では、奇数（10 未満）と完全平方（10 未満）の集合の差を計算します。結果は、完全平方ではない奇数の集合となります。

```js
const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Set.prototype.difference` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#new-set-methods)
- [es-shims による `Set.prototype.difference` のポリフィル](https://www.npmjs.com/package/set.prototype.difference)
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
