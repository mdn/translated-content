---
title: 高级区块效果
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_boxes/Styling tables", "Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}

这篇文章展示了盒子的小技巧，提供了一些高级特性的介绍，这些特性不适合其他类别的样式，比如盒子阴影、混合模式和滤镜。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        HTML 基础 (学习
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >) ，了解 CSS 工作原理 (学习
        <a href="/zh-CN/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        要了解如何使用高级的盒子效果，并了解一些在 CSS 语言中出现的新样式工具。
      </td>
    </tr>
  </tbody>
</table>

## 盒子阴影

回到我们的[样式化文本](/zh-CN/docs/Learn/CSS/Styling_text)模块，我们查看了{{cssxref("text-shadow")}}属性，它允许您将一个或多个阴影应用到元素的文本上。对于盒子来说，存在一个等价的属性——{{cssxref("box-shadow")}}允许您将一个或多个阴影应用到一个实际的元素盒子中。和文本阴影一样，盒子的阴影在各种浏览器中也得到了很好的支持，但只有在 IE9+（IE9 及更新版本）中可用。你的旧 IE 版本的用户可能只需要应付没有阴影的情况，所以只要测试一下你的设计，确保你的内容在没有他们的情况下是清晰可见的。

你可以 [box-shadow.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/box-shadow.html)在这部分找到例子 (见[源码](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/box-shadow.html))。

### 一个简单的盒子阴影

让我们看一个简单的例子来起步。首先，一些 HTML：

```html
<article class="simple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

现在是 CSS:

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25)
  );
}

.simple {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
}
```

结果如下：

{{ EmbedLiveSample('一个简单的盒子阴影', '100%', 100) }}

你会看到，我们在`box-shadow`属性值中有 4 个项：

1. 第一个长度值是水平偏移量（**horizontal offset** ）——即向右的距离，阴影被从原始的框中偏移 (如果值为负的话则为左)。
2. 第二个长度值是垂直偏移量（**vertical offset**）——即阴影从原始盒子中向下偏移的距离 (或向上，如果值为负)。
3. 第三个长度的值是模糊半径（**blur radius**）——在阴影中应用的模糊度。
4. 颜色值是阴影的基本颜色（**base color**）。

你可以使用任何长度和颜色单位来定义这些值。

### 多个盒子阴影

还可以在单个`box-shadow`声明中指定多个框阴影，用逗号分隔：

```html hidden
<article class="multiple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25)
  );
}

.multiple {
  box-shadow:
    1px 1px 1px black,
    2px 2px 1px black,
    3px 3px 1px red,
    4px 4px 1px red,
    5px 5px 1px black,
    6px 6px 1px black;
}
```

结果如下：

{{ EmbedLiveSample('多个盒子阴影', '100%', 100) }}

我们在这里做了一些有趣的事情，创建了一个带有多个颜色图层的凸起的盒子，但是你可以用任何你想要的方式来使用它，例如，用基于多个光源的阴影来创建一个更加真实的外观。

### 其他盒子阴影特点

与{{cssxref("text-shadow")}}不同，{{cssxref("box-shadow")}}有一个`inset`关键字可用——把它放在一个影子声明的开始，使它变成一个内部阴影，而不是一个外部阴影。让我们看一看。

首先，我们将为这个例子使用一些不同的 HTML：

```html
<button>Press me!</button>
```

```css
button {
  width: 150px;
  font-size: 1.1rem;
  line-height: 2;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to bottom right, #777, #ddd);
  box-shadow:
    1px 1px 1px black,
    inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(255, 255, 255, 0.5);
}

button:focus,
button:hover {
  background-image: linear-gradient(to bottom right, #888, #eee);
}

button:active {
  box-shadow:
    inset 2px 2px 1px black,
    inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(255, 255, 255, 0.5);
}
```

结果如下：

{{ EmbedLiveSample('其他盒子阴影特点', '100%', 70) }}

在这里我们将 focus/hover/active 这些声明一起设置了按钮样式。这个按钮的默认状态下设置了一个简单的黑色盒阴影，并且加上了一对 inset 阴影，一个明的，一个暗的，位于按钮的两个对角上，以此给按钮一种很棒的阴影效果。

当按钮被按下时，这里的 active 声明将第一个盒阴影换成一个非常暗的 inset 阴影。给人一种按钮被按下的样子。

> **备注：** 还有一个可以在 box-shadow 中设置的值 — 另外一个位于颜色值前面可选的长度值，即**spread radius**，如果设置了这个值，将会导致阴影变得比原始的阴影更大，这个值不是很常用，但是值得一提。

## Filters（滤镜）

CSS 滤镜提供了一种过滤元素的方法，就好比你在诸如 Photoshop 这样的平面设计程序中过滤元素一样。有大量的不同的选项可以使用，你可以在{{cssxref("filter")}} 参考页面阅读所有相关的更多细节。在这篇文章中，我们将会向你介绍它的语法，并且向你展示将会发生多么有趣的结果。

基本上，滤镜可以应用在任何元素上，块元素（block）或者行内元素（inline）——你只需要使用`filter`属性，并且给他一个特定的过滤函数的值。有些可用的滤镜选项和其他 CSS 特性做的事情十分相似，例如`drop-shadow()`的工作方式以及产生的效果和 {{cssxref("box-shadow")}} 或{{cssxref("text-shadow")}}十分相似。然而滤镜真正出色的地方在于，它们作用于盒（box）内内容（content）的确切形状，而不仅仅将盒子本身作为一个大的块，这看起来会更棒，即使他们可能不会总是变成你想要的模样。让我们来举一个简单的例子来阐明我们的意思：

首先，一些简单的 HTML:

```html
<p class="filter">Filter</p>

<p class="box-shadow">Box shadow</p>
```

现在是一些 CSS，用来给它们各自一个下降的阴影：

```css
p {
  margin: 1rem auto;
  padding: 20px;
  width: 100px;
  border: 5px dashed red;
}

.filter {
  -webkit-filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.7));
}

.box-shadow {
  box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.7);
}
```

这给了我们一个如下的结果：

{{ EmbedLiveSample('Filters（滤镜）', '100%', 200) }}

正如你所看到的，drop-shadow 滤镜跟随着文本和 border dashes 的确切形状。而盒阴影（box-shadow）仅仅跟随着盒的四方。

其他需要注意的事：

- 滤镜很新——它们可以被大多数的现代的浏览器支持，包括 Microsoft Edge，但它们一点也不能被 IE 浏览器支持。因此如果你在你的设计中使用滤镜，你需要确保你的内容即使没有滤镜也是可用的。
- 你会看到我们在`filter`属性中通过`-webkit-`前缀包含了一个版本信息，这被称为一个 {{glossary("Vendor Prefix")}}，有时会被浏览器使用，以在一个新特性完整实现之前，当它与无前缀版本没有冲突的时候支持并实验这个特性。Vendor prefixes 永远都不被指望着被 web 开发人员使用，但是它们有时候确实会被在产品页面中使用，即当实验性的特性确实被需要时。在这个实例中，Chrome/Safari/Opera 目前要求这些属性的`-webkit-`版本，而 Edge 和 Firefox 则使用后者，无前缀版本。

> **备注：** 如果你确实决定在你的代码中使用前缀，确保你包括了所有需要的前缀以及无前缀的版本，这样才会有尽可能多的浏览器能够使用这些特性，并且如果浏览器落下了前缀，它们也能够使用无前缀的版本。另外需要注意的是这些实验性的特性可能会有改变，这可能会导致你的代码被破坏，在前缀被去除之前，最好还是仅仅实验这些特性。

你可以看到更多关于滤镜的例子，在 [filters.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/filters.html) (也可以看 [source code](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/filters.html)).

## Blend modes（混合模式）

CSS 混合模式允许我们为元素添加一个混合模式，以当两个元素重叠时，指定一个混合的效果——最终每个像素所展示的颜色将会是原来像素中颜色和其下面一层相组合之后的结果，对于像 Photoshop 这样的图形程序的用户来说，混合模式应该也非常熟悉。

这里有两个在 CSS 中用到的属性：

- {{cssxref("background-blend-mode")}}, 用来将单个元素的多重背景图片和背景颜色设置混合在一起。
- {{cssxref("mix-blend-mode")}}, 用来将一个元素与它覆盖的那些元素各自所设置的背景（background）和内容 (content) 混合在一起。

你可以找到比这里用到的更多的例子，在我们的[blend-modes.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) 示例页面 (查看 [source code](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)), 或者在 {{cssxref("&lt;blend-mode&gt;")}} 参考页面。

> **备注：** 混合模式（Blend modes）同样也很新，而且略微不如滤镜（filter）的被支持度。至今也没有没 Edge 支持，并且 Safari 也仅仅支持部分混合模式选项。

### background-blend-mode

让我们再来看一些例子以帮助我们更好的理解这一点。首先，{{cssxref("background-blend-mode")}}——在这里我们将展示一对简单的{{htmlelement("div")}}s，这样你就可以比较原始版本和混合版本：

```html
<div></div>
<div class="multiply"></div>
```

现在来点 CSS — 我们正在给`<div>`添加一个背景图像和一个绿色的背景色：

```css
div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

我们得到的结果是这样的——你可以看到左边的原始版本，以及右边的多层混合版本：

{{ EmbedLiveSample('background-blend-mode', '100%', 200) }}

### mix-blend-mode

现在让我们看一看 {{cssxref("mix-blend-mode")}}。这里我们将给出两个相同的`<div>`，但是每个都位于一个有着紫色背景的简单的`<div>`上，来向你展示元素们将会怎样混合在一起：

```html
<article>
  No mix blend mode
  <div></div>
  <div></div>
</article>

<article>
  Multiply mix
  <div class="multiply-mix"></div>
  <div></div>
</article>
```

这是我们将用来装饰它的 CSS:

```css
article {
  width: 300px;
  height: 180px;
  margin: 10px;
  position: relative;
  display: inline-block;
}

div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
}

