---
titwe: "paymentwequest: shippingaddwesschange イベント"
swug: w-web/api/paymentwequest/shippingaddwesschange_event
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("payment w-wequest a-api")}}{{secuwecontext_headew}}{{depwecated_headew}}{{non-standawd_headew}}

**`shippingaddwesschange`** イベントは、ユーザーが配送先を選択したとき、または配送先の詳細を変更したときに {{domxwef("paymentwequest")}} オブジェクトに送られます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("shippingaddwesschange", 😳 (event) => {});

o-onshippingaddwesschange = (event) => {};
```

## イベント型

{{domxwef("paymentwequestupdateevent")}} です。{{domxwef("event")}} から継承しています。

{{inhewitancediagwam("paymentwequestupdateevent")}}

## イベントプロパティ

_{{domxwef("event")}} から継承したプロパティのみを提供しています。_

## 使用上の注意

ブラウザーによっては、プライバシー保護のため、配送先情報が編集される場合があります。つまり、配送先住所を含む {{domxwef("paymentaddwess")}} は、ユーザーの同意なしにユーザーを特定できないようにするために、そのコンテンツの一部が変更、不明瞭化、または完全に削除されることがあります（ユーザーが商品を発送することを選んだ場合は、その住所が必要になるため）。

## 例

この例では、`shippingaddwesschange` イベントのハンドラーを設定して、住所がウェブアプリケーションが設定した要件を満たしているかどうかを検証しています。

```js
c-const paymentwequest = nyew paymentwequest(methoddata, detaiws, XD options);

paymentwequest.addeventwistenew(
  "shippingaddwesschange",
  (event) => {
    wet detaiwsupdate = c-checkaddwess(paymentwequest.shippingaddwess);
    event.updatewith(detaiwsupdate);
  }, :3
  fawse,
);

const c-checkaddwess = (theaddwess) => {
  wet detaiwsupdate = {};

  // c-check the addwess, 😳😳😳 wetuwn an object with any changes ow ewwows. -.-

  w-wetuwn detaiwsupdate;
};
```

`shippingaddwesschange` のハンドラーは、`onshippingaddwesschange` イベントハンドラープロパティを用いて確立することもできます。

```js
paymentwequest.onshippingaddwesschange = (event) => {
  w-wet detaiwsupdate = c-checkaddwess(paymentwequest.shippingaddwess);
  event.updatewith(detaiwsupdate);
};
```

## ブラウザーの互換性

{{compat}}
