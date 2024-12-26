---
title: 样式化链接
slug: Learn_web_development/Core/Text_styling/Styling_links
original_slug: Learn/CSS/Styling_text/Styling_links
l10n:
  sourceCommit: 4bddde3e2b86234eb4594809082873fc5bf00ee3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}

当为[链接](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Creating_links)添加样式时，理解利用伪类有效地建立链接状态是很重要的，以及如何为链接添加样式来实现常用的功能（如导航菜单和选项卡）。我们将在本文中关注所有这些主题。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        HTML 基础（已学习
        <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 简介</a
        >）、CSS 基础（已学习
        <a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics"
          >CSS 简介</a
        >）、<a href="/zh-CN/docs/Learn_web_development/Core/Text_styling/Fundamentals"
          >CSS 文本和字体基础</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习如何将样式应用到链接状态，以及如何使用链接实现常见的 UI
        功能，比如导航菜单。
      </td>
    </tr>
  </tbody>
</table>

## 让我们来看一些链接

在[创建超链接](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Creating_links)一文中，我们了解了如何根据最佳实践在 HTML 中实现链接。在本文中，我们将以这些知识为基础，向你展示为超链接设计样式的最佳做法。

### 链接状态

第一件需要理解的事情是链接状态的概念，链接存在时处于不同的状态，每一个状态都可以用对应的[伪类](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#伪类)来应用样式：

- **Link**：有目的地的链接（即不只是一个具名锚点），使用 {{cssxref(":link")}} 伪类来应用样式。
- **Visited**：已访问过（存在于浏览器历史记录中）的链接，使用 {{cssxref(":visited")}} 伪类来应用样式。
- **Hover**：被用户鼠标指针悬停的链接，使用 {{cssxref(":hover")}} 伪类来应用样式。
- **Focus**：被选中的链接（比如通过键盘的 <kbd>Tab</kbd> 移动到这个链接，或者使用像 {{domxref("HTMLElement.focus()")}} 这样的方法编程地聚焦链接），使用 {{cssxref(":focus")}} 伪类来应用样式。

- **Active**：激活（如点击）的链接，使用 {{cssxref(":active")}} 伪类来应用样式。

### 默认样式

下面的示例说明了默认情况下链接的外观和行为；不过 CSS 会放大文本并将其居中，使其更加突出。你可以将示例中默认样式的外观和行为与本页中应用了更多 CSS 样式的其他链接的外观和行为进行比较。默认链接具有以下属性：

- 链接以下划线表示。
- 未访问链接为蓝色。
- 已访问链接为紫色。
- 悬停链接时，鼠标指针会变成一个小手图标。
- 聚焦链接的周围有一个轮廓——按下键盘上的制表符键，就能聚焦本页面上的链接。（在 Mac 上，需要使用 <kbd>option</kbd> + <kbd>tab</kbd>，或通过按下 <kbd>Ctrl</kbd> + <kbd>F7</kbd> 启用[全键盘控制](https://support.apple.com/zh-cn/guide/mac-help/mchlp1399/mac)选项。
- 活动链接为红色。尝试在点击链接时按住鼠标键。

```html
<p><a href="#">一个简单的链接</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('默认的样式', '100%', 120) }}

> [!NOTE]
> 本页中的所有链接示例都链接到窗口顶部。空片段（`href="#"`）用于创建简单示例，并确保每个包含在 {{HTMLElement("iframe")}} 中的实时示例不会中断。

有趣的是，这些默认的样式与 20 世纪 90 年代中期浏览器早期的风格几乎相同。这是因为用户知道以及期待链接就是这样变化的，如果链接的样式不同，就会让一些人感到奇怪。不过这不意味着你不应该为链接添加任何样式，只是你的样式不应该与用户预期的相差太大，你应该至少：

- 为链接使用下划线，但是不要在其他内容上也用下划线，以作区分。如果你不想要带有下划线的链接，那你至少要用其他方法来高亮突出链接。
- 当用户悬停或选择的时候，使链接有相应的变化，并且在链接被激活的时候，变化会有一些不同。

可以使用以下 CSS 属性关闭/更改默认样式：

- {{cssxref("color")}} 以改变文字的颜色。
- {{cssxref("cursor")}} 以改变鼠标光标的样式，除非有非常充分的理由，否则不应关闭此功能。
- {{cssxref("outline")}} 以改变文字的轮廓。轮廓有点像边框，唯一的区别是边框占用了盒模型的空间，而轮廓没有；它只是设置在背景图片的顶部。轮廓是一种有用的无障碍辅助工具，因此如果不增加另一种表示重点链接的方法，就不应删除轮廓。

> [!NOTE]
> 链接样式并不局限于上述属性，你可以自由使用任何你喜欢的属性。

### 将样式应用到一些链接

现在我们已经详细地看了默认的状态，让我们看一下典型的链接样式的设置。

开始之前，我们先写出我们的空规则集：

```css
a {
}

a:link {
}

a:visited {
}

a:focus {
}

a:hover {
}

a:active {
}
```

这几个规则的顺序是有意义的，因为链接的样式是建立在另一个样式之上的，比如，第一个规则的样式也会在后面的规则中生效，一个链接被激活的时候，它也是处于悬停状态的。如果你搞错了顺序，那么就可能不会产生正确的效果。要记住这个顺序，你可以尝试这样帮助记忆：**L**o**V**e **F**ears **HA**te。

现在让我们再添加一些信息，得到正确的样式：

```css
body {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline-color: transparent;
}

a:link {
  color: #6900ff;
}

a:visited {
  color: #a5c300;
}

a:focus {
  text-decoration: none;
  background: #bae498;
}

a:hover {
  text-decoration: none;
  background: #cdfeaa;
}

a:active {
  background: #6900ff;
  color: #cdfeaa;
}
```

这里还提供了一些示例 HTML，供你应用 CSS：

```html
<p>
  有很多可用的浏览器，如 <a href="#">Mozilla Firefox</a>、<a href="#"
    >Google Chrome</a
  >
  和 <a href="#">Microsoft Edge</a>。
</p>
```

把这两个放在一起，我们得到这样的结果：

{{ EmbedLiveSample('将样式应用到一些链接', '100%', 150) }}

那么我们在这里做了什么？这个看起来肯定和默认的样式不同，但仍然提供了一个熟悉的体验，好让用户知道发生了什么：

- 前两条规则对本讨论并不重要。
- 第三条规则使用 `a` 选择器来去掉焦点轮廓（反正不同浏览器的焦点轮廓也不一样）。
- 接下来，我们使用 `a:link` 和 `a:visited` 选择器为未访问链接和已访问链接设置一些颜色变化，使它们截然不同。
- 接下来的两条规则使用 `a:focus` 和 `a:hover` 为聚焦和悬停链接设置无下划线和不同的背景颜色。
- 最后，`a:active` 用于在链接被激活时为其提供一种反色方案，以便让人清楚地看到有重要的事情正在发生！

### 动手练习：为你的链接添加样式

在这个动手练习部分，我们希望你使用我们的空规则集，然后添加你自定义的规则，从而使链接看上去比较酷。发挥你的想象力，大胆地做吧。我们相信你可以想出一些更酷的东西，就像我们上面的示例一样。

如果你犯了错误，你都可以使用*重置*按钮。如果你遇到了困难，可以按*显示解答*按钮来插入我们上文中的例子。

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML 输入</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<p>有很多可用的浏览器，如 <a href="#">Mozilla Firefox</a>、<a href="#">Google Chrome</a> 和 <a href="#">Microsoft Edge</a>。</p>
  </textarea>

  <h2>CSS 输入</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
a {

}

a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}
  </textarea>

  <h2>输出</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="重置"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="显示解答"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
const htmlInput = document.querySelector(".html-input");
const cssInput = document.querySelector(".css-input");
const reset = document.getElementById("reset");
const htmlCode = htmlInput.value;
const cssCode = cssInput.value;
const output = document.querySelector(".output");
const solution = document.getElementById("solution");

const styleElem = document.createElement("style");
const headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", () => {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", () => {
  htmlInput.value = htmlCode;
  cssInput.value = `p {
  font-size: 1.2rem;
  font-family: sans-serif;
  line-height: 1.4;
}

a {
  outline-color: transparent;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}`;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('动手练习：为你的链接添加样式', 700, 800) }}

## 在链接中包含图标

常见的做法是在链接中包含图标，使链接提供更多关于链接指向的内容的信息。让我们来看一个简单的例子，例子中为一个外部链接（链接指向的不是本站，而是外部站点）。这样的图标通常看起来像一个指向盒子的小箭头，比如，我们会使用 [icons8.com 上的这个优秀的范例](https://icons8.com/web-app/741/external-link)。

让我们来看一些能给我们这个效果的 HTML 和 CSS。先是一些简单的等待你样式化的 HTML：

```html
<p>
  要获取关于天气的更多信息，请访问我们的<a href="weather.html">天气页面</a
  >，查看<a href="https://zh.wikipedia.org/wiki/天气">维基百科上的天气信息</a
  >，或检查
  <a href="http://www.extremescience.com/weather.htm">Extreme Science</a
  >上的天气信息。
</p>
```

接着是 CSS:

```css
body {
  width: 300px;
  margin: 0 auto;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline-color: transparent;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:focus,
a:hover {
  border-bottom: 1px solid;
}

a:active {
  color: red;
}

a[href^="http"] {
  background: url("external-link-52.png") no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

{{ EmbedLiveSample('在链接中包含图标', '100%', 150) }}

那么这里发生了什么？我们将跳过大部分的 CSS，因为那些只是你之前看过的相同的信息。最后一条规则很有趣，这里，我们在外部链接上插入了一个自定义背景图片，这和上篇[自定义列表项目符号](/zh-CN/docs/Learn_web_development/Core/Text_styling/Styling_lists#使用自定义的项目符号图片)文章的做法很像。这次，我们使用了 {{cssxref("background")}} 简写，而不是分别使用多个属性。我们设置了我们想要插入的图片的路径，指定了 `no-repeat` ，这样我们只插入了一次图片，然后指定位置为 100%，使其出现在内容的右边，距离上方是 0 像素。

我们也使用 {{cssxref("background-size")}} 来指定要显示的背景图像的大小，为了满足响应式网站设计的需要，在图标更大，需要再重新调整它的大小的时候，这样做是很有帮助的。但是，这仅适用于 IE 9 及更高版本。所以你如果需要支持那些老的浏览器，只能调整图像的原始大小，然后插入。

最后，我们在链接上设置 {{cssxref("padding-right")}} ，为背景图片留出空间，这样就不会让它和文本重叠了。

最后的问题，我们是如何只选中了外部链接的？如果你正确编写你的 [HTML 链接](/zh-CN/docs/Learn_web_development/Core/Structuring_content/Creating_links)，你应该只会在外部链接上使用绝对 URL，如果链接是链接你的站点的其他部分，那么使用相对链接是更加高效的。因此“http”文本应该只出现在外部链接上，为此我们可以使用一个[属性选择器](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#标签属性选择器)——`a[href^="http"]`——选中 {{htmlelement("a")}} 元素，但是这样只会选中那些拥有 [`href`](/zh-CN/docs/Web/HTML/Element/a#href) 属性，且属性的值以“http”开头的 {{htmlelement("a")}} 元素。

就是这样。重温上文的动手练习部分，试试这种新技巧吧！

> **备注：** `href` 值看起来很奇怪——我们在这里使用的是虚拟链接，并没有真正指向任何地方。这样做的原因是，如果我们使用真正的链接，就可以在实时示例嵌入的 `<iframe>` 中加载外部网站，从而丢失示例。

> [!NOTE]
> 如果你对[背景](/zh-CN/docs/Learn_web_development/Core/Styling_basics)和[响应式 web 设计](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)还不熟悉，也不用担心，其他地方会有解释。

## 样式化链接为按钮

本文所介绍的工具还可以用于其他方面。例如，像悬停这样的状态可以用来样式化许多不同的元素，而不仅仅是链接——你可能想样式化段落、列表项或其他东西的悬停状态。

此外，在某些情况下，链接的样式通常看起来像按钮。网站导航菜单可以标记为一组链接，而这组链接的样式可以看起来像一组控制按钮或标签，让用户可以访问网站的其他部分。让我们一起来探索一下。

首先，一些 HTML:

```html
<nav class="container">
  <a href="#">主页</a>
  <a href="#">披萨</a>
  <a href="#">音乐</a>
  <a href="#">袋熊</a>
  <a href="#">芬兰</a>
</nav>
```

接着，是我们的 CSS:

```css
body,
html {
  margin: 0;
  font-family: sans-serif;
}

.container {
  display: flex;
  gap: 0.625%;
}

a {
  flex: 1;
  text-decoration: none;
  outline-color: transparent;
  text-align: center;
  line-height: 3;
  color: black;
}

a:link,
a:visited,
a:focus {
  background: palegoldenrod;
  color: black;
}

a:hover {
  background: orange;
}

a:active {
  background: darkred;
  color: white;
}
```

这给我们以下结果：

{{ EmbedLiveSample('样式化链接为按钮', '100%', 100) }}

HTML 定义了一个 {{HTMLElement("nav")}} 元素，该元素具有 `"container"` 类。其中的 `<nav>` 包含我们的链接。

- 第二条规则的含义：
  - 容器为[弹性盒](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Flexbox)。其中包含的项目（本例中为链接）将是*弹性项*。
  - 柔性项之间的间隙为容器宽度的 `0.625%`。
- 第三条规则为链接设置样式：
  - 第一个声明 `flex: 1` 表示将调整项的宽度，以便它们使用容器中的所有可用空间。
  - 接下来，我们关闭默认的 {{cssxref("text-decoration")}} 和 {{cssxref("outline")}}——我们不想让它们破坏我们的外观。
  - 最后三项声明是将每个链接内的文字居中，将 {{cssxref("line-height")}} 设置为 3 以增加按钮的高度（这样做的好处是可以将文字垂直居中），并将文字颜色设置为黑色。

## 总结

希望这篇文章目前能为你提供关于链接的所有知识！我们的文字样式模块的最后一篇文章将详细介绍如何在网站上使用[自定义字体](/zh-CN/docs/Learn_web_development/Core/Text_styling/Web_fonts)（或称 Web 字体）。

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Styling_lists", "Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/Text_styling")}}
