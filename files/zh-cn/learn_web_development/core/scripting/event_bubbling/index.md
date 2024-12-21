---
title: 事件冒泡
slug: Learn_web_development/Core/Scripting/Event_bubbling
original_slug: Learn/JavaScript/Building_blocks/Event_bubbling
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

## 事件冒泡

事件冒泡描述了浏览器如何处理针对嵌套元素的事件。

### 在父元素上设置监听器

考虑像这样的网页：

```html
<div id="container">
  <button>点我！</button>
</div>
<pre id="output"></pre>
```

这里有一个在其他元素（{{HTMLElement("div")}}）内部的按钮，可以说这里的 `<div>` 元素是其中包含元素的**父元素**。当我们在父元素附加单击事件处理器，并点击按钮时，会发生什么？

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `你在 ${e.currentTarget.tagName} 元素上进行了点击\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('在父元素上设置监听器', '100%', 200, "", "") }}

你会发现在用户单击按钮时，父元素上触发了单击事件：

```plain
你在 DIV 元素上进行了点击
```

这是有道理的：按钮在 `<div>` 里面，所以当你点击按钮的时候，你也隐含地点击了它所在的元素。

### 冒泡示例

如果在按钮*及*其父元素上同时添加事件处理器，会发生什么？

```html
<body>
  <div id="container">
    <button>点我！</button>
  </div>
  <pre id="output"></pre>
</body>
```

让我们试着给按钮、它的父元素（`<div>`）以及包含它们的 {{HTMLElement("body")}} 元素添加点击事件处理器：

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `你在 ${e.currentTarget.tagName} 元素上进行了点击\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('冒泡', '100%', 200, "", "") }}

你会发现在用户单击按钮时，所有三个元素都触发了单击事件：

```plain
你在 BUTTON 元素上进行了点击
你在 DIV 元素上进行了点击
你在 BODY 元素上进行了点击
```

在这种情况下：

- 最先触发按钮上的单击事件
- 然后是按钮的父元素（`<div>` 元素）
- 然后是 `<div>` 的父元素（`<body>` 元素）

我们可以这样描述：事件从被点击的最里面的元素**冒泡**而出。

这种行为可能是有用的，也可能引起意想不到的问题。在接下来的章节中，我们将看到它引起的一个问题，并找到解决方案。

### 视频播放器示例

在这个示例中，我们的页面包含一个视频，最初它为隐藏状态；还有一个标记为“显示视频”的按钮。我们希望有如下交互：

- 当用户单击“显示视频”按钮时，显示包含视频的盒子，但不要开始播放视频。
- 当用户在视频上单击时，开始播放视频。
- 当用户单击盒子内视频以外的任何区域时，隐藏盒子。

HTML 代码看起来像这样：

```html
<button>显示视频</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      你的浏览器不支持 HTML 视频，这里有视频的<a href="rabbit320.mp4"
        >替代链接</a
      >。
    </p>
  </video>
</div>
```

它包含：

- 一个 `<button>` 元素
- 一个 `<div>` 元素，最初其包含 `class="hidden"` 属性
- 一个嵌套在 `<div>` 元素中的 `<video>` 元素

我们使用 CSS 来隐藏具有 `"hidden"` 类的元素。

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

JavaScript 代码看起来像这样：

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => video.play());
box.addEventListener("click", () => box.classList.add("hidden"));
```

它添加了三个 `'click'` 事件处理器：

- 一个在 `<button>` 上，它显示了包含 `<video>` 的 `<div>`
- 一个在 `<video>` 上，用于开始播放视频
- 一个在 `<div>` 上，用于隐藏视频

让我们看看这个如何工作：

{{ EmbedLiveSample('视频播放器示例', '100%', 500) }}

你应该看到，当你点击按钮时，盒子和它所包含的视频都显示出来。但当你点击视频时，视频开始播放，但盒子又被隐藏起来了！

视频在 `<div>` 内（是它的一部分），所以点击视频会*同时*运行两个事件处理器，导致这种行为。

### 使用 stopPropagation() 修复问题

正如我们在上一节所看到的，事件冒泡有时会产生问题，但有一种方法可以防止这些问题。[`Event`](/zh-CN/docs/Web/API/Event) 对象有一个可用的函数，叫做 [`stopPropagation()`](/zh-CN/docs/Web/API/Event/stopPropagation)，当在一个事件处理器中调用时，可以防止事件向任何其他元素传递。

我们可以通过修改 JavaScript 代码来修复当前的问题：

```js
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));
```

我们在这里所做的是在 `<video>` 元素的 `'click'` 事件的处理器中对事件对象调用 `stopPropagation()`。这将阻止该事件向盒子内传递。现在试着点击按钮，然后再点击视频：

{{EmbedLiveSample("使用 stopPropagation() 修复问题", '100%', 500)}}

```html hidden
<button>显示视频</button>

