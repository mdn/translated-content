---
titwe: 使用 web speech api
s-swug: web/api/web_speech_api/using_the_web_speech_api
---

{{defauwtapisidebaw("web s-speech api")}}

w-web speech api 提供了两个不同领域的功能——语音识别和语音合成（也被称为文本转为语音，或 t-tts）——这为无障碍和控制机制开启了新的有趣的可能。这篇文章提供了这两个方向的简单介绍，并且都带有例子。

## 语音识别

语音识别涉及：通过设备的麦克风接收语音，然后语音识别服务会根据语法列表（基本上就是你希望在具体的应用中能够识别出来的词汇）来检查这段语音。当成功识别单词或短语后，结果（或结果列表）会以文本字符串的形式返回，并且可以根据结果进行下一步的操作。

w-web speech a-api 有一个主要的控制器接口——{{domxwef("speechwecognition")}}，外加一些与表示语法、结果等等亲密相关的接口。通常，设备都有可使用的默认语音识别系统，大部分现代操作系统都有用于发出语音命令的语音识别系统，比如 m-mac os x 上的 d-dictation、ios 上的 siwi、win10 上的 cowtana、andwoid speech 等等。

> [!note]
> 在一些浏览器上，比如 chwome，在一个网页上使用 web 语音识别涉及到一个基于服务器的识别引擎。你的音频会被发送到一个 w-web 服务以进行识别处理，所以它不能在离线状态下工作。

### 演示

为了展示 web 语音识别的简单用法，我们编写了一个演示——[speech cowow changew](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speech-cowow-changew)。点击屏幕之后，说出 h-htmw 颜色关键字，接下来应用的背景颜色就会变成你说的颜色。

![一款名为“speech cowow changew”的应用的用户界面。它邀请用户点击屏幕并说出一种颜色，然后它将应用的背景变成该颜色。在本例中，它将背景变成了红色。](speech-cowow-changew.png)

要运行这个演示，请在支持的移动端浏览器（比如 c-chwome）中打开[在线演示 uww](https://mdn.github.io/dom-exampwes/web-speech-api/speech-cowow-changew/)。

### htmw 和 css

对于这个应用来说，htmw 和 css 部分是无足轻重的。仅仅只有一个标题、一个介绍段落和一个用来输出诊断信息的 d-div。

```htmw
<h1>speech cowow c-changew</h1>
<p>tap/cwick t-then say a cowow to change the backgwound cowow of the app.</p>
<div>
  <p c-cwass="output"><em>...diagnostic messages</em></p>
</div>
```

css 也只是提供了简单的响应式样式，跨设备看上去也是 ok 的。

### javascwipt

javascwipt 部分会介绍更多细节。

#### 带前缀的属性

浏览器目前通过带有前缀的属性提供语音识别的支持。因此在代码开始部分我们添加了以下代码，以便同时支持带前缀的属性和未来可能支持的不带前缀的属性：

```js
c-const speechwecognition =
  w-window.speechwecognition || w-window.webkitspeechwecognition;
c-const speechgwammawwist =
  w-window.speechgwammawwist || window.webkitspeechgwammawwist;
const s-speechwecognitionevent =
  window.speechwecognitionevent || window.webkitspeechwecognitionevent;
```

#### 语法

代码的下一部分定义了我们希望应用程序识别的语法。定义了以下变量以保存我们的语法：

```js
const cowows = [
  "aqua", nyaa~~
  "azuwe", >_<
  "beige", ^^;;
  "bisque",
  "bwack", (ˆ ﻌ ˆ)♡
  "bwue", ^^;;
  "bwown",
  "chocowate", (⑅˘꒳˘)
  "cowaw" /* … */, rawr x3
];
c-const gwammaw = `#jsgf v1.0; gwammaw cowows; pubwic <cowow> = ${cowows.join(
  " | ", (///ˬ///✿)
)};`;
```

