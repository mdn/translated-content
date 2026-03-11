---
title: "AggregateError: errors"
short-title: errors
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/errors
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`errors`** は {{jsxref("AggregateError")}} インスタンスのデータプロパティで、集約されたエラーを表す配列を保持します。

## 値

{{jsxref("Array")}} で、 {{jsxref("AggregateError/AggregateError", "AggregateError()")}} コンストラクターの最初の引数として渡された反復可能オブジェクトと同じ順序で値を含みます。

{{js_property_attributes(1, 0, 1)}}

## 例

### errors の使用

```js
try {
  throw new AggregateError(
    // エラーの反復可能オブジェクト
    new Set([new Error("あるエラー"), new Error("もう一つのエラー")]),
    "複数のエラーが発生しました",
  );
} catch (err) {
  console.log(err.errors);
  // [
  //   Error: あるエラー,
  //   Error: もう一つのエラー
  // ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [制御フローとエラー処理](/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)ガイド
- {{jsxref("AggregateError")}}
- [`Error`: `cause`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
