---
title: SpeechSynthesis.paused
slug: Web/API/SpeechSynthesis/paused
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechSynthesis")}} 接口的只读属性 **`paused`** 是一个 {{domxref("Boolean")}} 值，当`SpeechSynthesis`对象处于暂停状态时，返回`true` ，否则返回 `false`。

它能被设置为 {{domxref("SpeechSynthesis.pause()", "暂停状态")}} 即使当前并没有语音在播放队列中。如果{{domxref("SpeechSynthesisUtterance","utterances")}} 被添加到语音播放队列，队列中的语音并不会播放直到使用 {{domxref("SpeechSynthesis.resume()")}}使`SpeechSynthesis`对象处于非暂停状态。

## 语法

```plain
var amIPaused = speechSynthesisInstance.paused;
```

### Value

一个{{domxref("Boolean")}}。

## 示例

```js
var synth = window.speechSynthesis;

synth.pause();

var amIPaused = synth.paused; // 将返回 true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
