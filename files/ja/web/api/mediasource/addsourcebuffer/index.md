---
title: MediaSource.addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
---

{{APIRef("Media Source Extensions")}}

{{domxref("MediaSource")}} インターフェイスの **`addSourceBuffer()`** メソッドは、指定された {{Glossary("MIME type","MIME タイプ")}}の新しい {{domxref("SourceBuffer")}} を作成し、`MediaSource` の {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} リストに追加します。 新しい `SourceBuffer` も返されます。

## 構文

```
var sourceBuffer = mediaSource.addSourceBuffer(mimeType);
```

### パラメーター

- `mimeType`
  - : {{domxref("MediaSource")}} に作成して追加する {{domxref("SourceBuffer")}} の MIME タイプを指定する {{domxref("DOMString")}}。

### 戻り値

作成され、メディアソースに追加された新しいソースバッファを表す {{domxref("SourceBuffer")}} オブジェクト。

### 例外

- `InvalidAccessError`
  - : `mimeType` に指定された値は、有効な MIME タイプではなく空の文字列です。
- `InvalidStateError`
  - : {{domxref("MediaSource")}} の {{domxref("MediaSource.readyState", "readyState")}} は `"open"` でありません。
- `NotSupportedError`
  - : 指定された `mimeType` は{{Glossary("user agent","ユーザーエージェント")}}でサポートされていないか、メディアソースの {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} リストに既に含まれている他の {{domxref("SourceBuffer")}} オブジェクトの MIME タイプと互換性がありません。
- `QuotaExceededError`
  - : ユーザーエージェントはこれ以上 `SourceBuffer` オブジェクトを処理できないか、指定された `mimeType` を使用して新しい `SourceBuffer` を作成すると、[SourceBuffer の構成がサポートされなくなります](https://w3c.github.io/media-source/#sourcebuffer-configuration)。

## 例

次のスニペットは、Nick Desaulniers によって書かれた簡単な例からのものです（[ライブで完全なデモを見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。

```js
var assetURL = "frag_bunny.mp4";
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

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

{{Compat("api.MediaSource.addSourceBuffer")}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
