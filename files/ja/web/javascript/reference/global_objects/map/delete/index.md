---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`delete()`** メソッドは `Map` オブジェクトから特定の要素を削除します。

{{InteractiveExample("JavaScript Demo: Map.prototype.delete()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map1.has("bar"));
// Expected result: false
```

## 構文

```js-nolint
delete(key)
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
