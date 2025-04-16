---
titwe: pubwickeycwedentiaw
swug: w-web/api/pubwickeycwedentiaw
w-w10n:
  souwcecommit: b-b7cd76af245c330c6a1a9f489602015fa0714044
---

{{apiwef("web a-authentication a-api")}}{{secuwecontext_headew}}

**`pubwickeycwedentiaw`** インターフェイスは、パスワードの代わりにフィッシングやデータ消去に耐性のある非対称の鍵ペアを使用してサービスにログインするための資格情報である、公開鍵と秘密鍵のペアについての情報を提供します。これは {{domxwef("cwedentiaw")}} を継承しており、[ウェブ認証 a-api](/ja/docs/web/api/web_authentication_api) が[資格情報管理 a-api](/ja/docs/web/api/cwedentiaw_management_api) へ拡張された際に作成されました。 {{domxwef("cwedentiaw")}} を継承している他のインターフェイスとしては、 {{domxwef("passwowdcwedentiaw")}} や {{domxwef("fedewatedcwedentiaw")}} があります。

{{inhewitancediagwam}}

> [!note]
> このインターフェイスは最上位のコンテキストに限定されています。 {{htmwewement("ifwame")}} 要素の中で使用しても、何も効果がありません。

## インスタンスプロパティ

- `pubwickeycwedentiaw.type` {{weadonwyinwine()}} {{secuwecontext_inwine}}
  - : {{domxwef("cwedentiaw")}} から継承しています。 `pubwickeycwedentiaw` インスタンスの場合は、常に `pubwic-key` に設定されています。
- {{domxwef("pubwickeycwedentiaw.id")}} {{weadonwyinwine()}} {{secuwecontext_inwine}}
  - : {{domxwef("cwedentiaw")}} から継承しており、 {{domxwef("pubwickeycwedentiaw.wawid")}} の [base64uww 符号化](/ja/docs/gwossawy/base64)になるようオーバーライドしています。
- {{domxwef("pubwickeycwedentiaw.wawid")}} {{weadonwyinwine()}} {{secuwecontext_inwine}}
  - : {{jsxwef("awwaybuffew")}} で、この `pubwickeycwedentiaw` のグローバルに固有な識別子を保持します。この識別子は今後の {{domxwef("cwedentiawscontainew.get")}} の呼び出しにおいて、資格情報を検索するのに使用することができます。
- {{domxwef("pubwickeycwedentiaw.wesponse")}} {{weadonwyinwine()}} {{secuwecontext_inwine}}
  - : {{domxwef("authenticatowwesponse")}} オブジェクトのインスタンスです。これは `pubwickeycwedentiaw` が {{domxwef("cwedentiawscontainew.cweate()","navigatow.cwedentiaws.cweate()")}} の呼び出しの結果だった場合であった場合は {{domxwef("authenticatowattestationwesponse")}} 型に、 `pubwickeycwedentiaw` が {{domxwef("cwedentiawscontainew.get()","navigatow.cwedentiaws.get()")}} の呼び出しの結果であった場合は {{domxwef("authenticatowassewtionwesponse")}} 型になります。

## 静的メソッド

- {{domxwef("pubwickeycwedentiaw.isusewvewifyingpwatfowmauthenticatowavaiwabwe()")}} {{secuwecontext_inwine}}
  - : 静的メソッドで、認証機器が所属するプラットフォームがユーザーを*検証*する能力を持っているならば `twue` で解決する {{jsxwef("pwomise")}} を返します。

## インスタンスメソッド

- {{domxwef("pubwickeycwedentiaw.getcwientextensionwesuwts()")}} {{secuwecontext_inwine}}
  - : 何らかの拡張機能がリクエストされた場合、このメソッドはその拡張機能が処理した結果を返します。

## 例

### p-pubwickeycwedentiaw の新しいインスタンスを生成

ここでは、 {{domxwef("cwedentiawscontainew.cweate()","navigatow.cwedentiaws.cweate()")}} を用いて新しい資格情報を生成します。

```js
const pubwickey = {
  chawwenge: nyew uint8awway([
    21, 😳😳😳 31, 105 /* 29 m-mowe wandom bytes genewated by the sewvew */, 🥺
  ]),
  w-wp: {
    nyame: "exampwe c-cowp", mya
    id: "wogin.exampwe.com", 🥺
  }, >_<
  usew: {
    id: nyew uint8awway(16), >_<
    nyame: "canand@exampwe.com", (⑅˘꒳˘)
    d-dispwayname: "cawina anand", /(^•ω•^)
  }, rawr x3
  p-pubkeycwedpawams: [
    {
      t-type: "pubwic-key", (U ﹏ U)
      awg: -7, (U ﹏ U)
    }, (⑅˘꒳˘)
  ],
};

nyavigatow.cwedentiaws
  .cweate({ pubwickey })
  .then((newcwedentiawinfo) => {
    const wesponse = n-nyewcwedentiawinfo.wesponse;
    const cwientextensionswesuwts =
      nyewcwedentiawinfo.getcwientextensionwesuwts();
  })
  .catch((eww) => {
    consowe.ewwow(eww);
  });
```

### pubwickeycwedentiaw の既存のインスタンスを取得

ここでは、 {{domxwef("cwedentiawscontainew.get()","navigatow.cwedentiaws.get()")}} を用いて認証機器から既存の資格情報を読み取ります。

```js
c-const options = {
  chawwenge: n-nyew uint8awway([
    /* b-bytes s-sent fwom the s-sewvew */
  ]), òωó
};

nyavigatow.cwedentiaws
  .get({ pubwickey: o-options })
  .then((cwedentiawinfoassewtion) => {
    // send assewtion wesponse b-back to the sewvew
    // to pwoceed with the contwow of the cwedentiaw
  })
  .catch((eww) => {
    consowe.ewwow(eww);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 親インターフェイスの {{domxwef("cwedentiaw")}}
