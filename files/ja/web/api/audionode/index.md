---
title: AudioNode
slug: Web/API/AudioNode
l10n:
  sourceCommit: 2dcdd384a37334e159391f5b0c1617fa2e35ed45
---

{{APIRef("Web Audio API")}}

**`AudioNode`** インスタンスは、音声処理モジュールを表す一般的なインターフェイスです。

たとえば以下のものを表します。

- 音源 (HTML の {{HTMLElement("audio")}} 要素や {{HTMLElement("video")}} 要素、{{domxref("OscillatorNode")}} など)
- 音声の出力先
- 中間処理モジュール (たとえば、{{domxref("BiquadFilterNode")}} や {{domxref("ConvolverNode")}} などのフィルター)
- ボリューム制御 ({{domxref("GainNode")}} など)

{{InheritanceDiagram}}

> **メモ:** `AudioNode` はイベントのターゲットになることがあり、そのため {{domxref("EventTarget")}} インターフェイスを実装しています。

## インスタンスプロパティ

- {{domxref("AudioNode.context")}} {{ReadOnlyInline}}
  - : 対応する {{domxref("BaseAudioContext")}} を返します。これはこのノードが参加している処理グラフを表すオブジェクトです。
- {{domxref("AudioNode.numberOfInputs")}} {{ReadOnlyInline}}
  - : このノードに供給される入力の数を返します。音源ノードは `numberOfInputs` プロパティの値が `0` であるノードという定義です。
- {{domxref("AudioNode.numberOfOutputs")}} {{ReadOnlyInline}}
  - : このノードからの出力の数を返します。{{ domxref("AudioDestinationNode") }} などの出力先ノードは、この属性の値が `0` です。
- {{domxref("AudioNode.channelCount")}}
  - : このノードへの入力について[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)を行う際、何個のチャンネルを用いるかを決定するとき用いる整数です。どのように用いられるか、および正確な定義は、{{domxref("AudioNode.channelCountMode")}} の値によります。
- {{domxref("AudioNode.channelCountMode")}}
  - : このノードの入力と出力の間でチャンネルを対応付ける方法を表す列挙値です。
- {{domxref("AudioNode.channelInterpretation")}}
  - : チャンネルの意味を表す列挙値です。この意味は、音声の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)をどのように行うかを決定します。
    取りうる値は `"speakers"` および `"discrete"` です。

## インスタンスメソッド

_インターフェイス_ {{domxref("EventTarget")}} _由来のメソッドも実装しています。_

- {{domxref("AudioNode.connect()")}}
  - : このノードの出力を、音声データもしくは {{domxref("AudioParam")}} の値として、別のノードの入力に接続します。
- {{domxref("AudioNode.disconnect()")}}
  - : このノードを接続済みの別のノードから切断します。

## 説明

### 音声ルーティンググラフ

![AudioContext に参加している AudioNodes が音声ルーティンググラフを作成します。](webaudiobasics.png)

それぞれの `AudioNode` に入力と出力があり、複数の音声ノードを接続することにより _処理グラフ_ が組み立てられます。このグラフは {{domxref("AudioContext")}} 内にあり、それぞれの音声ノードは 1 個の音声コンテキストにのみ所属できます。

_音源ノード_ は入力を持たず、1 個もしくは複数の出力を持ち、音声を生成できます。一方、_出力先ノード_ は出力を持たず、かわりに、入力はすべてスピーカー (もしくは音声コンテキストが用いる何らかの音声出力デバイス) で直接再生されます。さらに、入力と出力を持つ _処理ノード_ があります。正確な処理内容はそれぞれの `AudioNode` によって違いますが、一般に、ノードは入力を読み取り、音声関係の何らかの処理を行い、出力となる新しい値を生成します。もしくは、(たとえば、処理結果には別でアクセスする {{domxref("AnalyserNode")}} で行われるように) 音声をそのまま通過させます。

グラフ内のノードが多くなるほど、遅延も大きくなります。たとえば、グラフの遅延が 500ms の場合、音源ノードが音声を再生すると、その音声がスピーカーで聞こえるまでには 0.5 秒かかります。(もしくは、下層の音声デバイス内での遅延により、さらに長くなるかもしれません) そのため、対話型の音声を用意したい場合は、グラフをできるだけ小さくし、ユーザーが操作する音声ノードはグラフの最後に配置するべきです。たとえば、ボリューム制御 (`GainNode`) は、ボリュームの変更がすぐに反映されるよう、最後のノードにするべきです。

それぞれの入力および出力には、決められた数の _チャンネル_ があります。たとえば、モノラルの音声にはチャンネルが 1 個あり、ステレオの音声にはチャンネルが 2 個あります。ウェブオーディオ API は、必要に応じてチャンネルの数をアップミキシングやダウンミキシングします。詳細は、ウェブオーディオの仕様を確認してください。

全音声ノードの一覧は、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のホームページを参照してください。

### `AudioNode` の生成

`AudioNode` を生成するには、2 種類の方法があります。_コンストラクター_ による方法と、_ファクトリーメソッド_ による方法です。

```js
// コンストラクター
const analyserNode = new AnalyserNode(audioCtx, {
  fftSize: 2048,
  maxDecibels: -25,
  minDecibels: -60,
  smoothingTimeConstant: 0.5,
});
```

```js
// ファクトリーメソッド
const analyserNode = audioCtx.createAnalyser();
analyserNode.fftSize = 2048;
analyserNode.maxDecibels = -25;
analyserNode.minDecibels = -60;
analyserNode.smoothingTimeConstant = 0.5;
```

コンストラクターを使うのも、ファクトリーメソッドを使うのも、両方を混ぜて使うのも自由です。ただし、コンストラクターを使うと以下の利点があります。

- すべてのパラメーターを生成時に設定でき、個別に設定する必要がありません。
- [音声ノードのサブクラスを作成](https://github.com/WebAudio/web-audio-api/issues/251)することができます。実際の処理はブラウザーの内部で行われ、変更できませんが、音声ノードのラッパーを書くことで独自のプロパティやメソッドを提供できます。
- パフォーマンスが若干良いです。Chrome においても Firefox においても、ファクトリーメソッドは内部でコンストラクターを呼びます。

_歴史の概要_: ウェブオーディオの仕様の最初のバージョンでは、ファクトリーメソッドのみを定義していました。[2013 年 10 月のデザインレビュー](https://github.com/WebAudio/web-audio-api/issues/250)の後、ファクトリーメソッドに比べて多くの利点があるため、コンストラクターを追加することになりました。コンストラクターは、2016 年 8 月〜 10 月に仕様に加えられました。ファクトリーメソッドは引き続き仕様に含まれ、非推奨にはなっていません。

## 例

このシンプルなコード断片は、音声ノードをいくつか生成し、`AudioNode` のプロパティやメソッドの使い方を示しています。このような使用法の例は、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のランディングページからリンクされている例 (たとえば [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/master/violent-theremin)) のどれでも見ることができます。

```js
const audioCtx = new AudioContext();

const oscillator = new OscillatorNode(audioCtx);
const gainNode = new GainNode(audioCtx);

oscillator.connect(gainNode).connect(audioCtx.destination);

oscillator.context;
oscillator.numberOfInputs;
oscillator.numberOfOutputs;
oscillator.channelCount;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
