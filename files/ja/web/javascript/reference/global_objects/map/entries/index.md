---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
---

{{JSRef}}

**`entries()`** メソッドは、挿入順で `Map` オブジェクトの要素に対する `[key, value]` ペアを含む新しい [Iterator](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators) オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## 構文

```
myMap.entries()
```

### 返値

新しい {{jsxref("Map")}} の反復子オブジェクトです。

## 例

### entries() の使用

```js
let myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')

let mapIter = myMap.entries()

console.log(mapIter.next().value)  // ["0", "foo"]
console.log(mapIter.next().value)  // [1, "bar"]
console.log(mapIter.next().value)  // [Object, "baz"]
```

## 仕様書

| 仕様書                                                                                                   |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map.prototype.entries', 'Map.prototype.entries')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.entries")}}

## 関連情報

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
