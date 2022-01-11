---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
tags:
  - JavaScript
  - メソッド
  - Number
  - リファレンス
  - ポリフィル
browser-compat: javascript.builtins.Number.isInteger
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---
{{JSRef}}

**`Number.isInteger()`** メソッドは、渡された値が整数かどうかを判定します。

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## 構文

```js
Number.isInteger(value)
```

### 引数

- `value`
  - : 整数かどうかを判定される値です。

### 返値

渡された値が整数かどうかを示す論理値です。

## 解説

指定された値が整数の場合は `true` を返し、そうでない場合は `false` を返します。{{jsxref("NaN")}} もしくは {{jsxref("Infinity")}} の場合も `false` を返します。このメソッドは整数として表すことができる浮動小数点数も `true` を返します。

## 例

### isInteger の使用

```js
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false

Number.isInteger(5.0);       // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Number.isInteger` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-number) で利用できます
- このメソッドが所属している {{jsxref("Number")}} オブジェクト。
