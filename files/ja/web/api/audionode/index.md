---
title: AudioNode
slug: Web/API/AudioNode
---

{{APIRef()}}

The AudioNode interface is a generic interface for representing an audio processing module like an audio source (e.g. an HTML {{HTMLElement("audio")}} or {{HTMLElement("video")}} element), audio destination, intermediate processing module (e.g. a filter like {{domxref("BiquadFilterNode")}} or {{domxref("ConvolverNode")}}), or volume control (like {{domxref("GainNode")}}).

AudioNode インターフェースは、オーディオソース（例：\<audio>、\<video>, OscillatorNode、音声出力、中間処理モジュール（BiquadFilterNode や ConvolverNode のようなフィルター）、GainNode のような音量コントロール）などの音声処理モジュールを表現するための、一般的なインターフェースです。

![AudioNodes participating in an AudioContext create a audio routing graph.](WebAudioBasics.png)

An `AudioNode` has inputs and outputs, each with a given amount of _channels_.\_ _An `AudioNode` with zero inputs and exactly one output is called a \_source node_. The exactly processing done varies from one `AudioNode` to another but, in general, a node reads its inputs, does some audio-related processing, and generates new values for its outputs.

AudioNode は複数の入力、出力を持ち、それぞれがチャンネルを持ちます。入力が無く、一つの出力を持つ AudioNode は、ソースノードと呼ばれます。厳密な処理は AudioNode によって異なりますが,　基本的に、ノードは入力を読み込み、何らかの音声関連の処理を行ってから、出力のための新しい値を出力します。

Different nodes can be linked together to build a _processing graph_. Such a graph is contained in an {{domxref("AudioContext")}}. Each `AudioNode` participates in exactly one such context. In general, processing nodes inherit the properties and methods of `AudioNode`, but also define their own functionality on top. See the individual node pages for more details, as listed on the [Web Audio API](/ja/docs/Web/API/Web_Audio_API) homepage.

ノードは音声処理のグラフを構築するため、互いに関連付けることができます。そのようなグラフは一つの{{domxref("AudioContext")}}に含まれます。それぞれの AudioNode は必ず一つの context に含まれます。一般に、ノードは AudioNode のプロパティやメソッドを継承し、独自の機能が定義されています。個々のノードについての詳細を知りたい場合は、「Web Audio API」ホームページを御覧ください。

> **メモ:** An `AudioNode` can be target of events, therefore it implements the {{domxref("EventTarget")}} interface.

## 属性

- {{domxref("AudioNode.context")}} {{readonlyInline}}
  - : ノードが含まれているプロセッシンググラフを表現するオブジェクト（{{domxref("AudioContext")}}）を返す。

<!---->

- {{domxref("AudioNode.numberOfInputs")}} {{readonlyInline}}
  - : ノードに与えられた入力の数を返す。ソースノードは numberOfInputs プロパティが 0 のものとして定義されている。

<!---->

- {{domxref("AudioNode.numberOfOutputs")}} {{readonlyInline}}
  - : ノードの出力の数を返す。Destination ノード（{{ domxref("AudioDestinationNode") }}）はこの値として 0 を持つ。

<!---->

- {{domxref("AudioNode.channelCount")}}
  - : Represents an integer used to determine how many channels are used when [up-mixing and down-mixing](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Up-mixing_and_down-mixing) connections to any inputs to the node. Its usage and precise definition depend on the value of {{domxref("AudioNode.channelCountMode")}}.

<!---->

- {{domxref("AudioNode.channelCountMode")}}
  - : Represents an enumerated value describing the way channels must be matched between the node's inputs and outputs.
- {{domxref("AudioNode.channelInterpretation")}}
  - : Represents an enumerated value describing the meaning of the channels. This interpretation will define how audio [up-mixing and down-mixing](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Up-mixing_and_down-mixing) will happen.
    The possible values are `"speakers"` or `"discrete"`.

## メソッド

_Also implements methods from the interface_ {{domxref("EventTarget")}}.

- {{domxref("AudioNode.connect(AudioNode)")}}
  - : Allows us to connect one output of this node to one input of another node.
- {{domxref("AudioNode.connect(AudioParam)")}}
  - : Allows us to connect one output of this node to one input of an audio parameter.
- {{domxref("AudioNode.disconnect()")}}
  - : Allows us to disconnect the current node from another one it is already connected to.

## 例

This simple snippet of code shows the creation of some audio nodes, and how the AudioNode properties and methods can be used. You can find examples of such usage on any of the examples linked to on the [Web Audio API](/ja/docs/Web/API/Web_Audio_API) landing page (for example [Violent Theremin](https://github.com/mdn/violent-theremin).)

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.context;
oscillator.numberOfInputs;
oscillator.numberOfOutputs;
oscillator.channelCount;
```

## 使用

| Specification                                                                                | Status                               | Comment |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#the-audionode-interface', 'AudioNode')}} | {{Spec2('Web Audio API')}} |         |

## ブラウザ互換性

{{Compat("api.AudioNode")}}

## 関連情報

- [Web Audio API の利用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
