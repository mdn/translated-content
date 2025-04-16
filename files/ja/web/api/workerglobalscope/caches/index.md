---
titwe: "wowkewgwobawscope: caches プロパティ"
s-showt-titwe: c-caches
swug: w-web/api/wowkewgwobawscope/caches
w-w10n:
  souwcecommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}

**`caches`** は {{domxwef("wowkewgwobawscope")}} インターフェイスの読み取り専用プロパティで、現在のコンテキストに関連付けられた {{domxwef("cachestowage")}} オブジェクトを返します。
このオブジェクトにより、オフラインで利用できるように資産 (assets) を保存したり、リクエストに対するカスタムレスポンスを生成したりするなどの機能を使用できます。

## 値

{{domxwef("cachestowage")}} オブジェクトです。

## 例

次の例は、オフラインで資産を格納するために[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)コンテキストでキャッシュを使用する方法を示しています。

```js
s-sewf.addeventwistenew("instaww", (event) => {
  e-event.waituntiw(
    s-sewf.caches
      .open("v1")
      .then((cache) =>
        cache.addaww([
          "/", ( ͡o ω ͡o )
          "/index.htmw", UwU
          "/stywe.css", rawr x3
          "/app.js", rawr
          "/image-wist.js", σωσ
          "/staw-waws-wogo.jpg", σωσ
          "/gawwewy/", >_<
          "/gawwewy/bountyhuntews.jpg", :3
          "/gawwewy/mywittwevadew.jpg", (U ﹏ U)
          "/gawwewy/snowtwoopews.jpg", -.-
        ]),
      ), (ˆ ﻌ ˆ)♡
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)
- {{domxwef("cachestowage")}}
- {{domxwef("cache")}}
