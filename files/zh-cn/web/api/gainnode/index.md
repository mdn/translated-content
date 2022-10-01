---
title: GainNode
slug: Web/API/GainNode
---

{{ APIRef("Web Audio API") }}

**`GainNode`** 接口表示音量的变化。它是一个 {{domxref("AudioNode")}} 音频处理模块，在输出前使用给定*增益*应用到输入。一个 `GainNode` 始终只有一个输入和一个输出，两者拥有同样数量的声道。

增益是一个无单位的值，会对所有输入声道的音频进行相应的增加（相乘）。如果进行了修改，则会立即应用新增益，从而在结果音频中产生奇怪的“咔嗒”声。为了防止这种情况发生，请不要直接更改值，而应在 {{domxref("AudioParam")}} 接口上使用指数插值方法。

![The GainNode is increasing the gain of the output.](webaudiogainnode.png)

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">输入的数量</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">输出的数量</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">声道计数模式</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">声道数</th>
      <td><code>2</code>（在默认计数模式下不生效）</td>
    </tr>
    <tr>
      <th scope="row">声道混频</th>
      <td><code>"speakers"</code>（扬声器）</td>
    </tr>
  </tbody>
</table>

## 构造函数

- {{domxref("GainNode.GainNode", "GainNode()")}}
  - : 创建并返回一个新的 `GainNode` 对象。作为代替的方法，你可以使用工厂方法 {{domxref("AudioContext.createGain()")}}，参见[创建 AudioNode](/zh-CN/docs/Web/API/AudioNode#creating_an_audionode)。

## 属性

_从其父类 {{domxref("AudioNode")}} 继承属性。_

- {{domxref("GainNode.gain")}} {{ReadOnlyInline}}
  - : 是一个 [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}，表示应用的增益量。必须设置 {{domxref("AudioParam.value")}} 或者使用 `AudioParam` 的方法来改变增益效果。

## 方法

_无具体方法；所有方法继承自父类 {{domxref("AudioNode")}}_。

## 示例

参见 [`BaseAudioContext.createGain()`](/zh-CN/docs/Web/API/BaseAudioContext/createGain#示例) 以获取示例代码，其展示了如何使用 `AudioContext` 来创建一个 `GainNode`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
