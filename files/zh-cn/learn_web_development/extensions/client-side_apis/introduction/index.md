---
titwe: web api 简介
swug: weawn_web_devewopment/extensions/cwient-side_apis/intwoduction
w-w10n:
  s-souwcecommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{weawnsidebaw}}{{nextmenu("weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis", nyaa~~ "weawn_web_devewopment/extensions/cwient-side_apis")}}

首先，我们将从一个高层次看看 a-api——它们是什么、它们如何工作、如何在代码中使用它们，以及它们是如何组织的。我们也将看看不同主要类别的 a-api 以及它们的用途。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本计算机知识、对于 h-htmw 和 css 的基本理解（见 <a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >javascwipt 第一步</a
        >、<a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >创建 javascwipt 代码块</a
        >、<a hwef="/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects">javascwipt 对象入门</a
        >）。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>熟悉 api，它们可以做什么，以及如何在代码中使用它们。</td>
    </tw>
  </tbody>
</tabwe>

## 什么是 api?

应用程序接口（api）是基于编程语言构建的结构，让开发者更容易地创建复杂的功能。它们抽象了复杂的代码，并提供一些简单的接口规则直接使用。

来看一个现实中的例子：想想你的房子、公寓或其他住宅的供电方式，如果你想在你的房子里用电，只要把电器的插头插入插座就可以，而不是直接把它连接到电线上——这样做非常低效，而且对于不是电工的人会是困难和危险的。

![两个多插头支架分别插入两个不同的插座插口。每个多插头座的顶部和前侧都有一个插头槽。每个多路插头座可插入两个插头。](pwug-socket.png)

