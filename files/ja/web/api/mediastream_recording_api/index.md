---
title: MediaStream 収録 API
slug: Web/API/MediaStream_Recording_API
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{DefaultAPISidebar("MediaStream Recording")}}

**MediaStream 収録 API** (MediaStream Recording API) は、単に _Media Recording API_ または _MediaRecorder API_ と呼ばれることもありますが、[メディアキャプチャとストリーム API](/ja/docs/Web/API/Media_Capture_and_Streams_API) および [WebRTC API](/ja/docs/Web/API/WebRTC_API) と密接に関係しています。 MediaStream 収録 API を使用すると、{{domxref("MediaStream")}} オブジェクトまたは {{domxref("HTMLMediaElement")}} オブジェクトによって生成されたデータを分析、処理、またはディスクへの保存のためにキャプチャすることができます。 また、驚くほど簡単に作業できます。

## 基本概念

MediaStream 収録 API は、{{domxref("MediaRecorder")}} という 1 つの主要なインターフェイスで構成されており、これが {{domxref("MediaStream")}} からデータを取得して処理のためにユーザーに配信するというすべての作業を行います。 データは、`MediaRecorder` の作成時にすでに指定した形式で、一連の {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントによって配信されます。 その後、データをさらに処理するか、必要に応じてファイルに書き込むことができます。

### 収録プロセスの概要

ストリームを収録（recording、録音、録画）するプロセスは簡単です。

1. メディアデータのソースとして機能する {{domxref("MediaStream")}} または {{domxref("HTMLMediaElement")}}（{{HTMLElement("audio")}} 要素または {{HTMLElement("video")}} 要素の形式）を設定します。
2. ソースストリームと必要なオプション（コンテナーの MIME タイプやトラックの必要なビットレートなど）を指定して、{{domxref("MediaRecorder")}} オブジェクトを作成します。
3. {{domxref("MediaRecorder.dataavailable_event", "ondataavailable")}} に {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントのイベントハンドラーを設定します。 データが利用可能になるたびにこれが呼び出されます。
4. ソースメディアが再生され、動画を録画する準備が整ったら、{{domxref("MediaRecorder.start()")}} を呼び出して録画を開始します。
5. {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} イベントハンドラーは準備ができたデータがあるたびに呼ばれます。 イベントは、`data` 属性を持ち、その値はメディアデータを含む {{domxref("Blob")}} です。 あなたは `dataavailable` イベントを発生させることができ、それによって最新のサウンドをあなたに届けるので、それをフィルターにかけたり、それを保存したりすることができます。
6. ソースメディアの再生が停止すると、録画は自動的に停止します。
7. {{domxref("MediaRecorder.stop()")}} を呼び出すことで、いつでも録画を停止できます。

> [!NOTE]
> 収録されたメディアのスライスを含む個々の {{domxref("Blob")}} は、必ずしも個別に再生できるわけではありません。 再生する前にメディアを組み立て直す必要があります。

収録中に問題が発生した場合は、 {{domxref("MediaRecorder/error_event", "error")}} イベントが `MediaRecorder` に送られます。 {{domxref("MediaRecorder.error_event", "onerror")}} イベントハンドラーを設定することで `error` イベントを監視できます。

ここでの例では、 {{domxref("MediaStream")}} のソースとして HTML キャンバスを利用し、9 秒後に録画を停止します。

```js
const canvas = document.querySelector("canvas");

// Optional frames per second argument.
const stream = canvas.captureStream(25);
const recordedChunks = [];

console.log(stream);
const options = { mimeType: "video/webm; codecs=vp9" };
const mediaRecorder = new MediaRecorder(stream, options);

mediaRecorder.ondataavailable = handleDataAvailable;
mediaRecorder.start();

function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download();
  } else {
    // …
  }
}
function download() {
  const blob = new Blob(recordedChunks, {
    type: "video/webm",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}

// demo: to download after 9sec
setTimeout((event) => {
  console.log("stopping");
  mediaRecorder.stop();
}, 9000);
```

### レコーダーの状態を調べて制御する

`MediaRecorder` オブジェクトのプロパティを使用して収録プロセスの状態を決定したり、{{domxref("MediaRecorder.pause", "pause()")}} および {{domxref("MediaRecorder.resume", "resume()")}} メソッドを使用してソースメディアの収録を一時停止したり再開したりすることもできます。

特定の MIME タイプがサポートされているかどうかを確認する必要がある場合は、それも可能です。 {{domxref("MediaRecorder.isTypeSupported()")}} を呼び出すだけです。

### 見込みがある入力ソースの調査

カメラやマイクの入力を収録することが目的の場合は、`MediaRecorder` の構築プロセスを開始する前に、使用可能な入力機器を調べてください。 そのためには、{{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} を呼び出して利用可能なメディア機器のリストを取得する必要があります。 その後、そのリストを調べて見込みがある入力ソースを特定し、さらに必要な基準に基づいてリストをフィルタリングすることもできます。

このコードスニペットでは、`enumerateDevices()` を使用して使用可能な入力機器を調べ、音声入力機器であるものを見つけて、{{HTMLElement("option")}} 要素を作成し、それを入力ソースピッカーを表す {{HTMLElement("select")}} 要素に追加します。

```js
navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices.forEach((device) => {
    const menu = document.getElementById("inputdevices");
    if (device.kind === "audioinput") {
      const item = document.createElement("option");
      item.textContent = device.label;
      item.value = device.deviceId;
      menu.appendChild(item);
    }
  });
});
```

これと同じようなコードを使用して、ユーザーが使用したい機器のセットを制限することができます。

### 詳細については

MediaStream 収録 API の使用方法の詳細については、[MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)を参照してください。 これは、API を使用してオーディオクリップを収録する方法を示します。 2 番目の記事の[メディア要素の収録](/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)では、{{HTMLElement("audio")}} 要素または {{HTMLElement("video")}} 要素からストリームを受信してキャプチャしたストリームを使用する方法（この場合は収録してローカルディスクに保存する方法）について説明します。

## リファレンス

- {{domxref("BlobEvent")}}
  - : メディアデータのチャンク（chunk、大きな塊）が収録され終えるたびに、`dataavailable` 型の {{domxref("BlobEvent")}} を使用して {{domxref("Blob")}} 形式で消費者に配信されます。
- {{domxref("MediaRecorder")}}
  - : MediaStream 収録 API を実装する主要インターフェイス。
- {{domxref("MediaRecorderErrorEvent")}}
  - : MediaStream 収録 API によって投げられたエラーを表すインターフェイス。 その {{domxref("MediaRecorderErrorEvent.error", "error")}} プロパティは、エラーが発生したことを示す {{domxref("DOMException")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [メディア要素の収録](/ja/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info の MediaStream Recording のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著（英語）
- {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}
- [Chrome および Firefox で動作中の HTML5 の Media Recorder API](https://addpipe.com/blog/mediarecorder-api/)（英語）
- Safari および Edge 用の [MediaRecorder ポリフィル](https://github.com/ai/audio-recorder-polyfill)（英語）
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): getUserMedia および MediaRecorder API を使用した HTML 動画のキャプチャ/再生/ダウンロード（[GitHub のソース](https://github.com/chrisjohndigital/TutorRoom)）（英語）
- [簡単な動画録画デモ](https://codepen.io/anon/pen/gpmPzm)
- [高度なメディアストリームレコーダーのサンプル](https://quickblox.github.io/javascript-media-recorder/sample/)（英語）
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): MediaDevices と MediaStream 収録 API を動画の録画に使用する HTML5 動画言語ラボウェブアプリ（[GitHub のソース](https://github.com/chrisjohndigital/OpenLang)）（英語）
- [Safari 技術プレビュー 73 で MediaStream 収録 API が利用可能に](https://blog.addpipe.com/safari-technology-preview-73-adds-limited-mediastream-recorder-api-support/)（英語）
