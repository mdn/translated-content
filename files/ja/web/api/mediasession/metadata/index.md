---
title: MediaSession.metadata
slug: Web/API/MediaSession/metadata
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Media Session API")}}

**`metadata`** は {{domxref("MediaSession")}} インターフェイスのプロパティで、メタデータは {{domxref("MediaMetadata")}} オブジェクトを含んでおり、再生中のメディアに関する記述的な情報を提供します。また、メタデータが設定されていない場合は `null` が入ります。このメタデータは、ブラウザーから端末に提供され、端末が提供する標準メディアコントロールユーザーインターフェイスで表示されます。

## 値

現在再生中のメディアに関する情報を格納した {{domxref("MediaMetadata")}} のインスタンスです。

## 例

次の例では、互換性を調べ、関連するメタデータを持つ新しいメディアセッションを作成します。

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "Nat King Cole",
    album: "The Ultimate Collection (Remastered)",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
