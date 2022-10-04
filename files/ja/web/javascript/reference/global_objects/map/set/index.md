---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
---

{{JSRef}}

**`set()`** メソッドは、指定されたキーと値を持つ要素を `Map` オブジェクトに追加したり、更新したりします。

{{EmbedInteractiveExample("pages/js/map-prototype-set.html")}}

## 構文

```
myMap.set(key, value)
```

### 引数

- `key`
  - : `Map` オブジェクトに追加する要素のキーです。
- `value`
  - : `Map` オブジェクトに追加する要素の値です。

### 返値

`Map`オブジェクト。

## 例

### set() の使用

```js
let myMap = new Map()

// マップに新しい要素を追加する
myMap.set('bar', 'foo')
myMap.set(1, 'foobar')

// マップにある要素を更新する
myMap.set('bar', 'baz')
```

### set() のメソッドチェーンの使用

`set()` メソッドは `Map` オブジェクトを返すため、以下のようにメソッドチェーンを作ることができます。

```js
// チェーンを使用してマップに新しい要素を追加する
myMap.set('bar', 'foo')
     .set(1, 'foobar')
     .set(2, 'baz');
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-map.prototype.set', 'Map.prototype.set')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Map.set")}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
