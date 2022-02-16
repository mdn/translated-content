---
title: AggregateError() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
tags:
  - コンストラクター
  - JavaScript
  - リファレンス
  - ポリフィル
browser-compat: javascript.builtins.AggregateError.AggregateError
translation_of: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
---
{{JSRef}}

**`AggregateError()`** コンストラクターは、単一のエラーにラップする必要があるいくつかのエラーに対してエラーを作成します。

## 構文

```js
new AggregateError(errors)
new AggregateError(errors, message)
```

### 引数

- `errors`
  - : エラーの反復可能オブジェクトであり、実際には {{JSxRef("Error")}} インスタンスではない場合があります。
- `message`{{Optional_Inline}}
  - : オプションで、統合エラーの人間可読な説明です。

## 例

### `AggregateError` の作成

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

- `AggregateError` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-promise) で利用できます
- {{jsxref("Promise.any")}}
