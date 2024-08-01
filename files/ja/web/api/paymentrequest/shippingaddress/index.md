---
title: "PaymentRequest: shippingAddress プロパティ"
short-title: shippingAddress
slug: Web/API/PaymentRequest/shippingAddress
l10n:
  sourceCommit: 0ee5b41dca22ac5c3cd7f2c6523f76125c2526e9
---

{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

**`shippingAddress`** は {{domxref('PaymentRequest')}} インターフェイスの読み取り専用プロパティで、ユーザーから指定された配送先住所を返します。既定値は `null` です。

## 値

## 例

一般的に、ユーザーエージェントは `shippingAddress` プロパティ値を埋めます。
これは、`PaymentRequest`コンストラクターを呼び出すときに `options.requestShipping` を `true` に設定することで行うことができます。

下記の例では、送料が地域によって異なります。{{domxref('PaymentRequest.shippingaddresschange_event','shippingaddresschange')}} が呼び出されると、`updateDetails()` が呼び出されて `PaymentRequest` の詳細を更新し、`shippingAddress` を使用して正しい送料を設定します。

```js
// Initialization of PaymentRequest arguments are excerpted for the sake of
//   brevity.
const payment = new PaymentRequest(supportedInstruments, details, options);

payment.addEventListener("shippingaddresschange", (evt) => {
  evt.updateWith(
    new Promise((resolve) => {
      updateDetails(details, request.shippingAddress, resolve);
    }),
  );
});

payment
  .show()
  .then((paymentResponse) => {
    // Processing of paymentResponse excerpted for brevity.
  })
  .catch((err) => {
    console.error("Uh oh, something bad happened", err.message);
  });

function updateDetails(details, shippingAddress, resolve) {
  if (shippingAddress.country === "US") {
    const shippingOption = {
      id: "",
      label: "",
      amount: { currency: "USD", value: "0.00" },
      selected: true,
    };
    if (shippingAddress.region === "MO") {
      shippingOption.id = "mo";
      shippingOption.label = "Free shipping in Missouri";
      details.total.amount.value = "55.00";
    } else {
      shippingOption.id = "us";
      shippingOption.label = "Standard shipping in US";
      shippingOption.amount.value = "5.00";
      details.total.amount.value = "60.00";
    }
    details.displayItems.splice(2, 1, shippingOption);
    details.shippingOptions = [shippingOption];
  } else {
    delete details.shippingOptions;
  }
  resolve(details);
}
```

## ブラウザーの互換性

{{Compat}}
