---
title: "Error: cause"
short-title: cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`cause`** は {{jsxref("Error")}} インスタンスのデータプロパティで、エラーの元の原因を示します。

これはエラーを捕捉し、より具体的もしくは有用なエラーメッセージを再スローする際に、元のエラーにアクセスできるようにするために使用されます。

## 値

[`Error()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) コンストラクター内で、引数 `options.cause` に渡された値。存在しない場合もあります。

{{js_property_attributes(1, 0, 1)}}

## 概要

`cause` の値はどのような型でもかまいません。`catch` 文でバインドされる変数が `Error` であると確定しないのと同様に、キャッチしたエラーの原因が `Error` であると仮定してはいけません。以下の「構造化データをエラーの原因として提供する」例では、エラーでないものを意図的に原因として提供しています。

## 例

### cause によるエラーの再スロー

エラーをキャッチし、新しいメッセージで再スローすると便利なことがあります。
この例では、元のエラーを新しい `Error` のコンストラクターに渡しています。

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

より詳細な例については、[Error > 類似するエラーと区別する](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error#類似するエラーと区別する) を参照してください。

### 構造化データをエラーの原因として提供する

人間が読むために書かれたエラーメッセージは、機械が解析するには不適切です。エラーメッセージは語句の言い換えや句読点の変更に影響されるため、それらを処理するために書かれた既存の構文解析を壊してしまう可能性があるからです。そのため関数からエラーをスローする場合、人間が読めるエラーメッセージと共に機械が解析できるように構造化データとして原因を提供することができます。

```js
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error("RSA key generation requires integer inputs.", {
      cause: { code: "NonInteger", values: [p, q] },
    });
  }
  if (!areCoprime(p, q)) {
    throw new Error("RSA key generation requires two co-prime integers.", {
      cause: { code: "NonCoprime", values: [p, q] },
    });
  }
  // rsa algorithm…
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
