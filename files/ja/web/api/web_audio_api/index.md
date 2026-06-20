---
title: ウェブオーディオ API
slug: Web/API/Web_Audio_API
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{DefaultAPISidebar("Web Audio API")}}

ウェブオーディオ API はウェブ上でオーディオを扱うための強力で多機能なシステムを提供します。これにより開発者は音源を選択したり、エフェクトを加えたり、視覚効果を加えたり、パンニングなどの特殊効果を適用したり、他にもたくさんのいろいろなことができるようになります。

## ウェブオーディオの概念と利用方法

ウェブオーディオ API はオーディオ操作を**オーディオコンテキスト**内の操作として実現し、**モジュラールーティング**できるようにデザインされています。基本的な操作は **オーディオノード**として表現されています。これを接続することで、**オーディオルーティンググラフ**を作成します。チャンネル構成の異なる複数の音源も 1 つのコンテキスト内で扱えます。この構成によって、複雑で動的なオーディオ操作を実現できるようになっています。

オーディオノードは、入力と出力によってチェーンと単純なウェブにリンクされています。通常、1 つまたは複数の音源から始まります。音源は、一連のサンプル（連続する時点におけるオーディオ信号の振幅の測定値）を提供しますが、その数は多くの場合、1 秒あたり数万個にも及びます。これらは数学的に計算されたもの ({{domxref("OscillatorNode")}} など) や、オーディオファイルや動画ファイル ({{domxref("AudioBufferSourceNode")}} や {{domxref("MediaElementAudioSourceNode")}} など) やオーディオストリーム ({{domxref("MediaStreamAudioSourceNode")}}) からの録音である場合もあります。実際には、オーディオファイルは、マイクや電気楽器から入ってきた音の強さそのものを録音したものであり、それがミックスされて一つの複雑な波になっています。

これらのノードの出力は、他のノードの入力にリンクされ、これらの音のサンプルのストリームを異なる形に混合または変更することができます。一般的な変更は、サンプルに値を掛けて大きくしたり小さくしたりすることです（{{domxref("GainNode")}} がそうです）。サウンドが意図した効果のために十分に処理されたら、出力先（{{domxref("BaseAudioContext.destination")}}）の入力にリンクし、スピーカーやヘッドフォンにサウンドを送信することができるようになります。この最後の接続は、ユーザーがオーディオを聞くことを想定している場合にのみ必要です。

簡潔で通常のウェブオーディオの使い方は、次のようになります。

1. オーディオコンテキストを作成する
2. コンテキストの中で、`<audio>`、オシレーター、ストリームなどの音源を作成する
3. リバーブ、バイクワッドフィルター、パンナー、コンプレッサーなどのエフェクトノードを作成する
4. 最終的なオーディオの出力先 (destination) を選ぶ（例えばスピーカーなど）
5. 音源をエフェクトに繋げ、エフェクトを出力先に繋げる

![オーディオコンテキストと書かれた外側のボックスと、音源、エフェクト、デスティネーションと書かれた 3 つのボックスからなるシンプルなボックスダイアグラムです。 3 つのボックスの間には矢印があり、オーディオ情報の流れを示しています。](audio-context_.png)

タイミングは高精度で低遅延に制御されます。正確にイベントに反応したり特定のオーディオサンプルにアクセスしたりすることができます。ドラムマシンやシーケンサーのようなアプリケーションを作ることができます。

ウェブオーディオ API では、立体音響を制御することもできます。*ソースリスナーモデル*に基づいたシステムを使用することで、*パンモデル*を制御し、音源の移動 (またはリスナーの移動) によって引き起こされる*距離に起因する減衰*を処理することができます。

> [!NOTE]
> ウェブオーディオ API の理論に関する詳細は [ウェブオーディオ API の基本概念](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) をご覧ください。

## ウェブオーディオ API が対象とする人

ウェブオーディオ API は、オーディオや音楽用語に慣れない人には敷居が高く感じられるかもしれません。また、非常に多くの機能が組み込まれているため、開発者であれば使い始めるのは難しいかもしれません。

