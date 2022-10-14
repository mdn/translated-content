---
title: MediaSource.MediaSource()
slug: Web/API/MediaSource/MediaSource
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} インターフェイスの **`MediaSource()`** コンストラクタは、ソースバッファが関連付けられていない新しい `MediaSource` オブジェクトを構築して返します。

## 構文

```
var mediaSource = new MediaSource();
```

### パラメーター

なし。

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例から抜粋したものです（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。

```js
var video = document.querySelector('video');

var assetURL = 'frag_bunny.mp4';
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource;
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('サポートされていない MIME タイプまたはコーデック: ', mimeCodec);
}

...
```

## ブラウザーの互換性

{{Compat("api.MediaSource.MediaSource")}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
