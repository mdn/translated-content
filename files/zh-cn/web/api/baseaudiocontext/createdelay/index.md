---
title: AudioContext.createDelay()
slug: Web/API/BaseAudioContext/createDelay
---

{{ APIRef("Web Audio API") }}

`createDelay()` 是 {{ domxref("AudioContext") }} 的一个方法，作用是将输入音频信号延迟一定时间。（比如可以实现 对着话筒说句话，然后几秒后 这句话从音响里播放出来）

## 语法

```js
var audioCtx = new AudioContext();
var synthDelay = audioCtx.createDelay(maxDelayTime);
```

### 参数

- _maxDelayTime_
  - : 设置最大允许延迟的时间，以“秒”为单位

### 返回

A {{domxref("DelayNode")}}. The default {{domxref("DelayNode.delayTime")}} if no parameter is passed to `createDelay()` is 0 seconds.

以上是原文，大意是返回延时时间，没有设置时默认是 0

## 示例

我们创建了一个允许你循环播放三个不同样例的简单示例——参阅 [create-delay](https://chrisdavidmills.github.io/create-delay/)（你也可以[查看源代码](https://github.com/chrisdavidmills/create-delay)）。如果你只按下播放按钮，循环将立刻开始；如果你将滑块向右滑动，然后按下播放按钮，则会引入延迟，因此循环的声音不会立刻开始播放。

```js
const audioCtx = new AudioContext();

const synthDelay = audioCtx.createDelay(5.0);

// …

let synthSource;

playSynth.onclick = () => {
  synthSource = audioCtx.createBufferSource();
  synthSource.buffer = buffers[2];
  synthSource.loop = true;
  synthSource.start();
  synthSource.connect(synthDelay);
  synthDelay.connect(destination);
  this.setAttribute("disabled", "disabled");
};

stopSynth.onclick = () => {
  synthSource.disconnect(synthDelay);
  synthDelay.disconnect(destination);
  synthSource.stop();
  playSynth.removeAttribute("disabled");
};

// …

let delay1;
rangeSynth.oninput = () => {
  delay1 = rangeSynth.value;
  synthDelay.delayTime.setValueAtTime(delay1, audioCtx.currentTime);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
