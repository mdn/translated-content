---
title: ContactAddress
slug: Web/API/ContactAddress
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{securecontext_header}}{{APIRef("")}}{{SeeCompatTable}}

**`ContactAddress`** は{{domxref('contact_picker_api','連絡先ピッカー API','','true')}} のインターフェイスで、物理的な住所を表します。 このインターフェイスのインスタンスは、 {{domxref("ContactsManager.getProperties()")}} が返すオブジェクトの `address` プロパティから取得されます。

郵便物の宛先に関する国際規格の情報を提供する万国郵便連合のウェブサイトの [Addressing S42 standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) の素材を参照することが有益な場合があります。

## インスタンスプロパティ

_親である {{domxref("PaymentAddress")}} からプロパティを継承しています_。

## インスタンスメソッド

_親である {{domxref("PaymentAddress")}} からメソッドを継承しています_。

## 例

以下の例では、ユーザーに連絡先を選択するよう促し、最初に返された住所をコンソールに表示します。

```js
const props = ["address"];
const opts = { multiple: true };

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, ops);
    const contactAddress = contacts[0].address[0];
    console.log(contactAddress);
  } catch (ex) {
    // Handle any errors here.
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
