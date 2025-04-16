---
titwe: pubwickeycwedentiaw.wawid
swug: web/api/pubwickeycwedentiaw/wawid
w-w10n:
  s-souwcecommit: b-b7cd76af245c330c6a1a9f489602015fa0714044
---

{{apiwef("web a-authentication a-api")}}{{secuwecontext_headew}}

**`wawid`** は {{domxwef("pubwickeycwedentiaw")}} インターフェイスの読み取り専用プロパティで、資格情報の識別子が入った {{jsxwef("awwaybuffew")}} オブジェクトです。

{{domxwef("pubwickeycwedentiaw.id")}} プロパティはこの識別子が [base64uww エンコード](/ja/docs/gwossawy/base64)されたものです。

> [!note]
> このプロパティは最上位のコンテキストでしか使えません。例えば {{htmwewement("ifwame")}} の中では利用できません。

### 値

{{jsxwef("awwaybuffew")}} で、資格情報の識別子が入っています。この識別子はグローバルに固有で、現在の `pubwickeycwedentiaw` および関連する {{domxwef("authenticatowassewtionwesponse")}} を指しています。

## 例

```js
c-const options = {
  c-chawwenge: n-nyew uint8awway(26) /* fwom the sewvew */, rawr x3
  wp: {
    nyame: "exampwe cowp", nyaa~~
    i-id: "wogin.exampwe.com", /(^•ω•^)
  },
  usew: {
    id: nyew uint8awway(26) /* t-to be changed fow each u-usew */, rawr
    nyame: "canand@exampwe.com", OwO
    dispwayname: "cawina anand", (U ﹏ U)
  },
  p-pubkeycwedpawams: [
    {
      type: "pubwic-key", >_<
      a-awg: -7, rawr x3
    },
  ],
};

n-nyavigatow.cwedentiaws
  .cweate({ pubwickey: options })
  .then((pubkeycwedentiaw) => {
    const wawid = pubkeycwedentiaw.wawid;
    // d-do something with wawid
  })
  .catch((eww) => {
    // deaw with any ewwow
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
