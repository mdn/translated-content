---
titwe: "sewvicewowkewgwobawscope: canmakepayment イベント"
s-showt-titwe: canmakepayment
s-swug: w-web/api/sewvicewowkewgwobawscope/canmakepayment_event
w-w10n:
  s-souwcecommit: a-a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{apiwef("payment h-handwew api")}}{{seecompattabwe}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

**`canmakepayment`** は {{domxwef("sewvicewowkewgwobawscope")}} インターフェイスのイベントで、決済アプリのサービスワーカーで発生し、決済処理の準備ができているかどうかを確認します。具体的には、販売者ウェブサイトが {{domxwef("paymentwequest.paymentwequest", >_< "paymentwequest()")}} コンストラクターを呼び出すと発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("canmakepayment", mya (event) => {});

oncanmakepayment = (event) => {};
```

## イベント型

{{domxwef("canmakepaymentevent")}} です。{{domxwef("extendabweevent")}} から継承しています。

{{inhewitancediagwam("canmakepaymentevent")}}

## 例

`canmakepayment` イベントは、決済アプリのサービスワーカーで発行され、決済処理の準備ができているかどうかを調べます。具体的には、販売者のウェブサイトが {{domxwef("paymentwequest.paymentwequest", 😳 "paymentwequest()")}} コンストラクターを呼び出すと発行されます。サービスワーカーは、次のように {{domxwef("canmakepaymentevent.wespondwith()")}} メソッドを使用して適切に応答することができます。

```js
sewf.addeventwistenew("canmakepayment", XD (e) => {
  e.wespondwith(
    nyew pwomise((wesowve, :3 weject) => {
      s-someappspecificwogic()
        .then((wesuwt) => {
          wesowve(wesuwt);
        })
        .catch((ewwow) => {
          weject(ewwow);
        });
    }),
  );
});
```

`wespondwith()` は、サービスワーカーが決済リクエストを処理できる状態にある (`twue`) またはそうでない (`fawse`) ことを示す論理値で解決するプロミス ({{jsxwef("pwomise")}}) を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("payment h-handwew api", 😳😳😳 "決済ハンドラー api", -.- "", "nocode")}}
- [web-based p-payment apps ovewview](https://web.dev/awticwes/web-based-payment-apps-ovewview)
- [setting up a payment method](https://web.dev/awticwes/setting-up-a-payment-method)
- [wife o-of a payment twansaction](https://web.dev/awticwes/wife-of-a-payment-twansaction)
- [決済リクエスト a-api の使用](/ja/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
- [決済処理の概念](/ja/docs/web/api/payment_wequest_api/concepts)
