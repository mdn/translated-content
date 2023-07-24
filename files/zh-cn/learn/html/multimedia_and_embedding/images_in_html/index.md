---
title: HTML 中的图片
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

在一开始时，Web 仅有文本，那真的是很无趣。幸运的是，没过多久网页上就能嵌入图片和其他有趣的内容了。虽然还有许多其他类型的多媒体，但是从地位比较低的{{htmlelement("img")}}元素开始是符合逻辑的，它常常被用来在网页中嵌入一张简单的图片。在这篇文章中，我们将看到怎样深入的使用它，包括基本的用{{htmlelement("figure")}}来添加说明文字，以及怎样把它和 CSS 背景图片链接起来。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        掌握基本的电脑知识，<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装基本软件</a
        >，基本的<a
          href="/zh-CN/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >文件处理</a
        >知识，熟悉<a
          href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML 基础</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>
        学习如何在 HTML 页面插入简单的图片，为图片添加简单的说明，以及 CSS
        背景图片与 HTML 图片的关系。
      </td>
    </tr>
  </tbody>
</table>

## 怎样将一幅图片放到网页上？

我们可以用{{htmlelement("img")}} 元素来把图片放到网页上。它是一个空元素（它不需要包含文本内容或闭合标签），最少只需要一个 `src` （一般读作其全称 *source）*来使其生效。`src` 属性包含了指向我们想要引入的图片的路径，可以是相对路径或绝对 URL，就像 {{htmlelement("a")}} 元素的 `href` 属性一样。

