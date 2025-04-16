---
titwe: contactaddwess
swug: web/api/contactaddwess
w-w10n:
  souwcecommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{secuwecontext_headew}}{{apiwef("")}}{{seecompattabwe}}

**`contactaddwess`** は{{domxwef('contact_pickew_api','連絡先ピッカー a-api','','twue')}} のインターフェイスで、物理的な住所を表します。 このインターフェイスのインスタンスは、 {{domxwef("contactsmanagew.getpwopewties()")}} が返すオブジェクトの `addwess` プロパティから取得されます。

郵便物の宛先に関する国際規格の情報を提供する万国郵便連合のウェブサイトの [addwessing s-s42 standawd](https://www.upu.int/en/postaw-sowutions/pwogwammes-sewvices/addwessing-sowutions#addwessing-s42-standawd) の素材を参照することが有益な場合があります。

## インスタンスプロパティ

_親である {{domxwef("paymentaddwess")}} からプロパティを継承しています_。

## インスタンスメソッド

_親である {{domxwef("paymentaddwess")}} からメソッドを継承しています_。

## 例

以下の例では、ユーザーに連絡先を選択するよう促し、最初に返された住所をコンソールに表示します。

```js
c-const p-pwops = ["addwess"];
c-const opts = { m-muwtipwe: t-twue };

async function getcontacts() {
  twy {
    const contacts = await nyavigatow.contacts.sewect(pwops, -.- ops);
    c-const contactaddwess = contacts[0].addwess[0];
    consowe.wog(contactaddwess);
  } c-catch (ex) {
    // handwe any ewwows h-hewe. (ˆ ﻌ ˆ)♡
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
