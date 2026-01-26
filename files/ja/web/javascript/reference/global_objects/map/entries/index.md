---
title: Map.prototype.entries()
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`entries()`** は {{jsxref("Map")}} インスタンスのメソッドで、挿入順でこの `Map` オブジェクトのそれぞれの要素に対する `[キー, 値]` のペアを含む新しい[マップイテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)オブジェクトを返します。

{{InteractiveExample("JavaScript デモ: Map.prototype.entries()")}}

```js interactive-example
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.entries();

console.log(iterator.next().value);
// 予想される結果: Array ["0", "foo"]

console.log(iterator.next().value);
// 予想される結果: Array [1, "bar"]
```

## 構文

```js-nolint
entries()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)です。

## 例

### entries() の使用

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
