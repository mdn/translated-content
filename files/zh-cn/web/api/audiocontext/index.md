---
title: AudioContext
slug: Web/API/AudioContext
---

{{APIRef("Web Audio API")}}

`AudioContext`接口表示由链接在一起的音频模块构建的音频处理图，每个模块由一个{{domxref("AudioNode")}}表示。音频上下文控制它包含的节点的创建和音频处理或解码的执行。在做任何其他操作之前，您需要创建一个`AudioContext`对象，因为所有事情都是在上下文中发生的。建议创建一个`AudioContext`对象并复用它，而不是每次初始化一个新的`AudioContext`对象，并且可以对多个不同的音频源和管道同时使用一个`AudioContext`对象。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("AudioContext.AudioContext", "AudioContext()")}}
  - : 创建并返回一个新的 `AudioContext` 对象。

## 属性

_也从其父接口继承属性，{{domxref("BaseAudioContext")}}._

- {{domxref("AudioContext.baseLatency")}} {{readonlyinline}} {{experimental_inline}}
  - : 返回{{domxref("AudioContext")}}将音频从{{domxref("AudioDestinationNode")}}传递到音频子系统的处理延迟的秒数。
- {{domxref("AudioContext.outputLatency")}} {{readonlyinline}} {{experimental_inline}}
  - : 返回对当前音频上下文的预估输出延迟。

## 方法

_也从其父接口继承方法 , {{domxref("BaseAudioContext")}}._

- {{domxref("AudioContext.close()")}}
  - : 关闭一个音频环境，释放任何正在使用系统资源的音频。
- {{domxref("AudioContext.createMediaElementSource()")}}
  - : 创建一个{{domxref("MediaElementAudioSourceNode")}}接口来关联{{domxref("HTMLMediaElement")}}. 这可以用来播放和处理来自{{HTMLElement("video")}}或{{HTMLElement("audio")}} 元素的音频。
- {{domxref("AudioContext.createMediaStreamSource()")}}
  - : 创建一个{{domxref("MediaStreamAudioSourceNode")}}接口来关联可能来自本地计算机麦克风或其他来源的音频流{{domxref("MediaStream")}}。
- {{domxref("AudioContext.createMediaStreamDestination()")}}
  - : 创建一个{{domxref("MediaStreamAudioDestinationNode")}}接口来关联可能储存在本地或已发送至其他计算机的{{domxref("MediaStream")}}音频。
- {{domxref("AudioContext.createMediaStreamTrackSource()")}}
  - : 创建一个{{domxref("MediaStreamTrackAudioSourceNode")}}，它与一个{{domxref("MediaStream")}}相关联，表示一个媒体流轨迹。
- {{domxref("AudioContext.getOutputTimestamp()")}}
  - : 返回一个新的 AudioTimestamp 对象，该对象包含两个与当前音频上下文相关的音频时间戳。
- {{domxref("AudioContext.resume()")}}
  - : 恢复之前被暂停的音频上下文中的时间进程。
- {{domxref("AudioContext.suspend()")}}
  - : 暂停音频上下文中的时间进程，暂停音频硬件访问并减少进程中的 CPU/电池使用。

## 例子

简单声明：

```js
var audioCtx = new AudioContext();
```

跨浏览器的方式：

```plain
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var oscillatorNode = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var finish = audioCtx.destination;
// etc.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- 使用 [Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("OfflineAudioContext")}}
