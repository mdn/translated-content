---
title: "AudioContext: createMediaStreamDestination() メソッド"
short-title: createMediaStreamDestination()
slug: Web/API/AudioContext/createMediaStreamDestination
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Web Audio API") }}

`createMediaStreamDestination()` は {{ domxref("AudioContext") }} インターフェイスのメソッドで、 [WebRTC](/ja/docs/Web/API/WebRTC_API) の {{domxref("MediaStream")}} と関連付けられた {{domxref("MediaStreamAudioDestinationNode")}} オブジェクトを生成します。この MediaStream はローカルファイルに格納されたり他のコンピューターに送信されたりする音声ストリームを表します。

{{domxref("MediaStream")}} はノードが生成されたときに作成され、{{domxref("MediaStreamAudioDestinationNode")}}の `stream` プロパティを通じてアクセスすることができます。このストリームは {{domxref("navigator.getUserMedia") }} で得られた `MediaStream` と同じような使い方ができます。例えば、`RTCPeerConnection` インターフェイスの `addStream()` メソッドでリモートの端末に送ることができます。

詳細は {{domxref("MediaStreamAudioDestinationNode")}} のページを参照してください。

## 構文

```js-nolint
createMediaStreamDestination()
```

### 引数

なし。

### 返値

{{domxref("MediaStreamAudioDestinationNode")}} です。

## 例

次の簡単な例では、{{domxref("MediaStreamAudioDestinationNode")}} と {{ domxref("OscillatorNode") }} と {{ domxref("MediaRecorder") }} (そのため現時点では、このサンプルは Firefox と Chrome でしか動作しません) を作成します。`MediaRecorder` は `MediaStreamDestinationNode` からの情報を記録するように設定されています。

ボタンをクリックするとオシレーター（振動子）が開始し、`MediaRecorder` も開始します。再びボタンを押して止めると、オシレーターと `MediaRecorder` の両方が停止します。`MediaRecorder` が停止すると `dataavailable` イベントが発火され、イベントデータが `chunks`配列にプッシュされます。その後、`stop` イベントが発火すると、新しい `blob` が opus タイプで作られます—そこには `chunks`配列のデータが書き込まれていて、その blob の URL を指す新しいウィンドウ（タブ）が開きます。

そこで opus ファイルの再生と保存ができます。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>createMediaStreamDestination() demo</title>
  </head>
  <body>
    <h1>createMediaStreamDestination() demo</h1>

    <p>Encoding a pure sine wave to an Opus file</p>
    <button>Make sine wave</button>
    <audio controls></audio>
    <script>
      const b = document.querySelector("button");
      let clicked = false;
      const chunks = [];
      const ac = new AudioContext();
      const osc = ac.createOscillator();
      const dest = ac.createMediaStreamDestination();
      const mediaRecorder = new MediaRecorder(dest.stream);
      osc.connect(dest);

      b.addEventListener("click", (e) => {
        if (!clicked) {
          mediaRecorder.start();
          osc.start(0);
          e.target.textContent = "Stop recording";
          clicked = true;
        } else {
          mediaRecorder.stop();
          osc.stop(0);
          e.target.disabled = true;
        }
      });

      mediaRecorder.ondataavailable = (evt) => {
        // それぞれのチャンク (blob) を配列に入れる
        chunks.push(evt.data);
      };

      mediaRecorder.onstop = (evt) => {
        // blob を作成し開く
        const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
        document.querySelector("audio").src = URL.createObjectURL(blob);
      };
    </script>
  </body>
</html>
```

> [!NOTE]
> Github で[実際に動作する例を閲覧](https://mdn.github.io/webaudio-examples/create-media-stream-destination/index.html)したり、[ソースコードを読む](https://github.com/mdn/webaudio-examples/blob/master/create-media-stream-destination/index.html)ことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
