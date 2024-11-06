---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`set()`** メソッドは、指定されたキーと値を持つ要素を `Map` オブジェクトに追加したり、更新したりします。

{{EmbedInteractiveExample("pages/js/map-prototype-set.html")}}

## 構文

```js-nolint
set(key, value)
```

### 引数

- `key`
  - : `Map` オブジェクトに追加する要素のキーです。キーはいずれかの [JavaScript 型](/ja/docs/Web/JavaScript/Data_structures) （いずれかの[プリミティブ値](/ja/docs/Web/JavaScript/Data_structures#プリミティブ値)または任意の型の [JavaScript オブジェクト](/ja/docs/Web/JavaScript/Data_structures#オブジェクト)）です。
- `value`
  - : `Map` オブジェクトに追加する要素の値です。値はいずれかの [JavaScript 型](/ja/docs/Web/JavaScript/Data_structures) （いずれかの[プリミティブ値](/ja/docs/Web/JavaScript/Data_structures#プリミティブ値)または任意の型の [JavaScript オブジェクト](/ja/docs/Web/JavaScript/Data_structures#オブジェクト)）です。

### 返値

`Map` オブジェクトです。

## 例

### set() の使用

```js
let myMap = new Map();

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
