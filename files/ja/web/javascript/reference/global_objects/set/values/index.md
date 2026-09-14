---
title: Set.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`values()`** は {{jsxref("Set")}} インターフェイスのメソッドで、集合の新しい[イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)オブジェクトを返します。これはこの集合のそれぞれの要素をの値を挿入順に返します。

{{InteractiveExample("JavaScript デモ: Set.prototype.values")}}

```js interactive-example
const set = new Set();
set.add(42);
set.add("forty two");

const iterator = set.values();

console.log(iterator.next().value);
// 予想される結果: 42

console.log(iterator.next().value);
// 予想される結果: "forty two"
```

## 構文

```js-nolint
values()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。

## 例

### values() の使用

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
