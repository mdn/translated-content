---
title: メディア要素での収録
slug: Web/API/MediaStream_Recording_API/Recording_a_media_element
---

{{DefaultAPISidebar("MediaStream Recording")}}

MediaStream 収録 API の使用の記事では、 {{domxref("MediaRecorder")}} インターフェイスを使用して {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}} からたハードウェアデバイスによって生成された {{domxref("MediaStream")}} をキャプチャする方法について説明しましたが、記録する `MediaStream` のソースとして HTML メディア要素（{{HTMLElement("audio")}} または {{HTMLElement("video")}}）も使用できます。 この記事では、それを実現する例を見ていきます。

## メディア要素の収録の例

### HTML

```html hidden
<p>
  Click the "Start Recording" button to begin video recording for a few seconds.
  You can stop recording by clicking the "Stop Recording" button. The "Download"
  button will download the received data (although it's in a raw, unwrapped form
  that isn't very useful).
</p>
<br />
```

まずは HTML の要点を見てみましょう。 これ以上のものはありませんが、アプリのコア操作の一部ではなく、単なる情報提供です。

```html
<div class="left">
  <div id="startButton" class="button">Start Recording</div>
  <h2>Preview</h2>
  <video id="preview" width="160" height="120" autoplay muted></video>
</div>
```

