---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

[Web 语音 API](/zh-CN/docs/Web/API/Web_Speech_API) 的 **`SpeechSynthesis`** 接口是语音服务的控制接口；它可以用于获取设备上关于可用的合成声音的信息，开始、暂停语音，以及除此之外的其他命令。

## 实例属性

_`SpeechSynthesis` 也从其父接口 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("SpeechSynthesis.paused")}} {{readonlyinline}}
  - : 布尔值，如果 `SpeechSynthesis` 对象处于暂停状态，则返回 `true`。
- {{domxref("SpeechSynthesis.pending")}} {{readonlyinline}}
  - : 布尔值，如果语音播放队列包含没有说完的语音，则返回 `true`。
- {{domxref("SpeechSynthesis.speaking")}} {{readonlyinline}}
  - : 布尔值，如果正在播放语音内容（即使 `SpeechSynthesis` 处于暂停状态），则返回 `true`。

## 实例方法

_`SpeechSynthesis` 也从其父接口 {{domxref("EventTarget")}} 继承方法。_

- {{domxref("SpeechSynthesis.cancel()")}}
  - : 从语音队列中移除所有语音。
- {{domxref("SpeechSynthesis.getVoices()")}}
  - : 返回表示当前设备所有可用语音的 {{domxref("SpeechSynthesisVoice")}} 对象列表。
- {{domxref("SpeechSynthesis.pause()")}}
  - : 将 `SpeechSynthesis` 对象置为暂停状态。
- {{domxref("SpeechSynthesis.resume()")}}
  - : 将 `SpeechSynthesis` 对象置为非暂停状态：如果已经暂停了则恢复播放。
- {{domxref("SpeechSynthesis.speak()")}}
  - : 将{{domxref("SpeechSynthesisUtterance", "语音", "", 1)}}添加到语音队列，它将会在其他语音播放完之后播放。

## 事件

使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 或将事件监听器赋值到该接口的 `oneventname` 属性来监听此事件。

- [`voiceschanged`](/zh-CN/docs/Web/API/SpeechSynthesis/voiceschanged_event)
  - : 当 {{domxref("SpeechSynthesis.getVoices()")}} 方法将要返回的 {{domxref("SpeechSynthesisVoice")}} 对象列表发生变化时触发。也可以通过 `onvoiceschanged` 属性访问。

## 示例

首先，一个例子：

```js
let utterance = new SpeechSynthesisUtterance("你好世界！");
speechSynthesis.speak(utterance);
```

现在，我们来看一个更完整的示例。在我们的[语音合成器演示](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis)中，我们首先使用 `window.speechSynthesis` 获取了语音合成控制器的引用。在定义了一些必要的变量后，我们使用 {{domxref("SpeechSynthesis.getVoices()")}} 获取了可用声音的列表，并用它们填充了一个选择菜单，以便用户可以选择他们想要的声音。

在 `inputForm.onsubmit` 的处理器中，我们用 [preventDefault()](/zh-CN/docs/Web/API/Event/preventDefault) 阻止表单提交，创建了一个新的 {{domxref("SpeechSynthesisUtterance")}} 实例，其中包含了从文本 {{htmlelement("input")}} 获取的文本，将语音设置为在 {{htmlelement("select")}} 元素中选择的声音，并通过 {{domxref("SpeechSynthesis.speak()")}} 方法开始语音播放。

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name}（${voice.lang}）`;

    if (voice.default) {
      option.textContent += "——默认";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
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

- [Web 语音 API](/zh-CN/docs/Web/API/Web_Speech_API)
