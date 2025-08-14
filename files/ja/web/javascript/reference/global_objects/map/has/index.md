---
title: Map.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`has()`** は {{jsxref("Map")}} インスタンスのメソッドで、指定されたキーに対する要素が存在するかどうかを示す論理値を返します。

{{InteractiveExample("JavaScript デモ: Map.prototype.has()")}}

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.has("bar"));
// 予想される結果: true

console.log(map.has("baz"));
// 予想される結果: false
```

## 構文

```js-nolint
has(key)
```

### 引数

- `key`
  - : `Map` オブジェクト内に存在するかテストする要素のキーです。

### 返値

特定のキーに対する要素が `Map` オブジェクト内に存在していたら、`true` を返します。さもなければ、`false` を返します。

## 例

### has() の使用

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // true
console.log(myMap.has("baz")); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
