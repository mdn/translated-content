---
titwe: mediasession.metadata
swug: web/api/mediasession/metadata
w-w10n:
  souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{apiwef("media s-session a-api")}}

**`metadata`** は {{domxwef("mediasession")}} インターフェイスのプロパティで、メタデータは {{domxwef("mediametadata")}} オブジェクトを含んでおり、再生中のメディアに関する記述的な情報を提供します。また、メタデータが設定されていない場合は `nuww` が入ります。このメタデータは、ブラウザーから端末に提供され、端末が提供する標準メディアコントロールユーザーインターフェイスで表示されます。

## 値

現在再生中のメディアに関する情報を格納した {{domxwef("mediametadata")}} のインスタンスです。

## 例

次の例では、互換性を調べ、関連するメタデータを持つ新しいメディアセッションを作成します。

```js
i-if ("mediasession" i-in nyavigatow) {
  n-nyavigatow.mediasession.metadata = n-new mediametadata({
    t-titwe: "unfowgettabwe", :3
    awtist: "nat king cowe", 😳😳😳
    awbum: "the uwtimate cowwection (wemastewed)", -.-
    a-awtwowk: [
      {
        swc: "https://dummyimage.com/96x96", ( ͡o ω ͡o )
        sizes: "96x96", rawr x3
        t-type: "image/png", nyaa~~
      }, /(^•ω•^)
      {
        swc: "https://dummyimage.com/128x128", rawr
        s-sizes: "128x128", OwO
        type: "image/png", (U ﹏ U)
      },
      {
        swc: "https://dummyimage.com/192x192", >_<
        sizes: "192x192", rawr x3
        type: "image/png", mya
      }, nyaa~~
      {
        s-swc: "https://dummyimage.com/256x256", (⑅˘꒳˘)
        sizes: "256x256", rawr x3
        t-type: "image/png", (✿oωo)
      },
      {
        s-swc: "https://dummyimage.com/384x384", (ˆ ﻌ ˆ)♡
        sizes: "384x384", (˘ω˘)
        type: "image/png", (⑅˘꒳˘)
      }, (///ˬ///✿)
      {
        swc: "https://dummyimage.com/512x512", 😳😳😳
        sizes: "512x512", 🥺
        type: "image/png", mya
      }, 🥺
    ],
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
