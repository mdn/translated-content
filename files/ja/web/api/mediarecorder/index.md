---
title: MediaRecorder
slug: Web/API/MediaRecorder
---

{{APIRef("Media Recorder API")}}

[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) の **`MediaRecorder`** インターフェイスは、メディアを簡単に記録するための機能を提供します。 これは、{{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}} コンストラクタを使用して作成します。

## コンストラクタ

- {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}}
  - : 記録する {{domxref("MediaStream")}} を指定して、新しい `MediaRecorder` オブジェクトを作成します。 コンテナの MIME タイプ（ `"video/webm"` や `"video/mp4"` など）、音声トラックと動画トラックのビットレート、または単一の全体的なビットレートの設定などを行うためのオプションがあります。

## Properties

- {{domxref("MediaRecorder.mimeType")}} {{readonlyInline}}
  - : `MediaRecorder` オブジェクトの作成時にその記録コンテナとして選択した MIME タイプを返します。
- {{domxref("MediaRecorder.state")}} {{readonlyInline}}
  - : `MediaRecorder` オブジェクトの現在の状態（`inactive`（非活動）、`recording`（記録中）、`paused`（一時停止中））を返します。
- {{domxref("MediaRecorder.stream")}} {{readonlyInline}}
  - : `MediaRecorder` を作成したときにコンストラクタに渡したストリームを返します。
- {{domxref("MediaRecorder.ignoreMutedMedia")}}
  - : 入力 {{domxref("MediaStreamTrack")}} がミュートされたときに `MediaRecorder` インスタンスが入力を記録するかどうかを示します。 この属性が `false` の場合、`MediaRecorder` は音声には無音を、動画には黒のフレームを記録します。 デフォルトは `false` です。
- {{domxref("MediaRecorder.videoBitsPerSecond")}} {{readonlyInline}}
  - : 使用中の動画エンコードビットレートを返します。 これは、コンストラクタで指定したビットレートとは異なる場合があります（指定した場合）。
- {{domxref("MediaRecorder.audioBitsPerSecond")}} {{readonlyInline}}
  - : 使用中の音声エンコードビットレートを返します。 これは、コンストラクタで指定したビットレートとは異なる場合があります（指定した場合）。

## メソッド

- {{domxref("MediaRecorder.canRecordMimeType()", "MediaRecorder.isTypeSupported()")}}
  - : 与えられた MIME タイプを現在のユーザーエージェントがサポートしているかどうかを示す {{jsxref("Boolean")}} 値を返します。
- {{domxref("MediaRecorder.pause()")}}
  - : メディアの記録を一時停止します。
- {{domxref("MediaRecorder.requestData()")}}
  - : これまでに受信した保存データを含む {{domxref("Blob")}} を要求します（または最後に `requestData()` が呼び出されてから受信した）。 このメソッドを呼び出した後、記録は続行されますが、新しい `Blob` に格納されます。
- {{domxref("MediaRecorder.resume()")}}
  - : 一時停止したメディアの記録を再開します。
- {{domxref("MediaRecorder.start()")}}
  - : メディアの記録を開始します。 このメソッドには、オプションで、ミリ秒単位の値を指定して `timeslice` 引数を渡すことができます。 これが指定されている場合、メディアは単一の大きなチャンクにメディアを記録するというデフォルトのふるまいではなく、その期間の別々のチャンクにキャプチャされます。
- {{domxref("MediaRecorder.stop()")}}
  - : 記録を停止します。 この時点で、保存したデータの最後の `Blob` を含む {{event("dataavailable")}} イベントが発生します。 これ以上記録は行われません。

## イベントハンドラ

- {{domxref("MediaRecorder.ondataavailable")}}
  - : `timeslice` のミリ秒単位のメディアが記録されるたびに（または `timeslice` が指定されていない場合はメディア全体が記録されると）定期的にトリガされる {{event("dataavailable")}} イベントを処理するために呼び出されます。 {{domxref("BlobEvent")}} 型のイベントには、{{domxref("BlobEvent.data", "data")}} プロパティに記録済みメディアが含まれています。 その後、このイベントハンドラを使用して、その記録済みメディアのデータを収集して操作することができます。
