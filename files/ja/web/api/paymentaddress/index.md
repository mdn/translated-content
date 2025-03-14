---
title: PaymentAddress
slug: Web/API/PaymentAddress
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

**`PaymentAddress`** は[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) のインターフェイスで、配送先または支払い先住所情報を保存するために使用されます。

万国郵便連合のウェブページにある [Addressing S42 standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) という、郵便宛名の国際標準に関する資料を参照すると便利かもしれません。

## プロパティ

- {{domxref('PaymentAddress.addressLine')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 他のプロパティに含まれていない住所の各行を提供する文字列の配列。正確なサイズと内容は国や場所によって異なります。例: 通り名、住居番号、アパートの番号、地方の配達ルート、説明の説明、私書箱の番号など。
- {{domxref('PaymentAddress.country')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 文字列で、 [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) 標準を使用して、住所が配置されている国を指定します。この文字列は常に正規の大文字形式で指定されます。有効な `country` の値の例: `"US"`, `"GB"`, `"CN"`, `"JP"`
- {{domxref('PaymentAddress.city')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 文字列で、住所の都市名または町名の部分を持ちます。
- {{domxref('PaymentAddress.dependentLocality')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 文字列で、都市に従属する地区またはサブ地区を示します。例: neighborhood, borough, district, イギリスの dependent locality
- {{domxref('PaymentAddress.organization')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 文字列で、支払い先住所にある組織、事業所、会社、機関などの名前を指定します。
- {{domxref('PaymentAddress.phone')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 文字列で、受領者または連絡担当者の電話番号を指定します。
- {{domxref('PaymentAddress.postalCode')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 文字列で、郵便物の配送経路として管轄の国が使用するコードを指定する文字列です。例: 米国の ZIP コード、インドの PIN コード、日本の郵便番号など。
- {{domxref('PaymentAddress.recipient')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 文字列で、支払い先住所の受取人、購入者、または連絡先の名前を示します。
- {{domxref('PaymentAddress.region')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 文字列で、国の最上位の行政区画 (州、都道府県など) を含みます。
- {{domxref('PaymentAddress.sortingCode')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 文字列で、フランスで使用されているような郵便ソートコードを提供します。

> [!NOTE]
> 値が指定されていないプロパティには、空の文字列が含まれています。

## インスタンスメソッド

- {{domxref('PaymentAddress.toJSON()')}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : `PaymentAddress` オブジェクトのプロパティの JSON 表現を返す標準のシリアライザー。

## 例

次の例では、 {{domxref("PaymentRequest.PaymentRequest","PaymentRequest()")}} コンストラクターを使用して、新しい支払い要求を作成しています。これは、 3 つのオブジェクトを引数して取ります。 1 つは支払いに使用できる支払い方法の詳細を含むオブジェクト、 1 つは実際の注文の詳細（購入アイテムや配送オプションなど）が入ったオブジェクト、もう 1 つは追加のオプションを含むオプションオブジェクトです。

これら 3 つのうち最初のもの（下の例では `supportedInstruments`）は、支払い方法で定義された構造に準拠しなければならない `data` プロパティを保有しています。

```js
const supportedInstruments = [
  {
    supportedMethods: "https://example.com/pay",
  },
];

const details = {
  total: { label: "Donation", amount: { currency: "USD", value: "65.00" } },
  displayItems: [
    {
      label: "Original donation amount",
      amount: { currency: "USD", value: "65.00" },
    },
  ],
  shippingOptions: [
    {
      id: "standard",
      label: "Standard shipping",
      amount: { currency: "USD", value: "0.00" },
      selected: true,
    },
  ],
};

const options = { requestShipping: true };

async function doPaymentRequest() {
  const request = new PaymentRequest(supportedInstruments, details, options);
  // Add event listeners here.
  // Call show() to trigger the browser's payment flow.
  const response = await request.show();
  // Process payment.
  const json = response.toJSON();
  const httpResponse = await fetch("/pay/", { method: "POST", body: json });
  const result = httpResponse.ok ? "success" : "failure";

  await response.complete(result);
}
doPaymentRequest();
```

{{domxref("PaymentRequest.show()")}} を使用して支払いフローが起動され、プロミスが正常に解決されると、満たされたプロミス（上記の `instrumentResponse`）から利用できる {{domxref("PaymentResponse")}} オブジェクトは、レスポンスの詳細を含む {{domxref("PaymentResponse.details")}} プロパティを保有します。これは、支払い方法の提供者によって定義された構造に適合していなければなりません。

## ブラウザーの互換性

{{Compat}}