> **备注：** 在继续之前，你应该阅读[快速入门 URL 和路径](</zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#URLs与路径(path)快速入门>) 来复习一下相对和绝对 URL。

举个例子来看，如果你有一幅文件名为 `dinosaur.jpg` 的图片，且它与你的 HTML 页面存放在相同路径下，那么你可以这样嵌入它：

```html
<img src="dinosaur.jpg" />
```

如果这张图片存储在和 HTML 页面同路径的 `images` 文件夹下（这也是 Google 推荐的做法，利于{{glossary("SEO")}}/索引），那么你可以采用如下形式：

```html
<img src="images/dinosaur.jpg" />
```

以此类推。

> **备注：** 搜索引擎也读取图像的文件名并把它们计入 SEO。因此你应该给你的图片取一个描述性的文件名：`dinosaur.jpg` 比 `img835.png` 要好。

你也可以像下面这样使用绝对路径：

```html
<img src="https://www.example.com/images/dinosaur.jpg" />
```

但是这种方式是不被推荐的，这样做只会使浏览器做更多的工作，例如重新通过 DNS 再去寻找 IP 地址。通常我们都会把图片和 HTML 放在同一个服务器上。

> **警告：** 大多数图片是有版权的。**不要**在你的网页上使用一张图片，除非：
>
> 1. 你是图片版权所有者
> 2. 你有图片版权所有者明确的、书面上的使用授权
> 3. 你有充分的证据证明这张图片是公共领域内的
>
> 侵犯版权是违法并且不道德的。此外，在得到授权之前**永远不要**把你的`src`属性指向其他人网站上的图片。这被称为"盗链（hotlinking）"。同样，盗取其他人的带宽也是违法的。而且这会降低你的页面的加载速度，而且图片可能会在不受你控制的情况下被移走或用别的令人尴尬的东西替换掉。

我们上面的代码会展示如下的结果页面：

![A basic image of a dinosaur, embedded in a browser, with Images in HTML written above it](basic-image.png)

> **备注：** 像{{htmlelement("img")}}和{{htmlelement("video")}}这样的元素有时被称之为**替换元素**，因为这样的元素的内容和尺寸由外部资源（像是一个图片或视频文件）所定义，而不是元素自身。

> **备注：** 你可以在[GitHub 上的这个网页](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html)看到这个例子的运行结果（也可以看到[源码](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/images-in-html/index.html)）。

### 备选文本

下一个我们讨论的属性是 `alt` ，它的值应该是对图片的文字描述，用于在图片无法显示或不能被看到的情况。例如，上面的例子可以做如下改进：

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

测试`alt` 属性最简单的方式就是故意拼错图片文件名，这样浏览器就无法找到该图片从而显示备选的文本。如果我们将上例的图片文件名改为 `dinosooooor.jpg`，浏览器就不能显示图片，而显示：

![The Images in HTML title, but this time the dinosaur image is not displayed, and alt text is in its place.](alt-text.png)

那么，为什么我们需要备选文本呢？它可以派上用场的原因有很多：

- 用户有视力障碍，通过[屏幕阅读器](https://zh.wikipedia.org/wiki/%E8%9E%A2%E5%B9%95%E9%96%B1%E8%AE%80%E5%99%A8)来浏览网页。事实上，给图片一个备选的描述文本对大多数用户都是很有用的。
- 就像上面所说的，你也许会把图片的路径或文件名拼错。
- 浏览器不支持该图片类型。某些用户仍在使用纯文本的浏览器，例如 [Lynx](https://en.wikipedia.org/wiki/Lynx_%28web_browser%29)，这些浏览器会把图片替换为描述文本。
- 你会想提供一些文字描述来给搜索引擎使用，例如搜索引擎可能会将图片的文字描述和查询条件进行匹配。
- 用户关闭的图片显示以减少数据的传输，这在手机上是十分普遍的，并且在一些国家带宽有限且昂贵。

你到底应该在 `alt` 里写点什么呢？这首先取决于为什么这张图片会在这儿，换句话说，如果这张图片没显示出来，会少了什么：

- **装饰：** 如果图片只是用于装饰，而不是内容的一部分，可以写一个空的`alt=""` 。例如，屏幕阅读器不会浪费时间对用户读出不是核心需要的内容。实际上装饰性图片就不应该放在 HTML 文件里， [CSS 背景图片](#css_背景图片)才应该用于插入装饰图片，但如果这种情况无法避免， `alt=""`会是最佳处理方案。
- **内容：** 如果你的图片提供了重要的信息，就要在`alt`文本中简要的提供相同的信息，甚至更近一步，把这些信息写在主要的文本内容里，这样所有人都能看见。不要写冗余的备选文本（如果在主要文本中将所有的段落都重复两遍，对于没有失明的用户来说多烦啊！），如果在主要文本中已经对图片进行了充分的描述，写`alt=""`就好。
- **链接：** 如果你把图片嵌套在{{htmlelement("a")}}标签里，来把图片变成链接，那你还必须[提供无障碍的链接文本](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#用清晰的链接措辞。)。在这种情况下，你可以写在同一个\<a>元素里，或者写在图片的`alt`属性里，随你喜欢。
- **文本：** 你不应该将文本放到图像里。例如，如果你的主标题需要有阴影，你可以[用 CSS](/zh-CN/docs/Web/CSS/text-shadow)来达到这个目的，而不是把文本放到图片里。如果真的必须这么做，那就把文本也放到`alt`里。

本质上，关键在于在图片无法被看见时也提供一个可用的体验，这确保了所有人都不会错失一部分内容。尝试在浏览器中使图片不可见然后看看网页变成什么样了，你会很快意识到在图片无法显示时备选文本能帮上多大忙。

> **备注：** 想知道更多，可以看我们的[备选文本](/zh-CN/docs/learn/Accessibility/HTML:%E4%B8%BA%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7%E6%8F%90%E4%BE%9B%E4%B8%80%E4%B8%AA%E8%89%AF%E5%A5%BD%E7%9A%84%E5%9F%BA%E7%A1%80#%E6%96%87%E6%9C%AC%E6%9B%BF%E4%BB%A3%E5%93%81)指南

### 宽度和高度

你可以用宽度和高度属性来指定你的图片的高度和宽度（你可以用多种方式找到你的图片的宽度和高度，例如在 Mac 上，你可以用 <kbd>Cmd</kbd> + <kbd>I</kbd> 来得到显示的图片文件的信息）回到我们的例子，你可以这样做：

```html
<img
  src="images/dinosaur.jpg"
  alt="一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"
  width="400"
  height="341" />
```

在正常的情况下，这不会对显示产生很大的影响，但是如果图片没有显示（例如用户刚刚开始浏览网页，但是图片还没有加载完成），你会注意到浏览器会为要显示的图片留下一定的空间：

![The Images in HTML title, with dinosaur alt text, displayed inside a large box that results from width and height settings](alt-text-with-width-height.png)

这是一件好事情——这使得页面加载的更快速更流畅。

然而，你不应该使用 HTML 属性来改变图片的大小。如果你把尺寸设定的太大，最终图片看起来会模糊；如果太小，会在下载远远大于你需要的图片时浪费带宽。如果你没有保持正确的[宽高比](<https://zh.wikipedia.org/wiki/%E9%95%B7%E5%AF%AC%E6%AF%94_(%E5%BD%B1%E5%83%8F)>)，图片可能看起来会扭曲。在把图片放到你的网站页面之前，你应该使用图形编辑器使图片的尺寸正确。

> **备注：** 如果你需要改变图片的尺寸，你应该使用[CSS](/zh-CN/docs/Learn/CSS)而不是 HTML。

### Image titles 图片标题

类似于[超链接](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#使用_title_属性添加支持信息)，你可以给图片增加 `title` 属性来提供需要更进一步的支持信息。在我们的例子中，可以这样做：

```html
<img
  src="images/dinosaur.jpg"
  alt="一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

这会给我们一个鼠标悬停提示，看起来就像链接标题：

![The dinosaur image, with a tooltip title on top of it that reads A T-Rex on display at the Manchester University Museum ](image-with-title.png)

图片标题并不必须要包含有意义的信息，通常来说，将这样的支持信息放到主要文本中而不是附着于图片会更好。不过，在有些环境中这样做更有用，比如当没有空间显示提示时，也就是在图片栏中。

然而，这并不是推荐的——title 有很多易访问性问题，主要是基于这样一个事实，即屏幕阅读器的支持是不可预测的，大多数浏览器都不会显示它，除非您在鼠标悬停时（例如：title 无法访问键盘用户），如果你对更多的信息感兴趣，阅读[The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) by Scott O'Hara.

### 动手练习：嵌入一张图片

好，轮到你了！在这个动手练习中，我们希望你可以做一个简单的嵌入图片练习。你有一个基本的 {{htmlelement("img")}} 标签; 我们希望你可以把下面这个 URL 所指向的图片嵌入到 HTML 中：

```
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

之前我们说过永远不要从其他服务器热链接图片，但这次只是出于学习目的，所以我们会允许你这么做一次。

我们还希望你可以：

- 添加一些备选文字，添加完成后，可以故意把 URL 写错，来检查该属性的效果。
- 设置图片正确的 `width` 和 `height` 属性（提示：宽为 200px，高为 171px），然后再将宽和高的值进行改变，看看会有什么影响。
- 在图片上设置 `title` 属性。

如果你遇到了错误，你可以按 reset 按钮来重置。如果你遇到了困难无法完成，按下 Show solution 按钮来看一下答案。

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <style>
      body {
        font-family: "微软雅黑", Helvetica, Arial, sans-serif;
        margin: 10px;
        background: #f5f9fa;
      }
      h2 {
        font-size: 16px;
      }
      code,
      textarea {
        font-family: Consolas, Menlo, monospace;
      }
      .output {
        min-height: 200px;
      }
      .input {
        min-height: 100px;
        width: 95%;
      }
      .a11y-label {
        margin: 0;
        text-align: right;
        font-size: 0.7rem;
        width: 98%;
      }
      .controls {
        width: 96%;
        text-align: right;
      }
    </style>
  </head>
  <body>
    <h2>实时输出</h2>
    <div class="output"></div>

    <h2>可编辑代码</h2>
    <p class="a11y-label">
      按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code>
    </p>
    <textarea id="code" class="input"></textarea>

    <div class="controls">
      <button id="btn-reset">重置</button>
      <button id="btn-solution">显示答案</button>
    </div>
    <script>
      const btnReset = document.getElementById("btn-reset");
      const btnSolution = document.getElementById("btn-solution");
      const blockOutput = document.querySelector(".output");
      const blockInput = document.querySelector(".input");
      const original =
        "https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg";
      const answer = `<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
  alt="一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"
  width="200"
  height="171"
  title="曼彻斯特大学博物馆展出的一只霸王龙的化石">`;
      let userEntry = "";

      init();
      btnReset.addEventListener("click", init);

      btnSolution.addEventListener("click", () => {
        if (btnSolution.textContent === "显示答案") {
          blockInput.value = blockOutput.innerHTML = answer;
          btnSolution.textContent = "隐藏答案";
        } else {
          blockInput.value = blockOutput.innerHTML = userEntry;
          btnSolution.textContent = "显示答案";
        }
      });

      blockInput.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "Tab":
            e.preventDefault();
            insertAtCursor("\t");
            break;
          case "Escape":
            blockInput.blur();
            break;
        }
      });

      blockInput.addEventListener("keyup", () => {
        userEntry = blockInput.value;
        blockOutput.innerHTML = blockInput.value;
        if (btnSolution.textContent === "隐藏答案") {
          btnSolution.textContent = "显示答案";
        }
      });

      function init() {
        userEntry = blockOutput.innerHTML = blockInput.value = original;
        btnSolution.textContent = "显示答案";
      }

      function insertAtCursor(text) {
        const scrollPos = blockInput.scrollTop;
        const cursorPos = blockInput.selectionStart;

        const front = blockInput.value.substring(0, cursorPos);
        const back = blockInput.value.substring(
          blockInput.selectionEnd,
          blockInput.value.length,
        );

        blockInput.value = front + text + back;
        blockInput.selectionStart = blockInput.selectionEnd =
          cursorPos + text.length;
        blockInput.focus();
        blockInput.scrollTop = scrollPos;
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('动手练习：嵌入一张图片', 700, 500) }}

## 通过为图片搭配说明文字的方式来解说图片

说到说明文字，这里有很多种方法让你添加一段说明文字来搭配图片。比如，没有人会阻止你这么做：

```html
<div class="figure">
  <img
    src="/images/dinosaur_small.jpg"
    alt="一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"
    width="400"
    height="341" />
  <p>曼彻斯特大学博物馆展出的一只霸王龙的化石</p>
</div>
```

这是可以的， {{htmlelement("p")}} 中包含了你需要的内容，以及方便使用 CSS 的一种很好的风格。但是这里有一个问题，从语义的角度上来讲，{{htmlelement("img")}} 和 {{htmlelement("p")}} 并没有什么联系，这会给使用屏幕阅读的人造成问题，比如当你有 50 张图片和其搭配的 50 段说明文字，那么一段说明文字是和哪张图片有关联的呢？

有一个更好的做法是使用 HTML5 的 {{htmlelement("figure")}} 和 {{htmlelement("figcaption")}} 元素，它正是为此而被创造出来的：为图片提供一个语义容器，在标题和图片之间建立清晰的关联。我们之前的例子可以重写为：

```html
<figure>
  <img
    src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
    alt="一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"
    width="400"
    height="341" />
  <figcaption>曼彻斯特大学博物馆展出的一只霸王龙的化石</figcaption>
</figure>
```

这个 {{htmlelement("figcaption")}} 元素 告诉浏览器和其他辅助的技术工具这段说明文字描述了 {{htmlelement("figure")}} 元素的内容。

> **备注：** 从无障碍的角度来说，说明文字和 [`alt`](/zh-CN/docs/Web/HTML/Element/img#alt) 文本扮演着不同的角色。看得见图片的人们同样可以受益于说明文字，而 [`alt`](/zh-CN/docs/Web/HTML/Element/img#alt) 文字只有在图片无法显示时才这样。所以，说明文字和 `alt` 的内容不应该一样，因为当图片无法显示时，它们会同时出现。尝试让你的图片不显示，看看效果如何。

注意 {{htmlelement("figure")}} 里不一定要是一张图片，只要是一个这样的独立内容单元：

- 用简洁、易懂的方式表达意图。
- 可以置于页面线性流的某处。
- 为主要内容提供重要的补充说明。

{{htmlelement("figure")}} 可以是几张图片、一段代码、音视频、方程、表格或别的。

### 动手练习：创建一个 figure

在这个动手练习的部分中，我们希望你把本章节中的上一个动手练习完成的代码拿过来，把它转换为一个 figure:

- 把之前的代码放入 {{htmlelement("figure")}} 元素中。
- 将 `title` 属性的文本复制出来，删除 `title` 元素，然后把文字放入 {{htmlelement("figcaption")}} 元素中，当然这个元素在 {{htmlelement("img")}} 的下面。

如果你遇到了错误，你可以按 reset 按钮来重置。如果你遇到了困难无法完成，按下 Show solution 按钮来看一下答案。

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <style>
      body {
        font-family: "微软雅黑", Helvetica, Arial, sans-serif;
        margin: 10px;
        background: #f5f9fa;
      }
      h2 {
        font-size: 16px;
      }
      code,
      textarea {
        font-family: Consolas, Menlo, monospace;
      }
      .output {
        min-height: 200px;
      }
      .input {
        min-height: 100px;
        width: 95%;
      }
      .a11y-label {
        margin: 0;
        text-align: right;
        font-size: 0.7rem;
        width: 98%;
      }
      .controls {
        width: 96%;
        text-align: right;
      }
    </style>
  </head>
  <body>
    <h2>实时输出</h2>
    <div class="output"></div>

    <h2>可编辑代码</h2>
    <p class="a11y-label">
      按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code>
    </p>
    <textarea id="code" class="input"></textarea>

    <div class="controls">
      <button id="btn-reset">重置</button>
      <button id="btn-solution">显示答案</button>
    </div>
    <script>
      const btnReset = document.getElementById("btn-reset");
      const btnSolution = document.getElementById("btn-solution");
      const blockOutput = document.querySelector(".output");
      const blockInput = document.querySelector(".input");
      const original = `<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
   alt="一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"
   width="200"
   height="171">`;
      const answer = `<figure>
  <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"
     alt="一只恐龙头部和躯干的骨架，它有一个巨大的头，长着锋利的牙齿。"
     width="200"
     height="171">
  <figcaption>曼彻斯特大学博物馆展出的一只霸王龙的化石</figcaption>
</figure>`;
      let userEntry = "";

      init();
      btnReset.addEventListener("click", init);

      btnSolution.addEventListener("click", () => {
        if (btnSolution.textContent === "显示答案") {
          blockInput.value = blockOutput.innerHTML = answer;
          btnSolution.textContent = "隐藏答案";
        } else {
          blockInput.value = blockOutput.innerHTML = userEntry;
          btnSolution.textContent = "显示答案";
        }
      });

      blockInput.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "Tab":
            e.preventDefault();
            insertAtCursor("\t");
            break;
          case "Escape":
            blockInput.blur();
            break;
        }
      });

      blockInput.addEventListener("keyup", () => {
        userEntry = blockInput.value;
        blockOutput.innerHTML = blockInput.value;
        if (btnSolution.textContent === "隐藏答案") {
          btnSolution.textContent = "显示答案";
        }
      });

      function init() {
        userEntry = blockOutput.innerHTML = blockInput.value = original;
        btnSolution.textContent = "显示答案";
      }

      function insertAtCursor(text) {
        const scrollPos = blockInput.scrollTop;
        const cursorPos = blockInput.selectionStart;

        const front = blockInput.value.substring(0, cursorPos);
        const back = blockInput.value.substring(
          blockInput.selectionEnd,
          blockInput.value.length,
        );

        blockInput.value = front + text + back;
        blockInput.selectionStart = blockInput.selectionEnd =
          cursorPos + text.length;
        blockInput.focus();
        blockInput.scrollTop = scrollPos;
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('动手练习：创建一个 figure', 700, 500) }}

## CSS 背景图片

你也可以使用 CSS 把图片嵌入网站中（JavaScript 也行，不过那是另外一个故事了），这个 CSS 属性 {{cssxref("background-image")}} 和另其他 `background-*` 属性是用来放置背景图片的。比如，为页面中的所有段落设置一个背景图片，你可以这样做：

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

按理说，这种做法相对于 HTML 中插入图片的做法，可以更好地控制图片和设置图片的位置，那么为什么我们还要使用 HTML 图片呢？如上所述，CSS 背景图片只是为了装饰 — 如果你只是想要在你的页面上添加一些漂亮的东西，来提升视觉效果，那 CSS 的做法是可以的。但是这样插入的图片完全没有语义上的意义，它们不能有任何备选文本，也不能被屏幕阅读器识别。这就是 HTML 图片有用的地方了。

总而言之，如果图像对您的内容里有意义，则应使用 HTML 图像。如果图像纯粹是装饰，则应使用 CSS 背景图片。

> **备注：** 你可以在 [CSS](/zh-CN/docs/Learn/CSS) 模块里学到更多关于[CSS 背景图片](/zh-CN/docs/Learn/CSS/Styling_boxes/背景)的东西。

## 总结

目前到此为止，我们详细介绍了图片和说明文字，在下篇文章中，我们将进一步看看如何使用 HTML 在网页上嵌入音频和视频。

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
