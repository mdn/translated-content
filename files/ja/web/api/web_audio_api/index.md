---
title: Web Audio API
slug: Web/API/Web_Audio_API
---

{{DefaultAPISidebar("Web Audio API")}}

Web Audio API はウェブ上で音声を扱うための強力で多機能なシステムを提供します。これにより開発者は音源を選択したり、エフェクトを加えたり、ビジュアライゼーションを加えたり、パンニングなどの特殊効果を適用したり、他にもたくさんのいろいろなことができるようになります。

## Web audio の概念と利用方法

Web Audio API は音声操作を**オーディオコンテキスト**内の操作として実現し、モジュラールーティングできるようにデザインされています。基本的な操作は **オーディオノード**として表現されています。これを接続することで、オーディオグラフを作成します。チャンネル構成の異なる複数の音源も 1 つのコンテキスト内で扱えます。この構成によって、複雑で動的な音声操作を実現できるようになっています。

オーディオノードは、入力と出力によってチェーンと単純なウェブにリンクされています。通常、1 つまたは複数の音源から始まります。音源は、非常に小さなタイムスライス、多くの場合は 1 秒間に数万個のサウンドインテンシティ (サンプル) の配列を提供します。これらは数学的に計算されたもの ({{domxref("OscillatorNode")}} など) や、音声ファイルや動画ファイル ({{domxref("AudioBufferSourceNode")}} や {{domxref("MediaElementAudioSourceNode")}} など) やオーディオストリーム ({{domxref("MediaStreamAudioSourceNode")}}) からの録音である場合もあります。実際には、サウンドファイルは、マイクや電気楽器から入ってきた音の強さそのものを録音したものであり、それがミックスされて一つの複雑な波になっています。

ノードの出力は他のノードの入力に紐付けられます。つまり、入力ストリームにミックスや編集をして他へ出力できるわけです。一般的な編集の例としては音量の変更です( {{domxref("GainNode")}} )。意図した効果を十分に施したあと、ユーザーに音声を聞かせたい場合、サウンドをスピーカーやヘッドオンに流すために、{{domxref("AudioContext.destination")}} の入力に紐付ける必要があります。

簡潔で通常の Web Audio の使い方は次のようになります:

1. オーディオコンテキストを作成する
2. コンテキストの中で、`<audio>`,オシレーター,ストリームなどの音源を作成する
3. リバーブ・フィルター・パンナー・コンプレッサーなどのエフェクトノードを作成する
4. 最終的な音声の到達先を選ぶ(例えばスピーカー)
5. 音源をエフェクトに繋げ、エフェクトを到達先(destination)に繋げる

![オーディオコンテキストと書かれた外側のボックスと、音源、エフェクト、デスティネーションと書かれた3つのボックスからなるシンプルなボックスダイアグラムです。3つのボックスの間には矢印があり、オーディオ情報の流れを示しています。](audio-context_.png)

タイミングは高精度で低遅延に制御されます。正確にイベントに反応したり特定の音声サンプルにアクセスしたりすることができます。ドラムマシンやシーケンサーのようなアプリケーションを作ることができます。

Web Audio API では、立体音響を制御することもできます。*ソースリスナーモデル*に基づいたシステムを使用することで、*パンモデル*を制御し、音源の移動 (またはリスナーの移動) によって引き起こされる*距離に起因する減衰*を処理することができます。

> **メモ:** Web Audio API の理論に関する詳細は [Basic concepts behind Web Audio API](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) をご覧ください。

## Web Audio API がターゲットとする人

Web Audio API は音声技術に馴染みがない人にとって、怖気づくかもしれません。また、多くの機能があるため、開発者にとってとっつきにくいものになっています。

