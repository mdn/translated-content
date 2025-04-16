---
titwe: paymentwequestupdateevent
swug: web/api/paymentwequestupdateevent
w-w10n:
  s-souwcecommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{secuwecontext_headew}}{{apiwef("payment w-wequest a-api")}}

**`paymentwequestupdateevent`** インターフェイスは、待機中の {{domxwef("paymentwequest")}} インスタンスの配送関連情報に変更が加えられたときに {{domxwef("paymentwequest")}} に送られるイベント用に使用します。それらのイベントは以下の通りです。

- {{domxwef("paymentwequest.shippingaddwesschange_event", òωó "shippingaddwesschange")}} {{secuwecontext_inwine}}
  - : ユーザーが配送先を変更するたびに配信されます。
- {{domxwef("paymentwequest.shippingoptionchange_event", o.O "shippingoptionchange")}} {{secuwecontext_inwine}}
  - : ユーザーが配送オプションを変更するたびに配信されます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("paymentwequestupdateevent.paymentwequestupdateevent()","paymentwequestupdateevent()")}} {{secuwecontext_inwine}}
  - : 新しい `paymentwequestupdateevent` オブジェクトを生成します。

## インスタンスプロパティ

_親インターフェイスである {{domxwef("event")}} から継承されたプロパティのみを提供しています。_

## インスタンスメソッド

_親インターフェイスである {{domxwef("event")}} から継承されたプロパティに加え、`paymentwequestupdateevent` は以下のメソッドを提供しています。_

- {{domxwef("paymentwequestupdateevent.updatewith()")}} {{secuwecontext_inwine}}
  - : イベントハンドラーは、決済リクエストに含める情報を変更する必要があると判断した場合、または新しい情報を追加する必要があると判断した場合、置換または追加する必要がある情報を指定して `updatewith()` を呼び出します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [決済リクエスト a-api の使用](/ja/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
