---
title: 使用 Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
---

{{DefaultAPISidebar("Web Speech API")}}

Web Speech API 提供了两个不同领域的功能——语音识别和语音合成（也被称为文本转为语音，或 tts）——这为无障碍和控制机制开启了新的有趣的可能。这篇文章提供了这两个方向的简单介绍，并且都带有例子。

## 语音识别

语音识别涉及：通过设备的麦克风接收语音，然后语音识别服务会根据语法列表（基本上就是你希望在具体的应用中能够识别出来的词汇）来检查这段语音。当成功识别单词或短语后，结果（或结果列表）会以文本字符串的形式返回，并且可以根据结果进行下一步的操作。

Web Speech API 有一个主要的控制器接口——{{domxref("SpeechRecognition")}}，外加一些与表示语法、结果等等亲密相关的接口。通常，设备都有可使用的默认语音识别系统，大部分现代操作系统都有用于发出语音命令的语音识别系统，比如 Mac OS X 上的 Dictation、iOS 上的 Siri、Win10 上的 Cortana、Android Speech 等等。

> [!NOTE]
> 在一些浏览器上，比如 Chrome，在一个网页上使用 Web 语音识别涉及到一个基于服务器的识别引擎。你的音频会被发送到一个 web 服务以进行识别处理，所以它不能在离线状态下工作。

### 演示

为了展示 Web 语音识别的简单用法，我们编写了一个演示——[Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer)。点击屏幕之后，说出 HTML 颜色关键字，接下来应用的背景颜色就会变成你说的颜色。

![一款名为“Speech color changer”的应用的用户界面。它邀请用户点击屏幕并说出一种颜色，然后它将应用的背景变成该颜色。在本例中，它将背景变成了红色。](speech-color-changer.png)

要运行这个演示，请在支持的移动端浏览器（比如 Chrome）中打开[在线演示 URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)。

### HTML 和 CSS

对于这个应用来说，HTML 和 CSS 部分是无足轻重的。仅仅只有一个标题、一个介绍段落和一个用来输出诊断信息的 div。

```html
<h1>Speech color changer</h1>
<p>Tap/click then say a color to change the background color of the app.</p>
<div>
  <p class="output"><em>...diagnostic messages</em></p>
</div>
```

CSS 也只是提供了简单的响应式样式，跨设备看上去也是 ok 的。

### JavaScript

JavaScript 部分会介绍更多细节。

#### 带前缀的属性

浏览器目前通过带有前缀的属性提供语音识别的支持。因此在代码开始部分我们添加了以下代码，以便同时支持带前缀的属性和未来可能支持的不带前缀的属性：

```js
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
```

#### 语法

代码的下一部分定义了我们希望应用程序识别的语法。定义了以下变量以保存我们的语法：

```js
const colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral" /* … */,
];
const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
  " | ",
)};`;
```

语法格式使用的是 [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/)（**JSGF**）——你可以在前面的链接中了解更多关于语法格式的规范。不过现在，让我们快速地浏览它：

- 每一行用分号分隔，和 JavaScript 中一样
- 第一行——`#JSGF V1.0`——说的是语法使用的格式和版本。这总是需要首先包括在内
- 第二行表示我们想要识别的术语类型。`public` 声明这是一条公共规则，尖括号中的字符串定义需要识别术语的名字（`color`），等号后面的是这个术语可以被识别和接受的具体值。得注意每一个值如何被一个管道符号分割开的
- 你可以按照上面的结构，在多行中，想定义多少就定义多少术语，也可以包括相当复杂的语法定义。对于我们这个简单的演示，就把语法定义的简单些。

#### 将语法插入语音识别

接下来是使用 {{domxref("SpeechRecognition.SpeechRecognition()","SpeechRecognition()")}} 构造函数，定义一个语音识别实例，控制对于这个应用的识别。还需要使用 {{domxref("SpeechGrammarList.SpeechGrammarList()","SpeechGrammarList()")}} 构造函数，创建一个语音语法列表对象来包含我们的语法。

```js
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
```

