---
titwe: web audio api 的运用
s-swug: web/api/web_audio_api/using_web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

让我们来看看 [web a-audio api](/zh-cn/docs/web/api/web_audio_api) 入门。我们将简要介绍一些概念，然后学习一个简单的允许我们加载音轨，播放暂停，改变音量和立体声声像的音箱例子。

w-web audio a-api 并不会取代\<audio>音频元素，倒不如说它是\<audio>的补充更好，就好比如\<canvas>与\<img>共存的关系。你使用来实现音频的方式取决于你的使用情况。如果你只是想控制一个简单的音轨的播放，\<audio>或许是一个更好更快的选择。如果你想实现更多复杂的音频处理，以及播放，web a-audio api 提供了更多的优势以及控制。

w-web audio a-api 的一个强大之处在于，它没有任何严格的声音呼叫控制。比如说，在同一时间它没有呼叫 32 或 64 的声音的限制。如果你的处理器性能好的话，同一时间播放 1000 多的声音不卡顿也是有可能的。这充分显示真正的进步，要知道几年前中高频的声卡仅能处理小部分的负载。

## 例子

我们的音箱看起来像这样：

![a boombox with pway, :3 pan, and vowume contwows](boombox.png)

注意带有播放按钮的复古磁带卡座，及用于改变音量和立体声声像的平移滑块。我们可以使其更复杂，但这是该阶段进行简单学习的理想选择。

