---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

**`isFinite()`** 関数は、値が有限数であるかどうかを判定します。必要に応じて、まず値を数値に強制変換します。有限数とは、{{jsxref("NaN")}} でも ±{{jsxref("Infinity")}} でもない数値です。関数内での型強制変換は[予想外の結果をもたらす](/ja/docs/Web/JavaScript/Reference/Global_Objects/isNaN#解説)可能性があるため、{{jsxref("Number.isFinite()")}} を使用することをお勧めします。

{{InteractiveExample("JavaScript デモ: isFinite()")}}

```js interactive-example
function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}

console.log(div(0));
// 予想される結果: "Number is Infinity!"

console.log(div(1));
// 予想される結果: "Number is NOT Infinity."
```

## 構文

```js-nolint
isFinite(value)
```

### 引数

- `value`
  - : 検査を行う値。

### 返値

与えられた値を数値に[強制変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への強制変換)した結果が {{jsxref("Infinity")}}、`-Infinity`、{{jsxref("NaN")}} である場合を除き、`true` です。

## 解説

`isFinite()` はグローバルオブジェクトの関数プロパティです。

`isFinite()` 関数の引数が[数値型](/ja/docs/Web/JavaScript/Guide/Data_structures#数値型) でない場合、その値は最初に数値に強制変換され、その結果が `NaN` および ±Infinity と比較されます。これは {{jsxref("isNaN")}} の動作と同じくらい紛らわしいです。例えば、`isFinite("1")` は `true` になります。

{{jsxref("Number.isFinite()")}} は、値が有限数であるかどうかを検査する、より信頼性の高い方法です。これは、数値以外の入力に対しては `false` を返すからです。

## 例

### isFinite の使用

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

// より堅牢な Number.isFinite() では、次の結果は false:

isFinite(null); // true (null は 0 に強制変換されるため)
isFinite(""); // true (空文字列は 0 に強制変換されるため)
isFinite("123"); // true (文字列を数値として解釈できるため)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
