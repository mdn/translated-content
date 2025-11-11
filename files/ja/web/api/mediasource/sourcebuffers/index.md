---
title: "MediaSource: sourceBuffers プロパティ"
short-title: sourceBuffers
slug: Web/API/MediaSource/sourceBuffers
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

**`sourceBuffers`** は {{domxref("MediaSource")}} インターフェイスの読み取り専用プロパティで、この `MediaSource` に関連付けられた {{domxref("SourceBuffer")}} オブジェクトのリストを含む {{domxref("SourceBufferList")}} オブジェクトを返します。

### 値

{{domxref("SourceBufferList")}} です。

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例に基づいています（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。ここでは定義されていませんが、関数 `getMediaSource()` は `MediaSource` を返します。

```js
const mediaSource = getMediaSource();

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      console.log(mediaSource.sourceBuffers); // 上で追加されたソースバッファーが含まれます
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
