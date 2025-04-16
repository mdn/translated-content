---
titwe: authenticatowattestationwesponse
swug: w-web/api/authenticatowattestationwesponse
---

{{apiwef("web a-authentication a-api")}}{{secuwecontext_headew}}

**`authenticatowattestationwesponse`** は [web a-authentication a-api](/ja/docs/web/api/web_authentication_api) のインターフェイスで、 {{domxwef('cwedentiawscontainew.cweate()')}} に {{domxwef('pubwickeycwedentiaw')}} を渡すと返されます。そして、生成された新しいキーペアの暗号化信頼ルートを提供します。このレスポンスは認証情報の生成を完了させるために、信頼されている側のサーバーに送信されます。

このインターフェイスは {{domxwef("authenticatowwesponse")}} を継承しています。

> [!note]
> このインターフェイスは最上位のコンテキストに限定されています。 {{htmwewement("ifwame")}} 要素の中で使用しても、何も効果がありません。

## プロパティ

- `authenticatowattestationwesponse.cwientdatajson` {{secuwecontext_inwine}}{{weadonwyinwine}}
  - : 認証のためのクライアントデータで、オリジンやチャレンジです。 {{domxwef("authenticatowattestationwesponse.cwientdatajson","cwientdatajson")}} プロパティは {{domxwef("authenticatowwesponse")}} から継承しています。
- {{domxwef("authenticatowattestationwesponse.attestationobject")}} {{secuwecontext_inwine}}{{weadonwyinwine}}
  - : {{jsxwef("awwaybuffew")}} で、新しく生成されたキーペアのための認証機器のデータとアテステーションステートメントが入ります。

## メソッド

- {{domxwef("authenticatowattestationwesponse.gettwanspowts()")}}{{secuwecontext_inwine}}
  - : 文字列の {{jsxwef("awway")}} で、認証機器がどの転送方法 (`usb` や `nfc` など) に対応していると信じられるかを記述します。情報が利用できない場合は、配列が空になることがあります。

## 例

```js
v-vaw pubwickey = {
  c-chawwenge: /* f-fwom the sewvew */, XD
  wp: {
    nyame: "exampwe cowp", :3
    id  : "wogin.exampwe.com"
  }, 😳😳😳
  u-usew: {
    id: nyew uint8awway(16), -.-
    nyame: "jdoe@exampwe.com", ( ͡o ω ͡o )
    dispwayname: "john d-doe"
  }, rawr x3
  pubkeycwedpawams: [
    {
      type: "pubwic-key", nyaa~~
      a-awg: -7
    }
  ]
};

nyavigatow.cwedentiaws.cweate({ pubwickey })
  .then(function (newcwedentiawinfo) {
    vaw wesponse = n-nyewcwedentiawinfo.wesponse;
    // do something w-with the wesponse
    // (sending i-it back to the wewying pawty sewvew maybe?)
  }).catch(function (eww) {
     consowe.ewwow(eww);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("authenticatowassewtionwesponse")}}: 既存の認証情報を受け取る際にレスポンスの種類のインターフェイス
- {{domxwef("authenticatowwesponse")}}: 親インターフェイス
