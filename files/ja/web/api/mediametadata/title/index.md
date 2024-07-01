---
title: MediaMetadata.title
slug: Web/API/MediaMetadata/title
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Media Session API")}}

**`title`** は {{domxref("MediaMetaData")}} インターフェイスのプロパティで、再生されるメディアのタイトルを返したり設定したりします。

## 値

文字列で、メディアのタイトルを保持します。

## 例

以下の例では、ブラウザーとの互換性を調べ、メディアセッションの現在のメタデータを設定しています。

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
