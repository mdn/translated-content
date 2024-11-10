---
title: Web Audio API 的运用
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
---

{{DefaultAPISidebar("Web Audio API")}}

让我们来看看 [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 入门。我们将简要介绍一些概念，然后学习一个简单的允许我们加载音轨，播放暂停，改变音量和立体声声像的音箱例子。

Web Audio API 并不会取代\<audio>音频元素，倒不如说它是\<audio>的补充更好，就好比如\<canvas>与\<img>共存的关系。你使用来实现音频的方式取决于你的使用情况。如果你只是想控制一个简单的音轨的播放，\<audio>或许是一个更好更快的选择。如果你想实现更多复杂的音频处理，以及播放，Web Audio API 提供了更多的优势以及控制。

Web Audio API 的一个强大之处在于，它没有任何严格的声音呼叫控制。比如说，在同一时间它没有呼叫 32 或 64 的声音的限制。如果你的处理器性能好的话，同一时间播放 1000 多的声音不卡顿也是有可能的。这充分显示真正的进步，要知道几年前中高频的声卡仅能处理小部分的负载。

## 例子

我们的音箱看起来像这样：

![A boombox with play, pan, and volume controls](boombox.png)

注意带有播放按钮的复古磁带卡座，及用于改变音量和立体声声像的平移滑块。我们可以使其更复杂，但这是该阶段进行简单学习的理想选择。

查看最终 demo 代码 [here on Codepen](https://codepen.io/Rumyra/pen/qyMzqN/)，或者在 [GitHub 查看源代码 on GitHub](https://github.com/mdn/webaudio-examples/tree/master/audio-basics)。

## 浏览器支持

现代浏览器的 Web Audio API 对的大多数功能都有很好的支持。API 有很多的功能，因此要获得更准确的信息，你必须检查每个参考页面底部的浏览器兼容表。

## 音频图

Web Audio API 中的所有内容都是基于音频图的概念，音频图由节点组成。

Web Audio API 在 **audio context（音频上下文）** 内处理音频，而且被设计为允许模块化路由。基本的音频操作是基于 **audio nodes** 进行的，音频节点连接起来形成一个音频路由图。你拥有输入节点，你要操作的声音源，根据设计需要被修改的节点，和输出节点（目的地），它们允许你保存或者听取这些声音。

支持拥有不同通道布局的多个的音频源，即使是在单个上下文。因为模块化设计，你可以创建具有动态效果的复杂的音频功能。

## 音频上下文

为了能通过 Web Audio API 执行任何操作，我们需要创建音频上下文实例。这能让我们访问 API 所有的特性和功能。

```js
// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();
```

所以当我们这样做时会发生什么？为我们自动创建一个 {{domxref("BaseAudioContext")}} 并自动扩展到在线音频上下文。我们希望如此，因为我们想要播放在线声音。

> [!NOTE]
> 如果你只是想处理音频数据，举个例子，缓存和流式传输而不播放它，你可能想要考虑创建一个 {{domxref("OfflineAudioContext")}}。

## 加载声音

现在，需要通过我们创建的音频上下文播放一些声音。Web Audio API 中有几种方法可以实现这一点。让我们通过一个简单的方法开始 — 因为我们有一个音箱，我们可能想播放一首完整的歌曲。此外，为了便于访问，我们可以在在 DOM 中暴露该音轨。我们将使用 {{htmlelement("audio")}} 元素在页面上暴露这首歌曲。

```js
<audio src="myCoolTrack.mp3" type="audio/mpeg"></audio>
```

> [!NOTE]
> 如果你要加载的声音文件保留在其他域中，则需要使用 `crossorigin` 属性；查看 [Cross Origin Resource Sharing (CORS)](/zh-CN/docs/Web/HTTP/CORS) 取得更多信息。

为了使用 Web Audio API 的优秀特性，我们需要从该元素中获取源并将其传入我们创建的上下文中。幸运的是，有一个方法可以让我们做到这一点 — {{domxref("AudioContext.createMediaElementSource")}}:

```js
// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);
```

> [!NOTE]
> 上面的 `<audio>` 元素在 DOM 中代表了一个{{domxref("HTMLMediaElement")}} 类型的对象，拥有其自身的一组功能。这一切都将保持不变。我们只是让 Web Audio API 能够访问到声音。

## 控制声音

当在网页上播放声音时，让用户能控制它是很重要的。根据使用场景，有无数的选项可用，但这我们将提供播放/暂停声音，改变音轨音量及从左到右平移声音的功能。

通过 JavaScript 代码控制声音会受到浏览器的自动播放策略的影响 (autoplay support policies)，因此在未经用户（或白名单）许可的情况下脚本对声音的控制会被阻止。浏览器的自动播放策略通常要求显式权限或者用户与页面产生互动后，才允许脚本触发音频播放。

这些特殊的要求基本上是因为意外的声音可能会打扰到用户，令人厌烦，并且可能导致无障碍问题。你可以在文章 [媒体与 Web 音频 API 自动播放指南](/zh-CN/docs/Web/Media/Autoplay_guide) 了解更多相关信息。

因为我们的脚本正响应用户输入（例如，点击播放按钮）进行播放音频，我们状态良好且应该没有自动播放阻止的问题。所以，让我们看看我们的播放和暂停功能。我们有一个当音频播放时变为暂停按钮的播放按钮：

```html
<button data-playing="false" role="switch" aria-checked="false">
  <span>Play/Pause</span>
</button>
```

在我们可以播放音频前我们需要将我们的音频图从音频源/输入节点连接到目的地。

我们已经通过把音频元素传入 API 生成一个输入节点。在大多数情况下，你不需要生成一个输出节点，你只需要将其他节点连接到可以为你处理这种情况的 {{domxref("BaseAudioContext.destination")}}：

```js
track.connect(audioContext.destination);
```

可视化这些节点的一个好方法是绘制音频图形以便可视化它。这是我们当前的音频图：

![an audio graph with an audio element source connected to the default destination](graph1.jpg)

现在我们可以添加播放和暂停功能。

```js
// select our play button
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  function () {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === "false") {
      audioElement.play();
      this.dataset.playing = "true";
    } else if (this.dataset.playing === "true") {
      audioElement.pause();
      this.dataset.playing = "false";
    }
  },
  false,
);
```

我们也需要考虑到当音频播放完毕后做什么。我们的 `HTMLMediaElement` 一旦播放完毕会触发一个 `ended` 事件，所以我们可以监听它并运行相应代码：

```js
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false,
);
```

## 关于 Web Audio 编辑器

Firefox 有一个名为 [Web Audio editor](/zh-CN/docs/Tools/Web_Audio_Editor) 的工具。在其上运行音频图的任何页面上，你可以打开开发者工具，使用 Web Audio 选项卡查看音频图，可查看每个节点的可用属性，并可以修改这些属性来查看会有什么效果。

![The Firefox web audio editor showing an audio graph with AudioBufferSource, IIRFilter, and AudioDestination](web-audio-editor.png)

> [!NOTE]
> Web Audio 编辑器默认不是开启的，你需要打开 Firefox developer tools 设置，选中 Default Developer Tools 部分中的 Web Audio 复选框来显示它。

## 修改声音

让我们深入研究一些基本的修改节点以改变我们的声音。这就是 Web Audio API 真正开始派上用场的地方。首先，让我们改变音量。这可以通过 {{domxref("GainNode")}} 实现，它表示我们的声波有多大。

使用 Web Audio API 可以通过 2 个方法创建节点。你可以使用上下文本身的工厂方法（例如， `audioContext.createGain()` ）或者通过节点的构造函数（例如， `new GainNode()` ），我们将使用工厂方法：

```js
const gainNode = audioContext.createGain();
```

现在我们需要在原先音频图基础上更新音频图，所以输入连接到增益，然后增益节点连接到目标：

```js
track.connect(gainNode).connect(audioContext.destination);
```

这会让我们的音频图看起来如下：

![an audio graph with an audio element source, connected to a gain node that modifies the audio source, and then going to the default destination](graph2.jpg)

默认增益为 1；这使当前音量保持不变。增益可以设置的最小值约`-3.4028235E38`，最大约`3.4028235E38`。这里我们将允许音箱增益可以设置到 2（2 倍的原音量）和降低到 0（这可以有效的静音）。

让我们给用户这样的控制 — 我们将会使用 [range input](/zh-CN/docs/Web/HTML/Element/input/range) ：

```js
<input type="range" id="volume" min="0" max="2" value="1" step="0.01">
```

> [!NOTE]
> 范围输入 (Range Input) 是更新音频节点值非常方便的输入类型。你可以指定特定的范围值同时直接将它们作为音频参数一起使用。

所以当用户更改输入节点值时，获取此输入值并更新增益值：

```js
const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener(
  "input",
  function () {
    gainNode.gain.value = this.value;
  },
  false,
);
```

> [!NOTE]
> 节点对象的值（例如， `GainNode.gain` ）不是简单值；它们实际上是 {{domxref("AudioParam")}} 类型对象 — 这些被称为参数。这也是为什么我们需要设置 `GainNode.gain` 的 `value` 属性，而不是直接设置 `gain` 的值。这使得它们更加的灵活，允许传入一系列特定的值以在例如一段时间内改变。

好的，现在用户可以更新音频的音量！如果你要增加静音功能，增益节点是可使用的完美节点。

## 为应用程序增加立体声平移

让我们添加另一个修改阶段来练习我们刚刚学过的。

如果用户拥有立体声功能，可用 {{domxref("StereoPannerNode")}} 节点改变左右扬声器的平衡。

> **备注：** `StereoPannerNode` 用于你只想从左到右进行立体声平移的简单情况。还有一个 {{domxref("PannerNode")}}，它允许对 3D 空间或声音空间化进行大量控制以创建更复杂的效果。这在游戏和 3D 应用程序中生成小鸟飞过头顶或者来自用户身后的声音。

为了使其可视化，我们将使我们的音频图如下：

![An image showing the audio graph showing an input node, two modification nodes (a gain node and a stereo panner node) and a destination node.](graphpan.jpg)

这次让我们使用构造函数来生成节点。当我们这样做，我们需要传入上下文及该特定节点可能采用的任何选项：

```js
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);
```

> [!NOTE]
> 目前生成节点的构造函数不是每个浏览器都支持的。旧工厂函数支持更为广泛。

这里我们的范围从 -1（最左边）和 1（最右边）。再次让我们使用范围类型的 input 来改变这个参数：

```js
<input type="range" id="panner" min="-1" max="1" value="0" step="0.01">
```

与我们之前一样，我们使用来自这个 input 的值来调整我们的 panner 的值：

```js
const pannerControl = document.querySelector("#panner");

pannerControl.addEventListener(
  "input",
  function () {
    panner.pan.value = this.value;
  },
  false,
);
```

让我们再次调整我们的音频图，将所有节点连接在一起：

```js
track.connect(gainNode).connect(panner).connect(audioContext.destination);
```

剩下要做的就是试试这个应用程序：[查看 Codepen 上的最终演示](https://codepen.io/Rumyra/pen/qyMzqN/)。

## 摘要

好的，我们拥有一个音箱播放我们的“磁带”，我们可以调整音量和立体声声像，给我们提供了一个相当基本的工作音频图表。

这构成了开始向你的网站或 Web 应用添加音频所需的很少的几个基础知识。Web Audio API 还有很多功能，但一旦你掌握了节点的概念及将音频节点图联系在一起，我们可以继续研究更加复杂的功能。

## 更多例子

还有其他示例可以了解有关 Web Audio API 的更多信息。

[Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic) 是一个有趣的语音操纵器和音频可视化 web 应用程序，允许你选择不同的效果和可视化。该应用程序相当初级，但它演示了同时使用多个 Web Audio API 特性（[运行 Voice-change-O-matic live](https://mdn.github.io/voice-change-o-matic/)）。

![A UI with a sound wave being shown, and options for choosing voice effects and visualizations.](voice-change-o-matic.png)

另一个专门用于演示 Web Audio API 的例子是 [Violent Theremin](http://mdn.github.io/violent-theremin/)，一个允许你通过移动鼠标来改变它的音调音量的简单的应用程序。它还提供了一个迷幻的灯光秀（[查看 Violent Theremin 源代码](https://github.com/mdn/violent-theremin)）

![A page full of rainbow colours, with two buttons labeled Clear screen and mute. ](violent-theremin.png)

另参阅我们的 [webaudio-examples repo](https://github.com/mdn/webaudio-examples) 以获取更多示例。

#### _注：以下为旧文档，因较完整，此处暂不删除，方便开发者查看。_

## 基础概念

> [!NOTE]
> 很多的代码碎片来自于这个例子 [Violent Theremin example](https://github.com/mdn/violent-theremin).

Web Audio API 包含在音频上下文的处理音频操作，以及已被设计允许模块化路由。基本音频操作可通过音频节点进行，这些节点连接在一起，组成一个音频的路由表。多个音源——带有不同类型的频道配置——甚至可以被一个上下文支持。这个模块设计提供了创造带有动态效果的复杂音频功能的灵活性。

音频节点通过输入与输出进行连接，形成一个链，从一个或多个源出发，通过一个或更多的节点，最终到输出终端（你也可以不提供输出终端，换句话说，如果只是想使一些音频数据可视化）。一个简单经典的 web Audio 的工作流程如下：

1. 构建音频上下文 AudioContext 对象；

2. 在 AudioContext 对象内，构建音源，比如\<audio>，oscillator，stream

3. 构建效果节点 effectNode，比如混响，双二阶滤波器，声相，压限器

4. 选择最终的音频目的地，比如说你的系统扬声器

5. 连接源到效果，效果到输出终端

### 构建 AudioContext 对象

首先，你需要构建一个 AudioContext 实例，来创建一个音频图。最简单的方法就像这样：

```js
var audioCtx = new AudioContext();
```

> [!NOTE]
> 同样一个文档是可以存在多个 audioContext 对象的，但是比较浪费。

然而，提供一个版本前缀对于 webkit/Blink 浏览器是很重要的，对于 Firefox(桌面版/手机版/OS 版) 是不需要的。如下：

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
```

> [!NOTE]
> 当创建一个新的 conText 对象时，如果你不提示 window 对象，Safari 会无效。

### 创建 AudioSource

现在我们有了 AudioContext，可以用这个来做很多事。第一件我们需要做的事是玩音乐。音频可以来自于多样的地方：

- 通过 JavaScript 直接生成一个音频节点比如 oscillator. 一个 {{ domxref("OscillatorNode") }}是利用{{ domxref("AudioContext.createOscillator") }} 方法来构建。
- 从原 PCM 数据构建：AudioContext 有解密被支持的音频格式的多种方法。看 {{ domxref("AudioContext.createBuffer()") }}, {{ domxref("AudioContext.createBufferSource()") }}, 以及 {{ domxref("AudioContext.decodeAudioData()") }}.
- 来自于 HTML 音频元素例如 {{HTMLElement("video")}} 或者{{HTMLElement("audio")}}: 可以看 {{ domxref("AudioContext.createMediaElementSource()") }}.
- 直接来自于 [WebRTC](/zh-CN/docs/WebRTC)，{{domxref("MediaStream")}} 例如来自于摄像头或麦克风。可以看{{ domxref("AudioContext.createMediaStreamSource()") }}.

对于这些特殊的例子，我们将会为我们的源构建一个 oscillator 来提供简单的音调，以及 gain node 来控制音频音量：

```js
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
```

> [!NOTE]
> 为了直接播放一个音乐文件，你通常通过 XHR 来加载文件，通过 Buffer 来解码，创建 BufferSource. 看这个 [例子来自于 Voice-change-O-matic](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L48-L68).

> [!NOTE]
> Scott Michaud 已经写了一个有用的库来加载和解码一个或多个音频实例，被称为 [AudioSampleLoader](https://github.com/ScottMichaud/AudioSampleLoader). 这个可以帮助简化 XHR/buffering 的处理操作。

### 连接输入输出

为了通过你的扬声器来实际输出音质，你需要将它们连接起来。这个被称为节点连接方法，节点来自于很多可获得的不同节点类型。你想要连接的节点都提供了这个方法。

你的设备的默认输出结构（通常是你的设备扬声器），通过{{ domxref("AudioContext.destination") }}来允许进入。为了连接 oscillator，gain node 以及输出端，如以下运用：

```js
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

一个更复杂的例子，（比如 [Voice-change-O-matic](http://mdn.github.io/voice-change-o-matic/)), 你可以链接很多你想要的节点在一起，例如：

```js
source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

这个将会创造一个如下音频节点图：

![](voice-change-o-matic-graph.png)你也可以链接多个节点到一个节点，比如说你想要混合多个音频源在一起，就让它们都通过一个效果节点，比如 gain node。

### 播放音乐及设置音调

现在 audio 节点图已经建立，我们可以设置属性值及调用音频节点的方法来调节想要的音效。在这个简单的例子，我们可以设置特殊的音调，以赫兹为单位，设置为特殊类型，以及指示音乐播放：

```js
oscillator.type = "sine"; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillator.frequency.value = 2500; // value in hertz
oscillator.start();
```

在我们的 Violent Theremin 例子，设定了一个最大 gain 以及 frequency（频率）值：

```js
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var maxFreq = 6000;
var maxVol = 1;

var initialFreq = 3000;
var initialVol = 0.5;

// set options for the oscillator

oscillator.type = "sine"; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillator.frequency.value = initialFreq; // value in hertz
oscillator.start();

gainNode.gain.value = initialVol;
```

然后我们设置了一个 frequency 的新的值，以及设置每个时间鼠标的移动，基于目前的鼠标坐标值作为 frequency 和 gain 的最大值百分比。

```js
// Mouse pointer coordinates

var CurX;
var CurY;

// Get new mouse pointer coordinates when mouse is moved
// then set new gain and pitch values

document.onmousemove = updatePage;

function updatePage(e) {
  CurX = window.Event
    ? e.pageX
    : event.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  CurY = window.Event
    ? e.pageY
    : event.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);

  oscillator.frequency.value = (CurX / WIDTH) * maxFreq;
  gainNode.gain.value = (CurY / HEIGHT) * maxVol;

  canvasDraw();
}
```

### 简单的 canvas 可视化

每次鼠标的移动，canvasDraw() 方法会被调用，鼠标停留的位置会画出一个多圆圈组成的小簇，它的大小以及颜色会基于 frequency/gain 的值。

```js
function random(number1, number2) {
  var randomNo =
    number1 + (Math.floor(Math.random() * (number2 - number1)) + 1);
  return randomNo;
}

var canvas = document.querySelector(".canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;

var canvasCtx = canvas.getContext("2d");

function canvasDraw() {
  rX = CurX;
  rY = CurY;
  rC = Math.floor((gainNode.gain.value / maxVol) * 30);

  canvasCtx.globalAlpha = 0.2;

  for (i = 1; i <= 15; i = i + 2) {
    canvasCtx.beginPath();
    canvasCtx.fillStyle =
      "rgb(" +
      100 +
      i * 10 +
      "," +
      Math.floor((gainNode.gain.value / maxVol) * 255) +
      "," +
      Math.floor((oscillator.frequency.value / maxFreq) * 255) +
      ")";
    canvasCtx.arc(
      rX + random(0, 50),
      rY + random(0, 50),
      rC / 2 + i,
      (Math.PI / 180) * 0,
      (Math.PI / 180) * 360,
      false,
    );
    canvasCtx.fill();
    canvasCtx.closePath();
  }
}
```

### theremin 的静音

当静音按钮点击，以下方法会被调用，disconnect 方法，将切断 gain node 与 destination 节点的链接，有效阻止了节点图的链接，所以没有声音会被产生。再次点击效果相反。

```js
var mute = document.querySelector(".mute");

mute.onclick = function () {
  if (mute.id == "") {
    gainNode.disconnect(audioCtx.destination);
    mute.id = "activated";
    mute.innerHTML = "Unmute";
  } else {
    gainNode.connect(audioCtx.destination);
    mute.id = "";
    mute.innerHTML = "Mute";
  }
};
```

## 其他节点选择

这里有许多通过 Web Audio API 来构建的节点，一个好消息就是，总体来说，正如我们所见，他们用同一种方法工作：构建节点，连接到图表的另一个节点，然后处理节点属性以及方法来作用于你想要的音源。

我们并不希望通过所有可获得的效果等；你可以在{{ domxref("Web_Audio_API") }}不同的参考接口找到如何使用每一个的详述。我们现在来浏览下不同的设置。

### Wave shaper 节点

利用 {{ domxref("AudioContext.createWaveShaper") }} 方法，你可以构建一个 wave shaper node:

```js
var distortion = audioCtx.createWaveShaper();
```

这个对象一定会数学化的定义 wave shape，一个被应用于基础声音波来创造扭曲的效果。这些波并不好被计算，最好的开始方法是搜索 web 算法。比如，我们可以从 [Stack Overflow](http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion) 找到：

```js
function makeDistortionCurve(amount) {
  var k = typeof amount === "number" ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for (; i < n_samples; ++i) {
    x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}
```

在 Voice-change-O-matic 的演示中，我们连接到 audio 图表上的 ditortion 节点，当需要的时候可以运用：

```js
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);

...

distortion.curve = makeDistortionCurve(400);
```

### Biquad filter

biquad filter 拥有很多可选择的方法，通过 {{ domxref("AudioContext.createBiquadFilter") }} 方法来构建：

```js
var biquadFilter = audioCtx.createBiquadFilter();
```

在 Voice-change-o-matic 的演示中，运用的制定选项是“lowshelf”过滤器，它提供了低音的基本增幅方法：

```js
biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
```

我们在这里详述了过滤器的类型，频率值，增幅值。在 lowshelf 过滤器情况，所有的指定频率拥有 25 分贝的增幅值。

## Web Audio API 的其他

Web Audio API 可以做不仅仅音频可视化及专业化（如 panning）的事情。我们将会在之后的文章涉及其他的更多内容。
