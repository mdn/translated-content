---
title: 什么是 JavaScript？
slug: Learn_web_development/Core/Scripting/What_is_JavaScript
---

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}

欢迎来到 MDN 的 JavaScript 初学者课程！本节将在一定高度俯瞰 JavaScript，回答一些诸如“它是什么？”和“它能做什么？”的问题。并使你熟悉 JavaScript 的用途。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>计算机基础知识，初步理解 HTML 和 CSS。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>初步了解 JavaScript，包括一些概念、用途和嵌入网站的方法。</td>
    </tr>
  </tbody>
</table>

## 高层定义

JavaScript 是一种脚本编程语言，它可以在网页上实现复杂的功能，网页展现给你的不再是简单的静态信息，而是实时的内容更新——交互式的地图、2D/3D 动画、滚动播放的视频等等——JavaScript 就在其中。它是标准 Web 技术蛋糕的第三层，其中 [HTML](/zh-CN/docs/Learn_web_development/Core/Structuring_content) 和 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 我们已经在学习区的其他部分进行了详细的讲解。

![标准 web 技术的三层——HTML、CSS 和 JavaScript](cake.png)

- {{glossary("HTML")}} 是一种标记语言，用来结构化我们的网页内容并赋予内容含义，例如定义段落、标题和数据表，或在页面中嵌入图片和视频。
- {{glossary("CSS")}} 是一种样式规则语言，可将样式应用于 HTML 内容，例如设置背景颜色和字体，在多个列中布局内容。
- {{glossary("JavaScript")}} 是一种脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画，还有很多。（好吧，虽然它不是万能的，但可以通过简短的代码来实现神奇的功能。）

这三层依次建立，秩序井然。以简单文本标签作为示例。首先用 HTML 将文本标记起来，从而赋予它结构和目的：

```html
<button type="button">Player 1: Chris</button>
```

![没有样式的“Player 1: Chris”按钮](just-html.png)

然后我们可以为它加一点 CSS 让它更好看：

```css
button {
  font-family: "helvetica neue", helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 2px solid rgb(200 200 0 / 60%);
  background-color: rgb(0 217 217 / 60%);
  color: rgb(100 0 0 / 100%);
  box-shadow: 1px 1px 2px rgb(0 0 200 / 40%);
  border-radius: 10px;
  padding: 3px 10px;
  cursor: pointer;
}
```

![已添加样式的“Player 1: Chris”按钮](html-and-css.png)

