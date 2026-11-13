---
title: WeakMap.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`has()`** は {{jsxref("WeakMap")}} インスタンスのメソッドで、指定されたキーをもつ要素が `WeakMap` オブジェクト内に存在するかどうかを示す論理値を返します。

{{InteractiveExample("JavaScript デモ: WeakMap.prototype.has()")}}

```js interactive-example
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, "foo");

console.log(weakmap.has(object1));
// 予想される結果: true

console.log(weakmap.has(object2));
// 予想される結果: false
```

## 構文

```js-nolint
has(key)
```

### 引数

- `key`
  - : `WeakMap` オブジェクトに存在するかテストする項目のキーです。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)として比較されます。

### 返値

指定されたキーをもつ項目が `WeakMap` オブジェクト内に存在したら `true` を返します。そうでなければ `false` を返します。`key` がオブジェクトでも[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない場合は常に `false` を返します。

## 例

### has() メソッドの使用

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // true を返す
wm.has("baz"); // false を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.delete()")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