使用 [`SpeechGrammarList.addFromString()`](/zh-CN/docs/Web/API/SpeechGrammarList/addFromString) 把语法添加到列表 (list)，这个方法接收两个参数，第一个是我们想要添加的包含语法内容的字符串，第二个是对添加的这条语法的权重 (权重值范围是 0\~1)，权重其实是相对于其他语法，这一条语法的重要程度。添加到列表的语法就是可用的，并且是一个[`SpeechGrammar`](/zh-CN/docs/Web/API/SpeechGrammar) 实例。

```js
speechRecognitionList.addFromString(grammar, 1);
```

我们然后通过设置 [`SpeechRecognition.grammars`](/zh-CN/docs/Web/API/SpeechRecognition/grammars) 属性值，把我们的[`SpeechGrammarList`](/zh-CN/docs/Web/API/SpeechGrammarList) 添加到 speech recognition 实例。在继续往前走之前，我们还需要设置 recognition 实例其他的一些属性：

- [`SpeechRecognition.lang`](/zh-CN/docs/Web/API/SpeechRecognition/lang) ：设置识别的是什么语言。这个设定是良好的做好，因此墙裂推荐\~
- [`SpeechRecognition.interimResults`](/zh-CN/docs/Web/API/SpeechRecognition/interimResults) ：定义 speech recognition 系统要不要返回临时结果 (interim results)，还是只返回最终结果。对于这个简单 demo，只返回最终结果就够了。
- [`SpeechRecognition.maxAlternatives`](/zh-CN/docs/Web/API/SpeechRecognition/maxAlternatives) ：定义每次结果返回的可能匹配值的数量。这有时有用，比如要的结果不明确，你想要用一个列表展示所有可能值，让用户自己从中选择一个正确的。但这里这个简单 demo 就不用了，因此我们设置为 1(1 也就是默认值)。

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

#### 开始语音识别

在获取输出的`<div>` 和 html 元素引用之后 (这些我们可以用来待会输出语音识别诊断的结果，更新应用的背景颜色)，我们添加了一个`onclick` 事件处理，作用是当屏幕被点击后，语音识别服务将开启——这通过调用 [`SpeechRecognition.start()`](/zh-CN/docs/Web/API/SpeechRecognition/start) 实现。`forEach()` 方法内部的工作是，为每个颜色关键字添加一个这个颜色的背景色，这样就直观知道了这个颜色关键字指向什么颜色。

