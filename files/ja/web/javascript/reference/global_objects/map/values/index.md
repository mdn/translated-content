---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
---

{{JSRef}}

**`values()`** メソッドは、 `Map` オブジェクトに挿入された要素を挿入順に列挙する新しい **[イテレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)** オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/map-prototype-values.html")}}

## 構文

```
myMap.values()
```

### 返値

{{jsxref("Map")}} の新しいイテレーターオブジェクト。

## 例

### values() の使用

```js
var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

var mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map.prototype.values', 'Map.prototype.values')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.values")}}

## 関連情報

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
