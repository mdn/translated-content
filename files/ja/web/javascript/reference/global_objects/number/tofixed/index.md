---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
tags:
  - JavaScript
  - メソッド
  - Number
  - Prototype
  - リファレンス
browser-compat: javascript.builtins.Number.toFixed
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toFixed
---
{{JSRef}}

**`toFixed()`** メソッドは、数を固定小数点表記を用いて整形します。

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## 構文

```js
toFixed()
toFixed(digits)
```

### 引数

- `digits` {{optional_inline}}
  - : 小数点の後に現れる桁の数です。これは `0` 以上 `20` 以下の値、実装によっては、さらに広い値の範囲をサポートしているかもしれません。この引数が省略されると、それは `0` として扱われます。

### 返値

与えられた数値を固定小数点表記を用いて表した文字列です。

## 例外

- {{jsxref("RangeError")}}
  - : `digits` が小さすぎたり大きすぎたりした場合。 `0` 以上 `100` 以下の値では {{jsxref("RangeError")}} が発生しません。実装によっては、より大きな値や小さな値に対応しているかもしれません。
- {{jsxref("TypeError")}}
  - : このメソッドが {{jsxref( "Number")}} ではないオブジェクト上で実行された場合。

## 解説

**`toFixed()`** は `numObj` の文字列表記を、指数表記を使用せず、小数点以下を正確に `digits` 桁として返します。必要に応じて数値は丸められ、小数部は指定された長さになるよう必要に応じて 0 で埋められます。 `numObj` の絶対値が `1e+21` 以上の場合は、このメソッドは単純に {{jsxref("Number.prototype.toString()")}} を呼び出し、指数表記での文字列を返します。

> **Warning:** 浮動小数点数は、二進数で正確にすべての十進数値を表すことができるわけではありません。これは予想外の結果を導くことがあり、例えば `0.1 + 0.2 === 0.3` は `false` を返します。

## 例

### toFixed の使用

```js
let numObj = 12345.6789

numObj.toFixed()       // '12346' を返す : 四捨五入され小数部がなくなる
numObj.toFixed(1)      // '12345.7' を返す : 四捨五入
numObj.toFixed(6)      // '12345.678900'を返す : 0 を追加する
(1.23e+20).toFixed(2)  // '123000000000000000000.00' を返す
(1.23e-10).toFixed(2)  // '0.00' を返す
2.34.toFixed(1)        // '2.3' を返す
2.35.toFixed(1)        // '2.4' を返す。切り上げ。
2.55.toFixed(1)        // '2.5' を返す。切り捨て。上記警告を参照。
-2.34.toFixed(1)       // -2.3 を返す (演算子の優先順位上、マイナスの数値リテラルは文字列を返さない)
(-2.34).toFixed(1)     // '-2.3'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
