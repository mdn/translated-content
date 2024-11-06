---
title: "PaymentRequest: abort() メソッド"
slug: Web/API/PaymentRequest/abort
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

`PaymentRequest.abort()` は {{domxref('PaymentRequest')}} インターフェイスのメソッドで、ユーザーエージェントに決済リクエストを終了させ、ユーザーインターフェイスが表示された場合は消去します。

## 構文

```js-nolint
abort()
```

### 引数

なし。

### 返値

なし ({{jsxref('undefined')}})。

## 例

次の例では、放棄または放置された可能性のある決済リクエストをクリアするためのタイムアウトを設定しています。

```js
const request = new PaymentRequest(supportedInstruments, details, options);

const paymentTimeout = setTimeout(
  () => {
    clearTimeout(paymentTimeout);
    request
      .abort()
      .then(() => {
        print("Payment timed out after 20 minutes.");
      })
      .catch(() => {
        print(
          "Unable to abort, because the user is currently in the process " +
            "of paying.",
        );
      });
  },
  20 * 60 * 1000,
); /* 20 minutes */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('PaymentRequest.abort','PaymentRequest.abort()')}}
