---
title: "MediaSource: activeSourceBuffers プロパティ"
short-title: activeSourceBuffers
slug: Web/API/MediaSource/activeSourceBuffers
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

**`activeSourceBuffers`** は {{domxref("MediaSource")}} インターフェイスの読み取り専用プロパティで、{{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} に含まれる {{domxref("SourceBuffer")}} オブジェクトのサブセットを含む {{domxref("SourceBufferList")}} オブジェクトを返します。 これは、選択した動画トラック、有効な音声トラック、および表示/非表示のテキストトラックを提供するオブジェクトのリストです。

### 値

アクティブな各トラックの {{domxref("SourceBuffer")}} オブジェクトを含む {{domxref("SourceBufferList")}}。

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例に基づいています（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。

```js
const mediaSource = getMediaSource();

function sourceOpen() {
  console.log(mediaSource.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      console.log(mediaSource.activeSourceBuffers);
      // 動画プレーヤーでの再生用に選択されているため、
      // 上記で追加されたソースバッファーが含まれます。
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
