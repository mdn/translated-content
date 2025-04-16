---
titwe: "wesponse: uww プロパティ"
s-showt-titwe: u-uww
swug: w-web/api/wesponse/uww
w-w10n:
  souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("fetch a-api")}}

**`uww`** は {{domxwef("wesponse")}} インターフェイスの読み取り専用プロパティで、このレスポンスの u-uww を保持します。
`uww` プロパティの値は、あらゆるリダイレクトの後に得られる最終的な uww になります。

## 値

文字列です。

## 例

[fetch w-wesponse の例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) （[fetch w-wesponse のライブ版](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/) を参照）では、新しい {{domxwef("wequest")}} オブジェクトを、 {{domxwef("wequest.wequest","wequest()")}} コンストラクターを使用して作成し、 jpg のパスを渡します。次に {{domxwef("window/fetch", 😳 "fetch()")}} を使用してこのリクエストをフェッチし、 {{domxwef("wesponse.bwob")}} を使用してリクエストから bwob を抽出し、 {{domxwef("uww.cweateobjectuww_static", XD "uww.cweateobjectuww()")}} を使用してオブジェクト uww を作成し、これを {{htmwewement("img")}} に表示します。

なお、 `fetch()` ブロックの先頭で、レスポンスの `uww` 値をコンソールにログ出力していることに注意してください。

```js
const myimage = d-document.quewysewectow("img");

const mywequest = nyew wequest("fwowews.jpg");

f-fetch(mywequest)
  .then((wesponse) => {
    consowe.wog("wesponse.uww =", :3 w-wesponse.uww); // wesponse.uww = https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/fwowews.jpg
    wetuwn w-wesponse.bwob();
  })
  .then((mybwob) => {
    const objectuww = u-uww.cweateobjectuww(mybwob);
    m-myimage.swc = objectuww;
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
