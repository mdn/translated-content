---
title: AudioContext.createBiquadFilter()
slug: Web/API/BaseAudioContext/createBiquadFilter
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }} 的`createBiquadFilter()` 方法创建了一个 {{ domxref("BiquadFilterNode") }}, 它提供了一个可以指定多个不同的一般滤波器类型的双二阶滤波器。

## 语法

```js
var audioCtx = new AudioContext();
var biquadFilter = audioCtx.createBiquadFilter();
```

### 返回

一个 {{domxref("BiquadFilterNode")}}.

## 示例

这个例子展示了一个利用 AudioContext 创建四项滤波器节点（Biquad filter node）的例子。想要查看完整工作的示例，请查看我们的 For [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 样例（也可以查看 [源码](https://github.com/mdn/voice-change-o-matic) ）.

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

//set up the different audio nodes we will use for the app
var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();
var convolver = audioCtx.createConvolver();

// connect the nodes together

source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);

// Manipulate the Biquad filter

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
