---
title: 样式化 HTML 表单
slug: Learn/Forms/Styling_web_forms
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

在这篇文章中，用户将学习如何使用 HTML 表单和 CSS 以使页面更加美观。令人惊讶的是，这可能有点棘手。由于历史和技术的原因，表单部件不能很好地与 CSS 配合工作。由于这些困难，许多开发人员选择[构建自己的 HTML 小部件](/zh-CN/docs/HTML/Forms/How_to_build_custom_form_widgets)以获得更好的控制和视觉观感。然而，在现代浏览器中，web 设计者越来越多地控制表单元素的设计。让我们深入研究。

## 为什么使用 CSS 美化表单组件这么困难？

在 1995 年左右的 Web 早期，表单组件 (或控件) 在 [HTML 2 规范](http://www.ietf.org/rfc/rfc1866.txt)中被添加到 HTML。由于表单组件的复杂性，实现者选择依靠底层操作系统来管理和渲染它们。

若干年后，CSS 被创建出来了，那么技术上的必要性，就是使用原生组件来实现表单控制，这是因为风格的要求。在 CSS 的早期，表单样式控制不是优先事项。

由于用户习惯于各自平台的视觉外观，浏览器厂商不愿意对表单控件样式进行调整;到目前为止，要重建所有控件以使它们可美化仍然是非常困难的。

即使在今天，仍然没有一个浏览器完全实现了 CSS 2.1。然而，随着时间的推移，浏览器厂商已经改进了对表单元素的 CSS 支持，尽管可用性的声誉不好，但现在已经可以使用 CSS 来设计[HTML 表单](/zh-CN/docs/HTML/Forms)。

### 涉及到 CSS，并非所有组件都是平等的

目前，在使用表单时使用 CSS 仍然有一些困难。这些问题可以分为三类：

#### 好的

有些元素在跨平台上时很少出现问题。包括以下结构元素：

1. {{HTMLElement("form")}}
2. {{HTMLElement("fieldset")}}
3. {{HTMLElement("label")}}
4. {{HTMLElement("output")}}

这还包括所有文本字段小部件（单行和多行）和按钮。

#### 不好的

一些元素难以被美化，并且可能需要一些复杂的技巧，偶尔需要高级的 CSS3 知识。

这些包括{{HTMLElement("legend")}}元素，但不能在所有平台上正确定位。Checkbox 和 radio 按钮也不能直接应用样式，但是，感谢 CSS3，你可以解决这个问题。[`placeholder`](/zh-CN/docs/Web/HTML/Element/input#placeholder) 的内容不能以任何标准方式应用样式，但是实现它的所有浏览器也都实现了私有的 CSS 伪元素或伪类，让你可以对其定义样式。

我们会在[如何构建自定义表单挂件](/zh-CN/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)一文中讲述如何处理更多特定的问题。

#### 丑陋的

有些元素根本不能用应用 CSS 样式。这些包括：所有高级用户界面小部件，如范围，颜色或日期控件; 和所有下拉小部件，包括{{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}}和{{HTMLElement("datalist")}} 元素。文件选择器小部件也被称为不可样式化。新的{{HTMLElement("progress")}}和{{HTMLElement("meter")}} 元素也属于这个类别。

所有这些小部件的主要问题来自于它们具有非常复杂的结构，而 CSS 目前还不足以表达这些小部件的所有细微部分。如果你想定制这些小部件，你必须依靠 JavaScript 来构建一个你能够应用样式的 DOM 树。我们会在 [How to build custom form widgets](/zh-CN/docs/HTML/Forms/How_to_build_custom_form_widgets)一文中探索如何实现这一点。

## 基本样式美化

为了使用 CSS 美化容易被美化的元素，你并不会碰到任何困难，因为它们的大部分行为同其他 HTML 元素差不多。但是，每个浏览器的用户代理样式表可能会有点不一致，所以有一些技巧可以帮助您更轻松地设计它们。

### Search 字段

搜索框是唯一一种应用 CSS 样式有点棘手的文本字段。在基于 WebKit 的浏览器（Chrome，Safari 等）上，您必须使用`-webkit-appearance`专有属性来调整它。我们在文章中进一步讨论这个属性：[HTML 表单的高级样式](/zh-CN/docs/Advanced_styling_for_HTML_forms)。

#### Example

```html
<form>
  <input type="search" />
</form>
```

```css
input[type="search"] {
  border: 1px dotted #999;
  border-radius: 0;

  -webkit-appearance: none;
}
```

![This is a screenshot of a search filed on Chrome, with and without the use of -webkit-appearance](/files/4153/search-chrome-macos.png)

截图中是 Chrome 浏览器中的两个搜索框，在我们的例子中，两个搜索框均被设置为有边框。第一个没有使用`-webkit-appearance`渲染，而第二个使用了 `-webkit-appearance:none`. 两者的不同显而易见。

### 字体和文本

CSS font 和 text 功能能被很容易的应用到任何组件上（当然你可以在 form 组件上使用{{cssxref("@font-face")}} ）。然而，浏览器的行为经常不一致。默认情况下，一些组件不会从它们的父元素继承 {{cssxref("font-family")}}和 {{cssxref("font-size")}} 。相反，许多浏览器使用系统默认的字体和文本。为了让 form 表单的外观和其他内容保持一致，你可以在你的样式表中增加以下内容：

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

下面的截图显示了不同之处; 左边是 Mac OS X 上 Firefox 中元素的默认渲染，其中使用了平台的默认字体样式。在右边是相同的元素，应用了我们的字体统一样式规则。

![This is a screenshot of the main form widgets on Firefox on Mac OSX, with and without font harmonization](/files/4157/font-firefox-macos.png)

关于使用系统默认样式的表单还是使用设计用于匹配内容的自定义样式表单，有很多争议。作为网站或 Web 应用程序的设计者，您可以自己做出决定。

### 盒子模型

所有文本字段都完全支持与 CSS 盒模型相关的每个属性 ({{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, 和 {{cssxref("border")}})。但是，像以前一样，浏览器在显示这些小部件时依赖于系统默认的样式。您需要定义如何将其融入到您的内容中。如果你既想保持小部件的原生外观和感觉，又想给他们一个一致的尺寸，那么你会遇到一些困难 (如果你想保持组件的原生观感，又想给它们一致的大小，你会面临一些困难)。

**这是因为每个小部件都有自己的边框，填充和边距的规则。** 所以如果你想给几个不同的小部件相同的大小，你必须使用{{cssxref("box-sizing")}} 属性：

```css
input,
textarea,
select,
button {
  width: 150px;
  margin: 0;

  -webkit-box-sizing: border-box; /* For legacy WebKit based browsers */
  -moz-box-sizing: border-box; /* For legacy (Firefox <29) Gecko based browsers */
  box-sizing: border-box;
}
```

![This is a screenshot of the main form widgets on Chrome on Windows 7, with and without the use of box-sizing.](/files/4161/size-chrome-win7.png)

在上面的屏幕截图中，左侧的列没有{{cssxref("box-sizing")}}，而右侧的列使用了这个属性和`border-box`。请注意我们是怎样确保所有元素都占用相同的空间量，尽管平台对每种窗口小部件都有默认规则。

### 定位（Positioning）

HTML 表单部件的定位通常不是问题; 但是，您应该特别注意两点：

#### legend

{{HTMLElement("legend")}}元素易于应用 CSS，除了定位。在所有浏览器中， {{HTMLElement("legend")}} 元素定位是其 {{HTMLElement("fieldset")}} 父元素的上边框的最顶端。在 HTML 流中无法改变它的绝对位置，无法让其远离顶部边框。然而，你可以使用 {{cssxref("position")}} 属性将其位置设置为绝对或相对。除此之外，它近几年是 fieldset 边框的一部分。

由于{{HTMLElement("legend")}}元素对无障碍非常重要，因为它能被无障碍技术作为每个 fieldset 中的表单元素的标签读出来，它通常与标题配对，并且在无障碍中被隐藏。例如：

##### HTML

```html
<fieldset>
  <legend>Hi!</legend>
  <h1>Hello</h1>
</fieldset>
```

##### CSS

```css
legend {
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

#### textarea

默认情况下，所有浏览器都认为{{HTMLElement("textarea")}} 元素是 inline block，与文本底线对齐。这很少是我们真正想看到的。要将内联 (`inline-block`) 块更改为块 (`block`)，使用{{cssxref("display")}}属性非常简单。但是如果你想以 inline 方式使用它，通常改变垂直对齐方式：

```css
textarea {
  vertical-align: top;
}
```

## 示例

让我们来看一个样式化 HTML 表单的实际的案例。这有助于理清这里面的许多概念。我们将构建下面的"明信片" 联系人表单：

![This is what we want to achieve with HTML and CSS](/files/4149/screenshot.png)

如果你想继续关注这个例子，复制我们的 [postcard-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/postcard-example/postcard-start.html) 文件，并遵循接下来的指导操作。

### The HTML

HTML 只比我们在 [the first article of this guide](/zh-CN/docs/HTML/Forms/My_first_HTML_form) 中涉及到的多一些；它只有一些额外的 id 和 title。

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

将上面的代码添加到你 HTML 的 body 中。

### 组织你的静态文件

好戏要开始了！在开始写代码之前，我们需要三个额外的静态文件：

1. 明信片的[背景](/files/4151/background.jpg)——下载这幅图片，把它和你的 HTML 文件保存在相同目录下。
2. 打字机字体：[源自 fontsquirrel.com 的 "Secret Typewriter“字体](http://www.fontsquirrel.com/fonts/Secret-Typewriter)——将 TTF 文件下载到和上面相同的文件夹里。
3. 手绘字体：[源自 fontsquirrel.com 的 The "Journal" 字体](http://www.fontsquirrel.com/fonts/Journal) —— 将 TTF 文件下载到和上面相同的文件夹里。

在你开始之前需要对字体做一些处理：

1. 打开 fontsquirrel [网络字体生成器](https://www.fontsquirrel.com/tools/webfont-generator).
2. 使用表单，上传你的字体文件并生成一个网络字体包，将这个包下载到你的电脑上。
3. 解压提供的 zip 文件。
4. 再解压后的文件内容里你会找到两个 `.woff` 文件和两个`.woff2` 文件。将这四个文件拷贝到一个叫 fonts 的文件夹里，而 fonts 文件夹位于和上面相同的文件夹里。我们为每种字体使用两个不同的文件以最大限度地保证浏览器兼容性。查看我们的 [Web 字体](/zh-CN/docs/Learn/CSS/Styling_text/Web_fonts) 一文获取更多信息。

### CSS

现在我们可以深入探究本例的 CSS 了。将下面所有的代码块一个接一个地加到{{htmlelement("style")}} 元素里。

首先，我们要准备一些基础。这需要定义 {{cssxref("@font-face")}} 规则，以及所有的 {{HTMLElement("body")}} 元素和 {{HTMLElement("form")}} 元素基本规则：

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
    url("fonts/veteran_typewriter-webfont.woff2") format("woff2"),
    url("fonts/veteran_typewriter-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  font: 21px sans-serif;

  padding: 2em;
  margin: 0;

  background: #222;
}

form {
  position: relative;

  width: 740px;
  height: 498px;
  margin: 0 auto;

  background: #fff url(background.jpg);
}
```

现在我们可以定位我们的元素，包括标题和其他表单元素：

```css
h1 {
  position: absolute;
  left: 415px;
  top: 185px;

  font:
    1em "typewriter",
    sans-serif;
}

#from {
  position: absolute;
  left: 398px;
  top: 235px;
}

#reply {
  position: absolute;
  left: 390px;
  top: 285px;
}

#message {
  position: absolute;
  left: 20px;
  top: 70px;
}
```

现在我们开始处理表单元素本身。首先，让我们确保 {{HTMLElement("label")}} 被赋予了正确的字体：

```css
label {
  font:
    0.8em "typewriter",
    sans-serif;
}
```

文本域需要一些通用的规则，我们只需简单的移除 {{cssxref("border","borders")}} 和 {{cssxref("background","backgrounds")}}, 并重新定义其{{cssxref("padding")}} 和 {{cssxref("margin")}}：

```css
input,
textarea {
  font:
    0.9em/1.5em "handwriting",
    sans-serif;

  border: none;
  padding: 0 10px;
  margin: 0;
  width: 240px;

  background: none;
}
```

当其中的一个域获得焦点后，我们用浅灰色、半透明的背景高亮它们，注意添加{{cssxref("outline")}} 属性非常重要，这样可以移除由某些浏览器添加的默认高亮效果：

```css
input:focus,
textarea:focus {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: none;
}
```

现在我们的文本域已经完成了，我们需要调整单行和多行文本域的显示，使其能够匹配，因为通常情况下它们不会以默认的设置而具有一样的外观。

单行文本需要一些调整才能在 Internet Explorer 中渲染良好。Internet Explorer 没有基于字体的自然高度来定义文本域的高度（而这是所有其他浏览器都有的行为）。为了修正这个问题，我们需要给域添加一个确定的高度，像下面这样：

```css
input {
  height: 2.5em; /* for IE */
  vertical-align: middle; /* This is optional but it makes legacy IEs look better */
}
```

{{HTMLElement("textarea")}} 元素默认地被渲染成一个块级元素。这里有重要地两点是 {{cssxref("resize")}} 和 {{cssxref("overflow")}} 属性。因为我们的设计是一个固定大小的设计，所以我们会使用 `resize` 属性来防止用户调整我们的多行文本域的大小。{{cssxref("overflow")}} 属性是用来让域在不同的浏览器上渲染得更一致。一些浏览器默认值为 `auto`，而一些将默认值设为 `scroll`。在我们得例子中，最好确定每个浏览器都使用 `auto`：

```css
textarea {
  display: block;

  padding: 10px;
  margin: 10px 0 0 -10px;
  width: 340px;
  height: 360px;

  resize: none;
  overflow: auto;
}
```

{{HTMLElement("button")}} 元素上使用 CSS 非常方便；你可以做你任何想做得事情，甚至包括使用 [伪元素](/zh-CN/docs/CSS/Pseudo-elements)：

```css
button {
  position: absolute;
  left: 440px;
  top: 360px;

  padding: 5px;

  font: bold 0.6em sans-serif;
  border: 2px solid #333;
  border-radius: 5px;
  background: none;

  cursor: pointer;

  -webkit-transform: rotate(-1.5deg);
  -moz-transform: rotate(-1.5deg);
  -ms-transform: rotate(-1.5deg);
  -o-transform: rotate(-1.5deg);
  transform: rotate(-1.5deg);
}

button:after {
  content: " >>>";
}

button:hover,
button:focus {
  outline: none;
  background: #000;
  color: #fff;
}
```

瞧！

> **备注：** 如果你的例子没有像你预期的那样工作，你想将它同我们的版本检查对比，你可以在 Github 上找到它 —— 查看[在线演示](https://mdn.github.io/learning-area/html/forms/postcard-example/)（也可以查看[源代码](https://github.com/mdn/learning-area/tree/main/html/forms/postcard-example)）。

## 总结

如你所见，若我们想构建只包含文本域和按钮的表单，用 CSS 美化它们非常容易。如果你想要知道更多能够让你的处理表单组件时更轻松的 CSS 小技巧，看一看 [normalize.css](http://necolas.github.com/normalize.css) 项目的表单部分。

[下一篇文章中](/zh-CN/docs/Learn/Forms/Advanced_form_styling)，我们将会看到如何处理落入“不好的”和“丑陋的”分类的表单组件。

{{PreviousMenuNext("Learn/Forms/Other_form_controls","Learn/Forms/Advanced_form_styling","Learn/Forms")}}

### 进阶内容

- [如何构建自定义表单控件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [通过 JavaScript 发送表单](/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [表单控件的属性兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
