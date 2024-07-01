---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

**`has()`** は {{jsxref("Set")}} インターフェイスのメソッドで、指定された値をもつ要素がこの集合内に存在するかどうかを示す論理値を返します。

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

## 構文

```js-nolint
has(value)
```

### 引数

- `value`
  - : この `Set` オブジェクトに存在するかを検査する値です。

### 返値

この `Set` オブジェクト内に指定された値をもつ要素が存在していたら `true` を返します。さもなければ `false` を返します。

## 例

### has() メソッドの使用

```js
const mySet = new Set();
mySet.add("foo");

console.log(mySet.has("foo")); // true
console.log(mySet.has("bar")); // false

const set1 = new Set();
const obj1 = { key1: 1 };
set1.add(obj1);

console.log(set1.has(obj1)); // true
console.log(set1.has({ key1: 1 })); // オブジェクト参照が異なるため false を返す
console.log(set1.add({ key1: 1 })); // set1 には 2 つの項目が含まれるようになる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
