---
title: "PaymentRequest: id プロパティ"
slug: Web/API/PaymentRequest/id
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Payment Request API")}}

**`id`** は {{domxref("PaymentRequest")}} インターフェイスの読み取り専用プロパティで、特定の {{domxref("PaymentRequest")}} インスタンスに固有の識別子を返します。

{{domxref("PaymentRequest")}} のインスタンスを構築する際に、独自の id を指定することが可能です。指定されなかった場合、ブラウザーは自動的に id 値を UUID に設定します。

## 例

この例は、{{domxref("PaymentRequest")}} インスタンスに独自の ID を付与する方法を示します。

```js
const details = {
  id: "super-store-order-123-12312",
  total: {
    label: "Total due",
    amount: { currency: "USD", value: "65.00" },
  },
};
const request = new PaymentRequest(methodData, details);
console.log(request.id); // super-store-order-123-12312
```

The `id` is then also available in the {{domxref("PaymentResponse")}}
returned from the `show()` method, but under the `requestId`
attribute.

```js
const response = await request.show();
console.log(response.requestId === request.id);

// And in serialized form too
const json = response.toJSON();
console.log(json.requestId, response.requestId, request.id);
```

## 値

文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
