---
title: 样式化 Web 表单
slug: Learn_web_development/Extensions/Forms/Styling_web_forms
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

在前几篇文章中，我们介绍了如何用 HTML 创建网页表单。现在，我们将介绍如何使用 [CSS](/zh-CN/docs/Web/CSS) 来设置表单样式。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        对 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a> 和 <a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 的基本理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解样式化表单背后的问题，学习一些实用的基本样式技术。
      </td>
    </tr>
  </tbody>
</table>

## 表单微件样式设计的挑战

### 历史

1995 年，[HTML 2 规范](https://www.ietf.org/rfc/rfc1866.txt)引入了表单控件（又称“表单微件”或“表单元素”）。但 CSS 直到 1996 年底才发布，而且大多数浏览器在几年后才支持 CSS；因此，在此期间，浏览器依赖底层操作系统来渲染表单部件。

即使有了 CSS，浏览器供应商起初也不愿意让表单元素具有样式，因为用户已经习惯了各自浏览器的外观。但现在情况已经发生了变化，除了少数例外情况，表单部件现在大部分都是可样式化的。

### 微件类型

#### 易于样式化

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}} 和 {{HTMLElement("legend")}}
3. 单行文本 {{HTMLElement("input")}}（如输入文本、url、电子邮件），但 [`<input type="search">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/search) 除外。
4. 多行文本 {{HTMLElement("textarea")}}
5. 按钮（包括 {{HTMLElement("input")}} 和 {{HTMLElement("button")}}）
6. {{HTMLElement("label")}}
7. {{HTMLElement("output")}}

#### 难以样式化

- 复选框和单选按钮
- [`<input type="search">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/search)

[表单样式化进阶](/zh-CN/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)一文介绍了如何设置这些样式。

#### 仅靠 CSS 无法对内部结构进行样式设计

