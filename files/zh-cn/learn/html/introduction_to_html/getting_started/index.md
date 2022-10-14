---
title: 开始学习 HTML
slug: Learn/HTML/Introduction_to_HTML/Getting_started
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

本文将从 HTML 最基础的部分讲起，对元素（Element）、属性（Attribute）以及可能涉及的一些重要术语进行介绍，并明确它们在语言中所处的位置。本文还会讲解 HTML 元素和页面的组织方式，以及其他一些重要的基本语言特性。学习的过程中，我们会使用 HTML 做一些好玩的事情。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        具备计算机基础知识，安装了<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基础软件环境</a
        >，了解基本的<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files"
          >文件组织方法</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>熟悉 HTML 语言的基础知识，掌握几个 HTML 元素的基本用法。</td>
    </tr>
  </tbody>
</table>

## 什么是 HTML?

{{glossary("HTML")}} (HyperText Markup Language) 不是一门编程语言，而是一种用来告知浏览器如何组织页面的**标记语言**。HTML 可复杂、可简单，一切取决于开发者。它由一系列的**元素（{{Glossary("Element", "elements")}}）**组成，这些元素可以用来包围不同部分的内容，使其以某种方式呈现或者工作。一对标签（ {{Glossary("Tag", "tags")}}）可以为一段文字或者一张图片添加超链接，将文字设置为斜体，改变字号，等等。例如下面一行内容：

```
My cat is very grumpy
```

可以将这行文字封装成一个段落（Paragraph）{{htmlelement("p")}}元素来使其在单独一行呈现：

```html
<p>My cat is very grumpy</p>
```

> **备注：** HTML 标签不区分大小写。也就是说，输入标签时既可以使用大写字母也可以使用小写字母。例如，标签 {{htmlelement("title")}} 写作 `<title>`、`<TITLE>`、`<Title>`、`<TiTlE>`，等等都可以正常工作。不过，从一致性、可读性来说，最好仅使用小写字母。

## 剖析一个 HTML 元素

让我们进一步探讨我们的段落元素：

![](grumpy-cat-small.png)

这个元素的主要部分有：

1. **开始标签**（Opening tag）：包含元素的名称（本例为 p），被左、右角括号所包围。表示元素从这里开始或者开始起作用 —— 在本例中即段落由此开始。
2. **结束标签**（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这表示着元素的结尾 —— 在本例中即段落在此结束。初学者常常会犯忘记包含结束标签的错误，这可能会产生一些奇怪的结果。
3. **内容**（Content）：元素的内容，本例中就是所输入的文本本身。
4. **元素**（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素。

### 主动学习：创建第一个 HTML 元素

通过使用标签`<em>`和`</em>`（在前面放置`<em>`打开元素，在后面放置`</em>`关闭元素）——这使得行内容变成斜体强调！你可以在“输出”区域中实时查看更改更新。

