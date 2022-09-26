---
title: Symbol.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
---

{{JSRef}}

**`[@@toPrimitive]()`** メソッドは、 Symbol オブジェクトをプリミティブ値に変換します。

## 構文

```
Symbol()[Symbol.toPrimitive](hint)
```

### 返値

{{jsxref("Symbol")}} オブジェクトで指定されたプリミティブ値です。

## 解説

{{jsxref("Symbol")}} オブジェクトの `[@@toPrimitive]()` メソッドは、 Symbol オブジェクトのプリミティブ値を Symbol データ型として返します。 `hint` 引数は使われません。

JavaScript はオブジェクトをプリミティブ値に変換するために `[@@toPrimitive]()` メソッドを呼び出します。 `[@@toPrimitive]()` メソッドを自分で呼び出す必要はほとんどありません。 JavaScript は、プリミティブ値が期待されているオブジェクトに遭遇したときに、自動的にこれを呼び出します。

## 例

### @@toPrimitive の使用

```js
const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true
```

## 仕様書

| 仕様書                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-symbol.prototype-@@toprimitive', 'Symbol.prototype.@@toPrimitive')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.@@toPrimitive")}}

## 関連情報

- {{jsxref("Symbol.toPrimitive")}}
