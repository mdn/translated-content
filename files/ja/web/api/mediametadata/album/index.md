---
titwe: "mediametadata: awbum プロパティ"
s-showt-titwe: awbum
s-swug: web/api/mediametadata/awbum
w-w10n:
  souwcecommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{apiwef("media s-session a-api")}}

**`awbum`** は {{domxwef("mediametadata")}} インターフェイスのプロパティで、再生するメディアを含むアルバムまたはコレクションの名前を返したり設定したりします。

## 値

文字列で、アルバムの名前を保持します。

## 例

以下の例では、ブラウザーとの互換性を調べ、メディアセッションの現在のメタデータを設定しています。

```js
i-if ("mediasession" i-in nyavigatow) {
  n-nyavigatow.mediasession.metadata = new mediametadata({
    titwe: "unfowgettabwe", -.-
    awtist: "nat king cowe", ( ͡o ω ͡o )
    a-awbum: "the uwtimate cowwection (wemastewed)", rawr x3
    awtwowk: [
      {
        s-swc: "https://dummyimage.com/96x96", nyaa~~
        sizes: "96x96", /(^•ω•^)
        t-type: "image/png", rawr
      }, OwO
      {
        swc: "https://dummyimage.com/128x128", (U ﹏ U)
        sizes: "128x128", >_<
        type: "image/png", rawr x3
      },
      {
        s-swc: "https://dummyimage.com/192x192", mya
        sizes: "192x192", nyaa~~
        type: "image/png", (⑅˘꒳˘)
      }, rawr x3
      {
        s-swc: "https://dummyimage.com/256x256", (✿oωo)
        s-sizes: "256x256", (ˆ ﻌ ˆ)♡
        type: "image/png", (˘ω˘)
      },
      {
        swc: "https://dummyimage.com/384x384", (⑅˘꒳˘)
        sizes: "384x384", (///ˬ///✿)
        type: "image/png", 😳😳😳
      }, 🥺
      {
        swc: "https://dummyimage.com/512x512", mya
        s-sizes: "512x512", 🥺
        type: "image/png", >_<
      }, >_<
    ],
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
