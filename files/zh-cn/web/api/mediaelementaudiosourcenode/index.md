---
title: MediaElementAudioSourceNode
slug: Web/API/MediaElementAudioSourceNode
---

{{APIRef("Web Audio API")}}

`MediaElementAudioSourceNode` 接口代表着某个由 HTML5 {{ htmlelement("audio") }} 或 {{ htmlelement("video") }} 元素所组成的音频源。该接口作为扮演音源的 {{domxref("AudioNode")}} 节点。

`MediaElementSourceNode` 没有输入，只有一个输出，其由使用{{domxref("AudioContext.createMediaElementSource")}}方法创建。输出的频道数目与节点创建时引用音频 {{domxref("HTMLMediaElement")}} 的频道数目一致，或当 {{domxref("HTMLMediaElement")}} 无音频时，频道数目为 1.

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
      <th scope="row">频道数</th>
      <td>
        由被传递给{{domxref("AudioContext.createMediaElementSource")}}的{{domxref("HTMLMediaElement")}}内的音频定义。
      </td>
    </tr>
  </tbody>
</table>

## 构造函数

- {{domxref("MediaElementAudioSourceNode.MediaElementAudioSourceNode()")}}
  - : 创建一个新的 `MediaElementAudioSourceNode` 实例。

## 属性

_集成其父类属性，{{domxref("AudioNode")}}。_

## 方法

_集成其父类方法，{{domxref("AudioNode")}}。_

## 示例

{{page("/zh-CN/docs/Web/API/AudioContext/createMediaElementSource","示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关页面

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
