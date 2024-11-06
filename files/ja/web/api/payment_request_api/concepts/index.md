---
title: 決済処理の概要
slug: Web/API/Payment_Request_API/Concepts
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) により、ウェブサイトやアプリで決済を簡単に処理することができます。この記事では、APIをどのように運営し、各成分がどのような働きをするのかを見ていきます。

## 用語

API を操作する詳細に入る前に、知っておいていただきたい項目があります。

- 払主（または販売者）
  - : 販売者（個人または組織）は、決済リクエスト API を通じて金銭の受け取りを希望するウェブサイトまたはアプリケーションを持ちます。
- 支払者
  - : ウェブサイトやアプリを使用して購入する人または組織。支払者は、決済手段の要求に応じて、自分自身を認証した後、支払いを承認します。
- 決済手段
  - : クレジットカードやオンライン決済サービスなど、決済を行うための手段。
- 決済手段提供者
  - : 指定された決済手段を用いて決済を行うために必要な技術を提供する組織。例えば、決済にクレジットカードを使用する場合、クレジットカード処理サービスは決済手段提供者となる。
- 決済ハンドラー
  - : 決済を処理するために、具体的な決済手段プロバイダーとのインターフェイスに必要なコードの実装です。

決済ハンドラーの中には、**販売者検証**を使用するものがあります。これは、何らかの形で販売者の身元を検証するプロセスで、通常は公開鍵などの何らかの暗号化レスポンスを形成するものを使用します。検証された販売者は、決済ハンドラーとのインターフェイスが許可されます。

## 決済手段識別情報

決済ハンドラーは、**決済手段識別子**によって識別され ますが、これは決済ハンドラーを一意に識別する文字列です。これらは、標準化された決済ハンドラー識別子のいずれか、または決済処理サービスがそれ自体を識別し、決済を処理するために使用する URL のいずれかである可能性があります。

### 決済手段識別子の標準化

現在、登録されている[標準決済手段識別子](https://www.w3.org/TR/payment-method-id/#registry)は 1 つだけです（今後、追加される可能性があります）。

- `basic-card`
  - : 決済は基本カード決済の仕様で処理します。詳しくは {{domxref("BasicCardRequest")}} を参照。**_この仕様と使用する方法についての記事が必要です_**。

### URL ベースの決済手段識別子

これらは具体的なサービス内容によって大きく異なり、指定された処理サービスでは、API のバージョンや通信技術などによって、複数の URL を使用することができる場合があります。

- `https://apple.com/apple-pay`
  - : 決済は [Apple Pay](https://www.apple.com/apple-pay/) のサービスを使用します。現在、Apple Pay は Safari のみ対応しています。
- `https://google.com/pay`
  - : 決済は [Google Pay](https://pay.google.com/payments/home) で処理されます。現在、Chrome および Chromium ベースのブラウザーのみ対応しています。

## 決済ハンドラーの機能

{{Glossary("user agent", "ユーザーエージェント")}} は、特定の種類の決済に対応する組み込みのサポートを提供する場合があります。さらに、[決済ハンドラー API](https://w3c.github.io/payment-handler/) は、それを提供するブラウザーの中で、追加の決済手段提供者のための対応を確立するために使用することができます。いずれの場合も、決済ハンドラーは以下の責任を負います。

1. **決済が可能かどうか確認する。** 決済手段やユーザーの決済リクエストによって使用可能な条件は異なります。例えば、支払先が受け入れていないクレジットカードをユーザーが使用すると、決済ができません。
2. **決済ハンドラーが販売者検証に対応している場合、ユーザーエージェントからの販売者検証リクエストに対応する。** 詳しくは[販売者検証](#販売者検証)を参照してください。
3. **ユーザーから指定された情報が、有効な取引につながるかどうかを確認する。** その結果、トランザクションを処理するために必要な情報を格納した決済手段固有のオブジェクトが生成され、返されます。

## 販売者検証

決済ハンドラーの中には、*販売者検証*を使用するものがあります。これは、何らかの形で販売者の身元を検証するプロセスで、通常は何らかの形の暗号チャレンジを使用します。販売者が検証に成功しなかった場合、その決済ハンドラーを使用することはできません。

正確な検証技術は決済ハンドラーに依存し、販売者の検証は完全にオプションです。結局、ウェブサイトやアプリケーションが担当するのは、販売者の検証キーをフェッチしてイベントの {{domxref("MerchantValidationEvent.complete", "complete()")}} メソッドに渡すことだけです。

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

この例では、`fetchValidationData()` は、`validationURL` で指定されたアドレスから決済ハンドラーの固有の識別情報を読み込む関数です。なぜなら、クライアントは通常、バリデーション URL そのものにアクセスしないからです。

その後、このデータ（または読み込んだデータに解決する {{jsxref("Promise")}}）を `complete()` に渡して決済ハンドラーに渡すことで、決済ハンドラーは取得したデータと対応するアルゴリズムや他のデータを使用して、販売者が決済ハンドラーを使用できることを確認できるようになります。

したがって重要なのは、{{Glossary("user agent", "ユーザーエージェント")}}が {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} イベントを送ることは、ユーザーエージェント自身が決済ハンドラーを実装しない限りあり得ないということです。例えば、Safari は Apple Pay の対応を統合しているので、Apple Pay の決済ハンドラーはこれを利用して、`merchantvalidation` をクライアントに送信し、サーバーの検証データを取得するよう指示して `complete()` を呼び出し、それを決済ハンドラーに配信して、Apple Pay が販売者への支払いに使用できることを確認します。

## 仕様書

{{Specifications}}

## 関連情報

- [決済リクエスト API](/ja/docs/Web/API/Payment_Request_API)
- [決済リクエスト API の使用](/ja/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)
