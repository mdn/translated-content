---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

**`ReferenceError`** オブジェクトは、現在のスコープに存在しない（あるいはまだ初期化されていない）変数が参照されたときのエラーを表します。

`ReferenceError` は{{Glossary("serializable object", "シリアライズ可能オブジェクト")}}なので、 {{domxref("structuredClone()")}} で複製したり、[ワーカー](/ja/docs/Web/API/Worker)間で {{domxref("Worker/postMessage()", "postMessage()")}} を使用してコピーしたりすることができます。

`ReferenceError` は {{jsxref("Error")}} のサブクラスです。

## コンストラクター

- {{jsxref("ReferenceError/ReferenceError", "ReferenceError()")}}
  - : 新しい `ReferenceError` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Error")}} から継承したプロパティもあります。_

これらのプロパティは `ReferenceError.prototype` で定義されており、すべての `ReferenceError` インスタンスで共有されます。

- {{jsxref("Object/constructor", "ReferenceError.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。 `ReferenceError` インスタンスの場合、初期値は {{jsxref("ReferenceError/ReferenceError", "ReferenceError")}} コンストラクタです。
- {{jsxref("Error/name", "ReferenceError.prototype.name")}}
  - : エラー型の名前を表します。 `ReferenceError.prototype.name` の初期値は `"ReferenceError"` です。

## インスタンスメソッド

_親である {{jsxref("Error")}} から継承したメソッドもあります。_

## 例

### ReferenceError の捕捉

```js
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // このエラーのスタック
}
```

### ReferenceError の生成

```js
try {
  throw new ReferenceError("Hello");
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // このエラーのスタック
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
