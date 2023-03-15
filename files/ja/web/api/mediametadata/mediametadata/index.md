---
title: MediaMetadata()
slug: Web/API/MediaMetadata/MediaMetadata
l10n:
  sourceCommit: bbecba9e7d688493adbdc37fc70e02d87adfe371
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

  - : metadata 引数は次の通りです。

    - `title`: 再生されるメディアのタイトル。
    - `artist`: 再生されるメディアのアーティスト、グループ、作者の名前。
    - `album`: 再生されるメディアを含むアルバムまたはコレクションの名前。
    - `artwork`: 再生するメディアに関連付けられた画像の配列。

## 例

以下の例では、正しい形式のメタデータを使用して新しい {{domxref("MediaMetadata")}} オブジェクトを作成します。

```js
if ('mediaSession' in navigator){
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Unforgettable',
    artist: 'Nat King Cole',
    album: 'The Ultimate Collection (Remastered)',
    artwork: [
      { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
      { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
      { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
      { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
      { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
      { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
    ]
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
