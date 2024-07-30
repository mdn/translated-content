---
title: "PaymentRequest: canMakePayment() メソッド"
slug: Web/API/PaymentRequest/canMakePayment
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

{{domxref("PaymentRequest")}} の **`canMakePayment()`** メソッドは、{{Glossary("user agent", "ユーザーエージェント")}}が対応している少なくとも一つの決済手段に対応した方法でリクエストが構成されているかどうかを判断します。

これを {{domxref("PaymentRequest.show", "show()")}} を呼び出す前に呼び出すと、ユーザーのブラウザーが受け入れる決済手段を処理できないときに、効率的なユーザー操作を提供することができます。

例えば、`canMakePayment()` を呼び出して、ブラウザーが決済リクエスト API を使ってユーザーに決済させるかどうかを判断し、もしそうでなければ、別の決済手段で代替するか、決済リクエスト API で処理しない方法のリストを提供する（あるいは、郵便や電話で支払う指示を出す）ことができるかもしれません。

## 構文

```js-nolint
canMakePayment()
```

### 引数

なし。

### 返値

{{domxref('PaymentRequest.PaymentRequest()','PaymentRequest')}} コンストラクターを使用してリクエストをインスタンス化する際に、ユーザーエージェントが提供した決済手段のいずれかに対応していれば `true` に解決する {{jsxref("Promise")}} を論理値に変換します．決済を処理できない場合、プロミスは `false` の値を受け取ります。

> [!NOTE]
> これを何度も呼び出すと、ブラウザーは返されるプロミスを `DOMException` で拒否するかもしれません。

## 例

次の例では、Apple Pay と Example Pay の両方に対応した `PaymentRequest` オブジェクトを非同期に構築する [デモからの抜粋](https://rsolomakhin.github.io/samples/paymentrequest/can-make-payment/) があります。canMakePayment()`の呼び出しを機能検出でラップし、`Promise`の解像度に応じて適切なコールバックを呼び出しています。

```js
async function initPaymentRequest() {
  const details = {
    total: {
      label: "Total",
      amount: {
        currency: "USD",
        value: "0.00",
      },
    },
  };

  const supportsApplePay = new PaymentRequest(
    [{ supportedMethods: "https://apple.com/apple-pay" }],
    details,
  ).canMakePayment();

  // Supports Apple Pay?
  if (await supportsApplePay) {
    // show Apple Pay logo, for instance
    return;
  }

  // Otherwise, let's see if we can use Example Pay
  const supportsExamplePay = await new PaymentRequest(
    [{ supportedMethods: "https://example.com/pay" }],
    details,
  ).canMakePayment();

  if (supportsExamplePay) {
    // show Example Pay support
    return;
  }

  // Otherwise, make payments using HTML form element
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('PaymentRequest.show','PaymentRequest.show()')}}
