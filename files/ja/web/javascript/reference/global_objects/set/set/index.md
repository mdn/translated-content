---
title: Set() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
l10n:
  sourceCommit: 84aaeee9a64e1bfe002837468eb798e5d5eb2bbe
---

{{JSRef}}

**`Set()`** コンストラクターは {{jsxref("Set")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript Demo: Set.prototype Constructor")}}

```js interactive-example
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false
```

## 構文

```js-nolint
new Set()
new Set(iterable)
```

> **メモ:** `Set()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けてのみ構築することができ案す。 `new` 無しで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

### 引数

- `iterable` {{optional_inline}}

  - : [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Statements/for...of)が渡された場合は、そのすべての要素が新しい `Set` に加えられます。

    この引数を指定しなかった場合、または値が `null` だった場合、新しい `Set` は空になります。

### 返値

新しい `Set` オブジェクトです。

## 例

### `Set` オブジェクトの使用

```js
const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet.add(o);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Set` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#set)
- {{jsxref("Set")}}
