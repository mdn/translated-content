---
title: "PaymentRequest: shippingOption プロパティ"
slug: Web/API/PaymentRequest/shippingOption
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

**`shippingOption`** は {{domxref('PaymentRequest')}} インターフェイスの読み取り専用プロパティで、これは、選択された配送オプションの id、null（選択する配送オプションが設定されていない場合）、またはユーザーによって選択された配送オプションのいずれかを返します。「選択された」配送オプションが提供されていない場合、最初は `null` です。

この属性は、コンストラクターが `requestShipping` フラグを `true` に設定して呼び出された場合にのみ設定されます。`requestShipping` が `false` である（または見つからない）場合、たとえ開発者が選択した配送オプションを提供したとしても、 `shippingOption` は `null` を返します。

## 値

## 例

下記の例では、{{domxref('PaymentRequest.shippingaddresschange_event', 'shippingaddresschange')}} および {{domxref('PaymentRequest.shippingoptionchange_event', 'shippingoptionchange')}} イベントが配信されます。それぞれが `updateDetails()` が呼び出し、1 つはプロミスを用いており、もう 1 つはプレーンな JS オブジェクトを用いています。これは、決済シートの同期と非同期の更新を示すものです。

```js
const request = new PaymentRequest(methodData, details, options);
// Async update to details
request.onshippingaddresschange = (ev) => {
  ev.updateWith(checkShipping(request));
};
// Sync update to the total
request.onshippingoptionchange = (ev) => {
  const shippingOption = shippingOptions.find(
    (option) => option.id === request.id,
  );
  const newTotal = {
    currency: "USD",
    label: "Total due",
    value: calculateNewTotal(shippingOption),
  };
  ev.updateWith({ ...details, total: newTotal });
};
async function checkShipping(request) {
  try {
    const json = request.shippingAddress.toJSON();

    await ensureCanShipTo(json);
    const { shippingOptions, total } = await calculateShipping(json);

    return { ...details, shippingOptions, total };
  } catch (err) {
    return { ...details, error: `Sorry! we can't ship to your address.` };
  }
}
```

## ブラウザーの互換性

{{Compat}}
