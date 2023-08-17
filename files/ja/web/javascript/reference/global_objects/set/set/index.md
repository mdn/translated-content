---
title: Set() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Set/Set
---

{{JSRef}}

**`Set` コンストラクター**は、あらゆる型の一意な[プリミティブ値](/ja/docs/Glossary/Primitive)やオブジェクト参照を格納する `Set` オブジェクトを生成します。

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## 構文

```js
new Set();
new Set(iterable);
```

### 引数

- `iterable` {{optional_inline}}

  - : [反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Statements/for...of)が渡された場合は、そのすべての要素が新しい `Set` に加えられます。

    この引数を指定しなかった場合、または値が `null` だった場合、新しい `Set` は空になります。

### 返値

新しい `Set` オブジェクトです。

## 例

### `Set` オブジェクトの使用

```js
let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
let o = { a: 1, b: 2 };
mySet.add(o);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Set` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#set) で利用できます
- {{jsxref("Set")}}
