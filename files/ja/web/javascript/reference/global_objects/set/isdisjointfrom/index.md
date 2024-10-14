---
title: Set.prototype.isDisjointFrom()
slug: Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

**`isDisjointFrom()`** は {{jsxref("Set")}} インスタンスのメソッドで、集合を取り、この Set に与えられた集合と共通する要素がないことを示す論理値を返します。

## 構文

```js-nolint
isDisjointFrom(other)
```

### 引数

- `other`
  - : {{jsxref("Set")}} オブジェクト、または [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set_風オブジェクト)オブジェクトです。

### 返値

この Set に `other` の集合と共通する要素がない場合は　`true`、そうでなければ `false` です。

## 解説

共通する要素を持たない 2 つの集合は、互いに素です。数学的な表記では、次のようになります。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>A</mi><mtext>&nbsp;is disjoint from&nbsp;</mtext><mi>B</mi><mo stretchy="false">⇔</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\text{ is disjoint from }B \Leftrightarrow A\cap B = \empty</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

ベン図を使うとこうなります。

![2 つの円からなるベン図。A と B は重複する領域を持たないため、互いに素です。](diagram.svg)

`isDisjointFrom()` は、[Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects)オブジェクトを `other` 引数として受け入れます。{{jsxref("Operators/this", "this")}} は、ユーザーコードを呼び出すことなく、`this` オブジェクトに格納されているデータに直接アクセスするため、実際の {{jsxref("Set")}} インスタンスであることが要求されます。その後、その動作は `this` と `other` のサイズに依存します。

- `this` の中の要素が `other.size` よりも多かった場合、`other` を `keys()` メソッドを呼び出すことで走査し、`other` の中のある要素が `this` の中にあれば `false` を返し（そして `return()` メソッドを呼び出すことで `keys()` イテレーターを閉じる）、そうでなければ `true` を返します。
- そうでなければ、`this` の要素を走査し、`this` の要素 `e` のうち、`other.has(e)` が[真値](/ja/docs/Glossary/Truthy)であれば `false` を返します。そうでなければ `true` を返します。

この実装により、`isDisjointFrom()` の実行効率は、`this` と `other` のうち小さい方のセットのサイズにほぼ依存します（Set が指数時間でアクセスできると仮定した場合）。

## 例

### isDisjointFrom() の使用

完全平方の集合（20 未満）は素数の集合（20 未満）と一致しません。なぜなら、完全平方は定義上、2 つの整数の積に分解できるのに対し、1 は素数とはみなされないからです。

```js
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const squares = new Set([1, 4, 9, 16]);
console.log(primes.isDisjointFrom(squares)); // true
```

完全平方の集合（20 未満）は合成数の集合（20 未満）と互いに素集合ではありません。なぜなら、1以外の完全平方はすべて定義上合成数だからです。

```js
const composites = new Set([4, 6, 8, 9, 10, 12, 14, 15, 16, 18]);
const squares = new Set([1, 4, 9, 16]);
console.log(composites.isDisjointFrom(squares)); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Set.prototype.isDisjointFrom` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#new-set-methods)
- {{jsxref("Set.prototype.difference()")}}
- {{jsxref("Set.prototype.intersection()")}}
- {{jsxref("Set.prototype.isSubsetOf()")}}
- {{jsxref("Set.prototype.isSupersetOf()")}}
- {{jsxref("Set.prototype.symmetricDifference()")}}
- {{jsxref("Set.prototype.union()")}}
