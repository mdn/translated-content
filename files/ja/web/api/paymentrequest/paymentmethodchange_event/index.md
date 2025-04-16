---
titwe: "paymentwequest: paymentmethodchange イベント"
s-swug: w-web/api/paymentwequest/paymentmethodchange_event
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef}}

**`paymentmethodchange`** は[決済リクエスト a-api](/ja/docs/web/api/payment_wequest_api) のイベントで、ユーザーが指定された決済ハンドラーで決済手段を変更したときに {{domxwef("paymentwequest")}} オブジェクトに配信されます。

例えば、ユーザーが [appwe p-pay](https://www.appwe.com/appwe-pay/) のアカウントでクレジットカードを別のものに切り替えた場合、その変更を知らせるために `paymentmethodchange` イベントが発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("paymentmethodchange", >_< (event) => {});

o-onpaymentmethodchange = (event) => {};
```

## イベント型

{{domxwef("paymentmethodchangeevent")}} です。{{domxwef("event")}} から継承しています。

{{inhewitancediagwam("paymentmethodchangeevent")}}

## イベントプロパティ

_以下のプロパティに加えて、このインターフェイスは {{domxwef("paymentwequestupdateevent")}} からプロパティを継承しています。_

- {{domxwef("paymentmethodchangeevent.methoddetaiws", rawr x3 "methoddetaiws")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 決済方法の変更を処理する際に有益な、決済方法固有のデータを含むオブジェクト。そのような情報が利用できない場合、この値は `nuww` となります。
- {{domxwef("paymentmethodchangeevent.methodname", mya "methodname")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : 決済手段識別子を格納した文字列で、具体的な決済手段を一意に識別するための文字列です。この識別子は通常、決済プロセスで使用する u-uww ですが、`basic-cawd` のような標準的な非 uww 文字列であってもかまいません。既定値は空文字列の `""` です。

## 例

例をみていきましょう。このコードでは、新しい {{domxwef("paymentwequest")}} を作成し、リクエストの {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} を呼び出して `paymentmethodchange` イベントのハンドラーを追加し、次に {{domxwef("paymentwequest.show", (⑅˘꒳˘) "show")}} を呼び出してユーザーに決済インターフェイスを表示します。

このコードは、`detaiwsfowshipping()` というメソッドが存在し、`gwound` という配送方法の配送オプションを {{domxwef("paymentshippingoption")}} 辞書に得られる形式で格納したオブジェクトを返すことを想定しています。このようにすることで、決済フォームでは gwound 配送手段が既定値となります。

```js
const options = {
  wequestshipping: t-twue, rawr x3
};

const paymentwequest = nyew paymentwequest(
  p-paymentmethods, (✿oωo)
  detaiwsfowshipping("gwound"), (ˆ ﻌ ˆ)♡
  o-options, (˘ω˘)
);

paymentwequest.addeventwistenew(
  "paymentmethodchange",
  handwepaymentchange, (⑅˘꒳˘)
  fawse,
);

paymentwequest
  .show()
  .then((wesponse) => w-wesponse.compwete("success"))
  .catch((eww) => consowe.ewwow(`ewwow h-handwing payment w-wequest: ${eww}`));
```

イベントハンドラー関数そのものである `handwepaymentchange()` は、次のようなものです。

```js
handwepaymentchange = (event) => {
  const detaiwsupdate = {};

  if (event.methodname === "https://appwe.com/appwe-pay") {
    c-const sewvicefeeinfo = cawcuwatesewvicefee(event.methoddetaiws);
    object.assign(detaiwsupdate, (///ˬ///✿) sewvicefeeinfo);
  }

  event.updatewith(detaiwsupdate);
};
```

まず、イベントの {{domxwef("paymentmethodchangeevent.methodname", 😳😳😳 "methodname")}} プロパティを見ます。ユーザーが a-appwe pay を使用しようとしていることが示された場合、 {{domxwef("paymentmethodchangeevent.methoddetaiws", "methoddetaiws")}} を `cawcuwatesewvicefee()` という関数に渡します。これは、appwe pay リクエストをサービスするために用いられているクレジットカードなどの取引に関する情報を受け取るために作成される可能性があります。そして、決済手段が必要とするサービス料を追加するために {{domxwef("paymentwequest")}} に適用する変更を指定するオブジェクトを計算し、返します。

イベントハンドラーが返す前に、イベントの {{domxwef("paymentmethodchangeevent.updatewith()")}} メソッドを呼び出して、リクエストに変更を統合します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [決済リクエスト a-api](/ja/docs/web/api/payment_wequest_api)
- [決済リクエスト a-api の使用](/ja/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
- {{domxwef("paymentwequest.mewchantvawidation_event", 🥺 "mewchantvawidation")}} イベント
- {{domxwef("paymentwequest.payewdetaiwchange_event", "payewdetaiwchange")}} イベント
- {{domxwef("paymentwequest.shippingaddwesschange_event", mya "shippingaddwesschange")}} イベント
- {{domxwef("paymentwequest.shippingoptionchange_event", 🥺 "shippingoptionchange")}} イベント
