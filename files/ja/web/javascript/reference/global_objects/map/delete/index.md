---
title: Map.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`delete()`** は {{jsxref("Map")}} インスタンスのメソッドで、このマップからキーを指定して特定の要素を削除します。

{{InteractiveExample("JavaScript デモ: Map.prototype.delete()")}}

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.delete("bar"));
// 予想される結果: true
// true は正しく削除されたことを示す

console.log(map.has("bar"));
// 予想される結果: false
```

## 構文

```js-nolint
mapInstance.delete(key)
```

### 引数

- `key`
  - : `Map` オブジェクトから削除する要素のキーです。

### 返値

`Map` オブジェクトの要素が削除されたら `true` を、要素が存在しなければ `false` を返します。

## 例

### delete() メソッドの使用

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // true を返す。正常に削除された。
console.log(myMap.has("bar")); // false を返す。 "bar" の要素がもう存在しない。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map")}}
