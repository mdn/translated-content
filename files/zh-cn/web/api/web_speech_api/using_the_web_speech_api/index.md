---
title: 使用 Web Speech API
slug: Web/API/Web_Speech_API/Using_the_Web_Speech_API
---

Web Speech API 提供了两类不同方向的函数——语音识别和语音合成 (也被称为文本转为语音，英语简写是 tts)——开启了有趣的新可用性和控制机制。这篇文章提供了这两个方向的简单介绍，并且都带有例子。

## Speech recognition

Speech recognition(语音识别) 涉及三个过程：首先，需要设备的麦克风接收这段语音；其次，speech recognition service(语音识别服务器) 会根据一系列语法 (基本上，语法是你希望在具体的应用中能够识别出来的词汇) 来检查这段语音；最后，当一个单词或者短语被成功识别后，结果会以文本字符串的形式返回 (结果可以有多个)，以及更多的行为可以设置被触发。

Web Speech API 有一个主要的控制接口——[`SpeechRecognition`](/zh-CN/docs/Web/API/SpeechRecognition)，外加一些如表示语法、表示结果等等亲密相关的接口。通常，设备都有可使用的默认语音识别系统，大部分现代操作系统使用这个语音识别系统来处理语音命令，比如 Mac OS X 上的 Dictation，iOS 上的 Siri，Win10 上的 Cortana，Android Speech 等等。

Demo

为了简单展示 Web speech recognition 的作用，我们写了一个 demo——[Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer)。点击屏幕之后，说出 HTML 颜色关键字 (网页里罗列的单词就是)，接下来应用的背景颜色就会变成你说的颜色。

![The UI of an app titled Speech Color changer. It invites the user to tap the screen and say a color, and then it turns the background of the app that colour. In this case it has turned the background red.](speech-color-changer.png)

