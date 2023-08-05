---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
---

{{APIRef("Web Audio API")}}

[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)的 **`AudioWorkletProcessor`** 接口代表了一个 自定义的音频处理代码 {{domxref("AudioWorkletNode")}}. 它身处于 {{domxref("AudioWorkletGlobalScope")}} 并运行在 Web Audio rendering 线程上。同时，一个建立在其基础上的 {{domxref("AudioWorkletNode")}} 运行在主线程上。

## 构造函数

> **备注：** `AudioWorkletProcessor` 及其子类不能通过用户提供的的代码直接实例化。它们只能随着与之相联系{{domxref("AudioWorkletNode")}}s 的创建而被其创建再内部。其子类的构造函数将被一个可选对象调用，因此您可以执行自定义的初始化过程——详细信息请参见构造函数页面。

- {{domxref("AudioWorkletProcessor.AudioWorkletProcessor", "AudioWorkletProcessor()")}}
  - : 创建一个 `AudioWorkletProcessor` 对象的新实例。

## 属性

- {{domxref("AudioWorkletProcessor.port", "port")}} {{readonlyinline}}
  - : 返回一个用于在处理程序和其所属的{{domxref("AudioWorkletNode")}}间双向通信的 {{domxref("MessagePort")}} 。另一端 可通过该节点的{{domxref("AudioWorkletNode.port", "port")}} 属性使用。

## 方法

_`AudioWorkletProcessor` 接口没有定义任何自己的方法。但是，您必须提供一个 {{domxref("AudioWorkletProcessor.process", "process()")}} 方法，用以处理音频流。_

## 事件

_`AudioWorkletProcessor` 接口不响应任何事件。_

## 使用说明

### Deriving classes

要自定义音频处理代码，你必须从`AudioWorkletProcessor` 接口派生一个类。这个派生类必须具有在该接口中不曾定义的{{domxref("AudioWorkletProcessor.process", "process")}} 方法。该方法将被每个含有 128 样本帧的块调用并且接受输入和输出数组以及自定义的{{domxref("AudioParam")}}s (如果它们刚被定义了) 的计算值作为参数。您可以使用输入和 音频参数值去填充输出数组，这是默认的用于使输出静音。

Optionally, if you want custom {{domxref("AudioParam")}}s on your node, you can supply a {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} property as a _static getter_ on the processor. The array of {{domxref("AudioParamDescriptor")}}-based objects returned is used internally to create the {{domxref("AudioParam")}}s during the instantiation of the `AudioWorkletNode`.

The resulting `AudioParam`s reside in the {{domxref("AudioWorkletNode.parameters", "parameters")}} property of the node and can be automated using standard methods such as [`linearRampToValueAtTime`](/zh-CN/docs/Web/API/AudioParam/linearRampToValueAtTime). Their calculated values will be passed into the {{domxref("AudioWorkletProcessor.process", "process()")}} method of the processor for you to shape the node output accordingly.

### 处理音频

一个创建自定义音频处理算法的步骤的实例：

1. 创建一个独立的文件;
2. 在这个文件中：

   1. Extend the `AudioWorkletProcessor` class (see ["Deriving classes" section](#Deriving_classes)) and supply your own {{domxref("AudioWorkletProcessor.process", "process()")}} method in it;
   2. Register the processor using {{domxref("AudioWorkletGlobalScope.registerProcessor()")}} method;

3. Load the file using {{domxref("Worklet.addModule", "addModule()")}} method on your audio context's {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} property;
4. Create an {{domxref("AudioWorkletNode")}} based on the processor. The processor will be instantiated internally by the `AudioWorkletNode` constructor.
5. Connect the node to the other nodes.

## 例子

In the example below we create a custom {{domxref("AudioWorkletNode")}} that outputs white noise.

First, we need to define a custom `AudioWorkletProcessor`, which will output white noise, and register it. Note that this should be done in a separate file.

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

Next, in our main script file we'll load the processor, create an instance of {{domxref("AudioWorkletNode")}}, passing it the name of the processor, then connect the node to an audio graph.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("white-noise-processor.js");
const whiteNoiseNode = new AudioWorkletNode(
  audioContext,
  "white-noise-processor",
);
whiteNoiseNode.connect(audioContext.destination);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
