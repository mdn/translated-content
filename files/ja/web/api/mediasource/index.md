---
title: MediaSource
slug: Web/API/MediaSource
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("Media Source Extensions")}}

**`MediaSource`** は{{domxref("Media Source Extensions API", "メディアソース拡張 API", "", "nocode")}} のインターフェイスで、 {{domxref("HTMLMediaElement")}} のメディアデータのソースを表します。 `MediaSource` オブジェクトはユーザーエージェント内で再生される {{domxref("HTMLMediaElement")}} に取り付けることができます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("MediaSource.MediaSource", "MediaSource()")}}
  - : ソースバッファーに関連付けられていない、新しい `MediaSource` オブジェクトを構築して返します。

## インスタンスプロパティ

- {{domxref("MediaSource.activeSourceBuffers")}} {{ReadOnlyInline}}
  - : {{domxref("MediaSource.sourceBuffers")}} に含まれる {{domxref("SourceBuffer")}} オブジェクトのサブセット（選択された映像トラック、有効な音声トラック、表示/非表示のテキストトラックを提供するオブジェクトのリスト）を含む {{domxref("SourceBufferList")}} オブジェクトを返します。
- {{domxref("MediaSource.duration")}}
  - : 表示されているメディアの再生時間を取得、設定します。
- {{domxref("MediaSource.handle")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 専用ワーカーの内部では、 {{domxref("MediaSourceHandle")}} オブジェクトを返します。このオブジェクトは `MediaSource` のプロキシーで、ワーカーからメインスレッドに移譲して、 {{domxref("HTMLMediaElement.srcObject")}} プロパティを介してメディア要素に取り付けることができます。
- {{domxref("MediaSource.readyState")}} {{ReadOnlyInline}}
  - : 現在の状態を表す列挙型を返します。 `MediaSource` がメディア要素に取り付けられていない状態 (`closed`)、取り付けられていて {{domxref("SourceBuffer")}} オブジェクトを受け取る準備ができている状態 (`open`)、または取り付けられているが {{domxref("MediaSource.endOfStream()")}} によってストリームが終了している状態 (`ended`) のいずれかです。
- {{domxref("MediaSource.sourceBuffers")}} {{ReadOnlyInline}}
  - : この `MediaSource` に関連付けられた {{domxref("SourceBuffer")}} オブジェクトのリストを格納した {{domxref("SourceBufferList")}} オブジェクトを返します。

## 静的プロパティ

- {{domxref("MediaSource.canConstructInDedicatedWorker_static", "MediaSource.canConstructInDedicatedWorker")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 論理値です。 `MediaSource` のワーカー対応が実装されていれば `true` を返し、レイテンシーの低い機能検出メカニズムを提供します。

## インスタンスメソッド

_親インターフェイス{{domxref("EventTarget")}}から、プロパティを継承しています。_

- {{domxref("MediaSource.addSourceBuffer()")}}
  - : 新しい {{domxref("SourceBuffer")}} を指定された MIME タイプで作成し、 {{domxref("MediaSource.sourceBuffers")}} リストに追加します。
- {{domxref("MediaSource.clearLiveSeekableRange()")}}
  - : `setLiveSeekableRange()` を呼び出して設定したシーク可能範囲をクリアします。
- {{domxref("MediaSource.endOfStream()")}}
  - : ストリームの終わりを合図します。
- {{domxref("MediaSource.removeSourceBuffer()")}}
  - : メディアソースオブジェクトから、与えられた {{domxref("SourceBuffer")}} を除去します。
- {{domxref("MediaSource.setLiveSeekableRange()")}}
  - : ユーザーがこのメディア要素でシークできる範囲を設定します。

## 静的メソッド

- {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}}
  - : 論理値で、指定された MIME タイプに現在のユーザーエージェントが対応しているかどうか、つまり、その MIME タイプの {{domxref("SourceBuffer")}} オブジェクトを正常に作成できるかどうかを返します。

## イベント

- {{domxref("MediaSource.sourceclose_event", "sourceclose")}}
  - : `MediaSource` インスタンスがメディア要素に取り付けられなくなったときに発行されます。
- {{domxref("MediaSource.sourceended_event", "sourceended")}}
  - : `MediaSource` インスタンスがまだメディア要素に取り付けられているが、 {{domxref("MediaSource.endOfStream", "endOfStream()")}} が呼び出された時に発行されます。
- {{domxref("MediaSource.sourceopen_event", "sourceopen")}}
  - : `MediaSource` インスタンスがメディア要素によって開かれ、 {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} 内の {{domxref("SourceBuffer")}} オブジェクトにデータを追加する準備ができたときに発行されます。

## 例

### 完全に基本的な例

次の単純な例は、{{domxref("XMLHttpRequest")}} で動画を読み込んで、できるだけ早く再生します。この例は Nick Desaulniers によって書かれたもので、[ここでライブ表示](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html) することができます（さらに調べるために [ソースをダウンロードする](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) こともできます）。ここでは定義されていませんが、関数 `getMediaSource()` は `MediaSource` を返します。

```js
const video = document.querySelector("video");

const assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
let mediaSource;

if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = getMediaSource();
  console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
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

### 専用のワーカーで `MediaSource` を構築し、メインスレッドに渡す

{{domxref("MediaSource.handle", "handle")}} プロパティは、専用ワーカーの内部でアクセスすることができ、結果 {{domxref("MediaSourceHandle")}} オブジェクトは、 {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} 呼び出しによって、ワーカーを作成したスレッド（この場合はメインスレッド）に移譲されます。

```js
// Inside dedicated worker
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// Transfer the handle to the context that created the worker
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // Await sourceopen on MediaSource before creating SourceBuffers
  // and populating them with fetched media — MediaSource won't
  // accept creation of SourceBuffers until it is attached to the
  // HTMLMediaElement and its readyState is "open"
});
```

メインスレッドでは、{{domxref("Worker.message_event", "message")}} イベント ハンドラーを介してハンドルを受け取り、 {{htmlelement("video")}} に {{domxref("HTMLMediaElement.srcObject")}} プロパティを介して取付、動画を再生 ({{domxref("HTMLMediaElement.play()", "play")}}) します。

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> [!NOTE]
> {{domxref("MediaSourceHandle")}} は、共有ワーカーまたはサービスワーカーからは正常に移譲できません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