如果写错了，可随时按【重置】按钮重新开始，如果实在想不出来，可按【显示答案】按钮查看答案。

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
 <head>
  <meta charset="utf-8">
  <style>
   body { font-family: '微软雅黑', Helvetica, Arial, sans-serif; margin: 10px; background: #f5f9fa; }
   h2 { font-size: 16px; }
   code, textarea { font-family: Consolas, Menlo, monospace; }
   .output { min-height: 50px; }
   .input { min-height: 100px; width: 95%; }
   .a11y-label { margin: 0; text-align: right; font-size: 0.7rem; width: 98%; }
   .controls { width: 96%; text-align: right; }
  </style>
 </head>
 <body>
  <h2>实时输出</h2>
  <div class="output"></div>

  <h2>可编辑代码</h2>
  <p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code> </p>
  <textarea id="code" class="input"></textarea>

  <div class="controls">
   <button id="btn-reset">重置</button>
   <button id="btn-solution">显示答案</button>
  </div>
  <script>
    const btnReset = document.getElementById('btn-reset');
    const btnSolution = document.getElementById('btn-solution');
    const blockOutput = document.querySelector('.output');
    const blockInput = document.querySelector('.input');
    const original = '刀枪剑戟 斧钺钩叉';
    const answer = '<em>刀枪剑戟 斧钺钩叉</em>';
    let userEntry = "";

    init();
    btnReset.addEventListener('click', init);

    btnSolution.addEventListener('click', () => {
     if (btnSolution.textContent === '显示答案') {
      blockInput.value =
      blockOutput.innerHTML = answer;
      btnSolution.textContent = '隐藏答案';
     } else {
      blockInput.value =
      blockOutput.innerHTML = userEntry;
      btnSolution.textContent = '显示答案';
     }
    });

    blockInput.addEventListener('keydown', (e) => {
     switch (e.key) {
     case 'Tab':
      e.preventDefault();
      insertAtCursor('\t');
      break;
     case "Escape":
      blockInput.blur();
      break;
     }
    });

    blockInput.addEventListener('keyup', () => {
     userEntry = blockInput.value;
     blockOutput.innerHTML = blockInput.value;
     if (btnSolution.textContent === '隐藏答案') {
      btnSolution.textContent = '显示答案';
     }
    });

    function init() {
     userEntry =
     blockOutput.innerHTML =
     blockInput.value = original;
     btnSolution.textContent = '显示答案';
    }

    function insertAtCursor(text) {
     const scrollPos = blockInput.scrollTop;
     const cursorPos = blockInput.selectionStart;

     const front = blockInput.value.substring(0, cursorPos);
     const back = blockInput.value.substring(
      blockInput.selectionEnd, blockInput.value.length);

     blockInput.value = front + text + back;
     blockInput.selectionStart =
     blockInput.selectionEnd = cursorPos + text.length;
     blockInput.focus();
     blockInput.scrollTop = scrollPos;
    }
   </script>
 </body>
</html>
```

{{ EmbedLiveSample('主动学习：创建第一个 HTML 元素', 700, 400) }}

### 嵌套元素

你也可以把元素放到其它元素之中——这被称作嵌套。如果我们想要表明我们的小猫脾气很暴躁，可以将 **very** 嵌套在 {{htmlelement("strong")}} 中，意味着这个单词被着重强调：

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

你需要确保元素被正确的嵌套：在上面的例子中我们先打开{{htmlelement("p")}}元素，然后才打开{{htmlelement("strong")}}元素，因此必须先将{{htmlelement("strong")}}元素关闭，然后再去关闭{{htmlelement("p")}}元素。下面的例子是错误的：

```html example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

所有的元素都需要正确的打开和关闭，这样才能按你所想的方式展现。如果像上述的例子一样进行了错误的嵌套，那么浏览器会去猜测你想要表达的意思，但很有可能会得出错误的结果。所以永远不要这么做！

### 块级元素和内联元素

在 HTML 中有两种你需要知道的重要元素类别，块级元素和内联元素。

- 块级元素在页面中以块的形式展现 —— 相对于其前面的内容它会出现在新的一行，其后的内容也会被挤到下一行展现。块级元素通常用于展示页面上结构化的内容，例如段落、列表、导航菜单、页脚等等。一个以 block 形式展现的块级元素不会被嵌套进内联元素中，但可以嵌套在其它块级元素中。
- 内联元素通常出现在块级元素中并环绕文档内容的一小部分，而不是一整个段落或者一组内容。内联元素不会导致文本换行：它通常出现在一堆文字之间，例如超链接元素 {{htmlelement("a")}} 或者强调元素：{{htmlelement("em")}} 和 {{htmlelement("strong")}}。

看一看下面的例子：

```html
<em>第一</em><em>第二</em><em>第三</em>

<p>第四</p><p>第五</p><p>第六</p>
```

{{htmlelement("em")}} 是一个内联元素，所以就像你在下方可以看到的，第一行代码中的三个元素都没有间隙的展示在了同一行。而 {{htmlelement("p")}} 是一个块级元素，所以第二行代码中的每个元素分别都另起了新的一行展现，并且每个段落间都有一些间隔（这是因为默认的浏览器有着默认的展示 {{htmlelement("p")}} 元素的 [CSS 样式](/zh-CN/docs/Learn/CSS/First_steps)）。

{{ EmbedLiveSample('块级元素和内联元素', 700, 200, "", "", "hide-codepen-jsfiddle") }}

> **备注：** HTML5 重新定义了元素的类别：见 [元素内容分类](https://html.spec.whatwg.org/multipage/indices.html#element-content-categories)([译文](/zh-CN/docs/Web/Guide/HTML/Content_categories))。尽管这些新的定义更精确，但却比上述的“块级元素”和“内联元素”更难理解，因此在之后的讨论中仍使用旧的定义。

> **备注：** 在这篇文章中提到的“块”和“内联”，不应该与 [CSS 盒子的类型](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#块级盒子（block_box）_和_内联盒子（inline_box）)中的同名术语相混淆。尽管它们默认是相关的，但改变 CSS 显示类型并不会改变元素的分类，也不会影响它可以包含和被包含于哪些元素。防止这种混淆也是 HTML5 摒弃这些术语的原因之一。

> **备注：** 你可以查阅包含了块级元素和内联元素列表的参考页面—see [Block-level elements](/zh-CN/docs/Web/HTML/Block-level_elements) and [Inline elements](/zh-CN/docs/Web/HTML/Inline_elements).

### 空元素

不是所有元素都拥有开始标签，内容，结束标签。一些元素只有一个标签，通常用来在此元素所在位置插入/嵌入一些东西。例如：元素{{htmlelement("img")}}是用来在元素{{htmlelement("img")}}所在位置插入一张指定的图片。例子如下：

```html
<img src="https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site/images/firefox-icon.png">
```

显示如下：

{{ EmbedLiveSample('空元素', 700, 300, "", "", "hide-codepen-jsfiddle") }}

> **备注：** 空元素（Empty elements）有时也被叫作 _void elements_.

## 属性

元素也可以拥有属性，如下：

![&amp;lt;p class="editor-note">我的猫咪脾气爆&amp;lt;/p>](grumpy-cat-attribute-small.png)

属性包含元素的额外信息，这些信息不会出现在实际的内容中。在上述例子中，这个 class 属性给元素赋了一个识别的名字（id），这个名字此后可以被用来识别此元素的样式信息和其他信息。

一个属性必须包含如下内容：

1. 一个空格，在属性和元素名称之间（如果已经有一个或多个属性，就与前一个属性之间有一个空格）。
2. 属性名称，后面跟着一个等于号。
3. 一个属性值，由一对引号 ("") 引起来。

### 学习实践：为一个元素添加属性

另一个例子是关于元素{{htmlelement("a")}}的——元素{{htmlelement("a")}}是锚，它使被标签包裹的内容成为一个超链接。此元素也可以添加大量的属性，其中几个如下：

- `href`: 这个属性声明超链接的 web 地址，当这个链接被点击浏览器会跳转至 href 声明的 web 地址。例如：`href="https://www.mozilla.org/"`。
- `title`: 标题`title`属性为超链接声明额外的信息，比如你将链接至的那个页面。例如：`title="The Mozilla homepage"`。当鼠标悬停在超链接上面时，这部分信息将以工具提示的形式显示。
- `target`: 目标`target`属性用于指定链接如何呈现出来。例如，`target="_blank"`将在新标签页中显示链接。如果你希望在当前标签页显示链接，忽略这个属性即可。

编辑下面的文本框中的内容，使之变成指向任一个你喜欢的 web 地址的链接。首先，添加\<a>元素，然后为它添加 href 属性和 title 属性。你可以即时的在输出区域看到你修改的内容。你应该可以看到一个连接，当鼠标移上此链接时会显示 title 属性值，当点击此链接时会跳转到 href 指定的 web 地址。记住：在元素名和属性名之间以及两个属性之间要有一个空格。

如果写错了，可随时按【重置】按钮重新开始，如果实在想不出来，可按【显示答案】按钮查看答案。

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
 <head>
  <meta charset="utf-8">
  <style>
   body { font-family: '微软雅黑', Helvetica, Arial, sans-serif; margin: 10px; background: #f5f9fa; }
   h2 { font-size: 16px; }
   code, textarea { font-family: Consolas, Menlo, monospace; }
   .output { min-height: 50px; }
   .input { min-height: 100px; width: 95%; }
   .a11y-label { margin: 0; text-align: right; font-size: 0.7rem; width: 98%; }
   .controls { width: 96%; text-align: right; }
  </style>

 </head>
 <body>
  <h2>实时输出</h2>
  <div class="output"></div>

  <h2>可编辑代码</h2>
  <p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code> </p>
  <textarea id="code" class="input"></textarea>

  <div class="controls">
   <button id="btn-reset">重置</button>
   <button id="btn-solution">显示答案</button>
  </div>
  <script>
    const btnReset = document.getElementById('btn-reset');
    const btnSolution = document.getElementById('btn-solution');
    const blockOutput = document.querySelector('.output');
    const blockInput = document.querySelector('.input');
    const original = '<p>欲练葵花宝典，需引刀自宫</p>';
    const answer = '<p>欲练<a href="https://zh.wikipedia.org/zh-hans/葵花宝典" title="葵花宝典简介" target="_blank">葵花宝典</a>，需引刀自宫</p>';
    let userEntry = "";

    init();
    btnReset.addEventListener('click', init);

    btnSolution.addEventListener('click', () => {
     if (btnSolution.textContent === '显示答案') {
      blockInput.value =
      blockOutput.innerHTML = answer;
      btnSolution.textContent = '隐藏答案';
     } else {
      blockInput.value =
      blockOutput.innerHTML = userEntry;
      btnSolution.textContent = '显示答案';
     }
    });

    blockInput.addEventListener('keydown', (e) => {
     switch (e.key) {
     case 'Tab':
      e.preventDefault();
      insertAtCursor('\t');
      break;
     case "Escape":
      blockInput.blur();
      break;
     }
    });

    blockInput.addEventListener('keyup', () => {
     userEntry = blockInput.value;
     blockOutput.innerHTML = blockInput.value;
     if (btnSolution.textContent === '隐藏答案') {
      btnSolution.textContent = '显示答案';
     }
    });

    function init() {
     userEntry =
     blockOutput.innerHTML =
     blockInput.value = original;
     btnSolution.textContent = '显示答案';
    }

    function insertAtCursor(text) {
     const scrollPos = blockInput.scrollTop;
     const cursorPos = blockInput.selectionStart;

     const front = blockInput.value.substring(0, cursorPos);
     const back = blockInput.value.substring(
      blockInput.selectionEnd, blockInput.value.length);

     blockInput.value = front + text + back;
     blockInput.selectionStart =
     blockInput.selectionEnd = cursorPos + text.length;
     blockInput.focus();
     blockInput.scrollTop = scrollPos;
    }
   </script>
 </body>
</html>
```

{{ EmbedLiveSample('学习实践：为一个元素添加属性', 700, 350) }}

> **备注：** 可到 Github 在线使用这个“[代码操场](https://roy-tian.github.io/learning-area/extras/tools/playable-code)”。

### 布尔属性

有时你会看到没有值的属性，它是合法的。这些属性被称为布尔属性，他们只能有跟它的属性名一样的属性值。例如{{htmlattrxref("disabled", "input")}} 属性，他们可以标记表单输入使之变为不可用 (变灰色)，此时用户不能向他们输入任何数据。

```html
<input type="text" disabled="disabled">
```

方便起见，我们完全可以将其写成以下形式（我们还提供了一个非禁止输入的表单元素供你参考，以作为对比）：

```html
<!-- 使用 disabled 属性来防止终端用户输入文本到输入框中 -->
<input type="text" disabled>

<!-- 下面这个输入框没有 disabled 属性，所以用户可以向其中输入 -->
<input type="text">
```

上面两段 HTML 代码产生的效果如下：

{{ EmbedLiveSample('布尔属性', 700, 100, "", "", "hide-codepen-jsfiddle") }}

### 省略包围属性值的引号

当你浏览那些粗糙的 web 网站，你将会看见各种各样奇怪的标记风格，其中就有不给属性值添加引号。在某些情况下它是被允许的，但是其他情况下会破坏你的标记。例如，我们可以写一个只拥有一个 href 属性的链接，如下：

```html example-bad
<a href=https://www.mozilla.org/>收藏页面</a>
```

然而，当我们再添加一个 title 属性时就会出错，如下：

```html example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>收藏页面</a>
```

此时浏览器会误解你的标记，它会把 title 属性理解为三个属性——title 的属性值为"The“，另外还有两个布尔属性“`Mozilla`”和“`homepage`”。看下面的例子，它明显不是我们所期望的，并且在这个编码里面它会报错或者出现异常行为。试一试把鼠标移动到链接上，看会显示什么 title 属性值！

{{ EmbedLiveSample('省略包围属性值的引号', 700, 100, "", "", "hide-codepen-jsfiddle") }}

我们建议始终添加引号——这样可以避免很多问题，并且使代码更易读。

### 单引号或者双引号？

在目前为止，本章内容所有的属性都是由双引号来包裹。也许在一些 HTML 中，你以前也见过单引号。这只是风格的问题，你可以从中选择一个你喜欢的。以下两种情况都可以：

```html
<a href="http://www.example.com">示例站点链接</a>

<a href='http://www.example.com'>示例站点链接</a>
```

但你应该注意单引号和双引号不能在一个属性值里面混用。下面的语法是错误的：

```html example-bad
<a href="http://www.example.com'>示例站点链接</a>
```

在一个 HTML 中已使用一种引号，你可以在此引号中嵌套另外一种引号：

```html
<a href="http://www.example.com" title="你觉得'好玩吗'？">示例站点链接</a>
```

如果你想将引号当作文本显示在 html 中，你就必须使用[实体引用](#实体引用：在_html_中包含特殊字符)。

## 剖析 HTML 文档

学习了一些 HTML 元素的基础知识，这些元素单独一个是没有意义的。现在我们来学习这些特定元素是怎么被结合起来，从而形成一个完整的 HTML 页面的：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>我的测试站点</title>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</html>
```

分析如下：

1. `<!DOCTYPE html>`: 声明文档类型。很久以前，早期的 HTML(大约 1991 年 2 月)，文档类型声明类似于链接，规定了 HTML 页面必须遵从的良好规则，能自动检测错误和其他有用的东西。使用如下：

    ```html
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    ```

    然而这种写法已经过时了，这些内容已成为历史。只需要知道 `<!DOCTYPE html>` 是最短有效的文档声明。

2. `<html></html>`: `<html>`元素。这个元素包裹了整个完整的页面，是一个根元素。
3. `<head></head>`: `<head>`元素。这个元素是一个容器，它包含了所有你想包含在 HTML 页面中但不想在 HTML 页面中显示的内容。这些内容包括你想在搜索结果中出现的关键字和页面描述，CSS 样式，字符集声明等等。以后的章节能学到更多关于\<head>元素的内容。
4. `<meta charset="utf-8">`: 这个元素设置文档使用 utf-8 字符集编码，utf-8 字符集包含了人类大部分的文字。基本上他能识别你放上去的所有文本内容。毫无疑问要使用它，并且它能在以后避免很多其他问题。
5. `<title></title>`: 设置页面标题，出现在浏览器标签上，当你标记/收藏页面时它可用来描述页面。
6. `<body></body>`: `<body>`元素。包含了你访问页面时所有显示在页面上的内容，文本，图片，音频，游戏等等。

### 学习实践：为 HTML 文档添加一些特征

如果你想在你的本地练习写一些 HTML 页面，你可以这样做：

1. 复制上面的 HTML 页面例子。
2. 在编辑器创建一个新文件。
3. 粘贴代码到这个文件。
4. 保存为`index.html`.

> **备注：** 可在 [学习区代码仓库](https://github.com/roy-tian/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) 上查看该示例。

你可以打开浏览器看看这段代码的效果是什么样的，然后改变代码刷新浏览器看看新的结果。最开始的代码是这样的效果：

![A simple HTML page that says This is my page](template-screenshot.png)所以在这段练习中，你可以用你的电脑在本地编写运行代码，如上所述，你也可以在下面的简单可编辑窗口编辑它 (此时这个简单的可编辑窗口仅显示\<body>标签内的内容.) 我们希望你能够实践以下步骤：

- 就在{{htmlelement("body")}} 元素开始标签下方，为这个文档添加一个主标题。这个主标题应该被包含在`<h1>`开始标签和`</h1>`结束标签之间。
- 编辑这个段落以包含一些你感兴趣的文本。
- 把字词包含在开始标记`<strong>`和结束标记`</strong>`之间可以使他们以粗体显示，从而突出任何重要的字词。
- 在你的文档中添加一个超文本链接，[如前所述](#学习实践：为一个元素添加属性)。
- 在段落下方向你的文档添加一张图片，[如前所述](#空元素)。如果你尝试对不同的图片（在你的本地电脑或是在 Web 的其他位置上）添加链接，那你就更棒了。

如果写错了，可随时按【重置】按钮重新开始，如果实在想不出来，可按【显示答案】按钮查看答案。

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
 <head>
  <meta charset="utf-8">
  <style>
   body { font-family: '微软雅黑', Helvetica, Arial, sans-serif; margin: 10px; background: #f5f9fa; }
   h2 { font-size: 16px; }
   code, textarea { font-family: Consolas, Menlo, monospace; }
   .output { min-height: 50px; }
   .input { min-height: 100px; width: 95%; }
   .a11y-label { margin: 0; text-align: right; font-size: 0.7rem; width: 98%; }
   .controls { width: 96%; text-align: right; }
  </style>

 </head>
 <body>
  <h2>实时输出</h2>
  <div class="output"></div>

  <h2>可编辑代码</h2>
  <p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code> </p>
  <textarea id="code" class="input"></textarea>

  <div class="controls">
   <button id="btn-reset">重置</button>
   <button id="btn-solution">显示答案</button>
  </div>
  <script>
    const btnReset = document.getElementById('btn-reset');
    const btnSolution = document.getElementById('btn-solution');
    const blockOutput = document.querySelector('.output');
    const blockInput = document.querySelector('.input');
    const original = '<p>相思无用，惟别而已。别期若有定，千般煎熬又何如？莫道黯然销魂，何处柳暗花明？</p>';
    const answer =
`<h1>经典回忆</h1>
<p>
 相思无用，惟别而已。别期若有定，千般煎熬又何如？莫道黯然销魂，何处<strong>柳暗花明</strong>？<br>
 ——《<a href="https://zh.wikipedia.org/zh-hans/神鵰俠侶">神雕侠侣</a>》
</p>
<img src="https://roy-tian.github.io/learning-area/extras/tools/playable-code/images/sdxl.jfif">`;
    let userEntry = "";

    init();
    btnReset.addEventListener('click', init);

    btnSolution.addEventListener('click', () => {
     if (btnSolution.textContent === '显示答案') {
      blockInput.value =
      blockOutput.innerHTML = answer;
      btnSolution.textContent = '隐藏答案';
     } else {
      blockInput.value =
      blockOutput.innerHTML = userEntry;
      btnSolution.textContent = '显示答案';
     }
    });

    blockInput.addEventListener('keydown', (e) => {
     switch (e.key) {
     case 'Tab':
      e.preventDefault();
      insertAtCursor('\t');
      break;
     case "Escape":
      blockInput.blur();
      break;
     }
    });

    blockInput.addEventListener('keyup', () => {
     userEntry = blockInput.value;
     blockOutput.innerHTML = blockInput.value;
     if (btnSolution.textContent === '隐藏答案') {
      btnSolution.textContent = '显示答案';
     }
    });

    function init() {
     userEntry =
     blockOutput.innerHTML =
     blockInput.value = original;
     btnSolution.textContent = '显示答案';
    }

    function insertAtCursor(text) {
     const scrollPos = blockInput.scrollTop;
     const cursorPos = blockInput.selectionStart;

     const front = blockInput.value.substring(0, cursorPos);
     const back = blockInput.value.substring(
      blockInput.selectionEnd, blockInput.value.length);

     blockInput.value = front + text + back;
     blockInput.selectionStart =
     blockInput.selectionEnd = cursorPos + text.length;
     blockInput.focus();
     blockInput.scrollTop = scrollPos;
    }
   </script>
 </body>
</html>
```

{{ EmbedLiveSample('学习实践：为 HTML 文档添加一些特征', 700, 600)}}

### HTML 中的空白

在上面的例子中，你可能已经注意到了在代码中包含了很多的空格——这是没有必要的；下面的两个代码片段是等价的：

```html
<p>狗 狗 很 呆 萌。</p>

<p>狗 狗        很
         呆 萌。</p>
```

无论你在 HTML 元素的内容中使用多少空格 (包括空白字符，包括换行)，当渲染这些代码的时候，HTML 解释器会将连续出现的空白字符减少为一个单独的空格符。

那么为什么我们会在 HTML 元素的嵌套中使用那么多的空白呢？答案就是为了可读性 —— 如果你的代码被很好地进行格式化，那么就很容易理解你的代码是怎么回事，反之就只有聚做一团的混乱。在我们的 HTML 代码中，我们让每一个嵌套的元素以两个空格缩进。你使用什么风格来格式化你的代码取决于你 (比如所对于每层缩进使用多少个空格)，但是你应该坚持使用某种风格。

## 实体引用：在 HTML 中包含特殊字符

在 HTML 中，字符 `<`、`>`、`"`、`'` 和 `&` 是特殊字符。它们是 HTML 语法自身的一部分，那么你如何将这些字符包含进你的文本中呢，比如说如果你真的想要在文本中使用符号&或者小于号，而不想让它们被浏览器视为代码并被解释？

我们必须使用字符引用 —— 表示字符的特殊编码，它们可以在那些情况下使用。每个字符引用以符号&开始，以分号 (;) 结束。

| 原义字符 | 等价字符引用 |
| -------- | ------------ |
| <        | `&lt;`       |
| >        | `&gt;`       |
| "        | `&quot;`     |
| '        | `&apos;`     |
| &        | `&amp;`      |

在下面的例子中你可以看到两个段落，它们在谈论 web 技术：

```html
<p>HTML 中用 <p> 来定义段落元素。</p>

<p>HTML 中用 &lt;p&gt; 来定义段落元素</p>
```

在下面的实时输出中，你会看到第一段是错误的，因为浏览器会认为第二个\<p>是开始一个新的段落！第二段是正确的，因为我们用字符引用来代替了角括号（'<'和'>'符号）.

{{ EmbedLiveSample('实体引用：在 HTML 中包含特殊字符', 700, 200) }}

> **备注：** 维基百科上有一个包含所有可用 HTML 字符实体引用的列表：[XML 和 HTML 字符实体引用列表](http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)。

## HTML 注释

如同大部分的编程语言一样，在 HTML 中有一种可用的机制来在代码中书写注释 —— 注释是被浏览器忽略的，而且是对用户不可见的，它们的目的是允许你描述你的代码是如何工作的和不同部分的代码做了什么等等。如果你在半年后重新返回你的代码库，而且不能记起你所做的事情 —— 或者当你处理别人的代码的时候，那么注释是很有用的。

为了将一段 HTML 中的内容置为注释，你需要将其用特殊的记号\<!--和-->包括起来，比如：

```html
<p>我在注释外！</p>

<!-- <p>我在注释内！</p> -->
```

正如你下面所见的那样，第一段出现在了实时输出中，但是第二段却没有。

{{ EmbedLiveSample('HTML 注释', 700, 100) }}

## 总结

你已经来到了这篇文章的结尾——希望你享受基础的 HTML 学习的旅程。在这里你应该可以理解 HTML 语言的全貌、它基本的工作原理。你应该还学会了一些元素和属性的使用。在这个模块的后续文章中，我们会深入一些你已经见过的东西的细节，并且介绍一些新的 HTML 的特性。未完待续！

> **备注：** 现在，你将开始学习更多关于 HTML 的知识，你可能也想了解一些层叠样式列表（[CSS](/zh-CN/docs/Learn/CSS)）的基础知识。CSS 是一种用来设计网页样式的语言（比如，用它改变字体、颜色或页面布局等）。你很快就会发现，HTML 和 CSS 能很好地协调配合。

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

## 本章目录

- [开始学习 HTML](/zh-CN/docs/learn/HTML/Introduction_to_HTML/Getting_started)
- [“头”里有什么？HTML 元信息](/zh-CN/docs/learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML 文字处理初步](/zh-CN/docs/learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [创建超链接](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [高级文字格式](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [文档和站点结构](/zh-CN/docs/learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [HTML 调试](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [课程测验：为信件排版](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [课程测验：构建内容丰富的网页](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