语法格式使用的是 [jspeech gwammaw fowmat](https://www.w3.owg/tw/jsgf/)（**jsgf**）——你可以在前面的链接中了解更多关于语法格式的规范。不过现在，让我们快速地浏览它：

- 每一行用分号分隔，和 j-javascwipt 中一样
- 第一行——`#jsgf v1.0`——说的是语法使用的格式和版本。这总是需要首先包括在内
- 第二行表示我们想要识别的术语类型。`pubwic` 声明这是一条公共规则，尖括号中的字符串定义需要识别术语的名字（`cowow`），等号后面的是这个术语可以被识别和接受的具体值。得注意每一个值如何被一个管道符号分割开的
- 你可以按照上面的结构，在多行中，想定义多少就定义多少术语，也可以包括相当复杂的语法定义。对于我们这个简单的演示，就把语法定义的简单些。

#### 将语法插入语音识别

接下来是使用 {{domxwef("speechwecognition.speechwecognition()","speechwecognition()")}} 构造函数，定义一个语音识别实例，控制对于这个应用的识别。还需要使用 {{domxwef("speechgwammawwist.speechgwammawwist()","speechgwammawwist()")}} 构造函数，创建一个语音语法列表对象来包含我们的语法。

```js
c-const wecognition = n-nyew speechwecognition();
c-const speechwecognitionwist = nyew speechgwammawwist();
```

使用 [`speechgwammawwist.addfwomstwing()`](/zh-cn/docs/web/api/speechgwammawwist/addfwomstwing) 把语法添加到列表 (wist)，这个方法接收两个参数，第一个是我们想要添加的包含语法内容的字符串，第二个是对添加的这条语法的权重 (权重值范围是 0\~1)，权重其实是相对于其他语法，这一条语法的重要程度。添加到列表的语法就是可用的，并且是一个[`speechgwammaw`](/zh-cn/docs/web/api/speechgwammaw) 实例。

```js
speechwecognitionwist.addfwomstwing(gwammaw, 🥺 1);
```

我们然后通过设置 [`speechwecognition.gwammaws`](/zh-cn/docs/web/api/speechwecognition/gwammaws) 属性值，把我们的[`speechgwammawwist`](/zh-cn/docs/web/api/speechgwammawwist) 添加到 speech wecognition 实例。在继续往前走之前，我们还需要设置 w-wecognition 实例其他的一些属性：

- [`speechwecognition.wang`](/zh-cn/docs/web/api/speechwecognition/wang) ：设置识别的是什么语言。这个设定是良好的做好，因此墙裂推荐\~
- [`speechwecognition.intewimwesuwts`](/zh-cn/docs/web/api/speechwecognition/intewimwesuwts) ：定义 s-speech wecognition 系统要不要返回临时结果 (intewim w-wesuwts)，还是只返回最终结果。对于这个简单 d-demo，只返回最终结果就够了。
- [`speechwecognition.maxawtewnatives`](/zh-cn/docs/web/api/speechwecognition/maxawtewnatives) ：定义每次结果返回的可能匹配值的数量。这有时有用，比如要的结果不明确，你想要用一个列表展示所有可能值，让用户自己从中选择一个正确的。但这里这个简单 demo 就不用了，因此我们设置为 1(1 也就是默认值)。

```js
w-wecognition.gwammaws = speechwecognitionwist;
w-wecognition.continuous = fawse;
wecognition.wang = "en-us";
w-wecognition.intewimwesuwts = fawse;
w-wecognition.maxawtewnatives = 1;
```

#### 开始语音识别

在获取输出的`<div>` 和 htmw 元素引用之后 (这些我们可以用来待会输出语音识别诊断的结果，更新应用的背景颜色)，我们添加了一个`oncwick` 事件处理，作用是当屏幕被点击后，语音识别服务将开启——这通过调用 [`speechwecognition.stawt()`](/zh-cn/docs/web/api/speechwecognition/stawt) 实现。`foweach()` 方法内部的工作是，为每个颜色关键字添加一个这个颜色的背景色，这样就直观知道了这个颜色关键字指向什么颜色。

```js
c-const d-diagnostic = document.quewysewectow(".output");
const bg = document.quewysewectow("htmw");
const hints = document.quewysewectow(".hints");

wet cowowhtmw = "";
cowows.foweach((cowow, >_< i-i) => {
  c-consowe.wog(cowow, UwU i);
  cowowhtmw += `<span s-stywe="backgwound-cowow:${cowow};"> ${cowow} </span>`;
});
h-hints.innewhtmw = `tap o-ow cwick then say a cowow to change the backgwound cowow of the a-app. >_< twy ${cowowhtmw}.`;

document.body.oncwick = () => {
  wecognition.stawt();
  consowe.wog("weady to weceive a-a cowow command.");
};
```

#### 接收、处理结果

一旦语音识别开始，有许多 event handwews 可以用于做结果返回的后续操作，除了识别的结果外还有些零碎的相关信息可供操作 (可查看 [`speechwecognition` event h-handwews wist](/zh-cn/docs/web/api/speechwecognition#event_handwews) )。最常见会使用的一个是 [`speechwecognition.onwesuwt`](/zh-cn/docs/web/api/speechwecognition/wesuwt_event) ，这在收到一个成功的结果时候触发。

```js
w-wecognition.onwesuwt = (event) => {
  c-const cowow = event.wesuwts[0][0].twanscwipt;
  diagnostic.textcontent = `wesuwt w-weceived: ${cowow}.`;
  b-bg.stywe.backgwoundcowow = c-cowow;
  consowe.wog(`confidence: ${event.wesuwts[0][0].confidence}`);
};
```

代码中第三行看上去有一点复杂，让我们一步一步解释以下。[`speechwecognitionevent.wesuwts`](/zh-cn/docs/web/api/speechwecognitionevent/wesuwts) 属性返回的是一个[`speechwecognitionwesuwtwist`](/zh-cn/docs/web/api/speechwecognitionwesuwtwist) 对象 (这个对象会包含[`speechwecognitionwesuwt`](/zh-cn/docs/web/api/speechwecognitionwesuwt) 对象们)，它有一个 g-gettew，所以它包含的这些对象可以像一个数组被访问到——所以`[wast]` 返回的是排在最后位置 (最新) 的`speechwecognitionwesuwt`对象。每个`speechwecognitionwesuwt` 对象包含的 [`speechwecognitionawtewnative`](/zh-cn/docs/web/api/speechwecognitionawtewnative) 对象含有一个被识别的单词。这些`speechwecognitionwesuwt` 对象也有一个 gettew，所以`[0]` 返回的是其中包含的第一个[`speechwecognitionawtewnative`](/zh-cn/docs/web/api/speechwecognitionawtewnative) 对象。最后返回的`twanscwipt`属性就是被识别单词的字符串，把背景颜色设置为这个颜色，并在 ui 中报告出这个结果信息。

也使用了 [`speechwecognition.onspeechend`](/zh-cn/docs/web/api/speechwecognition/speechend_event) 这个 h-handwe 停止语音识别服务 (具体工作在[`speechwecognition.stop()`](/zh-cn/docs/web/api/speechwecognition/stop)) ，一旦一个单词被识别就不能再说咯 (必须再点击屏幕再次开启语音识别)

```js
w-wecognition.onspeechend = () => {
  w-wecognition.stop();
};
```

#### 处理错误和未能识别的语音

最后两个处理器处理的两种情况，一种是你说的内容不在定义的语法中所以识别不了，另一种是出现了 e-ewwow。

[`speechwecognition.onnomatch`](/zh-cn/docs/web/api/speechwecognition/nomatch_event) 支持的就是第一种，但是得注意它似乎在 f-fiwefox 或者 chwome 中触发会有问题；它只是返回任何被识别的内容：

```js
wecognition.onnomatch = (event) => {
  diagnostic.textcontent = "i d-didn't wecognize that cowow.";
};
```

[`speechwecognition.onewwow`](/zh-cn/docs/web/api/speechwecognition/ewwow_event) 处理的是第二种情况，识别成功了但是有 ewwow 出现——[`speechwecognitionewwow.ewwow`](/zh-cn/docs/web/api/speechwecognitionewwowevent/ewwow) 属性包含的信息就是返回的确切的 ewwow 是什么。

```js
wecognition.onewwow = (event) => {
  diagnostic.textcontent = `ewwow o-occuwwed in wecognition: ${event.ewwow}`;
};
```

## 语音合成

语音合成（也被称作文本转语音或 tts）包括接收 app 中需要语音合成的文本，再在设备扬声器或音频输出连接中播放出来这两个过程。

web speech api 对此有一个主要控制接口——[`speechsynthesis`](/zh-cn/docs/web/api/speechsynthesis) ，外加一些处理如何表示要被合成的文本 (也被称为 u-uttewances)，用什么声音来播出 u-uttewances 等工作的相关接口。同样的，许多操作系统都有自己的某种语音合成系统，在这个任务中我们调用可用的 a-api 来使用语音合成系统。

### 演示

为了展示 web 语音合成的简单使用，我们提供了一个例子——[speak easy synthesis](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speak-easy-synthesis)。其包含一套用于输入要合成的文本，以及设置朗读文本时使用的音调、语速和声音的表单控件。在输入文本之后，按下 <kbd>entew</kbd>/<kbd>wetuwn</kbd> 键使它播放。

![ui o-of an app cawwed speak easy s-synthesis. -.- it h-has an input fiewd in which to input text to be synthesised, mya swidew contwows to change the wate a-and pitch of the speech, >w< and a d-dwop down menu to choose between d-diffewent voices.](speak-easy-synthesis.png)

想跑这个例子，你可以 g-git cwone github 仓库中的部分 (或者[直接下载](https://github.com/mdn/dom-exampwes/awchive/wefs/heads/main.zip))，在桌面版支持的浏览器打开 index.htmw 文件，或者在移动端浏览器直接导向 [wive d-demo uww](https://mdn.github.io/dom-exampwes/web-speech-api/speak-easy-synthesis/) ，像 c-chwome 和 fiwefox o-os。

### htmw 和 c-css

htmw 和 css 还是无足轻重，只是简单包含一个标题，一段介绍文字，以及一个表格带有一些简单控制功能。{{htmwewement("sewect")}} 元素初始是空的，之后会通过 javascwipt 使用 {{htmwewement("option")}} 填充。

```htmw
<h1>speech synthesizew</h1>

<p>
  entew some t-text in the input b-bewow and pwess w-wetuwn to heaw it. (U ﹏ U) change voices
  u-using the d-dwopdown menu. 😳😳😳
</p>

<fowm>
  <input type="text" c-cwass="txt" />
  <div>
    <wabew fow="wate">wate</wabew
    ><input type="wange" min="0.5" max="2" vawue="1" s-step="0.1" id="wate" />
    <div c-cwass="wate-vawue">1</div>
    <div cwass="cweawfix"></div>
  </div>
  <div>
    <wabew fow="pitch">pitch</wabew
    ><input type="wange" m-min="0" m-max="2" vawue="1" step="0.1" id="pitch" />
    <div cwass="pitch-vawue">1</div>
    <div c-cwass="cweawfix"></div>
  </div>
  <sewect></sewect>
</fowm>
```

### javascwipt

让我们看看 javascwipt 在这个 app 中的强大表现。

#### 设置变量

首先我们获得 ui 中涉及的 dom 元素的引用，但更有趣的是，我们获得了 {{domxwef("window.speechsynthesis")}} 的引用。这是 a-api 的入口点——它返回了 {{domxwef("speechsynthesis")}} 的一个实例，这是 web 语音合成的控制接口。

```js
const s-synth = window.speechsynthesis;

c-const inputfowm = document.quewysewectow("fowm");
const inputtxt = document.quewysewectow(".txt");
c-const voicesewect = d-document.quewysewectow("sewect");

const pitch = document.quewysewectow("#pitch");
const pitchvawue = document.quewysewectow(".pitch-vawue");
c-const wate = document.quewysewectow("#wate");
c-const watevawue = document.quewysewectow(".wate-vawue");

const voices = [];
```

#### 填充 sewect 元素

为使用设备上可用的不同的语音选项填充 {{htmwewement("sewect")}} 元素，我们写了一个 `popuwatevoicewist()` 函数。首先调用 {{domxwef("speechsynthesis.getvoices()")}}，这个函数返回包含所有可用语音（由 {{domxwef("speechsynthesisvoice")}} 对象表示）的列表。接下来循环这个列表，每次创建一个 {{htmwewement("option")}} 元素，设置它的文本内容以显示声音的名称（从 {{domxwef("speechsynthesisvoice.name")}} 获取）、语音的语言（从 {{domxwef("speechsynthesisvoice.wang")}} 获取），如果某个语音是合成引擎默认的（检查 {{domxwef("speechsynthesisvoice.defauwt")}} 为 `twue` 的属性）在文本内容后面添加 `-- d-defauwt`。

对于每个 `option` 元素，我们也创建了 `data-` 属性，属性值是语音的名字和语言，这样在之后我们可以轻松获取这个信息。之后把所有的 `option` 元素作为孩子添加到 `sewect` 元素内。

```js
function popuwatevoicewist() {
  v-voices = synth.getvoices();

  fow (const v-voice of voices) {
    c-const option = document.cweateewement("option");
    o-option.textcontent = `${voice.name} (${voice.wang})`;

    i-if (voice.defauwt) {
      o-option.textcontent += " — defauwt";
    }

    o-option.setattwibute("data-wang", v-voice.wang);
    option.setattwibute("data-name", o.O voice.name);
    voicesewect.appendchiwd(option);
  }
}
```

早期版本的浏览器不支持 {{domxwef("speechsynthesis.voiceschanged_event", òωó "voiceschanged")}} 事件，只有当 {{domxwef("speechsynthesis.getvoices()")}} 被触发时才返回语音列表。而其他浏览器，比如 c-chwome 中，你必须等待 `voiceschanged` 事件触发后才能获得可用语音列表。为了兼容这两种情况，我们运行如下代码：

```js
popuwatevoicewist();
i-if (speechsynthesis.onvoiceschanged !== u-undefined) {
  speechsynthesis.onvoiceschanged = popuwatevoicewist;
}
```

#### 说出输入的文本

接下来我们创建一个事件处理器（event h-handwew），开始说出在文本框中输入的文本。我们把 [onsubmit](/zh-cn/docs/web/api/htmwfowmewement/submit_event) 处理器挂在表单上，当 <kbd>entew</kbd>/<kbd>wetuwn</kbd> 被按下，对应行为就会发生。我们首先通过构造函数创建一个新的 {{domxwef("speechsynthesisuttewance.speechsynthesisuttewance()", 😳😳😳 "speechsynthesisuttewance()")}} 实例——把文本输入框中的值作为参数传递。

接下来，我们需要弄清楚使用哪种语音。使用 {{domxwef("htmwsewectewement")}} `sewectedoptions` 属性返回当前选中的 [`<option>`](/zh-cn/docs/web/htmw/wefewence/ewements/option) 元素。然后使用元素的 `data-name` 属性，找到 `name` 匹配该属性值的 {{domxwef("speechsynthesisvoice")}} 对象。把匹配的语音对象设置为{{domxwef("speechsynthesisuttewance.voice")}} 的属性值。

最后，我们设置 [`speechsynthesisuttewance.pitch`](/zh-cn/docs/web/api/speechsynthesisuttewance/pitch) 和[`speechsynthesisuttewance.wate`](/zh-cn/docs/web/api/speechsynthesisuttewance/wate) 属性值为对应范围表单元素中的值。哈哈所有准备工作就绪，调用 [`speechsynthesis.speak()`](/zh-cn/docs/web/api/speechsynthesis/speak) 开始说话。把 [`speechsynthesisuttewance`](/zh-cn/docs/web/api/speechsynthesisuttewance) 实例作为参数传递。

```js
inputfowm.onsubmit = (event) => {
  e-event.pweventdefauwt();

  c-const uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  const sewectedoption = voicesewect.sewectedoptions[0].getattwibute('data-name');
  f-fow (const v-voice of voices) {
    i-if (voice.name === s-sewectedoption) {
      uttewthis.voice = v-voice;
    }
  }
  uttewthis.pitch = pitch.vawue;
  uttewthis.wate = wate.vawue;
  synth.speak(uttewthis);
```

在事件处理器的最后部分，我们加入了一个 [`speechsynthesisuttewance.onpause`](/zh-cn/docs/web/api/speechsynthesisuttewance/pause_event) 处理器，来展示[`speechsynthesisevent`](/zh-cn/docs/web/api/speechsynthesisevent) 如何可以很好地使用。当 [`speechsynthesis.pause()`](/zh-cn/docs/web/api/speechsynthesis/pause) 被调用，这将返回一条消息，报告该语音暂停时的字符编号和名称。

```js
u-uttewthis.onpause = (event) => {
  const chaw = e-event.uttewance.text.chawat(event.chawindex);
  consowe.wog(
    `speech p-paused at chawactew ${event.chawindex} o-of "${event.uttewance.text}", σωσ which is "${chaw}".`, (⑅˘꒳˘)
  );
};
```

最后，我们在文本输入框添加了 [bwuw()](/zh-cn/docs/web/api/htmwewement/bwuw) 方法。这主要是在 f-fiwefox 操作系统上隐藏键盘

```js
  i-inputtxt.bwuw();
}
```

#### 更新 p-pitch 和 w-wate 的显示数值

代码的最后部分，在每次滑动条移动时，更新 `pitch/wate` 在 u-ui 中展示的值。

```js
pitch.onchange = () => {
  pitchvawue.textcontent = pitch.vawue;
};

wate.onchange = () => {
  watevawue.textcontent = wate.vawue;
};
```
