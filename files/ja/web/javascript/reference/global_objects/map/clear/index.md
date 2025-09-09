---
title: Map.prototype.clear()
short-title: clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`clear()`** は {{jsxref("Map")}} インスタンスのメソッドで、このマップからすべての要素を削除します。

{{InteractiveExample("JavaScript デモ: Map.prototype.clear()")}}

```js interactive-example
const map = new Map();

map.set("bar", "baz");
map.set(1, "foo");

console.log(map.size);
// 予想される結果: 2

map.clear();

console.log(map.size);
// 予想される結果: 0
```

## 構文

```js-nolint
clear()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### clear() の使用

```js
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map")}}
