---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
---

{{APIRef("Web Audio API")}}

`MediaStreamAudioSourceNode` 接口代表一个音频接口，是[WebRTC](/zh-CN/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} (比如一个摄像头或者麦克风) 的一部分。是个表现为音频源的{{domxref("AudioNode")}}。

`MediaElementSourceNode 没有输入，并且只有一个输出。创建之后使用` {{domxref("AudioContext.createMediaStreamSource")}}方法。输出通道的数量和{{domxref("AudioMediaStreamTrack")}}的通道数量相同。如果没有有效的媒体流，输出通道就变成一个静音的通道。

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
      <th scope="row">Channel count</th>
      <td>
        由{{domxref("AudioMediaStreamTrack")}}定义，传递给
        {{domxref("AudioContext.createMediaStreamSource")}}
        ，并由此创建。
      </td>
    </tr>
  </tbody>
</table>

## 构造器

- {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode()")}}
  - : 创建一个新的`MediaStreamAudioSourceNode`实例。

## 属性

_从 {{domxref("AudioNode")}} 上继承。_

## 方法

_从 {{domxref("AudioNode")}} 上继承。_

## 示例

参见 [`AudioContext.createMediaStreamSource()`](/zh-CN/docs/Web/API/AudioContext/createMediaStreamSource#示例) 以获取有关该对象用法的示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
