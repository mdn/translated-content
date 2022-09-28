---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
---

{{JSRef}}

**`has()`** メソッドは、指定されたキーに対する要素が存在するかどうかを示す論理値を返します。

{{EmbedInteractiveExample("pages/js/map-prototype-has.html")}}

## 構文

```
myMap.has(key)
```

### 引数

- `key`
  - : `Map` オブジェクト内に存在するかテストするための要素のキーです。

### 返値

特定のキーに対する要素が `Map` オブジェクト内に存在していたら、`true` を返します。さもなければ、`false` を返します。

## 例

### has() の使用

```js
let myMap = new Map()
myMap.set('bar', "foo")

myMap.has('bar')   // returns true
myMap.has('baz')   // returns false
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map.prototype.has', 'Map.prototype.has')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.has")}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
