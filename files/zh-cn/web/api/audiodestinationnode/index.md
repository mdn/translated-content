---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
---

{{APIRef("Web Audio API")}}

`AudioDestinationNode`接口表示音频图形在特定情况下的最终输出地址 - 通常为扬声器。当使用`OfflineAudioContext`时为音频记录节点。

AudioDestinationNode 没有输出（因为它就是输出，它存在于视频图标中后 AudioNode 不能被链接），有一个输入。输入信道的数量必须是 0 至 maxChannelCount 之间的值或是一个异常。

`AudioDestinationNode` 可以通过 {{domxref("AudioContext.destination")}} 属性来查看。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>0</code></td>
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

## 属性

_从{{domxref("AudioNode")}}继承的属性_.

- {{domxref("AudioDestinationNode.maxChannelCount")}}
  - : 以无符长整型返回物理设备可以处理的最大通道数量。

## 方法

_继承 {{domxref("AudioNode")}} 的方法。_

## 例子

`AudioDestinationNode 不需要使用复杂的设置` — 在默认情况下只是简单的代表使用者系统的输出 (例如他们的扬声器)，这样你就可以使用几行代码来与内置音频图标挂钩：

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

更多的例子，请查看 MDN Web Audio 示例，例如[Voice-change-o-matic](http://mdn.github.io/voice-change-o-matic/) 或者 [Violent Theremin](http://mdn.github.io/violent-theremin/).

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