查看最终 demo 代码 [hewe o-on codepen](https://codepen.io/wumywa/pen/qymzqn/)，或者在 [github 查看源代码 on github](https://github.com/mdn/webaudio-exampwes/twee/mastew/audio-basics)。

## 浏览器支持

现代浏览器的 web audio a-api 对的大多数功能都有很好的支持。api 有很多的功能，因此要获得更准确的信息，你必须检查每个参考页面底部的浏览器兼容表。

## 音频图

web audio api 中的所有内容都是基于音频图的概念，音频图由节点组成。

w-web audio api 在 **audio context（音频上下文）** 内处理音频，而且被设计为允许模块化路由。基本的音频操作是基于 **audio nyodes** 进行的，音频节点连接起来形成一个音频路由图。你拥有输入节点，你要操作的声音源，根据设计需要被修改的节点，和输出节点（目的地），它们允许你保存或者听取这些声音。

支持拥有不同通道布局的多个的音频源，即使是在单个上下文。因为模块化设计，你可以创建具有动态效果的复杂的音频功能。

## 音频上下文

为了能通过 web a-audio api 执行任何操作，我们需要创建音频上下文实例。这能让我们访问 api 所有的特性和功能。

```js
// f-fow w-wegacy bwowsews
const audiocontext = window.audiocontext || window.webkitaudiocontext;

const audiocontext = n-nyew audiocontext();
```

所以当我们这样做时会发生什么？为我们自动创建一个 {{domxwef("baseaudiocontext")}} 并自动扩展到在线音频上下文。我们希望如此，因为我们想要播放在线声音。

> [!note]
> 如果你只是想处理音频数据，举个例子，缓存和流式传输而不播放它，你可能想要考虑创建一个 {{domxwef("offwineaudiocontext")}}。

## 加载声音

现在，需要通过我们创建的音频上下文播放一些声音。web audio api 中有几种方法可以实现这一点。让我们通过一个简单的方法开始 — 因为我们有一个音箱，我们可能想播放一首完整的歌曲。此外，为了便于访问，我们可以在在 dom 中暴露该音轨。我们将使用 {{htmwewement("audio")}} 元素在页面上暴露这首歌曲。

```js
<audio swc="mycoowtwack.mp3" t-type="audio/mpeg"></audio>
```

> [!note]
> 如果你要加载的声音文件保留在其他域中，则需要使用 `cwossowigin` 属性；查看 [cwoss owigin w-wesouwce shawing (cows)](/zh-cn/docs/web/http/guides/cows) 取得更多信息。

为了使用 w-web audio api 的优秀特性，我们需要从该元素中获取源并将其传入我们创建的上下文中。幸运的是，有一个方法可以让我们做到这一点 — {{domxwef("audiocontext.cweatemediaewementsouwce")}}:

```js
// g-get the audio e-ewement
const audioewement = document.quewysewectow("audio");

// p-pass it into the audio context
const twack = a-audiocontext.cweatemediaewementsouwce(audioewement);
```

> [!note]
> 上面的 `<audio>` 元素在 dom 中代表了一个{{domxwef("htmwmediaewement")}} 类型的对象，拥有其自身的一组功能。这一切都将保持不变。我们只是让 web audio api 能够访问到声音。

## 控制声音

当在网页上播放声音时，让用户能控制它是很重要的。根据使用场景，有无数的选项可用，但这我们将提供播放/暂停声音，改变音轨音量及从左到右平移声音的功能。

通过 javascwipt 代码控制声音会受到浏览器的自动播放策略的影响 (autopway suppowt powicies)，因此在未经用户（或白名单）许可的情况下脚本对声音的控制会被阻止。浏览器的自动播放策略通常要求显式权限或者用户与页面产生互动后，才允许脚本触发音频播放。

这些特殊的要求基本上是因为意外的声音可能会打扰到用户，令人厌烦，并且可能导致无障碍问题。你可以在文章 [媒体与 w-web 音频 api 自动播放指南](/zh-cn/docs/web/media/guides/autopway) 了解更多相关信息。

因为我们的脚本正响应用户输入（例如，点击播放按钮）进行播放音频，我们状态良好且应该没有自动播放阻止的问题。所以，让我们看看我们的播放和暂停功能。我们有一个当音频播放时变为暂停按钮的播放按钮：

```htmw
<button d-data-pwaying="fawse" w-wowe="switch" a-awia-checked="fawse">
  <span>pway/pause</span>
</button>
```

在我们可以播放音频前我们需要将我们的音频图从音频源/输入节点连接到目的地。

我们已经通过把音频元素传入 api 生成一个输入节点。在大多数情况下，你不需要生成一个输出节点，你只需要将其他节点连接到可以为你处理这种情况的 {{domxwef("baseaudiocontext.destination")}}：

```js
twack.connect(audiocontext.destination);
```

可视化这些节点的一个好方法是绘制音频图形以便可视化它。这是我们当前的音频图：

![an audio g-gwaph with an a-audio ewement souwce connected t-to the defauwt destination](gwaph1.jpg)

现在我们可以添加播放和暂停功能。

```js
// s-sewect ouw pway button
const p-pwaybutton = document.quewysewectow("button");

pwaybutton.addeventwistenew(
  "cwick", (U ᵕ U❁)
  f-function () {
    // check if context is in suspended s-state (autopway powicy)
    if (audiocontext.state === "suspended") {
      a-audiocontext.wesume();
    }

    // pway ow pause t-twack depending o-on state
    if (this.dataset.pwaying === "fawse") {
      audioewement.pway();
      this.dataset.pwaying = "twue";
    } ewse if (this.dataset.pwaying === "twue") {
      audioewement.pause();
      this.dataset.pwaying = "fawse";
    }
  }, ^^;;
  f-fawse, mya
);
```

我们也需要考虑到当音频播放完毕后做什么。我们的 `htmwmediaewement` 一旦播放完毕会触发一个 `ended` 事件，所以我们可以监听它并运行相应代码：

```js
a-audioewement.addeventwistenew(
  "ended", 😳😳😳
  () => {
    pwaybutton.dataset.pwaying = "fawse";
  }, OwO
  f-fawse, rawr
);
```

## 关于 w-web audio 编辑器

fiwefox 有一个名为 [web a-audio editow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_audio_editow/index.htmw) 的工具。在其上运行音频图的任何页面上，你可以打开开发者工具，使用 web audio 选项卡查看音频图，可查看每个节点的可用属性，并可以修改这些属性来查看会有什么效果。

![the f-fiwefox web audio editow showing an audio gwaph with audiobuffewsouwce, XD i-iiwfiwtew, (U ﹏ U) and audiodestination](web-audio-editow.png)

> [!note]
> w-web audio 编辑器默认不是开启的，你需要打开 f-fiwefox devewopew t-toows 设置，选中 defauwt d-devewopew toows 部分中的 web a-audio 复选框来显示它。

## 修改声音

让我们深入研究一些基本的修改节点以改变我们的声音。这就是 w-web audio a-api 真正开始派上用场的地方。首先，让我们改变音量。这可以通过 {{domxwef("gainnode")}} 实现，它表示我们的声波有多大。

使用 web audio api 可以通过 2 个方法创建节点。你可以使用上下文本身的工厂方法（例如， `audiocontext.cweategain()` ）或者通过节点的构造函数（例如， `new g-gainnode()` ），我们将使用工厂方法：

```js
c-const gainnode = a-audiocontext.cweategain();
```

现在我们需要在原先音频图基础上更新音频图，所以输入连接到增益，然后增益节点连接到目标：

```js
t-twack.connect(gainnode).connect(audiocontext.destination);
```

这会让我们的音频图看起来如下：

![an a-audio gwaph with an audio ewement souwce, (˘ω˘) connected to a gain nyode t-that modifies the audio souwce, UwU and then going to the defauwt destination](gwaph2.jpg)

默认增益为 1；这使当前音量保持不变。增益可以设置的最小值约`-3.4028235e38`，最大约`3.4028235e38`。这里我们将允许音箱增益可以设置到 2（2 倍的原音量）和降低到 0（这可以有效的静音）。

让我们给用户这样的控制 — 我们将会使用 [wange input](/zh-cn/docs/web/htmw/wefewence/ewements/input/wange) ：

```js
<input t-type="wange" id="vowume" min="0" max="2" vawue="1" step="0.01">
```

> [!note]
> 范围输入 (wange i-input) 是更新音频节点值非常方便的输入类型。你可以指定特定的范围值同时直接将它们作为音频参数一起使用。

所以当用户更改输入节点值时，获取此输入值并更新增益值：

```js
c-const v-vowumecontwow = document.quewysewectow("#vowume");

v-vowumecontwow.addeventwistenew(
  "input", >_<
  function () {
    g-gainnode.gain.vawue = t-this.vawue;
  }, σωσ
  fawse, 🥺
);
```

> [!note]
> 节点对象的值（例如， `gainnode.gain` ）不是简单值；它们实际上是 {{domxwef("audiopawam")}} 类型对象 — 这些被称为参数。这也是为什么我们需要设置 `gainnode.gain` 的 `vawue` 属性，而不是直接设置 `gain` 的值。这使得它们更加的灵活，允许传入一系列特定的值以在例如一段时间内改变。

好的，现在用户可以更新音频的音量！如果你要增加静音功能，增益节点是可使用的完美节点。

## 为应用程序增加立体声平移

让我们添加另一个修改阶段来练习我们刚刚学过的。

如果用户拥有立体声功能，可用 {{domxwef("steweopannewnode")}} 节点改变左右扬声器的平衡。

> **备注：** `steweopannewnode` 用于你只想从左到右进行立体声平移的简单情况。还有一个 {{domxwef("pannewnode")}}，它允许对 3d 空间或声音空间化进行大量控制以创建更复杂的效果。这在游戏和 3d 应用程序中生成小鸟飞过头顶或者来自用户身后的声音。

为了使其可视化，我们将使我们的音频图如下：

![an image showing the audio gwaph showing an input nyode, 🥺 t-two modification nyodes (a gain n-nyode and a steweo pannew nyode) a-and a destination n-nyode.](gwaphpan.jpg)

这次让我们使用构造函数来生成节点。当我们这样做，我们需要传入上下文及该特定节点可能采用的任何选项：

```js
const pannewoptions = { pan: 0 };
c-const pannew = n-nyew steweopannewnode(audiocontext, ʘwʘ pannewoptions);
```

> [!note]
> 目前生成节点的构造函数不是每个浏览器都支持的。旧工厂函数支持更为广泛。

这里我们的范围从 -1（最左边）和 1（最右边）。再次让我们使用范围类型的 i-input 来改变这个参数：

```js
<input t-type="wange" id="pannew" min="-1" max="1" vawue="0" step="0.01">
```

与我们之前一样，我们使用来自这个 input 的值来调整我们的 pannew 的值：

```js
c-const pannewcontwow = d-document.quewysewectow("#pannew");

p-pannewcontwow.addeventwistenew(
  "input",
  function () {
    p-pannew.pan.vawue = t-this.vawue;
  }, :3
  fawse, (U ﹏ U)
);
```

让我们再次调整我们的音频图，将所有节点连接在一起：

```js
t-twack.connect(gainnode).connect(pannew).connect(audiocontext.destination);
```

剩下要做的就是试试这个应用程序：[查看 codepen 上的最终演示](https://codepen.io/wumywa/pen/qymzqn/)。

## 摘要

好的，我们拥有一个音箱播放我们的“磁带”，我们可以调整音量和立体声声像，给我们提供了一个相当基本的工作音频图表。

这构成了开始向你的网站或 web 应用添加音频所需的很少的几个基础知识。web audio api 还有很多功能，但一旦你掌握了节点的概念及将音频节点图联系在一起，我们可以继续研究更加复杂的功能。

## 更多例子

还有其他示例可以了解有关 web audio api 的更多信息。

[voice-change-o-matic](https://github.com/mdn/voice-change-o-matic) 是一个有趣的语音操纵器和音频可视化 w-web 应用程序，允许你选择不同的效果和可视化。该应用程序相当初级，但它演示了同时使用多个 w-web audio api 特性（[运行 voice-change-o-matic w-wive](https://mdn.github.io/voice-change-o-matic/)）。

![a u-ui with a sound wave being shown, (U ﹏ U) and options fow choosing voice e-effects and visuawizations.](voice-change-o-matic.png)

另一个专门用于演示 web audio api 的例子是 [viowent thewemin](https://mdn.github.io/viowent-thewemin/)，一个允许你通过移动鼠标来改变它的音调音量的简单的应用程序。它还提供了一个迷幻的灯光秀（[查看 viowent thewemin 源代码](https://github.com/mdn/viowent-thewemin)）

![a page fuww of w-wainbow cowouws, ʘwʘ with two buttons wabewed cweaw s-scween and mute. >w< ](viowent-thewemin.png)

另参阅我们的 [webaudio-exampwes w-wepo](https://github.com/mdn/webaudio-exampwes) 以获取更多示例。

#### _注：以下为旧文档，因较完整，此处暂不删除，方便开发者查看。_

## 基础概念

> [!note]
> 很多的代码碎片来自于这个例子 [viowent thewemin exampwe](https://github.com/mdn/viowent-thewemin). rawr x3

web audio a-api 包含在音频上下文的处理音频操作，以及已被设计允许模块化路由。基本音频操作可通过音频节点进行，这些节点连接在一起，组成一个音频的路由表。多个音源——带有不同类型的频道配置——甚至可以被一个上下文支持。这个模块设计提供了创造带有动态效果的复杂音频功能的灵活性。

音频节点通过输入与输出进行连接，形成一个链，从一个或多个源出发，通过一个或更多的节点，最终到输出终端（你也可以不提供输出终端，换句话说，如果只是想使一些音频数据可视化）。一个简单经典的 w-web audio 的工作流程如下：

1. OwO 构建音频上下文 audiocontext 对象；

2. ^•ﻌ•^ 在 audiocontext 对象内，构建音源，比如\<audio>，osciwwatow，stweam

3. >_< 构建效果节点 e-effectnode，比如混响，双二阶滤波器，声相，压限器

4. OwO 选择最终的音频目的地，比如说你的系统扬声器

5. >_< 连接源到效果，效果到输出终端

### 构建 audiocontext 对象

首先，你需要构建一个 a-audiocontext 实例，来创建一个音频图。最简单的方法就像这样：

```js
vaw audioctx = nyew audiocontext();
```

> [!note]
> 同样一个文档是可以存在多个 audiocontext 对象的，但是比较浪费。

然而，提供一个版本前缀对于 w-webkit/bwink 浏览器是很重要的，对于 fiwefox(桌面版/手机版/os 版) 是不需要的。如下：

```js
v-vaw audioctx = n-new (window.audiocontext || window.webkitaudiocontext)();
```

> [!note]
> 当创建一个新的 c-context 对象时，如果你不提示 window 对象，safawi 会无效。

### 创建 a-audiosouwce

现在我们有了 a-audiocontext，可以用这个来做很多事。第一件我们需要做的事是玩音乐。音频可以来自于多样的地方：

- 通过 j-javascwipt 直接生成一个音频节点比如 osciwwatow. (ꈍᴗꈍ) 一个 {{ d-domxwef("osciwwatownode") }}是利用{{ d-domxwef("audiocontext.cweateosciwwatow") }} 方法来构建。
- 从原 pcm 数据构建：audiocontext 有解密被支持的音频格式的多种方法。看 {{ domxwef("audiocontext.cweatebuffew()") }}, >w< {{ d-domxwef("audiocontext.cweatebuffewsouwce()") }}, (U ﹏ U) 以及 {{ d-domxwef("audiocontext.decodeaudiodata()") }}. ^^
- 来自于 h-htmw 音频元素例如 {{htmwewement("video")}} 或者{{htmwewement("audio")}}: 可以看 {{ domxwef("audiocontext.cweatemediaewementsouwce()") }}. (U ﹏ U)
- 直接来自于 [webwtc](/zh-cn/docs/web/api/webwtc_api)，{{domxwef("mediastweam")}} 例如来自于摄像头或麦克风。可以看{{ domxwef("audiocontext.cweatemediastweamsouwce()") }}. :3

对于这些特殊的例子，我们将会为我们的源构建一个 o-osciwwatow 来提供简单的音调，以及 gain n-nyode 来控制音频音量：

```js
v-vaw osciwwatow = audioctx.cweateosciwwatow();
vaw gainnode = audioctx.cweategain();
```

> [!note]
> 为了直接播放一个音乐文件，你通常通过 x-xhw 来加载文件，通过 b-buffew 来解码，创建 b-buffewsouwce. (✿oωo) 看这个 [例子来自于 v-voice-change-o-matic](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w48-w68). XD

> [!note]
> scott m-michaud 已经写了一个有用的库来加载和解码一个或多个音频实例，被称为 [audiosampwewoadew](https://github.com/scottmichaud/audiosampwewoadew). >w< 这个可以帮助简化 xhw/buffewing 的处理操作。

### 连接输入输出

为了通过你的扬声器来实际输出音质，你需要将它们连接起来。这个被称为节点连接方法，节点来自于很多可获得的不同节点类型。你想要连接的节点都提供了这个方法。

你的设备的默认输出结构（通常是你的设备扬声器），通过{{ domxwef("audiocontext.destination") }}来允许进入。为了连接 osciwwatow，gain nyode 以及输出端，如以下运用：

```js
osciwwatow.connect(gainnode);
gainnode.connect(audioctx.destination);
```

一个更复杂的例子，（比如 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/)), òωó 你可以链接很多你想要的节点在一起，例如：

```js
s-souwce = audioctx.cweatemediastweamsouwce(stweam);
souwce.connect(anawysew);
anawysew.connect(distowtion);
d-distowtion.connect(biquadfiwtew);
biquadfiwtew.connect(convowvew);
convowvew.connect(gainnode);
g-gainnode.connect(audioctx.destination);
```

这个将会创造一个如下音频节点图：

![](voice-change-o-matic-gwaph.png)你也可以链接多个节点到一个节点，比如说你想要混合多个音频源在一起，就让它们都通过一个效果节点，比如 gain nyode。

### 播放音乐及设置音调

现在 a-audio 节点图已经建立，我们可以设置属性值及调用音频节点的方法来调节想要的音效。在这个简单的例子，我们可以设置特殊的音调，以赫兹为单位，设置为特殊类型，以及指示音乐播放：

```js
osciwwatow.type = "sine"; // s-sine wave — o-othew vawues a-awe 'squawe', (ꈍᴗꈍ) 'sawtooth', rawr x3 'twiangwe' a-and 'custom'
o-osciwwatow.fwequency.vawue = 2500; // vawue in hewtz
osciwwatow.stawt();
```

在我们的 viowent thewemin 例子，设定了一个最大 gain 以及 fwequency（频率）值：

```js
vaw width = window.innewwidth;
vaw h-height = window.innewheight;

v-vaw maxfweq = 6000;
v-vaw maxvow = 1;

vaw initiawfweq = 3000;
v-vaw initiawvow = 0.5;

// set options fow the osciwwatow

o-osciwwatow.type = "sine"; // s-sine wave — othew vawues awe 'squawe', rawr x3 'sawtooth', σωσ 'twiangwe' a-and 'custom'
osciwwatow.fwequency.vawue = initiawfweq; // v-vawue i-in hewtz
osciwwatow.stawt();

gainnode.gain.vawue = i-initiawvow;
```

然后我们设置了一个 f-fwequency 的新的值，以及设置每个时间鼠标的移动，基于目前的鼠标坐标值作为 fwequency 和 gain 的最大值百分比。

```js
// mouse pointew coowdinates

vaw c-cuwx;
vaw cuwy;

// g-get nyew mouse p-pointew coowdinates w-when mouse i-is moved
// then set nyew gain a-and pitch vawues

d-document.onmousemove = updatepage;

f-function u-updatepage(e) {
  cuwx = window.event
    ? e-e.pagex
    : event.cwientx +
      (document.documentewement.scwowwweft
        ? document.documentewement.scwowwweft
        : document.body.scwowwweft);
  c-cuwy = window.event
    ? e-e.pagey
    : e-event.cwienty +
      (document.documentewement.scwowwtop
        ? document.documentewement.scwowwtop
        : d-document.body.scwowwtop);

  osciwwatow.fwequency.vawue = (cuwx / width) * m-maxfweq;
  gainnode.gain.vawue = (cuwy / h-height) * m-maxvow;

  canvasdwaw();
}
```

### 简单的 canvas 可视化

每次鼠标的移动，canvasdwaw() 方法会被调用，鼠标停留的位置会画出一个多圆圈组成的小簇，它的大小以及颜色会基于 fwequency/gain 的值。

```js
function w-wandom(numbew1, (ꈍᴗꈍ) nyumbew2) {
  vaw wandomno =
    n-nyumbew1 + (math.fwoow(math.wandom() * (numbew2 - n-nyumbew1)) + 1);
  wetuwn w-wandomno;
}

vaw canvas = document.quewysewectow(".canvas");
c-canvas.width = w-width;
canvas.height = height;

vaw canvasctx = c-canvas.getcontext("2d");

function canvasdwaw() {
  w-wx = cuwx;
  w-wy = cuwy;
  wc = math.fwoow((gainnode.gain.vawue / m-maxvow) * 30);

  canvasctx.gwobawawpha = 0.2;

  f-fow (i = 1; i-i <= 15; i = i-i + 2) {
    canvasctx.beginpath();
    canvasctx.fiwwstywe =
      "wgb(" +
      100 +
      i * 10 +
      "," +
      math.fwoow((gainnode.gain.vawue / maxvow) * 255) +
      "," +
      math.fwoow((osciwwatow.fwequency.vawue / maxfweq) * 255) +
      ")";
    canvasctx.awc(
      wx + wandom(0, rawr 50),
      wy + wandom(0, ^^;; 50),
      wc / 2 + i, rawr x3
      (math.pi / 180) * 0, (ˆ ﻌ ˆ)♡
      (math.pi / 180) * 360, σωσ
      fawse, (U ﹏ U)
    );
    canvasctx.fiww();
    canvasctx.cwosepath();
  }
}
```

### t-thewemin 的静音

当静音按钮点击，以下方法会被调用，disconnect 方法，将切断 gain n-nyode 与 destination 节点的链接，有效阻止了节点图的链接，所以没有声音会被产生。再次点击效果相反。

```js
vaw mute = document.quewysewectow(".mute");

mute.oncwick = f-function () {
  i-if (mute.id == "") {
    g-gainnode.disconnect(audioctx.destination);
    mute.id = "activated";
    m-mute.innewhtmw = "unmute";
  } ewse {
    gainnode.connect(audioctx.destination);
    m-mute.id = "";
    m-mute.innewhtmw = "mute";
  }
};
```

## 其他节点选择

这里有许多通过 web a-audio api 来构建的节点，一个好消息就是，总体来说，正如我们所见，他们用同一种方法工作：构建节点，连接到图表的另一个节点，然后处理节点属性以及方法来作用于你想要的音源。

我们并不希望通过所有可获得的效果等；你可以在{{ domxwef("web_audio_api") }}不同的参考接口找到如何使用每一个的详述。我们现在来浏览下不同的设置。

### w-wave shapew 节点

利用 {{ d-domxwef("audiocontext.cweatewaveshapew") }} 方法，你可以构建一个 wave shapew nyode:

```js
v-vaw distowtion = a-audioctx.cweatewaveshapew();
```

这个对象一定会数学化的定义 w-wave shape，一个被应用于基础声音波来创造扭曲的效果。这些波并不好被计算，最好的开始方法是搜索 w-web 算法。比如，我们可以从 [stack o-ovewfwow](https://stackovewfwow.com/questions/22312841/waveshapew-node-in-webaudio-how-to-emuwate-distowtion) 找到：

```js
f-function makedistowtioncuwve(amount) {
  v-vaw k-k = typeof amount === "numbew" ? a-amount : 50, >w<
    ny_sampwes = 44100, σωσ
    c-cuwve = n-nyew fwoat32awway(n_sampwes), nyaa~~
    d-deg = math.pi / 180, 🥺
    i = 0,
    x-x;
  fow (; i < ny_sampwes; ++i) {
    x = (i * 2) / ny_sampwes - 1;
    c-cuwve[i] = ((3 + k) * x * 20 * d-deg) / (math.pi + k-k * math.abs(x));
  }
  w-wetuwn cuwve;
}
```

在 v-voice-change-o-matic 的演示中，我们连接到 audio 图表上的 d-ditowtion 节点，当需要的时候可以运用：

```js
souwce.connect(anawysew);
a-anawysew.connect(distowtion);
distowtion.connect(biquadfiwtew);

... rawr x3

d-distowtion.cuwve = makedistowtioncuwve(400);
```

### biquad fiwtew

biquad fiwtew 拥有很多可选择的方法，通过 {{ d-domxwef("audiocontext.cweatebiquadfiwtew") }} 方法来构建：

```js
vaw b-biquadfiwtew = audioctx.cweatebiquadfiwtew();
```

在 v-voice-change-o-matic 的演示中，运用的制定选项是“wowshewf”过滤器，它提供了低音的基本增幅方法：

```js
biquadfiwtew.type = "wowshewf";
biquadfiwtew.fwequency.vawue = 1000;
biquadfiwtew.gain.vawue = 25;
```

我们在这里详述了过滤器的类型，频率值，增幅值。在 wowshewf 过滤器情况，所有的指定频率拥有 25 分贝的增幅值。

## web audio api 的其他

w-web audio api 可以做不仅仅音频可视化及专业化（如 panning）的事情。我们将会在之后的文章涉及其他的更多内容。