2 つの欄で主要なインターフェースを提示します。 左欄には、Start（開始）ボタンと動画プレビューを表示する {{HTMLElement("video")}} 要素があります。 これは、ユーザーのカメラが見ている動画です。 [`autoplay`](/ja/docs/Web/HTML/Element/video#autoplay) 属性は、カメラからストリームが到着したらすぐに表示するために使用し、[`muted`](/ja/docs/Web/HTML/Element/video#muted) 属性は、ユーザーのマイクからの音声をスピーカーに出力しないように使用していることに注意してください。 出力すると醜いフィードバックループ（ハウリング）を引き起こします。

```html
<div class="right">
  <div id="stopButton" class="button">Stop Recording</div>
  <h2>Recording</h2>
  <video id="recording" width="160" height="120" controls></video>
  <a id="downloadButton" class="button"> Download </a>
</div>
```

右欄には、Stop（停止）ボタンと収録された動画の再生に使用する `<video>` 要素があります。 再生パネルには `autoplay` を設定せずに（メディアが到着しても再生が開始されない）、[`controls`](/ja/docs/Web/HTML/Element/video#controls) を設定して、再生や一時停止などのユーザーコントロールを表示するように指示しています。

再生要素の下には、収録した動画をダウンロードするためのボタンがあります。

```html hidden
<div class="bottom">
  <pre id="log"></pre>
</div>
```

```css hidden
body {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}

video {
  margin-top: 2px;
  border: 1px solid black;
}

.button {
  cursor: pointer;
  display: block;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  text-decoration: none;
}

h2 {
  margin-bottom: 4px;
}

.left {
  margin-right: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.right {
  margin-left: 10px;
  float: left;
  width: 160px;
  padding: 0px;
}

.bottom {
  clear: both;
  padding-top: 10px;
}
```

それでは、JavaScript コードを見てみましょう。 結局のところ、これがアクションの大部分が起こるところです！

### グローバル変数の設定

必要なグローバル変数をいくつか設定することから始めます。

```js
let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");

let recordingTimeMS = 5000;
```

これらのほとんどは、私たちが取り組む必要がある要素への参照です。 最後の `recordingTimeMS` は 5000 ミリ秒（5 秒）に設定されています。 これは、収録する動画の長さを指定します。

### ユーティリティ関数

次に、後で使用するユーティリティ関数をいくつか作成します。

```js
function log(msg) {
  logElement.innerHTML += `${msg}\n`;
}
```

`log()` 関数は、ユーザーと情報を共有できるように、テキスト文字列を {{HTMLElement("div")}} に出力するために使用します。 それほどきれいではありませんが、この仕事は私たちの目的のために行われます。

```js
function wait(delayInMS) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
```

`wait()` 関数は、指定したミリ秒数が経過すると解決する新しい {{jsxref("Promise")}} を返します。 タイムアウトハンドラー関数としてプロミスの解決ハンドラーを指定して、{{domxref("setTimeout()")}} を呼び出す[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使用して動作します。 これにより、タイムアウトを使用するときにプロミス構文を使用できます。 これは、後で説明するように、プロミスを連鎖させるときに非常に便利です。

### メディア収録の開始

`startRecording()` 関数は収録プロセスの開始を処理します。

```js
function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = (event) => data.push(event.data);
  recorder.start();
  log(`${recorder.state} for ${lengthInMS / 1000} seconds…`);

  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = (event) => reject(event.name);
  });

  let recorded = wait(lengthInMS).then(() => {
    if (recorder.state === "recording") {
      recorder.stop();
    }
  });

  return Promise.all([stopped, recorded]).then(() => data);
}
```

`startRecording()` は 2 つの入力引数を取ります。 収録元の {{domxref("MediaStream")}} と記録するミリ秒単位の長さです。 指定されたミリ秒数以下のメディアを常に収録しますが、その時間に達する前にメディアが停止すると、{{domxref("MediaRecorder")}} も自動的に収録を停止します。

- 2 行目
  - : 入力ストリーム (`stream`) の収録を処理する `MediaRecorder` を作成します。
- 3 行目
  - : 空の配列 `data` を作成します。 これは、{{domxref("MediaRecorder.dataavailable_event", "ondataavailable")}} イベントハンドラーに提供されたメディアデータの {{domxref("Blob")}} を保持するために使用します。
- 5 行目
  - : {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントのハンドラーを設定します。 受信したイベントの `data` プロパティはメディアデータを含む {{domxref("Blob")}} です。 イベントハンドラーは単純に `Blob` を `data` 配列にプッシュ（末尾に追加）します。
- 6〜7 行目
  - : {{domxref("MediaRecorder.start", "recorder.start()")}} を呼び出して収録処理を開始し、`recorder` の更新された状態と収録される秒数とともにメッセージをログに出力します。
- 9〜12 行目
  - : `stopped` という名前の新しい {{jsxref("Promise")}} を作成します。 これは、`MediaRecorder` の {{domxref("MediaRecorder.stop_event", "onstop")}} イベントハンドラーが呼び出されると解決し、 {{domxref("MediaRecorder.error_event", "onerror")}} イベントハンドラーが呼び出されると拒否します。 拒否ハンドラーは、発生したエラーの名前を入力として受け取ります。
- 14〜16 行目
  - : `recorded` という名前の新しい `Promise` を作成します。 これは、指定されたミリ秒数が経過すると解決します。 解決すると、`MediaRecorder` が収録中の場合は停止します。
- 18〜22 行目
  - : これらの行は、2 つの `Promise`（`stopped` と `recorded`）の両方が解決したときに満たされる新しい `Promise` を作成します。 それが解決すると、配列データは `startRecording(`) によってその呼び出し元に返されます。

### 入力ストリームの停止

`stop()` 関数は単に入力メディアを停止します。

```js
function stop(stream) {
  stream.getTracks().forEach((track) => track.stop());
}
```

これは {{domxref("MediaStream.getTracks()")}} を呼び出し、{{jsxref("Array.forEach", "forEach()")}} を使用してストリーム内の各トラックの {{domxref("MediaStreamTrack.stop()")}} を呼び出すことによって機能します。

### 入力ストリームを取得してレコーダーを設定

それでは、この例で最も複雑なコードを見てみましょう。 開始ボタンをクリックしたときのイベントハンドラーです。

```js
startButton.addEventListener(
  "click",
  () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        preview.srcObject = stream;
        downloadButton.href = stream;
        preview.captureStream =
          preview.captureStream || preview.mozCaptureStream;
        return new Promise((resolve) => (preview.onplaying = resolve));
      })
      .then(() => startRecording(preview.captureStream(), recordingTimeMS))
      .then((recordedChunks) => {
        let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
        recording.src = URL.createObjectURL(recordedBlob);
        downloadButton.href = recording.src;
        downloadButton.download = "RecordedVideo.webm";

        log(
          `Successfully recorded ${recordedBlob.size} bytes of ${recordedBlob.type} media.`,
        );
      })
      .catch((error) => {
        if (error.name === "NotFoundError") {
          log("Camera or microphone not found. Can't record.");
        } else {
          log(error);
        }
      });
  },
  false,
);
```

{{domxref("Element/click_event", "click")}} イベントが発生すると、次のようになります。

- 2〜4 行目
  - : {{domxref("MediaDevices.getUserMedia")}} は、動画トラックと音声トラックの両方を持つ新しい {{domxref("MediaStream")}} を要求するために呼び出します。 これが収録するストリームです。
- 5〜9 行目
  - : `getUserMedia()` から返されたプロミスが解決すると、プレビューの {{HTMLElement("video")}} 要素の {{domxref("HTMLMediaElement.srcObject","srcObject")}} プロパティを入力ストリームに設定し、ユーザーのカメラでキャプチャしている動画をプレビューボックスに表示します。 `<video>` 要素はミュートしているので、音声は再生しません。 "Download"（ダウンロード）ボタンのリンクも、ストリームを参照するように設定します。 次に、8 行目では、 `preview.captureStream()` で `preview.mozCaptureStream()` を呼び出すように手配して、コードが Firefox で動作するようにします。 {{domxref("HTMLMediaElement.captureStream()")}} メソッドが接頭辞付きだからです。その後、プレビュー動画の再生開始時に解決する新しい {{jsxref("Promise")}} を作成して返します。
- 10 行目
  - : プレビュー動画の再生が開始されると、収録するメディアがあることがわかります。 したがって、先ほど作成した [`startRecording()`](#メディア収録の開始) 関数を呼び出し、プレビュー動画ストリーム（収録するソースメディアとして）と、 `recordingTimeMS`（収録するメディアのミリ秒数として）を渡します。 前述のように、`startRecording()` は、収録が完了すると、解決ハンドラーが呼び出される {{jsxref("Promise")}}（収録されたメディアデータのチャンクを含む {{domxref("Blob")}} オブジェクトの配列を入力として受け取る）を返します。
- 11〜15 行目

  - : 収録プロセスの解決ハンドラーは、ローカルに `recordedChunks` として知られるメディアデータの `Blob` の配列を入力として受け取ります。 最初にすることは、{{domxref("Blob.Blob", "Blob()")}} コンストラクターがオブジェクトの配列を 1 つのオブジェクトに連結するという事実を利用して、チャンクを MIME タイプが `"video/webm"` の単一の {{domxref("Blob")}} にマージすることです。 次に、{{domxref("URL.createObjectURL()")}} を使用して `Blob` を参照する URL を作成します。 これは、ダウンロードされた動画再生要素の [`src`](/ja/docs/Web/HTML/Element/video#src) 属性の値（`Blob` から動画を再生できるようにする）とダウンロードボタンのリンクのターゲットになります。

    その後、ダウンロードボタンの [`download`](/ja/docs/Web/HTML/Element/a#download) 属性が設定されます。 `download` 属性は論理値にすることができますが、ダウンロードするファイルの名前として使用する文字列に設定することもできます。 そのため、ダウンロードリンクの `download` 属性を `"RecordedVideo.webm"` に設定することで、ボタンをクリックすると内容が収録された動画である `"RecordedVideo.webm"` という名前のファイルをダウンロードするようにブラウザーに指示します。

- 17〜18 行目
  - : 記録されたメディアのサイズと種類は、2 つの動画とダウンロードボタンの下のログ領域に出力されます。
- 20 行目
  - : すべての `Promise` の `catch()` は、`log()` 関数を呼び出すことによってエラーをロギング領域に出力します。

### 停止ボタンの処理

最後のコードでは、{{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して停止ボタンの {{domxref("Element/click_event", "click")}} イベントのハンドラーを追加します。

```js
stopButton.addEventListener(
  "click",
  () => {
    stop(preview.srcObject);
  },
  false,
);
```

これは先ほど説明した [`stop()`](#入力ストリームの停止) 関数を呼び出すだけです。

### 結果

残りの HTML と上に示されていない CSS をすべてまとめると、次のようになり、動作します。

{{ EmbedLiveSample('Example_of_recording_a_media_element', 600, 440) }}

{{LiveSampleLink("Example_of_recording_a_media_element", "こちらでデモ全体を見る")}}ことができ、ブラウザの開発者ツールを使ってページを検査し、 API が使用されている方法の説明には重要ではないので上に表示されない部分も含めて、すべてのコードを見てみることができます。

## 関連情報

- [MediaStream 収録 API](/ja/docs/Web/API/MediaStream_Recording_API)
- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API)
