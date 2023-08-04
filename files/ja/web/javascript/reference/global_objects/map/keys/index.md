---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`keys()`** メソッドは、 `Map` オブジェクトに挿入された要素のキーを挿入順に列挙する新しい[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)オブジェクトを返します。この具体的な用途では、このイテレーターオブジェクトは反復可能オブジェクトでもあるので、 [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用することができます。

{{EmbedInteractiveExample("pages/js/map-prototype-keys.html")}}

## 構文

```js-nolint
keys()
```

### 返値

{{jsxref("Map")}} の新しいイテレーターオブジェクト。

## 例

### keys() の使用

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
