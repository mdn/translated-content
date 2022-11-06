---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
---

{{JSRef}}

**`delete()`** メソッドは `Map` オブジェクトから特定の要素を削除します。

{{EmbedInteractiveExample("pages/js/map-prototype-delete.html")}}

## 構文

```
myMap.delete(key);
```

### 引数

- `key`
  - : `Map` オブジェクトから削除する要素のキーです。

### 返値

`Map` オブジェクトの要素が削除されたら `true` を、要素が存在しなければ `false` を返します。

## 例

### delete() メソッドの使用

```js
var myMap = new Map();
myMap.set('bar', 'foo');

myMap.delete('bar'); // 正常に削除出来れば true を返す
myMap.has('bar');    // 存在しない要素を確認すると false を返す
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map.prototype.delete', 'Map.prototype.delete')}} |
| {{SpecName('ES2015', '#sec-map.prototype.delete', 'Map.prototype.delete')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.delete")}}

## 関連情報

- {{jsxref("Map")}}
