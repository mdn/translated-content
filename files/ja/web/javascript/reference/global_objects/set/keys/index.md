---
title: Set.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Set/keys
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

**`keys()`** は {{jsxref("Set")}} インターフェイスのメソッドで、 [`values()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/values) メソッドの別名です。

## 構文

```js-nolint
keys()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。

## 例

### keys() の使用

`keys()` メソッドは {{jsxref("Set/values", "values()")}} メソッドとまったく同じです。

```js
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.keys();

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
- {{jsxref("Set.prototype.values()")}}
