---
title: Map.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`get()`** は {{jsxref("Map")}} インスタンスのメソッドで、この対応表 (`Map`) 内のキーに対応する値を返します。該当するキーがない場合は `undefined` を返します。オブジェクトの値は、コピーではなく、元から格納されていたものと同じ参照として返されます。そのため、返されたオブジェクトに対して変更を行うと、`Map` 内部を含め、その参照が保持されているすべての場所で反映されます。

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
  - : `Map` オブジェクトから返される要素のキーです。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)として比較されます。

### 返値

この `Map` オブジェクト内の指定されたキーに関連付けられた値です。キーが見つからない場合は、{{jsxref("undefined")}} が返されます。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.delete()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
