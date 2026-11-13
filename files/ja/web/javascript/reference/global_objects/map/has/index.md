---
title: Map.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: 0574ac1985889d2ccce1b61e42db98d74ac1bbcb
---

**`has()`** は {{jsxref("Map")}} インスタンスのメソッドで、この対応表 (`Map`) に指定されたキーに対する項目が存在するかどうかを示す論理値を返します。

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
  - : この `Map` オブジェクト内で存在を確認する項目のキーです。オブジェクトのキーは、値ではなく[参照](/ja/docs/Glossary/Object_reference)によって比較されます。

### 返値

特定のキーに対する項目がこの `Map` オブジェクト内に存在していたら、`true` を返します。さもなければ、`false` を返します。

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
- {{jsxref("Map.prototype.delete()")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
