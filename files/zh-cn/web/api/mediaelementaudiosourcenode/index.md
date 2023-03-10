---
title: MediaElementAudioSourceNode
slug: Web/API/MediaElementAudioSourceNode
---

{{APIRef("Web Audio API")}}

`MediaElementAudioSourceNode` 接口代表着某个由 HTML {{ htmlelement("audio") }} 或 {{ htmlelement("video") }} 元素所组成的音频源。该接口作为 {{domxref("AudioNode")}} 音源节点。

`MediaElementSourceNode` 没有输入，且只有一个输出，其由 {{domxref("AudioContext.createMediaElementSource")}} 方法创建。输出的频道数目与节点创建时引用音频 {{domxref("HTMLMediaElement")}} 的频道数目一致，或当 {{domxref("HTMLMediaElement")}} 无音频时，频道数目为 1。

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">输入数目</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">输出数目</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">通道数</th>
      <td>
        2（但请注意 {{domxref("AudioNode.channelCount")}} 仅用于 {{domxref("AudioNode")}} 输入的上混和下混，而 {{domxref("MediaElementAudioSourceNode")}} 则没有任何输入）</td>
    </tr>
  </tbody>
</table>

## 构造函数

- {{domxref("MediaElementAudioSourceNode.MediaElementAudioSourceNode()")}}
  - : 创建一个新的 `MediaElementAudioSourceNode` 实例。

## 实例属性

_继承其父接口 {{domxref("AudioNode")}} 的属性_。

## 实例方法

_继承其父接口 {{domxref("AudioNode")}} 的方法_。

## 示例

参见 [`AudioContext.createMediaElementSource()`](/zh-CN/docs/Web/API/AudioContext/createMediaElementSource#示例) 以获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
