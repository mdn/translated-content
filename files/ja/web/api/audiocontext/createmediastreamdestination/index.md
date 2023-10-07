---
title: AudioContext.createMediaStreamDestination()
slug: Web/API/AudioContext/createMediaStreamDestination
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }} インターフェイスの `createMediaStreamDestination()` メソッドは、[WebRTC](/ja/docs/WebRTC) {{domxref("MediaStream")}} と関連付けられた {{domxref("MediaStreamAudioDestinationNode")}} オブジェクトを生成します。この MediaStream はローカルファイルに格納されたり他のコンピュータに送信されたりする音声ストリームを表します。

{{domxref("MediaStream")}} はノードが生成されたときに作成され、{{domxref("MediaStreamAudioDestinationNode")}}の `stream` プロパティを通じてアクセスすることができます。このストリームは {{domxref("navigator.getUserMedia") }} で得られた `MediaStream` と同じような使い方ができます。例えば、`RTCPeerConnection` インターフェイスの `addStream()` メソッドでリモートの端末に送ることができます。

詳細は {{domxref("MediaStreamAudioDestinationNode")}} のページを参照してください。

## 構文

```js
var audioCtx = new AudioContext();
var destination = audioCtx.createMediaStreamDestination();
```

### 戻り値

{{domxref("MediaStreamAudioDestinationNode")}}

## 例

次の簡単な例では、{{domxref("MediaStreamAudioDestinationNode")}}と{{ domxref("OscillatorNode") }}と{{ domxref("MediaRecorder") }} (そのため現時点では、このサンプルは Firefox と Chrome でしか動作しません) を作成します。`MediaRecorder` は `MediaStreamDestinationNode` からの情報を記録するように設定されています。

ボタンをクリックするとオシレーター(振動子)が開始し、`MediaRecorder` も開始します。再びボタンを押して止めると、オシレーターと `MediaRecorder` の両方が停止します。`MediaRecorder` が停止すると `dataavailable` イベントが発火され、イベントデータが `chunks`配列にプッシュされます。その後、`stop` イベントが発火すると、新しい `blob` が opus タイプで作られます—そこには `chunks`配列のデータが書き込まれていて、その blob の URL を指す新しいウィンドウ(タブ)が開きます。

そこで opus ファイルの再生と保存ができます。

```html
<!doctype html>
<html>
  <head>
    <title>createMediaStreamDestination() demo</title>
  </head>
  <body>
    <h1>createMediaStreamDestination() demo</h1>

    <p>Encoding a pure sine wave to an Opus file</p>
    <button>Make sine wave</button>
    <audio controls></audio>
    <script>
      var b = document.querySelector("button");
      var clicked = false;
      var chunks = [];
      var ac = new AudioContext();
      var osc = ac.createOscillator();
      var dest = ac.createMediaStreamDestination();
      var mediaRecorder = new MediaRecorder(dest.stream);
      osc.connect(dest);

      b.addEventListener("click", function (e) {
        if (!clicked) {
          mediaRecorder.start();
          osc.start(0);
          e.target.innerHTML = "Stop recording";
          clicked = true;
        } else {
          mediaRecorder.stop();
          osc.stop(0);
          e.target.disabled = true;
        }
      });

      mediaRecorder.ondataavailable = function (evt) {
        // それぞれの chunk(blobs)を配列に入れる
        chunks.push(evt.data);
      };

      mediaRecorder.onstop = function (evt) {
        // blob を作成し開く
        var blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        document.querySelector("audio").src = URL.createObjectURL(blob);
      };
    </script>
  </body>
</html>
```

> **メモ:** Github で[実際に動作する例を閲覧](https://mdn.github.io/webaudio-examples/create-media-stream-destination/index.html)したり、[ソースコードを読む](https://github.com/mdn/webaudio-examples/blob/master/create-media-stream-destination/index.html)ことができます。

## 仕様

{{Specifications}}

## ブラウザー互換性

{{Compat("api.AudioContext.createMediaStreamDestination")}}

## 参考

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
