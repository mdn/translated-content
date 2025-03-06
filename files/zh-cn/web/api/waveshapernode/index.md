---
title: WaveShaperNode
slug: Web/API/WaveShaperNode
---

{{ APIRef("Web Audio API") }}

**`WaveShaperNode`** 接口表示一个非线性的畸变器。是一个使用曲线来将一个波形畸变应用到一个声音信号中的{{domxref("AudioNode")}}。除了明显的失真效果之外，它通常用来给信号添加一个暖调的感觉。

一个`WaveShaperNode` 总是有一个确切的输入和输出。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">输入数目</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">输出数目</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">信道计数模式</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">信道计数</th>
      <td><code>2</code> （不在缺省的计数模式中使用）</td>
    </tr>
    <tr>
      <th scope="row">信道解释</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## 构造器

- {{domxref("WaveShaperNode.WaveShaperNode", "WaveShaperNode()")}}
  - : 创建一个新的`WaveShaperNode` 对象的实例。

## 属性

_包含了继承自父类 {{domxref("AudioNode")}}的属性。_

- {{domxref("WaveShaperNode.curve")}}
  - : 是一个{{domxref("Float32Array")}}描述要应用的失真数值的数组。
- {{domxref("WaveShaperNode.oversample")}}
  - : 是一个描述是否必须使用过采样的枚举值。过采样是一个用来在将失真效果应用到音频信号之前创建更多采样（上采样）的技术。

## 方法

_没有特有的方法；从父类 {{domxref("AudioNode")}} 继承了方法_。

## 示例

参见 [`BaseAudioContext.createWaveShaper()`](/zh-CN/docs/Web/API/BaseAudioContext/createWaveShaper#示例) 以获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
