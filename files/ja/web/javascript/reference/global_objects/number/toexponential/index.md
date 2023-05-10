---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`toExponential()`** メソッドは {{jsxref("Number")}} オブジェクトを指数表記で表した文字列を返します。

{{EmbedInteractiveExample("pages/js/number-toexponential.html")}}

## 構文

```js-nolint
toExponential()
toExponential(fractionDigits)
```

### 引数

- `fractionDigits` {{optional_inline}}
  - : 任意です。小数点の後の桁数を指定する整数です。既定値はその数を表すのに必要な数の桁です。

### 返値

{{jsxref("Number")}} オブジェクトを、指数表記 (小数点前は 1 桁、小数点の後は `fractionDigits` によって指定された桁で切り捨て) で表した文字列です。

### 例外

- {{jsxref("RangeError")}}
  - : `fractionDigits` が `1` 以上 `100` 以下ではない場合に発生します。
- {{jsxref("TypeError")}}
  - : このメソッドが {{jsxref("Number")}} ではないオブジェクトに対して呼び出された場合に発生します。

## 解説

`fractionDigits` 引数が省略された場合、小数点の後の桁数は、その値を特定するのに必要な桁数になります。

`toExponential` メソッドを 1 つの数値リテラル、または、指数も小数点もない数値リテラルに対して使用する場合、ドットが小数点として解釈されることを防ぐために、メソッド呼び出しに先立つドットの前に空白を置いてください。

引数 `fractionDigits` で指定された桁よりも多くの桁を持っている数の場合、その数は、`fractionDigits` の桁で表すことができる最も近い数で表されます。{{jsxref("Number.prototype.toFixed", "toFixed()")}} メソッドの説明における概数表現の説明を参照してください。それは、`toExponential` メソッドにも適用されます。

## 例

### toExponential の使用

```js
const numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1 と表示
console.log(numObj.toExponential(4)); // 7.7123e+1 と表示
console.log(numObj.toExponential(2)); // 7.71e+1 と表示
console.log((77.1234).toExponential()); // 7.71234e+1 と表示
console.log((77).toExponential()); // 7.7e+1 と表示
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 多くのバグ修正を含んだ [`Number.prototype.toExponential` のポリフィル](https://github.com/zloirock/core-js#ecmascript-number) が [`core-js`](https://github.com/zloirock/core-js) で利用できます
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