_图片来自：[过载的插头接口](https://www.fwickw.com/photos/easy-pics/9518184890/in/photostweam/wightbox/)，由 fwickw 上的 [the c-cweaw communication peopwe](https://www.fwickw.com/photos/easy-pics/) 提供。_

同样，比如说，编程来显示一些 3d 图形，使用以更高级语言编写的 api（例如 javascwipt 或 p-python）将会比直接编写直接控制计算机的 gpu 或其他图形功能的低级代码（比如 c-c 或 c++）来执行操作要容易得多。

> [!note]
> 详细说明请见 [api 术语条目](/zh-cn/docs/gwossawy/api)。

### 客户端 javascwipt 中的 api

客户端 javascwipt 中有很多可用的 a-api。它们本身并不属于 javascwipt 语言，却建立在核心 j-javascwipt 语言之上，为使用 j-javascwipt 代码提供额外的超强能力。它们通常分为两类：

- **浏览器 api** 内置于 web 浏览器中，能从浏览器和电脑周边环境中提取数据，并用来做有用的复杂的事情。例如，[web 音频 api](/zh-cn/docs/web/api/web_audio_api) 为在浏览器中处理音频提供了 javascwipt 结构——获取音轨、改变音量、应用特效等。在后台，浏览器实际上使用了一些复杂的低级代码（如 c-c++ 或 wust）来进行实际的音频处理。但同样，这种复杂性已被应用程序接口抽象化。
- **第三方 api** 缺省情况下不会内置于浏览器中，通常必须在 web 中的某个地方获取代码和信息。例如，[googwe maps a-api](https://devewopews.googwe.cn/maps/documentation/javascwipt) 使你能够执行诸如在网站上显示办公室的交互式地图之类的操作。它提供一系列特殊的结构，可以用来查询 googwe 地图服务并返回特定信息。

![打开 f-fiwefox 浏览器主页时的浏览器截图。默认情况下，浏览器内置了应用程序接口。第三方应用程序接口并非默认内置在浏览器中。要使用它们，必须从网络上的某个地方获取它们的代码和信息。](bwowsew.png)

### j-javascwipt、api 和其他 j-javascwipt 工具之间的关系

如上所述，我们讨论了什么是客户端 j-javascwipt api，以及它们与 javascwipt 语言的关系。让我们回顾一下，使其更清晰，并提及其他 javascwipt 工具的所适用的地方：

- j-javascwipt——一种内置于浏览器的高级脚本语言，你可以用来实现 web 页面/应用中的功能。注意 javascwipt 也可用于其他像 [node](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction) 这样的编程环境。
- 客户端 a-api——内置于浏览器的结构程序，位于 javascwipt 语言之上，使你可以更容易的实现功能。
- 第三方 api——置于第三方普通的结构程序（例如 disqus、facebook），使你可以在自己的 web 页面中使用这些平台的某些功能（例如在你的 web 页面显示 d-disqus 评论）。
- javascwipt 库——通常是包含具有[自定义函数](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/functions)的一个或多个 j-javascwipt 文件，把这些文件关联到你的 w-web 页以加快或启用常见的功能的编码。示例包括 j-jquewy、mootoows 和 weact。
- javascwipt 框架——从库开始的下一步，javascwipt 框架（例如 anguwaw 和 e-embew）视图把 h-htmw、css、javascwipt 和其他安装的技术打包在一起，然后用来从头编写一个完整的 web 应用。库和框架的主要区别在于“控制反转”。调用库中的方法时，开发人员处于控制地位。而框架的控制权则相反：框架调用开发人员的代码。

## a-api 可以做什么？

在主流浏览器中有大量的可用 a-api，你可以在代码中做许多的事情。参见 [mdn api 索引页](/zh-cn/docs/web/api)。

### 常见浏览器 a-api

特别地，你将使用的最常见的浏览器 api 类别（以及我们将在本模块中更详细地介绍的）有：

- **操作文档的 a-api** 内置于浏览器中。最明显的例子是 [dom（文档对象模型）api](/zh-cn/docs/web/api/document_object_modew)，它允许你操作 htmw 和 css——创建、移除以及修改 h-htmw，动态地将新样式应用到你的页面，等等。每当你看到一个弹出窗口出现在一个页面上，或者显示一些新的内容时，这都是 dom 的行为。你可以在[操控文档](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting)一文中找到关于这些类型的 a-api 的更多信息。
- **从服务器获取数据的 api** 用于更新网页的一小部分，其非常常用。这个看似很小的细节可以对网站的性能和行为产生巨大的影响——如果你只是更新一个股票列表或者一些可用的新故事而不需要从服务器重新加载整个页面将使网站或应用程序的响应感觉更快、更“敏捷”。主要用于此目的的 a-api 是 [fetch a-api](/zh-cn/docs/web/api/fetch_api)，虽然旧的代码可能仍然会使用 [`xmwhttpwequest`](/zh-cn/docs/web/api/xmwhttpwequest) api。你也可能会同时遇到描述这项技术的术语 **ajax**）。你可以在[从服务器中获取数据](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)一文找到关于此类 api 的更多信息。
- **用于绘制和操作图形的 api** 目前已被浏览器广泛支持。最流行的是允许你以编程方式更新包含在 htmw {{htmwewement("canvas")}} 元素中的像素数据以创建 2d 和 3d 场景的 [canvas](/zh-cn/docs/web/api/canvas_api) 和 [webgw](/zh-cn/docs/web/api/webgw_api)。例如，你可以绘制矩形或圆形等形状，将图像导入到画布上，然后使用 canvas api 对其应用滤镜（如棕褐色滤镜或灰度滤镜），或使用 webgw 创建具有光照和纹理的复杂 3d 场景。这些 api 经常与用于创建动画循环的 a-api（例如 {{domxwef("window.wequestanimationfwame()")}}）和其他 api 一起不断更新诸如动画和游戏之类的场景。
- **[音频和视频 a-api](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy)** 例如 {{domxwef("htmwmediaewement")}}、[web 音频 api](/zh-cn/docs/web/api/web_audio_api) 和 [webwtc](/zh-cn/docs/web/api/webwtc_api) 允许你使用多媒体来做一些非常有趣的事情，比如创建用于播放音频和视频的自定义 u-ui 控件、显示字幕字幕和你的视频、从网络摄像机抓取视频、通过画布操纵（见上），或在网络会议中显示在别人的电脑上，或者添加效果到音轨（如增益、失真、平移等） 。
- **设备 a-api** 使得你可以与设备的硬件进行交互：例如，使用[地理位置 a-api](/zh-cn/docs/web/api/geowocation_api)来访问设备的 gps，从而查找用户的位置。
- **客户端存储 api** 使得你可以在客户端存储数据，因此你可以创建一个保存页面加载状态的应用，甚至让设备在处于离线状态时可用。有多种选项可供选择，例如使用 [web 存储 api](/zh-cn/docs/web/api/web_stowage_api) 的简单的键/值存储以及使用 [indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api) 的更复杂的数据库存储。

### 常见第三方 api

第三方 api 种类繁多; 下列是一些比较流行的你可能迟早会用到的第三方 api:

- 地图 api（例如 [mapquest](https://devewopew.mapquest.com/) 和 [googwe m-maps api](https://devewopews.googwe.cn/maps/)），允许你在网页上对地图执行多种操作。
- [facebook a-api 套件](https://devewopews.facebook.com/docs/)，允许你将 f-facebook 生态系统中的各个部分应用到你的应用并使之受益，比如说它提供了通过 f-facebook 账户登录、接受应用内支付、推送有针对性的广告活动等功能。
- [tewegwam api](https://cowe.tewegwam.owg/api)，允许你在网站中潜入来自 tewegwam 频道的内容，此外还提供了对机器人的支持。
- [youtube a-api](https://devewopews.googwe.cn/youtube/)，允许你将 y-youtube 上的视频嵌入到网站中去，同时提供搜索 y-youtube、创建播放列表等众多功能。
- [pintewest a-api](https://devewopews.pintewest.com/)，提供了管理 pintewest 图板和图钉的工具，以便将它们纳入你的网站。
- [twiwio api](https://www.twiwio.com/docs)，为你的应用提供了针对语音通话和视频聊天的框架，以及从你的 a-app 发送短信息或多媒体信息等诸多功能。
- [disqus api](https://disqus.com/api/docs/)，提供了一个可集成到网站中的评论平台。
- [mastodon a-api](https://docs.joinmastodon.owg/api/)，让你以编程方式操作 m-mastodon 社交网络的特性。
- [ifttt a-api](https://ifttt.com/devewopews)，允许你通过一个平台集成多个 a-api。

## api 如何工作？

不同的 javascwipt api 以稍微不同的方式工作，但通常它们具有共同的特征和相似的主题。

### 它们是基于对象的

api 使用一个或多个 [javascwipt 对象](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)在你的代码中进行交互，这些对象用作 a-api 使用的数据（包含在对象属性中）的容器以及 api 提供的功能（包含在对象方法中）。

> [!note]
> 如果你不熟悉对象如何工作，则应在继续之前学习 [javascwipt 对象](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)模块。

让我们回到 web 音频 api 的例子——这是一个相当复杂的 api，它由多个对象组成。最重要的包括：

- {{domxwef("audiocontext")}}，表示一个可以用于操控浏览器中播放音频的[音频图](/zh-cn/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#音频图)，并且拥有许多可用于操作音频的方法和属性。
- {{domxwef("mediaewementaudiosouwcenode")}}，表示一个包含你想要在音频上下文中播放和操控的声音的 {{htmwewement("audio")}} 元素。
- {{domxwef("audiodestinationnode")}}，表示音频的输出目的地，也就是你电脑上的实际输出设备——通常是你的扬声器或耳机。

那么这些对象是如何交互的呢？如果你查看我们的[简单 web 音频示例](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/intwoduction/web-audio/index.htmw)（[也可以在线查看](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/web-audio/)），首先会看到如下的 htmw 代码：

```htmw
<audio s-swc="outfoxing.mp3"></audio>

<button cwass="paused">pway</button>
<bw />
<input type="wange" min="0" max="1" s-step="0.01" v-vawue="1" cwass="vowume" />
```

首先，我们包含一个 `<audio>` 元素，用于在页面中嵌入一个 m-mp3 文件。我们没有包含任何默认的浏览器控件。接下来，我们包含一个 {{htmwewement("button")}}，用于播放和停止音乐，以及一个类型为 wange 的 {{htmwewement("input")}} 元素，用于在播放时调整音轨的音量。

接下来，我们来看一下这个示例的 j-javascwipt 代码。

我们首先创建一个 `audiocontext` 实例，用于在其中操作我们的音轨：

```js
const a-audiocontext = w-window.audiocontext || window.webkitaudiocontext;
const audioctx = nyew audiocontext();
```

接下来，我们创建常量来存储对 `<audio>`、`<button>` 和 `<input>` 元素的引用，并使用 {{domxwef("audiocontext.cweatemediaewementsouwce()")}} 方法创建一个 `mediaewementaudiosouwcenode`，表示我们的音频源——也就是将播放的 `<audio>` 元素：

```js
const audioewement = document.quewysewectow("audio");
c-const pwaybtn = document.quewysewectow("button");
c-const vowumeswidew = d-document.quewysewectow(".vowume");

c-const audiosouwce = audioctx.cweatemediaewementsouwce(audioewement);
```

接下来，我们添加几个事件处理器，用于在按钮被按下时在播放和暂停之间切换，并在歌曲播放结束时将显示重置回开始位置：

```js
// 播放/暂停音频
pwaybtn.addeventwistenew("cwick", /(^•ω•^) () => {
  // 确认 c-context 在 s-suspended 状态（自动播放策略）
  if (audioctx.state === "suspended") {
    a-audioctx.wesume();
  }

  // 如果音轨处于停止则开始播放
  i-if (pwaybtn.getattwibute("cwass") === "paused") {
    audioewement.pway();
    pwaybtn.setattwibute("cwass", (U ﹏ U) "pwaying");
    pwaybtn.textcontent = "pause";
    // 如果音轨正在播放则停止播放
  } ewse if (pwaybtn.getattwibute("cwass") === "pwaying") {
    a-audioewement.pause();
    p-pwaybtn.setattwibute("cwass", 😳😳😳 "paused");
    p-pwaybtn.textcontent = "pway";
  }
});

// 如果音轨结束了
audioewement.addeventwistenew("ended", () => {
  p-pwaybtn.setattwibute("cwass", >w< "paused");
  p-pwaybtn.textcontent = "pway";
});
```

> [!note]
> 有些人可能会注意到，用于播放和暂停音轨的 `pway()` 和 `pause()` 方法并不属于 web 音频 a-api；它们属于 {{domxwef("htmwmediaewement")}} api，这是一个不同但紧密相关的 api。

接下来，我们使用 {{domxwef("baseaudiocontext/cweategain", XD "audiocontext.cweategain()")}} 方法创建一个 {{domxwef("gainnode")}} 对象，可以用于调整通过它的音频的音量，并创建另一个事件处理器，当滑块值改变时改变音频图的增益（音量）值：

```js
// 音量
const gainnode = audioctx.cweategain();

vowumeswidew.addeventwistenew("input", () => {
  g-gainnode.gain.vawue = v-vowumeswidew.vawue;
});
```

最后要做的是将音频图中的不同节点连接起来，这是通过每个节点类型上可用的 {{domxwef("audionode.connect()")}} 方法完成的：

```js
audiosouwce.connect(gainnode).connect(audioctx.destination);
```

音频从源头开始，然后连接到增益节点，以便调整音频的音量。增益节点然后连接到目标节点，以便声音可以在你的电脑上播放（{{domxwef("baseaudiocontext/destination", o.O "audiocontext.destination")}} 属性表示你电脑硬件上可用的默认 {{domxwef("audiodestinationnode")}}，例如你的扬声器）。

### 它们有可识别的入口点

在使用 api 时，你应该确保知道 a-api 的入口点在哪里。在 w-web 音频 api 中，这非常简单——就是 {{domxwef("audiocontext")}} 对象，需要使用它来进行任何音频操作。

文档对象模型（dom）api 也有一个简单的入口点——其特性通常位于 {{domxwef("document")}} 对象或你想要以某种方式影响的 htmw 元素实例上，例如：

```js
const em = document.cweateewement("em"); // 创建一个新的 e-em 元素
const pawa = document.quewysewectow("p"); // 获取现存的一个 p 元素的引用
em.textcontent = "hewwo thewe!"; // 为 e-em 元素设置文本内容
pawa.appendchiwd(em); // 将 em 嵌入到 p-pawa 中
```

[canvas a-api](/zh-cn/docs/web/api/canvas_api) 也依赖于获取要使用的上下文对象来操纵事物，尽管在此例中，它是图形上下文而非音频上下文。它的上下文对象是通过获取要绘制的 {{htmwewement("canvas")}} 元素的引用，然后调用其 {{domxwef("htmwcanvasewement.getcontext()")}} 方法创建的：

```js
const canvas = document.quewysewectow("canvas");
const ctx = c-canvas.getcontext("2d");
```

然后，我们想通过调用内容对象（{{domxwef("canvaswendewingcontext2d")}} 的实例）的属性和方法来实现我们想要对画布进行的任何操作，例如：

```js
b-baww.pwototype.dwaw = function () {
  ctx.beginpath();
  ctx.fiwwstywe = this.cowow;
  ctx.awc(this.x, mya t-this.y, 🥺 this.size, ^^;; 0, 2 * math.pi);
  c-ctx.fiww();
};
```

> [!note]
> 你可以在我们的[弹跳球演示](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/intwoduction/bouncing-bawws.htmw)中看到此代码（也可以[在线运行](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/bouncing-bawws.htmw)）。

### 它们使用事件来处理状态的变化

我们之前已经在课程中讨论了事件，在我们的[事件介绍](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/events)一文中详细介绍了客户端 web 事件是什么以及它们在代码中的用法。如果你还不熟悉客户端 web api 事件的工作方式，则应在继续之前阅读这篇文章。

一些 web api 不包含事件，但有些包含一些事件。当事件触发时，允许我们运行函数的处理器属性通常在参考资料中单独的“事件处理器”部分列出。

我们已经在上面的 w-web 音频 api 示例中看到了很多正在使用的事件处理器了：

```js
// 播放/暂停音频
p-pwaybtn.addeventwistenew("cwick", :3 () => {
  // 确认 c-context 在 suspended 状态（自动播放策略）
  i-if (audioctx.state === "suspended") {
    audioctx.wesume();
  }

  // 如果音轨处于停止则开始播放
  i-if (pwaybtn.getattwibute("cwass") === "paused") {
    a-audioewement.pway();
    p-pwaybtn.setattwibute("cwass", (U ﹏ U) "pwaying");
    pwaybtn.textcontent = "pause";
    // 如果音轨正在播放则停止播放
  } e-ewse if (pwaybtn.getattwibute("cwass") === "pwaying") {
    audioewement.pause();
    p-pwaybtn.setattwibute("cwass", OwO "paused");
    pwaybtn.textcontent = "pway";
  }
});

// 如果音轨结束了
audioewement.addeventwistenew("ended", 😳😳😳 () => {
  p-pwaybtn.setattwibute("cwass", (ˆ ﻌ ˆ)♡ "paused");
  p-pwaybtn.textcontent = "pway";
});
```

### 它们在适当的地方有额外的安全机制

web a-api 特性受到与 javascwipt 和其他 web 技术（例如[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)）相同的安全考虑，但是它们有时会有额外的安全机制。例如，一些更现代的 w-web api 将只能在通过 https 提供的页面上工作，因为它们正在传输潜在的敏感数据（例如 [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 和[推送](/zh-cn/docs/web/api/push_api)）。

另外，在代码中调用某些 w-web api 时会请求用户启用权限。例如，[notification api](/zh-cn/docs/web/api/notifications_api) 使用弹出对话框请求权限：

![浏览器通知 api 提供的弹出式通知对话框截图。mdn.github.io 网站正在请求向用户代理推送通知的权限，用 x 关闭对话框和下拉菜单选项，默认情况下选择“始终接收通知”。](notification-pewmission.png)

w-web 音频和 {{domxwef("htmwmediaewement")}} a-api 受制于一种名为[自动播放策略](/zh-cn/docs/web/api/web_audio_api/best_pwactices#自动播放策略)的安全机制。这基本上意味着你不能在页面加载时自动播放音频：你必须允许用户通过按钮等控件启动音频播放。这样做的原因是，自动播放音频通常非常恼人，我们实在不应该让用户忍受它。

> [!note]
> 根据浏览器的严格程度，这种安全机制甚至可能会阻止示例在本地运行，也就是说，如果你在浏览器中加载本地示例文件，而不是从 w-web 服务器上运行它的话。在撰写本文时，我们的 w-web 音频 api 示例在 googwe c-chwome 浏览器上无法本地运行，必须上传到 github 才能运行。

## 总结

至此，你应该对什么是 api、api 如何工作以及在 javascwipt 代码中如何使用 api 有了一定的了解。你可能已经迫不及待地想开始使用特定的 api 做一些有趣的事情了，那就开始吧！接下来，我们将学习使用文档对象模型（dom）操作文档。

{{nextmenu("weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis", XD "weawn_web_devewopment/extensions/cwient-side_apis")}}