Web Audio API の用途としては、[futurelibrary.no](https://www.futurelibrary.no/) のような雰囲気作りのためや[フォームの検証に音を活用](https://css-tricks.com/form-validation-web-audio/)するために、単に音声をウェブサイトに組み込むために使用できます。一方で、高度な対話型ツールの作成にも利用できます。こうしたことを踏まえると、開発者とミュージシャンの双方に適していると言えます。

プログラミングは得意だけど API の構造と用語の解説が必要な人のために、[簡単なチュートリアル](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)があります。

また、[Web Audio API の背景にある基本理念](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)に関する記事もあり、特にこの API の範囲でデジタルオーディオがどのように動作するのかを理解するのに役立ちます。また API の基礎となる優れた概念の紹介も含んでいます。

プログラムを書く作業はカードゲームに例えられます。ルールを学んで遊んでみて、またルールを学んで再び遊んでみて・・・。したがって最初のチュートリアルと記事を見たあとにピンとこなかった場合、最初のチュートリアルを拡張して、学んだことを実践して、段階的に高度なことを学んでいく[発展的なチュートリアル](/ja/docs/Web/API/Web_Audio_API/Advanced_techniques)があります。

それとは別に、この API のすべての機能を網羅したチュートリアルとリファレンスを用意しています。このページのサイドバーを参照してください。

音楽的な側面に精通し、音楽理論の概念に精通し、楽器の構築を開始したい場合は、発展的チュートリアルやその他の解説を基に制作に移る事ができるでしょう(上記のリンク付きチュートリアルでは、スケジューリングに関する注意事項、オーダーメイドの発振器やエンベロープの作成、LFO などについて説明しています) 。

プログラミングの基本に慣れていない場合は、まず初級者向けの JavaScript チュートリアルを参照してから、このページに戻ってください。[初級者向けの JavaScript 学習モジュール](/ja/docs/Learn/JavaScript)を参照してください。

## Web Audio API インターフェイス

Web Audio API は全部で 28 のインターフェイスと関連するイベントを持ちます。それらは機能的に 9 個のカテゴリに分けられます。

### 一般的なオーディオグラフの定義

Web Audio API で利用するオーディオグラフのコンテナと、その構成要素は以下の通りです。

- {{domxref("AudioContext")}}
  - : 音声モジュールを組み合わせて作成される、音声処理のグラフを表します。グラフ内の各モジュールは {{domxref("AudioNode")}} として表現されています。オーディオコンテキストは、コンテキスト内での処理を担当するノードの作成を行います。
- {{domxref("AudioContextOptions")}}
  - : **`AudioContextOptions`** は `AudioContext` を作成するときにオプションを渡したいときに使用します。
- {{domxref("AudioNode")}}
  - : **`AudioNode`** インターフェイスは音声処理のモジュールの表現しています。これには{{HTMLElement("audio")}}要素や{{HTMLElement("video")}} 要素のような音源、音声の出力先、{{domxref("BiquadFilterNode")}} や {{domxref("GainNode")}}) のようなフィルターなどが含まれます。
- {{domxref("AudioParam")}}
  - : **`AudioParam`** インターフェイスは {{domxref("AudioNode")}} の持つような、音声に関するパラメータを表現しています。値をセットするだけでなく、差分を指定することも可能です。また指定した時間やパターンで、値を変更をすることもできます。
- {{domxref("AudioParamMap")}}
  - : {{domxref("AudioParam")}} のマップのようなインターフェイスを提供します。つまり `forEach()`、`get()`、`has()`、`keys()`、`values()` メソッドや `size` プロパティが使えます。
- {{domxref("BaseAudioContext")}}
  - : **`BaseAudioContext`** インターフェイスはオンライン音声処理グラフ( {{domxref("AudioContext")}})やオフライン音声処理グラフ( {{domxref("OfflineAudioContext")}})の基底となるものです。直接 `BaseAudioContext` を使うことはなく、これを継承するこれら 2 つのインターフェイスを介して使用します。
- {{event("ended_(Web_Audio)", "ended")}} (event)
  - : `ended` イベントは、再生が終了した際に発火するイベントです。

### 音源の定義

Web Audio API 内で利用できる音源は以下の通りです。

- {{domxref("AudioScheduledSourceNode")}}
  - : **`AudioScheduledSourceNode`** は {{domxref("AudioNode")}} の一種で、いくつかの音源ノードの親インターフェイスです。
- {{domxref("OscillatorNode")}}
  - : **`OscillatorNode`** はサイン波を出力する {{domxref("AudioNode")}} です。出力する波形の周波数を指定できます。
- {{domxref("AudioBuffer")}}
  - : **`AudioBuffer`** はメモリー上に展開された短い音声データを表します。{{ domxref("AudioContext.createBuffer()") }} によって音声ファイルから、もしくは{{ domxref("AudioContext.createBuffer()") }} メソッドによって生データから作成されます。このデータは {{ domxref("AudioBufferSourceNode") }} を利用して再生されます。
