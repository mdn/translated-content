---
title: MediaRecorder
slug: Web/API/MediaRecorder
l10n:
  sourceCommit: a6390b5024f29bcd6bdab5eedade24e3b446b37b
---

{{APIRef("Media Recorder API")}}

**`MediaRecorder`** は [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API) のインターフェイスで、メディアを簡単に収録するための機能を提供します。 これは、{{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}} コンストラクターを使用して作成します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}}
  - : 収録する {{domxref("MediaStream")}} を指定して、新しい `MediaRecorder` オブジェクトを作成します。 コンテナーの MIME タイプ（`"video/webm"` や `"video/mp4"` など）、音声トラックと動画トラックのビットレート、または単一の全体的なビットレートの設定などを行うためのオプションがあります。

## インスタンスプロパティ

- {{domxref("MediaRecorder.mimeType")}} {{ReadOnlyInline}}
  - : `MediaRecorder` オブジェクトの作成時にその収録コンテナーとして選択した MIME タイプを返します。
- {{domxref("MediaRecorder.state")}} {{ReadOnlyInline}}
  - : `MediaRecorder` オブジェクトの現在の状態（非活動 (`inactive`)、収録中 (`recording`)、一時停止中 (`paused`)）を返します。
- {{domxref("MediaRecorder.stream")}} {{ReadOnlyInline}}
  - : `MediaRecorder` を作成したときにコンストラクターに渡したストリームを返します。
- {{domxref("MediaRecorder.videoBitsPerSecond")}} {{ReadOnlyInline}}
  - : 使用中の動画エンコードビットレートを返します。 これは、コンストラクターで指定したビットレートとは異なる場合があります（指定した場合）。
- {{domxref("MediaRecorder.audioBitsPerSecond")}} {{ReadOnlyInline}}
  - : 使用中の音声エンコードビットレートを返します。 これは、コンストラクターで指定したビットレートとは異なる場合があります（指定した場合）。

## 静的メソッド

- {{domxref("MediaRecorder.isTypeSupported()")}}
  - : 静的メソッドで、指定された MIME メディア種別が現在のユーザーエージェントで対応しているかどうかを示す `true` または `false` 値を返します。

## インスタンスメソッド

- {{domxref("MediaRecorder.pause()")}}
  - : メディアの収録を一時停止します。
- {{domxref("MediaRecorder.requestData()")}}
  - : これまでに受信した保存データを含む {{domxref("Blob")}} を要求します（または最後に `requestData()` が呼び出されてから受信した）。 このメソッドを呼び出した後、収録は続行されますが、新しい `Blob` に格納されます。
- {{domxref("MediaRecorder.resume()")}}
  - : 一時停止したメディアの収録を再開します。
- {{domxref("MediaRecorder.start()")}}
  - : メディアの収録を開始します。 このメソッドには、オプションで、ミリ秒単位の値を指定して `timeslice` 引数を渡すことができます。 これが指定されている場合、メディアは単一の大きなチャンクにメディアを収録するというデフォルトのふるまいではなく、その期間の別々のチャンクにキャプチャされます。
- {{domxref("MediaRecorder.stop()")}}
  - : 収録を停止します。 この時点で、保存したデータの最後の `Blob` を含む {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントが発生します。 これ以上収録は行われません。

## イベント

これらのイベントを待ち受けするには、 `addEventListener()` を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを割り当てるかしてください。

- [`dataavailable`](/ja/docs/Web/API/MediaRecorder/dataavailable_event)
  - : `timeslice` のミリ秒単位のメディアが収録されるたびに（または `timeslice` が指定されていない場合はメディア全体が収録されると）定期的に起動されます。このイベントは {{domxref("BlobEvent")}} 型であり、収録されたメディアを {{domxref("BlobEvent.data", "data")}} プロパティに保持しています。
- [`error`](/ja/docs/Web/API/MediaRecorder/error_event)
  - : 録画を停止させる致命的なエラーがあったときに発行されます。このイベントは {{domxref("MediaRecorderErrorEvent")}} インターフェイスに基づいており、その {{domxref("MediaRecorderErrorEvent.error", "error")}} プロパティには、実際に発生したエラーを説明する {{domxref("DOMException")}} が含まれています。
- [`pause`](/ja/docs/Web/API/MediaRecorder/pause_event)
  - : メディアの収録が一時停止したときに発生します。
- [`resume`](/ja/docs/Web/API/MediaRecorder/resume_event)
  - : メディアの収録が一時停止後に再開したときに発生します。
- [`start`](/ja/docs/Web/API/MediaRecorder/start_event)
  - : メディアの収録を開始したときに発生します。
- [`stop`](/ja/docs/Web/API/MediaRecorder/stop_event)
  - : {{domxref("MediaStream")}} が終了したか、または {{domxref("MediaRecorder.stop()")}} メソッドが呼び出された場合のいずれかでメディアの収録が終了したときに発生します。
- [`warning`](/ja/docs/Web/API/MediaRecorder) {{deprecated_inline}}
  - : メディアの収録に致命的でないエラーが発生したとき、または {{domxref("MediaRecorder.onwarning()")}} メソッドが呼び出された後に発行されます。

## 例

```js
if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");

  const constraints = { audio: true };
  let chunks = [];

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);

      visualize(stream);

      record.onclick = () => {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        record.style.background = "red";
        record.style.color = "black";
      };

      stop.onclick = () => {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        record.style.background = "";
        record.style.color = "";
      };

      mediaRecorder.onstop = (e) => {
        console.log("data available after MediaRecorder.stop() called.");

        const clipName = prompt("Enter a name for your sound clip");

        const clipContainer = document.createElement("article");
        const clipLabel = document.createElement("p");
        const audio = document.createElement("audio");
        const deleteButton = document.createElement("button");

        clipContainer.classList.add("clip");
        audio.setAttribute("controls", "");
        deleteButton.textContent = "Delete";
        clipLabel.textContent = clipName;

        clipContainer.appendChild(audio);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        soundClips.appendChild(clipContainer);

        audio.controls = true;
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        chunks = [];
        const audioURL = URL.createObjectURL(blob);
        audio.src = audioURL;
        console.log("recorder stopped");

        deleteButton.onclick = (e) => {
          const evtTgt = e.target;
          evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        };
      };

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };
    })
    .catch((err) => {
      console.error(`The following error occurred: ${err}`);
    });
}
```

> [!NOTE]
> このコードサンプルは、ウェブディクタフォン (Web Dictaphone) のデモから着想を得たものです。 簡潔にするために一部の行は省略されています。 完全なコードについては[ソースを参照](https://github.com/mdn/web-dictaphone/)してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + ウェブオーディオ API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)）。（英語）
- [メディア要素の収録](/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info の MediaStream Recording のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): MediaDevices と MediaStream 収録 API を動画の録画に使用する HTML5 動画言語ラボウェブアプリ（[GitHub のソース](https://github.com/chrisjohndigital/OpenLang)）（英語）
