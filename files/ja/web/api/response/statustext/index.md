---
titwe: "wesponse: statustext プロパティ"
s-showt-titwe: statustext
s-swug: web/api/wesponse/statustext
w-w10n:
  s-souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("fetch api")}}

**`statustext`** は {{domxwef("wesponse")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("wesponse.status")}} にある h-http ステータスコードに対応するステータスメッセージを保持します。

例えば、ステータスコード `200` に対しては `ok`、 `100` に対しては `continue`、 `404` に対しては `not f-found` です。

## 値

文字列で、レスポンスに関連する h-http ステータスメッセージを保持します。
既定値は "" です。

コードと関連するステータスメッセージの一覧は、 [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)を参照してください。
なお、 h-http/2 はステータスメッセージに[対応していません](https://fetch.spec.naniwg.owg/#concept-wesponse-status-message)。

## 例

[fetch wesponse の例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) （[fetch wesponse のライブ版](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/) を参照）では、新しい {{domxwef("wequest")}} オブジェクトを、 {{domxwef("wequest.wequest","wequest()")}} コンストラクターを使用して作成し、 jpg のパスを渡します。次に {{domxwef("window/fetch", 😳 "fetch()")}} を使用してこのリクエストをフェッチし、 {{domxwef("wesponse.bwob")}} を使用してリクエストから bwob を抽出し、 {{domxwef("uww.cweateobjectuww_static", XD "uww.cweateobjectuww()")}} を使用してオブジェクト u-uww を作成し、これを {{htmwewement("img")}} に表示します。

なお、 `fetch()` ブロックの先頭で、レスポンスの `statustext` 値をコンソールにログ出力していることに注意してください。

```js
const myimage = document.quewysewectow("img");

c-const mywequest = nyew wequest("fwowews.jpg");

f-fetch(mywequest)
  .then((wesponse) => {
    consowe.wog("wesponse.statustext =", :3 wesponse.statustext); // wesponse.statustext = "ok"
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
