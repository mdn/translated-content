---
title: "MediaMetadata: MediaMetadata() コンストラクター"
short-title: MediaMetadata()
slug: Web/API/MediaMetadata/MediaMetadata
l10n:
  sourceCommit: 24780b063bdfc244eb9d082b92cedeb14422bf6b
---

{{APIRef("Media Session API")}}

**`MediaMetadata()`** コンストラクターは、新しい {{domxref("MediaMetadata")}} オブジェクトを作成します。

## 構文

```js-nolint
new MediaMetadata()
new MediaMetadata(metadata)
```

### 引数

- `metadata` {{optional_inline}}

  - : メタデータ引数は次の通りです。

    - `title` {{optional_inline}}
      - : 再生されるメディアのタイトル。既定では空文字列 (`""`) です。
    - `artist` {{optional_inline}}
      - : 再生されるメディアのアーティスト、グループ、作者の名前。既定では空文字列 (`""`) です。
    - `album` {{optional_inline}}
      - : 再生されるメディアを含むアルバムまたはコレクションの名前。既定では空文字列 (`""`) です。
    - `artwork` {{optional_inline}}
      - : 再生メディアに関連付けられた画像を表すオブジェクトの配列 ({{jsxref("Array")}}) で、既定値は空配列です。オブジェクトの構造は次の通りです。
        - `src`
          - : ユーザーエージェントが画像データを取得する URL。
        - `sizes` {{optional_inline}}
          - : ユーザーエージェントが単一の画像を変倍する必要がないように、リソースを複数のサイズで指定します。既定では空文字列 (`""`) です。
        - `type` {{optional_inline}}
          - : ユーザーエージェントが対応していない型の画像を無視するための {{Glossary("MIME type", "MIME タイプ")}}のヒント。ただし、ユーザーエージェントは画像をダウンロードした後、MIME タイプスニッフィングを使用してその型を決定することができます。既定では空文字列 (`""`) です。

## 例

以下の例では、正しい形式のメタデータを使用して新しい {{domxref("MediaMetadata")}} オブジェクトを作成します。

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
