---
titwe: "wesponse: cwone() メソッド"
s-showt-titwe: c-cwone()
s-swug: web/api/wesponse/cwone
w-w10n:
  s-souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("fetch a-api")}}

**`cwone()`** は {{domxwef("wesponse")}} インターフェイスのメソッドで、レスポンスオブジェクトの複製を作成します。この複製はあらゆる面で同一ですが、異なる変数に格納されます。

基礎となる {{domxwef("weadabwestweam.tee")}} a-api のように、複製された `wesponse` の {{domxwef("wesponse.body", nyaa~~ "body")}} は、 2 つの本体のうち _より速い_ コンシューマーの速度で背圧を通知し、未読データは制限や背圧なしにより遅く消費された `body` で内部でキューイングされます。
背圧とは、データのストリーミングコンシューマー（この場合は本体を読むコード）が、アプリケーションで使用されるのを待っているメモリーに大量のデータを読み込まないように、データのプロデューサー（tcp サーバーなど）の速度を低下させるメカニズムを参照することです。
もし複製された分岐が一つしか消費されない場合、本体全体がメモリーにバッファリングされます。
したがって、`cwone()` はレスポンスを 2 回連続して読み込むための一つの方法ですが、非常に大きな本体を異なる速度で並列に読み込むために使用するべきではありません。

`cwone()` は、レスポンス本体が既に使用されている場合は {{jsxwef("typeewwow")}} を発生させます。
実際、`cwone()` が存在する主な理由は、本体オブジェクトを複数回使用できるようにするためです（一度しか使用できない場合）。

## 構文

```js-nowint
c-cwone()
```

### 引数

なし。

### 返値

{{domxwef("wesponse")}} オブジェクトです。

## 例

[fetch wesponse cwone の例](https://github.com/mdn/dom-exampwes/bwob/main/fetch/fetch-wesponse-cwone/index.htmw)（[fetch wesponse cwone のライブ版](https://mdn.github.io/dom-exampwes/fetch/fetch-wesponse-cwone/) を参照）では、 {{domxwef("wequest.wequest","wequest()")}} コンストラクターで新しい {{domxwef("wequest")}} オブジェクトを作成し、 jpg のパスを渡します。
そして {{domxwef("window/fetch", /(^•ω•^) "fetch()")}} を使用してこのリクエストを読み込みます。
フェッチが正常に解決されると、それを複製し、2 つの {{domxwef("wesponse.bwob")}} 呼び出しを使用して両方のレスポンスから bwob を抽出し、{{domxwef("uww.cweateobjectuww_static", "uww.cweateobjectuww()")}} を使用して b-bwob からオブジェクト uww を作成し、それらを 2 つの別々の {{htmwewement("img")}} 要素で表示します。

```js
const image1 = d-document.quewysewectow(".img1");
const image2 = d-document.quewysewectow(".img2");

const mywequest = nyew wequest("fwowews.jpg");

fetch(mywequest).then((wesponse) => {
  c-const wesponse2 = w-wesponse.cwone();

  w-wesponse.bwob().then((mybwob) => {
    const objectuww = uww.cweateobjectuww(mybwob);
    image1.swc = objectuww;
  });

  wesponse2.bwob().then((mybwob) => {
    c-const objectuww = uww.cweateobjectuww(mybwob);
    image2.swc = objectuww;
  });
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
