---
title: "PaymentRequestUpdateEvent: updateWith() メソッド"
slug: Web/API/PaymentRequestUpdateEvent/updateWith
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Payment Request API")}}{{securecontext_header}}

**`updateWith()`** は {{domxref("PaymentRequestUpdateEvent")}} インターフェイスのメソッドで、既存の {{domxref("PaymentRequest")}} の詳細を更新します。

## 構文

```js-nolint
updateWith(details)
```

### 引数

- `details`

  - : 決済リクエストに適用された変更を指定するオブジェクトです。

    - `displayItems` {{optional_inline}}

      - : オブジェクトの配列で、それぞれが決済リクエストの 1 行を記述しています。これらは領収書や請求書の行を表し、それぞれ以下のプロパティを持ちます。

        - `amount`
          - : アイテムの金銭的価値を記述するオブジェクト。このオブジェクトには、以下のフィールドが記載されます。
            - `currency`
              - : 決済の `value` に使用する通貨を示す有効な 3 文字の [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) 通貨識別子 ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) を含む文字列です。
            - `value`
              - : 決済額を構成する通貨の単位を表す有効な10進数値を格納した文字列です。この文字列は、負の値を示すオプションの先頭の "-" と、0 から 9 までの 1 桁以上の数字、そしてオプションの小数点（"。"、ロケールに関係なく）と、少なくとも 1 桁以上の数字が続くものだけを格納する必要があります。空白は許されません。
        - `label`
          - : 課金される商品や サービスの、人間が読み取り可能な名称や説明を指定する文字列。インターフェイスのデザインによっては、{{Glossary("user agent", "ユーザーエージェント")}}によってユーザーに表示されることもあります。
        - `pending`
          - : 論理値で、指定した `amount` がまだ確定していない場合は `true` となります。これは、配送先住所や配送オプションなどの選択によって変わる送料や税額などの項目を示すために使用することができます。ユーザーエージェントはこの情報を示すことができますが、そうする必要はありません。

    - `error` {{optional_inline}} {{deprecated_inline}}
      - : 文字列で、ユーザーに提示するエラーメッセージ指定します。`updateWith()` を呼び出す際、更新データに `error` を含めると、{{Glossary("user agent", "ユーザーエージェント")}}に一般的なエラーメッセージとしてその文字列が表示されます。住所フィールド固有のエラーについては、`shippingAddressErrors` を使用してください。
    - `modifiers` {{optional_inline}}
      - : {{domxref("PaymentDetailsModifier")}} オブジェクトの配列で、それぞれ具体的な決済方法識別子の変更するための記述となっています。例 えば、選択した決済方法に基づいて総支払額を調整するために使用することができます (「5% の現金割引! 」)。
    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}}
      - : 配送先住所の各プロパティで検証できなかったエラーメッセージを含めることができる {{domxref("AddressErrors")}} オブジェクト。
    - `shippingOptions` {{optional_inline}}
      - : {{domxref("PaymentShippingOption")}} オブジェクトの配列。それぞれのオブジェクトは、ユーザーが選ぶことができる利用できる配送オプションの 1 つを記述します。
    - `total` {{optional_inline}}
      - : `displayItems` のオブジェクトと同じプロパティを持つオブジェクトで、決済に関する最新の合計を提供する。これが `displayItems` のすべてのアイテムの合計と等しいことを確認してください。これは自動的に計算されるものではありません。支払総額が変わるたびに、この値を自分で更新する必要があります。これにより、税金や割引、その他請求金額の合計を調整するようなことを処理するための柔軟性を持つことができます。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
