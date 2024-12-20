---
title: AudioContext.createWaveShaper()
slug: Web/API/BaseAudioContext/createWaveShaper
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }} 接口的 createWaveShaper() 方法创建了 表示非线性失真的{{ domxref("WaveShaperNode") }}。该节点通常被用来给音频添加失真效果

## 语法

```js
var audioCtx = new AudioContext();
var distortion = audioCtx.createWaveShaper();
```

### 返回

A {{domxref("WaveShaperNode")}}.

## 示例

下面的例子展示了 AudioContext 创建一个波形整形器节点的基本用法。有关应用示例/信息，请查看我们的 [voice-change-O-matic demo](https://mdn.github.io/voice-change-o-matic/) 演示（有关代码，请参阅[app.js](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js)）。

> [!NOTE]
> 实现失真曲线并不是简单的事情，你可能需要到处找资料来找到这样的算法。我们在[Stack Overflow](https://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion)上找到了以下的失真曲线代码

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var distortion = audioCtx.createWaveShaper();

  ...

function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

  ...

distortion.curve = makeDistortionCurve(400);
distortion.oversample = '4x';
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
