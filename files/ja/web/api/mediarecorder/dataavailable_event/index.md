---
title: MediaRecorder.ondataavailable
slug: Web/API/MediaRecorder/dataavailable_event
original_slug: Web/API/MediaRecorder/ondataavailable
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.ondataavailable`** イベントハンドラ（[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は {{event("dataavailable")}} イベントを処理します。 これにより、{{domxref("Blob")}} データが使用可能になったことに応じてコードを実行できます。

`dataavailable` イベントは、`MediaRecorder` がメディアデータをアプリで使用するために引き渡すときに発生します。 データはデータを含む {{domxref("Blob")}} オブジェクトで提供されます。 これは次の 4 つの状況で発生します。

- メディアストリームが終了すると、`ondataavailable` ハンドラにまだ引き渡されていないメディアデータはすべて単一の {{domxref("Blob")}} で渡されます。
- {{domxref("MediaRecorder.stop()")}} を呼び出すと、記録を開始してから、または最後に `dataavailable` イベントが発生してからキャプチャされたすべてのメディアデータが {{domxref("Blob")}} で引き渡されます。 この後、キャプチャは終了します。
- {{domxref("MediaRecorder.requestData()")}} を呼び出すと、記録を開始してから、または最後に `dataavailable` イベントが発生してからキャプチャされたすべてのメディアデータが引き渡されます。 その後、新しい `Blob` が作成され、メディアのキャプチャがその blob に対して続行されます。
- メディアキャプチャを開始した {{domxref("MediaRecorder.start()")}} メソッドに `timeslice` プロパティを渡した場合は、`timeslice` ミリ秒ごとに `dataavailable` イベントが発生します。 つまり、各 blob は特定の期間を持つことになります（最後の blob を除いてで、最後のイベント以降に残っているものは何でもということになるので、これはもっと短いかもしれません）。 そのため、メソッド呼び出しが次のようになっていれば — `recorder.start(1000);` — `dataavailable` イベントはメディアキャプチャの毎秒後に発生し、イベントハンドラは一秒の長さのメディアデータの blob で毎秒呼ばれるでしょう。 {{domxref("MediaRecorder.stop()")}} および {{domxref("MediaRecorder.requestData()")}} と共に `timeslice` を使用して、複数の同じ長さの blob と他の短い blob を生成することもできます。

> **メモ:** メディアデータを含む {{domxref("Blob")}} は、{{event("dataavailable")}} イベントの `data` プロパティで利用できます。

## 構文

```
MediaRecorder.ondataavailable = function(event) { ... }
MediaRecorder.addEventListener('dataavailable', function(event) { ... })
```

## 例

```js
...
  var chunks = [];

  mediaRecorder.onstop = function(e) {
    console.log("MediaRecorder.stop() 呼び出し後に利用可能なデータ。");

    var audio = document.createElement('audio');
    audio.controls = true;
    var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    var audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;
    console.log("レコーダー停止");
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

...
```

## 仕様

| 仕様                                                                                                                                             | 状態                                         | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-ondataavailable", "MediaRecorder.ondataavailable")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.ondataavailable")}}

## 関連情報

- [Using the MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
