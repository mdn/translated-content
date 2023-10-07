---
title: MediaSource.readyState
slug: Web/API/MediaSource/readyState
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} インターフェイスの **`readyState`** 読み取り専用プロパティは、現在の `MediaSource` の状態を表す列挙を返します。 3 つの可能な値は次のとおりです。

- `closed`: ソースは現在メディア要素にアタッチされていません。
- `open`: ソースはメディア要素にアタッチされ、{{domxref("SourceBuffer")}} オブジェクトを受信する準備ができています。
- `ended`: ソースはメディア要素にアタッチされていますが、{{domxref("MediaSource.endOfStream()")}} の呼び出しを介してストリームが終了しています。

## 構文

```
var myReadyState = mediaSource.readyState;
```

### 値

{{domxref("DOMString")}}。

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例からのものです（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。

```js
if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error(
    "サポートされていない MIME タイプまたはコーデック: ",
    mimeCodec,
  );
}

function sourceOpen(_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.MediaSource.readyState")}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
