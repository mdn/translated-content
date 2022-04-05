---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
tags:
  - AggregateError
  - クラス
  - インターフェイス
  - JavaScript
  - ポリフィル
browser-compat: javascript.builtins.AggregateError
translation_of: Web/JavaScript/Reference/Global_Objects/AggregateError
---
{{JSRef}}

**`AggregateError`** オブジェクトは、複数のエラーを 1 つのエラーにまとめる必要があるときのエラーを表します。これは一つの操作で複数のエラーを報告する必要があるときに発生します。例えば {{JSxRef("Promise.any()")}} において、渡されたすべてのプロミスが拒否された場合などです。

## コンストラクター

- {{jsxref("Global_Objects/AggregateError/AggregateError", "AggregateError()")}}
  - : 新しい `AggregateError` オブジェクトを生成します。

## インスタンスプロパティ

- {{JSxRef("Error.prototype.message", "AggregateError.prototype.message")}}
  - : エラーメッセージで、既定値は `""` です。
- {{JSxRef("Error.prototype.name", "AggregateError.prototype.name")}}
  - : エラー名で、既定値は `AggregateError` です。
- `AggregateError`: `errors`
  - : `AggregateError` のインスタンスが作成された反復可能オブジェクトを本質的に反映した配列です。例えば、 `AggregateError` が {{JSxRef("AggregateError/AggregateError", "AggregateError()")}} コンストラクターを用いて生成された場合、最初の引数として渡された反復可能オブジェクトから生成される配列になります。

## 例

### AggregateError の捕捉

```js
Promise.any([
  Promise.reject(new Error("some error")),
]).catch(e => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "All Promises rejected"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
});
```

### AggregateError の生成

```js
try {
  throw new AggregateError([
    new Error("some error"),
  ], 'Hello');
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`AggregateError` の `core-js` におけるポリフィル](https://github.com/zloirock/core-js#ecmascript-promise)
- {{JSxRef("Error")}}
- {{JSxRef("Promise.any")}}
