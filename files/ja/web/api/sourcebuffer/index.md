---
title: SourceBuffer
slug: Web/API/SourceBuffer
l10n:
  sourceCommit: 7552f08addb16f738bfb957ae79c5a9202ab36ff
---

{{APIRef("Media Source Extensions")}}

**`SourceBuffer`** インターフェイスは、{{domxref("MediaSource")}} オブジェクトを介して {{domxref("HTMLMediaElement")}} に渡されて再生されるメディアのチャンク（大きな塊）を表します。 これは、1 つまたは複数のメディアセグメントで構成できます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("SourceBuffer.appendWindowEnd")}}
  - : 追加ウィンドウの終わりのタイムスタンプを制御します。
- {{domxref("SourceBuffer.appendWindowStart")}}
  - : 追加ウィンドウ（[append window](https://w3c.github.io/media-source/#append-window)）の始まりのタイムスタンプを制御します。 これは、`SourceBuffer` に追加されるメディアデータをフィルタリングするために使用できるタイムスタンプの範囲です。 この範囲内のタイムスタンプを持つコード化されたメディアフレームは追加されますが、範囲外のものは除外されます。
- {{domxref("SourceBuffer.audioTracks")}} {{ReadOnlyInline}}
  - : `SourceBuffer` 内に現在含まれている音声トラックのリスト。
- {{domxref("SourceBuffer.buffered")}} {{ReadOnlyInline}}
  - : `SourceBuffer` に現在バッファーされている時間範囲を返します。
- {{domxref("SourceBuffer.mode")}}
  - : `SourceBuffer` 内のメディアセグメントの順序を、任意の順序で追加できるか、または厳密な順序で保持する必要があるかを制御します。
- {{domxref("SourceBuffer.textTracks")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : `SourceBuffer` 内に現在含まれているテキストトラックのリストです。
- {{domxref("SourceBuffer.timestampOffset")}}
  - : その後 `SourceBuffer` に追加されるメディアセグメント内のタイムスタンプに適用されるオフセットを制御します。
- {{domxref("SourceBuffer.updating")}} {{ReadOnlyInline}}
  - : 論理値で、`SourceBuffer` が現在更新されているかどうか、つまり {{domxref("SourceBuffer.appendBuffer()")}} または {{domxref("SourceBuffer.remove()")}} の操作が現在進行中かどうかを示します。
- {{domxref("SourceBuffer.videoTracks")}} {{ReadOnlyInline}}
  - : `SourceBuffer` 内に現在含まれている動画トラックのリストです。。

## インスタンスメソッド

_親インターフェイスである {{domxref("EventTarget")}} からメソッドを継承しています。_

- {{domxref("SourceBuffer.abort()")}}
  - : 現在のセグメントを中止し、セグメントパーサーをリセットします。
- {{domxref("SourceBuffer.appendBuffer()")}}
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかのオブジェクトからのメディアセグメントデータを `SourceBuffer` に追加します。
- {{domxref("SourceBuffer.appendBufferAsync()")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : 指定されたバッファーを `SourceBuffer` に非同期的に追加するプロセスを開始します。 バッファが追加されると満たされる {{jsxref("Promise")}} を返します。
- {{domxref("SourceBuffer.changeType()")}}
  - : 今後の {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} の呼び出しで、新しいデータが準拠することを期待する {{Glossary("MIME type","MIME タイプ")}}を変更します。
- {{domxref("SourceBuffer.remove()")}}
  - : `SourceBuffer` から特定の時間範囲内のメディアセグメントを削除します。
- {{domxref("SourceBuffer.removeAsync()")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : 指定された範囲のメディアセグメントを `SourceBuffer` から非同期的に削除するプロセスを開始します。 一致するすべてのセグメントが削除されると満たされる {{jsxref("Promise")}} を返します。

## イベント

- {{domxref("SourceBuffer.abort_event", "abort")}}
  - : {{domxref("SourceBuffer.appendBuffer()")}} または {{domxref("SourceBuffer.appendStream()")}} が {{domxref("SourceBuffer.abort()")}} の呼び出しによって終了するたびに発生します。 {{domxref("SourceBuffer.updating")}} は `true` から `false` に変更されます。
- {{domxref("SourceBuffer.error_event", "error")}}
  - : {{domxref("SourceBuffer.appendBuffer()")}} 中または {{domxref("SourceBuffer.appendStream()")}} 中にエラーが発生するたびに発生します。 {{domxref("SourceBuffer.updating")}} は `true` から `false` に変更されます。
- {{domxref("SourceBuffer.update_event", "update")}}
  - : {{domxref("SourceBuffer.appendBuffer()")}} メソッドまたは {{domxref("SourceBuffer.remove()")}} が完了するたびに発生します。 {{domxref("SourceBuffer.updating")}} は `true` から `false` に変更されます。 このイベントは、`onupdateend` の前に発生します。
- {{domxref("SourceBuffer.updateend_event", "updateend")}}
  - : {{domxref("SourceBuffer.appendBuffer()")}} メソッドまたは {{domxref("SourceBuffer.remove()")}} が終了するたびに発生します。 このイベントは、`onupdate` の後に発生します。
- {{domxref("SourceBuffer.updatestart_event", "updatestart")}}
  - : {{domxref("SourceBuffer.updating")}} の値が `false` から `true` に遷移するたびに発生します。

## 例

次の簡単な例では、動画をチャンクごとに可能な限り高速でロードし、できるだけ早く再生します。 この例は Nick Desaulniers によって作成され、[ここでライブで見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)ことができます（さらに調査するために[ソースをダウンロードする](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)こともできます）。

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  const mediaSource = new MediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error(
    `${mimeCodec} の MIME タイプまたはコーデックには対応していません`,
    mimeCodec,
  );
}

function sourceOpen() {
  console.log(this.readyState); // open
  const mediaSource = this;
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

function fetchAB(url, cb) {
  console.log(url);
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.responseType = "arraybuffer";
  xhr.onload = () => {
    cb(xhr.response);
  };
  xhr.send();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
