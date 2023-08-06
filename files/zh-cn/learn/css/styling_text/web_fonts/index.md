---
title: Web 字体
slug: Learn/CSS/Styling_text/Web_fonts
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}

在模块的第一篇文章中，我们探讨了用于样式化字体和文本的基本 CSS 特性。在这篇文章中，我们将更进一步，详细地探索 web 字体——它们允许您下载自定义字体和您的 web 页面，以允许更多不同的、自定义的文本样式。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本计算机素养，HTML 基础 (学习
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), CSS 基础 (学习<a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >),
        <a href="/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS 文本和字体基础 </a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习如何将 web 字体应用到 web 页面，使用第三方服务，或者编写自己的代码。
      </td>
    </tr>
  </tbody>
</table>

## 字体种类回顾

正如我们在[基本文本和字体样式](/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals)中所看到的那样，应用到您的 HTML 的字体可以使用 {{cssxref("font-family")}}属性来控制。您需要提供一个或多个字体种类名称，浏览器会在列表中搜寻，直到找到它所运行的系统上可用的字体。

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

这个系统运行良好，但是对于传统的 web 开发人员来说，字体选择是有限的。只有少数几种字体可以保证兼容所有流行的操作系统——这就是所谓的 [Web-safe 字体](/zh-CN/Learn/CSS/Styling_text/Fundamentals#Web_safe_fonts)。您可以使用字体堆栈来指定可选择的字体，后面是 Web-safe 的替代选项，然后是默认的系统字体，但是为了确保您的设计在每种字体中都显示正常，这样增加了测试的开销。

## Web 字体

但是还有一种选择，它非常有效，回到 IE 版本 6。Web 字体是一种 CSS 特性，允许您指定在访问时随您的网站一起下载的字体文件，这意味着任何支持 Web 字体的浏览器都可以使用您指定的字体。太酷啦！所需的语法如下所示：

首先，在 CSS 的开始处有一个{{cssxref("@font-face")}}块，它指定要下载的字体文件：

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.ttf");
}
```

在这个下面，你可以使用 @font-face 中指定的字体种类名称来将你的定制字体应用到你喜欢的任何东西上，比如说：

```css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

语法确实比这更复杂，下面我们将详细介绍。

关于网页字体有两件重要的事情要记住：

1. 浏览器支持不同的字体格式，因此您需要多种字体格式以获得良好的跨浏览器支持。例如，大多数现代浏览器都支持 WOFF / WOFF2(Web Open Font Format versions 1 and 2，Web 开放字体格式版本 1 和 2)，它是最有效的格式，但是旧版本 IE 只支持 EOT (Embedded Open Type，嵌入式开放类型) 的字体，你可能需要包括一个 SVG 版本的字体支持旧版本的 iPhone 和 Android 浏览器。我们将向您展示如何生成所需的代码。
2. 字体一般都不能自由使用。您必须为他们付费，或者遵循其他许可条件，比如在代码中 (或者在您的站点上) 提供字体创建者。你不应该在没有适当的授权的情况下偷窃字体。

> **备注：** Web 字体作为一种技术从 Internet Explorer 4 开始就得到了的支持！

## 自主学习:web 字体示例

记住这一点，让我们从最初的原则构建一个基本的 web 字体示例。使用嵌入的 live 示例很难演示这一点，因此，我们希望您按照下面几节中详细介绍的步骤来了解这个过程。

