---
title: ウェブオーディオ API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{DefaultAPISidebar("Web Audio API")}}

ウェブオーディオ API はウェブ上で音声を扱うための強力で多機能なシステムを提供します。これにより開発者は音源を選択したり、エフェクトを加えたり、視覚効果を加えたり、パンニングなどの特殊効果を適用したり、他にもたくさんのいろいろなことができるようになります。

## ウェブオーディオの概念と利用方法

ウェブオーディオ API は音声操作を**音声コンテキスト**内の操作として実現し、**モジュラールーティング**できるようにデザインされています。基本的な操作は **音声ノード**として表現されています。これを接続することで、**音声ルーティンググラフ**を作成します。チャンネル構成の異なる複数の音源も 1 つのコンテキスト内で扱えます。この構成によって、複雑で動的な音声操作を実現できるようになっています。

音声ノードは、入力と出力によってチェーンと単純なウェブにリンクされています。通常、1 つまたは複数の音源から始まります。音源は、非常に小さなタイムスライス、多くの場合は 1 秒間に数万個のサウンドインテンシティ (サンプル) の配列を提供します。これらは数学的に計算されたもの ({{domxref("OscillatorNode")}} など) や、音声ファイルや動画ファイル ({{domxref("AudioBufferSourceNode")}} や {{domxref("MediaElementAudioSourceNode")}} など) や音声ストリーム ({{domxref("MediaStreamAudioSourceNode")}}) からの録音である場合もあります。実際には、音声ファイルは、マイクや電気楽器から入ってきた音の強さそのものを録音したものであり、それがミックスされて一つの複雑な波になっています。

これらのノードの出力は、他のノードの入力にリンクされ、これらの音のサンプルのストリームを異なる形に混合または変更することができます。一般的な変更は、サンプルに値を掛けて大きくしたり小さくしたりすることです（{{domxref("GainNode")}}がそうです）。サウンドが意図した効果のために十分に処理されたら、出力先（{{domxref("BaseAudioContext.destination")}}）の入力にリンクし、スピーカーやヘッドフォンにサウンドを送信することができるようになります。この最後の接続は、ユーザーが音声を聞くことを想定している場合にのみ必要です。

簡潔で通常のウェブオーディオの使い方は、次のようになります。

1. 音声コンテキストを作成する
2. コンテキストの中で、`<audio>`、オシレーター、ストリームなどの音源を作成する
3. リバーブ、バイクワッドフィルター、パンナー、コンプレッサーなどのエフェクトノードを作成する
4. 最終的な音声の出力先 (destination) を選ぶ（例えばスピーカーなど）
5. 音源をエフェクトに繋げ、エフェクトを出力先に繋げる

![音声コンテキストと書かれた外側のボックスと、音源、エフェクト、デスティネーションと書かれた 3 つのボックスからなるシンプルなボックスダイアグラムです。 3 つのボックスの間には矢印があり、音声情報の流れを示しています。](audio-context_.png)

タイミングは高精度で低遅延に制御されます。正確にイベントに反応したり特定の音声サンプルにアクセスしたりすることができます。ドラムマシンやシーケンサーのようなアプリケーションを作ることができます。

ウェブオーディオ API では、立体音響を制御することもできます。*ソースリスナーモデル*に基づいたシステムを使用することで、*パンモデル*を制御し、音源の移動 (またはリスナーの移動) によって引き起こされる*距離に起因する減衰*を処理することができます。

> **メモ:** ウェブオーディオ API の理論に関する詳細は [ウェブオーディオ API の基本概念](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) をご覧ください。

## ウェブオーディオ API が対象とする人

ウェブオーディオ API は、音声や音楽用語に慣れない人には敷居が高く感じられるかもしれません。また、非常に多くの機能が組み込まれているため、開発者であれば使い始めるのは難しいかもしれません。

