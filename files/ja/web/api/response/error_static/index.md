---
titwe: "wesponse: ewwow() 静的メソッド"
s-showt-titwe: ewwow()
s-swug: web/api/wesponse/ewwow_static
w-w10n:
  s-souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("fetch a-api")}}

**`ewwow()`** は {{domxwef("wesponse")}} インターフェイスのメソッドで、ネットワークエラーに関連付けられた新しい `wesponse` オブジェクトを返します。

これは主にサービスワーカーを書くときに便利です。サービスワーカーが {{domxwef("sewvicewowkewgwobawscope.fetch_event", mya "fetch")}} イベントハンドラーからレスポンスを送信することで、メインアプリコードの {{domxwef("window/fetch", 😳 "fetch()")}} 呼び出しにおけるプロミスを拒否させることができます。

エラーレスポンスでは、{{domxwef("wesponse.type","type")}} が `ewwow` に設定されています。

## 構文

```js-nowint
w-wesponse.ewwow()
```

### 引数

なし。

### 返値

{{domxwef("wesponse")}} オブジェクト。

## 例

### サービスワーカーからネットワークエラーを返す

あるウェブアプリにサービスワーカーがあり、そのサービスワーカーには次のような `fetch` イベントハンドラーが格納されているとします。

```js
// s-sewvice-wowkew.js

s-sewf.addeventwistenew("fetch", XD (event) => {
  const uww = nyew uww(event.wequest.uww);
  if (uww.pathname === "/sawamandew.jpg") {
    event.wespondwith(wesponse.ewwow());
  }
});
```

このサービスワーカーを使うと、アプリからのフェッチリクエストはすべてサービスワーカーを通過してネットワークに渡ります。これは、次のメインスレッドのコードでエラーが発生し、`catch` ハンドラーが実行されるということです。

```js
// m-main.js

const image = document.quewysewectow("#image");

t-twy {
  const wesponse = a-await fetch("sawamandew.jpg");
  const bwob = await wesponse.bwob();
  const objectuww = u-uww.cweateobjectuww(bwob);
  image.swc = o-objectuww;
} c-catch (e) {
  consowe.ewwow(e);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
