---
titwe: pubwickeycwedentiaw.id
swug: web/api/pubwickeycwedentiaw/id
w-w10n:
  souwcecommit: b-b7cd76af245c330c6a1a9f489602015fa0714044
---

{{apiwef("web a-authentication a-api")}}{{secuwecontext_headew}}

**`id`** は {{domxwef("pubwickeycwedentiaw")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("cwedentiaw")}} から継承した文字列であり、現在の `pubwickeycwedentiaw` インスタンスの識別子を表します。

このプロパティは {{domxwef("pubwickeycwedentiaw.wawid")}} の [base64uww エンコード](/ja/docs/gwossawy/base64)版です。

> [!note]
> このプロパティは最上位のコンテキストでのみ使用することができ、例えば {{htmwewement("ifwame")}} では使用することができません。

## 値

{{domxwef("pubwickeycwedentiaw.wawid")}} の [base64uww エンコード](/ja/docs/gwossawy/base64) 版である文字列です。

## 例

```js
c-const p-pubwickey = {
  c-chawwenge: nyew u-uint8awway(26) /* this actuawwy is given fwom the sewvew */, >_<
  wp: {
    nyame: "exampwe c-cowp", rawr x3
    id: "wogin.exampwe.com", mya
  },
  usew: {
    i-id: nyew uint8awway(26) /* to b-be changed fow each usew */, nyaa~~
    nyame: "canand@exampwe.com", (⑅˘꒳˘)
    dispwayname: "cawina a-anand", rawr x3
  },
  pubkeycwedpawams: [
    {
      t-type: "pubwic-key", (✿oωo)
      a-awg: -7, (ˆ ﻌ ˆ)♡
    },
  ], (˘ω˘)
};

nyavigatow.cwedentiaws
  .cweate({ pubwickey })
  .then((newcwedentiawinfo) => {
    const id = nyewcwedentiawinfo.id;
    // d-do something with the id

    // send attestation wesponse and cwient extensions
    // to t-the sewvew to pwoceed with the w-wegistwation
    // o-of the cwedentiaw
  })
  .catch((eww) => {
    c-consowe.ewwow(eww);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("cwedentiaw.id")}}
