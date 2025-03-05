---
title: Set.prototype.isSupersetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`isSupersetOf()`** は {{jsxref("Set")}} インスタンスのメソッドで、集合を取り、与えられた集合のすべての要素がこの Set にあることを示す論理値を返します。

## 構文

```js-nolint
isSupersetOf(other)
```

### 引数

- `other`
  - : {{jsxref("Set")}} オブジェクト、または [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風オブジェクト)オブジェクトです。

### 返値

`other` の集合にあるあるすべての要素がこの Set にもあれば `true`、そうでなければ `false` です。

## 解説

数学的な記法では、上位集合は次のように定義されます。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>B</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>A</mi></mrow><annotation encoding="TeX">A\supseteq B \Leftrightarrow \forall x\in B,\,x\in A</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

ベン図を使うとこうなります。

![2 つの円からなるベン図。B は A に完全に含まれるため、A は B の上位集合です。](diagram.svg)

> [!NOTE]
> 上位集合の関係は、真の上位集合ではありません。つまり、`this` と `other` の中の要素が同じである場合、`isSupersetOf()` は `true` を返します。

`isSupersetOf()` は、[Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects)オブジェクトを `other` 引数として受け入れます。{{jsxref("Operators/this", "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxref("Set")}} インスタンスであることが要求されます。その後、その動作は `this` と `other` のサイズに依存します。

- `this` の要素数が `other.size` より少ない場合は、直接 `false` を返します。
- そうでなければ、`other` の `keys()` メソッドを呼び出して走査し、`other` の要素が `this` に存在しない場合は `false` を返します（そして、`return()` メソッドを呼び出して `keys()` イテレータを終了します）。 そうでなければ、`true` を返します。

## 例

### isSupersetOf() の使用

偶数（20 未満）の集合は、4 の倍数（20 未満）の集合の上位集合です。

```js
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const fours = new Set([4, 8, 12, 16]);
console.log(evens.isSupersetOf(fours)); // true
```

すべての奇数（20 未満）の集合は、素数（20 未満）の集合の上位集合ではありません。なぜなら、2 は素数ですが、奇数ではないからです。

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(odds.isSupersetOf(primes)); // false
```

同値集合は互いに上位集合です。

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSupersetOf(set2)); // true
console.log(set2.isSupersetOf(set1)); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Set.prototype.isSupersetOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
