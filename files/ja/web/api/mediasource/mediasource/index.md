---
title: "MediaSource: MediaSource() コンストラクター"
short-title: MediaSource()
slug: Web/API/MediaSource/MediaSource
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

**`MediaSource()`** は {{domxref("MediaSource")}} インターフェイスのコンストラクターで、ソースバッファーが関連付けられていない新しい `MediaSource` オブジェクトを構築して返します。

## 構文

```js-nolint
new MediaSource()
```

### 引数

なし。

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例から抜粋したものです（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  const mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("対応していない MIME タイプまたはコーデック: ", mimeCodec);
}

// …
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
