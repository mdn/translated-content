---
title: 定位实例练习
slug: Learn/CSS/CSS_layout/Practical_positioning_examples
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

掌握了上一篇文章中的定位的基础知识，我们将着眼于实现一些现实中的例子，来演示你能用定位来做什么。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row"><p>预备知识：</p></th>
      <td>
        <p>
          HTML 基础 (学习<a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
            >Introduction to HTML</a
          >),和 CSS 怎么工作的 (学习<a
            href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
            >Introduction to CSS</a
          >.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>目标：</p></th>
      <td><p>了解定位的实例</p></td>
    </tr>
  </tbody>
</table>

## 列表消息盒子

我们研究的第一个例子是一个经典的选项卡消息框，你想用一块小区域包括大量信息时，一个非常常用的特征。这包括含有大信息量的应用，比如策略战争游戏，比如从移动版的网页，屏幕狭小、空间有限；比如你可能想要放置许多信息的紧凑消息框，不用就会充满整个 UI。我们简单的例子完成后就会像下面这样：

![](tabbed-info-box.png)

> **备注：** 你能看完整的示例，可运行在 [info-box.html](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) ([source code](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html))。检出它以理解你在本文章里要建立什么。

你可能会想：”为什么不仅仅做独立的选项卡为一个独立的网页，然后通过点击不同的标签来在不同的页面跳转来达到这个效果？“这样代码可能会简单一些，是的。但是这样每个独立的”页面“视图将会实际上是一个新加载的网页，跨视图更难保存信息，并把这个特征融入一个更大的 UI 设计。另外，所谓的”单页应用“正在变得非常流行——尤其是移动网页 UI——因为把一切的服务放在一个单独的文件上可以减少 HTTP 请求的数量来浏览所有内容，从而提高性能。

> **备注：** 一些网络开发者甚至更超前，每次只加载一页的信息，并且使用 JavaScript 诸如 [XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest)特征动态改变信息显示。但是，在你此时的学习中，我们希望尽可能保持简单。接下来会有一些 JavaScript，但是只有一点。

在开始之前，我们需要你拷贝文件到本地，当作起始的 HTML 文件—— [info-box-start.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box-start.html). 保存到你的计算机合适的位置，然后在你的编辑器里打开。让我们看看包含在 body 里的 HTML 代码：

```html
<section class="info-box">
  <ul>
    <li><a href="#" class="active">Tab 1</a></li>
    <li><a href="#">Tab 2</a></li>
    <li><a href="#">Tab 3</a></li>
  </ul>
  <div class="panels">
    <article class="active-panel">
      <h2>The first tab</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. Vestibulum
        et orci scelerisque, vulputate tellus quis, lobortis dui. Vivamus varius
        libero at ipsum mattis efficitur ut nec nisl. Nullam eget tincidunt
        metus. Donec ultrices, urna maximus consequat aliquet, dui neque
        eleifend lorem, a auctor libero turpis at sem. Aliquam ut porttitor
        urna. Nulla facilisi.
      </p>
    </article>
    <article>
      <h2>The second tab</h2>

      <p>
        This tab hasn't got any Lorem Ipsum in it. But the content isn't very
        exciting all the same.
      </p>
    </article>
    <article>
      <h2>The third tab</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        turpis nibh, porttitor nec venenatis eu, pulvinar in augue. And now an
        ordered list: how exciting!
      </p>

      <ol>
        <li>dui neque eleifend lorem, a auctor libero turpis at sem.</li>
        <li>Aliquam ut porttitor urna.</li>
        <li>Nulla facilisi</li>
      </ol>
    </article>
  </div>
</section>
```

这样我们已经得到了一个{{htmlelement("section")}}元素带有类（`class`）为 `info-box`。此元素又包含一个 {{htmlelement("ul")}} 和一个 {{htmlelement("div")}}。无序列表包含三个列表项，列表项有链接在内，实际上将成为用于点击后显示内容面板的选项卡。 `div` 包含三个{{htmlelement("article")}} 元素，构成对应于每个选项卡的内容面板。每个面板包含一些示例内容。

这里的思路是我们将样式化选项卡看起来是一个标准的水平导航菜单，使用绝对定位样式化面板互相坐落其顶上。我们也给你一点 JavaScript 包含到你的页面上，当选项卡被按下时，显示对应的面板，并且样式化选项卡本身。你不需要在这个阶段了解 JavaScript 本身，但是你应该尽快学习一些基本的 [JavaScript](/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics)——你的用户界面越复杂，越需要一些 JavaScript 来实现你渴望的功能。

### 一般设置

开始前，在{{HTMLElement("style")}}开闭标签之间添加下面的代码：

```css
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
```

这只是一些一般设置，在我们页面上设置了无衬线的字体、使用 {{cssxref("box-sizing")}} 模型，去掉 {{htmlelement("body")}} 默认外边距。

下一步，在你早先的 CSS 下面加入如下代码：

```css
.info-box {
  width: 450px;
  height: 400px;
  margin: 0 auto;
}
```

这对内容设置具体的高度和宽度、在屏幕居中使用老把戏 `margin: 0 auto` 。在早先的课程中我们建议尽可能不固定内容容器的高度。这个情况下是可以的，因为我们是在选项卡中固定的内容，如果每个标签都有不同的高度，看起来也有些不和谐。

### 样式化我们的选项卡

现在我们希望样式化选项卡看上去像选项卡——基本，这些是一个水平的导航标签，但不是点击之后加载不同的网页，和我们之前在课程中见到的不同，相反，他们在同一页面上显示不同的面板。首先，在你的 CSS 底部添加下列规则，从无序列表中移除默认的{{cssxref("padding-left")}}和{{cssxref("margin-top")}}值：

```css
.info-box ul {
  padding-left: 0;
  margin-top: 0;
}
```

> **备注：** 我们正在使用后代选择器，整个例子 `.info-box` 都位于链的开始——这样页面已经带有其他内容时，我们可以插入这个特征，不害怕与应用于页面其他部分的样式冲突。

接下来，我们将样式化水平选项卡——列表项都要左浮动确保他们一行合起来，他们的{{cssxref("list-style-type")}}被设置为 `none` 用以去除项目符号，宽度（{{cssxref("width")}}）设置为 `150px` 以便于适应这个 info-box。链接（ {{htmlelement("a")}} ）元素设置为{{cssxref("display")}} inline-block，这样他们将在一行显示，仍然保持样式可设置，他们会被样式化合适的选项卡按钮，通过一系列的其他属性。

添加下列的 CSS：

```css
.info-box li {
  float: left;
  list-style-type: none;
  width: 150px;
}

.info-box li a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  line-height: 3;
  background-color: red;
  color: black;
  text-align: center;
}
```

最后，对于本节，我们将会在链接状态上设置一些样式。首先，我们要设置标签的 `:focus` 和 `:hover` 状态，让他们在获得焦点/鼠标悬浮的时候看起来不同，给用户提供一些可视化反馈。其次，当某个选项卡的类（ `class` ）出现 `active` 时，我们为其设置一条相同的样式规则。我们将通过使用 JavaScript 来设置，当一个标签被点击时。把这些 CSS 放置在你的其他样式后面：

```css
.info-box li a:focus,
.info-box li a:hover {
  background-color: #a60000;
  color: white;
}

.info-box li a.active {
  background-color: #a60000;
  color: white;
}
```

### 样式化面板

下一步工作是样式化我们的面板，现在开始吧！

首先，添加下列的规则去样式化 `.panels` {{htmlelement("div")}} 容器。我们简单的设置一个固定的高度，确保面板包含在 info-box 里面，{{cssxref("position")}} `relative` 设置 {{htmlelement("div")}} 为定位上下文，这样你能然后相对自身放置定位子元素，而不是相对{{htmlelement("html")}}元素，最后我们清除（{{cssxref("clear")}}）浮动，设置在上面 CSS 中，这样避免影响布局的剩余部分。

```css
.info-box .panels {
  height: 352px;
  position: relative;
  clear: both;
}
```

在本节的最后，我们将对包含我们面板的单独 {{htmlelement("article")}} 元素设置样式。我们添加的第一条规则就是绝对定位面板，让他们都位于{{htmlelement("div")}}容器的左上角——这一部分对整个布局特性是关键的，就像使面板互相位于顶部。规则设置面板为和容器同样的高度，给内容一些内边距，设置字体颜色（{{cssxref("color")}}），和背景颜色（{{cssxref("background-color")}}）。

我们将添加的第二条规则，对带有类（ `class` ）为（ `active-panel` ）的面板，设置{{cssxref("z-index")}} 为 1，会让他位于其他的面板之上（默认定位元素 `z-index` 的值是 0，会使默认元素位于下面）。同样的，我们会在合适的时候用 JavaScript 来添加这个类。

```css
.info-box article {
  position: absolute;
  top: 0;
  left: 0;
  height: 352px;
  padding: 10px;
  color: white;
  background-color: #a60000;
}

.info-box .active-panel {
  z-index: 1;
}
```

### 添加我们的 JavaScript

让这些特性工作的最后一步是添加一些 JavaScript。添加下列一块代码，准确的写在你的开始和结束的{{htmlelement("script")}}标签之间（在接下来的 HTML 内容中你将会发现这些）：

```js
var tabs = document.querySelectorAll(".info-box li a");
var panels = document.querySelectorAll(".info-box article");

for (i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function () {
    for (i = 0; i < tabs.length; i++) {
      if (tabs[i].getAttribute("class")) {
        tabs[i].removeAttribute("class");
      }
    }

    tab.setAttribute("class", "active");

    for (i = 0; i < panels.length; i++) {
      if (panels[i].getAttribute("class")) {
        panels[i].removeAttribute("class");
      }
    }

    panels[tabPos].setAttribute("class", "active-panel");
  };
}
```

这些代码做了如下工作：

- 首先我们保存所有的选项卡和所有的面板引用到两个变量中，名为 `tabs` 和 `panels`，这样此后我们可以容易地为它们做事。
- 然后我们使用 `for` 循环遍历所有的选项卡，并且在每一个上运行叫做`setTabHandler()` 的函数，此函数建立当每个选项卡被点击时应该发生的功能。运行时，函数会被传递选项卡，和一个索引数`i` 指明选项卡在`tabs` 数组中的位置。
- 在 `setTabHandler()` 函数中，这个标签创建了一个 `onclick` 事件来处理点击，所以当标签被点击的时候，接下来会发生：

  - 用一个 `for` 循环清除所有标签当前存在的类。
  - 当点击的时候在标签上创建了一个 `active` 类——从相关联的元素中继承了 CSS 的一些属性，具有和 panels 的样式相同的 {{cssxref("color")}} 和 {{cssxref("background-color")}}。
  - 用一个 `for` 循环清除所有面板当前存在的类。
  - 当标签被点击的时候在和标签相对应的面板上创建了一个 `active-panel` 类——从相关联的元素中继承了 CSS 的一些属性，使其 {{cssxref("z-index")}} 属性被设置为 1，让它能位于所有的面板的上面。

这是第一个例子，保持你的代码打开，我们将会在第二个例子中继续添加。

## 一个固定位置的列表消息盒子

在我们的第二个例子中，我们将会采用我们的第一个例子——我们的消息盒子——把她加到一个满的网页之中去。但是不仅仅是这样——我们将固定她的位置，以便于他能待在浏览器窗口的同一个位置。当主要内容滚动时，这个消息盒子将会待在屏幕的同一个位置。完成的例子：

![](fixed-info-box.png)

> **备注：** 你可以点击[蓝字](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/fixed-info-box.html)预览完成后的效果，看看哪些部分是你在这篇文章里你要制作的。

在开始的时候，你可以使用第一部分中完成的例子，或者从我们的 Github 仓库中拷贝 [info-box.html](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/info-box.html) 到本地。

### 添加 HTML

首先，我们需要一些额外的内容在当前的主内容中。添加下列{{htmlelement("section")}} 在你的 {{htmlelement("body")}} 标签之中，放在在已存在的部分之中：

```html
<section class="fake-content">
  <h1>Fake content</h1>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
  <p>
    This is fake content. Your main web page contents would probably go here.
  </p>
</section>
```

> **备注：** 你可以随意更改假的内容，替换为你想要的真的内容。

### 更改存在的 CSS

接下来我们需要对之前的 CSS 进行一些小修改，让消息盒子放置和定位更好。删除 margin: 0 auto（不需要居中显示），添加 fixed 定位；调整 top 属性把它粘在浏览器的视域。

它应该看起来像下面这样：

```css
.info-box {
  width: 450px;
  height: 400px;
  position: fixed;
  top: 0;
}
```

### 对主内容样式设计

对于这个例子来说唯一剩下的事情就是给主内容提供一些样式设计。添加下面的规则到你剩下的 CSS 的下面：

```css
.fake-content {
  background-color: #a60000;
  color: white;
  padding: 10px;
  height: 2000px;
  margin-left: 470px;
}
```

开始我们给这个内容和消息盒子面板一样的背景颜色，颜色，内边距。然后给他一个大的 margin-left 使他移动到右边，为消息盒子在左边腾出位置，以便于各个部分不重叠。

这标志着第二个例子的结束；我们希望你能感到第三个例子，完全是因为兴趣。

## 一个滑动隐藏的面板

最后一个我们在这里介绍的例子是通过按图标使面板滑动出现或者消失——就像前面提到的，这种场景在移动端的布局很流行，因为移动端的屏幕很小，所以你不希望使用大部分界面来显示一个有用的内容而是用消息面板或者菜单代替。

我们完工后的例子长这样：

![](hidden-sliding-panel.png)

> **备注：** 你可以点击[蓝字](http://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html)预览完成后的效果，仔细看看哪些部分是你在这篇文章里你要制作的。

在一开始，老规矩在我们的 GitHub 代码仓库拷贝 [hideen-info-panel-start.html](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/hidden-info-panel.html)（[源码](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/hidden-info-panel.html)）。这个例子并没有用先前的例子，所以我们需要一个新的开始文件。让我们来仔细观察一下这个 HTML 文件：

```css
<label for="toggle">❔</label>
<input type="checkbox" id="toggle">
<aside>

  ...

</aside>
```

开始，我们看到了一个 {{htmlelement("label")}} 元素和 {{htmlelement("input")}} 元素——`<label>`元素普遍用来联系文字标签和表单，目的是能更好的理解表单（允许屏幕阅读器用户查看表单元素的描述）。这里通过`for`属性绑定`id`到了`<input>`标签的 checkbox 元素。

> **备注：** 我们已经设置了一个特殊的问题标记特性到我们的 HTML 中，来当作我们的信息图标——这代表着这个按钮将可以按下显示或隐藏面板。

现在我们将这些元素用于稍微不同的目的——另一个 `<label>` 标签有用的副作用使你能通过点击 checkbox 的 label 标签来选择这个 checkbox，就好像点击了这个 checkbox 自己一样。这就会实现有名的 [checkbox hack](https://css-tricks.com/the-checkbox-hack/) 技术，可以提供无 JavaScript 的方法来通过按钮来控制一个元素。我们将通过其他两个元素控制 {{htmlelement("aside")}} 元素。（为了简洁起见，我们已将其内容从上述代码列表中删除）。

在下面的部分我们将解释这一切如何运作。

### 设置表单元素样式

首先让我们处理表单元素 - 在 {{htmlelement("style")}} 标签之间添加以下 CSS：

```css
label[for="toggle"] {
  font-size: 3rem;
  position: absolute;
  top: 4px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
}

input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

第一条规则样式化 `<label>` 标签；我们：

- 设置更大的 {{cssxref("font-size")}} 使图标更大更美观。
- 设置 {{cssxref("position")}} 为 `absolute`，使用 {{cssxref("top")}} 属性和 {{cssxref("right")}} 属性来让他能很合适的位于右上角。
- 设置其 {{cssxref("z-index")}} 为 1——因此当信息面板被赋予样式和显示的时候，不会覆盖我们的图标；相反图标依然会位于最上层能够再次被按下来隐藏信息平板。
- 使用 {{cssxref("cursor")}} 属性来改变鼠标的指针，当鼠标悬浮在图标上面的时候变成一个手形指针（就像你看到的当悬浮在链接上一样），作为一个额外的可视化线索告诉用户这个图标可以做一些有趣的事情。

第二条规则是在实际的 `<input>` 元素的 checkbox 上设置{{cssxref("position")}} 属性为 `absolute`，并从屏幕上方隐藏掉它，我们并不希望在我们的用户界面里看到它。

### 设置面板的样式

现在是时候为实际的滑动面板设计风格了。在你的 css 底部添加下列规则：

```css
aside {
  background-color: #a60000;
  color: white;

  width: 340px;
  height: 98%;
  padding: 10px 1%;

  position: fixed;
  top: 0;
  right: -370px;

  transition: 0.6s all;
}
```

这里有很多项——让我们一点一点讨论：

- 首先，我们在信息盒子中设置了一些简单的 {{cssxref("background-color")}} 和 {{cssxref("color")}}。
- 然后，我们在面板上设置一个固定的 {{cssxref("width")}} ，让它的 {{cssxref("height")}} 充满整个浏览器窗口的视口。
- 我们同样包括一些 {{cssxref("padding")}} 来组成我们想要的总的高度和宽度的值（如果我们没有设置 `box-sizing: border-box;` ，那就很有必要，正如这个例子）
- 然后，我们在面板上设置 {{cssxref("position")}}`: fixed;`，即使页面的内容在滚动，也总是显示在同一个位置。我们设置 {{cssxref("top")}} 属性，使其粘在视口顶部，设置 {{cssxref("right")}} 属性使其默认情况下位于屏幕的右边。
- 最后我们在元素上设置 {{cssxref("transition")}} 属性，Transitions 是一个有意思的特性，允许你在状态改变的时候平滑的过渡，而不是粗暴的“开”或“关”。在这个例子中我们尝试在 checkbox 被选中时让面板平滑的滚动。（或者换句话说，当问题标记图标被点击以后——记住，点击 `<label>` 标签也会选择相对应的 checkbox！我们已经告诉你这是一种 hack 了）你也将会学到更多……

### 设置选择后的状态

这是最后要添加的一点 CSS ——把这些放到你的 CSS 底部：

```css
input[type="checkbox"]:checked + aside {
  right: 0px;
}
```

这里的选择器是复杂的——我们选择与 `<input>` 元素邻接的 `<aside>` 元素，但是仅仅在它被选择时（请注意使用 {{cssxref(":checked")}} 伪类来实现此目的），在这种情况下，我们将 `<aside>` 的 {{cssxref("right")}} 属性设置为 0px，会造成面板再次出现在屏幕上（由于过渡属性会平滑的出现）。再一次点击这个标签会取消选中 checkbox，面板将会跟着再一次消失。

所以你有 ——一个相当巧妙的避免使用 JavaScript 来创建一个切换按钮效果方式。这将在 IE9 及以上版本中起作用（平滑过渡将在 IE10 及更高版本中起作用）。这种效果确实有一些问题 ——这是有点滥用表单元素（它们不是为了这个目的），并且在无障碍方面效果不是很好——标签在默认情况下不可聚焦，并且表单元素的非语义使用可能会导致屏幕朗读器出现问题。JavaScript 和链接或按钮可能更合适，但这样的实验仍然很有趣。

## 总结

这样完成了我们对定位的关注——现在，你应该理解基本机制的工作原理，同样理解了怎样应用这些知识去构建一些有趣的用户界面功能，不要由于你还未完全理解所有的知识而担心——定位是一个相当高级的话题，你可以随时读这篇文章来帮助你的理解。下一个主题我们将转向 Flexbox。

{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}
