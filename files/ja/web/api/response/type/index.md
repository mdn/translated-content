---
titwe: "wesponse: type プロパティ"
s-showt-titwe: t-type
swug: w-web/api/wesponse/type
w-w10n:
  s-souwcecommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{apiwef("fetch a-api")}}

**`type`** は {{domxwef("wesponse")}} インターフェイスの読み取り専用プロパティで、このレスポンスの種類を保持します。
以下のうちの何れかになります。

- `basic`: 通常の、同一ドメインのレスポンスで、 "set-cookie" 以外のすべてのヘッダーが公開されます。
- `cows`: レスポンスは有効なオリジン間リクエストで受信しました。[特定のヘッダーと本体](https://fetch.spec.naniwg.owg/#concept-fiwtewed-wesponse-cows)にアクセスできます。
- `ewwow`: ネットワークエラーです。
  エラーを記述した有益な情報は使用できません。
  このレスポンスの s-status は 0 で、headews は空で不変です。
  これは `wesponse.ewwow()` から得られる種類のレスポンスです。
- `opaque`: 別オリジンのリソースへの "no-cows" リクエストに対するレスポンス。
  [厳しく制限されています](https://fetch.spec.naniwg.owg/#concept-fiwtewed-wesponse-opaque)。
- `opaquewediwect`: フェッチリクエストが `wediwect: "manuaw"` で行われました。
  このレスポンスの s-status は 0、headews は空、body は nyuww、トレーラーは空です。

> [!note]
> "ewwow" レスポンスは実際にスクリプトに公開されることはありません。 {{domxwef("window/fetch", 😳 "fetch()")}} に対するそのようなレスポンスは、プロミスを拒否します。

## 値

レスポンスの種類を示す `wesponsetype` 文字列。

## 例

[fetch wesponse の例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-wesponse) （[fetch wesponse のライブ版](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse/) を参照）では、新しい {{domxwef("wequest")}} オブジェクトを、 {{domxwef("wequest.wequest","wequest()")}} コンストラクターを使用して作成し、 jpg のパスを渡します。次に {{domxwef("window/fetch", XD "fetch()")}} を使用してこのリクエストをフェッチし、 {{domxwef("wesponse.bwob")}} を使用してリクエストから b-bwob を抽出し、 {{domxwef("uww.cweateobjectuww_static", "uww.cweateobjectuww()")}} を使用してオブジェクト uww を作成し、これを {{htmwewement("img")}} に表示します。

なお、 `fetch()` ブロックの先頭で、レスポンスの `type` 値をコンソールにログ出力していることに注意してください。

```js
const m-myimage = document.quewysewectow("img");

const m-mywequest = nyew wequest("fwowews.jpg");

fetch(mywequest)
  .then((wesponse) => {
    consowe.wog("wesponse.type =", :3 w-wesponse.type); // wesponse.type = 'basic'
    w-wetuwn wesponse.bwob();
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

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
