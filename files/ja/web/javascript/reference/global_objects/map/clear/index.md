---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
---

{{JSRef}}

**`clear()`** メソッドは `Map` オブジェクトからすべての要素を削除します。

{{EmbedInteractiveExample("pages/js/map-prototype-clear.html")}}

## 構文

```
myMap.clear();
```

### 返値

{{jsxref("undefined")}}.

## 例

### clear() の使用

```js
var myMap = new Map();
myMap.set('bar', 'baz');
myMap.set(1, 'foo');

myMap.size;       // 2
myMap.has('bar'); // true

myMap.clear();

myMap.size;       // 0
myMap.has('bar')  // false
```

## 仕様書

| 仕様書                                                                                               |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map.prototype.clear', 'Map.prototype.clear')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.clear")}}

## 関連情報

- {{jsxref("Map")}}
