---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`toFixed()`** メソッドは、数を固定小数点表記を用いて整形します。

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## 構文

```js-nolint
toFixed()
toFixed(digits)
```

### 引数

- `digits` {{optional_inline}}
  - : 小数点の後に現れる桁の数です。これは `0` 以上 `100` 以下の値です。この引数が省略されると、`0` として扱われます。

### 返値

与えられた数値を固定小数点表記を用いて表した文字列です。

## 例外

- {{jsxref("RangeError")}}
  - : `digits` が `0` 以上 `100` 以下ではない場合に発生します。
- {{jsxref("TypeError")}}
  - : このメソッドが {{jsxref("Number")}} ではないオブジェクト上で実行された場合に発生します。

## 解説

`toFixed()` メソッドは `numObj` の文字列表記を、指数表記を使用せず、小数点以下を正確に `digits` 桁として返します。必要に応じて数値は丸められ、小数部は指定された長さになるよう必要に応じて 0 で埋められます。

`numObj` の絶対値が `1e+21` 以上の場合は、このメソッドは単純に {{jsxref("Number.prototype.toString()")}} を呼び出し、指数表記での文字列を返します。`toFixed()` は `numObj` の値が有限数でない場合、`"Infinity"`、`"NaN"`、`"-Infinity"` の何れかを返します。

`toFixed()` の出力は、一部の値では [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) よりも正確かもしれませんが、これは `toString()` が隣の数値と区別できる程度の有効数字しか出力しないためです。例えば、次のようになります。

```js
(1000000000000000128).toString(); // '1000000000000000100'
(1000000000000000128).toFixed(0); // '1000000000000000128'
```

しかし、高すぎる `digits` の精度を選ぶと、10 進数の小数を浮動小数点で正確に表せないため、予期せぬ結果を返すことがあります。例えば次のようになります。

```js
(0.3).toFixed(50); // '0.29999999999999998889776975374843459576368331909180'
```

## 例

### toFixed() の使用

```js
const numObj = 12345.6789;

numObj.toFixed(); // '12346'。四捨五入され小数部がなくなる
numObj.toFixed(1); // '12345.7' を返す。切り上げ
numObj.toFixed(6); // '12345.678900'を返す。0 を追加
(1.23e20).toFixed(2); // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'。切り上げ
(2.55).toFixed(1); // '2.5'
// 浮動小数点数で正確に表せず、最も近い浮動小数点数の
// 方が低いため、切り捨てられる。
(2.449999999999999999).toFixed(1); // '2.5'
// 2.45 との差が NUMBER.EPSILON 未満なので、切り上げ
// このリテラルは、実際には 2.45 と同じ数値をエンコードしている

(6.02 * 10 ** 23).toFixed(50); // 6.019999999999999e+23; 巨大な数値は指数表記を使用
```

### toFixed() を負の数に使用

メンバーアクセスは単項マイナスよりも[優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)が高いので、文字列を取得するためには。負の数の式全体をグループ化する必要があります。

```js-nolint
-2.34.toFixed(1); // -2.3, a number
(-2.34).toFixed(1); // '-2.3'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Number.EPSILON")}}
