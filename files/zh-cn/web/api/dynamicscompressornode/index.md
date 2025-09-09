---
title: DynamicsCompressorNode
slug: Web/API/DynamicsCompressorNode
---

{{ APIRef("Web Audio API") }}

`DynamicsCompressorNode` 接口提供了一个压缩效果器，用以降低信号中最响部分的音量，来协助避免在多个声音同时播放并叠加在一起的时候产生的削波失真。通常用于音乐创作和游戏音效中。`DynamicsCompressorNode` 是一个 {{domxref("AudioNode")}} ，只有一路输入和一路输出，使用 {{domxref("AudioContext.createDynamicsCompressor()")}} 方法创建。

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
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## 构造方法

- {{domxref("DynamicsCompressorNode.DynamicsCompressorNode", "DynamicsCompressorNode()")}}
  - : 创建一个新的 `DynamicsCompressorNode` 对象实例。

## 属性

_由父类 {{domxref("AudioNode")}} 派生。_

- {{domxref("DynamicsCompressorNode.threshold")}} {{readonlyInline}}
  - : [比例系数](/zh-CN/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} 型。分贝高于此值时，将会进行压缩。
- {{domxref("DynamicsCompressorNode.knee")}} {{readonlyInline}}
  - : [比例系数](/zh-CN/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} 型。当超出 threshold 设置的值之后，曲线在哪个点开始朝着 ratio 设置的部分平滑变换。
- {{domxref("DynamicsCompressorNode.ratio")}} {{readonlyInline}}
  - : [比例系数](/zh-CN/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} 型。输入增益变化多少来产生 1 dB 的输出。
- {{domxref("DynamicsCompressorNode.reduction")}} {{readonlyInline}}
  - : `float` 型。表示当前压缩器使用的增益压缩值。
- {{domxref("DynamicsCompressorNode.attack")}} {{readonlyInline}}
  - : [比例系数](/zh-CN/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} 型。降低增益 10 dB 的时间（单位为秒）。
- {{domxref("DynamicsCompressorNode.release")}} {{readonlyInline}}
  - : [比例系数](/zh-CN/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} 型。提升增益 10 dB 的时间（单位为秒）。

## 方法

_没有自定义的方法，继承父类 {{domxref("AudioNode")}} 中的方法。_

## 示例

参见 [`BaseAudioContext.createDynamicsCompressor()`](/zh-CN/docs/Web/API/BaseAudioContext/createDynamicsCompressor#example) 以查看示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