- {{domxref("AudioBufferSourceNode")}}
  - : **`AudioBufferSourceNode`** は {{domxref("AudioNode")}} の一種で、メモリー上の音声データを利用した音源です。音声データ自身は {{domxref("AudioBuffer")}} として保存されています。
- {{domxref("MediaElementAudioSourceNode")}}
  - : **`MediaElementAudioSourceNode`** は {{domxref("AudioNode")}} の一種で、{{ htmlelement("audio") }} 要素や {{ htmlelement("video") }} 要素を利用する音源です。
- {{domxref("MediaStreamAudioSourceNode")}}
  - : **`MediaStreamAudioSourceNode`** は {{domxref("AudioNode")}} の一種で、マイクや Web カメラといった [WebRTC](/ja/docs/WebRTC) {{domxref("MediaStream")}} からの入力を扱える音源です。複数の音声トラックがストリーム上にある場合、{{domxref("MediaStreamTrack.id", "id")}} は辞書順(アルファベット順)です。
- {{domxref("MediaStreamTrackAudioSourceNode")}}
  - : `MediaStreamTrackAudioSourceNode` は{{domxref("AudioNode")}} の一種で、{{domxref("MediaStreamTrack")}} からの入力を扱える音源です。{{domxref("AudioContext.createMediaStreamTrackSource", "createMediaStreamTrackSource()")}} メソッドによって作られたノードの場合、使用するトラックを指定してください。`MediaStreamAudioSourceNode` 以上の制御を提供します。

### オーディオエフェクトフィルターの定義

これらを利用すると、音源からの音声にエフェクトをかけられます。

- {{domxref("BiquadFilterNode")}}
  - : **`BiquadFilterNode`** は {{domxref("AudioNode")}} の一種で、単純な低次フィルターです。フィルターやトーンコントロール、グラフィックイコライザで利用されます。`BiquadFilterNode` の入力と出力はともに 1 つです。
- {{domxref("ConvolverNode")}}
  - : **`ConvolverNode`** は{{domxref("AudioNode")}} の一種で、Audiobuffer に対して線形畳み込みを行います。リバーブの実現に利用されます。