ウェブオーディオ API の用途としては、 [futurelibrary.no](https://www.futurelibrary.no/) のような雰囲気作りのためや[フォームの検証に音を活用](https://css-tricks.com/form-validation-web-audio/)するために、単に音声をウェブサイトに組み込むために使用できます。一方で、高度な対話型ツールの作成にも利用できます。こうしたことを踏まえると、開発者とミュージシャンの双方に適していると言えます。

プログラミングは得意であるものの、 API の構造と用語の解説が必要な人のためには、[簡単なチュートリアル](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)があります。

また、[ウェブオーディオ API の基本理念](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)に関する記事もあり、特にこの API の範囲でデジタル音声がどのように動作するのかを理解するのに役立ちます。また API の基礎となる優れた概念の紹介も含んでいます。

プログラムを書く作業はカードゲームに例えられます。ルールを学んで遊んでみて、またルールを学んで再び遊んでみて・・・。したがって最初のチュートリアルと記事を見たあとにピンとこなかった場合、最初のチュートリアルを拡張して、学んだことを実践して、段階的に高度なことを学んでいく[発展的なチュートリアル](/ja/docs/Web/API/Web_Audio_API/Advanced_techniques)があります。

それとは別に、この API のすべての機能を網羅したチュートリアルとリファレンスを用意しています。このページのサイドバーを参照してください。

音楽的な側面に精通し、音楽理論の概念に精通し、楽器の構築を開始したい場合は、発展的チュートリアルやその他の解説を基に制作に移る事ができるでしょう(上記のリンク付きチュートリアルでは、スケジューリングに関する注意事項、オーダーメイドの発振器やエンベロープの作成、LFO などについて説明しています) 。

プログラミングの基本に慣れていない場合は、まず初級者向けの JavaScript チュートリアルを参照してから、このページに戻ってください。[初級者向けの JavaScript 学習モジュール](/ja/docs/Learn/JavaScript)を参照してください。

## ウェブオーディオ API インターフェイス

ウェブオーディオ API には、たくさんのインターフェイスと関連するイベントがあり、機能的に 9 個のカテゴリーに分けられます。

### 一般的な音声グラフの定義

ウェブオーディオ API で利用する音声グラフのコンテナーと、その構成要素は以下の通りです。

- {{domxref("AudioContext")}}
  - : **`AudioContext`** インターフェイスは、それぞれが {{domxref("AudioNode")}} で表される音声モジュールがリンクされた音声処理グラフを表します。音声コンテキストは、それが含むノードの生成と、音声処理（デコード）の実行をコントロールします。すべてのことはコンテキストの中で行われるので、何らかの処理を行う前に `AudioContext` を作成する必要があります。
- {{domxref("AudioNode")}}
  - : **`AudioNode`** インターフェイスは音声処理のモジュールの表現しています。これには {{HTMLElement("audio")}} 要素や {{HTMLElement("video")}} 要素のような音源、音声の出力先、 {{domxref("BiquadFilterNode")}} や {{domxref("GainNode")}}) のようなフィルターなどが含まれます。
- {{domxref("AudioParam")}}
  - : **`AudioParam`** インターフェイスは {{domxref("AudioNode")}} の持つような、音声に関するパラメータを表現しています。値をセットするだけでなく、差分を指定することも可能です。また指定した時間やパターンで、値を変更をすることもできます。
- {{domxref("AudioParamMap")}}
  - : {{domxref("AudioParam")}} のマップのようなインターフェイスを提供します。つまり `forEach()`、`get()`、`has()`、`keys()`、`values()` メソッドや `size` プロパティが使えます。
- {{domxref("BaseAudioContext")}}
  - : **`BaseAudioContext`** インターフェイスはオンライン音声処理グラフ ( {{domxref("AudioContext")}}) やオフライン音声処理グラフ ({{domxref("OfflineAudioContext")}}) の基底となるものです。直接 `BaseAudioContext` を使うことはなく、これを継承するこれら 2 つのインターフェイスを介して使用します。
- {{domxref("AudioScheduledSourceNode/ended_event", "ended")}} イベント
  - : `ended` イベントは、再生が終了した際に発生するイベントです。

### 音源の定義

ウェブオーディオ API 内で利用できる音源は以下の通りです。

- {{domxref("AudioScheduledSourceNode")}}
  - : **`AudioScheduledSourceNode`** は {{domxref("AudioNode")}} の一種で、いくつかの音源ノードの親インターフェイスです。
- {{domxref("OscillatorNode")}}
  - : **`OscillatorNode`** インターフェイスは、正弦波や三角波のような周期的な波形を表します。これは指定された周波数の波を作成させる音声処理モジュール {{domxref("AudioNode")}} です。