article div:first-child {
  position: absolute;
  top: 10px;
  left: 0;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

article div:last-child {
  background-color: purple;
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: -1;
}

.multiply-mix {
  mix-blend-mode: multiply;
}
```

结果如下：

{{ EmbedLiveSample('mix-blend-mode', '100%', 200) }}

你可以看到，多层混合（mix-blend）不仅混合了两种背景图像，还混合了在`<div>`下面的颜色。

> **备注：** 如果你不理解上面的一些布局属性，请不要担心，像 {{cssxref("position")}}、{{cssxref("top")}}、{{cssxref("bottom")}}、{{cssxref("z-index")}} 等。我们将在 [CSS Layout](/zh-CN/docs/Learn/CSS/CSS_layout) 模块中详细地介绍这些内容。

## -webkit-background-clip: text

另一个我们认为在继续之前会提到的新特性 (目前支持 Chrome、Safari 和 Opera，和 Firefox 正在实现) 是{{cssxref("background-clip")}}的 `text` 值。当与专有 `-webkit-text-fill-color: transparent;` 特性一起使用时，这允许您将背景图像剪贴到元素文本的形状，从而产生一些不错的效果。这不是一个正式的标准，但是已经在多个浏览器中实现了，因为它很流行，并且被开发人员广泛使用。在这种情况下，这两种属性都需要一个`-webkit-`供应商前缀，甚至对于非 webkit/Chrome-based 的浏览器来说也是如此。

```css
.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

那么为什么其他浏览器会实现一个 `-webkit-` 前缀？主要是为了浏览器兼容性——许多 web 开发人员已经开始使用 `-webkit-` 前缀来实现 web 站点，它开始看起来像其他的浏览器一样被破坏了，而实际上他们遵循的是标准。因此，他们被迫实施了一些这样的功能。这就凸显了在你的工作中使用非标准和/或带前缀的 CSS 特性的危险——这不仅会导致浏览器兼容性问题，而且还会发生变化，因此你的代码随时可能崩溃。坚持标准要好得多。

如果您确实希望在您的生产工作中使用这些特性，请确保在浏览器中进行彻底的测试，并检查这些特性不工作的地方，站点仍然可用。

> **备注：** 对于一个完整的 `-webkit-background-clip: text` 代码示例，见[background-clip-text.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/background-clip-text.html)（也可以见[源码](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/background-clip-text.html)）。

## 自主学习：尝试一些效果

现在轮到你了。对于这种自主学习，我们希望您使用下面所提供的代码来试验上面所读到的一些效果。

如果你犯了一个错误，你可以用 _Reset_ 按钮来重置这个例子。

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<div class="style-me">
</div></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
.style-me {
  width: 280px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background-color: red;
  background: url(colorful-heart.png) no-repeat center 20px,
              linear-gradient(to bottom right, #f33, #a33);
} </textarea
  >

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 15em;padding: 10px;border: 1px solid #0095dd;overflow:hidden;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
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

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('自主学习：尝试一些效果', 700, 820) }}

## 总结

我们希望这篇文章被证明是很有趣的——玩着闪亮的玩具通常是很有趣的，而且看看什么样的工具在尖端的浏览器中是可以得到的是我们很感兴趣的。您已经到达了样式盒文章的末尾，因此，接下来您将通过我们的评估来测试您的 box syling 技能。

{{PreviousMenuNext("Learn/CSS/Styling_boxes/Styling tables", "Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}
