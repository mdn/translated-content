---
title: WeakMap.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`set()`** は {{jsxref("WeakMap")}} インスタンスのメソッドで、指定されたキーと値をもつ新しい項目を `WeakMap` オブジェクトへ追加します。すでにそのキーが存在する場合は、項目を更新します。

{{InteractiveExample("JavaScript デモ: WeakMap.prototype.set()")}}

```js interactive-example
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, "foo");
weakmap.set(object2, "bar");

console.log(weakmap.get(object1));
// 予想される結果: "foo"

console.log(weakmap.get(object2));
// 予想される結果: "bar"
```

## 構文

```js-nolint
set(key, value)
```

### 引数

- `key`
  - : `WeakMap` オブジェクトの中で追加または変更する項目のキー。オブジェクトまたは[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)のどちらかでなければなりません。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)として比較されます。
- `value`
  - : `WeakMap` オブジェクトに追加または変更する項目の値です。任意の値にすることができます。

### 返値

`WeakMap` オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : `key` がオブジェクトでも[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない場合に発生します。

## 例

### set() メソッドの使用

```js
const wm = new WeakMap();
const obj = {};

// WeakMap に新しい項目を追加
wm.set(obj, "foo").set(window, "bar"); // 連結可能

// WeakMap の項目を更新
wm.set(obj, "baz");

// 非登録シンボルをキーとして使用
const sym = Symbol("foo");
wm.set(sym, "baz");
wm.set(Symbol.iterator, "qux");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.delete()")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