```js
const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const hints = document.querySelector(".hints");

let colorHTML = "";
colors.forEach((color, i) => {
  console.log(color, i);
  colorHTML += `<span style="background-color:${color};"> ${color} </span>`;
});
hints.innerHTML = `Tap or click then say a color to change the background color of the app. Try ${colorHTML}.`;

document.body.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

#### 接收、处理结果

一旦语音识别开始，有许多 event handlers 可以用于做结果返回的后续操作，除了识别的结果外还有些零碎的相关信息可供操作 (可查看 [`SpeechRecognition` event handlers list](/zh-CN/docs/Web/API/SpeechRecognition#Event_handlers) )。最常见会使用的一个是 [`SpeechRecognition.onresult`](/zh-CN/docs/Web/API/SpeechRecognition/result_event) ，这在收到一个成功的结果时候触发。

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

代码中第三行看上去有一点复杂，让我们一步一步解释以下。[`SpeechRecognitionEvent.results`](/zh-CN/docs/Web/API/SpeechRecognitionEvent/results) 属性返回的是一个[`SpeechRecognitionResultList`](/zh-CN/docs/Web/API/SpeechRecognitionResultList) 对象 (这个对象会包含[`SpeechRecognitionResult`](/zh-CN/docs/Web/API/SpeechRecognitionResult) 对象们)，它有一个 getter，所以它包含的这些对象可以像一个数组被访问到——所以`[last]` 返回的是排在最后位置 (最新) 的`SpeechRecognitionResult`对象。每个`SpeechRecognitionResult` 对象包含的 [`SpeechRecognitionAlternative`](/zh-CN/docs/Web/API/SpeechRecognitionAlternative) 对象含有一个被识别的单词。这些`SpeechRecognitionResult` 对象也有一个 getter，所以`[0]` 返回的是其中包含的第一个[`SpeechRecognitionAlternative`](/zh-CN/docs/Web/API/SpeechRecognitionAlternative) 对象。最后返回的`transcript`属性就是被识别单词的字符串，把背景颜色设置为这个颜色，并在 UI 中报告出这个结果信息。

也使用了 [`SpeechRecognition.onspeechend`](/zh-CN/docs/Web/API/SpeechRecognition/speechend_event) 这个 handle 停止语音识别服务 (具体工作在[`SpeechRecognition.stop()`](/zh-CN/docs/Web/API/SpeechRecognition/stop)) ，一旦一个单词被识别就不能再说咯 (必须再点击屏幕再次开启语音识别)

```js
recognition.onspeechend = () => {
  recognition.stop();
};
```

#### 处理错误和未能识别的语音

最后两个处理器处理的两种情况，一种是你说的内容不在定义的语法中所以识别不了，另一种是出现了 error。

[`SpeechRecognition.onnomatch`](/zh-CN/docs/Web/API/SpeechRecognition/nomatch_event) 支持的就是第一种，但是得注意它似乎在 Firefox 或者 Chrome 中触发会有问题；它只是返回任何被识别的内容：

```js
recognition.onnomatch = (event) => {
  diagnostic.textContent = "I didn't recognize that color.";
};
```

[`SpeechRecognition.onerror`](/zh-CN/docs/Web/API/SpeechRecognition/error_event) 处理的是第二种情况，识别成功了但是有 error 出现——[`SpeechRecognitionError.error`](/zh-CN/docs/Web/API/SpeechRecognitionErrorEvent/error) 属性包含的信息就是返回的确切的 error 是什么。

```js
recognition.onerror = (event) => {
  diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
};
```

## 语音合成

语音合成（也被称作文本转语音或 TTS）包括接收 app 中需要语音合成的文本，再在设备扬声器或音频输出连接中播放出来这两个过程。

Web Speech API 对此有一个主要控制接口——[`SpeechSynthesis`](/zh-CN/docs/Web/API/SpeechSynthesis) ，外加一些处理如何表示要被合成的文本 (也被称为 utterances)，用什么声音来播出 utterances 等工作的相关接口。同样的，许多操作系统都有自己的某种语音合成系统，在这个任务中我们调用可用的 API 来使用语音合成系统。

### 演示

为了展示 Web 语音合成的简单使用，我们提供了一个例子——[Speak easy synthesis](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis)。其包含一套用于输入要合成的文本，以及设置朗读文本时使用的音调、语速和声音的表单控件。在输入文本之后，按下 <kbd>Enter</kbd>/<kbd>Return</kbd> 键使它播放。

![UI of an app called speak easy synthesis. It has an input field in which to input text to be synthesised, slider controls to change the rate and pitch of the speech, and a drop down menu to choose between different voices.](speak-easy-synthesis.png)

想跑这个例子，你可以 git clone Github 仓库中的部分 (或者[直接下载](https://github.com/mdn/dom-examples/archive/refs/heads/main.zip))，在桌面版支持的浏览器打开 index.html 文件，或者在移动端浏览器直接导向 [live demo URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) ，像 Chrome 和 Firefox OS。

### HTML 和 CSS

HTML 和 CSS 还是无足轻重，只是简单包含一个标题，一段介绍文字，以及一个表格带有一些简单控制功能。{{htmlelement("select")}} 元素初始是空的，之后会通过 JavaScript 使用 {{htmlelement("option")}} 填充。

```html
<h1>Speech synthesizer</h1>

<p>
  Enter some text in the input below and press return to hear it. change voices
  using the dropdown menu.
</p>

<form>
  <input type="text" class="txt" />
  <div>
    <label for="rate">Rate</label
    ><input type="range" min="0.5" max="2" value="1" step="0.1" id="rate" />
    <div class="rate-value">1</div>
    <div class="clearfix"></div>
  </div>
  <div>
    <label for="pitch">Pitch</label
    ><input type="range" min="0" max="2" value="1" step="0.1" id="pitch" />
    <div class="pitch-value">1</div>
    <div class="clearfix"></div>
  </div>
  <select></select>
