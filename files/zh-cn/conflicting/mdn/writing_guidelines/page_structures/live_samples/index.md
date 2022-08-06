---
title: 如何创建一个交互学习环境
slug: conflicting/MDN/Writing_guidelines/Page_structures/Live_samples
tags:
  - MDN Meta
  - 交互
  - 如何使用
  - 学习
  - 教程
translation_of: MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web
original_slug: MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web
---
{{MDNSidebar}}

动态的内容对于学习 Web 来说是重要的。她能让学习的人更加积极主动。这可以是练习，实例，任务，评价等等。总之，任何有助于学习理解的东西都行。

这儿还没有能够直接创建动态的实例内容。但是一些第三方工具可以帮助你创建（如： [JSFiddle](https://jsfiddle.net/)，[CodePen](https://codepen.io/)，[Dabblet](http://dabblet.com/)，等），你可以将其链接放在 MDN 文章中。

目前，MDN 虽然没有能够轻易创建动态实例内容的工具。不过，如果你是工程师，可以使用当前 MDN 提供的功能创建自定义的主动学习内容，下面内容将告诉你如何操作。

## MDN live samples

MDN 有一个非常炫酷的功能：live samples。她是一种可以将 MDN 页面内任何 HTML, CSS, Javascript 代码等效执行的机制。在使用她以前，你最好通读一下 [Using the live sample system](/en-US/docs/MDN/Contribute/Editor/Live_samples)，这是我们关于她的完整文档。虽然她很容易使用，不过通过阅读文档，你会学到一些奇淫巧技。

有意思的是，将任何类型的工具或实例嵌入到 MDN 页面中都可以通过调教她轻松做到。

### 隐藏代码

通过实例创建主动学习内容的第一种方法是编辑要添加内容的页面。使用 Live Sample 功能创建内容，只构建你需要的功能，不要在乎代码的复杂度。当内容准备好之后，只需切换到编辑器视图，并用 class 为 `hidden `的 {{HTMLElement('div')}} 来包围你的代码。这样代码就会隐藏，不过实例依然可以访问和显示。

看看这个简单的代码：

点击这个方块提供随机色，或者直接输入色值

<div class="hidden_code_example"><pre class="brush: html hidden">&#x3C;div class="square">
  #&#x3C;input class="color">
&#x3C;/div></pre><pre class="brush: css hidden">body {
  padding: 10px;
  margin : 0;
}

.square {
width : 80px;
height : 80px;
padding: 10px;
background-color: black;
color: white;
text-align: center;
}

.color {
width: 60px;
text-transform: uppercase;
}

</pre><pre class="brush: js hidden">function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').value = color;
}

function getRandomColor() {
var color = Math.floor(Math.random() \* 16777215);
return color.toString(16);
}

function getInputColor() {
var value = document.querySelector('.color').value;
var color = Number('0x' + color);
if (color === +color) {
return color.toString(16);
}
return value;
}

document.addEventListener('click', function () {
setColor(getRandomColor());
});

document.addEventListener('keyup', function () {
setColor(getInputColor());
});

</pre></div>

{{EmbedLiveSample('hidden_code_example', 120, 120)}}

如果你使用 MDN 编辑器查看该页面代码，你会看到如下 HTML 代码：

```html
<div class="moreinfo">
<p>Click on the following square to randomly change its color or just type an hexadecimal code color</p>

<div class="hidden">
<h4 id="hidden_code_example">hidden code example</h4>

<h5 id="HTML">HTML</h5>

<pre class="brush: html">
&lt;div class="square"&gt;
  #&lt;input class="color"&gt;
&lt;/div&gt;</pre>

<h5 id="CSS">CSS</h5>

<pre class="brush: css">
body {
  padding: 10px;
  margin : 0;
}

.square {
  width  : 80px;
  height : 80px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}

.color {
  width: 60px;
  text-transform: uppercase;
}
</pre>

<h5 id="JS">JS</h5>

<pre class="brush: js">
function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').value = color;
}

function getRandomColor() {
  var color = Math.floor(Math.random() * 16777215);
  return color.toString(16);
}

function getInputColor() {
  var value = document.querySelector('.color').value;
  var color = Number('0x' + color);
  if (color === +color) {
    return color.toString(16);
  }
  return value;
}

document.addEventListener('click', function () {
  setColor(getRandomColor());
});

document.addEventListener('keyup', function () {
  setColor(getInputColor());
});
</pre>
</div>

\{{EmbedLiveSample('hidden_code_example', 120, 120)}}
</div>
```

你可以在 [the Canvas API page](/en-US/docs/Web/API/Canvas_API#JavaScript) 查看更多高级例子。

### 外部代码

前面的例子在你想嵌入主动学习内容时是可行的。不过，如果你想要处理更加复杂的代码，这个 `hidden` 的 {{HTMLElement('div')}} 就比较麻烦。

另外种方案是将内容写入 MDN 页面，然后嵌入另一个页面中。为此，我们可以使用 [`EmbedDistLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedDistLiveSample.ejs) 替代 [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs)。

我们学习配置这个模拟远程代码嵌入的实例：

点击这个方块提供随机色，或者直接输入色值

{{EmbedLiveSample('The_example', 120, 120, '', 'MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web/distant_example')}}

这下如果你继续使用 [MDN 编辑器](/en-US/docs/MDN/Contribute/Editor/Source_mode)查看页面源码，将看不到隐藏元素。如果你需要看，则需要前往这个页面[地址](/en-US/docs/MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web/distant_example)。

你可以在 [HTML 表单教程](/en-US/docs/Web/Guide/HTML/Forms/How_to_build_custom_form_widgets)中查看更多高级例子，那里可以使用表单尝试。
