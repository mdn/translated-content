---
title: Map.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`set()`** は {{jsxref("Map")}} インスタンスのメソッドで、指定されたキーと値を持つ新しい項目をこの対応表 (`Map`) に追加し、キーがすでに存在する場合は既存の項目を更新します。

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
  - : この `Map` オブジェクト内で追加または変更する項目のキーです。どのような値でも指定できます。オブジェクトのキーは、値ではなく [参照](/ja/docs/Glossary/Object_reference) によって比較されます。
- `value`
  - : この `Map` オブジェクト内で追加または変更する項目の値です。どのような値でも指定できます。

### 返値

`Map` オブジェクトです。

## 例

### set() の使用

```js
const myMap = new Map();

// 対応表に新しい要素を追加する
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// 対応表にある要素を更新する
myMap.set("bar", "baz");
```

### set() のメソッドチェーンの使用

`set()` メソッドは `Map` オブジェクトを返すため、以下のようにメソッドチェーンを作ることができます。

```js
// チェーンを使用して対応表に新しい要素を追加する
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.delete()")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