最后，我们可以再加上一些 JavaScript 来实现动态行为：

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("请输入新的名字");
  button.textContent = `Player 1: ${name}`;
}
```

{{ EmbedLiveSample('高层定义', '100%', 80, , , , , 'allow-modals') }}

尝试点击最后一个版本的文本标签，观察会发生什么（也可在 GitHub 上查看这个演示的[源代码](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/javascript-label.html)或[在线运行它](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html)）！

JavaScript 能做的远不止这些。让我们来仔细探索。

## 它到底可以做什么？

客户端 JavaScript 语言的核心包含一些普遍的编程特性，以让你可以做到如下的事情：

- 在变量中储存有用的值。比如上文的示例中，我们请求客户输入一个新名字，然后将其储存到 `name` 变量中。
- 操作一段文本（在编程中称为“字符串”（string））。上文的示例中，我们取字符串“玩家 1：”，然后把它和 `name` 变量拼接起来，创造出完整的文本标签，比如“玩家 1：小明”。
- 运行代码以响应网页中发生的特定事件。上文的示例中，我们用一个 {{domxref("Element/click_event", "click")}} 事件来检测按钮什么时候被点击，然后运行代码更新文本标签。
- 以及更多！

JavaScript 语言核心之上所构建的功能更令人兴奋。**应用程序接口**（**Application Programming Interface，API**）将为你的代码提供额外的超能力。

API 是已经建立好的一套代码组件，可以让开发者实现原本很难甚至无法实现的程序。就像现成的家具套件之于家居建设，用一些已经切好的木板组装一个书柜，显然比自己设计，寻找合适的木材，裁切至合适的尺寸和形状，找到正确尺寸的螺钉，*然后*再组装成书柜要简单得多。

API 通常分为两类。

![API 的两种分类：第三方 API 显示于浏览器同侧，浏览器 API 在浏览器内部](browser.png)

**浏览器 API** 内建于 web 浏览器中，它们可以将数据从周边计算机环境中筛选出来，还可以做实用的复杂工作。例如：

- {{domxref("Document_Object_Model","文档对象模型 API","","nocode")}} 能通过创建、移除和修改 HTML，为页面动态应用新样式等手段来操作 HTML 和 CSS。比如当某个页面出现了一个弹窗，或者显示了一些新内容（像上文小演示中看到那样），这就是 DOM 在运行。
- {{domxref("Geolocation","地理位置 API","","nocode")}} 获取地理信息。这就是为什么[谷歌地图](https://www.google.com/maps)可以找到你的位置，而且标示在地图上。
- {{domxref("Canvas_API","画布（Canvas）","","nocode")}} 和 {{domxref("WebGL_API","WebGL","","nocode")}} API 可以创建生动的 2D 和 3D 图像。人们正运用这些 web 技术制作令人惊叹的作品。参见 [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) 以及 [webglsamples](https://webglsamples.org/)。
- 诸如 {{domxref("HTMLMediaElement")}} 和 {{domxref("WebRTC API", "WebRTC","","nocode")}} 等[影音类 API](/zh-CN/docs/Web/Media/Guides/Audio_and_video_delivery) 让你可以利用多媒体做一些非常有趣的事，比如在网页中直接播放音乐和影片，或用自己的网络摄像头获取录像，然后在其他人的电脑上展示（试用简易版[截图演示](http://chrisdavidmills.github.io/snapshot/)以理解这个概念）。

> [!NOTE]
> 上述很多演示都不能在旧浏览器中运行。推荐你在测试代码时使用诸如 Firefox、Chrome、Edge 或者 Opera 等现代浏览器。当代码即将交付生产环境时（也就是真实的客户即将使用真实的代码时），你还需要深入考虑[跨平台测试](/zh-CN/docs/Learn_web_development/Extensions/Testing)。

**第三方 API** 并没有默认嵌入浏览器中，一般要从网上取得它们的代码和信息。比如：

- [Twitter API](https://developer.twitter.com/en/docs)、[新浪微博 API](https://open.weibo.com/) 可以在网站上展示最新推文之类。
- [谷歌地图 API](https://developers.google.cn/maps/)、[OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API)、[高德地图 API](https://lbs.amap.com/) 可以在网站嵌入定制的地图等等。

> [!NOTE]
> 这些 API 为进阶内容，本模块中不会涉及，更多信息请参考：[客户端 web API 模块](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs)。

先稳住！你看到的只是冰山一角。你不可能仅靠学一天 JavaScript 就能构建下一个 Facebook、谷歌地图、或 Instagram——还有很多基础需要了解，这也是为什么你会在这里，让我们继续吧！

## JavaScript 在页面上做了什么？

现在我们实实在在的学习一些代码，与此同时，探索 JavaScript 运行时背后发生的事情。

让我们简单回顾一下，浏览器在读取一个网页时都发生什么（[CSS 如何工作](/zh-CN/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_究竟是怎么工作的？)一文中首次谈及）。浏览器在读取一个网页时，代码（HTML、CSS 和 JavaScript）将在一个运行环境（浏览器标签页）中得到执行。就像一间工厂，将原材料（代码）加工为一件产品（网页）。

![当页面加载时，HTML、CSS 和 JavaScript 代码共同创建浏览器标签页中的内容](execution.png)

JavaScript 的一个非常常见的用途是通过文档对象模型 API（如上所述）动态修改 HTML 和 CSS，以更新用户界面。

### 浏览器安全

每个浏览器标签页就是其自身用来运行代码的独立容器（这些容器用专业术语称为“运行环境”）。大多数情况下，每个标签页中的代码完全独立运行，而且一个标签页中的代码不能直接影响另一个标签页（或者另一个网站）中的代码。这是一个好的安全措施，如果不这样，黑客就可以从其他网站盗取信息，或做一些其他坏事。

> [!NOTE]
> 以安全的方式在不同网站或标签页中传送代码和数据的方法是存在的，但它们属于进阶技术，本课程不会涉及。

### JavaScript 运行次序

当浏览器执行到一段 JavaScript 代码时，通常会按从上往下的顺序执行这段代码。这意味着你需要注意代码书写的顺序。比如，我们回到第一个例子中的 JavaScript 代码：

```js
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("输入一个新的名字：");
  button.textContent = `玩家 1：${name}`;
}
```

首先使用 `document.querySelector` 选定一个按钮，然后使用 `addEventListener` 给它附上一个事件监听器（第 3 行），使得在它被点击时，`updateName()` 代码块（5 – 8 行）便会运行。`updateName()` 代码块（这类可以重复使用的代码块称为“函数”）向用户请求一个新名字，然后把这个名字插入到段落中以更新显示。

如果互换了代码里最初两行的顺序，会导致问题。[浏览器开发者控制台](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)将返回一个错误：`Uncaught ReferenceError: Cannot access 'button' before initialization`。这意味着 `button` 对象还未初始化，所以我们不能为它增添事件监听器。

> [!NOTE]
> 这是一个很常见的错误，在引用对象之前必须确保该对象已经存在。

### 解释代码 vs 编译代码

作为程序员，你或许听说过这两个术语：**解释**（interpret）和**编译**（compile）。在解释型语言中，代码自上而下运行，且实时返回运行结果。代码在由浏览器执行前，不需要将其转化为其他形式。代码将直接以文本格式被接收和处理。

相对的，编译型语言需要先将代码转化（编译）成另一种形式才能运行。比如 C/C++ 先被编译成机器码，然后才能由计算机运行。程序将以二进制的格式运行，这些二进制内容是由程序源代码产生的。

JavaScript 是轻量级解释型语言。浏览器接受到 JavaScript 代码，并以代码自身的文本格式运行它。技术上，几乎所有 JavaScript 转换器都运用了一种叫做**即时编译**（just-in-time compiling）的技术；当 JavaScript 源代码被执行时，它会被编译成二进制的格式，使代码运行速度更快。尽管如此，JavaScript 仍然是一门解释型语言，因为编译过程发生在代码运行中，而非之前。

两种类型的语言各有优势，这个问题我们暂且不谈。

### 服务器端代码 vs 客户端代码

你或许还听说过**服务器端**（server-side）和**客户端**（client-side）代码这两个术语，尤其是在 web 开发时。客户端代码是在用户的电脑上运行的代码，在浏览一个网页时，它的客户端代码就会被下载，然后由浏览器来运行并展示。在本模块中我们讨论的主要是**客户端 JavaScript**。

而服务器端代码在服务器上运行，然后运行结果才由浏览器下载并展示出来。流行的服务器端 web 语言包括：PHP、Python、Ruby、ASP.NET，甚至有 JavaScript！JavaScript 也可用作服务器端语言，比如现在流行的 Node.js 环境，你可以在我们的[动态网页——服务器端编程](/zh-CN/docs/Learn_web_development/Extensions/Server-side)主题中找到更多关于服务器端 JavaScript 的知识。

### 动态代码 vs 静态代码

**动态**一词既适用于客户端 JavaScript，又适用于描述服务器端语言。它是指通过按需生成新内容来更新 web 页面或应用，使得不同环境下可以显示出不同内容。服务器端代码会在服务器上动态生成新内容，例如从数据库中提取信息。而客户端 JavaScript 则在用户端浏览器中动态生成新内容，例如创建一个新的 HTML 表格，用从服务器请求到的数据填充，然后在网页中向用户展示这个表格。两种情况的意义略有不同，但又有所关联，且两者（服务器端和客户端）经常协同工作。

没有动态更新内容的网页叫做**静态**页面，所显示的内容不会改变。

## 怎样向页面添加 JavaScript？

可以像添加 CSS 那样将 JavaScript 添加到 HTML 页面中。CSS 使用 {{htmlelement("link")}} 元素链接外部样式表，使用 {{htmlelement("style")}} 元素向 HTML 嵌入内部样式表，而 JavaScript 这里只需一个元素——{{htmlelement("script")}}。我们来看看它是怎么工作的。

### 内部 JavaScript

1. 首先，下载示例文件 [apply-javascript.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript.html)。放在一个方便的文件夹里。
2. 分别在浏览器和文本编辑器中打开这个文件。你会看到这个 HTML 文件创建了一个简单的网页，其中有一个可点击按钮。
3. 接下来，打开文本编辑器，在正文底部——就在结束标签 `</body>` 之前——添加以下内容：

   ```html
   <script>
     // 在此编写 JavaScript 代码
   </script>
   ```

   请注意，Web 文档中，代码通常是按其在页面上出现的顺序加载和执行。通过把 JavaScript 放在底部，来确保所有的 HTML 元素完成加载（请参阅下面的[脚本加载策略](#脚本加载策略)）。

4. 下面，在 {{htmlelement("script")}} 元素中添加一些 JavaScript 代码，这个页面就能做一些更有趣的事。在“// 在此编写 JavaScript 代码”一行下方添加以下代码：

   ```js
   document.addEventListener("DOMContentLoaded", () => {
     function createParagraph() {
       const para = document.createElement("p");
       para.textContent = "你点击了按钮！";
       document.body.appendChild(para);
     }

     const buttons = document.querySelectorAll("button");

     for (const button of buttons) {
       button.addEventListener("click", createParagraph);
     }
   });
   ```

5. 保存文件并刷新浏览器，然后你会发现，点击按钮文档下方将会添加一个新段落。

> [!NOTE]
> 如果示例不能正常工作，请依次检查所有步骤，并保证没有纰漏。原始文件是否以 `.html` 为扩展名保存到本地了？`</body>` 标签前是否添加了 {{htmlelement("script")}} 元素？JavaScript 代码输入是否正确？**JavaScript 是区分大小写的，而且非常精确，所以你需要准确无误地输入所示的句法，否则可能会出错。**

> [!NOTE]
> 你可以在 GitHub 上查看此版本 [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)（[也可在线查看](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)）。

### 外部 JavaScript

这很不错，但是能不能把 JavaScript 代码放置在一个外部文件中呢？现在我们来研究一下。

1. 首先，在刚才的 HTML 文件所在的目录下创建一个名为 `script.js` 的新文件。请确保扩展名为 `.js`，只有这样才能被识别为 JavaScript 代码。
2. 移除当前位于 `</body>` 底部的 {{htmlelement("script")}} 元素，并且在结束标签 `</head>` 之前添加以下内容（这样浏览器就能比在底部时更快开始加载文件）：

   ```html
   <script type="module" src="script.js"></script>
   ```

3. 在 `script.js` 文件中，添加下面的脚本：

   ```js
   function createParagraph() {
     const para = document.createElement("p");
     para.textContent = "你点击了按钮！";
     document.body.appendChild(para);
   }

   const buttons = document.querySelectorAll("button");

   for (const button of buttons) {
     button.addEventListener("click", createParagraph);
   }
   ```

4. 保存并刷新浏览器。就会发现点击按钮不起作用，如果检查浏览器控制台，会看见类似 `Cross-origin request blocked` 的错误。这是因为与许多外部资源一样，JavaScript 模块需要从与 HTML 同源的地方加载，并且 `file://` URL 不符合条件。有两个解决方案可以解决这个问题：
   - 我们推荐的解决方案是按照指南[设置本地测试服务器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)。运行服务器程序并且在 `8000` 端口提供文件 `apply-javascript-external.html` 和 `script.js`，打开浏览器并访问 `http://localhost:8000`。
   - 如果无法运行本地服务器，也可以使用 `<script defer src="script.js"></script>` 代替 `<script type="module" src="script.js"></script>`。了解更多信息请参阅下面的[脚本加载策略](#脚本加载策略)。但是注意，本教程其他部分使用的特性可能需要本地 HTTP 服务器。
5. 现在网站和之前一样了，但是我们的 JavaScript 放在了一个外部文件。一般来说，这对组织代码并在多个 HTML 文件中复用来说是一件好事。此外，没有大段脚本的 HTML 更容易阅读。

> [!NOTE]
> 你可以在 GitHub 上查看 [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) 以及 [script.js](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/what-is-js/script.js)（[也可在线查看](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)）。

### 内联 JavaScript 处理器

注意，有时候你会遇到在 HTML 中存在着一丝真实的 JavaScript 代码。它或许看上去像这样：

```js example-bad
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "你点击了按钮！";
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">点我！</button>
```

你可以在下面尝试这个版本的演示。

{{ EmbedLiveSample('内联_JavaScript_处理器', '100%', 150) }}

这个演示与之前的两个功能完全一致，只是在 {{htmlelement("button")}} 元素中包含了一个内联的 `onclick` 处理器，使得函数在按钮被按下时运行。

**然而请不要这样做**。这将使 JavaScript 污染了 HTML，而且效率低下。对于每个需要应用 JavaScript 的按钮，你都得手动添加 `onclick="createParagraph()"` 属性。

### 请使用 addEventListener

与其在 HTML 中包含 JavaScript，不如使用纯 JavaScript 构造。通过 `querySelectorAll()` 函数，可以选择页面上的所有按钮。然后可以循环遍历这些按钮，使用 `addEventListener()` 为每个按钮分配一个处理器。代码如下所示：

```js
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}
```

这样写乍看去比 `onclick` 属性要长一些，但是这样写会对页面上所有按钮生效，无论多少个，或添加或删除，完全无需修改 JavaScript 代码。

> [!NOTE]
> 请尝试修改 `apply-javascript.html` 以添加更多按钮。刷新后可发现按下任一按钮时都会创建一个段落。这样很高效吧？

### 脚本加载策略

页面上的所有 HTML 代码都按其出现的顺序加载。如果使用 JavaScript 去操作页面上的元素（更准确的说，是[文档对象模型](/zh-CN/docs/Learn_web_development/Core/Scripting/DOM_scripting#文档对象模型)），那么如果 JavaScript 在 HTML 之前就被加载和解析了，代码将无法运行。

有几种不同的策略来确保 JavaScript 只在 HTML 解析之后运行：

- 在上面的内部 JavaScript 示例中，脚本元素放在文档正文的底部，因此只能在 HTML 正文的其他部分被解析以后运行。
- 在上面的外部 JavaScript 实例中，脚本元素放在文档的头部，在解析 HTML 正文之前解析。但是由于我们使用了 `<script type="module">`，代码被视为一个[模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)，并且浏览器在执行 JavaScript 模块之前会等待所有的 HTML 代码都处理完毕（也可以把外部脚本放在正文的底部，但是如果 HTML 内容较多且网络较慢，在浏览器开始获取并加载脚本之前可能需要大量的时间，因此将外部脚本放在头部通常会更好一些）。
- 如果仍然想在文档头部使用非模块脚本，可能阻塞整个页面的显示，并且可能出现错误，因为脚本在文档解析之前执行：
  - 对于外部脚本，应该在 {{htmlelement("script")}} 元素上添加 `defer`（或者如果不需要 HTML 解析完成，则可以使用 `async`）属性。
  - 对于内部脚本，应该将代码封装在 [`DOMContextLoaded` 事件监听器](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)中。

  这超出了本教程的范围，除非你需要支持非常老的浏览器，否则不要这样做，使用 `<script type="module">` 代替即可。

## 注释

就像 HTML 和 CSS，JavaScript 代码中也可以添加注释，浏览器会忽略它们，注释只是为你的同事（还有你，如果半年后再看自己写的代码，还会记得其中的含义吗）提供关于代码如何工作的指引。注释非常有用，而且应该经常使用，尤其在大型应用中。注释分为两类：

- 在双斜杠（//）后添加单行注释，比如：

  ```js
  // 我是一条注释
  ```

- 在 `/*` 和 `*/` 之间添加多行注释，比如：

  ```js
  /*
    我也是
    一条注释
  */
  ```

比如说，我们可以这样为上一个演示添加注释：

```js
// 函数：创建一个新的段落并添加至 HTML body 底部。
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "你点了这个按钮！";
  document.body.appendChild(para);
}

/*
  1. 取得页面上所有按钮的引用并将它们置于一个数组中。
  2. 通过一个循环为每个按钮添加一个点击事件的监听器。
  当按钮被点击时，调用 createParagraph() 函数。
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

> [!NOTE]
> 一般来说，注释越多越好，但如果你发现自己添加了大量注释来解释变量是什么（变量名也许应该更直观），或者解释非常简单的操作（也许代码过于复杂），那么就应该小心了。

## 总结

恭喜你，迈出了探索 JavaScript 世界的第一步。我们从理论开始，介绍为什么要使用 JavaScript，以及用它能做什么事情。过程中穿插了一些代码示例并讲解了 JavaScript 如何与网站中其他代码适配，等等。

现在 JavaScript 或许还有些令人生畏，但不用担心。在课程中我们会循序渐进。下一节将[全力投入实战](/zh-CN/docs/Learn_web_development/Core/Scripting/A_first_splash)，让你专注其中，并建立自己的 JavaScript 示例。

{{NextMenu("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting")}}
