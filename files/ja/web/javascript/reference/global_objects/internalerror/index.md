---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

**`InternalError`** オブジェクトは、JavaScript エンジンで内部的に発生したエラーを表します。

これは次のように何かが大きすぎる時に発生します。

- "switch case が多すぎる"
- "正規表現内の括弧が多すぎる"
- "配列の初期化子が大きすぎる"
- "再帰が深すぎる"

`InternalError` は {{jsxref("Error")}} のサブクラスです。

## コンストラクター

- {{jsxref("InternalError/InternalError", "InternalError()")}}
  - : 新しい `InternalError` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{jsxref("Error")}} から継承したプロパティもあります。_

これらのプロパティは `InternalError.prototype` で定義されており、すべての `InternalError` インスタンスで共有されます。

- {{jsxref("Object/constructor", "InternalError.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`InternalError` のインスタンスでは、初期値は {{jsxref("InternalError/InternalError", "InternalError")}} コンストラクターです。
- {{jsxref("Error/name", "InternalError.prototype.name")}}
  - : エラーの種類の名前を表します。`InternalError.prototype.name` の場合、初期値は `"InternalError"` です。

## インスタンスメソッド

_親である {{jsxref("Error")}} から継承したメソッドがあります_。

## 例

### 深すぎる再帰

この再帰関数は終了条件によって、10 回実行されます。

```js
function loop(x) {
  // "x >= 10" is the exit condition
  if (x >= 10) return;

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

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error")}}
- [InternalError: too much recursion](/ja/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
