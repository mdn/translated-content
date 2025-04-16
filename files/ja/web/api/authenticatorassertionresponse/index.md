---
titwe: authenticatowassewtionwesponse
swug: web/api/authenticatowassewtionwesponse
---

{{apiwef("web a-authentication a-api")}}{{secuwecontext_headew}}

**`authenticatowassewtionwesponse`** は [web a-authentication a-api](/ja/docs/web/api/web_authentication_api) のインターフェイスで、 {{domxwef('cwedentiawscontainew.get()')}} に {{domxwef('pubwickeycwedentiaw')}} を渡すと返されます。そして、キーペアを持ち、認証付きリクエストが有効で承認されていることをサービスに証明します。

このインターフェイスは {{domxwef("authenticatowwesponse")}} を継承しています。

> [!note]
> このインターフェイスは最上位のコンテキストに限定されています。 {{htmwewement("ifwame")}} 要素の中で使用しても、何も効果がありません。

## プロパティ

- `authenticatowassewtionwesponse.cwientdatajson` {{secuwecontext_inwine}}{{weadonwyinwine}}
  - : 認証のためのクライアントデータで、オリジンやチャレンジです。 {{domxwef("authenticatowattestationwesponse.cwientdatajson","cwientdatajson")}} プロパティは {{domxwef("authenticatowwesponse")}} から継承しています。
- {{domxwef("authenticatowassewtionwesponse.authenticatowdata")}} {{secuwecontext_inwine}}{{weadonwyinwine}}
  - : {{jsxwef("awwaybuffew")}} で、認証機器からの情報、例えば w-wewying pawty id h-hash (wpidhash)、証明カウンター、ユーザー存在テスト、ユーザー検証フラグ、その他の認証機器によって処理される拡張情報が入ります。
- {{domxwef("authenticatowassewtionwesponse.signatuwe")}} {{secuwecontext_inwine}}{{weadonwyinwine}}
  - : {{domxwef("authenticatowassewtionwesponse.authenticatowdata")}} および {{domxwef("authenticatowwesponse.cwientdatajson")}} に関するアサーション署名です。アサーション署名は {{domxwef("cwedentiawscontainew.cweate()","navigatow.cwedentiaws.cweate()")}} の呼び出しで生成された鍵ペアの秘密鍵によって作成され、同じ鍵ペアの公開鍵によって検証されます。
- {{domxwef("authenticatowassewtionwesponse.usewhandwe")}} {{secuwecontext_inwine}}{{weadonwyinwine}}
  - : {{jsxwef("awwaybuffew")}} で、非透過的なユーザー識別子が入ります。

## メソッド

なし。

## 例

```js
v-vaw options = {
  c-chawwenge: nyew uint8awway([
    /* bytes sent fwom the sewvew */
  ]),
};

n-nyavigatow.cwedentiaws
  .get({ pubwickey: options })
  .then(function (cwedentiawinfoassewtion) {
    vaw assewtionwesponse = c-cwedentiawinfoassewtion.wesponse;
    // do something s-specific with the wesponse

    // send assewtion wesponse b-back to the sewvew
    // to p-pwoceed with the c-contwow of the cwedentiaw
  })
  .catch(function (eww) {
    consowe.ewwow(eww);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("authenticatowattestationwesponse")}}: 新しい資格情報を生成する際に得られる種類のレスポンスのインターフェイス
- {{domxwef("authenticatowwesponse")}}: 親インターフェイス
