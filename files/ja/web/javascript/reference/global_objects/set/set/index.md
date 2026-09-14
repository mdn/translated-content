---
title: Set() コンストラクター
short-title: Set()
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Set()`** コンストラクターは {{jsxref("Set")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript デモ: Set() コンストラクター")}}

```js interactive-example
const set = new Set([1, 2, 3, 4, 5]);

console.log(set.has(1));
// 予想される結果: true

console.log(set.has(5));
// 予想される結果: true

console.log(set.has(6));
// 予想される結果: false
```

## 構文

```js-nolint
new Set()
new Set(iterable)
```

> [!NOTE]
> `Set()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けてのみ構築することができ案す。 `new` 無しで呼び出そうとすると {{jsxref("TypeError")}} が発生します。

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
- [es-shims による `Set` のポリフィル](https://www.npmjs.com/package/es-set)
- {{jsxref("Set")}}
