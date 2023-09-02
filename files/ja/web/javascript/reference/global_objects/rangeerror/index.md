---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
---

{{JSRef}}

**`RangeError`** オブジェクトは、値が配列内に存在しない、または値が許容範囲にない場合のエラーを表します。

## 解説

`RangeError`は、関数に対して引数として許容されない範囲の数値を渡そうとした場合に発生します。

これは次のような場合に発生します。

- 許容されない文字を含む文字列を {{jsxref("String.prototype.normalize()")}} に渡した場合
- {{jsxref("Array")}} コンストラクターで不正な長さの配列を作ろうとした場合
- 数値に関するメソッド {{jsxref("Number.prototype.toExponential()")}}, {{jsxref("Number.prototype.toFixed()")}}, {{jsxref("Number.prototype.toPrecision()")}} に不適切な値を渡した場合

## コンストラクター

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : 新しい `RangeError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "RangeError.prototype.message")}}
  - : エラーメッセージ。 ECMA-262 は {{jsxref("RangeError")}} 自身が `message` プロパティを提供するべきであると規定しているにもかかわらず、 [SpiderMonkey](/ja/docs/Mozilla/Projects/SpiderMonkey) では {{jsxref("Error.prototype.message")}} が継承される。
- {{jsxref("Error.prototype.name", "RangeError.prototype.name")}}
  - : エラー名。 {{jsxref("Error")}} から継承。
- {{jsxref("Error.prototype.fileName", "RangeError.prototype.fileName")}}
  - : エラーが発生したファイルへのパス。 {{jsxref("Error")}} から継承。
- {{jsxref("Error.prototype.lineNumber", "RangeError.prototype.lineNumber")}}
  - : エラーが発生したファイルの行番号。 {{jsxref("Error")}} から継承。
- {{jsxref("Error.prototype.columnNumber", "RangeError.prototype.columnNumber")}}
  - : エラーが発生したファイルの列番号。 {{jsxref("Error")}} から継承。
- {{jsxref("Error.prototype.stack", "RangeError.prototype.stack")}}
  - : スタックトレース。{{jsxref("Error")}}から継承。

## 例

### 数値に対する RangeError の使用

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

### RangeError の使用 (数値以外に対して)

```js
function check(value) {
  if (["apple", "banana", "carrot"].includes(value) === false) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".',
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.RangeError")}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.toExponential()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Number.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
