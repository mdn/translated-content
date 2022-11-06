---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
---

{{JSRef}}

**`keys()`** メソッドは、 `Map` オブジェクトに挿入された要素のキーを挿入順に列挙する新しい **[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)** オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/map-prototype-keys.html")}}

## 構文

```
myMap.keys()
```

### 返値

{{jsxref("Map")}} の新しいイテレーターオブジェクト。

## 例

### keys() の使用

```js
var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

var mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object
```

## 仕様書

| 仕様書                                                                                           |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-map.prototype.keys', 'Map.prototype.keys')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.keys")}}

## 関連情報

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
