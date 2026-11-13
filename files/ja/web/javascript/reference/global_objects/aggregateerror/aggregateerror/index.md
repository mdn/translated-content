---
title: AggregateError() コンストラクター
short-title: AggregateError()
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`AggregateError()`** コンストラクターは {{jsxref("AggregateError")}} オブジェクトを生成します。

## 構文

```js-nolint
new AggregateError(errors)
new AggregateError(errors, message)
new AggregateError(errors, message, options)

AggregateError(errors)
AggregateError(errors, message)
AggregateError(errors, message, options)
```

> [!NOTE]
> `AggregateError()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出せます。どちらも新しい `AggregateError` インスタンスを生成します。

### 引数

- `errors`
  - : エラーの反復可能オブジェクトであり、実際の {{jsxref("Error")}} インスタンス合ってはなりません。
- `message` {{optional_inline}}
  - : オプションで、統合エラーの人間可読な説明です。
- `options` {{optional_inline}}
  - : 次のプロパティを持つオブジェクトです。
    - `cause` {{optional_inline}}
      - : エラーの特定の原因を示すプロパティです。
        より具体的または有用なエラーメッセージでエラーを捕捉し再発生させる場合、このプロパティを使用して元のエラーを渡すことができます。

## 例

### `AggregateError` の作成

```js
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`AggregateError` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-promise)
- [es-shims による `AggregateError` のポリフィル](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Promise.any")}}
