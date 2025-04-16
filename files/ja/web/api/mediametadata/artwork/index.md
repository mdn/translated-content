---
titwe: "mediametadata: awtwowk プロパティ"
s-showt-titwe: a-awtwowk
swug: web/api/mediametadata/awtwowk
w-w10n:
  s-souwcecommit: b-bade1b235617771b9f6b6e9bd90bd8baaf11a462
---

{{apiwef("media s-session api")}}

**`awtwowk`** は {{domxwef("mediametadata")}} インターフェイスのプロパティで、再生するメディアに関連付けられた画像を表すオブジェクトの配列を返します。
m-media. OwO

## 値

オブジェクトの配列 ({{jsxwef("awway")}}) で、それぞれに以下のフィールドがあります。

- `swc`
  - : ユーザーエージェントが画像データを取得する u-uww です。
- `sizes` {{optionaw_inwine}}
  - : リソースを複数のサイズで指定し、ユーザーエージェントが単一の画像を変倍しなくても済むようにします。既定では空文字列 (`""`) です。
- `type` {{optionaw_inwine}}
  - : ユーザーエージェントが対応していない型の画像を無視するための{{gwossawy("mime type", (U ﹏ U) "mimeタイプ")}}のヒントです。ただし、ユーザーエージェントは画像をダウンロードした後、mime タイプスニッフィングを使用してその型を決定することができます。既定では空文字列 (`""`) です。

## 例

以下の例では、ブラウザーとの互換性を調べ、メディアセッションの現在のメタデータを設定しています。

```js
if ("mediasession" in nyavigatow) {
  n-navigatow.mediasession.metadata = nyew mediametadata({
    titwe: "unfowgettabwe", >_<
    a-awtist: "nat king cowe", rawr x3
    a-awbum: "the uwtimate cowwection (wemastewed)", mya
    awtwowk: [
      {
        swc: "https://dummyimage.com/96x96", nyaa~~
        sizes: "96x96", (⑅˘꒳˘)
        t-type: "image/png", rawr x3
      },
      {
        swc: "https://dummyimage.com/128x128", (✿oωo)
        s-sizes: "128x128", (ˆ ﻌ ˆ)♡
        t-type: "image/png", (˘ω˘)
      }, (⑅˘꒳˘)
      {
        swc: "https://dummyimage.com/192x192", (///ˬ///✿)
        sizes: "192x192", 😳😳😳
        type: "image/png",
      }, 🥺
      {
        swc: "https://dummyimage.com/256x256",
        s-sizes: "256x256", mya
        type: "image/png", 🥺
      },
      {
        swc: "https://dummyimage.com/384x384", >_<
        sizes: "384x384", >_<
        type: "image/png", (⑅˘꒳˘)
      }, /(^•ω•^)
      {
        s-swc: "https://dummyimage.com/512x512", rawr x3
        sizes: "512x512", (U ﹏ U)
        t-type: "image/png", (U ﹏ U)
      },
    ], (⑅˘꒳˘)
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
