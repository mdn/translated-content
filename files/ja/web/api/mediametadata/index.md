---
title: MediaMetadata
slug: Web/API/MediaMetadata
l10n:
  sourceCommit: bbecba9e7d688493adbdc37fc70e02d87adfe371
---

{{APIRef("Media Session API")}}

**`MediaMetadata`** は[メディアセッション API](/ja/docs/Web/API/Media_Session_API) のインターフェイスで、ウェブページがプラットフォーム UI に表示するためのリッチメディアメタデータを提供することができます。

## コンストラクター

- {{domxref("MediaMetadata.MediaMetadata", "MediaMetadata()")}}
  - : 新しい `MediaMetaData` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("MediaMetadata.title")}}
  - : 再生されるメディアのタイトルを返したり設定したりします。
- {{domxref("MediaMetadata.artist")}}
  - : 再生されるメディアのアーティスト、グループ、作者の名前を返したり設定したりします。
- {{domxref("MediaMetadata.album")}}
  - : 再生されるメディアのアルバムまたはコレクションの名前を返したり設定したりします。
- {{domxref("MediaMetadata.artwork")}}
  - : 再生しているメディアに関連付けられた画像の配列を返したり設定したりします。

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
