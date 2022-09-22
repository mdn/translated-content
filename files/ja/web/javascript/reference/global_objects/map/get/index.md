---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
---

{{JSRef}}

**`get()`** メソッドは、指定された要素を `Map` オブジェクトから返します。指定されたキーに関連付けられた値がオブジェクトである場合は、そのオブジェクトの参照を受け取ることになり、そのオブジェクトに対して変更を行った場合は、 `Map` オブジェクトの中にあるものに変更が行われます。

{{EmbedInteractiveExample("pages/js/map-prototype-get.html")}}

## 構文

```
myMap.get(key)
```

### 引数

- `key`
  - : `Map` オブジェクトから返される要素のキーです。

### 返値

指定されたキーに関連付けられた要素が返されます。 `Map` オブジェクト内にキーが見つからない場合は、 `undefined` を返されます。

## 例

### Using get()

```js
let myMap = new Map();
myMap.set('bar', 'foo');

myMap.get('bar');   // "foo" を返す
myMap.get('baz');   // undefined を返す
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map.prototype.get', 'Map.prototype.get')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.get")}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
