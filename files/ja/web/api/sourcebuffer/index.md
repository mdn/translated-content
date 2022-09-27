---
title: SourceBuffer
slug: Web/API/SourceBuffer
---

{{APIRef("Media Source Extensions")}}

**`SourceBuffer`** インターフェイスは、{{domxref("MediaSource")}} オブジェクトを介して {{domxref("HTMLMediaElement")}} に渡されて再生されるメディアのチャンク（大きな塊）を表します。 これは、1 つまたは複数のメディアセグメントで構成できます。

{{InheritanceDiagram}}

## プロパティ

- {{domxref("SourceBuffer.appendWindowEnd")}}
  - : 追加ウィンドウの終わりのタイムスタンプを制御します。
- {{domxref("SourceBuffer.appendWindowStart")}}
  - : 追加ウィンドウ（[append window](https://w3c.github.io/media-source/#append-window)）の始まりのタイムスタンプを制御します。 これは、`SourceBuffer` に追加されるメディアデータをフィルタリングするために使用できるタイムスタンプの範囲です。 この範囲内のタイムスタンプを持つコード化されたメディアフレームは追加されますが、範囲外のものは除外されます。
- {{domxref("SourceBuffer.audioTracks")}} {{readonlyInline}}
  - : `SourceBuffer` 内に現在含まれている音声トラックのリスト。
- {{domxref("SourceBuffer.buffered")}} {{readonlyInline}}
  - : `SourceBuffer` に現在バッファされている時間範囲を返します。
- {{domxref("SourceBuffer.mode")}}
  - : `SourceBuffer` 内のメディアセグメントの順序を、任意の順序で追加できるか、または厳密な順序で保持する必要があるかを制御します。
- {{domxref("SourceBuffer.textTracks")}} {{readonlyInline}}
  - : `SourceBuffer` 内に現在含まれているテキストトラックのリスト。
- {{domxref("SourceBuffer.timestampOffset")}}
  - : その後 `SourceBuffer` に追加されるメディアセグメント内のタイムスタンプに適用されるオフセットを制御します。
- {{domxref("SourceBuffer.trackDefaults")}}
  - : `SourceBuffer` に追加されるメディアの初期化セグメント（[initialization segment](https://w3c.github.io/media-source/#init-segment)）で、種類、ラベル、言語情報が利用できない場合に使用するデフォルト値を指定します。
- {{domxref("SourceBuffer.updating")}} {{readonlyInline}}
  - : `SourceBuffer` が現在更新されているかどうか、つまり {{domxref("SourceBuffer.appendBuffer()")}}、{{domxref("SourceBuffer.appendStream()")}}、または {{domxref("SourceBuffer.remove()")}} の操作が現在進行中かどうかを示すブール値。
- {{domxref("SourceBuffer.videoTracks")}} {{readonlyInline}}
  - : `SourceBuffer` 内に現在含まれている動画トラックのリスト。

### イベントハンドラ

- {{domxref("SourceBuffer.onabort")}}
  - : {{domxref("SourceBuffer.appendBuffer()")}} または {{domxref("SourceBuffer.appendStream()")}} が {{domxref("SourceBuffer.abort()")}} の呼び出しによって終了するたびに発生します。 {{domxref("SourceBuffer.updating")}} は `true` から `false` に変更されます。
- {{domxref("SourceBuffer.onerror")}}
  - : {{domxref("SourceBuffer.appendBuffer()")}} 中または {{domxref("SourceBuffer.appendStream()")}} 中にエラーが発生するたびに発生します。 {{domxref("SourceBuffer.updating")}} は `true` から `false` に変更されます。
- {{domxref("SourceBuffer.onupdate")}}
  - : {{domxref("SourceBuffer.appendBuffer()")}} メソッドまたは {{domxref("SourceBuffer.remove()")}} が完了するたびに発生します。 {{domxref("SourceBuffer.updating")}} は `true` から `false` に変更されます。 このイベントは、`onupdateend` の前に発生します。
- {{domxref("SourceBuffer.onupdateend")}}
  - : {{domxref("SourceBuffer.appendBuffer()")}} メソッドまたは {{domxref("SourceBuffer.remove()")}} が終了するたびに発生します。 このイベントは、`onupdate` の後に発生します。
- {{domxref("SourceBuffer.onupdatestart")}}
  - : {{domxref("SourceBuffer.updating")}} の値が `false` から `true` に遷移するたびに発生します。

## メソッド

_親インターフェイスである {{domxref("EventTarget")}} からメソッドを継承します。_

- {{domxref("SourceBuffer.abort()")}}
  - : 現在のセグメントを中止し、セグメントパーサーをリセットします。
- {{domxref("SourceBuffer.appendBuffer()")}}
  - : {{domxref("ArrayBuffer")}} または {{domxref("ArrayBufferView")}} オブジェクトからのメディアセグメントデータを `SourceBuffer` に追加します。
- {{domxref("SourceBuffer.appendBufferAsync()")}} {{experimental_inline}}
  - : 指定されたバッファを `SourceBuffer` に非同期的に追加するプロセスを開始します。 バッファが追加されると満たされる {{jsxref("Promise")}} を返します。
- {{domxref("SourceBuffer.appendStream()")}}
  - : `ReadableStream` オブジェクトからのメディアセグメントデータを `SourceBuffer` に追加します。
- {{domxref("SourceBuffer.changeType()")}}
  - : 今後の {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} の呼び出しで、新しいデータが準拠することを期待する {{Glossary("MIME type","MIME タイプ")}}を変更します。
- {{domxref("SourceBuffer.remove()")}}
  - : `SourceBuffer` から特定の時間範囲内のメディアセグメントを削除します。
- {{domxref("SourceBuffer.removeAsync()")}} {{experimental_inline}}
  - : 指定された範囲のメディアセグメントを `SourceBuffer` から非同期的に削除するプロセスを開始します。 一致するすべてのセグメントが削除されると満たされる {{jsxref("Promise")}} を返します。

## 例

次の簡単な例では、動画をチャンクごとに可能な限り高速でロードし、できるだけ早く再生します。 この例は Nick Desaulniers によって作成され、[ここでライブで見る](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)ことができます（さらに調査するために[ソースをダウンロードする](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)こともできます）。

```js
var video = document.querySelector('video');

var assetURL = 'frag_bunny.mp4';
// Blink はコーデックに関して特定する必要がある
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('サポートされていない MIME タイプまたはコーデック: ', mimeCodec);
}

function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}

function fetchAB (url, cb) {
  console.log(url);
  var xhr = new XMLHttpRequest;
  xhr.open('get', url);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
    cb(xhr.response);
  };
  xhr.send();
}
```

## 仕様

| 仕様                                                                                             | 状態                                             | コメント |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------- |
| {{SpecName('Media Source Extensions', '#sourcebuffer', 'SourceBuffer')}} | {{Spec2('Media Source Extensions')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.SourceBuffer")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
