---
title: OfflineAudioContext
slug: Web/API/OfflineAudioContext
l10n:
  sourceCommit: db72d5612ada1d40cde0de191389dde2fe062c23
---

{{APIRef("Web Audio API")}}

`OfflineAudioContext` インターフェイスは {{domxref("AudioContext")}} インターフェイスの一種で、 {{domxref("AudioNode")}} をつなげて造られる音声処理グラフを表しています。通常の {{domxref("AudioContext")}} と異なり、`OfflineAudioContext` で処理された音声はハードウェアから再生されることはありません。処理された結果は {{domxref("AudioBuffer")}} に出力されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("OfflineAudioContext.OfflineAudioContext()", "OfflineAudioContext()")}}
  - : 新しい `OfflineAudioContext` のインスタンスを作成します。

## インスタンスプロパティ

_親インターフェイスである {{domxref("BaseAudioContext")}} からのプロパティも継承しています。_

- {{domxref('OfflineAudioContext.length')}} {{ReadOnlyInline}}
  - : サンプルフレーム数で表されるバッファーの大きさの整数値。

## インスタンスメソッド

_親インターフェイスである {{domxref("BaseAudioContext")}} からのメソッドも継承しています。_

- {{domxref("OfflineAudioContext.suspend()")}}
  - : 指定した時刻に音声コンテキストの時間進行の停止をスケジューリングし、プロミスを返します。
- {{domxref("OfflineAudioContext.startRendering()")}}
  - : 現在の接続と現在の変更予定を考慮して、音声のレンダリングを始めます。このページでは、イベントベース版とプロミス版の両方に応じた説明をします。

### 非推奨のメソッド

- {{domxref("OfflineAudioContext.resume()")}}
  - : 前回中断した音声の時刻の進行を再開します。

> [!NOTE]
> `resume()` メソッドはまだ利用できます。これは {{domxref("BaseAudioContext")}} インターフェイスで定義されるようになり（{{domxref("AudioContext.resume")}} を参照）、従って {{domxref("AudioContext")}} および {{domxref("OfflineAudioContext")}} インターフェイスの両方でアクセスできます。

## イベント

これらのイベントを [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) で待ち受けするか、イベントハンドラーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- [`complete`](/ja/docs/Web/API/OfflineAudioContext/complete_event)
  - : オフライン音声コンテキストのレンダリングが完了したときに発行されます。

## 例

この例では、{{domxref("AudioContext")}} と `OfflineAudioContext` の 2 つのオブジェクトを作っています。`AudioContext` は XHR の ({{domxref("BaseAudioContext.decodeAudioData")}})で音声トラックを読み込むのに使い、`OfflineAudioContext` で{{domxref("AudioBufferSourceNode")}} の中に音声をレンダリングし、そしてその音声を再生します。オフライン音声グラフのセットアップが終わった後、{{domxref("OfflineAudioContext.startRendering")}} を使って {{domxref("AudioBuffer")}} にレンダリングする必要があります。

`startRendering()` のプロミスが解決されるとレンダリングは完了し、出力結果の `AudioBuffer` がプロミスの結果として戻されます。

この時点で、別の音声コンテキストを作成し、その中に {{domxref("AudioBufferSourceNode")}} を作成し、そのバッファーをプロミス `AudioBuffer` と等しくなるように設定します。これは単純な標準音声グラフの一部として再生されます。

> [!NOTE]
> 動作する例については、 [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) の GitHub リポジトリーを参照してください（[ソースコード](https://github.com/mdn/webaudio-examples/tree/master/offline-audio-context-promise)も参照してください）。

```js
// オンラインとオフラインのオーディオコンテキストを定義

const audioCtx = new AudioContext();
const offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

source = offlineCtx.createBufferSource();

// XHRで音声トラックを読み込み、
// decodeAudioData でデコードして OfflineAudioContext で再生する。

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
          const song = audioCtx.createBufferSource();
          song.buffer = renderedBuffer;

          song.connect(audioCtx.destination);

          play.onclick = () => {
            song.start();
          };
        })
        .catch((err) => {
          console.error(`Rendering failed: ${err}`);
          // 注意: OfflineAudioContext の startRendering が二回以上呼び出されるとプロミスは拒否されます。
        });
    });
  };

  request.send();
}

// getData で処理を開始する。

getData();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
