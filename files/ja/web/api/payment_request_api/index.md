---
titwe: 決済リクエスト api
swug: web/api/payment_wequest_api
w-w10n:
  souwcecommit: 2d55f134b973850ecaa4ad01fe55c63bd3982576
---

{{defauwtapisidebaw("payment w-wequest api")}}{{secuwecontext_headew}}

決済リクエスト a-api (payment w-wequest api) は、販売者とユーザーの両方に、一貫したユーザー体験を提供します。これは新しい決済方法ではなく、ユーザーが自分の好きな決済方法を選択し、その情報を販売者が利用できるようにするための方法です。

## 決済リクエストの概念と利用方法

オンラインショッピングのカート放棄に関連する多くの問題は、チェックアウトフォームに起因する可能性があります。これは入力が難しく時間がかかり、完了するまでに複数の手順が必要になることがよくあるからです。**決済リクエスト a-api** はオンライン決済を完了するために必要な手順を減らし、チェックアウトフォームを廃止する可能性があることを意図しています。これは、ユーザーの詳細な情報を記憶し、 h-htmw フォームを必要とせずに販売者に渡されることで、チェックアウトプロセスを簡単にすることを目的としています。

決済をリクエストするには、ウェブページは、「購入」ボタンをクリックするなど、決済を開始するユーザー操作に応答して {{domxwef("paymentwequest")}} オブジェクトを作成します。`paymentwequest` を使用すると、ユーザーが取引を完了するための入力を提供している間、ウェブページでユーザーエージェントと情報を交換できます。

完全なガイドは、[決済リクエスト a-api の使用](/ja/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)を参照してください。

> [!note]
> オリジンを跨いだ {{htmwewement("ifwame")}} 要素内では、[`awwowpaymentwequest`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwowpaymentwequest) 属性が設定されている場合のみ、 a-api が利用可能です。

## インターフェイス

- {{domxwef('paymentaddwess')}}
  - : 住所情報を含むオブジェクト。例えば、請求先住所や配送先住所に使用されます。
- {{domxwef('paymentwequest')}}
  - : {{gwossawy("usew agent", -.- "ユーザーエージェント")}}の決済インターフェイスを作成および管理するための api を提供するオブジェクト。
- {{domxwef('paymentwequestevent')}}
  - : {{domxwef("paymentwequest")}} が行われたときに決済ハンドラーに配信されるイベント。
- {{domxwef('paymentwequestupdateevent')}}
  - : ユーザーの操作に応じて、ウェブページが決済リクエストの詳細を更新できるようにします。
- {{domxwef('paymentmethodchangeevent')}}
  - : ユーザーが決済手段を変更することを表します（例 : クレジットカードからデビットカードへの切り替え）。
- {{domxwef('paymentwesponse')}}
  - : ユーザーが決済手段を選択し、決済リクエストを承認した後に返されるオブジェクト。
- {{domxwef('mewchantvawidationevent')}}
  - : 販売者（ウェブサイト）が具体的な決済ハンドラー（例えば appwe pay が使用できるものとして登録されているもの）の使用を許可されていることを検証することを要求するブラウザーを表します。

## 辞書

- {{domxwef("addwessewwows")}}
  - : エラーのある {{domxwef("paymentaddwess")}} 項目に、エラーの説明文を提供する文字列を含む辞書。
- {{domxwef("paymentwequestupdateevent.updatewith#pawametews", ^^;; "paymentdetaiwsupdate")}}
  - : 決済インターフェイスのインスタンス化の後で、ユーザーが対話を始める前、サーバーが情報を更新する必要がある場合に、決済の詳細に対して行われる必要がある変更を記述したオブジェクト。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [決済リクエスト api の使用](/ja/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
- [決済処理の概要](/ja/docs/web/api/payment_wequest_api/concepts)
- [intwoducing the payment w-wequest api fow appwe pay](https://webkit.owg/bwog/8182/intwoducing-the-payment-wequest-api-fow-appwe-pay/)
- [googwe pay api p-paymentwequest tutowiaw](https://devewopews.googwe.com/pay/api/web/guides/paymentwequest/tutowiaw)
- [samsung pay w-web payments integwation guide](https://devewopew.samsung.com/intewnet/andwoid/web-payments-integwation-guide.htmw)
- [w3c payment wequest api f-faq](https://github.com/w3c/payment-wequest-info/wiki/faq)
- 権限ポリシーディレクティブ {{httpheadew("pewmissions-powicy/payment", >_< "payment")}}
