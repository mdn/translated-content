---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
---

{{JSRef}}

**`size`** アクセサープロパティは、 {{jsxref("Map")}} オブジェクトにある要素の数を返します。

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

## 解説

`size` の値は `Map` オブジェクトにいくつの項目があるかを表す整数値です。 `size` の set アクセサー関数は `undefined` です。このプロパティを変更することはできません。

## 例

### size の使用

```js
var myMap = new Map();
myMap.set('a', 'alpha');
myMap.set('b', 'beta');
myMap.set('g', 'gamma');

myMap.size // 3
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-get-map.prototype.size', 'Map.prototype.size')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.size")}}

## 関連情報

- {{jsxref("Map")}}
