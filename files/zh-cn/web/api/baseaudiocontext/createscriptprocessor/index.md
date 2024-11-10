---
title: AudioContext.createScriptProcessor() 方法
slug: Web/API/BaseAudioContext/createScriptProcessor
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

{{ domxref("AudioContext") }} 接口的 `createScriptProcessor()` 方法创建一个 {{domxref("ScriptProcessorNode")}}，用于直接使用 JavaScript 处理音频。

## 语法

```js
var audioCtx = new AudioContext();
myScriptProcessor = audioCtx.createScriptProcessor(
  bufferSize,
  numberOfInputChannels,
  numberOfOutputChannels,
);
```

### 参数

- `bufferSize`

  - : 缓冲区大小，以样本帧为单位。具体来讲，缓冲区大小必须是下面这些值当中的某一个：256, 512, 1024, 2048, 4096, 8192, 16384。如果未提供参数，或者参数为 0，则取当前环境最合适的缓冲区大小，取值为 2 的幂次方的一个常数。该取值在该结点的整个生命周期中都不变。

  该取值控制着 `audioprocess` 事件被分派的频率，以及每一次调用多少样本帧被处理。较低的 `bufferSize` 将导致一定的延迟，而选取较高的 `bufferSize` 就要注意避免音频的崩溃和故障。推荐不要给定具体的缓冲区大小，让系统自己选一个好的值来平衡延迟和音频质量。

- `numberOfInputChannels`
  - : 值为整数，用于指定输入结点的声道的数量，默认值是 2，最高能取 32.
- `numberOfOutputChannels`
  - : 值为整数，用于指定输出结点的声道的数量，默认值是 2，最高能取 32.

> [!WARNING]
> Webkit（版本 31）要求调用这个方法的时候必须传入一个有效的 `bufferSize`。

> [!NOTE]
> 同时设置 `numberOfInputChannels`、`numberOfOutputChannels` 为零是无效的。

### 返回

{{domxref("ScriptProcessorNode")}}。

## 示例

### 使用脚本处理器添加白噪音

下面的示例展示了如何使用 `ScriptProcessorNode` 获取通过 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} 加载的音轨，并对其进行处理，为输入音轨的每个音频样本添加一点白噪声，然后通过 {{domxref("AudioDestinationNode")}} 进行播放。

对于每个通道和每个样本帧，脚本节点的 {{domxref("ScriptProcessorNode.audioprocess_event", "audioprocess")}} 事件处理程序都会使用相关的 `audioProcessingEvent` 来循环处理输入缓冲区的每个通道和每个通道中的每个样本，并添加少量白噪声，然后将结果设置为每种情况下的输出样本。

> [!NOTE]
> 完整的示例参照 [script-processor-node](https://mdn.github.io/webaudio-examples/script-processor-node/) github (查看源码 [source code](https://github.com/mdn/webaudio-examples/blob/master/script-processor-node/index.html).)

```js
const myScript = document.querySelector("script");
const myPre = document.querySelector("pre");
const playButton = document.querySelector("button");

// Create AudioContext and buffer source
let audioCtx;

async function init() {
  audioCtx = new AudioContext();
  const source = audioCtx.createBufferSource();

  // Create a ScriptProcessorNode with a bufferSize of 4096 and
  // a single input and output channel
  const scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);

  // Load in an audio track using fetch() and decodeAudioData()
  try {
    const response = await fetch("viper.ogg");
    const arrayBuffer = await response.arrayBuffer();
    source.buffer = await audioCtx.decodeAudioData(arrayBuffer);
  } catch (err) {
    console.error(
      `Unable to fetch the audio file: ${name} Error: ${err.message}`,
    );
  }

  // Give the node a function to process audio events
  scriptNode.addEventListener("audioprocess", (audioProcessingEvent) => {
    // The input buffer is the song we loaded earlier
    let inputBuffer = audioProcessingEvent.inputBuffer;

    // The output buffer contains the samples that will be modified and played
    let outputBuffer = audioProcessingEvent.outputBuffer;

    // Loop through the output channels (in this case there is only one)
    for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
      let inputData = inputBuffer.getChannelData(channel);
      let outputData = outputBuffer.getChannelData(channel);

      // Loop through the 4096 samples
      for (let sample = 0; sample < inputBuffer.length; sample++) {
        // make output equal to the same as the input
        outputData[sample] = inputData[sample];

        // add noise to each output sample
        outputData[sample] += (Math.random() * 2 - 1) * 0.1;
      }
    }
  });

  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
  source.start();

  // When the buffer source stops playing, disconnect everything
  source.addEventListener("ended", () => {
    source.disconnect(scriptNode);
    scriptNode.disconnect(audioCtx.destination);
  });
}

// wire up play button
playButton.addEventListener("click", () => {
  if (!audioCtx) {
    init();
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
