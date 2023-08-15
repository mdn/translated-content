---
title: HTML：无障碍的良好基础
slug: Learn/Accessibility/HTML
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

在网页开发的过程中，用正确的 HTML 标签来表达正确的意图，可以提升网页的无障碍。这篇文章将会详细介绍如何最大化地提升网页的无障碍。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        有一定的 HTML 基础（可参阅
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML">HTML 入门</a
        >），理解<a href="/zh-CN/docs/Learn/Accessibility/What_is_accessibility"
          >什么是无障碍</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>了解无障碍为网页带来的好处和如何在网页中进行实现。</td>
    </tr>
  </tbody>
</table>

## HTML 和无障碍

在学习 HTML 的过程当中，经常可以看到这样一个主题：HTML 语义化的重要性。意思是指我们应尽可能地用正确的 HTML 标签来表达正确的意图。

你可能在想，为什么语义化对于一个网页来说如此重要。总的来说，正确的语义化可使 CSS 和 JavaScript 更为便利地操作网页的样式和行为。例如，一个用来操作视频播放的按钮可以写成这样一种形式：

```html
<div>Play video</div>
```

接下来你将看到一种更好的写法，它使用了正确的 HTML 标签，看上去更加合理：

```html
<button>Play video</button>
```

`<button>`标签不仅提供了按钮的样式（虽然有时会重新编写样式），还提供了键盘的无障碍，如：使用 tab 键更换按钮，使用回车键点击按钮。

如果你在项目的一开始就使用 HTML 语义化，不仅不会花更多的时间，而且又有以下的无障碍优点：

1. **更便于开发** — 如上所述，你可以使 HTML 更易于理解，并且可以毫不费力的获得一些功能。
2. **更适配移动端** — 语义化的 HTML 文件比非语义化的 HTML 文件更加轻便，并且更易于响应式开发。
3. **更便于 SEO 优化** — 比起使用非语义化的\<div>标签，搜索引擎更加重视在“标题、链接等”里面的关键字，使用语义化可使网页更容易被用户搜索到。

让我们来继续学习 HTML 语义化实现细则。

> **备注：** 在本地计算机上设置屏幕阅读器是一个不错的主意，因此您可以对下面显示的示例进行一些测试。更多内容请查阅 [Screenreaders guide](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders)。

## 良好的语义

上面我们讨论了语义化的重要性以及为什么我们要使用正确的 HTML 标签来表达正确的意图。语义化是我们不可忽视的一部分，因为它往往决定了网页的无障碍。

在网络上，事实上人们用 HTML 标签做一些非常奇怪的事情。人们滥用一些即将废弃或已经废弃的标签。不管在什么情况下，我们都应该将这些错误的代码改正过来。

话虽如此，但是有些情况我们往往不能摆脱错误的标签，例如一个网页是从服务端的框架生成的，或者网页上存在第三方的内容（如广告），这些都是我们所不能控制的。

我们的目标并不是“全有或全无”，实际上，你所做的每一个改进都可以提升网页的无障碍。

### 文本内容

对于屏幕阅读器用户来讲，最佳辅助功能之一是拥有标题，段落，列表等内容的良好结构。一个好的语义示例可能如下所示：

```html
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<ol>
  <li>Here is</li>
  <li>a list for</li>
  <li>you to read</li>
</ol>

<h2>My subheading</h2>

<p>
  This is the first subsection of my document. I'd love people to be able to
  find this content!
</p>

<h2>My 2nd subheading</h2>

<p>
  This is the second subsection of my content. I think is more interesting than
  the last one.
</p>
```

