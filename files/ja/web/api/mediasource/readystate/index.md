---
title: "MediaSource: readyState プロパティ"
short-title: readyState
slug: Web/API/MediaSource/readyState
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

**`readyState`** は {{domxref("MediaSource")}} インターフェイスの読み取り専用プロパティで、現在の `MediaSource` の状態を表す列挙を返します。 3 つの可能な値は次のとおりです。

- `closed`: ソースは現在メディア要素に取り付けられていません。
- `open`: ソースはメディア要素に取り付けられ、 {{domxref("SourceBuffer")}} オブジェクトを受信する準備ができています。
- `ended`: ソースはメディア要素に取り付けられていますが、 {{domxref("MediaSource.endOfStream()")}} の呼び出しを介してストリームが終了しています。

### 値

文字列です。

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例に基づいています（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。ここでは定義されていませんが、関数 `getMediaSource()` は `MediaSource` を返します。

```js
let mediaSource;

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error(
    "サポートされていない MIME タイプまたはコーデック: ",
    mimeCodec,
  );
}

function sourceOpen() {
  console.log(this.readyState); // open
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      video.play();
      console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