- {{domxref("AudioBuffer")}}
  - : **`AudioBuffer`** インターフェイスは、メモリー上に存在する短い音声資産を表します。音声ファイルから {{ domxref("BaseAudioContext.decodeAudioData") }} メソッドで作成したり、生のデータから {{ domxref("BaseAudioContext.createBuffer") }} で作成したりすることができます。この形式にデコードされた音声は、{{ domxref("AudioBufferSourceNode") }}に格納することができます。
- {{domxref("AudioBufferSourceNode")}}
  - : **`AudioBufferSourceNode`** インターフェイスは、{{domxref("AudioBuffer")}} に格納されたメモリー内の音声データからなる音声ソースを表します。これは音源として機能する {{domxref("AudioNode")}} です。
- {{domxref("MediaElementAudioSourceNode")}}
  - : **`MediaElementAudioSourceNode`** インターフェイスは、HTML の {{ htmlelement("audio") }} または {{ htmlelement("video") }} 要素からなる音声ソースを表現します。これは音源として機能する {{domxref("AudioNode")}} です。
- {{domxref("MediaStreamAudioSourceNode")}}
  - : **`MediaStreamAudioSourceNode`** インターフェイスは、{{domxref("MediaStream")}} （ウェブカメラ、マイク、リモートコンピューターから送信されるストリームなど）で構成される音声ソースを表します。ストリーム上に複数の音声トラックが表示されている場合、辞書順（アルファベット順）に最初に {{domxref("MediaStreamTrack.id", "id")}} が来るトラックが使用されます。これは音源として機能する {{domxref("AudioNode")}} です。
- {{domxref("MediaStreamTrackAudioSourceNode")}}
  - : {{domxref("MediaStreamTrackAudioSourceNode")}} 型のノードは、データが {{domxref("MediaStreamTrack")}} に由来する音声ソースを表します。ノードを作成するために {{domxref("AudioContext.createMediaStreamTrackSource", "createMediaStreamTrackSource()")}} メソッドを使用する際に、どのトラックを使用するのか指定します。これは `MediaStreamAudioSourceNode` よりも制御を提供します。

### 音声エフェクトフィルターの定義

これらを利用すると、音源からの音声にエフェクトをかけられます。

- {{domxref("BiquadFilterNode")}}
  - : **`BiquadFilterNode`** インターフェースは、単純な低次フィルタを表します。これは {{domxref("AudioNode")}} であり、異なる形のフィルター、トーンコントロール機器、グラフィックイコライザーを表すことができます。 `BiquadFilterNode` には常に 1 つの入力と 1 つの出力があります。
- {{domxref("ConvolverNode")}}
  - : **`ConvolverNode`** インターフェイスは {{domxref("AudioNode")}} であり、指定された {{domxref("AudioBuffer")}} に対してリニアコンボリューションを行うもので、リバーブ効果を得るために使用されることが多いものです。
