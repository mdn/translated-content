---
title: 样式化链接
slug: Learn/CSS/Styling_text/Styling_links
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

当为 [links](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) 添加样式时，理解利用伪类有效地建立链接状态是很重要的，以及如何为链接添加样式来实现常用的功能，比如说导航栏、选项卡。我们将在本文中关注所有这些主题。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">学习本章节的前提：</th>
      <td>
        基本的计算机使用能力，HTML 基础 (学习
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), CSS 基础 (学习
        <a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >),
        <a href="/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS text and font fundamentals</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>
        学习如何将样式应用到链接状态，以及如何使用链接实现常见的 UI
        功能，比如导航菜单。
      </td>
    </tr>
  </tbody>
</table>

## 让我们来看一些链接

根据最佳实践 [创建超链接](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) 中的练习，我们看到了如何在你的 HTML 中实现链接。在本篇文章中，我们会以这个知识为基础，向你展示将样式应用到链接的最佳实践。

### 链接状态

第一件需要理解的事情是链接状态的概念，链接存在时处于不同的状态，每一个状态都可以用对应的 [伪类](/zh-CN/Learn/CSS/Introduction_to_CSS/Selectors#Pseudo-classes) 来应用样式：

- **Link (没有访问过的)**: 这是链接的默认状态，当它没有处在其他状态的时候，它可以使用{{cssxref(":link")}} 伪类来应用样式。
- **Visited**: 这个链接已经被访问过了 (存在于浏览器的历史纪录), 它可以使用 {{cssxref(":visited")}} 伪类来应用样式。
- **Hover**: 当用户的鼠标光标刚好停留在这个链接，它可以使用 {{cssxref(":hover")}} 伪类来应用样式。
- **Focus**: 一个链接当它被选中的时候 (比如通过键盘的

  <kbd>Tab</kbd>

  移动到这个链接的时候，或者使用编程的方法来选中这个链接 {{domxref("HTMLElement.focus()")}}) 它可以使用 {{cssxref(":focus")}} 伪类来应用样式。

- **Active**: 一个链接当它被激活的时候 (比如被点击的时候)，它可以使用 {{cssxref(":active")}} 伪类来应用样式。

### 默认的样式

下面的例子说明了一个链接的默认行为表现 (这里的 CSS 仅仅是为了放大和居中文本，使内容更加突出)

```html
<p><a href="https://mozilla.org">A link to the Mozilla homepage</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('默认的样式', '100%', 120) }}

当你观察默认样式的时候，你也许会注意到一些东西：

- 链接具有下划线。
- 未访问过的 (Unvisited) 的链接是蓝色的。
- 访问过的 (Visited) 的链接是紫色的。
- 悬停 (Hover) 在一个链接的时候鼠标的光标会变成一个小手的图标。
- 选中 (Focus) 链接的时候，链接周围会有一个轮廓，你应该可以按 tab 来选中这个页面的链接 (在 Mac 上，你可能需要使用*Full Keyboard Access: All controls* 选项，然后再按下

  <kbd>Ctrl</kbd>

  \+

  <kbd>F7</kbd>

  ，这样就可以起作用)

- 激活 (Active) 链接的时候会变成红色 (当你点击链接时，请尝试按住鼠标按钮。)

有趣的是，这些默认的样式与 20 世纪 90 年代中期浏览器早期的风格几乎相同。这是因为用户知道以及期待链接就是这样变化的，如果链接的样式不同，就会让一些人感到奇怪。不过这不意味着你不应该为链接添加任何样式，只是你的样式不应该与用户预期的相差太大，你应该至少：

- 为链接使用下划线，但是不要在其他内容上也用下划线，以作区分。如果你不想要带有下划线的链接，那你至少要用其他方法来高亮突出链接。
- 当用户悬停或选择 (hover 或者 focused) 的时候，使链接有相应的变化，并且在链接被激活 (active) 的时候，变化会有一些不同。可以使用以下 CSS 属性关闭/更改默认样式：
- {{cssxref("color")}} 文字的颜色
- {{cssxref("cursor")}} 鼠标光标的样式，你不应该把这个关掉，除非你有非常好的理由。
- {{cssxref("outline")}} 文字的轮廓 (轮廓有点像边框，唯一的区别是边框占用了盒模型的空间，而轮廓没有；它只是设置在背景图片的顶部)。outline 是一个有用的辅助功能，所以在把它关掉之前考虑清楚；你至少应该将悬停 (hover) 状态的样式同时应用到选中 (focus) 状态上。

> **备注：** 你不仅仅只限于上述属性来把样式应用到你的链接上，你可以用任何你喜欢的属性，就是不要搞得太疯狂！

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

这几个规则的顺序是有意义的，因为链接的样式是建立在另一个样式之上的，比如，第一个规则的样式也会在后面的规则中生效，一个链接被激活 (activated) 的时候，它也是处于悬停 (hover) 状态的。如果你搞错了顺序，那么就可能不会产生正确的效果。要记住这个顺序，你可以尝试这样帮助记忆：**L**o**V**e **F**ears **HA**te.

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
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437a16;
}

a:focus {
  border-bottom: 1px solid;
  background: #bae498;
}

a:hover {
  border-bottom: 1px solid;
  background: #cdfeaa;
}

a:active {
  background: #265301;
  color: #cdfeaa;
}
```

这里还提供了一些示例 HTML，供你应用 CSS：

```html
<p>
  There are several browsers available, such as
  <a href="https://www.mozilla.org/zh-CN/firefox/">Mozilla Firefox</a>,
  <a href="https://www.google.com/chrome/index.html">Google Chrome</a>, and
  <a href="https://www.microsoft.com/zh-CN/windows/microsoft-edge"
    >Microsoft Edge</a
  >.
</p>
```

把这两个放在一起，我们得到这样的结果：

{{ EmbedLiveSample('将样式应用到一些链接', '100%', 150) }}

那么我们在这里做了什么？这个看起来肯定和默认的样式不同，但仍然提供了一个熟悉的体验，好让用户知道发生了什么：

- 第一和第二条规则和本次讨论关系不大。
- 第三个规则使用了 `a` 选择器，取消了默认的文本下划线和链接被选中（focus）时的轮廓（outline）（不同浏览器的默认行为可能不同），并为每个链接添加了少量的内边距（padding），所有这一切将在之后变得明确。
- 接着，我们使用`a:link`和`a:visited`选择器来设置未访问（unvisited）链接和访问过（visited）的链接的一点颜色上的变化，然后就能分辨开来了。
- 下面两条规则使用 `a:focus` 和 `a:hover` 来设置选中（focus）和悬停（hover）的链接为不同的背景颜色，再加上一个下划线，使链接更加突出。这里有两点需要注意：

  - 下划线是使用 {{cssxref("border-bottom")}} 创造的，而不是 {{cssxref("text-decoration")}}，有一些人喜欢这样，因为前者比后者有更好的样式选项，并且绘制的位置会稍微低一点，所以不会穿过字母 (比如 字母 g 和 y 底部).
  - {{cssxref("border-bottom")}}的值被设置为`1px solid`，没有指定颜色。这样做可以使边框采用和元素文本一样的颜色，这在这样的情况下是很有用的，因为链接的每种状态下，文本是不同的颜色。

- 最后，`a:active` 用来给链接一个不同的配色方案，当链接被激活 (activated) 时，让链接被激活的时候更加明显。

### 动手练习：为你的链接添加样式

在这个动手练习部分，我们希望你使用我们的空规则集，然后添加你自定义的规则，从而使链接看上去比较酷。发挥你的想象力，大胆地做吧。我们相信你可以想出一些更酷的东西，就像我们上面的例子一样。

如果你犯了错误，你都可以使用 _Reset 按钮来重置。_ 如果你遇到了困难，可以按 _Show solution_ 按钮来显示我们上文中的例子。

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<p>There are several browsers available, such as <a href="https://www.mozilla.org/zh-CN/firefox/">Mozilla
 Firefox</a>, <a href="https://www.google.com/chrome/index.html">Google Chrome</a>, and
<a href="https://www.microsoft.com/zh-CN/windows/microsoft-edge">Microsoft Edge</a>.</p></textarea
  >

  <h2>CSS Input</h2>
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

}</textarea
  >

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Show solution"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement("style");
var headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value =
    "p {\n  font-size: 1.2rem;\n  font-family: sans-serif;\n  line-height: 1.4;\n}\n\na {\n  outline: none;\n  text-decoration: none;\n  padding: 2px 1px 0;\n}\n\na:link {\n  color: #265301;\n}\n\na:visited {\n  color: #437A16;\n}\n\na:focus {\n  border-bottom: 1px solid;\n  background: #BAE498;\n}\n\na:hover {\n  border-bottom: 1px solid;\n  background: #CDFEAA;\n}\n\na:active {\n  background: #265301;\n  color: #CDFEAA;\n}";
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('动手练习：为你的链接添加样式', 700, 800) }}

