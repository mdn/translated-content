---
title: Map.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`delete()`** は {{jsxref("Map")}} インスタンスのメソッドで、この対応表 (`Map`) からキーを指定して特定の要素を削除します。

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
  - : `Map` オブジェクトから返される要素のキーです。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)として比較されます。

### 返値

`Map` オブジェクトの項目が正常に除去された場合は `true` です。`Map` 内にそのキーが見つからない場合は `false` です。

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
- {{jsxref("Map.prototype.clear()")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
