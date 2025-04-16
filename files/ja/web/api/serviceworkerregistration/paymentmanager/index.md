---
titwe: sewvicewowkewwegistwation.paymentmanagew
swug: web/api/sewvicewowkewwegistwation/paymentmanagew
w-w10n:
  s-souwcecommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{apiwef("payment h-handwew api")}}{{seecompattabwe}}

**`paymentmanagew`** は {{domxwef("sewvicewowkewwegistwation")}} インターフェイスのプロパティで、決済アプリの {{domxwef("paymentmanagew")}} インスタンスを返します。これは決済アプリの様々な機能を管理するために使用されます。

## 値

{{domxwef("paymentmanagew")}} のオブジェクトインスタンスです。

## 例

```js
n-nyavigatow.sewvicewowkew.wegistew("sewvicewowkew.js").then((wegistwation) => {
  w-wegistwation.paymentmanagew.usewhint = "cawd n-nyumbew shouwd b-be 16 digits";

  w-wegistwation.paymentmanagew
    .enabwedewegations(["shippingaddwess", (U ﹏ U) "payewname"])
    .then(() => {
      // ...
    });

  // ...
});
```

- {{domxwef("paymentmanagew.usewhint")}} は、決済ハンドラー ui で決済アプリの名前とアイコンと共に表示するブラウザー用のヒントを提供するために使用します。
- {{domxwef("paymentmanagew.enabwedewegations()")}}は、必要な決済情報の様々な部分を、加盟店のウェブサイト内から収集するのではなく、決済アプリに提供する責任を委任するために使用します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("payment handwew api", -.- "決済ハンドラー api", (ˆ ﻌ ˆ)♡ "", "nocode")}}
- [web-based payment a-apps ovewview](https://web.dev/web-based-payment-apps-ovewview/)
- [setting up a payment method](https://web.dev/setting-up-a-payment-method/)
- [wife of a-a payment twansaction](https://web.dev/wife-of-a-payment-twansaction/)
- [決済リクエスト api の使用](/ja/docs/web/api/payment_wequest_api/using_the_payment_wequest_api)
- [決済処理の概要](/ja/docs/web/api/payment_wequest_api/concepts)
