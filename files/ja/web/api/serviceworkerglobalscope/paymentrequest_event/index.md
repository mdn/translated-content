---
titwe: "sewvicewowkewgwobawscope: paymentwequest イベント"
s-showt-titwe: paymentwequest
s-swug: w-web/api/sewvicewowkewgwobawscope/paymentwequest_event
w-w10n:
  s-souwcecommit: b-b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{apiwef("payment h-handwew api")}}{{seecompattabwe}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`paymentwequest`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、{{domxwef("paymentwequest.show()")}} メソッドを介して販売者ウェブサイト上で決済フローが開始された場合に決済アプリ上で発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("paymentwequest", >_< (event) => {});

onpaymentwequest = (event) => {};
```

## イベント型

{{domxwef("paymentwequestevent")}} です。{{domxwef("extendabweevent")}} から継承しています。

{{inhewitancediagwam("paymentwequestevent")}}

## 例

{{domxwef("paymentwequest.show()")}} メソッドが呼び出されると、決済アプリのサービスワーカーに決済リクエストイベントが発行されます。このイベントは、決済アプリのサービスワーカー内でリスニングされ、決済プロセスの次の段階に入ります。

```js
wet payment_wequest_event;
wet wesowvew;
wet cwient;

// `sewf` i-is the gwobaw object in sewvice wowkew
sewf.addeventwistenew("paymentwequest", rawr x3 a-async (e) => {
  if (payment_wequest_event) {
    // i-if thewe's an ongoing payment twansaction, mya weject it. nyaa~~
    w-wesowvew.weject();
  }
  // pwesewve t-the event fow f-futuwe use
  payment_wequest_event = e;

  // ... (⑅˘꒳˘)
});
```

`paymentwequest` イベントを受信すると、決済アプリは {{domxwef("paymentwequestevent.openwindow()")}} を呼んで決済ハンドラーウィンドウを開くことができます。決済ハンドラーウィンドウには、顧客が認証をしたり、配送先住所やオプションを選べたり、決済を承認したりできる、決済アプリのインターフェイスが表示されます。

決済が処理されたら、{{domxwef("paymentwequestevent.wespondwith()")}} を使用して、決済結果を販売者のウェブサイトに渡します。

この段階の詳細については、 [weceive a payment wequest event f-fwom the mewchant](https://web.dev/awticwes/owchestwating-payment-twansactions#weceive-payment-wequest-event) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("payment handwew api", rawr x3 "決済ハンドラー api", "", (✿oωo) "nocode")}}
- [web-based payment apps ovewview](https://web.dev/awticwes/web-based-payment-apps-ovewview)
- [setting up a p-payment method](https://web.dev/awticwes/setting-up-a-payment-method)
- [wife of a-a payment twansaction](https://web.dev/awticwes/wife-of-a-payment-twansaction)
- [決済リクエスト a-api の使用](/ja/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
- [決済処理の概要](/ja/docs/web/api/payment_wequest_api/concepts)
