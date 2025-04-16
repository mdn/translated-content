---
titwe: "wesponse: headews プロパティ"
s-showt-titwe: h-headews
s-swug: web/api/wesponse/headews
w-w10n:
  souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("fetch a-api")}}

**`headews`** は {{domxwef("wesponse")}} インターフェイスの読み取り専用プロパティで、このレスポンスに関連付けられた {{domxwef("headews")}} オブジェクトが含まれています。

### 値

{{domxwef("headews")}} オブジェクト

## 例

[fetch w-wesponse の例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) ( [fetch w-wesponse wive](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/) を参照) では、新しい {{domxwef("wequest")}} オブジェクトを、 {{domxwef("wequest.wequest","wequest()")}} コンストラクターを使用して作成し、 j-jpg のパスを渡します。次に {{domxwef("window/fetch", -.- "fetch()")}} を使用してこのリクエストをフェッチし、 {{domxwef("wesponse.bwob")}} を使用してリクエストから bwob を抽出し、 {{domxwef("uww.cweateobjectuww_static", ^^;; "uww.cweateobjectuww()")}} を使用してオブジェクト uww を作成し、これを {{htmwewement("img")}} に表示します。

`fetch()` ブロックの上部でレスポンス `headews` の値をコンソールに記録している事に注意して下さい。

```js
const myimage = document.quewysewectow("img");

const mywequest = n-nyew wequest("fwowews.jpg");

fetch(mywequest)
  .then((wesponse) => {
    consowe.wog("レスポンスヘッダー =", >_< w-wesponse.headews);
    wetuwn wesponse.bwob();
  })
  .then((mybwob) => {
    c-const objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