## 在链接中包含图标

常见的做法是在链接中包含图标，使链接提供更多关于链接指向的内容的信息。让我们来看一个简单的例子，例子中为一个外部链接 (链接指向的不是本站，而是外部站点)。这样的图标通常看起来像一个指向盒子的小箭头，比如，我们会使用[icons8.com 上的这个优秀的范例](https://icons8.com/web-app/741/external-link)。

让我们来看一些能给我们这个效果的 HTML 和 CSS。先是一些简单的等待你样式化的 HTML：

```html
<p>
  For more information on the weather, visit our
  <a href="weather.html">weather page</a>, look at
  <a href="https://en.wikipedia.org/wiki/Weather">weather on Wikipedia</a>, or
  check out
  <a href="http://www.extremescience.com/weather.htm"
    >weather on Extreme Science</a
  >.
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
  outline: none;
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

a[href*="http"] {
  background: url("external-link-52.png") no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

{{ EmbedLiveSample('在链接中包含图标', '100%', 150) }}

那么这里发生了什么？我们将跳过大部分的 CSS，因为那些只是你之前看过的相同的信息。最后一条规则很有趣，这里，我们在外部链接上插入了一个自定义背景图片，这和上篇[自定义列表项目符号](/zh-CN/Learn/CSS/Styling_text/Styling_lists#Using_a_custom_bullet_image)文章的做法很像。这次，我们使用了 {{cssxref("background")}} 简写，而不是分别使用多个属性。我们设置了我们想要插入的图片的路径，指定了 `no-repeat` ，这样我们只插入了一次图片，然后指定位置为 100%，使其出现在内容的右边，距离上方是 0px。

我们也使用 {{cssxref("background-size")}} 来指定要显示的背景图像的大小，为了满足响应式网站设计的需要，在图标更大，需要再重新调整它的大小的时候，这样做是很有帮助的。但是，这仅适用于 IE 9 及更高版本。所以你如果需要支持那些老的浏览器，只能调整图像的原始大小，然后插入。

最后，我们在链接上设置 {{cssxref("padding-right")}} ，为背景图片留出空间，这样就不会让它和文本重叠了。

最后的问题，我们是如何只选中了外部链接的？如果你正确编写你的[HTML 链接](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) ，你应该只会在外部链接上使用绝对 URL，如果链接是链接你的站点的其他部分，那么使用相对链接是更加高效的。因此“http”文本应该只出现在外部链接上，为此我们可以使用一个[属性选择器](/zh-CN/Learn/CSS/Introduction_to_CSS/Selectors#Attribute_selectors)——`a[href*="http"]` ——选中 {{htmlelement("a")}} 元素，但是这样只会选中那些拥有 [`href`](/zh-CN/docs/Web/HTML/Element/a#href) 属性，且属性的值包含 "http" 的 {{htmlelement("a")}}的元素。

就这样啦，尝试重新审视上面的动手练习部分，尝试这种新技术！

> **备注：** 不要担心，如果你目前不熟悉 [backgrounds](/zh-CN/docs/Learn/CSS/Styling_boxes) 和 [responsive web design](/zh-CN/docs/Web/Apps/Progressive/Responsive/responsive_design_building_blocks) ; 这些会在其他地方解释。

## 样式化链接为按钮

目前在本文中探索的用法也可以用在其他方面。比如，悬停 (hover) 的状态可以为不同的元素应用样式，不只是链接，你也许会想添加悬停状态的样式到段落、列表项、或者是其他东西。

此外，在某些情况下，链接通常会应用样式，使它看上去的效果和按钮差不多，一个网站导航菜单通常是标记为一个列表，列表中包含链接，这可以很容易地被设计为看起来像一组控制按钮或是选项卡，主要是用于让用户可以访问站点的其他部分，现在让我们来看一看。

首先，一些 HTML:

```html
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">Pizza</a></li>
  <li><a href="#">Music</a></li>
  <li><a href="#">Wombats</a></li>
  <li><a href="#">Finland</a></li>
</ul>
```

接着，是我们的 CSS:

```css
body,
html {
  margin: 0;
  font-family: sans-serif;
}

ul {
  padding: 0;
  width: 100%;
}

li {
  display: inline;
}

a {
  outline: none;
  text-decoration: none;
  display: inline-block;
  width: 19.5%;
  margin-right: 0.625%;
  text-align: center;
  line-height: 3;
  color: black;
}

li:last-child a {
  margin-right: 0;
}

a:link,
a:visited,
a:focus {
  background: yellow;
}

a:hover {
  background: orange;
}

a:active {
  background: red;
  color: white;
}
```

这给我们以下结果：

{{ EmbedLiveSample('样式化链接为按钮', '100%', 100) }}

让我们来解释一下这里发生了什么，主要是几个有趣的部分：

- 我们的第二条规则删除了 {{htmlelement("ul")}} 元素的默认的 {{cssxref("padding")}}，然后设置了它的宽度是外部容器 {{htmlelement("body")}} (在这次条件下) 的 100% 。
- {{htmlelement("li")}} 元素通常默认是块元素 (可见 [types of CSS boxes](/zh-CN/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes) 回顾)，意味着它们各自会占用一行。在这个例子中，我们创建了一组水平列表的链接，所以在第三条规则中，我们设置了 {{cssxref("display")}} 属性为 inline，这会导致列表中的每项内容都会一起出现在同一行，它们现在表现得就像内联元素。
- 第四条规则，主要是 {{htmlelement("a")}} 元素的样式，这里比较复杂; 让我们一步一步来看：

  - 和前面的例子一样，我们首先关掉了 {{cssxref("text-decoration")}} 和 {{cssxref("outline")}}，我们不希望这些破坏我们链接的样子。
  - 接着，我们设置 {{cssxref("display")}} 为 `inline-block` ，{{htmlelement("a")}} 元素默认为内联元素，而且我们不希望它们像值为 `block` 时一样，线条超出自己的内容，我们确实想要控制它们的大小`inline-block` 允许我们这样做。
  - 接着是尺寸的设置！我们要填满整个 {{htmlelement("ul")}} 的宽度，为按钮之间留一些间距 (margin) (但不是右边边缘的间距)，我们有 5 个按钮需要容纳，所以它们的大小应该一样。为了做到这一点，我们设置 {{cssxref("width")}} 为 19.5%，然后 {{cssxref("margin-right")}} 为 0.625%. 你会注意到所有宽度加起来是 100.625%, 这样会让最后一个按钮溢出 `<ul>` ，然后显示到下一行中。但是，我们使用了下一条规则让它恢复到了 100%，这条规则选中了列表中的最后一个 `<a>`元素，然后删除了它的间距 (margin)。完成！
  - 最后三条声明就比较简单了，主要是为链接各个状态添加了颜色。我们居中了每个链接中的文本，设置 {{cssxref("line-height")}} 为 3，让按钮有一些高度 (这也具有垂直居中文本的优点)，并设置文本的颜色为黑色。

> **备注：** 你也许会注意到 HTML 中的列表的每项内容都在同一行上，这是因为 inline-block 元素在页面上创建的空格换行符，就像几个字之间的空格，这样的空隙也许会破坏我们的水平导航菜单布局。所以我们删除了空格。你可以在 [Fighting the space between inline block elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/) 找到有关此问题的更多信息（和解决方案）。

## 测试你的技巧！

你已经到了本文结尾，并且在我们的交互学习部分已经做了一些技巧测试。但是你在继续之前记住了最重要的信息了吗？你可以在模块末尾找到一个用于验证你已掌握知识的评估——见[给一个社区大学的主页排版](/zh-CN/docs/Learn/CSS/%E4%B8%BA%E6%96%87%E6%9C%AC%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F/Typesetting_a_homepage)。

这个评估测试了这个模块讨论到的所有知识，这样你可能在读下一篇文章之前想看一下它。

## 小结

我们希望本文为你提供有关链接的所有知识——目前！我们的样式文本模块中的最后一篇文章详细介绍了如何在你的网站上使用自定义字体，或者更熟悉网络字体。

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
