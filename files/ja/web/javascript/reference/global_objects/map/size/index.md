---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`size`** は {{jsxref("Map")}} インスタンスのアクセサープロパティで、このマップにある要素の数を返します。

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

## 解説

`size` の値は `Map` オブジェクトにいくつの項目があるかを表す整数値です。 `size` の set アクセサー関数は `undefined` です。このプロパティを変更することはできません。

## 例

### size の使用

```js
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map")}}
