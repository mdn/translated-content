---
title: Map.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`set()`** は {{jsxref("Map")}} インスタンスのメソッドで、指定されたキーと値を持つ要素をこの `Map` オブジェクトに追加したり、更新したりします。

{{InteractiveExample("JavaScript デモ: Map.prototype.set()")}}

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
set(key, value)
```

### 引数

- `key`
  - : `Map` オブジェクトに追加する要素のキーです。キーはいずれかの [JavaScript 型](/ja/docs/Web/JavaScript/Guide/Data_structures) （いずれかの[プリミティブ値](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ値)または任意の型の [JavaScript オブジェクト](/ja/docs/Web/JavaScript/Guide/Data_structures#オブジェクト)）です。
- `value`
  - : `Map` オブジェクトに追加する要素の値です。値はいずれかの [JavaScript 型](/ja/docs/Web/JavaScript/Guide/Data_structures) （いずれかの[プリミティブ値](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ値)または任意の型の [JavaScript オブジェクト](/ja/docs/Web/JavaScript/Guide/Data_structures#オブジェクト)）です。

### 返値

`Map` オブジェクトです。

## 例

### set() の使用

```js
const myMap = new Map();

// マップに新しい要素を追加する
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// マップにある要素を更新する
myMap.set("bar", "baz");
```

### set() のメソッドチェーンの使用

`set()` メソッドは `Map` オブジェクトを返すため、以下のようにメソッドチェーンを作ることができます。

```js
// チェーンを使用してマップに新しい要素を追加する
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
