---
title: "MediaMetadata: artwork プロパティ"
short-title: artwork
slug: Web/API/MediaMetadata/artwork
l10n:
  sourceCommit: bade1b235617771b9f6b6e9bd90bd8baaf11a462
---

{{APIRef("Media Session API")}}

**`artwork`** は {{domxref("MediaMetaData")}} インターフェイスのプロパティで、再生するメディアに関連付けられた画像を表すオブジェクトの配列を返します。
media.

## 値

オブジェクトの配列 ({{jsxref("Array")}}) で、それぞれに以下のフィールドがあります。

- `src`
  - : ユーザーエージェントが画像データを取得する URL です。
- `sizes` {{optional_inline}}
  - : リソースを複数のサイズで指定し、ユーザーエージェントが単一の画像を変倍しなくても済むようにします。既定では空文字列 (`""`) です。
- `type` {{optional_inline}}
  - : ユーザーエージェントが対応していない型の画像を無視するための{{Glossary("MIME type", "MIMEタイプ")}}のヒントです。ただし、ユーザーエージェントは画像をダウンロードした後、MIME タイプスニッフィングを使用してその型を決定することができます。既定では空文字列 (`""`) です。

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