我们已经准备了一个更长的文本版本，供您试用于屏幕阅读器（请查看 [good-semantics.html](http://mdn.github.io/learning-area/accessibility/html/good-semantics.html)）。如果您尝试在此过程中导航，您将看到这非常容易导航：

1. 屏幕阅读器会在您浏览内容时读取每个标题，通知您标题是什么，段落是什么等。
2. 它在每个元素之后停止，让你以任何适合你的速度前进。
3. 你可以在许多屏幕阅读器中跳到下一个/上一个标题。
4. 你还可以在许多屏幕阅读器中显示所有标题的列表，使您可以像使用便利的目录一样使用它们以查找特定内容。

人们有时会使用表现性 HTML 和换行符来编写标题，段落等，如下所示：

```html
<font size="7">My heading</font> <br /><br />
This is the first section of my document.
<br /><br />
I'll add another paragraph here too.
<br /><br />
1. Here is
<br /><br />
2. a list for
<br /><br />
3. you to read
<br /><br />
<font size="5">My subheading</font>
<br /><br />
This is the first subsection of my document. I'd love people to be able to find
this content!
<br /><br />
<font size="5">My 2nd subheading</font>
<br /><br />
This is the second subsection of my content. I think is more interesting than
the last one.
```

如果你使用屏幕阅读器试用更长内容的版本（请查阅 [bad-semantics.html](http://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)），你不会有一个很好的经验 — 屏幕阅读器没有任何东西可以用作路标，所以你无法检索有用的目录，整个页面被看作一个巨大的块，所以它只是一次读出所有的内容。

除了无障碍之外，还有其他一些问题 - 使用 CSS 设计内容的风格更难，或者使用 JavaScript 来操作它比较困难，因为没有可用作选择器的元素。

#### 使用通俗易懂的语言

你使用的语言也会影响无障碍。一般来说，你应该使用不太复杂的清晰语言，不要使用不必要的行话或俚语。这不仅有利于有认知或其他残疾的人；它有利于那些没有用母语写作的读者，年轻人...事实上是每个人！除此之外，你应该尽量避免使用没有被屏幕阅读器清楚读出的语言和字符。例如：

- 如果可以避免的话，不要用破折号。写 5 到 7，来替代 5-7。
- 展开缩写 — 写 January，来替代 Jan。
- 展开首字母缩略词，至少一次或两次。例如写明“超文本标记语言”（Hypertext Markup Language），而不是直接用缩写 HTML。

### 页面布局

在旧时代，人们曾经使用 HTML 表格创建页面布局 - 使用不同的表格单元格来包含页眉，页脚，边栏，主要内容栏等。这不是一个好主意，因为屏幕阅读器可能会读出给人造成困惑的结果，特别是如果布局复杂，并且有许多嵌套表格的话。

试试我们的例子[table-layout.html](http://mdn.github.io/learning-area/accessibility/html/table-layout.html)，它看起来像这样：

```html
<table width="1200">
  <!-- main heading row -->
  <tr id="heading">
    <td colspan="6">
      <h1 align="center">Header</h1>
    </td>
  </tr>
  <!-- nav menu row  -->
  <tr id="nav" bgcolor="#ffffff">
    <td width="200">
      <a href="#" align="center">Home</a>
    </td>
    <td width="200">
      <a href="#" align="center">Our team</a>
    </td>
    <td width="200">
      <a href="#" align="center">Projects</a>
    </td>
    <td width="200">
      <a href="#" align="center">Contact</a>
    </td>
    <td width="300">
      <form width="300">
        <input type="search" name="q" placeholder="Search query" width="300" />
      </form>
    </td>
    <td width="100">
      <button width="100">Go!</button>
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- main content and aside row -->
  <tr id="main">
    <td id="content" colspan="4" bgcolor="#ffffff">
      <!-- main content goes here -->
    </td>
    <td id="aside" colspan="2" bgcolor="#ff80ff" valign="top">
      <h2>Related</h2>

      <!-- aside content goes here -->
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- footer row -->
  <tr id="footer" bgcolor="#ffffff">
    <td colspan="6">
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </td>
  </tr>
</table>
```

如果您尝试使用屏幕阅读器浏览此内容，它可能会告诉您需要查看一个表格（尽管某些屏幕阅读器可以猜测表格布局和数据表格之间的区别）。然后，您可能（取决于您使用的屏幕阅读器）必须需要进入到表格对象中，并单独地查看表格的内容，然后再次离开表格，以继续浏览其他内容。

用表格布局网页是过去旧时代的遗迹 - 在“CSS”在浏览器中并不普遍被支持时，它们是有意义的，但是它们会为屏幕阅读器用户造成混淆，并且由于许多其他原因变得很糟糕（滥用表格，可能因此需要更多的标记，使设计更不灵活）。不要这样做！

您可以通过将您之前的体验与 [更现代的网站结构示例](http://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/) 进行比较，来验证这些声明，该示例如下所示：

```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <!-- main navigation in here -->
</nav>

<!-- Here is our page's main content -->
<main>
  <!-- It contains an article -->
  <article>
    <h2>Article heading</h2>

    <!-- article content in here -->
  </article>

  <aside>
    <h2>Related</h2>

    <!-- aside content in here -->
  </aside>
</main>

<!-- And here is our main footer that is used across all the pages of our website -->

<footer>
  <!-- footer content in here -->
</footer>
```

如果您使用屏幕阅读器阅读更现代的结构示例，则会看到布局标记不再会妨碍内容的读取。它在代码大小方面也更加精简和小巧，这意味着代码更容易维护，并且用户下载的带宽更少（特别适合慢速连接的用户）。

创建布局时的另一个考虑因素是使用 HTML5 语义元素，如上例所示（请参阅[此内容部分](/zh-CN/docs/Web/HTML/Element#Content_sectioning)）——你只能使用嵌套的 {{htmlelement("div")}} 元素创建布局，但最好使用适当的分段元素包裹您的主导航（{{htmlelement("nav")}}），`footer`（{{htmlelement("footer")}}），重复内容单元（{{htmlelement("article")}}）等。这些为屏幕阅读器（和其他工具）提供额外的语义，为用户提供有关他们正在浏览的内容的额外信息（请参阅[屏幕阅读器支持的新的 HTML5 章节元素](https://web.archive.org/web/20220331133701/https://www.weba11y.com/blog/2016/04/22/screen-reader-support-for-new-html5-section-elements/)，了解屏幕阅读器的支持是什么样的原理）。

> **备注：** 除了您的内容具有良好的语义和有吸引力的布局之外，它的源代码顺序应该是合理的 - 您可以随时将它放在您想要使用 CSS 的位置，但是您应该先从源代码开始，如此这样，屏幕阅读器读取给他们的内容将会非常便于理解。

### UI 控制

通过 UI 控件，我们指的是与用户交互的 Web 文档的主要部分 - 通常是按钮，链接和表单控件。在本节中，我们将介绍创建此类控件时要注意的基本无障碍问题。稍后关于 WAI-ARIA 和多媒体的文章将着眼于 UI 无障碍的其他方面。

UI 控件无障碍的一个关键方面是，默认情况下，浏览器允许用户通过键盘操作它们。您可以使用我们的 [native-keyboard-accessibility.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) 示例（请参阅 [源代码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ）。尝试此操作 - 在新选项卡中打开此项，然后尝试按 Tab 键; 几次按下后，您应该看到标签焦点开始移动到不同的元素; 在每个浏览器中，获得焦点元素都会有一个“突出显示“的默认样式（它在不同浏览器之间略有不同），以便您可以确定当前哪些元素获得焦点。

![](button-focused-unfocused.png)

接着你可以按 Enter / Return 来追踪当前获得焦点的链接，或者按按钮来实现（我们已经使用 JavaScript 使按钮同时显示提示消息），或者开始在文本输入中输入文本（其他表单元素具有不同的控件，例如 {{htmlelement("select")}} 元素拥有自己的显示选项，可以使用向上和向下箭头键进行循环）。

> **备注：** 不同的浏览器可能有不同的键盘控制选项。请参阅[使用本机键盘辅助功能](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#使用键盘)获取更多详细信息。

实际上，您只需使用适当的元素即可免费获得此功能，例如，

```html
<h1>Links</h1>

<p>This is a link to <a href="https://www.mozilla.org">Mozilla</a>.</p>

<p>
  Another link, to the
  <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.
</p>

<h2>Buttons</h2>

<p>
  <button data-message="This is from the first button">Click me!</button>
  <button data-message="This is from the second button">Click me too!</button>
  <button data-message="This is from the third button">And me!</button>
</p>

<h2>Form</h2>

<form>
  <div>
    <label for="name">Fill in your name:</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Enter your age:</label>
    <input type="text" id="age" name="age" />
  </div>
  <div>
    <label for="mood">Choose your mood:</label>
    <select id="mood" name="mood">
      <option>Happy</option>
      <option>Sad</option>
      <option>Angry</option>
      <option>Worried</option>
    </select>
  </div>
</form>
```

这意味着适当地使用链接，按钮，表单元素和标签（包括表单控件的 `{{htmlelement("label")}}` 元素）。

然而，人们有时候会用 HTML 做奇怪的事情。例如，您有时会看到使用 `{{htmlelement("div")}}` 标记的按钮，例如：

```html
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

但是不建议使用这样的代码 - 你会立即失去本机键盘的无障碍。但如果你使用了`{{htmlelement("button")}}` 元素，你将可以通过键盘控制。此外你也将不会获得任何的按钮默认拥有的 CSS 样式。

#### 重新建立键盘的无障碍

重新添加这些优点需要一些工作（您可以在我们的 [fake-div-buttons.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) 示例中使用示例代码 - 另请参阅 [源代码](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) ）。在这里，我们通过赋予每个 `<div>` 按钮属性`tabindex =“0”` 来使它能够被聚焦（包括通过选项卡）：

```html
<div data-message="This is from the first button" tabindex="0">Click me!</div>
<div data-message="This is from the second button" tabindex="0">
  Click me too!
</div>
<div data-message="This is from the third button" tabindex="0">And me!</div>
```

基本上，[`tabindex`](/zh-CN/docs/Web/HTML/Global_attributes#tabindex) 属性主要用于允许 tabbable 元素具有自定义 Tab 键顺序（以正数顺序指定），而不是仅按其默认源顺序进行标记。这几乎总是一个糟糕的主意，因为它可能会造成重大混乱。例如，如果布局以与源代码非常不同的视觉顺序显示事物，而且你想让事情更符合逻辑。这里 `tabindex` 有另外两个选项：

- `tabindex="0"` — 如上所述，该值允许 通常不可放置的元素（tabbable elements）变为可放置的。这是 tabindex 最有用的的地方。
- `tabindex="-1"` — 这允许 通常不可放置的元素（tabbable elements）以编程的方式接收焦点，例如，通过 JavaScript，或作为链接的目标。

虽然上面的添加允许我们用 `tab` 选择按钮，但它不允许我们通过 `Enter / Return` 键来激活它们。要做到这一点，我们必须添加下面的 JS 小绝招（JavaScript trickery）：

```js
document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    // The Enter/Return key
    document.activeElement.onclick(e);
  }
};
```

在这里，我们向文档对象 `document` 添加一个侦听器，以检测什么时候键盘上按下按钮 我们通过事件对象 `event object` 的 `keyCode` 属性，检查用户按下了哪个按钮; 如果它是与 `Return / Enter` 匹配的关键代码，我们通过按钮的 onclick 函数，即 `document.activeElement.onclick()` 。`activeElement` 提供给我们页面当前被 focused 的元素。

我们使用`document.activeElement.onclick（）`运行存储在按钮的 onclick 处理函数中的函数。 `activeElement` 为我们提供了当前关注页面的元素。

> **备注：** 您应该记住，只有通过事件处理程序属性（例如 onclick）设置原始事件处理程序，此技巧才会起作用。 `addEventListener` 将不起作用。

这对于重新构建功能而言是一个额外的麻烦。而且这肯定会带来其他问题。使用正确的元素处理正确的工作是非常重要的。

#### 有意义的文字标签

用户界面控件的 文本标签 对所有用户都非常有用，但是对于残疾用户来说，让他们正确使用尤其重要。

你应该确保你的按钮和链接文本标签是可以理解和独特的。不要使用“点击这里”（"Click here"）此类的标签，因为屏幕阅读器用户有时会列出按钮和表格控件列表。以下屏幕截图显示了我们的控件在 Mac 上由 VoiceOver 列出。

![](voiceover-formcontrols.png)

确保您的标签在上下文中有意义，可以单独阅读，也可以在他们所在的段落的上下文中进行阅读。例如，下面显示了良好链接文本的示例：

```html
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

但这是不好的链接文字：

```html
<p>
  Whales are really awesome creatures. To find more out about whales,
  <a href="whales.html">click here</a>.
</p>
```

> **备注：** 您可以在我们的[创建超链接](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)文章中找到更多关于链接实现和最佳实践的信息。您还可以在 [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) 和 [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) 中看到一些好的和不好的例子。

表单标签也很重要，可以让您了解您需要输入每个表单输入的内容。以下似乎是一个足够合理的例子：

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

但是，这对于残疾用户来说并不是那么有用。在上面的示例中，没有任何内容将标签与表单输入明确关联。因此如果看不到它，请让用户明确该如何填写。如果您使用某些屏幕阅读器访问该屏幕，则只能按照“编辑文本”（“edit text”）的方式给出说明。

以下是一个更好的例子：

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

通过这样的代码，标签将清晰地与输入相关联; 描述将更像如下这种形式：“填写你的姓名：编辑文本”。

![](voiceover-good-form-label.png)

作为额外的好处，在大多数将标签与表单输入相关联的浏览器中，您可以单击标签来 选择/激活 表单元素。这给输入一个更大的可选中区域，使其更容易选择。

> **备注：** 您可以在 [good-form.html](http://mdn.github.io/learning-area/accessibility/html/good-form.html) 和 [bad-form.html](http://mdn.github.io/learning-area/accessibility/html/bad-form.html) 中看到一些好的和不好的表单示例。

## 可访问的表格

基本的表格（译者注：“data table”被翻译成“表格”）可以用非常简单的标记来编写，例如：

```html
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Gender</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
    <td>Male</td>
  </tr>
  <tr>
    <td>Elva</td>
    <td>8</td>
    <td>Female</td>
  </tr>
  <tr>
    <td>Freida</td>
    <td>5</td>
    <td>Female</td>
  </tr>
</table>
```

但是这有问题 - 屏幕阅读器用户无法将行或列作为数据分组关联在一起。要做到这一点，你需要知道标题行是什么，以及它们是否在行，列等标题上。这只能在上面的表中以可视化方式完成（参见 [bad-table.html](http://mdn.github.io/learning-area/accessibility/html/bad-table.html) ，并自己尝试这个例子）。

现在看看我们的 [punk bands table example](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html) - 您可以在这里看到一些辅助工具（accessibility aids）：

- 表头使用 `{{htmlelement("th")}}` 元素定义 - 您还可以使用 `scope` 属性指定它们是行还是列的标题。这提供给了屏幕阅读器可以理解的完整数据组。
- `{{htmlelement("caption")}}` 元素和 `<table>` `summary` 属性都执行类似的工作 - 它们充当表格的替代文本，为屏幕阅读器用户提供有用的表格内容快速摘要。 `<caption>` 通常是首选，因为它使内容可供视力良好的用户访问，而且他们也可能会发现它很有用。你并不需要两者都使用！。

> **备注：** 有关可访问数据表的更多详细信息，请参阅我们的 [HTML 表格高级功能和无障碍](/zh-CN/docs/Learn/HTML/Tables/Advanced) 文章。

## 文本替代品

尽管文本内容本身是可访问的，但对于多媒体内容而言也不一定是这样 - 图像/视频内容不能被视觉障碍人士看到，并且听觉障碍人士不能听到音频内容。稍后我们将在可访问多媒体文章中详细介绍视频和音频内容，但对于本文，我们将探讨低微（humble）的 `{{htmlelement("img")}}` 元素的无障碍。

我们编写了一个简单的例子， [accessible-image.html](http://mdn.github.io/learning-area/accessibility/html/accessible-image.html) ，它具有相同图像的四个副本：

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur" />

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like
  a human, with small arms, and a large head with lots of sharp teeth.
</p>
```

第一张图片，当用屏幕阅读器查看时，并不真正为用户提供很多帮助 - 例如 VoiceOver 会读出“/dinosaur.png，image” 。它读出文件名以尝试提供一些帮助。在这个例子中，用户至少知道它是某种恐龙，但通常文件可以用机器生成的文件名（例如来自数码相机）上传，这些文件名可能不会提供图像内容的信息。

> **备注：** 这就是为什么你不应该在图像中包含文本内容 - 屏幕阅读器根本无法访问它。还有其他的缺点 - 你不能选择它并复制/粘贴它。不要这样做！

当屏幕阅读器遇到第二张图像时，它会读出完整的 `alt` 属性 - “红色霸王龙雷克斯：一只像人一样直立的双腿恐龙，手臂小，头部大而锋利。”

这突出了不仅在所谓的替代文本不可用的情况下使用有意义的文件名的重要性，而且还确保尽可能地在替换属性 `alt` 中提供替代文本。请注意，`alt` 属性的内容应始终提供图像的直接表示以及它在视觉上传达的内容。任何个人知识或额外描述都不应该包含在这里，因为它对以前没有碰到过这个图像的人没有用处。

需要考虑的一件事是，你的图片是否在你的内容中有意义，或者它们纯粹是为了视觉装饰，所以没有意义。如果它们是装饰性的，最好将它们包含在页面中作为 CSS 背景图像。

> **备注：** 请阅读 [HTML 中的图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) 和 [响应式图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) 以获得更多关于图片实施和最佳做法的信息。

如果您确实想要提供额外的上下文信息，则应该将其放在图像周围的文本中，或放置在“标题” `title` 属性中，如上所示。在这种情况下，大多数屏幕阅读器会读出替代文本，标题属性和文件名。此外，鼠标滑过时，浏览器会将 `title` 的内容作为工具提示的形式显示出来。

![](title-attribute.png)

我们再来看看第四种方法：

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus ...</p>
```

在这种情况下，我们不使用“alt”属性 —— 相反，我们已经将图像的描述作为常规文本段落给出，并给出它的“id”，然后使用“`aria-labelledby`”属性并链接到对应“`id`”，它使屏幕阅读器将该段落用作该图像的替代文本/标签。如果您想将相同的文本用作多个图像的标签，这是特别有用的 - 这是使用“`alt`”不可能实现的。

> **备注：** “`aria-labelledby`”是 [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) 规范的一部分，它允许开发人员在其标记中添加额外的语义，以提高屏幕阅读器的无障碍。要了解更多关于它是如何工作的，请阅读我们的 [WAI-ARIA Basics](/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics) 文章。

### 其他文字替代机制

图像还有其他机制可用于提供描述性文字。例如，有一个 `longdesc` 属性用于指向包含图像的扩展描述的单独 Web 文档，例如：

```html
<img src="dinosaur.png" longdesc="dino-info.html" />
```

这听起来像个好主意，尤其是对于像大图表这样的信息图，其中有很多信息可能可以表示为可访问的数据表（请参阅上一部分）。但是，屏幕阅读器不支持`longdesc`，非屏幕阅读器用户完全无法访问内容。将长描述包含在与图像相同的页面中，或者通过常规链接链接到它可能会更好。

HTML5 包含两个新元素 - `{{htmlelement("figure")}}` 和`{{htmlelement("figcaption")}}` ，它们应该将某种形象（可以是任何东西，不一定是图像）与数字标题相关联：

```html
<figure>
  <img src="dinosaur.png" alt="The Mozilla Tyrannosaurus" />
  <figcaption>
    A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a
    human, with small arms, and a large head with lots of sharp teeth.
  </figcaption>
</figure>
```

不幸的是，大多数屏幕阅读器似乎并没有将图形标题与他们的图形相关联，但是元素结构对 CSS 样式非常有用，并且它提供了一种方法在源代码中将图像放置在旁边。

### 空 alt 属性

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

可能有时候图像被包含在页面的设计中，但其主要目的是用于视觉装饰。在上面的代码示例中，您会注意到图像的“alt”属性为空 - 这是为了让屏幕阅读器识别图像，但不试图描述图像（阅读器只是说“图像”等类似的语句）。

使用空白“alt”而不包含它的原因是因为如果没有提供“alt”，许多屏幕阅读器会公布整个图像 URL。在上面的示例中，图像充当与其关联的标题的视觉装饰。在这种情况下，以及在图像只是装饰并且没有内容值的情况下，您应该在图像上放置一个空白的“alt”。另一种选择是使用 aria role 属性 `role =“presentation”` - 这也会阻止屏幕阅读器读出替代文本。

> **备注：** 如果可能的话，你应该使用 CSS 来显示只有装饰的图像。

## 总结

您现在应该精通编写大多数场合可访问的 HTML。我们的 WAI-ARIA 基础知识文章也将填补这些知识中的一些空白，但本文已经关注了此基础知识。接下来，我们将探索 CSS 和 JavaScript，以及无障碍如何受其好坏影响。

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
