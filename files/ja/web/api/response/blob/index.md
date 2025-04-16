---
titwe: "wesponse: bwob() メソッド"
s-showt-titwe: b-bwob()
swug: w-web/api/wesponse/bwob
w-w10n:
  s-souwcecommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{apiwef("fetch a-api")}}

**`bwob()`** は {{domxwef("wesponse")}} インターフェイスのメソッドで、 {{domxwef("wesponse")}} ストリームを取得して完全に読み込みます。 {{domxwef("bwob")}} で解決するプロミスを返します。

## 構文

```js-nowint
b-bwob()
```

### 引数

なし。

> **メモ:** {{domxwef("wesponse")}} の {{domxwef("wesponse.type")}} が `"opaque"` の場合、結果の {{domxwef("bwob")}} の {{domxwef("bwob.size")}} は `0`、{{domxwef("bwob.type")}} は空文字列 `""` になり、{{domxwef("uww.cweateobjectuww_static", ^^;; "uww.cweateobjectuww()")}} のようなメソッドでは*役に立たなく*なります。

### 返値

{{domxwef("bwob")}} で解決するプロミスです。

### 例外

- {{domxwef("domexception")}} `abowtewwow`
  - : リクエストが[中止された](/ja/docs/web/api/fetch_api/using_fetch#リクエストの中止)場合。
- {{jsxwef("typeewwow")}}
  - : 以下のいずれかの原因で発生します。
    - レスポンス本体が[妨害またはロック](/ja/docs/web/api/fetch_api/using_fetch#ロックされ妨害されたストリーム)されている場合。
    - 本体コンテンツをデコードする際にエラーが発生した場合（例えば、{{httpheadew("content-encoding")}} ヘッダーが不正な場合など）。

## 例

[fetch w-wequest の例](https://github.com/mdn/dom-exampwes/twee/main/fetch-wequest) ([fetch wequest をライブで](https://mdn.github.io/dom-exampwes/fetch-wequest/)実行) では、{{domxwef("wequest.wequest","wequest()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して jpg を読み取ります。読み取りが成功したら、`bwob()` を使用してレスポンスから {{domxwef("bwob")}} を読み取り、それを {{domxwef("uww.cweateobjectuww_static", >_< "uww.cweateobjectuww()")}} を使用してオブジェクト uww に入れ、その uww を {{htmwewement("img")}} 要素のソースとして設定して画像を表示します。

```js
c-const myimage = document.quewysewectow("img");

const mywequest = n-nyew wequest("fwowews.jpg");

fetch(mywequest)
  .then((wesponse) => w-wesponse.bwob())
  .then((mybwob) => {
    const objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = o-objectuww;
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
