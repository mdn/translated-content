---
title: "SpeechRecognition: start() メソッド"
short-title: start()
slug: Web/API/SpeechRecognition/start
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("Web Speech API")}}

**`start()`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のメソッドで、音声認識サービスを起動して（マイクまたは音声トラックからの）入力音声を待機し、その認識結果を返します。

## 構文

```js-nolint
start()
start(audioTrack)
```

### 引数

- `audioTrack` {{optional_inline}} {{experimental_inline}}
  - : 音声認識を実行する対象の {{domxref("MediaStreamTrack")}} インスタンス。指定がない場合、サービスは代わりにユーザーのマイクからの音声認識を試みます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : `audioTrack` が指定されており、かつ以下のうちの一つまたは両方が真の場合。
    - このトラックの {{domxref("MediaStreamTrack.kind", "kind")}} プロパティが `audio` ではない。
    - このトラックの {{domxref("MediaStreamTrack.readyState", "readyState")}} プロパティが `live` ではない。

## 例

### マイクからの音声認識

[音声カラーチェンジャー](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)の例では、 {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} コンストラクターを使用して新しい `SpeechRecognition` オブジェクトインスタンスを作成します。その後、`<button>` に `click` イベントハンドラーを設定し、ボタンがクリックされた際に音声認識サービスを開始し、ユーザーのマイクからの音声入力を待機します。

```js
const recognition = new SpeechRecognition();

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const startBtn = document.querySelector("button");

startBtn.onclick = () => {
  recognition.start();
  console.log("色のコマンドを受け付ける準備ができました。");
};
```

結果が正常に認識されると、 {{domxref("SpeechRecognition.result_event", "result")}} イベントが発生します。返された {{domxref("SpeechRecognitionEvent.results", "results")}} リスト内の最初の {{domxref("SpeechRecognitionResult")}} の最初の {{domxref("SpeechRecognitionAlternative")}} の {{domxref("SpeechRecognitionAlternative.transcript", "transcript")}} を取得することで、イベントオブジェクトから音声で読み上げられた色を抽出します。その後、 {{htmlelement("html")}} 要素の背景色をその色に設定します。

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `受信した結果: ${color}`;
  bg.style.backgroundColor = color;
};
```

### 音声トラックからの音声認識

このコード（[音声トラック認識デモ](https://mdn.github.io/dom-examples/web-speech-api/audio-track-recognition/)からの抜粋）は、音声トラックから音声を認識する方法を示しています。まず、新しい {{domxref("SpeechRecognition")}} インスタンスを作成し、その {{domxref("SpeechRecognition.lang", "lang")}} を `en-US` に設定します。次に、結果と診断情報を出力するための {{htmlelement("button")}} 要素と {{htmlelement("p")}} 要素への参照を取得します。

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const startBtn = document.querySelector("button");
const diagnostic = document.querySelector(".output");
```

次に、`click` イベントハンドラ－を `<button>` に追加します。クリックされると、{{domxref("HTMLAudioElement.Audio", "Audio()")}} コンストラクタ－を使用して新しい {{htmlelement("audio")}} 要素を作成し、MP3 ファイルを読み込みます。MP3 の再生準備が整うと（{{domxref("HTMLMediaElement.canplay_event", "canplay")}} イベントで判定）、 {{domxref("HTMLMediaElement.captureStream", "captureStream()")}} メソッドで {{domxref("MediaStream")}} としてキャプチャし、 {{domxref("MediaStream.getAudioTracks", "getAudioTracks()")}} で音声の {{domxref("MediaStreamTrack")}} を抽出します。

次に音声を再生し（認識を行うために必要）、`MediaStreamTrack` を `start()` メソッドに渡して認識を開始します。

```js
startBtn.addEventListener("click", () => {
  diagnostic.textContent = "";
  console.log("Loading audio track");
  const audioElement = new Audio("cheese-on-toast.mp3");
  audioElement.addEventListener("canplay", () => {
    const stream = audioElement.captureStream();
    const audioTrack = stream.getAudioTracks()[0];
    audioElement.play();
    recognition.start(audioTrack);
    console.log("Recognition started");
  });
});
```

認識された音声を出力するため、 {{domxref("SpeechRecognition.result_event", "result")}} イベントを監視します。イベント発生時に、返された {{domxref("SpeechRecognitionEvent.results", "results")}} リスト内の最初の {{domxref("SpeechRecognitionResult")}} に含まれる最初の {{domxref("SpeechRecognitionAlternative")}} の {{domxref("SpeechRecognitionAlternative.transcript", "transcript")}} を取得します。転写テキスト自体を出力先の `<p>` に表示し、信頼度評価をコンソールに記録します。

```js
recognition.addEventListener("result", (event) => {
  const speech = event.results[0][0].transcript;
  diagnostic.textContent = `音声認識結果: ${speech}.`;
  console.log(`信頼度: ${event.results[0][0].confidence}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
