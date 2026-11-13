---
title: ChannelMergerNode
slug: Web/API/ChannelMergerNode
---

{{APIRef("Web Audio API")}}

`ChannelMergerNode` 接口，经常与其对应的 {{domxref("ChannelSplitterNode")}} 接口一起使用，将不同的单声道输入重新组合成单个输出。每个输入用于填充输出的一个通道。这对于分别访问每个通道非常有用，例如，执行通道混合时，必须在每个信道上单独控制增益。

![](webaudiomerger.png)

如果 `ChannelMergerNode` 用于一个单一输出，但输入数量与用于合并的信道数量相同；输入的数量被定义为其构造函数的参数及对 {{domxref("AudioContext.createChannelMerger")}} 的调用。如果没有给出值，则为默认值 `6`。

使用 `ChannelMergerNode`，可以创建比渲染硬件能处理的更多的通道输出。在这种情况下，当信号发送至 {{domxref("AudioContext.listener")}} 对象时，额外的信道将被忽略。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">输入数量</th>
      <td>变量; 默认为 <code>6</code>.</td>
    </tr>
    <tr>
      <th scope="row">输出数量</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">通道计数模式</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">通道数量</th>
      <td><code>2 </code>(不在默认计数模式下使用)</td>
    </tr>
    <tr>
      <th scope="row">频道解释</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## 构造函数

- {{domxref("ChannelMergerNode.ChannelMergerNode()", "ChannelMergerNode()")}}
  - : 生成一个新的 `ChannelMergerNode` 对象实例。

## 属性

_没有具体属性；从其父级继承属性，{{domxref("AudioNode")}}。_

## 方法

_没有具体方法；从其父级继承方法，{{domxref("AudioNode")}}。_

## 例子

参见 [`BaseAudioContext.createChannelMerger()`](/zh-CN/docs/Web/API/BaseAudioContext/createChannelMerger#示例) 以获取示例代码。

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
