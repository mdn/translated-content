---
title: GainNode
slug: Web/API/GainNode
---
{{ APIRef("Web Audio API") }}

**`GainNode`** 接口表示音量的变化。它是一个{{domxref("AudioNode")}}音频处理模块，在输出前使用给定*增益*应用到输入。一个 **`GainNode`** 总是只有一个输入和一个输出，两者拥有同样数量的声道。

增益是一个无单位的值，会对所有输入声道的音频进行相应的增加。如果进行了修改，则会立即应用新增益，从而在结果音频中产生奇怪的“咔嗒”声。为了防止这种情况发生，请不要直接更改值，而应在{{domxref("AudioParam")}}接口上使用指数插值方法。

![The GainNode is increasing the gain of the output.](webaudiogainnode.png)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code> (not used in the default count mode)</td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## 构造函数

- {{domxref("GainNode.GainNode", "GainNode()")}}
  - : 创建`GainNode`对象的新实例。不应手动创建增益节点；而应该使用{{domxref("AudioContext.createGain()")}}方法。

## 属性

_从其父类继承属性{{domxref("AudioNode")}}。_

- {{domxref("GainNode.gain")}} {{readonlyinline}}
  - : 是一个[a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate){{domxref("AudioParam")}}表示应用的增益量。必须设置{{domxref("AudioParam.value")}}或者使用`AudioParam`的方法改变增益效果。

## 方法

_无指定方法；所有方法继承自父类{{domxref("AudioNode")}}_.

## 示例

{{page("/zh-CN/docs/Web/API/AudioContext.createGain","Example")}}

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat("api.GainNode")}}

## 参见

- [使用 Web 音频 API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
