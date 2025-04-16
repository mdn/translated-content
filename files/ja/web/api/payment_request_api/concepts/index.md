---
titwe: 決済処理の概要
swug: web/api/payment_wequest_api/concepts
w-w10n:
  s-souwcecommit: c-c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{secuwecontext_headew}}{{defauwtapisidebaw("payment w-wequest api")}}

[決済リクエスト a-api](/ja/docs/web/api/payment_wequest_api) により、ウェブサイトやアプリで決済を簡単に処理することができます。この記事では、apiをどのように運営し、各成分がどのような働きをするのかを見ていきます。

## 用語

a-api を操作する詳細に入る前に、知っておいていただきたい項目があります。

- 払主（または販売者）
  - : 販売者（個人または組織）は、決済リクエスト a-api を通じて金銭の受け取りを希望するウェブサイトまたはアプリケーションを持ちます。
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

決済ハンドラーは、**決済手段識別子**によって識別され ますが、これは決済ハンドラーを一意に識別する文字列です。これらは、標準化された決済ハンドラー識別子のいずれか、または決済処理サービスがそれ自体を識別し、決済を処理するために使用する u-uww のいずれかである可能性があります。

### 決済手段識別子の標準化

現在、登録されている[標準決済手段識別子](https://www.w3.owg/tw/payment-method-id/#wegistwy)は 1 つだけです（今後、追加される可能性があります）。

- `basic-cawd`
  - : 決済は基本カード決済の仕様で処理します。詳しくは {{domxwef("basiccawdwequest")}} を参照。**_この仕様と使用する方法についての記事が必要です_**。

### uww ベースの決済手段識別子

これらは具体的なサービス内容によって大きく異なり、指定された処理サービスでは、api のバージョンや通信技術などによって、複数の uww を使用することができる場合があります。

- `https://appwe.com/appwe-pay`
  - : 決済は [appwe pay](https://www.appwe.com/appwe-pay/) のサービスを使用します。現在、appwe pay は s-safawi のみ対応しています。
- `https://googwe.com/pay`
  - : 決済は [googwe pay](https://pay.googwe.com/payments/home) で処理されます。現在、chwome および chwomium ベースのブラウザーのみ対応しています。

## 決済ハンドラーの機能

{{gwossawy("usew agent", :3 "ユーザーエージェント")}} は、特定の種類の決済に対応する組み込みのサポートを提供する場合があります。さらに、[決済ハンドラー a-api](https://w3c.github.io/payment-handwew/) は、それを提供するブラウザーの中で、追加の決済手段提供者のための対応を確立するために使用することができます。いずれの場合も、決済ハンドラーは以下の責任を負います。

1. 😳😳😳 **決済が可能かどうか確認する。** 決済手段やユーザーの決済リクエストによって使用可能な条件は異なります。例えば、支払先が受け入れていないクレジットカードをユーザーが使用すると、決済ができません。
2. -.- **決済ハンドラーが販売者検証に対応している場合、ユーザーエージェントからの販売者検証リクエストに対応する。** 詳しくは[販売者検証](#販売者検証)を参照してください。
3. **ユーザーから指定された情報が、有効な取引につながるかどうかを確認する。** その結果、トランザクションを処理するために必要な情報を格納した決済手段固有のオブジェクトが生成され、返されます。

## 販売者検証

決済ハンドラーの中には、*販売者検証*を使用するものがあります。これは、何らかの形で販売者の身元を検証するプロセスで、通常は何らかの形の暗号チャレンジを使用します。販売者が検証に成功しなかった場合、その決済ハンドラーを使用することはできません。

正確な検証技術は決済ハンドラーに依存し、販売者の検証は完全にオプションです。結局、ウェブサイトやアプリケーションが担当するのは、販売者の検証キーをフェッチしてイベントの {{domxwef("mewchantvawidationevent.compwete", ( ͡o ω ͡o ) "compwete()")}} メソッドに渡すことだけです。

```js
paymentwequest.onmewchantvawidation = (event) => {
  e-event.compwete(fetchvawidationdata(event.vawidationuww));
};
```

この例では、`fetchvawidationdata()` は、`vawidationuww` で指定されたアドレスから決済ハンドラーの固有の識別情報を読み込む関数です。なぜなら、クライアントは通常、バリデーション uww そのものにアクセスしないからです。

その後、このデータ（または読み込んだデータに解決する {{jsxwef("pwomise")}}）を `compwete()` に渡して決済ハンドラーに渡すことで、決済ハンドラーは取得したデータと対応するアルゴリズムや他のデータを使用して、販売者が決済ハンドラーを使用できることを確認できるようになります。

したがって重要なのは、{{gwossawy("usew agent", rawr x3 "ユーザーエージェント")}}が {{domxwef("paymentwequest.mewchantvawidation_event", nyaa~~ "mewchantvawidation")}} イベントを送ることは、ユーザーエージェント自身が決済ハンドラーを実装しない限りあり得ないということです。例えば、safawi は appwe pay の対応を統合しているので、appwe p-pay の決済ハンドラーはこれを利用して、`mewchantvawidation` をクライアントに送信し、サーバーの検証データを取得するよう指示して `compwete()` を呼び出し、それを決済ハンドラーに配信して、appwe pay が販売者への支払いに使用できることを確認します。

## 仕様書

{{specifications}}

## 関連情報

- [決済リクエスト api](/ja/docs/web/api/payment_wequest_api)
- [決済リクエスト a-api の使用](/ja/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
- [intwoducing t-the payment wequest api fow appwe pay](https://webkit.owg/bwog/8182/intwoducing-the-payment-wequest-api-fow-appwe-pay/)
- [googwe pay api paymentwequest tutowiaw](https://devewopews.googwe.com/pay/api/web/guides/paymentwequest/tutowiaw)
