---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

グローバル関数 **`isFinite()`** は渡された値が有限数かどうかを判定します。必要に応じて、引数はまず数値へと変換されます。
**`isFinite()`** 関数は、値が有限数であるかどうかを判断します。必要に応じて、まず値を数値に変換します。有限数とは、{{jsxref("NaN")}} でも ±{{jsxref("Infinity")}} でもない数値です。 `isFinite()` 関数内の強制変換は[予想外の結果をもたらす](/ja/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description)可能性があるため、{{jsxref("Number.isFinite()")}} を使用することをお勧めします。

{{InteractiveExample("JavaScript デモ: isFinite()")}}

```js interactive-example
function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}

console.log(div(0));
// 予想される結果: "Number is Infinity!""

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

与えられた値が[数値に変換](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#数値への変換)した後に {{jsxref("NaN")}}、{{jsxref("Infinity")}}、`-Infinity` であった場合は `false` です。それ以外の場合は `true` です。

## 解説

`isFinite()` はグローバルオブジェクトの関数プロパティです。

`isFinite()` 関数の引数が[数値型](/ja/docs/Web/JavaScript/Guide/Data_structures#数値型) でない場合、その値は最初に数値に変換され、その結果が `NaN` および ±Infinity と比較されます。これは {{jsxref("isNaN")}} の動作と同じくらい紛らわしいです。例えば、`isFinite("1")` は `true` になります。

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

// より堅牢な Number.isFinite() を使用すると、異なる結果になります。
isFinite(null); // true
isFinite("0"); // true
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
