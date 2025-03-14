---
title: AudioContext.createScriptProcessor() 方法
slug: Web/API/BaseAudioContext/createScriptProcessor
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

{{domxref("AudioContext")}} 接口的 `createScriptProcessor()` 方法创建一个 {{domxref("ScriptProcessorNode")}}，用于直接使用 JavaScript 处理音频。

> [!NOTE]
> 此特性已被 [AudioWorklet](/zh-CN/docs/Web/API/AudioWorklet) 和 {{domxref("AudioWorkletNode")}} 接口替代。

## 语法

```js-nolint
createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels)
```

### 参数

- `bufferSize`

  - : 以采样帧为单位的缓冲区大小。具体来讲，缓冲区大小必须是下面这些值当中的某一个：256、512、1024、2048、4096、8192、16384。如果未提供参数，或者参数为 0，则取当前环境最合适的缓冲区大小，取值为 2 的幂次方的一个常数（其在该结点的整个生命周期中都不变）。

    该取值控制着 `audioprocess` 事件被分派的频率，以及每一次调用多少采样帧被处理。更小的 `bufferSize` 意味着更低的延迟。而更大的值则可以避免音频的中断和故障。推荐不要给定具体的缓冲区大小，让系统自己选一个好的值来平衡延迟和音频质量。

- `numberOfInputChannels`
  - : 整数，用于指定输入结点的声道的数量，默认值为 2 且最高可取 32。
- `numberOfOutputChannels`
  - : 整数，用于指定输出结点的声道的数量，默认值为 2 且最高可取 32。

> [!WARNING]
> Webkit（版本 31）要求调用这个方法的时候必须传入一个有效的 `bufferSize`。

> [!NOTE]
> 同时将 `numberOfInputChannels`、`numberOfOutputChannels` 设置为零是无效的。

### 返回值

{{domxref("ScriptProcessorNode")}}。

## 示例

### 使用脚本处理器添加白噪音

下面的示例展示了如何使用 `ScriptProcessorNode` 获取通过 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} 加载的音轨并对其进行处理，为输入音轨的每个音频样本添加一点白噪声，然后通过 {{domxref("AudioDestinationNode")}} 进行播放。

对于每个通道和每个采样帧，脚本节点的 {{domxref("ScriptProcessorNode.audioprocess_event", "audioprocess")}} 事件处理器都会使用相关的 `audioProcessingEvent` 来循环处理输入缓冲区的每个通道和每个通道中的每个样本，并添加少量白噪声，然后将结果设置为每种情况下的输出样本。

> [!NOTE]
> 你可以[在线运行完整的示例](https://mdn.github.io/webaudio-examples/script-processor-node/)，或查看[源代码](https://github.com/mdn/webaudio-examples/tree/main/script-processor-node)。

```js
const myScript = document.querySelector("script");
const myPre = document.querySelector("pre");
const playButton = document.querySelector("button");

// 创建 AudioContext 与缓冲源
let audioCtx;

async function init() {
  audioCtx = new AudioContext();
  const source = audioCtx.createBufferSource();

  // 创建一个缓冲区大小（bufferSize）为 4096、
  // 单一输入和输出通道的 ScriptProcessorNode
  const scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);

  // 使用 fetch() 和 decodeAudioData() 来加载音轨
  try {
    const response = await fetch("viper.ogg");
    const arrayBuffer = await response.arrayBuffer();
    source.buffer = await audioCtx.decodeAudioData(arrayBuffer);
  } catch (err) {
    console.error(
      `Unable to fetch the audio file: ${name} Error: ${err.message}`,
    );
  }

  // 向结点添加一个用于处理音频事件的函数
  scriptNode.addEventListener("audioprocess", (audioProcessingEvent) => {
    // 这里的输入缓冲区即为我们前面所加载的歌曲
    let inputBuffer = audioProcessingEvent.inputBuffer;

    // 输出缓冲区则会包含将要被修改、播放的采样
    let outputBuffer = audioProcessingEvent.outputBuffer;

    // 在输出通道间循环（在本例中，输出通道仅有一个）
    for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
      let inputData = inputBuffer.getChannelData(channel);
      let outputData = outputBuffer.getChannelData(channel);

      // 循环迭代 4096 组采样
      for (let sample = 0; sample < inputBuffer.length; sample++) {
        // 让输出等同于输入
        outputData[sample] = inputData[sample];

        // 再向其中加一些噪音
        outputData[sample] += (Math.random() * 2 - 1) * 0.1;
      }
    }
  });

  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
  source.start();

  // 当缓冲源停止播放的时候，断开一切的连接
  source.addEventListener("ended", () => {
    source.disconnect(scriptNode);
    scriptNode.disconnect(audioCtx.destination);
  });
}

// 连接播放按钮
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

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
