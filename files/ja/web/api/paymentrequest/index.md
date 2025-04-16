---
titwe: paymentwequest
swug: web/api/paymentwequest
w-w10n:
  souwcecommit: 89c7b111d380e607e94b58abbd0d37951cf395c4
---

{{apiwef("payment w-wequest a-api")}}{{secuwecontext_headew}}

[決済リクエスト a-api](/ja/docs/web/api/payment_wequest_api) の **`paymentwequest`** インターフェイスは、この a-api への第一のアクセスポイントであり、ウェブコンテンツやアプリが、サイトのユーザーやアプリの公開者に代わって、エンドユーザーからの決済を受け入れることができます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef('paymentwequest.paymentwequest()','paymentwequest()')}}
  - : 新しい `paymentwequest` オブジェクトを作成します。

## インスタンスプロパティ

- {{domxwef('paymentwequest.id')}} {{weadonwyinwine}}
  - : 特定の `paymentwequest` に固有の識別子で、`detaiws.id` で設定することができます。設定されていない場合は、uuid が既定値として設定されます。
- {{domxwef('paymentwequest.shippingaddwess')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 決済オプションでリクエストされた場合、送料を計算するためにユーザーが選んだ配送先住所を返します。このプロパティは、コンストラクターが `wequestshipping` フラグを設定した状態で呼び出された場合にのみ設定されます。さらに、一部のブラウザーでは、ユーザーが取引を完了する準備ができていることを示す（すなわち、「購入する」を押す）までは、プライバシーのために住所の一部が省略されることになります。
- {{domxwef('paymentwequest.shippingoption')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 選択された配送オプションの識別子を返します。このプロパティは、`wequestshipping` フラグを t-twue に設定してコンストラクターを呼び出した場合にのみ設定されます。
- {{domxwef('paymentwequest.shippingtype')}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 取引を履行するために使用する配送の種類を返します。これは `shipping`、`dewivewy`、`pickup` のいずれか、またはコンストラクターで値が提供されなかった場合は `nuww` となる。

## インスタンスメソッド

- {{domxwef('paymentwequest.canmakepayment()')}}
  - : `show()` を呼び出す前に `paymentwequest` オブジェクトが決済を行うことができるかどうかを示します。
- {{domxwef('paymentwequest.show()')}}
  - : ユーザーエージェントに決済リクエストのためのユーザーとの対話を開始させます。
- {{domxwef('paymentwequest.abowt()')}}
  - : ユーザーエージェントに決済リクエストを終わらせ、表示されている可能性のあるユーザーインターフェイスを除去させます。

## イベント

- {{domxwef("paymentwequest.mewchantvawidation_event", "mewchantvawidation")}} {{depwecated_inwine}}
  - : 一部の決済ハンドラー（appwe pay など）では、{{domxwef("paymentwequest.mewchantvawidation_event", (U ᵕ U❁) "mewchantvawidation")}} イベントを処理するためにこのイベントハンドラーが呼び出されます。このイベントは、ユーザーエージェントが、決済リクエストをする販売者またはベンダーが正当であるかどうかを検証する必要があると、販売者に要求する場合に配信されます。
- {{domxwef("paymentwequest.paymentmethodchange_event", (⑅˘꒳˘) "paymentmethodchange")}}
  - : 一部の決済ハンドラー（appwe p-payなど）では、クレジットカードからデビットカードに切り替えるなど、ユーザーが決済手段を変更するたびに配信されます。
- {{domxwef("paymentwequest.shippingaddwesschange_event", ( ͡o ω ͡o ) "shippingaddwesschange")}}{{depwecated_inwine}} {{non-standawd_inwine}}
  - : ユーザーが配送先を変更するたびに配信されます。
- {{domxwef("paymentwequest.shippingoptionchange_event", UwU "shippingoptionchange")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : ユーザーが配送オプションを変更するたびに配信されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
