---
title: Error.stackTraceLimit
short-title: stackTraceLimit
slug: Web/JavaScript/Reference/Global_Objects/Error/stackTraceLimit
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

> [!NOTE]
> この機能は現在標準外の [V8 スタックトレース API](https://v8.dev/docs/stack-trace-api) の一部です。ただし互換性の理由から、JavaScriptCore でも実装されています。

**`Error.stackTraceLimit`** は静的データプロパティで、エラーのスタックトレースによってキャプチャされるスタックフレームの最大数を示します。ユーザーコードによって設定可能であり、エンジンの動作を変更できます。

一般的に、このプロパティを読み取ることはあまり有用ではありませんが、新しい値に設定することは可能です。デバッグ時には、より大きな値に設定すると、コールスタックをより多く表示できるため有用です。より小さな値に設定すると、キャプチャされるスタックの量が減少するため、パフォーマンスが向上します。

## 値

整数で、エラーのスタックトレースによってキャプチャされるスタックフレームの最大数を表します。

{{js_property_attributes(1, 1, 1)}}

## 解説

`stackTraceLimit` は `Error` の静的プロパティであるため、常に `Error.stackTraceLimit` として使用します。作成した `Error` オブジェクトのプロパティとして使用することはできません。単一のエラーに対してのみスタックトレースをカスタマイズしたい場合は、プロパティを設定し、エラーを作成した後、プロパティを元の値にリセットする必要があるかもしれません。

## 例

### Error.stackTraceLimit の設定

このコードは、`Error.stackTraceLimit` に未対応の環境でも安全に実行できます。なぜなら、このプロパティを読み取るのではなく設定のみを行うため、未対応のエンジンでは設定が無視されるからです。

```js
Error.stackTraceLimit = 2;
const a = () => b();
const b = () => c();
const c = () => d();
const d = () => e();
const e = () => {
  throw new Error("My error");
};
try {
  a();
} catch (e) {
  console.log(e.stack);
}
// 対応するエンジンではフレームが 2 つだけ。その他のエンジンではすべてのフレーム。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.captureStackTrace()")}}
- [Stack trace API](https://v8.dev/docs/stack-trace-api) (V8 docs)
