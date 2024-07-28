---
title: OfflineAudioContext.startRendering()
slug: Web/API/OfflineAudioContext/startRendering
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{ APIRef("Web Audio API") }}

`startRendering()` は {{ domxref("OfflineAudioContext") }} のメソッドで、オーディオグラフのレンダリングを開始します。このインターフェイスは、現在の接続と現在のスケジュール変更を考慮して、音声グラフのレンダリングを開始します。

{{domxref("OfflineAudioContext/complete_event", "complete")}} イベント（{{domxref("OfflineAudioCompletionEvent")}} 型）がレンダリングが完了すると発生し、その結果である {{domxref("AudioBuffer")}} が `renderedBuffer` プロパティに格納されます。

ブラウザーの対応する `startRendering()` メソッドには、古いイベントベースと新しいプロミスベースの 2 つのバージョンがあります。前者はいずれ削除される予定ですが、現在は古い理由のために両方のメカニズムが提供されています。

## 構文

```js-nolint
startRendering()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この単純な例では、{{domxref("AudioContext")}} と `OfflineAudioContext` オブジェクトの両方を宣言しています。次に `OfflineAudioContext` を使用して、音声を {{domxref("BaseAudioContext.decodeAudioData")}} にレンダリングし、その音声を再生します。オフライン音声グラフを設定したら、{{domxref("OfflineAudioContext.startRendering")}} を使用して {{domxref("AudioBuffer")}} にレンダリングする必要があります。

`startRendering()` のプロミスが解決すると、レンダリングが完了しており、出力の `AudioBuffer` がプロミスから返されます。

この時点で、別の音声コンテキストを作成し、その中に {{domxref("AudioBufferSourceNode")}} を作成し、そのバッファーをプロミス `AudioBuffer` と等しくなるように設定します。これは単純な標準音声グラフの一部として再生されます。

> [!NOTE]
> 動作する例については、 [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) を GitHub リポジトリーで参照してください（[ソースコード](https://github.com/mdn/webaudio-examples)も参照）。

```js
// define online and offline audio context

const audioCtx = new AudioContext();
const offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

source = offlineCtx.createBufferSource();

// use XHR to load an audio track, and
// decodeAudioData to decode it and OfflineAudioContext to render it

function getData() {
  request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = () => {
    const audioData = request.response;

    audioCtx.decodeAudioData(audioData, (buffer) => {
      myBuffer = buffer;
      source.buffer = myBuffer;
      source.connect(offlineCtx.destination);
      source.start();
      //source.loop = true;
      offlineCtx
        .startRendering()
        .then((renderedBuffer) => {
          console.log("Rendering completed successfully");
          const offlineAudioCtx = new AudioContext();
          const song = offlineAudioCtx.createBufferSource();
          song.buffer = renderedBuffer;

          song.connect(offlineAudioCtx.destination);

          play.onclick = () => {
            song.start();
          };
        })
        .catch((err) => {
          console.error(`Rendering failed: ${err}`);
          // Note: The promise should reject when startRendering is called a second time on an OfflineAudioContext
        });
    });
  };

  request.send();
}

// Run getData to start the process off

getData();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
