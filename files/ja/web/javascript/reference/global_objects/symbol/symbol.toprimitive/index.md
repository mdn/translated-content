---
title: Symbol.prototype[Symbol.toPrimitive]()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`[Symbol.toPrimitive]()`** メソッドは、{{jsxref("Symbol")}} オブジェクトをプリミティブ値に変換します。

## 構文

```js-nolint
symbolValue[Symbol.toPrimitive](hint)
```

### 引数

- `hint`
  - : 文字列値で、返すプリミティブ値を示します。この値は無視されます。

### 返値

{{jsxref("Symbol")}} オブジェクトで指定されたプリミティブ値です。

## 解説

`[Symbol.toPrimitive]()` は {{jsxref("Symbol")}} オブジェクトのメソッドで、Symbol オブジェクトのプリミティブ値を Symbol データ型として返します。 `hint` 引数は使われません。

JavaScript はオブジェクトをプリミティブ値に変換するために `[Symbol.toPrimitive]()` メソッドを呼び出します。 `[Symbol.toPrimitive]()` メソッドを自分で呼び出す必要はほとんどありません。 JavaScript は、プリミティブ値が期待されているオブジェクトに遭遇したときに、自動的にこれを呼び出します。

## 例

### `[Symbol.toPrimitive]()` の使用

```js
const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Symbol.toPrimitive")}}
