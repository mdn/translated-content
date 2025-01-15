---
title: Set.prototype.isSubsetOf()
slug: Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{JSRef}}

**`isSubsetOf()`** は {{jsxref("Set")}} インスタンスのメソッドで、集合を取り、この Set のすべての要素が与えられた集合にあることを示す論理値を返します。

## 構文

```js-nolint
isSubsetOf(other)
```

### 引数

- `other`
  - : {{jsxref("Set")}} オブジェクト、または [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風オブジェクト)オブジェクトです。

### 返値

この Set にあるすべての要素が `other` の集合にもあれば `true`、そうでなければ `false` です。

## 解説

数学的な記法では、部分集合は次のように定義されます。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mo>⊆</mo><mi>B</mi><mo stretchy="false">⇔</mo><mo>∀</mo><mi>x</mi><mo>∊</mo><mi>A</mi><mo>,</mo><mspace width="0.16666666666666666em"></mspace><mi>x</mi><mo>∊</mo><mi>B</mi></mrow><annotation encoding="TeX">A\subseteq B \Leftrightarrow \forall x\in A,\,x\in B</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

ベン図を使うとこうなります。

![2 つの円からなるベン図。A は B に完全に含まれるため、A は B の部分集合です。](diagram.svg)

> [!NOTE]
> 部分集合の関係は、真部分集合ではありません。つまり、`this` と `other` の中の要素が同じである場合、`isSubsetOf()` は `true` を返します。

`isSubsetOf()` は、[Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects)オブジェクトを `other` 引数として受け入れます。{{jsxref("Operators/this", "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxref("Set")}} インスタンスであることが要求されます。その後、その動作は `this` と `other` のサイズに依存します。

- `this` の要素数が `other.size` より多い場合は、直接 `false` を返します。
- そうでなければ、`this` の要素を走査し、`this` の要素 `e` のうち、`other.has(e)` が[偽値](/ja/docs/Glossary/Falsy)を返せば `false` を返し餡巣。それ以外の場合は、`true` を返します。

## 例

### isSubsetOf() の使用

4 の倍数（20 未満）の集合は、偶数（20 未満）の集合の部分集合です。

```js
const fours = new Set([4, 8, 12, 16]);
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
console.log(fours.isSubsetOf(evens)); // true
```

素数（20 未満）の集合は、すべての奇数（20 未満）の集合の部分集合ではありません。なぜなら、2 は素数ですが、奇数ではないからです。

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(primes.isSubsetOf(odds)); // false
```

同値集合は互いに部分集合です。

```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSubsetOf(set2)); // true
console.log(set2.isSubsetOf(set1)); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Set.prototype.isSubsetOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isDisjointFrom()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