</form>
```

### JavaScript

让我们看看 JavaScript 在这个 app 中的强大表现。

#### 设置变量

首先我们获得 UI 中涉及的 DOM 元素的引用，但更有趣的是，我们获得了 {{domxref("Window.speechSynthesis")}} 的引用。这是 API 的入口点——它返回了 {{domxref("SpeechSynthesis")}} 的一个实例，这是 web 语音合成的控制接口。

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

const voices = [];
```

#### 填充 select 元素

为使用设备上可用的不同的语音选项填充 {{htmlelement("select")}} 元素，我们写了一个 `populateVoiceList()` 函数。首先调用 {{domxref("SpeechSynthesis.getVoices()")}}，这个函数返回包含所有可用语音（由 {{domxref("SpeechSynthesisVoice")}} 对象表示）的列表。接下来循环这个列表，每次创建一个 {{htmlelement("option")}} 元素，设置它的文本内容以显示声音的名称（从 {{domxref("SpeechSynthesisVoice.name")}} 获取）、语音的语言（从 {{domxref("SpeechSynthesisVoice.lang")}} 获取），如果某个语音是合成引擎默认的（检查 {{domxref("SpeechSynthesisVoice.default")}} 为 `true` 的属性）在文本内容后面添加 `-- DEFAULT`。

对于每个 `option` 元素，我们也创建了 `data-` 属性，属性值是语音的名字和语言，这样在之后我们可以轻松获取这个信息。之后把所有的 `option` 元素作为孩子添加到 `select` 元素内。

```js
function populateVoiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}
```

早期版本的浏览器不支持 {{domxref("SpeechSynthesis.voiceschanged_event", "voiceschanged")}} 事件，只有当 {{domxref("SpeechSynthesis.getVoices()")}} 被触发时才返回语音列表。而其他浏览器，比如 Chrome 中，你必须等待 `voiceschanged` 事件触发后才能获得可用语音列表。为了兼容这两种情况，我们运行如下代码：

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### 说出输入的文本

接下来我们创建一个事件处理器（event handler），开始说出在文本框中输入的文本。我们把 [onsubmit](/zh-CN/docs/Web/API/HTMLFormElement/submit_event) 处理器挂在表单上，当 <kbd>Enter</kbd>/<kbd>Return</kbd> 被按下，对应行为就会发生。我们首先通过构造函数创建一个新的 {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "SpeechSynthesisUtterance()")}} 实例——把文本输入框中的值作为参数传递。

接下来，我们需要弄清楚使用哪种语音。使用 {{domxref("HTMLSelectElement")}} `selectedOptions` 属性返回当前选中的 [`<option>`](/zh-CN/docs/Web/HTML/Reference/Elements/option) 元素。然后使用元素的 `data-name` 属性，找到 `name` 匹配该属性值的 {{domxref("SpeechSynthesisVoice")}} 对象。把匹配的语音对象设置为{{domxref("SpeechSynthesisUtterance.voice")}} 的属性值。

最后，我们设置 [`SpeechSynthesisUtterance.pitch`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/pitch) 和[`SpeechSynthesisUtterance.rate`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/rate) 属性值为对应范围表单元素中的值。哈哈所有准备工作就绪，调用 [`SpeechSynthesis.speak()`](/zh-CN/docs/Web/API/SpeechSynthesis/speak) 开始说话。把 [`SpeechSynthesisUtterance`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance) 实例作为参数传递。

```js
inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);
```

在事件处理器的最后部分，我们加入了一个 [`SpeechSynthesisUtterance.onpause`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/pause_event) 处理器，来展示[`SpeechSynthesisEvent`](/zh-CN/docs/Web/API/SpeechSynthesisEvent) 如何可以很好地使用。当 [`SpeechSynthesis.pause()`](/zh-CN/docs/Web/API/SpeechSynthesis/pause) 被调用，这将返回一条消息，报告该语音暂停时的字符编号和名称。

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};
```

最后，我们在文本输入框添加了 [blur()](/zh-CN/docs/Web/API/HTMLElement/blur) 方法。这主要是在 Firefox 操作系统上隐藏键盘

```js
  inputTxt.blur();
}
```

#### 更新 pitch 和 rate 的显示数值

代码的最后部分，在每次滑动条移动时，更新 `pitch/rate` 在 UI 中展示的值。

```js
pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
```
