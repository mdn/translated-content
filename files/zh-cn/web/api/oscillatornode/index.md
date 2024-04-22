---
title: OscillatorNode
slug: Web/API/OscillatorNode
---

{{APIRef("Web Audio API")}}

**`OscillatorNode`** 接口表示一个振荡器，它产生一个周期的波形信号（如正弦波）。它是一个 {{domxref("AudioScheduledSourceNode")}} 音频处理模块，这个模块会生成一个指定频率的波形信号（即一个固定的音调）

一个 `OscillatorNode` 对象是通过 {{domxref("AudioContext.createOscillator()")}} 方法创建的。它总是有一个输出，但没有输入。它的基础属性（定义见 {{domxref("AudioNode")}} ）默认如下：

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>max</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code> (not used in the default count mode)</td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>speakers</code></td>
    </tr>
  </tbody>
</table>

## 构造函数

- {{domxref("OscillatorNode.OscillatorNode", "OscillatorNode()")}}
  - : 创建一个 OscillatorNode 对象的示例，为 node[属性](#属性)提供可选的一个定义默认值的对象。如果默认值可接受，你可以简单地调用{{domxref("AudioContext.createOscillator()")}}工厂方法。

## 属性

_继承自父类_ _{{domxref("AudioScheduledSourceNode")}}，并添加下列属性：_

- {{domxref("OscillatorNode.frequency")}}
  - : 一个 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} 对象的属性代表了振动的频率（单位为赫兹 hertz） (虽然返回的`AudioParam 是只读的，但是它所表示的值是可以修改的`)。默认值是 440 Hz (基本的中 A 音高).
- {{domxref("OscillatorNode.detune")}}
  - : 一个 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} 对象的属性代表振动的音高微调（单位是 cent 音分） (虽然返回的`AudioParam 是只读的，但是它所表示的值是可以修改的`).。默认值是 0。
- {{domxref("OscillatorNode.type")}}
  - : 一个字符串，决定 `OscillatorNode 播放的声音的周期波形`; 它的值可以是基础值中的一个或者用户使用 {{domxref("PeriodicWave")}}。不同的波形可以产生不同的声调。基础值有 `"sine"`、`"square"`、`"sawtooth"`、`"triangle"` 和 `"custom"`。默认值是 `"sine"`。

## 方法

_继承自父级，_ _{{domxref("AudioScheduledSourceNode")}}_, 自有方法如下：

- {{domxref("OscillatorNode.setPeriodicWave()")}}
  - : 设置一个 {{domxref("PeriodicWave")}} ,它描述了一个周期的波形常常替代标准波形之一; 调用这个方法来设置用户自定义的波形。它取代了已经废弃了的 {{domxref("OscillatorNode.setWaveTable()")}} 方法。

## 示例

下面示例展示了 {{ domxref("AudioContext") }} 的基本使用 来创建一个 oscillator 节点 并使用它来播放音乐。这是已经在运行的例子，可以看这里 [Violent Theremin demo](http://mdn.github.io/violent-theremin/) ([see app.js](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js) 是相关代码).

```js
// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.value = 440; // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
