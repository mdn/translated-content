---
title: "MediaRecorder: dataavailable イベント"
short-title: dataavailable
slug: Web/API/MediaRecorder/dataavailable_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("MediaStream Recording")}}

**`dataavailable`** は {{domxref("MediaRecorder")}} インターフェイスのイベントで、MediaRecorder がメディアデータをアプリで使用するために引き渡すときに発生します。 データはデータを含む {{domxref("Blob")}} オブジェクトで提供されます。 これは次の 4 つの状況で発生します。

- メディアストリームが終了すると、`ondataavailable` ハンドラーにまだ引き渡されていないメディアデータはすべて単一の {{domxref("Blob")}} で渡されます。
- {{domxref("MediaRecorder.stop()")}} を呼び出すと、収録を開始してから、または最後に `dataavailable` イベントが発生してからキャプチャされたすべてのメディアデータが {{domxref("Blob")}} で引き渡されます。 この後、キャプチャは終了します。
- {{domxref("MediaRecorder.requestData()")}} を呼び出すと、収録を開始してから、または最後に `dataavailable` イベントが発生してからキャプチャされたすべてのメディアデータが引き渡されます。 その後、新しい `Blob` が作成され、メディアのキャプチャがその blob に対して続行されます。
- `timeslice` プロパティをメディアキャプチャを開始した {{domxref("MediaRecorder.start()")}} メソッドに渡した場合は、`timeslice` ミリ秒ごとに `dataavailable` イベントが発生します。 つまり、各 blob は通常、特定の期間を持つことになります（最後の blob を除いてで、最後のイベント以降に残っているものは何でもということになるので、これはもっと短いかもしれません）。 そのため、メソッド呼び出しが次のようになっていれば — `recorder.start(1000);` — `dataavailable` イベントはメディアキャプチャの毎秒後に発生し、イベントハンドラーは一秒の長さのメディアデータの blob で毎秒呼ばれるでしょう。 `timeslice` を {{domxref("MediaRecorder.stop()")}} および {{domxref("MediaRecorder.requestData()")}} と共に使用して、複数の同じ長さの blob と他の短い blob を生成することもできます。

> [!NOTE]
> Web API の他の時間値と同様に、`timeslice` は厳密な値ではなく、他の待機中のタスク、ブラウザーの機能（Safari でのカメラやマイクの停止など）、ブラウザー固有の挙動（Android 版 Chrome で録画中に画面をロックすると `dataavailable` イベントが一時停止するなど）、あるいはその他のブラウザーのバグによって、実際の間隔が遅延する場合があります。このような状況では、チャンクのサイズが大幅に大きくなることもあります。
>
> したがって、経過時間の計算において `timeslice` や受信したチャンクの数だけを頼りにしないでください。誤差が累積する恐れがあるためです。代わりに、{{domxref("Event.timeStamp")}} などを使用して、開始からの総経過時間を記録する別個のタイマーを用意してください。

メディアデータが含まれている {{domxref("Blob")}} は、`dataavailable` イベントの `data` プロパティで利用できます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("dataavailable", (event) => { })

ondataavailable = (event) => { }
```

## イベント型

{{domxref("BlobEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("BlobEvent")}}

## 例

```js
const chunks = [];

mediaRecorder.onstop = (e) => {
  console.log("MediaRecorder.stop() 呼び出し後に利用可能なデータ。");

  const audio = document.createElement("audio");
  audio.controls = true;
  const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;
  console.log("レコーダー停止");
};

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://github.com/chrisdavidmills) 作（[GitHub のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone/)）。<sup>(英語)</sup>
- [simpl.info の MediaStream 収録のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://github.com/samdutton) 作。<sup>(英語)</sup>
- {{domxref("Navigator.getUserMedia()")}}
- [Dealing with huge MediaRecorder chunks](https://blog.addpipe.com/dealing-with-huge-mediarecorder-slices/) - addpipe.com (2024)