ウェブオーディオ API の用途としては、[futurelibrary.no](https://www.futurelibrary.no/) のような雰囲気作りのためや[フォームの検証に音を活用](https://css-tricks.com/form-validation-web-audio/)するために、単にオーディオをウェブサイトに組み込むために使用できます。一方で、高度な対話型ツールの作成にも利用できます。こうしたことを踏まえると、開発者とミュージシャンの双方に適していると言えます。

プログラミングは得意であるものの、 API の構造と用語の解説が必要な人のためには、[簡単なチュートリアル](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)があります。

また、[ウェブオーディオ API の基本理念](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)に関する記事もあり、特にこの API の範囲でデジタルオーディオがどのように動作するのかを理解するのに役立ちます。また API の基礎となる優れた概念の紹介も含んでいます。

プログラムを書く作業はカードゲームに例えられます。ルールを学んで遊んでみて、またルールを学んで再び遊んでみて・・・。したがって最初のチュートリアルと記事を見たあとにピンとこなかった場合、最初のチュートリアルを拡張して、学んだことを実践して、段階的に高度なことを学んでいく[発展的なチュートリアル](/ja/docs/Web/API/Web_Audio_API/Advanced_techniques)があります。

それとは別に、この API のすべての機能を網羅したチュートリアルとリファレンスを用意しています。このページのサイドバーを参照してください。

音楽的な側面に精通し、音楽理論の概念に精通し、楽器の構築を開始したい場合は、発展的チュートリアルやその他の解説を基に制作に移る事ができるでしょう(上記のリンク付きチュートリアルでは、スケジューリングに関する注意事項、オーダーメイドの発振器やエンベロープの作成、LFO などについて説明しています) 。

プログラミングの基本に慣れていない場合は、まず初級者向けの JavaScript チュートリアルを参照してから、このページに戻ってください。[初級者向けの JavaScript 学習モジュール](/ja/docs/Learn_web_development/Core/Scripting)を参照してください。

## ウェブオーディオ API インターフェイス

ウェブオーディオ API には、たくさんのインターフェイスと関連するイベントがあり、機能的に 9 個のカテゴリーに分けられます。

### 一般的なオーディオグラフの定義

ウェブオーディオ API で利用するオーディオグラフのコンテナーと、その構成要素は以下の通りです。

- {{domxref("AudioContext")}}
  - : **`AudioContext`** インターフェイスは、それぞれが {{domxref("AudioNode")}} で表されるオーディオモジュールがリンクされたオーディオ処理グラフを表します。オーディオコンテキストは、それが含むノードの生成と、オーディオ処理（デコード）の実行をコントロールします。すべてのことはコンテキストの中で行われるので、何らかの処理を行う前に `AudioContext` を作成する必要があります。
- {{domxref("AudioNode")}}
  - : **`AudioNode`** インターフェイスはオーディオ処理のモジュールの表現しています。これには {{HTMLElement("audio")}} 要素や {{HTMLElement("video")}} 要素のような音源、オーディオの出力先、 {{domxref("BiquadFilterNode")}} や {{domxref("GainNode")}}) のようなフィルターなどが含まれます。
- {{domxref("AudioParam")}}
  - : **`AudioParam`** インターフェイスは {{domxref("AudioNode")}} の持つような、オーディオに関するパラメーターを表現しています。値をセットするだけでなく、差分を指定することも可能です。また指定した時間やパターンで、値を変更をすることもできます。
- {{domxref("AudioParamMap")}}
  - : {{domxref("AudioParam")}} のマップのようなインターフェイスを提供します。つまり `forEach()`、`get()`、`has()`、`keys()`、`values()` メソッドや `size` プロパティが使えます。
- {{domxref("BaseAudioContext")}}
  - : **`BaseAudioContext`** インターフェイスはオンラインオーディオ処理グラフ ( {{domxref("AudioContext")}}) やオフラインオーディオ処理グラフ ({{domxref("OfflineAudioContext")}}) の基底となるものです。直接 `BaseAudioContext` を使うことはなく、これを継承するこれら 2 つのインターフェイスを介して使用します。
- {{domxref("AudioScheduledSourceNode/ended_event", "ended")}} イベント
  - : `ended` イベントは、再生が終了した際に発生するイベントです。

### 音源の定義

ウェブオーディオ API 内で利用できる音源は以下の通りです。

- {{domxref("AudioScheduledSourceNode")}}
  - : **`AudioScheduledSourceNode`** は {{domxref("AudioNode")}} の一種で、いくつかの音源ノードの親インターフェイスです。
- {{domxref("OscillatorNode")}}
  - : **`OscillatorNode`** インターフェイスは、正弦波や三角波のような周期的な波形を表します。これは指定された周波数の波を作成させるオーディオ処理モジュール {{domxref("AudioNode")}} です。
