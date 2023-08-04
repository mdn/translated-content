---
title: AudioWorkletNode
slug: Web/API/AudioWorkletNode
---

{{APIRef("Web Audio API")}} {{SeeCompatTable}}

虽然这个接口可以在 [secure contexts](/zh-CN/docs/Web/Security/Secure_Contexts) 之外调用，但是 {{domxref("BaseAudioContext.audioWorklet")}} 属性不行，从而 {{domxref("AudioWorkletProcessor")}} 不能在外部定义。

[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 中的 **`AudioWorkletNode`** 接口代表了用户定义的{{domxref("AudioNode")}}的基类，该基类可以与其他节点一起连接到音频路由图。其具有关联的{{domxref("AudioWorkletProcessor")}}, 它在 Web Audio 执行实际的音频处理。

## 构造函数

- {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}}
  - : 为 `AudioWorkletNode` 创建一个新的实例对象。

## 属性

_也继承父类的属性，{{domxref("AudioNode")}}_.

- {{domxref("AudioWorkletNode.port")}} {{readonlyinline}}
  - : 返回一个 {{domxref("MessagePort")}} 用于节点与其关联的 {{domxref("AudioWorkletProcessor")}} 间的双向通讯。另一端在处理器属性{{domxref("AudioWorkletProcessor.port", "port")}} 下可用。
- {{domxref("AudioWorkletNode.parameters")}} {{readonlyinline}}
  - : 返回一个 {{domxref("AudioParamMap")}} — {{domxref("AudioParam")}} 对象的集合。它们在创建 `AudioWorkletProcessor`的过程中被实例化。如果 `AudioWorkletProcessor` 有一个静态的 {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} getter，从其返回的 {{domxref("AudioParamDescriptor")}} 数组用于在 `AudioWorkletNode` 创建 `AudioParam` 对象。通过这种机制，使得 `AudioParam` 对象可以从 `AudioWorkletNode` 中访问。你可以在与其关联的 `AudioWorkletProcessor` 中使用它的值。

### Event handlers

- {{domxref("AudioWorkletNode.onprocessorerror")}}
  - : 在关联的 {{domxref("AudioWorkletProcessor")}} 对象发生异常时触发。一旦触发，处理器及其节点将在其整个生命周期内处于输出静默状态。

## 方法

_同样继承了其父类的方法，{{domxref("AudioNode")}}_.

_AudioWorkletNode 接口未定义其自己的任何方法。_

## 示例

在本示例中我们创建了 `AudioWorkletNode` 对象，它会输出白噪声。

首先，我们需要定义一个自定义的 {{domxref("AudioWorkletProcessor")}}, 它将输出白噪声并进行注册。注意，这需要在一个单独的文件中完成。

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1;
      }
    });
    return true;
  }
}

registerProcessor("white-noise-processor", WhiteNoiseProcessor);
```

接下来，在脚本主文件中一个 `AudioWorkletNode` 实例，并传递处理器的名称，然后将该实例连接到一个 audio graph.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("white-noise-processor.js");
const whiteNoiseNode = new AudioWorkletNode(
  audioContext,
  "white-noise-processor",
);
whiteNoiseNode.connect(audioContext.destination);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
