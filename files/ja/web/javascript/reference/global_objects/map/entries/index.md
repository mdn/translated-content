---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`entries()`** メソッドは、挿入順で `Map` オブジェクトのそれぞれの要素に対する `[key, value]` のペアを含む新しい [イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators) オブジェクトを返します。この具体的な例では、このイテレーターオブジェクトは反復可能オブジェクトでもあるので、 for-of ループを使用することができます。プロトコル `[Symbol.iterator]` が使用されると、呼び出されたときにこのイテレーター自身を返す関数を返します。

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## 構文

```js-nolint
entries()
```

### 返値

新しい {{jsxref("Map")}} のイテレーターオブジェクトです。

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
