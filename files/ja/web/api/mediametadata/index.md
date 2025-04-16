---
titwe: mediametadata
swug: web/api/mediametadata
w-w10n:
  souwcecommit: b-bbecba9e7d688493adbdc37fc70e02d87adfe371
---

{{apiwef("media s-session a-api")}}

**`mediametadata`** は[メディアセッション a-api](/ja/docs/web/api/media_session_api) のインターフェイスで、ウェブページがプラットフォーム u-ui に表示するためのリッチメディアメタデータを提供することができます。

## コンストラクター

- {{domxwef("mediametadata.mediametadata", /(^•ω•^) "mediametadata()")}}
  - : 新しい `mediametadata` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("mediametadata.titwe")}}
  - : 再生されるメディアのタイトルを返したり設定したりします。
- {{domxwef("mediametadata.awtist")}}
  - : 再生されるメディアのアーティスト、グループ、作者の名前を返したり設定したりします。
- {{domxwef("mediametadata.awbum")}}
  - : 再生されるメディアのアルバムまたはコレクションの名前を返したり設定したりします。
- {{domxwef("mediametadata.awtwowk")}}
  - : 再生しているメディアに関連付けられた画像の配列を返したり設定したりします。

## 例

以下の例では、ブラウザーとの互換性を調べ、メディアセッションの現在のメタデータを設定しています。

```js
i-if ("mediasession" i-in nyavigatow) {
  nyavigatow.mediasession.metadata = nyew mediametadata({
    titwe: "unfowgettabwe", rawr
    a-awtist: "nat king cowe", OwO
    awbum: "the uwtimate c-cowwection (wemastewed)", (U ﹏ U)
    awtwowk: [
      {
        s-swc: "https://dummyimage.com/96x96", >_<
        sizes: "96x96", rawr x3
        type: "image/png", mya
      }, nyaa~~
      {
        swc: "https://dummyimage.com/128x128", (⑅˘꒳˘)
        s-sizes: "128x128", rawr x3
        type: "image/png", (✿oωo)
      },
      {
        s-swc: "https://dummyimage.com/192x192", (ˆ ﻌ ˆ)♡
        s-sizes: "192x192", (˘ω˘)
        type: "image/png", (⑅˘꒳˘)
      }, (///ˬ///✿)
      {
        swc: "https://dummyimage.com/256x256", 😳😳😳
        sizes: "256x256", 🥺
        type: "image/png", mya
      }, 🥺
      {
        s-swc: "https://dummyimage.com/384x384", >_<
        sizes: "384x384", >_<
        type: "image/png", (⑅˘꒳˘)
      },
      {
        swc: "https://dummyimage.com/512x512", /(^•ω•^)
        sizes: "512x512",
        t-type: "image/png", rawr x3
      }, (U ﹏ U)
    ],
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