- {{domxref("AudioBuffer")}}
  - : **`AudioBuffer`** インターフェイスは、メモリー上に存在する短いオーディオ資産を表します。オーディオファイルから {{ domxref("BaseAudioContext.decodeAudioData") }} メソッドで作成したり、生のデータから {{ domxref("BaseAudioContext.createBuffer") }} で作成したりすることができます。この形式にデコードされたオーディオは、{{ domxref("AudioBufferSourceNode") }}に格納することができます。
- {{domxref("AudioBufferSourceNode")}}
  - : **`AudioBufferSourceNode`** インターフェイスは、{{domxref("AudioBuffer")}} に格納されたメモリー内のオーディオデータからなる音源を表します。これは音源として機能する {{domxref("AudioNode")}} です。
- {{domxref("MediaElementAudioSourceNode")}}
  - : **`MediaElementAudioSourceNode`** インターフェイスは、HTML の {{ htmlelement("audio") }} または {{ htmlelement("video") }} 要素からなる音源を表現します。これは音源として機能する {{domxref("AudioNode")}} です。
- {{domxref("MediaStreamAudioSourceNode")}}
  - : **`MediaStreamAudioSourceNode`** インターフェイスは、{{domxref("MediaStream")}} （ウェブカメラ、マイク、リモートコンピューターから送信されるストリームなど）で構成される音源を表します。ストリーム上に複数のオーディオトラックが表示されている場合、辞書順（アルファベット順）に最初に {{domxref("MediaStreamTrack.id", "id")}} が来るトラックが使用されます。これは音源として機能する {{domxref("AudioNode")}} です。
- {{domxref("MediaStreamTrackAudioSourceNode")}}
  - : {{domxref("MediaStreamTrackAudioSourceNode")}} 型のノードは、データが {{domxref("MediaStreamTrack")}} に由来する音源を表します。ノードを作成するために {{domxref("AudioContext.createMediaStreamTrackSource", "createMediaStreamTrackSource()")}} メソッドを使用する際に、どのトラックを使用するのか指定します。これは `MediaStreamAudioSourceNode` よりも制御を提供します。

### オーディオエフェクトフィルターの定義

これらを利用すると、音源からのオーディオにエフェクトをかけられます。

- {{domxref("BiquadFilterNode")}}
  - : **`BiquadFilterNode`** インターフェイスは、単純な低次フィルタを表します。これは {{domxref("AudioNode")}} であり、異なる形のフィルター、トーンコントロール機器、グラフィックイコライザーを表すことができます。 `BiquadFilterNode` には常に 1 つの入力と 1 つの出力があります。
- {{domxref("ConvolverNode")}}
  - : **`ConvolverNode`** インターフェイスは {{domxref("AudioNode")}} であり、指定された {{domxref("AudioBuffer")}} に対してリニアコンボリューションを行うもので、リバーブ効果を得るために使用されることが多いものです。