- [`<input type="color">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/color)
- 与日期相关的控件，如 [`<input type="datetime-local">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="range">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/range)
- [`<input type="file">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/file)
- 涉及到创建下拉部件的元素，包括 {{HTMLElement("select")}}、{{HTMLElement("option")}}、{{HTMLElement("optgroup")}} 和 {{HTMLElement("datalist")}}。
- {{HTMLElement("progress")}} 和 {{HTMLElement("meter")}}

例如，日期选择器的日历和点击时会显示选项列表的 \<select> 按钮不能仅使用 CSS 进行样式设计。

[表单样式化进阶](/zh-CN/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)和[如何构建自定义表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)两篇文章介绍了如何设置这些样式。

> [!NOTE]
> 一些专有的 CSS 伪元素（如 {{cssxref('::-moz-range-track')}}）可以为此类内部组件设计样式，但它们在不同浏览器之间并不一致，因此并不十分可靠。我们稍后会提到。

## 对简单的表单微件进行样式设计

可以使用[你的首个表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/Your_first_form)和 [CSS 构建](/zh-CN/docs/Learn_web_development/Core/Styling_basics)文章中的技术对上一节中“易于样式化”的微件进行样式设计。还有一些特殊的选择器——[UI 伪类](/zh-CN/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)——可以根据用户界面的当前状态来设计样式。

我们将在本文结尾举例说明，但首先，这里有一些值得了解的表单样式的特殊方面。

### 字体和文本

CSS 字体和文本功能可轻松用于任何微件（是的，可以将 {{cssxref("@font-face")}} 用于表单微件）。不过，浏览器的行为往往不一致。默认情况下，某些微件不会从其父代继承 {{cssxref("font-family")}} 和 {{cssxref("font-size")}}。许多浏览器会使用系统默认的外观。为了使表单的外观与其他内容保持一致，可以在样式表中添加以下规则：

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

{{cssxref('inherit')}} 属性值会使属性值与其父元素属性的计算值相匹配；继承父元素的值。

下面的截图显示了两者的区别。左边是 MacOS 上 Chrome 浏览器中 `<input type="text">`、`<input type="date">`、{{htmlelement('select')}}、{{htmlelement('textarea')}}、`<input type="submit">` 和 `<button>` 的默认渲染结果，使用的是该平台的默认字体样式。右边是应用了上述样式规则的相同元素。

![具有默认和继承字体系列的表单控件。默认情况下，有些类型是有衬线字体，有些是无衬线字体。继承应将所有类型的字体更改为父类的字体族，在本例中就是段落。奇怪的是，提交类型的输入并不继承父级段落。](forms_fontfamily.png)

默认设置在许多方面存在差异。继承者应将其字体更改为父代的字体家族——在本例中，即父代容器的默认衬线字体。它们都能做到，但有一个奇怪的例外——在 Chrome 浏览器中，`<input type="submit">` 不能从父段落继承。相反，它使用 {{cssxref('font-family#Values', 'font-family: system-ui')}}。这也是使用 `<button>` 元素而非等价 input 类型的另一个原因！

关于使用系统默认样式的表单更好看，还是使用为匹配的内容而设计的自定义样式的表单更好看，有很多争论。作为网站或 Web 应用程序的设计者，你可以自行决定。

### 盒子尺寸

所有文本字段都完全支持 CSS 盒模型的所有相关属性，例如 {{cssxref("width")}}、{{cssxref("height")}}、{{cssxref("padding")}}、{{cssxref("margin")}} 以及 {{cssxref("border")}}。不过，和以前一样，浏览器在显示这些微件时会依赖系统默认样式。你可以自行定义如何将它们融入内容。如果你想保持这些部件的原生观感，那么如果你想给它们一个一致的大小，就会遇到一点困难。

**这是因为每个微件都有自己的边框、外边距和内边距规则**。要为多个不同的微件提供相同的尺寸，可以使用 {{cssxref("box-sizing")}} 属性以及其他属性的一些一致值：

```css
input,
textarea,
select,
button {
  width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

在下面的截图中，左栏显示了 `<input type="radio">`、`<input type="checkbox">`、`<input type="range">`、`<input type="text">`、`<input type="date">`、{{htmlelement('select')}}、{{htmlelement('textarea')}}、`<input type="submit">`和 {{htmlelement('button')}} 的默认渲染结果。右栏则显示了应用了上述规则的相同元素。请注意，尽管平台对每种微件都有默认规则，但我们仍能确保所有元素占用相同的空间。

![盒模型对大多数 input 类型有效。](boxmodel_formcontrols1.png)

从截图中可能看不出的是，单选框和复选框控件看起来还是一样的，但它们的居中位置是 {{cssxref('width')}} 属性提供的 150px 水平空间。其他浏览器可能不会将控件居中，但它们会遵守分配的空间。

### 图例摆放

{{HTMLElement("legend")}} 元素的样式设计没问题，但要控制它的位置就有点麻烦了。默认情况下，它总是位于 {{HTMLElement("fieldset")}} 父元素的顶部边框上方，靠近左上角。如果要将其置于其他位置，例如 fieldset 内部或左下角附近，则需要依靠定位。

看看下面这个示例：

{{EmbedGHLiveSample("learning-area/html/forms/native-form-widgets/positioned-legend.html", '100%', 400)}}

为了以这种方式定位图例，我们使用了以下 CSS（为简洁起见，删除了其他声明）：

```css
fieldset {
  position: relative;
}

legend {
  position: absolute;
  bottom: 0;
  right: 0;
}
```

`<fieldset>` 也需要定位，以便使 `<legend>` 相对于它定位（否则 `<legend>` 将相对于 `<body>` 定位）。

{{HTMLElement("legend")}} 元素对于无障碍辅助功能非常重要，它将作为字段集内每个表单元素标签的一部分被辅助技术识别，但使用类似上述的技术也没有问题。图例内容仍将以相同的方式显示，只是视觉位置发生了变化。

> [!NOTE]
> 也可以使用 {{cssxref("transform")}} 属性来辅助定位 `<legend>`。但是，当使用 `transform: translateY();` 等属性定位时，它虽然移动了，但却在 `<fieldset>` 边框中留下了一个难看的缺口，而且很难消除。

## 一个具体的样式设计示例

让我们来看一个如何为 HTML 表单设计样式的具体示例。我们将制作一个外观精美的“明信片”联系表单；[请参见此处的完成版](https://mdn.github.io/learning-area/html/forms/postcard-example/)。

如果你想学习这个示例，请将我们的 [postcard-start.html 文件](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html)拷贝到本地，然后按照下面的说明操作。

### HTML

与我们在[本指南第一篇文章](/zh-CN/docs/Learn_web_development/Extensions/Forms/Your_first_form)中使用的示例相比，HTML 只是稍微复杂一些；它只是多了几个 ID 和一个标题。

```html
<form>
  <h1>to: Mozilla</h1>

  <div id="from">
    <label for="name">from:</label>
    <input type="text" id="name" name="user_name" />
  </div>

  <div id="reply">
    <label for="mail">reply:</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div id="message">
    <label for="msg">Your message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Send your message</button>
  </div>
</form>
```

将以上代码添加到 HTML 的 body 部分。

### 整理资源文件

这就是有趣的开始！在开始编码之前，我们还需要三种额外的资源：

1. [明信片背景](background.jpg)——下载该图片，并将其保存在与需要处理的 HTML 文件相同的目录下。
2. 打字机字体：[来自 dafont.com 的“Mom's Typewriter”字体](https://www.dafont.com/moms-typewriter.font?back=theme)——将 TTF 文件下载到与上述相同的目录中。
3. 手绘字体：[来自 dafont.com 的“Journal”字体](https://www.dafont.com/journal.font)——将 TTF 文件下载到与上述相同的目录中。

在开始使用之前，你的字体还需要进一步处理：

1. 访问 fontsquirrel.com 的 [Web 字体生成器](https://www.fontsquirrel.com/tools/webfont-generator)工具。
2. 使用表单上传字体文件，生成 Web 字体工具包。将该工具包下载到你的电脑上。
3. 解压缩提供的压缩文件。
4. 在解压后的内容中，你会发现一些字体文件（在撰写本文时，有两个 `.woff` 文件和两个 `.woff2` 文件；将来可能会有变化）。将这些文件复制到一个名为 fonts 的目录中，该目录与之前的目录相同。我们为每种字体使用了两个不同的文件，以最大限度地提高浏览器兼容性；请参阅我们的 [Web 字体](/zh-CN/docs/Learn_web_development/Core/Text_styling/Web_fonts)文章，了解更多信息。

### CSS

现在，我们可以为示例编写 CSS。在 {{htmlelement("style")}} 元素内逐一添加下图所示的所有代码块。

#### 总体布局

首先，我们要定义 {{cssxref("@font-face")}} 规则，并在 {{HTMLElement("body")}} 和 {{HTMLElement("form")}} 元素上设置所有基本样式。如果 fontsquirrel 的输出与我们上面描述的不同，可以在下载的 Web 字体工具包的 `stylesheet.css` 文件中找到正确的 `@font-face` 块（需要用它们替换下面的 `@font-face` 块，并更新字体文件的路径）：

```css
@font-face {
  font-family: "handwriting";
  src:
    url("fonts/journal-webfont.woff2") format("woff2"),
    url("fonts/journal-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "typewriter";
  src:
    url("fonts/momot___-webfont.woff2") format("woff2"),
    url("fonts/momot___-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  font: 1.3rem sans-serif;
  padding: 0.5em;
  margin: 0;
  background: #222;
}

form {
  position: relative;
  width: 740px;
  height: 498px;
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;
  background: #fff url(background.jpg);

  /* we create our grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10em 1em 1em 1em;
}
```

请注意，我们使用了 [CSS 网格](/zh-CN/docs/Web/CSS/Guides/Grid_layout)和[弹性盒](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout)来布局表单。这样，我们就可以轻松定位元素，包括标题和所有表单元素：

```css
h1 {
  font:
    1em "typewriter",
    monospace;
  align-self: end;
}

#message {
  grid-row: 1 / 5;
}

#from,
#reply {
  display: flex;
}
```

#### 标签与控件

现在，我们可以开始处理表单元素本身了。首先，确保 {{HTMLElement("label")}} 的字体正确：

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

文本字段需要一些通用规则。换句话说，我们删除了它们的 {{cssxref("border")}} 和 {{cssxref("background")}}，并重新定义了它们的 {{cssxref("padding")}} 和 {{cssxref("margin")}}：

```css
input,
textarea {
  font:
    1.4em/1.5em "handwriting",
    cursive,
    sans-serif;
  border: none;
  padding: 0 10px;
  margin: 0;
  width: 80%;
  background: none;
}
```

当其中一个字段获得焦点时，我们会用浅灰色透明背景来突出显示它们（为了便于使用和键盘无障碍，焦点样式总是很重要的）：

```css
input:focus,
textarea:focus {
  background: rgb(0 0 0 / 10%);
  border-radius: 5px;
}
```

现在我们的文本字段已经完成，我们需要调整单行和多行文本字段的显示方式，使其匹配，因为使用默认设置时，它们的显示方式通常不会相同。

#### 调整 textarea

{{HTMLElement("textarea")}} 元素默认渲染为 inline-block 元素。这里最重要的是 {{cssxref("resize")}} 和 {{cssxref("overflow")}} 属性。虽然我们的设计为固定尺寸，我们可以使用 `resize` 属性来阻止用户调整多行文本字段的大小，但最好不要阻止用户调整文本区域的大小（如果他们愿意的话）。{{cssxref("overflow")}} 属性用于使字段在不同浏览器中的呈现更加一致。有些浏览器默认值为 `auto`，而有些浏览器默认值为 `scroll`。在我们的示例中，最好确保每个人都使用 `auto`：

```css
textarea {
  display: block;

  padding: 10px;
  margin: 10px 0 0 -10px;
  width: 100%;
  height: 90%;

  border-right: 1px solid;

  /* resize  : none; */
  overflow: auto;
}
```

#### 对提交按钮进行样式设计

{{HTMLElement("button")}} 元素非常便于使用 CSS 进行样式设计；你可以随心所欲，甚至可以使用[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)进行设置：

```css
button {
  padding: 5px;
  font: bold 0.6em sans-serif;
  border: 2px solid #333;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transform: rotate(-1.5deg);
}

button:after {
  content: " >>>";
}

button:hover,
button:focus {
  background: #000;
  color: #fff;
}
```

### 最终结果

瞧！你的表单现在应该是这样的：

![如上所述应用所有样式和调整后表单的最终外观和布局](updated-form-screenshot.jpg)

> [!NOTE]
> 如果你的示例没有像你预期的那样工作，你想将它同我们的版本检查对比，你可以在 Github 上找到它——查看[在线演示](https://mdn.github.io/learning-area/html/forms/postcard-example/)（也可以查看[源代码](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)）。

## 技能测试

本文已经结束，但你还记得最重要的信息吗？在继续学习之前，还可以通过一些测试来验证自己是否记住了这些信息——请参阅[技能测试：样式化基础](/zh-CN/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Styling_basics)。

## 总结

正如你所看到的，只要我们想创建只有文本字段和按钮的表单，就很容易使用 CSS 对其进行样式设置。[下一篇文章中](/zh-CN/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)，我们将会看到如何处理落入“不好的”和“丑陋的”分类的表单微件。

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Other_form_controls","Learn_web_development/Extensions/Forms/Advanced_form_styling","Learn_web_development/Extensions/Forms")}}

### 进阶内容

- [如何构建自定义表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [通过 JavaScript 发送表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
- [表单控件的属性兼容性列表](/zh-CN/docs/Learn_web_development/Extensions/Forms)
