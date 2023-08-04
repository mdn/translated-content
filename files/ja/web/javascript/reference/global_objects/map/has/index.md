---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`has()`** メソッドは、指定されたキーに対する要素が存在するかどうかを示す論理値を返します。

{{EmbedInteractiveExample("pages/js/map-prototype-has.html")}}

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
