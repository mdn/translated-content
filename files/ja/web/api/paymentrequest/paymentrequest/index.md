---
title: "PaymentRequest: PaymentRequest() コンストラクター"
short-title: PaymentRequest()
slug: Web/API/PaymentRequest/PaymentRequest
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

**`PaymentRequest()`** コンストラクターは、決済リクエストの生成、検証、送信の処理を行うために使用する新しい {{domxref("PaymentRequest") }} オブジェクトを作成します。

## 構文

```js-nolint
new PaymentRequest(methodData, details)
new PaymentRequest(methodData, details, options)
```

### 引数

- `methodData`

  - : 販売者ウェブサイトが受け入れる決済手段の識別子と、関連する決済手段固有のデータを格納する配列です。配列の各項目には以下のフィールドが含まれます。

    - `supportedMethods`

      - : 文字列で、[決済手段識別子](/ja/docs/Web/API/Payment_Request_API/Concepts#決済手段識別情報)が入ります。これは URL、または[標準化された決済手段識別子](/ja/docs/Web/API/Payment_Request_API/Concepts#決済手段識別子の標準化)のいずれかです。`data` フィールドの値と構造は、`supportedMethods` フィールドの値によって異なります。

    - `data`
      - : 対応している決済手段が必要とするかもしれないオプション情報を提供する JSON シリアライズ可能なオブジェクトです。これは `supportedMethods` で示す決済ハンドラーが期待する種類に適合していなければなりません。開発者は、データオブジェクトの期待される形について、決済手段の管理者に相談する必要があります。`supportedMethods` が `secure-payment-confirmation` の場合、`data` は {{domxref("SecurePaymentConfirmationRequest")}} 辞書に適合する必要があります。

- `details`

  - : リクエストされたトランザクションに関する情報を提供する。この引数には以下のフィールドが含まれます。

    - `total`
      - : 決済リクエストのための合計金額です。
    - `id` {{optional_inline}}
      - : この決済リクエストのための自由形式の識別子。値が与えられなかった場合、ブラウザーは値を作成します。
    - `displayItems`
      - : ユーザーエージェントが表示することができる決済リクエストのオプション行項目（商品詳細、税金、送料など）の配列。
    - `shippingOptions`
      - : ユーザーが選ぶことのできる配送オプションです。この配列が空の場合、販売者は現在の配送先住所に配送できないことを示す。既定値の配送オプションは、この配列で示すことができます。
    - `modifiers`

      - : 特定の決済手段に対する変更仕様です。例 えば、決済のための合計金額を決済手段に基づいて調整することです。このパラメーターには、以下のフィールドが格納されます。

        - `additionalDisplayItems`
          - : `details.displayItems` プロパティに追加する項目の配列です。このプロパティは、`details.modifiers.total` で異なる金額を示す割引または割増料金の行を追加するために一般的に使用されます。
        - `data`
          - : 対応している決済手段で必要と思われるオプション情報を提供する JSON シリアライズ可能なオブジェクトです。
        - `total`
          - : details.total の値を上書きする、決済リクエストのための合計金額です。これは通常、`details.modifiers.additionalItems` がリクエストに割引や購入を追加するときに使用します。

- `options` {{optional_inline}}

  - : ユーザーエージェントの動作を制御するオプションを設定することができます。この引数には、以下のフィールドが含まれます。

    - `requestPayerName`
      - : ユーザーエージェントが支払者の名前を収集し、決済リクエストと一緒に送信するかどうかを示す論理値です。既定値は `false` です。
    - `requestPayerEmail`
      - : ユーザーエージェントが支払者の電子メールアドレスを収集し、決済リクエストと一緒に送信するかどうかを示す論理値です。既定値は `false` です。
    - `requestPayerPhone`
      - : ユーザーエージェントが支払者の電話番号を収集し、決済リクエストと一緒に送信するかどうかを示す論理値です。既定値は `false` です。
    - `requestShipping`
      - : ユーザーエージェントが支払者の配送先住所を収集し、決済リクエストと一緒に送信するかどうかを示す論理値です。この型を true に設定した場合、適切な `shippingType` を選択する必要があります。既定値は `false` です。
    - `shippingType`
      - : 使用する用途によって「配送」という言葉が適切でない場合に、ユーザーインターフェイスがどのように配送を参照するかを指定します。例えば、英語圏では "pizza shipping" ではなく "pizza delivery" と言います。有効な値は、`"shipping"`、`"delivery"`、`"pickup"` です。
        引用符は必ず含める必要があります。既定値は `"shipping"` です。

### 返値

新しい {{domxref("PaymentRequest")}} オブジェクトで、入力引数によって設定された通りの用途で使用するように構成されています。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : この機能を使用することが、[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によってブロックされている。

## 例

次の例は、最小限の機能を示し、代わりに `PaymentRequest` オブジェクトをインスタンス化する際の完全なコンテキストを示すことに重点を置いています。

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

try {
  const request = new PaymentRequest(supportedInstruments, details, options);
  // Add event listeners here.
  // Call show() to trigger the browser's payment flow.
  request
    .show()
    .then((instrumentResponse) => {
      // Do something with the response from the UI.
    })
    .catch((err) => {
      // Do something with the error from request.show().
    });
} catch (e) {
  // Catch any other errors.
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
