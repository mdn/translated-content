---
title: Map.prototype.size
short-title: size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`size`** は {{jsxref("Map")}} インスタンスのアクセサープロパティで、このマップにある要素の数を返します。

{{InteractiveExample("JavaScript デモ: Map.prototype.size")}}

```js interactive-example
const map = new Map();

map.set("a", "alpha");
map.set("b", "beta");
map.set("g", "gamma");

console.log(map.size);
// 予想される結果: 3
```

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
