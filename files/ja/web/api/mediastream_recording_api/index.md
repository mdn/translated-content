---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
---

{{DefaultAPISidebar("MediaStream Recording")}}

**MediaStream Recording API** は、単に _Media Recording API_ または _MediaRecorder API_ と呼ばれることもありますが、[Media Capture and Streams API](/ja/docs/Web/API/Media_Streams_API) および [WebRTC API](/ja/docs/Web/API/WebRTC_API) と密接に関係しています。 MediaStream Recording API を使用すると、{{domxref("MediaStream")}} オブジェクトまたは {{domxref("HTMLMediaElement")}} オブジェクトによって生成されたデータを分析、処理、またはディスクへの保存のためにキャプチャすることができます。 また、驚くほど簡単に作業できます。

## 基本概念

MediaStream Recording API は、{{domxref("MediaRecorder")}} という 1 つの主要なインターフェイスで構成されています。 `MediaRecorder` は、{{domxref("MediaStream")}} からデータを取得して処理のためにユーザーに配信するというすべての作業を行います。 データは、`MediaRecorder` の作成時にすでに指定した形式で、一連の {{event("dataavailable")}} イベントによって配信されます。 その後、データをさらに処理するか、必要に応じてファイルに書き込むことができます。

### 記録プロセスの概要

ストリームを記録（recording、録音、録画）するプロセスは簡単です。

1. メディアデータのソースとして機能する {{domxref("MediaStream")}} または {{domxref("HTMLMediaElement")}}（{{HTMLElement("audio")}} 要素または {{HTMLElement("video")}} 要素の形式）を設定します。
2. ソースストリームと必要なオプション（コンテナの MIME タイプやトラックの必要なビットレートなど）を指定して、{{domxref("MediaRecorder")}} オブジェクトを作成します。
3. {{domxref("MediaRecorder.ondataavailable")}} に {{event("dataavailable")}} イベントのイベントハンドラを設定します。 データが利用可能になるたびにこれが呼び出されます。
4. ソースメディアが再生され、動画を録画する準備が整ったら、{{domxref("MediaRecorder.start()")}} を呼び出して録画を開始します。
5. {{event("dataavailable")}} イベントハンドラは準備ができたデータがあるたびに呼ばれます。 イベントは、`data` 属性を持ち、その値はメディアデータを含む {{domxref("Blob")}} です。 あなたは `dataavailable` イベントを発生させることができ、それによって最新のサウンドをあなたに届けるので、それをフィルターにかけたり、それを保存したりすることができます。
6. ソースメディアの再生が停止すると、録画は自動的に停止します。
7. {{domxref("MediaRecorder.stop()")}} を呼び出すことで、いつでも録画を停止できます。

> **メモ:** 記録されたメディアのスライスを含む個々の {{domxref("Blob")}} は、必ずしも個別に再生できるわけではありません。 再生する前にメディアを組み立て直す必要があります。

記録中に問題が発生した場合は、{{event("error")}} イベントが `MediaRecorder` に送られます。 {{domxref("MediaRecorder.onerror", "onerror")}} イベントハンドラを設定することで `error` イベントを監視できます。

ここでの例では、{{domxref("MediaStream")}}のソースとして HTML Canvas を利用し、9 秒後に録画を停止します。

```
var canvas = document.querySelector("canvas");

// Optional frames per second argument.
var stream = canvas.captureStream(25);
var recordedChunks = [];

console.log(stream);
var options = { mimeType: "video/webm; codecs=vp9" };
mediaRecorder = new MediaRecorder(stream, options);

mediaRecorder.ondataavailable = handleDataAvailable;
mediaRecorder.start();

function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download();
  } else {
    // ...
  }
}
function download() {
  var blob = new Blob(recordedChunks, {
    type: "video/webm"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}

// demo: to download after 9sec
setTimeout(event => {
  console.log("stopping");
  mediaRecorder.stop();
}, 9000);
```

### レコーダーの状態を調べて制御する

