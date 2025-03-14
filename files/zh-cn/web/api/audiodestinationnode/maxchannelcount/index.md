---
title: AudioDestinationNode.maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioDestinationNode") }} 接口的 `maxchannelCount` 属性是一个表示物理设备能处理最大通道数的无符号长整型数。

{{domxref("AudioNode.channelCount")}} 属性值只能在 0 和这个值 (两端包含) 之间。如果 `maxChannelCount`为 `0`,例如在 {{domxref("OfflineAudioContext")}}, 表示音频通道不能被改变。

## 语法

```js
var audioCtx = new AudioContext();
var myDestination = audioCtx.destination;
myDestination.maxChannelCount = 2;
```

### 值

一个无符号长整型数

## 例子

下面假设了一个简单的音频环境，设置其中 `AudioDestinationNode` 的 `maxChannelCount` 值为 2：

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);
```

为看到一个更完整的实施，请访问我们的 MDN Web Audio 例子，如 [Voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 或者 [Violent Theremin](https://mdn.github.io/violent-theremin/).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