- {{domxref("DelayNode")}}
  - : **`DelayNode`** は [delay-line](http://en.wikipedia.org/wiki/Digital_delay_line) を表します。入力データの到着から出力への伝搬に遅延を発生させる {{domxref("AudioNode")}} 音声処理モジュールです。
- {{domxref("DynamicsCompressorNode")}}
  - : **`DynamicsCompressorNode`** インターフェイスは圧縮効果を指定されたもので、複数の音を一度に再生して多重化したときに発生するクリッピングや歪みを防ぐために、信号の最も大きな部分の音量を下げることができます。
- {{domxref("GainNode")}}
  - : **`GainNode`** インターフェイスは音量の変化を表します。これは {{domxref("AudioNode")}} の音声処理モジュールで、出力に伝搬する前に入力データに指定されたゲイン ( _gain_ ) を発生させます。
- {{domxref("WaveShaperNode")}}
  - : **`WaveShaperNode`** インターフェイスは非線形の歪み器（ディストーション）を表します。これは {{domxref("AudioNode")}} で、カーブを使用して信号に波形整形歪みを適用します。明らかな歪み効果の他に、信号に暖かみのある感じを追加するために多く使用されます。
- {{domxref("PeriodicWave")}}
  - : {{ domxref("OscillatorNode") }} の出力を形成するために使用できる周期的な波形を記述します。
- {{domxref("IIRFilterNode")}}
  - : 一般的な[無限インパルス応答 (IIR)](https://ja.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E3%82%A4%E3%83%B3%E3%83%91%E3%83%AB%E3%82%B9%E5%BF%9C%E7%AD%94) フィルターの実装です。トーン制御機器やグラフィックイコライザーの実装に利用できます。

### 音声の出力先の定義

処理した音声の出力先を、以下のもので定めます。

- {{domxref("AudioDestinationNode")}}
  - : **`AudioDestinationNode`** はコンテキスト内での出力先を表します。通常はスピーカーとなっています。
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : **`MediaStreamAudioDestinationNode`** インターフェイスは、単一の `AudioMediaStreamTrack` を持つ [WebRTC](/ja/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} からなる音声出力先を表現し、 {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }} から得られる {{domxref("MediaStream") }}と同様の方法で使用することができます。 音声の出力先として動作する {{domxref("AudioNode")}} です。

### 分析と可視化

もし、音声から時間や周波数、その他のデータを抽出したいのであれば、`AnalyserNode`が必要です。

- {{domxref("AnalyserNode")}}
  - : **`AnalyserNode`** を利用すると、音声のリアルタイムに時間領域分析と周波数領域分析が行えます。これを利用すると、音声の可視化が行えます。

### 音声チャンネルの分岐と合成

音声チャンネルを分岐したり合成したりするのにこれらのインターフェイスを使います。

- {{domxref("ChannelSplitterNode")}}
  - : The **`ChannelSplitterNode`** は音源の複数のチャンネルを別々のモノラル出力へ分離します。
- {{domxref("ChannelMergerNode")}}
  - : **`ChannelMergerNode`** は異なるモノラルの入力を、1 つの出力へとまとめます。それぞれの入力は、出力内のチャンネルとなります。

### 立体音響

これらのインターフェイスを使用すると、立体音響のパンニング効果を音源に追加することができます。

- {{domxref("AudioListener")}}
  - : **`AudioListener`** インターフェイスは、音声空間化で使用される音声シーンを聞いている固有の人の位置と方向を表します。
- {{domxref("PannerNode")}}
  - : **`PannerNode`** インターフェイスは、 3D 空間における音声ソース信号の位置と振る舞いを表現し、複雑なパンニング効果を作成することができます。
- {{domxref("StereoPannerNode")}}
  - : **`StereoPannerNode`** インターフェイスは、音声ストリームを左または右にパンするために使用できる単純なステレオパンナーノードを表します。

### JavaScript による音声処理

音声ワークレットを使うと、 JavaScript や [WebAssembly](/ja/docs/WebAssembly) を使って独自の音声ノードを定義することができます。音声ワークレットは {{domxref("Worklet")}} インターフェイスという軽量版 {{domxref("Worker")}} インターフェイスを実装しています。

- {{domxref("AudioWorklet")}}
  - : `AudioWorklet` インターフェイスは {{domxref("AudioContext")}} オブジェクトの {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} を通して利用することができ、メインスレッドから実行される音声ワークレットにモジュールを追加することができます。
- {{domxref("AudioWorkletNode")}}
  - : `AudioWorkletNode` インターフェイスは {{domxref("AudioNode")}} の一種で、音声グラフに組み込んだり、対応する `AudioWorkletProcessor` にメッセージを送信できます。
- {{domxref("AudioWorkletProcessor")}}
  - : `AudioWorkletProcessor` インターフェイスは `AudioWorkletGlobalScope` で実行する音声処理コードで、音声の生成・処理・分析を直接行ったり、対応する `AudioWorkletNode` にメッセージを送信できます。
- {{domxref("AudioWorkletGlobalScope")}}
  - : `AudioWorkletGlobalScope` インターフェイスは `WorkletGlobalScope` から派生するオブジェクトで、音声処理スクリプトが実行されるワーカーコンテキストを表現します。メインスレッド上ではなく、ワークレットスレッド上で JavaScript を使って直接音声データの生成、処理、分析ができるように設計されています。

#### 旧: スクリプト処理ノード

音声ワークレットが定義されるよりも昔、ウェブオーディオ API は `ScriptProcessorNode` を使用して JavaScript ベースの音声処理をしていました。コードがメインスレッドで実行されるため、パフォーマンスが悪くなります。 `ScriptProcessorNode` は歴史的な理由から残されていますが、非推奨とされています。

- {{domxref("ScriptProcessorNode")}} {{deprecated_inline}}
  - : **`ScriptProcessorNode`** を利用すると、 JavaScript から音声データの生成、処理、分析を行えます。このノードは {{domxref("AudioNode")}} の一種で、入力と出力の二つのバッファーとリンクしています。入力バッファーに新しいデータがセットされる度に {{domxref("AudioProcessingEvent")}} インターフェイスを実装したイベントが生起します。イベントハンドラは出力バッファーにデータをセットして処理を終了します。
- {{domxref("ScriptProcessorNode.audioprocess_event", "audioprocess")}} (イベント) {{deprecated_inline}}
  - : `audioprocess` イベントは {{domxref("ScriptProcessorNode")}} の処理が可能になった際に発生します。
- {{domxref("AudioProcessingEvent")}} {{deprecated_inline}}
  - : `AudioProcessingEvent` は {{domxref("ScriptProcessorNode")}} の入力バッファーが処理可能になったことを表すイベントです。

### オフライン / バックグラウンドでの処理

以下のようにすると、バックグラウンドで音声グラフを非常に高速に処理/レンダリングし、端末のスピーカーではなく {{domxref("AudioBuffer")}} にレンダリングすることができます。

- {{domxref("OfflineAudioContext")}}
  - : **`OfflineAudioContext`** は {{domxref("AudioContext")}} の一種で、{{domxref("AudioNode")}} を組み合わせて、音声処理を行うグラフを表現しています。通常の `AudioContext`と異なり、`OfflineAudioContext` は音声を出力せず、バッファー内で高速に処理を行います。
- {{domxref("OfflineAudioContext/complete_event", "complete")}} (イベント)
  - : `complete` イベントは {{domxref("OfflineAudioContext")}} の処理が終了した時に発火します。
- {{domxref("OfflineAudioCompletionEvent")}}
  - : `OfflineAudioCompletionEvent` は {{domxref("OfflineAudioContext")}} の処理が終了したことを表します。 {{domxref("OfflineAudioContext/complete_event", "complete")}} イベントは、このインターフェイスを使用します。

## ガイドとチュートリアル

{{LandingPageListSubpages}}

## 例

GitHub の [webaudio-example リポジトリー](https://github.com/mdn/webaudio-examples/) に多数の例が掲載されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

### AudioContext

{{Compat}}

## 関連情報

### チュートリアル/ガイド

- [ウェブオーディオ API の背後にある基本概念](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [高度なテクニック: 音の作成、シーケンス、タイミング、スケジューリング](/ja/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [メディアおよびウェブオーディオ API の自動再生ガイド](/ja/docs/Web/Media/Autoplay_guide)
- [Using IIR filters](/ja/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [ウェブオーディオ API による視覚化](/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [ウェブオーディオの空間設定の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialisation_basics)
- [ConstantSourceNode で複数の引数を制御する](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mixing Positional Audio and WebGL](https://www.html5rocks.com/tutorials/webaudio/positional_audio/)
- [Developing Game Audio with the Web Audio API](https://www.html5rocks.com/tutorials/webaudio/games/)
- [webkitAudioContext のコードを標準ベースの AudioContext に移植する](/ja/docs/Web/API/Web_Audio_API/Migrating_from_webkitAudioContext)

### ライブラリー

- [Tones](https://github.com/bit101/tones): a simple library for playing specific tones/notes using the Web Audio API.
- [Tone.js](https://tonejs.github.io/): a framework for creating interactive music in the browser.
- [howler.js](https://github.com/goldfire/howler.js/): a JS audio library that defaults to [Web Audio API](https://webaudio.github.io/web-audio-api/) and falls back to [HTML Audio](https://html.spec.whatwg.org/multipage/media.html#the-audio-element), as well as providing other useful features.
- [Mooog](https://github.com/mattlima/mooog): jQuery-style chaining of AudioNodes, mixer-style sends/returns, and more.
- [XSound](https://xsound.jp/): Web Audio API Library for Synthesizer, Effects, Visualization, Recording, etc.
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML video language lab web application using the Web Audio API to record and combine video and audio from different sources into a single file ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): Simplifies web audio visualization ([guide](https://ptsjs.org/guide/sound-0800))

### 関連トピック

- [ウェブメディア技術](/ja/docs/Web/Media)
- [ウェブのメディアの種類と形式のガイド](/ja/docs/Web/Media/Formats)