- {{domxref("DelayNode")}}
  - : **`DelayNode`** は [delay-line](http://en.wikipedia.org/wiki/Digital_delay_line) を表します。入力データの到着から出力への伝搬に遅延を発生させる {{domxref("AudioNode")}} オーディオ処理モジュールです。
- {{domxref("DynamicsCompressorNode")}}
  - : **`DynamicsCompressorNode`** インターフェイスは圧縮効果を指定されたもので、複数の音を一度に再生して多重化したときに発生するクリッピングや歪みを防ぐために、信号の最も大きな部分の音量を下げることができます。
- {{domxref("GainNode")}}
  - : **`GainNode`** インターフェイスは音量の変化を表します。これは {{domxref("AudioNode")}} のオーディオ処理モジュールで、出力に伝搬する前に入力データに指定されたゲイン ( _gain_ ) を発生させます。
- {{domxref("WaveShaperNode")}}
  - : **`WaveShaperNode`** インターフェイスは非線形の歪み器（ディストーション）を表します。これは {{domxref("AudioNode")}} で、カーブを使用して信号に波形整形歪みを適用します。明らかな歪み効果の他に、信号に暖かみのある感じを追加するために多く使用されます。
- {{domxref("PeriodicWave")}}
  - : {{ domxref("OscillatorNode") }} の出力を形成するために使用できる周期的な波形を記述します。
- {{domxref("IIRFilterNode")}}
  - : 一般的な[無限インパルス応答 (IIR)](https://ja.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E3%82%A4%E3%83%B3%E3%83%91%E3%83%AB%E3%82%B9%E5%BF%9C%E7%AD%94) フィルターの実装です。トーン制御機器やグラフィックイコライザーの実装に利用できます。

### オーディオの出力先の定義

処理したオーディオの出力先を、以下のもので定めます。

- {{domxref("AudioDestinationNode")}}
  - : **`AudioDestinationNode`** はコンテキスト内での出力先を表します。通常はスピーカーとなっています。
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : **`MediaStreamAudioDestinationNode`** インターフェイスは、単一の `AudioMediaStreamTrack` を持つ [WebRTC](/ja/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} からなるオーディオ出力先を表現し、 {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }} から得られる {{domxref("MediaStream") }}と同様の方法で使用することができます。 オーディオの出力先として動作する {{domxref("AudioNode")}} です。

### 分析と可視化

もし、オーディオから時間や周波数、その他のデータを抽出したいのであれば、`AnalyserNode`が必要です。

- {{domxref("AnalyserNode")}}
  - : **`AnalyserNode`** を利用すると、オーディオのリアルタイムに時間領域分析と周波数領域分析が行えます。これを利用すると、オーディオの可視化が行えます。
- {{domxref("AudioPlaybackStats")}}
  - : 関連する {{domxref(「AudioContext」)}} の再生時間、アンダーラン、レイテンシーの統計情報にアクセスできます。これらの統計情報を使用することで、オーディオの遅延やグリッチを測定することができます。

### オーディオチャンネルの分岐と合成

オーディオチャンネルを分岐したり合成したりするのにこれらのインターフェイスを使います。

- {{domxref("ChannelSplitterNode")}}
  - : **`ChannelSplitterNode`** は音源の複数のチャンネルを別々のモノラル出力へ分離します。
- {{domxref("ChannelMergerNode")}}
  - : **`ChannelMergerNode`** は異なるモノラルの入力を、1 つの出力へとまとめます。それぞれの入力は、出力内のチャンネルとなります。

### 立体音響

これらのインターフェイスを使用すると、立体音響のパンニング効果を音源に追加することができます。

- {{domxref("AudioListener")}}
  - : **`AudioListener`** インターフェイスは、オーディオ空間化で使用されるオーディオシーンを聞いている固有の人の位置と方向を表します。
- {{domxref("PannerNode")}}
  - : **`PannerNode`** インターフェイスは、三次元空間における音源信号の位置と振る舞いを表現し、複雑なパンニング効果を作成することができます。
- {{domxref("StereoPannerNode")}}
  - : **`StereoPannerNode`** インターフェイスは、オーディオストリームを左または右にパンするために使用できる単純なステレオパンナーノードを表します。

### JavaScript によるオーディオ処理

オーディオワークレットを使うと、 JavaScript や [WebAssembly](/ja/docs/WebAssembly) を使って独自のオーディオノードを定義することができます。オーディオワークレットは {{domxref("Worklet")}} インターフェイスという軽量版 {{domxref("Worker")}} インターフェイスを実装しています。

- {{domxref("AudioWorklet")}}
  - : `AudioWorklet` インターフェイスは {{domxref("AudioContext")}} オブジェクトの {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} を通して利用することができ、メインスレッドから実行されるオーディオワークレットにモジュールを追加することができます。
- {{domxref("AudioWorkletNode")}}
  - : `AudioWorkletNode` インターフェイスは {{domxref("AudioNode")}} の一種で、オーディオグラフに組み込んだり、対応する `AudioWorkletProcessor` にメッセージを送信できます。
- {{domxref("AudioWorkletProcessor")}}
  - : `AudioWorkletProcessor` インターフェイスは `AudioWorkletGlobalScope` で実行するオーディオ処理コードで、オーディオの生成・処理・分析を直接行ったり、対応する `AudioWorkletNode` にメッセージを送信できます。
- {{domxref("AudioWorkletGlobalScope")}}
  - : `AudioWorkletGlobalScope` インターフェイスは `WorkletGlobalScope` から派生するオブジェクトで、オーディオ処理スクリプトが実行されるワーカーコンテキストを表現します。メインスレッド上ではなく、ワークレットスレッド上で JavaScript を使って直接オーディオデータの生成、処理、分析ができるように設計されています。

#### 旧: スクリプト処理ノード

オーディオワークレットが定義されるよりも昔、ウェブオーディオ API は `ScriptProcessorNode` を使用して JavaScript ベースのオーディオ処理をしていました。コードがメインスレッドで実行されるため、パフォーマンスが悪くなります。 `ScriptProcessorNode` は歴史的な理由から残されていますが、非推奨とされています。

- {{domxref("ScriptProcessorNode")}} {{deprecated_inline}}
  - : **`ScriptProcessorNode`** を利用すると、 JavaScript からオーディオデータの生成、処理、分析を行えます。このノードは {{domxref("AudioNode")}} の一種で、入力と出力の二つのバッファーとリンクしています。入力バッファーに新しいデータがセットされる度に {{domxref("AudioProcessingEvent")}} インターフェイスを実装したイベントが生起します。イベントハンドラは出力バッファーにデータをセットして処理を終了します。
- {{domxref("ScriptProcessorNode.audioprocess_event", "audioprocess")}} (イベント) {{deprecated_inline}}
  - : `audioprocess` イベントは {{domxref("ScriptProcessorNode")}} の処理が可能になった際に発生します。
- {{domxref("AudioProcessingEvent")}} {{deprecated_inline}}
  - : `AudioProcessingEvent` は {{domxref("ScriptProcessorNode")}} の入力バッファーが処理可能になったことを表すイベントです。

### オフライン / バックグラウンドでの処理

以下のようにすると、バックグラウンドでオーディオグラフを非常に高速に処理/レンダリングし、端末のスピーカーではなく {{domxref("AudioBuffer")}} にレンダリングすることができます。

- {{domxref("OfflineAudioContext")}}
  - : **`OfflineAudioContext`** は {{domxref("AudioContext")}} の一種で、{{domxref("AudioNode")}} を組み合わせて、オーディオ処理を行うグラフを表現しています。通常の `AudioContext`と異なり、`OfflineAudioContext` はオーディオを出力せず、バッファー内で高速に処理を行います。
- {{domxref("OfflineAudioContext/complete_event", "complete")}} (イベント)
  - : `complete` イベントは {{domxref("OfflineAudioContext")}} の処理が終了した時に発火します。
- {{domxref("OfflineAudioCompletionEvent")}}
  - : `OfflineAudioCompletionEvent` は {{domxref("OfflineAudioContext")}} の処理が終了したことを表します。 {{domxref("OfflineAudioContext/complete_event", "complete")}} イベントは、このインターフェイスを使用します。

## ガイドとチュートリアル

{{SubpagesWithSummaries}}

## 例

GitHub の [webaudio-example リポジトリー](https://github.com/mdn/webaudio-examples/) に多数の例が掲載されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

### チュートリアル/ガイド

- [ウェブオーディオ API の背後にある基本概念](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [高度なテクニック: 音の作成、シーケンス、タイミング、スケジューリング](/ja/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [メディアおよびウェブオーディオ API の自動再生ガイド](/ja/docs/Web/Media/Guides/Autoplay)
- [Using IIR filters](/ja/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [ウェブオーディオ API による視覚化](/ja/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [ウェブオーディオの空間設定の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [ConstantSourceNode で複数の引数を制御する](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mixing Positional Audio and WebGL (2012)](https://web.dev/articles/webaudio-positional-audio)
- [Developing Game Audio with the Web Audio API (2012)](https://web.dev/articles/webaudio-games)

### ライブラリー

- [Tone.js](https://tonejs.github.io/): ブラウザー上での対話型音楽制作のためのフレームワーク。
- [howler.js](https://github.com/goldfire/howler.js/): デフォルトで[ウェブオーディオ API](https://webaudio.github.io/web-audio-api/) を使用し、代替として [HTML オーディオ](https://html.spec.whatwg.org/multipage/media.html#the-audio-element)を利用できるほか、その他の便利な機能も提供する JavaScript オーディオライブラリーです。
- [Mooog](https://github.com/mattlima/mooog): AudioNode の jQuery スタイルのチェーン処理、ミキサー形式のセンド／リターンなど。
- [XSound](https://xsound.jp/): シンセサイザー、エフェクト、可視化、録音などのためのウェブオーディオ API ライブラリー
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): ウェブオーディオ API を使用して、さまざまな音源からの動画と音声を記録し、1つのファイルに結合する HTML 動画語学学習用ウェブアプリケーション（[GitHub のソース](https://github.com/chrisjohndigital/OpenLang)）
- [Pts.js](https://ptsjs.org/): ウェブオーディオの可視化を簡素化 ([ガイド](https://ptsjs.org/guide/sound-0800))

### 関連トピック

- [ウェブメディア技術](/ja/docs/Web/Media)
- [ウェブのメディアの種類と形式のガイド](/ja/docs/Web/Media/Guides/Formats)
