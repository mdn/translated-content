---
title: AudioNode.connect()
slug: Web/API/AudioNode/connect
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioNode") }} 接口的 `connect()` 方法使你能将一个节点的输出连接到一个指定目标，这个指定的目标可能是另一个 `AudioNode`（从而将音频数据引导到下一个指定节点）或一个{{domxref("AudioParam")}}, 以便上一个节点的输出数据随着时间流逝能自动地对下一个参数值进行改变。

## 语法

```js-nolint
connect(destination)
connect(destination, outputIndex)
connect(destination, outputIndex, inputIndex)
```

### 属性

- `destination`
  - : 需要连接的 {{domxref("AudioNode")}} 或 {{domxref("AudioParam")}}.
- `outputIndex` {{optional_inline}}
  - : 一个索引，用于描述当前 `AudioNode` 的哪个输出会连接到 destination。索引数字是由输出频道（详见 [Audio channels](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)）的数量来确定的。当你只能将给定的输出连接到给定的输入一次（重复的尝试会被忽略）时，可以通过多次调用 `connect()` 将一个输出连接到多个输入。可以通过这样来实现扇出。这个参数的默认值为 0。
- `inputIndex` {{optional_inline}}
  - : 一个索引，用于描述当前 `AudioNode` 会连接到 destination 的哪个输入，它的默认值是 0。索引数字是由输入频道（详见 [Audio channels](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)）的数量来确定的。将一个 `AudioNode` 连接回之前的 `AudioNode`，以此形成一个圈是可行的。不过只在这个圈里有至少一个 {{domxref("DelayNode")}} 才可行。否则会抛出一个 `NotSupportedError` 异常。此参数在 destination 是 {{domxref("AudioParam")}}时不可用。

### 返回值

如果 destination 是一个节点， `connect()` 返回 destination 所表示的 {{domxref("AudioNode")}} 对象的引用，允许你链式地调用数个 `connect()` 。某些浏览器关于该接口的旧实现会返回 {{jsxref("undefined")}}。

如果 destination 是一个 `AudioParam`、`connect()` 返回 `undefined`。

### 异常

- `IndexSizeError`
  - : 这个异常表明 `outputIndex` 或 `inputIndex` 与当前输入或输出不符。
- `InvalidAccessError`
  - : 目标节点与原节点不在同一个音频上下文。
- `NotSupportedError`
  - : 该链接会形成一个闭环（音频在这个环里不断重复经过同一个节点）并且这个闭环里没有 {{domxref("DelayNode")}} 来防止产生的波形被卡住，不停地构建相同的音频帧。

## 示例

### Connecting to an audio input

The most obvious use of the `connect()` method is to direct the audio output from one node into the audio input of another node for further processing. For example, you might send the audio from a {{domxref("MediaElementAudioSourceNode")}}—that is, the audio from an HTML5 media element such as {{HTMLElement("audio")}}—through a band pass filter implemented using a {{domxref("BiquadFilterNode")}} to reduce noise before then sending the audio along to the speakers.

This example creates an oscillator, then links it to a gain node, so that the gain node controls the volume of the oscillator node.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

### AudioParam example

In this example, we will be altering the gain value of a {{domxref("GainNode")}} using an {{domxref("OscillatorNode")}} with a slow frequency value. This technique is know as an _LFO_-controlled parameter.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

// create an normal oscillator to make sound
var oscillator = audioCtx.createOscillator();

// create a second oscillator that will be used as an LFO (Low-frequency
// oscillator), and will control a parameter
var lfo = audioCtx.createOscillator();

// set the frequency of the second oscillator to a low number
lfo.frequency.value = 2.0; // 2Hz: two oscillations par second

// create a gain whose gain AudioParam will be controlled by the LFO
var gain = audioCtx.createGain();

// connect the LFO to the gain AudioParam. This means the value of the LFO
// will not produce any audio, but will change the value of the gain instead
lfo.connect(gain.gain);

// connect the oscillator that will produce audio to the gain
oscillator.connect(gain);

// connect the gain to the destination so we hear sound
gain.connect(audioCtx.destination);

// start the oscillator that will produce audio
oscillator.start();

// start the oscillator that will modify the gain value
lfo.start();
```

#### AudioParam notes

It is possible to connect an `AudioNode` output to more than one {{ domxref("AudioParam") }}, and more than one AudioNode output to a single {{ domxref("AudioParam") }}, with multiple calls to `connect()`. [Fan-in and fan-out](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out) are therefore supported.

An {{ domxref("AudioParam") }} will take the rendered audio data from any `AudioNode` output connected to it and convert it to mono by [down-mixing](/zh-CN/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) (if it is not already mono). Next, it will mix it together with any other such outputs, and the intrinsic parameter value (the value the {{ domxref("AudioParam") }} would normally have without any audio connections), including any timeline changes scheduled for the parameter.

Therefore, it is possible to choose the range in which an {{domxref("AudioParam")}} will change by setting the value of the {{domxref("AudioParam")}} to the central frequency, and to use a {{domxref("GainNode")}} between the audio source and the {{domxref("AudioParam")}} to adjust the range of the {{domxref("AudioParam")}} changes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