你应该使用 [web-font-start.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.html) 和 [web-font-start.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-start.css) 文件作为开始添加到你的代码中（又见[预览版](http://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-start.html)。）现在，在你的电脑上的一个新目录中复制这些文件。在 `web-font-start.css`文件中，您将找到一些最小的 CSS 来处理这个示例的基本布局和排版。

### 查找字体

对于本例，我们将使用两种 web 字体，一种用于标题，另一种用于正文文本。首先，我们需要找到包含字体的字体文件。字体是由字体铸造厂创建的，并且存储在不同的文件格式中。
通常有三种类型的网站可以获得字体：

- 免费的字体经销商：这是一个可以下载免费字体的网站 (可能还有一些许可条件，比如对字体创建者的信赖)。比如： [Font Squirre](https://www.fontsquirrel.com/)，[dafont](http://www.dafont.com/) 和 [Everything Fonts](https://everythingfonts.com/)。
- 收费的字体经销商：这是一个收费则字体可用的网站，例如[fonts.com](http://www.fonts.com/)或[myfonts.com](http://www.myfonts.com/)。您也可以直接从字体铸造厂中购买字体，例如[Linotype](https://www.linotype.com/)，[Monotype](http://www.monotype.com) 或 [Exljbris](http://www.exljbris.com/)。
- 在线字体服务：这是一个存储和为你提供字体的网站，它使整个过程更容易。更多细节见[使用在线字体服务](#使用在线字体服务)。

让我们找到一些字体！前往[Font Squirrel](https://www.fontsquirrel.com/) 并选择两种字体——一种用于标题的有趣的字体 (可能是一种不错的显示字体或无衬线字体)，和一种用于段落，稍微不那么华丽，更易于阅读的字体。当您找到每种字体时，按下下载按钮，并将该文件保存在与您先前保存的 HTML 和 CSS 文件相同的目录中。无论它们是 TTF(True Type Fonts)) 还是 OTF(Open Type 字体) 都不重要。

在每种情况下，都要解压字体包 (Web 字体通常分布在包含字体文件和许可信息的 ZIP 文件中。) 您可能会在包中发现多个字体文件，一些字体是作为一个具有不同变体的家庭分布的，例如，瘦、中、粗体、斜体、斜体等等。对于这个例子，我们只是想让您自己考虑一个单一的字体文件。

> **备注：** 在右边栏的“查找字体”部分中，您可以单击不同的标记和分类来筛选显示的选项。

### 生成所需代码

现在您需要生成所需的代码 (以及字体格式)。对于每种字体，遵循以下步骤：

1. 确保您已经满足了任何许可证的要求，如果您打算在一个商业和/或 Web 项目中使用它。
2. 前往 Fontsquirrel [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator).
3. 使用上传字体按钮上传你的两个字体文件。
4. 勾选复选框，“是的，我上传的字体符合网络嵌入的合法条件。
5. 点击下载你的套件（kit）。

在生成器完成处理之后，您应该得到一个 ZIP 文件，将它保存在与 HTML 和 CSS 相同的目录中。

### 在演示中实现代码

在这一点上解压您刚刚生成的 webfont 套件。在解压的目录中，您将看到三个有用的条目：

- 每个字体的多个版本：（比如 `.ttf`, `.woff`, `.woff2`…… 随着浏览器支持需求的改变，提供的字体将随着时间的推移而不断更新。）正如上面提到的，跨浏览器支持需要使用多种字体——这是 Fontsquirrel 的方法，确保你得到了你需要的一切。
- 每个字体的一个演示 HTML 文件在你的浏览器中加载，看看在不同的使用环境下字体会是什么样子。
- 一个 `stylesheet.css` 文件，它包含了你需要的生成好的 @font-face 代码。

要在演示中实现这些字体，请遵循以下步骤：

1. 将解压缩的目录重命名为简易的目录，比如`fonts`
2. 打开 `stylesheet.css` 文件，把包含在你的网页中的 `@font-face`块复制到你的 `web-font-start.css` 文件—— 你需要把它们放在最上面，在你的 CSS 之前，因为字体需要导入才能在你的网站上使用。
3. 每个`url()`函数指向一个我们想要导入到我们的 CSS 中的字体文件——我们需要确保文件的路径是正确的，因此，在每个路径的开头添加`fonts/` （必要时进行调整）。
4. 现在，您可以在字体栈中使用这些字体，就像任何 web 安全或默认的系统字体一样。
   例如：

   ```css
   font-family: "zantrokeregular", serif;
   ```

你应该得到一个演示页面，上面有一些漂亮的字体。因为不同字体的字体大小不同，你可能需要调整大小、间距等，以区分外观和感觉。

![](web-font-example.png)

> **备注：** 如果对于要让它正常工作您有任何问题，可以自由地将您的版本与我们完成的文件进行比较——见 [web-font-finished.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.html) 和 [web-font-finished.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/web-font-finished.css) ([运行完成的示例](http://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html))。

## 使用在线字体服务

在线字体服务通常会为你存储和服务字体，这样你就不用担心写`@font-face`代码了，通常只需要在你的网站上插入一两行代码就可以让一切都运行。例子包括[Typekit](https://typekit.com/) 和[Cloud.typography](http://www.typography.com/cloud/welcome/)。大多数这些服务都是基于订阅的，除了[Google Fonts](https://www.google.com/fonts)，这是一个有用的免费服务，特别是对于快速的测试工作和编写演示。

大多数这些服务都很容易使用，所以我们不会详细地介绍它们。让我们快速浏览一下 Google Fonts，这样你就能明白它的意思了。再次的，使用`web-font-start.html` 和 `web-font-start.css` a 的副本作为你的开始。

1. 前往 [Google Fonts](https://www.google.com/fonts).
2. 使用左边的过滤器来显示你想要选择的字体类型，并选择一些你喜欢的字体。
3. 要选择字体种类，按下按钮旁边的 ⊕ 按钮。
4. 当您选择好字体种类时，按下页面底部的*\[Number]* 种类选择。
5. 在生成的屏幕中，首先需要复制所显示的 HTML 代码行，并将其粘贴到 HTML 文件的头部。将其置于现有的{{htmlelement("link")}}元素之上，使得字体是导入的，然后在你的 CSS 中使用它。
6. 然后，您需要将 CSS 声明复制到您的 CSS 中，以便将自定义字体应用到您的 HTML。

> **备注：** 如果你需要对比我们的，你可以在 [google-font.html](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.html)和[google-font.css](https://github.com/mdn/learning-area/blob/main/css/styling-text/web-fonts/google-font.css)找到完整版本的。（[见预览版](http://mdn.github.io/learning-area/css/styling-text/web-fonts/google-font.html)）

## 关于 @font-face 的更多细节

让我们来探索由 fontsquirrel 为您生成的`@font-face`语法。这是其中一个块的样子：

```css
@font-face {
  font-family: "ciclefina";
  src: url("fonts/cicle_fina-webfont.eot");
  src:
    url("fonts/cicle_fina-webfont.eot?#iefix") format("embedded-opentype"),
    url("fonts/cicle_fina-webfont.woff2") format("woff2"),
    url("fonts/cicle_fina-webfont.woff") format("woff"),
    url("fonts/cicle_fina-webfont.ttf") format("truetype"),
    url("fonts/cicle_fina-webfont.svg#ciclefina") format("svg");
  font-weight: normal;
  font-style: normal;
}
```

这被称为"bulletproof @font-face syntax（刀枪不入的 @font-face 语法）", 这是 Paul Irish 早期的一篇文章提及后 @font-face 开始流行起来 ([Bulletproof @font-face Syntax](http://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/)。让我们来看看它是怎么做的：

- `font-family`：这一行指定了您想要引用的字体的名称。你可以把它作为你喜欢的任何东西，只要你在你的 CSS 中始终如一地使用它。
- `src`：这些行指定要导入到您的 CSS(`url`部分) 的字体文件的路径，以及每种字体文件的格式 (`format`部分)。后面的部分不是必要的，但是声明它是很有用的，因为它允许浏览器更快地找到可以使用的字体。可以列出多个声明，用逗号分隔——浏览器会搜索并使用它能找到的第一个——因此，最好是把新的、更好的格式比如 WOFF2 放在前面，把偏老的，不是那么好的格式像 TTF 这样的放在后面。唯一的例外是 EOT 字体——他们首先在旧版本的 IE 中修复了几个 bug，这样它就会尝试使用它找到的第一件东西，即使它不能真正使用字体。
- {{cssxref("font-weight")}}/{{cssxref("font-style")}}: 这些行指定字体的粗细，以及它是否斜体。如果您正在导入相同字体的多个粗细，您可以指定它们的粗细/样式，然后使用不同的{{cssxref("font-weight")}}/{{cssxref("font-style")}}来选择它们之间的不同值，而不必调用字体种类不同名称的所有不同成员。Roger Johansson 写的 [@font-face tip: define font-weight and font-style to keep your CSS simple](http://www.456bereastreet.com/archive/201012/font-face_tip_define_font-weight_and_font-style_to_keep_your_css_simple/) 更详细地说明了该做些什么。

> **备注：** 您还可以为您的 web 字体指定特定的{{cssxref("font-variant")}} 和 {{cssxref("font-stretch")}} ) 值。在较新的浏览器中，您还可以指定一个{{cssxref("unicode-range")}}值，这是一个您需要使用什么 web 字体的特定范围的字符——在支持浏览器中，只有指定的字符才会被下载，省去了不必要的下载。Drew McLellan 写的[Creating Custom Font Stacks with Unicode-Range](https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range/)在如何利用这个问题上提供了一些有用的建议。

## 总结

既然您已经完成了我们关于文本样式基础的文章，现在是时候用我们对模块的评估来测试您的理解了，为社区学校的主页进行排版。

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text/Typesetting_a_homepage", "Learn/CSS/Styling_text")}}