<div class="hidden">
  <video>
    <source
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
      type="video/webm" />
    <p>
      你的浏览器不支持 HTML 视频，这里有视频的<a href="rabbit320.mp4"
        >替代链接</a
      >。
    </p>
  </video>
</div>
```

```css hidden
div {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

.hidden {
  display: none;
}

div video {
  padding: 40px;
  display: block;
  width: 400px;
  margin: 40px auto;
}
```

### 事件捕获

事件传播的另一种形式是*事件捕获*。这就像事件冒泡，但顺序是相反的：事件不是先在最内层的目标元素上发生，然后在连续较少的嵌套元素上发生，而是先在*最小嵌套*元素上发生，然后在连续更多的嵌套元素上发生，直到达到目标。

事件捕获默认是禁用的，你需要在 `addEventListener()` 的 `capture` 选项中启用它。

以下示例类似于之前看到的[冒泡示例](#冒泡示例)，除了使用了 `capture` 选项以外：

```html
<body>
  <div id="container">
    <button>点我！</button>
  </div>
  <pre id="output"></pre>
</body>
```

```js
const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `你在 ${e.currentTarget.tagName} 元素上进行了点击\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);
```

{{ EmbedLiveSample('事件捕获', '100%', 200, "", "") }}

在这种情况下，消息出现的顺序发生了颠倒：`<body>` 事件处理器首先触发，然后是 `<div>` 的，最后是 `<button>` 的：

```plain
你在 BODY 元素上进行了点击
你在 DIV 元素上进行了点击
你在 BUTTON 元素上进行了点击
```

为什么要同时使用捕获和冒泡功能？在过去的坏日子里，当浏览器的交叉兼容性远不如现在时，Netscape 只使用事件捕捉，而 Internet Explorer 只使用事件冒泡。当 W3C 决定尝试将行为标准化并达成共识时，他们最终确定了这个包括这两种行为的系统，这也是现代浏览器所实现的。

默认情况下，几乎所有的事件处理程序都是在冒泡阶段注册的，这在大多数情况下更有意义。

## 事件委托

在上一节中，我们看了一个由事件冒泡引起的问题以及如何解决它。不过，事件冒泡并不只是令人讨厌：它可以非常有用。特别是，它可以实现**事件委托**。在这种做法中，当我们想在用户与大量的子元素中的任何一个互动时运行一些代码时，我们在它们的父元素上设置事件监听器，让发生在它们身上的事件冒泡到它们的父元素上，而不必在每个子元素上单独设置事件监听器。

让我们回到第一个例子，当用户点击一个按钮时，我们设置整个页面的背景颜色。假设取而代之的是，页面被分为 16 个区域，我们想在用户点击每个区域时将其设置为随机颜色。

这里是 HTML 代码：

```html
<div id="container">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>
```

我们有一些 CSS 代码，来设置每一个区域的尺寸和位置：

```css
.tile {
  height: 100px;
  width: 25%;
  float: left;
}
```

在 JavaScript 代码中，我们向每一个区域中添加单击事件处理器。但是，一个更简单、更有效的选择是在父节点上设置点击事件处理器，并依靠事件冒泡来确保用户点击每个区域时处理程序被执行：

```js
function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
```

示例输出如下（试着随便点击）：

{{ EmbedLiveSample('事件委托', '100%', 430, "", "") }}

> [!NOTE]
> 在这个例子中，我们使用 `event.target` 来获取事件的目标元素（也就是最里面的元素）。如果我们想访问处理这个事件的元素（在这个例子中是容器），我们可以使用 `event.currentTarget`。

> [!NOTE]
> 完整的源代码见 [useful-eventtarget.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/events/useful-eventtarget.html)；也可以在这里[在线运行它](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html)。

## 技能测试！

你已经到了本文的结尾，但你能记住最重要的信息吗？在你继续前进之前，要验证你是否记住了这些信息，请前往[技能测试：事件](/zh-CN/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Events)页面进行测试。

## 结论

现在你应该知道在这个早期阶段需要了解的所有 web 事件。如上所述，事件并不是 JavaScript 的核心部分——它们是在浏览器 Web API 中定义的。

另外，理解 JavaScript 在不同环境下使用不同的事件模型很重要——从 Web API 到其他领域，如浏览器 WebExtensions 和 Node.js（服务器端 JavaScript）。我们并不期望现在了解所有这些领域，但是当你在学习 web 开发的过程中，理解这些事件的基础是很有帮助的。

> [!NOTE]
> 如果你遇到了问题，可以向我们其中的一个[交流渠道](/zh-CN/docs/MDN/Community/Communication_channels)寻求帮助。

## 参见

- [domevents.dev](https://domevents.dev/)——一个非常有用的交互式游乐场应用程序，能够通过探索来学习 DOM 事件系统的行为。
- [事件参考](/zh-CN/docs/Web/Events)
- [事件顺序](https://www.quirksmode.org/js/events_order.html)（探讨了捕获和冒泡）——由 Peter-Paul Koch 撰写的非常详尽的文章。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Events","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}