- {{domxref("MediaRecorder.onerror")}}
  - : メディアの記録で発生したエラーの報告など、{{event("error")}} イベントを処理するために呼び出される {{event("Event_handlers", "event handler")}} です。 これらは記録を停止する致命的なエラーです。 受信したイベントは {{domxref("MediaRecorderErrorEvent")}} インターフェイスに基づいていて、その {{domxref("MediaRecorderErrorEvent.error", "error")}} プロパティには、発生した実際のエラーを説明する {{domxref("DOMException")}} が含まれています。
- {{domxref("MediaRecorder.onpause")}}
  - : メディアの記録が一時停止したときに発生する {{event("pause")}} イベントを処理するために呼び出される {{event("Event_handlers", "event handler")}} です。
- {{domxref("MediaRecorder.onresume")}}
  - : メディアの記録が一時停止後に再開したときに発生する {{event("resume")}} イベントを処理するために呼び出される {{event("Event_handlers", "event handler")}} です。
- {{domxref("MediaRecorder.onstart")}}
  - : メディアの記録を開始したときに発生する {{event("start")}} イベントを処理するために呼び出される {{event("Event_handlers", "event handler")}} です。
- {{domxref("MediaRecorder.onstop")}}
  - : {{domxref("MediaStream")}} の終了時、または {{domxref("MediaRecorder.stop()")}} メソッドの呼び出し後のいずれかに、メディアの記録が終了したときに発生する {{event("stop")}} イベントを処理するために呼び出される {{event("Event_handlers", "event handler")}} です。

## イベント

`addEventListener()` を使用するか、このインタフェースの `oneventname` プロパティにイベントリスナを割り当てることによって、これらのイベントを監視します。

- [`error`](/ja/docs/Web/API/MediaRecorder/error_event)
  - : エラーが発生したときに発生します。 例えば、記録が許可されていないか、サポートされていないコーデックを使用して試行したためです。
    [`onerror`](/ja/docs/Web/API/MediaRecorder/onerror) プロパティからも入手できます。

## 例

```js
if (navigator.mediaDevices) {
  console.log('getUserMedia supported.');

  var constraints = { audio: true };
  var chunks = [];

  navigator.mediaDevices.getUserMedia(constraints)
  .then(function(stream) {

    var mediaRecorder = new MediaRecorder(stream);

    visualize(stream);

    record.onclick = function() {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      record.style.background = "red";
      record.style.color = "black";
    }

    stop.onclick = function() {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("recorder stopped");
      record.style.background = "";
      record.style.color = "";
    }

    mediaRecorder.onstop = function(e) {
      console.log("data available after MediaRecorder.stop() called.");

      var clipName = prompt('Enter a name for your sound clip');

      var clipContainer = document.createElement('article');
      var clipLabel = document.createElement('p');
      var audio = document.createElement('audio');
      var deleteButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.innerHTML = "Delete";
      clipLabel.innerHTML = clipName;

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);

      audio.controls = true;
      var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      var audioURL = URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      deleteButton.onclick = function(e) {
        evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
    }

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
  })
  .catch(function(err) {
    console.log('The following error occurred: ' + err);
  })
}
```

> **メモ:** このコードサンプルは、ウェブディクタフォン（Web Dictaphone）のデモから着想を得たものです。 簡潔にするために一部の行は省略されています。 完全なコードについては[ソースを参照](https://github.com/mdn/web-dictaphone/)してください。

## 仕様

| 仕様                                                                         | 状態                                         | コメント |
| ---------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#MediaRecorderAPI")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [メディア要素の記録](/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info の MediaStream Recording のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12)　著。（英語）
- {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): MediaDevices と MediaStream Recording API を動画の録画に使用する HTML5 動画言語ラボウェブアプリ（[GitHub のソース](https://github.com/chrisjohndigital/OpenLang)）（英語）
