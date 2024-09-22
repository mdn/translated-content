---
title: "MediaSource: addSourceBuffer() メソッド"
short-title: addSourceBuffer()
slug: Web/API/MediaSource/addSourceBuffer
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Source Extensions")}}

**`addSourceBuffer()`** は {{domxref("MediaSource")}} インターフェイスのメソッドで、指定された {{Glossary("MIME type","MIME タイプ")}}の新しい {{domxref("SourceBuffer")}} を作成し、`MediaSource` の {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} リストに追加します。 新しい `SourceBuffer` も返されます。

## 構文

```js-nolint
addSourceBuffer(mimeType)
```

### 引数

- `mimeType`
  - : 文字列で、 {{domxref("MediaSource")}} に作成して追加する {{domxref("SourceBuffer")}} の MIME タイプを指定します。

### 返値

作成され、メディアソースに追加された新しいソースバッファーを表す {{domxref("SourceBuffer")}} オブジェクト。

### 例外

- `InvalidAccessError` {{domxref("DOMException")}}
  - : `mimeType` に指定された値は、有効な MIME タイプではなく空の文字列です。
- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("MediaSource")}} の {{domxref("MediaSource.readyState", "readyState")}} は `"open"` でありません。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 指定された `mimeType` は{{Glossary("user agent","ユーザーエージェント")}}でサポートされていないか、メディアソースの {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} リストに既に含まれている他の {{domxref("SourceBuffer")}} オブジェクトの MIME タイプと互換性がありません。
- `QuotaExceededError` {{domxref("DOMException")}}
  - : ユーザーエージェントはこれ以上 `SourceBuffer` オブジェクトを処理できないか、指定された `mimeType` を使用して新しい `SourceBuffer` を作成すると、[SourceBuffer の構成がサポートされなくなります](https://w3c.github.io/media-source/#sourcebuffer-configuration)。

## 例

次のスニペットは、Nick Desaulniers によって書かれた例からのものです（[ライブで完全なデモを見る](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)か、[ソースをダウンロード](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)してさらに調査してください）。ここでは定義されていませんが、関数 `getMediaSource()` は `MediaSource` を返します。

```js
const assetURL = "frag_bunny.mp4";
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
const mediaSource = getMediaSource();

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  console.log(mediaSource.readyState); // closed
  mediaSource.addEventListener("sourceopen", sourceOpen);
  video.src = URL.createObjectURL(mediaSource);
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
