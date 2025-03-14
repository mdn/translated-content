---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

[网页语音 API](/zh-CN/docs/Web/API/Web_Speech_API) 的**`SpeechSynthesis`** 接口是语音服务的控制接口；它可以用于获取设备上关于可用的合成声音的信息，开始、暂停语音，或除此之外的其他命令。

## 属性

_`SpeechSynthesis` 也从它的父接口继承属性，{{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.paused")}} {{readonlyinline}}
  - : 当`SpeechSynthesis` 处于暂停状态时， {{domxref("Boolean")}} 值返回 `true` 。
- {{domxref("SpeechSynthesis.pending")}} {{readonlyinline}}
  - : 当语音播放队列到目前为止保持没有说完的语音时， {{domxref("Boolean")}} 值返回 `true` 。
- {{domxref("SpeechSynthesis.speaking")}} {{readonlyinline}}
  - : 当语音谈话正在进行的时候，即使`SpeechSynthesis`处于暂停状态， {{domxref("Boolean")}} 返回 `true` 。

### 事件操作

- {{domxref("SpeechSynthesis.onvoiceschanged")}}
  - : 当由{{domxref("SpeechSynthesis.getVoices()")}}方法返回的{{domxref("SpeechSynthesisVoice")}}列表改变时触发。

## 方法

_`SpeechSynthesis` 也从它的父接口继承方法， {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.cancel()")}}
  - : 移除所有语音谈话队列中的谈话。
- {{domxref("SpeechSynthesis.getVoices()")}}
  - : 返回当前设备所有可用声音的 {{domxref("SpeechSynthesisVoice")}}列表。
- {{domxref("SpeechSynthesis.pause()")}}
  - : 把 `SpeechSynthesis` 对象置为暂停状态。
- {{domxref("SpeechSynthesis.resume()")}}
  - : 把 `SpeechSynthesis` 对象置为一个非暂停状态：如果已经暂停了则继续。
- {{domxref("SpeechSynthesis.speak()")}}
  - : 添加一个 {{domxref("SpeechSynthesisUtterance", "utterance")}} 到语音谈话队列；它将会在其他语音谈话播放完之后播放。

## 示例

在我们基础的 [Speech synthesiser 演示中](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis)，我们第一次用 `window.speechSynthesis`抓取了关于语音播放控制器的参考。在定义了一些必要的变量后，我们用 {{domxref("SpeechSynthesis.getVoices()")}}获取了一列可用的声音并且用它们生成一列可选表单，这样用户能够选择他们想要的声音。

`inputForm.onsubmit` 的内部操作中，我们用[preventDefault()](/zh-CN/docs/Web/API/Event/preventDefault)阻止了表单的提交，创建了一个从{{htmlelement("input")}}文本框获取文本的新{{domxref("SpeechSynthesisUtterance")}}实例，在{{htmlelement("select")}}元素可选的声音设置成语音谈话的 voice 属性，然后通过{{domxref("SpeechSynthesis.speak()")}}方法开始语音播放。

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector("form");
var inputTxt = document.querySelector(".txt");
var voiceSelect = document.querySelector("select");

var pitch = document.querySelector("#pitch");
var pitchValue = document.querySelector(".pitch-value");
var rate = document.querySelector("#rate");
var rateValue = document.querySelector(".rate-value");

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (i = 0; i < voices.length; i++) {
    var option = document.createElement("option");
    option.textContent = voices[i].name + " (" + voices[i].lang + ")";

    if (voices[i].default) {
      option.textContent += " -- DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = function (event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

  inputTxt.blur();
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
