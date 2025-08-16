---
title: Map.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`get()`** は {{jsxref("Map")}} インスタンスのメソッドで、この `Map` オブジェクトから指定された要素を返します。指定されたキーに関連付けられた値がオブジェクトである場合は、そのオブジェクトの参照を受け取ることになり、そのオブジェクトに対して変更を行った場合は、 `Map` オブジェクトの中にあるものに変更が行われます。

{{InteractiveExample("JavaScript デモ: Map.prototype.get()")}}

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.get("bar"));
// 予想される結果: "foo"

console.log(map.get("baz"));
// 予想される結果: undefined
```

## 構文

```js-nolint
get(key)
```

### 引数

- `key`
  - : `Map` オブジェクトから返される要素のキーです。

### 返値

指定されたキーに関連付けられた要素を返します。 `Map` オブジェクト内にキーが見つからない場合は、{{jsxref("undefined")}} を返します。

## 例

### get() の使用

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // "foo" を返す
console.log(myMap.get("baz")); // undefined を返す
```

### get() を使用して、オブジェクトの参照を取得

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

マップが元のオブジェクトへの参照を保持することで、実質的にオブジェクトがガベージコレクトされないことを意味し、予期せぬメモリー問題を引き起こす可能性があることに注意してください。もし、マップに格納されるオブジェクトが元のオブジェクトと同じ寿命を持つようにしたい場合は、 {{jsxref("WeakMap")}} を使用することを検討してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
