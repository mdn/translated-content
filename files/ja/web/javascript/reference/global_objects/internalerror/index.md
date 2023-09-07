---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
---

{{JSRef}} {{non-standard_header}}

**`InternalError` オブジェクト** は、 JavaScript エンジンで内部的に発生したエラーを示します。

これは、以下のように何かが大きすぎる時に発生します。

- "switch case が多すぎる"、
- "正規表現内の括弧が多すぎる"、
- "配列の初期化子が大きすぎる"、
- "再帰が深すぎる"。

## コンストラクター

- {{jsxref("InternalError/InternalError", "InternalError()")}}
  - : 新しい `InternalError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "InternalError.prototype.message")}}
  - : エラーメッセージです。 {{jsxref("Error.prototype.message")}} から継承しています。
- {{jsxref("Error.prototype.name", "InternalError.prototype.name")}}
  - : エラー名です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.fileName", "InternalError.prototype.fileName")}}
  - : このエラーが発生したファイルのパスです。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.lineNumber", "InternalError.prototype.lineNumber")}}
  - : このエラーが発生したファイル内の行番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.columnNumber", "InternalError.prototype.columnNumber")}}
  - : このエラーが発生した行内の桁番号です。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.stack", "InternalError.prototype.stack")}}
  - : スタックトレースです。 {{jsxref("Error")}} から継承しています。

## 例

### 深すぎる再帰

この再帰関数は終了条件によって、10 回実行されます。

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" is the exit condition
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

この条件を非常に大きな値に設定した場合、動作しなくなります。

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

詳しくは、 [InternalError: too much recursion.](/ja/docs/Web/JavaScript/Reference/Errors/Too_much_recursion) を参照してください。

## 仕様書

仕様の一部ではありません。

## ブラウザーの互換性

{{Compat("javascript.builtins.InternalError")}}

## 関連情報

- {{jsxref("Error")}}
- [InternalError: too much recursion](/ja/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
