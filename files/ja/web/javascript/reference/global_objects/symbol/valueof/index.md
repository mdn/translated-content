---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
---

{{JSRef}}

**`valueOf()`** メソッドは、 Symbol オブジェクトのプリミティブ値を返します。

## 構文

```
Symbol().valueOf()
```

### 返値

指定された {{jsxref("Symbol")}} オブジェクトのプリミティブ値です。

## 解説

{{jsxref("Symbol")}} オブジェクトの `valueOf()` メソッドは、 Symbol オブジェクトのプリミティブ値を Symbol データ型として返します。

JavaScript はオブジェクトをプリミティブ値に変換するために `valueOf()` メソッドを呼び出します。 `valueOf()` メソッドを自分で呼び出す必要はほとんどありません。 JavaScript は、プリミティブ値が期待されているオブジェクトに遭遇したときに、自動的にこれを呼び出します。

## 例

### valueOf() の使用

```js
const sym = Symbol("example");
sym === sym.valueOf(); // true
```

## 仕様書

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-symbol.prototype.valueof', 'Symbol.prototype.valueOf')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.valueOf")}}

## 関連情報

- {{jsxref("Object.prototype.valueOf()")}}
