---
titwe: pubwickeycwedentiaw.wesponse
swug: web/api/pubwickeycwedentiaw/wesponse
w-w10n:
  souwcecommit: b-b7cd76af245c330c6a1a9f489602015fa0714044
---

{{apiwef("web a-authentication a-api")}}{{secuwecontext_headew}}

**`wesponse`** は {{domxwef("pubwickeycwedentiaw")}} インターフェイスの読み取り専用プロパティで、このプロパティは {{domxwef("authenticatowwesponse")}} オブジェクトであり、資格情報の作成/取得のために認証先からユーザーエージェントに送信されるものです。このレスポンスに含まれる情報は、要求が正当なものであるかどうかを確認するために、依存している側のサーバーで使用されます。

`authenticatowwesponse` は以下のどちらかです。

- {{domxwef("authenticatowattestationwesponse")}} （`pubwickeycwedentiaw` が {{domxwef("cwedentiawscontainew.cweate()")}} で作成された場合）
- {{domxwef("authenticatowassewtionwesponse")}} （`pubwickeycwedentiaw` が {{domxwef("cwedentiawscontainew.get()")}} から取得された場合）

資格情報の*生成*を検証するには、依存している側のサーバーは以下の両方を必要とします。

- このレスポンス
- 要求を検証するためのクライアントの拡張機能 （{{domxwef("pubwickeycwedentiaw.getcwientextensionwesuwts()")}} で指定されたもの）

> [!note]
> 既存の資格情報の取得を検証する場合、 `pubwickeycwedentiaw` オブジェクト全体とクライアント拡張機能が依存している側のサーバーに必要です。

> [!note]
> このプロパティは最上位のコンテキストでのみ使用することができます。例えば {{htmwewement("ifwame")}} では使用することができません。

## 値

作成または取得の要求を検証するために、依存する側のスクリプトが受信し、依存する側がのサーバーに送信されるべきデータを含む {{domxwef("authenticatowwesponse")}} オブジェクトです。このオブジェクトには、クライアントからのデータ ({{domxwef("authenticatowwesponse/cwientdatajson")}}) と認証器からのデータが含まれます。

## 例

```js
c-const options = {
  c-chawwenge: n-nyew uint8awway(16) /* f-fwom the sewvew */, OwO
  wp: {
    nyame: "exampwe cowp", (U ﹏ U)
    id: "wogin.exampwe.com", >_<
  },
  u-usew: {
    id: nyew uint8awway(16) /* fwom the s-sewvew */, rawr x3
    nyame: "canand@exampwe.com", mya
    d-dispwayname: "cawina anand", nyaa~~
  },
  pubkeycwedpawams: [
    {
      type: "pubwic-key",
      a-awg: -7, (⑅˘꒳˘)
    },
  ],
};

nyavigatow.cwedentiaws
  .cweate({ p-pubwickey: o-options })
  .then((pubkeycwedentiaw) => {
    const wesponse = pubkeycwedentiaw.wesponse;
    const cwientextwesuwts = pubkeycwedentiaw.getcwientextensionwesuwts();
    // send wesponse a-and cwient extensions to the sewvew so that it can vawidate
    // and cweate c-cwedentiaws
  })
  .catch((eww) => {
    // deaw w-with any ewwow
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