- {{domxref("DelayNode")}}
  - : **`DelayNode`** は {{domxref("AudioNode")}} の一種で、[delay-line](http://en.wikipedia.org/wiki/Digital_delay_line) を表します。入力された音声を、遅らせて出力します。
- {{domxref("DynamicsCompressorNode")}}
  - : **`DynamicsCompressorNode`** はコンプレッサとして働きます。大きな音の音量を絞ることで、複数の音を同時に再生した時に起きがちな、音のクリッピングや歪みを回避します。
- {{domxref("GainNode")}}
  - : **`GainNode`** は {{domxref("AudioNode")}} の一種で、入力された音の音量を指定されたものに変更して出力します。
- {{domxref("WaveShaperNode")}}
  - : **`WaveShaperNode`** は {{domxref("AudioNode")}} の一種で、非線形のディストーションエフェクトを実現します。curve 属性に指定された関数を用いて、入力を歪ませます。音を歪ませ、温かみを与えるために用いられます。
- {{domxref("PeriodicWave")}}
  - : {{ domxref("OscillatorNode") }} の出力の波形を変えるために用いられます。
- {{domxref("IIRFilterNode")}}
  - : 一般的な[無限インパルス応答(IIR)](https://ja.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E3%82%A4%E3%83%B3%E3%83%91%E3%83%AB%E3%82%B9%E5%BF%9C%E7%AD%94)フィルターの実装です。トーン制御デバイスやグラフィックイコライザーの実装に利用できます。

### 音声の出力先の定義

処理した音声の出力先を、以下のもので定めます。

- {{domxref("AudioDestinationNode")}}
  - : **`AudioDestinationNode`** はコンテキスト内での出力先を表します。通常はスピーカとなっています。
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : **`MediaElementAudioSourceNode`** は音声の出力先となる {{domxref("AudioNode")}} の一種で、[WebRTC](/ja/docs/WebRTC) {{domxref("MediaStream")}} と 1 つの `AudioMediaStreamTrack` から構成されます。{{ domxref("Navigator.getUserMedia") }} で取得された MediaStream と同様に扱えます。

### 分析と可視化

音声の時間領域 / 周波数領域分析には、`AnalyserNode` を利用します。

- {{domxref("AnalyserNode")}}
  - : **`AnalyserNode`** を利用すると、音声のリアルタイムに時間領域分析と周波数領域分析が行えます。これを利用すると、音声の可視化が行えます。

### オーディオチャンネルの分岐と合成

オーディオチャンネルを分岐したり合成したりするのにこれらのインターフェイスを使います。

- {{domxref("ChannelSplitterNode")}}
  - : The **`ChannelSplitterNode`** は音源の複数のチャンネルを別々のモノラル出力へ分離します。
- {{domxref("ChannelMergerNode")}}
  - : **`ChannelMergerNode`** は異なるモノラルの入力を、1 つの出力へとまとめます。それぞれの入力は、出力内のチャンネルとなります。

### 立体音響

これらのインターフェイスを使用すると、立体音響のパンニング効果を音源に追加することができます。

- {{domxref("AudioListener")}}
  - : **`AudioListener`** インターフェイスは聴者の向きと位置を表します。
- {{domxref("PannerNode")}}
  - : **`PannerNode`** は {{domxref("AudioNode")}} の一種で、空間内での音の振る舞いを規定します。位置はカルテシアンの右手座標系で表され、速度ベクトルで動きを表します。向きはコーンの向きで表現します。
- {{domxref("StereoPannerNode")}}
  - : **`StereoPannerNode`** インターフェイスは単純なステレオプランナーで、音声ストリームのパン(左右バランス)を調整できます。

### JavaScript による音声処理

音声 Worklet を使うことで、JavaScript や [WebAssembly](/ja/docs/WebAssembly) を使って自作の{{domxref("AudioNode")}}を定義できます。音声 Worklet は {{domxref("Worklet")}} インターフェイスという軽量版 {{domxref("Worker")}} インターフェイスを実装しています。Chrome 66 以降で既定で有効です。

- {{domxref("AudioWorklet")}} {{experimental_inline}}
  - : `AudioWorklet` インターフェイスは {{domxref("AudioContext")}} オブジェクトの {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} を通して利用することができ、メインスレッドから実行されるオーディオワークレットにモジュールを追加することができます。
- {{domxref("AudioWorkletNode")}} {{experimental_inline}}
  - : `AudioWorkletNode` インターフェイスは {{domxref("AudioNode")}} の一種で、音声グラフに組み込んだり、対応する `AudioWorkletProcessor` にメッセージを送信できます。
- {{domxref("AudioWorkletProcessor")}} {{experimental_inline}}
  - : `AudioWorkletProcessor` インターフェイスは `AudioWorkletGlobalScope` で実行する音声処理コードで、音声の生成・処理・分析を直接行ったり、対応する `AudioWorkletNode` にメッセージを送信できます。
- {{domxref("AudioWorkletGlobalScope")}} {{experimental_inline}}
  - : `AudioWorkletGlobalScope` インターフェイスは `WorkletGlobalScope` から派生するオブジェクトで、音声処理スクリプトが実行されるワーカーコンテキストを表現します。メインスレッド上ではなく、ワークレットスレッド上で JavaScript を使って直接オーディオデータの生成、処理、分析ができるように設計されています。

#### Obsolete: script processor nodes

音声 Worklet が定義されるよりも昔、Web Audio API は JavaScript を使用する音声処理に `ScriptProcessorNode` を利用していました。しかしながら処理がメインスレッドで走るためにパフォーマンスが良くありませんでした。歴史的な理由から `ScriptProcessorNode` は維持されていますが非推奨であり、将来の規格から取り除かれる予定です。

- {{domxref("ScriptProcessorNode")}} {{deprecated_inline}}
  - : **`ScriptProcessorNode`** を利用すると、JavaScript から音声データの生成、処理、分析を行えます。このノードは {{domxref("AudioNode")}} の一種で、入力と出力の二つのバッファとリンクしています。入力バッファに新しいデータがセットされる度に {{domxref("AudioProcessingEvent")}} インターフェイスを実装したイベントが生起します。イベントハンドラは出力バッファにデータをセットして処理を終了します。
- {{event("audioprocess")}} (event) {{deprecated_inline}}
  - : `audioprocess` イベントは {{domxref("ScriptProcessorNode")}} の処理が可能になった際に発火します。
- {{domxref("AudioProcessingEvent")}} {{deprecated_inline}}
  - : `AudioProcessingEvent` は {{domxref("ScriptProcessorNode")}} の入力バッファが処理可能になったことを表すイベントです。

### オフライン / バックグラウンドでの処理

以下のようにすると、バックグラウンドでオーディオグラフを非常に高速に処理/レンダリングし、端末のスピーカーではなく {{domxref("AudioBuffer")}} にレンダリングすることができます。

- {{domxref("OfflineAudioContext")}}
  - : **`OfflineAudioContext`** は {{domxref("AudioContext")}} の一種で、{{domxref("AudioNode")}} を組み合わせて、音声処理を行うグラフを表現しています。通常の `AudioContext`と異なり`、`OfflineAudioContext` は音声を出力せず、バッファ内で高速に処理を行います。
- {{event("complete")}} (event)
  - : `complete` イベントは {{domxref("OfflineAudioContext")}} の処理が終了した時に発火します。
- {{domxref("OfflineAudioCompletionEvent")}}
  - : `OfflineAudioCompletionEvent` は {{domxref("OfflineAudioContext")}} の処理が終了したことを表します。{{event("complete")}} イベントは、これを実装しています。

## 廃止されたインターフェイス

以下のものは、Web Audio API の古い仕様には存在しましたが、現在は廃止され、別のものに置き換えられています。

- {{domxref("JavaScriptNode")}}
  - : JavaScript で音声を直接処理できます。廃止され、{{domxref("ScriptProcessorNode")}} に置き換えられています。
- {{domxref("WaveTableNode")}}
  - : 定期的な波形変換を行います。廃止され {{domxref("PeriodicWave")}} に置き換えられています。

## ガイドとチュートリアル

{{LandingPageListSubpages}}

## 例

GitHub の [webaudio-example](https://github.com/mdn/webaudio-examples/) に多数の例が掲載されています。

## 仕様書

| 仕様書                                   | 状態                                 | 備考 |
| ---------------------------------------- | ------------------------------------ | ---- |
| {{SpecName('Web Audio API')}} | {{Spec2('Web Audio API')}} |      |

## ブラウザーの互換性

### AudioContext

{{Compat("api.AudioContext", 0)}}

## 関連情報

### チュートリアル/ガイド

- [Web Audio API の背後にある基本概念](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Advanced techniques: creating sound, sequencing, timing, scheduling](/ja/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [メディアおよびウェブオーディオ API の自動再生ガイド](/ja/docs/Web/Media/Autoplay_guide)
- [Using IIR filters](/ja/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Web Audio API による視覚化](/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Web audio spatialisation basics](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics)
- [Controlling multiple parameters with ConstantSourceNode](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mixing Positional Audio and WebGL](http://www.html5rocks.com/tutorials/webaudio/positional_audio/)
- [Developing Game Audio with the Web Audio API](http://www.html5rocks.com/tutorials/webaudio/games/)
- [Porting webkitAudioContext code to standards based AudioContext](/ja/docs/Web/API/Web_Audio_API/Porting_webkitAudioContext_code_to_standards_based_AudioContext)

### ライブラリ

- [Tones](https://github.com/bit101/tones): a simple library for playing specific tones/notes using the Web Audio API.
- [Tone.js](https://tonejs.github.io/): a framework for creating interactive music in the browser.
- [howler.js](https://github.com/goldfire/howler.js/): a JS audio library that defaults to [Web Audio API](https://webaudio.github.io/web-audio-api/) and falls back to [HTML5 Audio](https://www.whatwg.org/specs/web-apps/current-work/#the-audio-element), as well as providing other useful features.
- [Mooog](https://github.com/mattlima/mooog): jQuery-style chaining of AudioNodes, mixer-style sends/returns, and more.
- [XSound](https://korilakkuma.github.io/XSound/): Web Audio API Library for Synthesizer, Effects, Visualization, Recording ... etc
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML5 video language lab web application using the Web Audio API to record and combine video and audio from different sources into a single file ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Simplifies web audio visualization ([guide](https://ptsjs.org/guide/sound-0800))

### 関連トピック

- [Web media technologies](/ja/docs/Web/Media)
- [Guide to media types and formats on the web](/ja/docs/Web/Media/Formats)
