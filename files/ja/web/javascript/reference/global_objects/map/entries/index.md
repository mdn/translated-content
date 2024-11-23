---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

**`entries()`** は {{jsxref("Map")}} インスタンスのメソッドで、挿入順でこの `Map` オブジェクトのそれぞれの要素に対する `[key, value]` のペアを含む新しい[イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Iterator)オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

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