`MediaRecorder` オブジェクトのプロパティを使用して記録プロセスの状態を決定したり、{{domxref("MediaRecorder.pause", "pause()")}} および {{domxref("MediaRecorder.resume", "resume()")}} メソッドを使用してソースメディアの記録を一時停止したり再開したりすることもできます。

特定の MIME タイプがサポートされているかどうかを確認する必要がある場合は、それも可能です。 {{domxref("MediaRecorder.isTypeSupported()")}} を呼び出すだけです。

### 見込みがある入力ソースの調査

カメラやマイクの入力を記録することが目的の場合は、`MediaRecorder` の構築プロセスを開始する前に、使用可能な入力デバイスを調べてください。 そのためには、{{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} を呼び出して利用可能なメディアデバイスのリストを取得する必要があります。 その後、そのリストを調べて見込みがある入力ソースを特定し、さらに必要な基準に基づいてリストをフィルタリングすることもできます。

このコードスニペットでは、`enumerateDevices()` を使用して使用可能な入力デバイスを調べ、音声入力デバイスであるものを見つけて、{{HTMLElement("option")}} 要素を作成し、それを入力ソースピッカーを表す {{HTMLElement("select")}} 要素に追加します。

```js
navigator.mediaDevices.enumerateDevices()
.then(function(devices) {
  devices.forEach(function(device) {
    let menu = document.getElementById("inputdevices");
    if (device.kind == "audioinput") {
      let item = document.createElement("option");
      item.innerHTML = device.label;
      item.value = device.deviceId;
      menu.appendChild(item);
    }
  });
});
```

これと同じようなコードを使用して、ユーザーが使用したいデバイスのセットを制限することができます。

### 詳細については

MediaStream Recording API の使用方法の詳細については、[MediaStream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)を参照してください。 これは、API を使用してオーディオクリップを記録する方法を示します。 2 番目の記事の[メディア要素の記録](/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)では、{{HTMLElement("audio")}} 要素または {{HTMLElement("video")}} 要素からストリームを受信してキャプチャしたストリームを使用する方法（この場合は記録してローカルディスクに保存する方法）について説明します。

## 参照

- {{domxref("BlobEvent")}}
  - : メディアデータのチャンク（chunk、大きな塊）が記録され終えるたびに、`dataavailable` 型の {{domxref("BlobEvent")}} を使用して {{domxref("Blob")}} 形式で消費者に配信されます。
- {{domxref("MediaRecorder")}}
  - : MediaStream Recording API を実装する主要インタフェース。
- {{domxref("MediaRecorderErrorEvent")}}
  - : MediaStream Recording API によって投げられたエラーを表すインターフェース。 その {{domxref("MediaRecorderErrorEvent.error", "error")}} プロパティは、エラーが発生したことを示す {{domxref("DOMException")}} です。

## 仕様

| 仕様                                                                         | 状態                                         | コメント |
| ---------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#MediaRecorderAPI")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザー実装状況

### `MediaRecorder`

{{Compat("api.MediaRecorder")}}

## 関連情報

- [MediaStream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [メディア要素の記録](/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info の MediaStream Recording のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著（英語）
- {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}
- [Chrome および Firefox で動作中の HTML5 の Media Recorder API](https://addpipe.com/blog/mediarecorder-api/)（英語）
- Safari および Edge 用の [MediaRecorder ポリフィル](https://github.com/ai/audio-recorder-polyfill)（英語）
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): getUserMedia および MediaRecorder API を使用した HTML5 動画のキャプチャ/再生/ダウンロード（[GitHub のソース](https://github.com/chrisjohndigital/TutorRoom)）（英語）
- [簡単な動画録画デモ](http://codepen.io/anon/pen/gpmPzm)
- [高度なメディアストリームレコーダーのサンプル](https://quickblox.github.io/javascript-media-recorder/sample/)（英語）
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): MediaDevices と MediaStream Recording API を動画の録画に使用する HTML5 動画言語ラボウェブアプリ（[GitHub のソース](https://github.com/chrisjohndigital/OpenLang)）（英語）
- [Safari 技術プレビュー 73 で MediaStream Recorder API が利用可能に](https://addpipe.com/blog/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)（英語）