为了跑这个 demo，可以 clone Github 仓库 (上面甩出的就是，或者[directly download](https://github.com/mdn/dom-examples/archive/refs/heads/main.zip))，可以在支持的移动端浏览器 (比如 Chrome) 导航到 [live demo URL](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) 直接观看 (亲测 desktop browser 也是可以的，不过只能是 Chrome)，也可以通过 [WebIDE](/zh-CN/docs/Tools/WebIDE) 作为一个 app 加载到 Firefox OS(Firefox OS 使用 API 的权限问题见下文)。

### Browser support

对于 Web Speech API speech recognition(语音识别) 的支持，在各浏览器中还不成熟，还在发展，现在主要的限制如下：

- Firefox 桌面端和移动端在 Gecko 44+ 中都支持，并且是没有前缀的，它可以在`about:config` 中把 `media.webspeech.recognition.enable` 设置为 `true` 打开。权限设置/UI 还没有整理出来，所以权限还不能被用户使用，也就是不能用。不过很快会修复吧\~
- Firefox OS 2.5+ 也支持，但作为一个特权 API(privileged API) 需要权限，因此你需要在[manifest.webapp](/zh-CN/docs/Web/Apps/Build/Manifest) (也可以通过 WebIDE 下载，或者使应用得到验证后在 [Firefox Marketplace](https://marketplace.firefox.com/) 可使用) 如下设置：

  ```json
  "permissions": {
    "audio-capture" : {
      "description" : "Audio capture"
    },
    "speech-recognition" : {
      "description" : "Speech recognition"
    }
  }
  ```

  ```json
  "type": "privileged"
  ```

- Chrome 桌面端和 Android 端自 version 33 以来均支持，但是带有前缀，所以你需要使用带有前缀的版本，比如：`webkitSpeechRecognition`

### HTML 和 CSS

对于这个应用来说，HTML 和 CSS 部分是无足轻重的。仅仅只有一个标题，一个介绍段落和一个 div 用来输出 check 的结果。

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

#### 浏览器支持

之前有说到过，Chrome 现在支持的是带有前缀的 speech recognition，因此在 code 开始部分得加些内容保证在需要前缀的 Chrome 和不需要前缀的像 Firefox 中，使用的 object 都是正确的。

```js
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
```

#### The grammar

这部分是我们的代码定义希望应用能够识别的语法。语法放在下面定义的变量`grammar`中：

```js
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ... ];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
```

语法格式使用的是 [JSpeech Grammar Format](http://www.w3.org/TR/jsgf/) (**JSGF**) ——你可以在前面的链接中了解更多关于语法格式的规范。不过现在，让我们快速地浏览它：

- 每一行用分号分隔，和 js 中一样
- 第一行——`#JSGF V1.0` ——说的是语法使用的格式和版本。这总是需要首先包括在内
- 第二行表示我们想要识别的`term` 的类型 (这里就是`colors`)。`public` 声明这是一条公共规则，尖括号中的字符串定义需要识别`term` 的名字 (这里就是`color`)，等号后面的是这个`term` 可以被识别和接受的具体值。得注意每一个值如何被一个管道符号分割开的
- 你可以按照上面的结构，在多行中，想定义多少就定义多少`terms` ，也可以包括相当复杂的语法定义。对于我们这个简单的 demo，就把语法定义的简单些

#### 将 grammer 插入 speech recognition

接下来是使用 [`SpeechRecognition()`](/zh-CN/docs/Web/API/SpeechRecognition/SpeechRecognition) 构造函数，定义一个 speech recognition 实例，控制对于这个应用的识别。还需要使用 [`SpeechGrammarList()`](/zh-CN/docs/Web/API/SpeechGrammarList/SpeechGrammarList) 构造函数，创立一个 speech grammer list 对象，包含我们的语法。

```js
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
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
//recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

> **备注：** [`SpeechRecognition.continuous`](/zh-CN/docs/Web/API/SpeechRecognition/continuous) 控制的是每一次允许多个结果被捕捉 (比如在这个 demo 中连着说两个颜色关键字，都可以被捕捉)，或者一次只能识别一个结果。代码中它被注释掉的原因是，在 Gecko 中它还不被支持，所以如果把它加进去会破坏这个应用。你可以在收到第一个结果后简单地停止识别，从而得到类似的结果，稍后将会看到。

#### 开始语音识别

在获取输出的`<div>` 和 html 元素引用之后 (这些我们可以用来待会输出语音识别诊断的结果，更新应用的背景颜色)，我们添加了一个`onclick` 事件处理，作用是当屏幕被点击后，语音识别服务将开启——这通过调用 [`SpeechRecognition.start()`](/zh-CN/docs/Web/API/SpeechRecognition/start) 实现。`forEach()` 方法内部的工作是，为每个颜色关键字添加一个这个颜色的背景色，这样就直观知道了这个颜色关键字指向什么颜色。

```js
var diagnostic = document.querySelector(".output");
var bg = document.querySelector("html");
var hints = document.querySelector(".hints");

var colorHTML = "";
colors.forEach(function (v, i, a) {
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + " </span>";
});
hints.innerHTML =
  "Tap/click then say a color to change the background color of the app. Try " +
  colorHTML +
  ".";

document.body.onclick = function () {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

#### 接收、处理结果

一旦语音识别开始，有许多 event handlers 可以用于做结果返回的后续操作，除了识别的结果外还有些零碎的相关信息可供操作 (可查看 [`SpeechRecognition` event handlers list](/zh-CN/docs/Web/API/SpeechRecognition#Event_handlers) )。最常见会使用的一个是 [`SpeechRecognition.onresult`](/zh-CN/docs/Web/API/SpeechRecognition/onresult) ，这在收到一个成功的结果时候触发。

```js
recognition.onresult = function (event) {
  var last = event.results.length - 1;
  var color = event.results[last][0].transcript;
  diagnostic.textContent = "Result received: " + color + ".";
  bg.style.backgroundColor = color;
  console.log("Confidence: " + event.results[0][0].confidence);
};
```

代码中第三行看上去有一点复杂，让我们一步一步解释以下。[`SpeechRecognitionEvent.results`](/zh-CN/docs/Web/API/SpeechRecognitionEvent/results) 属性返回的是一个[`SpeechRecognitionResultList`](/zh-CN/docs/Web/API/SpeechRecognitionResultList) 对象 (这个对象会包含[`SpeechRecognitionResult`](/zh-CN/docs/Web/API/SpeechRecognitionResult) 对象们)，它有一个 getter，所以它包含的这些对象可以像一个数组被访问到——所以`[last]` 返回的是排在最后位置 (最新) 的`SpeechRecognitionResult`对象。每个`SpeechRecognitionResult` 对象包含的 [`SpeechRecognitionAlternative`](/zh-CN/docs/Web/API/SpeechRecognitionAlternative) 对象含有一个被识别的单词。这些`SpeechRecognitionResult` 对象也有一个 getter，所以`[0]` 返回的是其中包含的第一个[`SpeechRecognitionAlternative`](/zh-CN/docs/Web/API/SpeechRecognitionAlternative) 对象。最后返回的`transcript`属性就是被识别单词的字符串，把背景颜色设置为这个颜色，并在 UI 中报告出这个结果信息。

也使用了 [`SpeechRecognition.onspeechend`](/zh-CN/docs/Web/API/SpeechRecognition/onspeechend) 这个 handle 停止语音识别服务 (具体工作在[`SpeechRecognition.stop()`](/zh-CN/docs/Web/API/SpeechRecognition/stop)) ，一旦一个单词被识别就不能再说咯 (必须再点击屏幕再次开启语音识别)

```js
recognition.onspeechend = function () {
  recognition.stop();
};
```

#### 处理 error 和未能识别的语音

最后两个 handlers 处理的两种情况，一种是你说的内容不在定义的语法中所以识别不了，另一种是出现了 error。

[`SpeechRecognition.onnomatch`](/zh-CN/docs/Web/API/SpeechRecognition/onnomatch) 支持的就是第一种，但是得注意它似乎在 Firefox 或者 Chrome 中触发会有问题；它只是返回任何被识别的内容：

```js
recognition.onnomatch = function (event) {
  diagnostic.textContent = "I didnt recognise that color.";
};
```

[`SpeechRecognition.onerror`](/zh-CN/docs/Web/API/SpeechRecognition/onerror) 处理的是第二种情况，识别成功了但是有 error 出现—— [`SpeechRecognitionError.error`](/zh-CN/docs/Web/API/SpeechRecognitionError/error) 属性包含的信息就是返回的确切的 error 是什么。

```js
recognition.onerror = function (event) {
  diagnostic.textContent = "Error occurred in recognition: " + event.error;
};
```

## Speech synthesis

语音合成 (也被称作是文本转为语音，英语简写是 tts) 包括接收 app 中需要语音合成的文本，再在设备麦克风播放出来这两个过程。

Web Speech API 对此有一个主要控制接口——[`SpeechSynthesis`](/zh-CN/docs/Web/API/SpeechSynthesis) ，外加一些处理如何表示要被合成的文本 (也被称为 utterances)，用什么声音来播出 utterances 等工作的相关接口。同样的，许多操作系统都有自己的某种语音合成系统，在这个任务中我们调用可用的 API 来使用语音合成系统。

### Demo

为了展示 Web 语音合成的简单使用，我们提供了一个例子—— [Speak easy synthesis](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) 。例子是一套表单控件，包括输入需要被合成的文本，设置音调、语速和发出文本时需要的语音。在输入文本之后，按下`Enter`/`Return`键使它播放。

![UI of an app called speak easy synthesis. It has an input field in which to input text to be synthesised, slider controls to change the rate and pitch of the speech, and a drop down menu to choose between different voices.](speak-easy-synthesis.png)

想跑这个例子，你可以 git clone Github 仓库中的部分 (或者[直接下载](https://github.com/mdn/dom-examples/archive/refs/heads/main.zip))，在桌面版支持的浏览器打开 index.html 文件，或者在移动端浏览器直接导向 [live demo URL](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) ，像 Chrome 和 Firefox OS。

### 浏览器支持

Web Speech API 语音合成部分在各浏览器中还是在发展，还不成熟，现在有以下几个限制点：

- Firefox 桌面版和移动版在 Gecko 42+(Windows)/44+ 支持，但是没有前缀，可以通过将`media.webspeech.synth.enabled`标志在`about:config`中转为`true`来启用。
- Firefox OS 2.5+ 支持，但是默认的，不需要任何权限。
- Chrome 桌面版和安卓版自 33 版以来都支持，但是没有前缀

### HTML 和 CSS

HTML 和 CSS 还是无足轻重，只是简单包含一个标题，一段介绍文字，以及一个表格带有一些简单控制功能。`<select>` 元素初始时空的，之后会用 js 使用`<option>` 填充。

```html
<h1>Speech synthesiser</h1>

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

让我们看看 js 在这个 app 中的强大表现。

#### 设置变量

首先我们获得 UI 中涉及的 DOM 元素的引用，但更有趣的是，我们获得了[`Window.speechSynthesis`](/zh-CN/docs/Web/API/Window/speechSynthesis) 的引用。这是 API 的入口点——它返回了[`SpeechSynthesis`](/zh-CN/docs/Web/API/SpeechSynthesis) 的一个实例，对于 web 语音合成的控制接口。

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
```

#### 填充 select 元素

为使用设备可使用的不同的语音选项填充`<select>`元素，我们写了`populateVoiceList()` 方法。首先调用[`SpeechSynthesis.getVoices()`](/zh-CN/docs/Web/API/SpeechSynthesis/getVoices) ，这个函数返回包含所有可用语音 ([`SpeechSynthesisVoice`](/zh-CN/docs/Web/API/SpeechSynthesisVoice)对象) 的列表。接下来循环这个列表，每次创建一个`<option>` 元素，设置它的文本内容以显示声音的名称（从`SpeechSynthesisVoice.name`获取），语音的语言（从`SpeechSynthesisVoice.lang`获取），如果某个语音是合成引擎默认的 (检查[`SpeechSynthesisVoice.default`](/zh-CN/docs/Web/API/SpeechSynthesisVoice/default)属性返回`true`) 在文本内容后面添加`-- DEFAULT`。

对于每个`option`元素，我们也创建了`data-` 属性，属性值是语音的名字和语言，这样在之后我们可以轻松获取这个信息。之后把所有的`option`元素作为孩子添加到`select` 元素。

```js
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
```

接下来是运行这个函数，我们做如下代码工作。因为 Firefox 不支持[`SpeechSynthesis.onvoiceschanged`](/zh-CN/docs/Web/API/SpeechSynthesis/onvoiceschanged) ，所以很常规地只是返回语音对象列表当[`SpeechSynthesis.getVoices()`](/zh-CN/docs/Web/API/SpeechSynthesis/getVoices) 被触发。但是 Chrome 就有点不同了，在`SpeechSynthesis.getVoices()` 被触发时，先要等待事件触发 (有点绕\~按照下面代码，`populateVoiceList` 函数在 Firefox 运行一次，在 Chrome 中运行两次)：

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

#### 说出输入的文本

接下来我们创建一个事件处理器 (handler)，开始说出在文本框中输入的文本。我们把`onsubmit` 处理器挂在表单上，当`Enter/Return` 被按下，对应行为就会发生。我们首先通过构造函数创建一个新的[`SpeechSynthesisUtterance()`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance) 实例——把文本输入框中的值作为参数传递。

接下来，我们需要弄清楚使用哪种语音。使用[`HTMLSelectElement`](/zh-CN/docs/Web/API/HTMLSelectElement) `selectedOptions` 属性返回当前选中的 [`<option>`](/zh-CN/docs/Web/HTML/Element/option) 元素。然后使用元素的`data-name`属性，找到 [`SpeechSynthesisVoice`](/zh-CN/docs/Web/API/SpeechSynthesisVoice) 对象的`name`匹配`data-name` 的值。把匹配的语音对象设置为[`SpeechSynthesisUtterance.voice`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/voice) 的属性值。

最后，我们设置 [`SpeechSynthesisUtterance.pitch`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/pitch) 和[`SpeechSynthesisUtterance.rate`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/rate) 属性值为对应范围表单元素中的值。哈哈所有准备工作就绪，调用 [`SpeechSynthesis.speak()`](/zh-CN/docs/Web/API/SpeechSynthesis/speak) 开始说话。把 [`SpeechSynthesisUtterance`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance) 实例作为参数传递。

```js
inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);
```

在事件处理器的最后部分，我们加入了一个 [`SpeechSynthesisUtterance.onpause`](/zh-CN/docs/Web/API/SpeechSynthesisUtterance/onpause) 处理器，来展示[`SpeechSynthesisEvent`](/zh-CN/docs/Web/API/SpeechSynthesisEvent) 如何可以很好地使用。当 [`SpeechSynthesis.pause()`](/zh-CN/docs/Web/API/SpeechSynthesis/pause) 被调用，这将返回一条消息，报告该语音暂停的字符编号和名称。

```js
utterThis.onpause = function (event) {
  var char = event.utterance.text.charAt(event.charIndex);
  console.log(
    "Speech paused at character " +
      event.charIndex +
      ' of "' +
      event.utterance.text +
      '", which is "' +
      char +
      '".',
  );
};
```

最后，我们在文本输入框添加了 [blur()](/zh-CN/docs/Web/API/HTMLElement/blur) 方法。这主要是在 Firefox 操作系统上隐藏键盘

```js
  inputTxt.blur();
}
```

#### Updating the displayed pitch and rate values

代码的最后部分，在每次滑动条移动时，简单地更新`pitch/rate`在 UI 中展示的值。

```js
pitch.onchange = function () {
  pitchValue.textContent = pitch.value;
};

rate.onchange = function () {
  rateValue.textContent = rate.value;
};
```
