---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`RangeError`** オブジェクトは、値が配列内に存在しない、または値が許容範囲にない場合のエラーを表します。

## 解説

`RangeError`は、関数に対して引数として許容されない範囲の数値を渡そうとした場合に発生します。

これは次のような場合に発生します。

- 許容されない文字を含む文字列を {{jsxref("String.prototype.normalize()")}} に渡した場合
- {{jsxref("Array")}} コンストラクターで不正な長さの配列を作ろうとした場合
- 数値に関するメソッド {{jsxref("Number.prototype.toExponential()")}}, {{jsxref("Number.prototype.toFixed()")}}, {{jsxref("Number.prototype.toPrecision()")}} に不適切な値を渡した場合

`RangeError` は{{Glossary("serializable object", "シリアライズ可能オブジェクト")}}であるため、{{DOMxRef("Window.structuredClone", "structuredClone()")}} で複製したり、[ワーカー](/ja/docs/Web/API/Worker)間で {{domxref("Worker/postMessage()", "postMessage()")}} を使用してコピーしたりすることができます。

`RangeError` は {{jsxref("Error")}} のサブクラスです。

## コンストラクター

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : 新しい `RangeError` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Error")}} から継承したプロパティもあります。_

これらのプロパティは `RangeError.prototype` で定義されており、すべての `RangeError` インスタンスで共有されます。

- {{jsxref("Object/constructor", "RangeError.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`RangeError` のインスタンスでは、初期値は {{jsxref("RangeError/RangeError", "RangeError")}} コンストラクターです。
- {{jsxref("Error/name", "RangeError.prototype.name")}}
  - : エラーの種類の名前を表します。`RangeError.prototype.name` の場合、初期値は `"RangeError"` です。

## インスタンスメソッド

_親である {{jsxref("Error")}} から継承したメソッドがあります_。

## 例

### 数値に対する RangeError の使用

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("引数は -500 以上 500 以下でなければなりません。");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // エラーを処理する
  }
}
```

### RangeError の使用 (数値以外に対して)

```js
function check(value) {
  if (!["apple", "banana", "carrot"].includes(value)) {
    throw new RangeError(
      '引数は "apple", "banana", "carrot" のいずれかでなければなりません。',
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // エラーを処理する
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
