---
title: WeakMap.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`get()`** は {{jsxref("WeakMap")}} インスタンスのメソッドで、この `WeakMap` 内のキーに対応する値を返します。該当するキーが存在しない場合は `undefined` を返します。オブジェクトの値は、コピーではなく、最初に格納されたときの参照と同じものが返されます。そのため、返されたオブジェクトに変更を行うと、その参照が保持されている場所（`WeakMap` の中を含む）すべてに反映されます。

{{InteractiveExample("JavaScript デモ: WeakMap.prototype.get()")}}

```js interactive-example
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, 42);

console.log(weakmap.get(object1));
// 予想される結果: 42

console.log(weakmap.get(object2));
// 予想される結果: undefined
```

## 構文

```js-nolint
get(key)
```

### 引数

- `key`
  - : この `WeakMap` オブジェクトから値を取得する項目のキー。オブジェクトのキーは値ではなく[参照](/ja/docs/Glossary/Object_reference)として比較されます。

### 返値

この `WeakMap` オブジェクト内の指定されたキーに関連付けられた値です。キーが見つからなかった場合は、{{jsxref("undefined")}} が返されます。`key` がオブジェクトでも[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でもない場合は、常に `undefined` を返します。

## 例

### get() メソッドの使用

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // "foo" を返す
wm.get("baz"); // undefined を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.delete()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
