---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

**`EvalError`** オブジェクトは、グローバルの {{jsxref("Global_Objects/eval", "eval()")}} 関数に関するエラーを示します。この例外はもう JavaScript からは発生しなくなっていますが、互換性のために `EvalError` オブジェクトが残っています。

`EvalError` は {{Glossary("serializable object","シリアライズ可能オブジェクト")}} ですので、{{DOMxRef("Window.structuredClone", "structuredClone()")}} でクローンされるか、{{domxref("Worker/postMessage()", "postMessage()")}} を使い [ワーカー](/ja/docs/Web/API/Worker) の間でコピーされます。

`EvalError` は {{jsxref("Error")}} のサブクラスです。

## コンストラクター

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : 新しい `EvalError` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Error")}} から継承したプロパティがあります_。

これらのプロパティは `EvalError.prototype` に定義されており、すべての `EvalError` インスタンスで共有されます。

- {{jsxref("Object/constructor", "EvalError.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数。`EvalError` インスタンスの場合、初期値は {{jsxref("EvalError/EvalError", "EvalError")}} コンストラクターです。
- {{jsxref("Error/name", "EvalError.prototype.name")}}
  - : エラー名です。`EvalError.prototype.name` の場合、初期値は `"EvalError"` です。

## インスタンスメソッド

_親である {{jsxref("Error")}} から継承したプロパティがあります_。

## 例

### EvalError の生成

```js
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // エラースタック
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
