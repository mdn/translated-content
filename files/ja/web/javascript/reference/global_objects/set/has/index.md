---
title: Set.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`has()`** は {{jsxref("Set")}} インターフェイスのメソッドで、指定された値をもつ要素がこの集合内に存在するかどうかを示す論理値を返します。

{{InteractiveExample("JavaScript デモ: Set.prototype.has()")}}

```js interactive-example
const set = new Set([1, 2, 3, 4, 5]);

console.log(set.has(1));
// 予想される結果: true

console.log(set.has(5));
// 予想される結果: true

console.log(set.has(6));
// 予想される結果: false
```

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

const set = new Set();
const obj1 = { key1: 1 };
set.add(obj1);

console.log(set.has(obj1)); // true
console.log(set.has({ key1: 1 })); // オブジェクト参照が異なるため false を返す
console.log(set.add({ key1: 1 })); // set には 2 つの項目が含まれるようになる
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
