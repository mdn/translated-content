---
title: 如何构建自定义表单控件
slug: Learn/Forms/How_to_build_custom_form_controls
---

{{LearnSidebar}}

在许多情况下，可用的原生 HTML 表单控件是不够的。如果要在某些控件（例如 {{HTMLElement("select")}} 元素）上[设置高级样式](/zh-CN/docs/Learn/Forms/Advanced_form_styling)，或者如果要提供自定义行为，你就需要考虑构建自己的控件。

在本文中，我们会看到如何构建自定义控件。为此，我们将使用这样一个示例：重建 {{HTMLElement("select")}} 元素。我们还将讨论如何构建、何时构建自定义控件、构建是否存在意义，以及构建控件的相关注意事项。

> **备注：** 我们将专注于构建控件，而不是怎样让代码更通用或可复用；那会涉及一些非基础的 JavaScript 代码和未知上下文下的 DOM 操作，这超过了这篇文章的范畴。

## 设计、结构和语义

在构建一个自定义控件之前，首先你要确切的知道你要什么。这将为你节省宝贵的时间。特别地，清楚地定义控件的所有状态非常重要。要做到这一点，从状态和行为表现都为人所熟知的现有控件开始是很好的选择，这样你可以充分地模仿这些控件。

在我们的示例中，我们将重建 {{HTMLElement("select")}} 元素，这是我们希望实现的结果：

![选择框的三种状态](custom-select.png)

上面图片显示了我们控件的三个主要状态：正常状态（左）、活动状态（中）和展开状态（右）。

在行为方面，我们正在重建原始 HTML 元素，因此它应该具有与原生 HTML 元素相同的行为和语义。我们要求我们的控件可以通过鼠标和键盘进行使用，并且可以被屏幕阅读器所识别，就像任何原生控件一样。首先让我们定义控件如何进入每种状态：

**在以下情况下，控件处于正常状态：**

- 页面加载。
- 控件处于活动状态，但用户点击了控件以外的任何位置。
- 控件处于活动状态，但用户使用键盘（例如 <kbd>Tab</kbd> 键）将焦点移动到另一个控件。

**在以下情况下，控件处于活动状态：**

- 用户点击或在触摸屏上触摸控件。
- 用户按下 tab 键使控件获得了焦点。
- 控件处于展开状态然后用户点击控件。

**在以下情况下，控件处于展开状态：**

- 控件处于非展开状态时被用户点击。

我们知道如何改变状态后，定义如何改变控件的值同样重要：

**在以下情况下，其值将会被改变：**

- 控件在展开状态下用户点击一个选项。
- 控件在活动状态下用户按下键盘的上/下方向键。

**在以下情况下，其值不会被改变：**

- 在选择第一个选项时，用户按下键盘的上方向键。
- 在选择最后一个选项时，用户按下键盘的下方向键。

最后，让我们定义控件的选项将要怎么表现：

- 当控件处于展开状态时，被选中的选项将被突出显示
- 当鼠标悬停在某个选项上时，该选项将被突出显示，并且之前突出显示的选项将返回其正常的状态

对于我们的示例的目的，我们将就此结束；但是，如果你是一个认真的读者，你会注意到我们省略了一些东西，例如，你认为用户在控件处于展开状态时点击 tab 键会发生什么？答案是：_什么也不会发生_。好吧，似乎很明显这就是正确的行为，但事实是，因为在我们的规范中没有定义这种情况，我们很容易忽略这种行为。在团队环境中尤其是这样，因为设计控件行为的人与实现的人通常是不同的。

另外一个有趣的例子是：当控件处于展开状态时，用户按下键盘上方向键和下方向键将会发生什么？这个问题有些棘手，如果你认为活动状态和展开状态是完全不同的，那么答案又是“什么都不会发生”，因为我们没有定义任何在展开状态下键盘的交互行为。从另一个方面看，如果你认为活动状态和展开状态是有重叠的部分，那么控件的值可能会改变，但是被选中的选项肯定不会相应的进行突出显示，同样是因为我们没有定义在控件展开状态下的任何键盘交互事件（我们仅仅定义了控件打开会发生什么，而没有定义在其打开后会发生什么）。

我们必须进一步思考：按退出键会发生什么？按下 <kbd>Esc</kbd> 键会关闭一个打开的选择框。记住，如果你想要提供与现有的原生 {{htmlelement('select')}} 相同的功能，那么它应该对所有用户都有相同的行为，不论是键盘、鼠标、触摸、屏幕阅读器，还是其他任何输入设备。

在我们的示例中，规范的缺失是显而易见的，所以我们将着手处理它们，但是对于一些没有人想到去定义正确行为的控件而言，这的确是一个问题。所以在元素（例如 {{htmlelement('select')}}）标准化阶段，规范作者花费了大量的时间来定义每个输入设备每个用例的所有涉及的交互。创建新的控件并不容易，特别是你正在创建以前从未做过的东西，没有人知道其预期的行为和相关的交互是什么。至少 select 已经完成了这些设计，所以我们知道它应该如何表现！

设计新的交互方式只是行业中重要参与者的一种选择，他们有足够的影响力来推动他们创建的交互方式成为标准。例如，Apple 于 2001 年在 iPod 中推出了滚轮。他们拥有足够的市场份额，而成功推出了一种全新的设备交互方式，这是大多数设备公司无法做到的。

最好不要发明新的用户交互方式。对于你添加的任何交互方式，在设计阶段花费时间至关重要；如果你对一种行为的定义不够合适，或者忘记定义了某种行为，那么在用户习惯之后，将很难去重新定义它们。如果你在定义时有疑问，请征询他人的意见，如果你有预算，请不要犹豫去进行[用户可用性测试](https://zh.wikipedia.org/wiki/可用性测试)，这个过程被称为用户体验设计（UX Design），如果你想要深入的学习相关的内容，请查阅下面这些有用资源：

- [UXMatters.com](https://www.uxmatters.com/)
- [UXDesign.com](https://uxdesign.com/)
- [SmashingMagazine 用户体验设计部分](https://www.smashingmagazine.com/)

> **备注：** 此外，在绝大多数系统中，还有一种方法能够打开 {{HTMLElement("select")}} 元素来观察其所有的选项（这和用鼠标点击 {{HTMLElement("select")}} 元素是一样的）。这可以通过 Windows 下的 <kbd>Alt</kbd> + <kbd>Down</kbd> 实现。这没有在我们的示例中实现，但是这样做会很方便，因为鼠标点击（`click`）事件就是由该原理实现的。

### 定义语义化的 HTML 结构

现在控件的基本功能已经决定，可以开始构建自定义控件了。第一步就是去确定它的 HTML 结构并给予一些基本的语义规则。重构 {{HTMLElement("select")}} 元素需要这样做：

```html
<!-- 这是我们控件的主要容器。
     tabindex 属性是用来让用户聚焦在控件上的。
     稍后我们会发现最好通过 JavaScript 来设定它的值。-->
<div class="select" tabindex="0">
  <!-- 这个容器用来显示控件当前的值 -->
  <span class="value">Cherry</span>

  <!-- 这个容器包含我们的控件的所有可用选项。
       因为它是一个列表，用 ul 元素是有意义的。-->
  <ul class="optList">
    <!-- 每个选项只包含用来显示的值，
         稍后我们会知道如何处理和表单一起发送的真实值 -->
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

注意类名的使用：不管实际使用了哪种底层 HTML 元素，它们都标识每个相关的部分。这很重要，因为这样做能确保我们的 CSS 和 JavaScript 不会和 HTML 结构强绑定，这样我们就可以在不破坏使用控件的代码的情况下进行实现更改。比如，如果你希望增加一个等价的 {{HTMLElement("optgroup")}} 元素。

然而，类名并不提供语义值。到现在为止，屏幕阅读器的用户只能“看到”无序列表。我们后面会为其添加 ARIA 语义。

## 使用 CSS 创建外观

现在我们有了结构，我们可以开始设计我们的控件了。构建自定义控件的重点是能够完全按照我们的期望设置它的样式。为了达到这个目的，我们将 CSS 部分的工作分为两部分：第一部分是让我们的控件表现得像一个 {{HTMLElement("select")}} 元素所必需的的 CSS 规则，第二部分包含了让控件看起来像我们所希望那样的精妙样式。

### 所需的样式

所需的样式是那些用以处理我们控件的三种状态的必须样式。

```css
.select {
  /* 这将为选项列表创建一个上下文定位；如果完全支持 focus-within，
     则将其添加到“.select:focus-within”是个更好的选择
  */
  position: relative;

  /* 这将使我们的控件成为文本流的一部分，同时又可以调整大小 */
  display: inline-block;
}
```

我们需要一个额外的 `active` 类来定义我们的控件处于其激活状态时的的界面外观。因为我们的控件是可以聚焦的，我们通过 {{cssxref(":focus")}} 伪类复用自定义样式来确保它们表现得一样。

```css
.select .active,
.select:focus {
  outline: none;

  /* 这里的 box-shadow 属性并非必须，但确保活动状态能看出来非常重要——我们
 将其作为一个默认值，你可以随意地覆盖掉它。*/
  box-shadow: 0 0 3px 1px #227755;
}
```

现在，让我们处理选项列表：

```css
/* 这里的 .select 选择器帮助我们确保定义的类是
   在我们的控件里的那个。 */
.select .optList {
  /* 这可以确保我们的选项列表将会显示在值的下面，并且会处在
     HTML 流之外 */
  position: absolute;
  top: 100%;
  left: 0;
}
```

我们需要一个额外的类来处理选项列表隐藏时的情况。为了管理没有完全匹配的活动状态和展开状态之间的差异，这是有必要的。

```css
.select .optList.hidden {
  /* 这是一个以无障碍的形式隐藏列表的简单方法，
     对无障碍我们将在最后进一步拓展 */
  max-height: 0;
  visibility: hidden;
}
```

> **备注：** 我们也可以使用 `transform: scale(1, 0)` 来指定选项列表的高度为零，但宽度不变。

### 美化

所以现在我们的基本功能已经就位，有趣的事情就可以开始了。下面是一个可行的简单示例，这和本文开头的截图是相对应的。不管怎样，你可以随意尝试看看能想出什么。

```css
.select {
  /* 假设的单位换算是 1em == 16px，这是大多数浏览器的默认值。
     如果你对 em 和 px 的转换感到疑惑，请参考 https://nekocalc.com/px-to-em-converter */
  font-size: 0.625em; /* 这个（10px）是以 em 值表达这个上下文的字体大小 */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  /* 我们需要为将要添加的向下箭头准备一些额外的空间 */
  padding: 0.1em 2.5em 0.2em 0.5em;
  width: 10em; /* 100px */

  border: 0.2em solid #000;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);

  /* 第一段声明是为不支持线性渐变的浏览器准备的。 */
  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  /* 因为值的宽度可能超过控件的宽度，我们需要确保它不会改变控件的宽度。如果内容溢出了，我们显示省略号 */
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}
```

我们不需要一个额外的元素来设计向下箭头，而使用 {{cssxref("::after")}} 伪类替代。这也可以通过使用一张加在 `select` 类上的简单的背景图像来实现。

```css
.select::after {
  content: "▼"; /* 我们使用了 unicode 字符 U+25BC，请确保设置了 charset meta 标签 */
  position: absolute;
  z-index: 1; /* 这对于防止箭头覆盖选项列表很重要 */
  top: 0;
  right: 0;

  box-sizing: border-box;

  height: 100%;
  width: 2em;
  padding-top: 0.1em;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
  text-align: center;
}
```

接下来，让我们定义选项列表的样式。

```css
.select .optList {
  z-index: 2; /* 我们显式定义选项列表始终与向下箭头重叠 */

  /* 这会重置 ul 元素的默认样式 */
  list-style: none;
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  /* 这会确保即使数值比控件小，选项列表仍能变得跟控件自身一样宽 */
  min-width: 100%;

  /* 万一列表太长了，它的内容会从垂直方向溢出（会自动添加一个竖向滚动条）
     但是水平方向不会（因为我们没有设定宽度，列表会自适应宽度。如果不能的话，内容会被截断） */
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;

  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);
  background: #f0f0f0;
}
```

对于选项，我们需要添加一个 `highlight` 类以便能标明用户将要选择或者已经选择的值。

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

这是我们的三种状态的结果（[在此处查看源代码](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls/Example_1)）：

#### 正常状态

```html hidden
<div class="select">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

{{EmbedLiveSample("基本状态",120,130)}}

#### 活动状态

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

{{EmbedLiveSample("活动状态",120,130)}}

#### 展开状态

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList">
    <li class="option highlight">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #fff;
}
```

{{EmbedLiveSample("展开状态",120,130)}}

## 通过 JavaScript 让你的控件动起来

现在我们的设计和结构已经完成了。我们可以写些 JavaScript 代码来让这个控件真正生效。

> **警告：** 下面的代码仅仅是教学性质的，不是生产环境的代码，并且不应该照搬使用。这种方案不具有前瞻性，而且可能在旧式浏览器上会不工作。这里面还有冗余的部分，在生产环境下，代码需要优化。

### 它为什么不生效？

在我们开始之前，要记住一件和 JavaScript 有关的非常重要的事情：**在浏览器中，这是一种不可靠的技术**。当你构建一个自定义控件时，你会不得不依赖于 JavaScript，因为这是将所有的东西联系在一起的线索。但是，很多情况下，JavaScript 不能在浏览器中运行。

- 用户禁用了 JavaScript：这是最不常见的情形。现在只有很少的人会禁用 JavaScript。
- 脚本没有加载：这是最常见的情形，特别是在移动端上，在那些网络非常不可靠的地方。
- 脚本是有问题的：你应该总是考虑这种可能性。
- 脚本和第三方脚本冲突：这可能会由用户使用的跟踪脚本和一些书签工具引发。
- 脚本与一个浏览器的扩展冲突，或者受其影响。（比如 Firefox 的 [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) 扩展或者 Chrome 的 [ScriptBlock](https://chrome.google.com/webstore/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba) 扩展）。
- 用户在使用旧版浏览器，而且你需要的一些特性没有被支持。当你使用一些最新的 API 时，这种情况会经常发生。
- 在 JavaScript 完全下载、解析和执行前，用户已经开始与内容进行交互。

因为这些风险，认真考虑 JavaScript 不生效时会发生什么是很重要的。处理这个问题的细节超出了这篇文章的范围，因为这与你有多么想使你的脚本具有通用性和可复用性更加相关，不过我们将在我们的示例中考虑与其相关的基本内容。

在我们的示例中，如果 JavaScript 代码没有运行，我们会回退到显示一个标准的 {{HTMLElement("select")}} 元素。包括我们的控件和 {{HTMLElement("select")}}；显示哪个取决于 body 元素的类，当加载成功时，脚本会更新 body 元素的类以使得控件生效。

为了实现这一点，我们需要两样东西。

首先，在每次使用我们的自定义控件前，我们需要添加一个标准的 {{HTMLElement("select")}} 元素。即使我们的 JavaScript 按预期工作，这个“额外”的 select 也是有好处的：我们可以使用这个 select 来将来自我们自定义的表单控件以及其他部分的表单数据发送出去。我们随后会详细的解释这一点。

```html
<body class="no-widget">
  <form>
    <select name="myFruit">
      <option>Cherry</option>
      <option>Lemon</option>
      <option>Banana</option>
      <option>Strawberry</option>
      <option>Apple</option>
    </select>

    <div class="select">
      <span class="value">Cherry</span>
      <ul class="optList hidden">
        <li class="option">Cherry</li>
        <li class="option">Lemon</li>
        <li class="option">Banana</li>
        <li class="option">Strawberry</li>
        <li class="option">Apple</li>
      </ul>
    </div>
  </form>
</body>
```

第二，我们需要两个新的类来隐藏不需要的元素：如果脚本未运行，我们会在视觉上隐藏自定义控件；如果脚本正常运行，则隐藏“真正”的 {{HTMLElement("select")}} 元素）。注意默认情况下，我们的 HTML 代码会隐藏我们的自定义控件。

```css
.widget select,
.no-widget .select {
  /* 这个 CSS 选择器大体上说的是：
     - 要么我们将 body 的类设置为“widget”，隐藏真实的 <select> 元素
     - 或是我们没有改变 body 的类，这样 body 的类还是“no-widget”，
       因此类为“select”的元素需要被隐藏 */
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

上面的 CSS 在视觉上隐藏了其中的一个元素，但对屏幕阅读器仍然“可见”。

接下来我们需要一个 JavaScript 开关来决定脚本是否运行。这个开关非常简单：如果页面加载时，我们的脚本运行了，它将会移除 `no-widget` 类，并添加 `widget` 类，由此切换 {{HTMLElement("select")}} 元素和自定义控件的可视性。

```js
window.addEventListener("load", function () {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

#### 不使用 JS

查看[完整源代码](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#不使用_js)。

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

{{EmbedLiveSample("不使用 JS",120,130)}}

#### 使用 JS

查看[完整源代码](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#使用_js)。

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});
```

{{EmbedLiveSample("使用 JS",120,130)}}

> **备注：** 如果你真的想让你的代码变得通用和可复用，最好不要仅仅是添加一个类选择器开关，而是通过添加一个控件类的方式来隐藏 {{HTMLElement("select")}} 元素，并且动态地在每一个 {{HTMLElement("select")}} 元素后面添加代表页面中自定义控件的 DOM 树。

### 让工作变得更简单

在我们将要构建的代码之中，我们将会使用标准的 DOM API 和 JavaScript 来完成要做的所有工作。我们准备使用的特性如下所示：

1. {{domxref("element.classList","classList")}}
2. {{domxref("EventTarget.addEventListener","addEventListener()")}}
3. {{domxref("NodeList.forEach()")}}
4. {{domxref("element.querySelector","querySelector()")}} 和 {{domxref("element.querySelectorAll","querySelectorAll()")}}

### 构造事件回调

基础已经准备好了。我们现在可以开始定义用户每次同我们的控件交互时会用到的所有函数了。

```js
// 这个函数会用在每当我们想要停用一个自定义控件的时候
// 它需要一个参数：
// select：要停用的带有 `select` 类的节点
function deactivateSelect(select) {
  // 如果控件没有运行，不用进行任何操作
  if (!select.classList.contains("active")) return;

  // 我们需要获取自定义控件的选项列表
  const optList = select.querySelector(".optList");

  // 关闭选项列表
  optList.classList.add("hidden");

  // 然后停用控件本身
  select.classList.remove("active");
}

// 每当用户想要激活（或停用）这个控件的时候，会调用这个函数
// 它需要 2 个参数：
// select：要激活的带有 `select` 类的 DOM 节点
// selectList：包含所有带 `select` 类的 DOM 节点的列表
function activeSelect(select, selectList) {
  // 如果控件已经激活了，不进行任何操作
  if (select.classList.contains("active")) return;

  // 我们需要关闭所有自定义控件的活动状态
  // 因为 deactiveselect 函数满足 forEach 回调函数的所有请求，
  // 我们直接使用它，不使用中间匿名函数
  selectList.forEach(deactivateSelect);

  // 然后我们激活指定的控件
  select.classList.add("active");
}

// 每当用户想要打开/关闭选项列表的时候，会调用这个函数
// 它需要一个参数：
// select：要反转状态的列表的 DOM 节点
function toggleOptList(select) {
  // 该列表不包含在控件中
  const optList = select.querySelector(".optList");

  // 我们改变列表的类去显示/隐藏它
  optList.classList.toggle("hidden");
}

// 每当我们要高亮一个选项的时候，会调用该函数
// 它需要两个参数：
// select：带有 `select` 类的 DOM 节点，包含了需要高亮强调的选项
// option：需要高亮强调的带有'option'类的 DOM 节点
function highlightOption(select, option) {
  // 为我们的自定义 select 元素获取所有有效选项的列表
  const optionList = select.querySelectorAll(".option");

  // 我们移除所有选项的高亮强调
  optionList.forEach(function (other) {
    other.classList.remove("highlight");
  });

  // 我们高亮强调正确的选项
  option.classList.add("highlight");
}
```

这是你需要用来处理控件不同状态的所有代码。

接下来，我们将这些函数绑定到合适的事件上：

```js
// 我们处理文档加载时的事件绑定。
window.addEventListener("load", function () {
  const selectList = document.querySelectorAll(".select");

  // 每个自定义控件都需要初始化
  selectList.forEach(function (select) {
    // 它的 `option` 元素也需要
    const optionList = select.querySelectorAll(".option");

    // 每当用户的鼠标悬停在一个选项上时，我们高亮这个指定的选项
    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        // 注意：`select` 和 `option` 变量是我们函数调用范围内有效的闭包。
        highlightOption(select, option);
      });
    });

    // 每当用户点击一个自定义的 select 元素时
    select.addEventListener("click", (event) => {
      // 注意：`select` 变量是我们函数调用范围内有效的闭包。

      // 我们改变选项列表的可见性
      toggleOptList(select);
    });

    // 如果控件获得了焦点
    // 每当用户点击它或是用 tab 键访问这个控件时，其获得焦点
    select.addEventListener("focus", (event) => {
      // 注意：`select` 和 `selectlist` 变量是我们函数调用范围内有效的闭包。

      // 我们激活这个控件
      activeSelect(select, selectList);
    });

    // 如果控件失去焦点
    select.addEventListener("blur", (event) => {
      // 注意：`select` 变量是我们函数调用范围内有效的闭包。

      // 我们关闭这个控件
      deactivateSelect(select);
    });

    // 如果用户按下 `esc` 键，失去焦点
    select.addEventListener("keyup", (event) => {
      // 在松开 `esc` 键时关闭控件
      if (event.key === "Escape") {
        deactivateSelect(select);
      }
    });
  });
});
```

现在，我们的控件会根据我们的设计改变状态，但是它的值仍然没有更新。我们接下来会处理这件事。

#### 实时示例

查看[完整源代码](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls/Example_3)。

```html hidden
<form class="no-widget">
  <select name="myFruit" tabindex="-1">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" tabindex="0">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");

    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });
    });

    select.addEventListener(
      "click",
      (event) => {
        toggleOptList(select);
      },
      false,
    );

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });

    select.addEventListener("keyup", (event) => {
      if (event.keyCode === 27) {
        deactivateSelect(select);
      }
    });
  });
});
```

{{EmbedLiveSample("实时示例",120,130)}}

### 处理控件的值

既然我们的控件已经开始工作了，我们必须添加代码，使其能够根据用户的输入更新取值，并且能将取值随表单数据一同发送。

实现这一点最简单的方法是在后台使用原生控件。这样的控件会使用浏览器提供的所有内置控件来跟踪值，并且在表单提交时，取值也会像往常一样发送。当有现成的功能时，我们再做重复工作就毫无意义了。

像前面所看到的那样，出于无障碍的原因，我们已经使用了一个原生的选择（select）控件作为回退显示内容；我们可轻松的将它的值与我们的自定义控件之间的值同步。

```js
// 这个函数更新显示的值并将其通过原生控件同步
// 它需要 2 个参数：
// select：含有要更新的值的 `select` 类的 DOM 节点
// index：要被选择的值的索引
function updateValue(select, index) {
  // 我们需要为了给定的自定义控件获取原生控件
  // 在我们的示例中，原生控件是自定义控件的“兄弟”
  const nativeWidget = select.previousElementSibling;

  // 我们也需要得到自定义控件的值占位符
  const value = select.querySelector(".value");

  // 还有整个选项列表
  const optionList = select.querySelectorAll(".option");

  // 我们将被选择的索引设定为我们的选择的索引
  nativeWidget.selectedIndex = index;

  // 更新相应的值占位符
  value.innerHTML = optionList[index].innerHTML;

  // 然后高亮我们自定义控件里对应的选项
  highlightOption(select, optionList[index]);
}

// 这个函数返回原生控件里当前选定的索引
// 它需要 1 个参数：
// select：跟原生控件有关的 `select` 类 DOM 节点
function getIndex(select) {
  // 我们需要为了给定的自定义控件访问原生控件
  // 在我们的示例中，原生控件是自定义控件的“兄弟”
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}
```

通过这两个函数，我们可以将原生控件绑定到自定义的控件上。

```js
// 我们在文档加载时处理事件的绑定。
window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  // 每个自定义控件都需要初始化
  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    // 使我们的自定义控件可以获得焦点
    select.tabIndex = 0;

    // 我们让原生控件无法获得焦点
    select.previousElementSibling.tabIndex = -1;

    // 确保默认选中的值正确显示
    updateValue(select, selectedIndex);

    // 每当用户点击一个选项的时候，更新相应的值
    optionList.forEach((option, index) => {
      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    // 每当用户在获得焦点的控件上用键盘操作时，更新相应的值
    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      // 当用户点击 esc 键时，关闭自定义控件
      if (event.key === "Escape") {
        deactivateSelect(select);
      }

      // 当用户点击向下箭头时，跳转到下一个选项
      if (event.key === "ArrowDown" && index < optionList.length - 1) {
        index++;
      }

      // 当用户点击向上箭头时，跳转到上一个选项
      if (event.key === "ArrowUp" && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

在上面的代码里，值得注意的是 [`tabIndex`](/zh-CN/docs/Web/API/HTMLElement/tabIndex) 属性的使用。使用这个属性是很有必要的，这可以确保原生控件将永远不会获得焦点，而且还可以确保当用户使用键盘和鼠标时，我们的自定义控件能够获得焦点。

做完上面这些后，我们就完成了！

#### 实时示例

查看[完整源代码](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls/Example_4)。

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");

    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });
    });

    select.addEventListener("click", (event) => {
      toggleOptList(select);
    });

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });
  });
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    select.tabIndex = 0;
    select.previousElementSibling.tabIndex = -1;

    updateValue(select, selectedIndex);

    optionList.forEach((option, index) => {
      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      if (event.key === "Escape") {
        deactivateSelect(select);
      }
      if (event.key === "ArrowDown" && index < optionList.length - 1) {
        index++;
      }
      if (event.key === "ArrowUp" && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

{{EmbedLiveSample("实时示例_2",120,130)}}

但是等等，我们真的做完了嘛？

## 使其变得无障碍

我们构建了一个能够生效的东西，尽管这离一个特性齐全的选择框还差得远，但是它效果不错。但是我们已经完成的事情只不过是摆弄 DOM。这个控件并没有真正的语义，即使它看起来像一个选择框，但是从浏览器的角度来看并不是，所以辅助技术并不能明白这是一个选择框。简单来说，这个全新的选择框并不具备无障碍！

幸运的是，有一种解决方案叫做 [ARIA](/zh-CN/docs/Web/Accessibility/ARIA)。ARIA 代表“无障碍富互联网应用”。这是一个专为我们现在做的事情设计的 [W3C 规范](https://www.w3.org/TR/wai-aria/)：使 web 应用和自定义控件可以无障碍访问，它本质上是一组用来拓展 HTML 的属性集，以便我们能够更好的描述角色、状态和属性，就像我们刚才设计的元素是它试图传递的原生元素一样。只要编辑 HTML 标记就可以使用这些属性。我们也可以通过 JavaScript 在用户更新选择的值时更新 ARIA 属性。

### `role` 属性

[ARIA](/zh-CN/docs/Web/Accessibility/ARIA) 使用的关键属性是角色（[`role`](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques)）属性。[`role`](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques) 属性接受一个值，该值定义了一个元素的用途。每一个角色定义了它自己的需求和行为。在我们的示例中，我们会使用 [`listbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role) 这一角色。这是一个“复合角色（composite role）”，表示具有该角色的元素应该有子元素，每个子元素都有特定的角色。（在这个案例中，至少有一个具有`option` 角色的子元素）。

同样值得注意的是，ARIA 定义了默认应用于标准 HTML 标记的角色。例如，{{HTMLElement("table")}} 元素与角色 `grid` 相匹配，而 {{HTMLElement("ul")}} 元素与角色 `list` 相匹配。由于我们使用了一个 {{HTMLElement("ul")}} 元素，我们想要确保我们控件的 `listbox` 角色能替代 {{HTMLElement("ul")}} 元素的 `list` 角色。为此，我们会使用角色 `presentation`。这个角色被设计成让我们来表示一个元素没有特殊的含义，并且仅仅用于提供信息。我们会将其应用到 {{HTMLElement("ul")}} 元素上。

为了支持 [`listbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role) 角色，我们只需要将我们的 HTML 改成这样：

```html
<!-- 我们把 role="listbox" 属性添加到我们的顶层元素 -->
<div class="select" role="listbox">
  <span class="value">Cherry</span>
  <!-- 我们也把 role="presentation" 添加到 ul 元素中 -->
  <ul class="optList" role="presentation">
    <!-- 然后把 role="option" 属性添加到所有 li 元素中 -->
    <li role="option" class="option">Cherry</li>
    <li role="option" class="option">Lemon</li>
    <li role="option" class="option">Banana</li>
    <li role="option" class="option">Strawberry</li>
    <li role="option" class="option">Apple</li>
  </ul>
</div>
```

> **备注：** 不需要同时包含 `role` 属性和 `class` 属性。你可以在 CSS 中使用 `[role="option"]` [属性选择器](/zh-CN/docs/Web/CSS/Attribute_selectors)来代替 `.option` 类。

### `aria-selected` 属性

仅仅使用 [`role`](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques) 属性是不够的。[ARIA](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques) 还提供了许多状态和属性特征。你能更好更充分的利用它们，你的控件就会能够被辅助技术更好地理解。在我们的示例中，我们会把使用限制在一个属性上：`aria-selected`。

`aria-selected` 属性被用来标记当前被选中的选项；这可以让辅助技术告知用户当前的选项是什么。我们会通过 JavaScript 动态地使用该属性，每当用户选择一个选项时标记选中的选项。为了达到这一目的，我们需要修正我们的 `updateValue()` 函数：

```js
function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll('[role="option"]');

  // 我们确保所有的选项都没有被选中
  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  // 我们确保选定的选项被选中了
  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}
```

让屏幕阅读器聚焦于不可见的 select 而忽略我们的添加样式后的 select 似乎更简单，但这不是一个无障碍的解决方案。屏幕阅读器的用户不仅限于盲人；弱视甚至视力没问题的人也使用它们。因此，你不能让屏幕阅读器聚焦于不可见的元素。

下面是经过所有的改变之后的最终结果（藉由 [NVDA](https://www.nvaccess.org/) 或 [VoiceOver](https://www.apple.com/accessibility/vision/) 这样的辅助技术尝试它，你会对此有更好的体会）。

#### 实时示例

查看[完整源代码](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls/Example_5)。

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" role="listbox">
    <span class="value">Cherry</span>
    <ul class="optList hidden" role="presentation">
      <li class="option" role="option" aria-selected="true">Cherry</li>
      <li class="option" role="option">Lemon</li>
      <li class="option" role="option">Banana</li>
      <li class="option" role="option">Strawberry</li>
      <li class="option" role="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    select.tabIndex = 0;
    select.previousElementSibling.tabIndex = -1;

    updateValue(select, selectedIndex);

    optionList.forEach((option, index) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });

      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    select.addEventListener("click", (event) => {
      toggleOptList(select);
    });

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });

    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      if (event.keyCode === 27) {
        deactivateSelect(select);
      }
      if (event.keyCode === 40 && index < optionList.length - 1) {
        index++;
      }
      if (event.keyCode === 38 && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

{{EmbedLiveSample("实时示例_3",120,130)}}

如果你想继续前进，此示例中的代码需要进行一些改进才能变得通用和可复用。你可以尝试进行这方面的练习。有两个提示可以帮助你：我们所有函数的第一个参数都是相同的，这意味着这些函数需要相同的上下文。构建一个对象来共享该上下文是明智的。

## 代替方法：使用单选按钮

在上面的示例中，我们使用非语义化的 HTML、CSS 和 JavaScript 重新构建了一个 {{htmlelement('select')}} 元素。这个 select 从有限的选项中选择一个选项，这和一组同名的 {{htmlelement('input/radio', 'radio')}} 按钮的功能是一样的。

我们可以使用单选按钮重新实现这个功能，让我们看看这个方法。

我们可以从一个完全语义化、无障碍且无序的{{htmlelement('input/radio','单选')}}按钮列表开始，使用一对语义化的 {{htmlelement('fieldset')}} 和 {{htmlelement('legend')}} 对来标记整个组。

```html
<fieldset>
  <legend>选择一种水果</legend>
  <ul class="styledSelect">
    <li>
      <input
        type="radio"
        name="fruit"
        value="Cherry"
        id="fruitCherry"
        checked />
      <label for="fruitCherry">樱桃</label>
    </li>
    <li>
      <input type="radio" name="fruit" value="Lemon" id="fruitLemon" />
      <label for="fruitLemon">柠檬</label>
    </li>
    <li>
      <input type="radio" name="fruit" value="Banana" id="fruitBanana" />
      <label for="fruitBanana">香蕉</label>
    </li>
    <li>
      <input
        type="radio"
        name="fruit"
        value="Strawberry"
        id="fruitStrawberry" />
      <label for="fruitStrawberry">草莓</label>
    </li>
    <li>
      <input type="radio" name="fruit" value="Apple" id="fruitApple" />
      <label for="fruitApple">苹果</label>
    </li>
  </ul>
</fieldset>
```

我们将对单选按钮列表（不是 legend/fieldset）设置一些样式，使其看起来有点像前面的示例，这里只是为了表明它可以实现：

```css
.styledSelect {
  display: inline-block;
  padding: 0;
}
.styledSelect li {
  list-style-type: none;
  padding: 0;
  display: flex;
}
.styledSelect [type="radio"] {
  position: absolute;
  left: -100vw;
  top: -100vh;
}
.styledSelect label {
  margin: 0;
  line-height: 2;
  padding: 0 0 0 4px;
}
.styledSelect:not(:focus-within) input:not(:checked) + label {
  height: 0;
  outline: none;
  overflow: hidden;
}
.styledSelect:not(:focus-within) input:checked + label {
  border: 0.2em solid #000;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);
}
.styledSelect:not(:focus-within) input:checked + label::after {
  content: "▼";
  background: black;
  float: right;
  color: white;
  padding: 0 4px;
  margin: 0 -4px 0 4px;
}
.styledSelect:focus-within {
  border: 0.2em solid #000;
  border-radius: 0.4em;
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45);
}
.styledSelect:focus-within input:checked + label {
  background-color: #333;
  color: #fff;
  width: 100%;
}
```

无需 JavaScript，只需一点点 CSS，我们就可以为单选按钮列表添加样式，使其只显示选中的项目。当焦点在 `<fieldset>` 中的 `<ul>` 内时，列表会打开，上下（和左右）箭头可以选择上一个和下一个项目。尝试一下：

{{EmbedLiveSample("代替方法：使用单选按钮",200,240)}}

在某种程度上，这不需要 JavaScript 就可以工作。我们创建了一个与自定义控件类似的控件，即使 JavaScript 运行失败也能正常工作。看起来是一个很好的解决方案，对吧？嗯，但它不是完美的。它确实可以与键盘配合使用，但不能按预期使用鼠标单击。使用 Web 标准作为自定义控件的基础而不是依赖框架来创建没有原生语义的元素，可能更有意义。然而，我们的控件不具有与 `<select>` 原生具有的相同的功能。

从正面来说，屏幕阅读器完全可以访问这个控件，而且其完全可以使用键盘导航。但是，该控件并不是 {{htmlelement('select')}} 的替代。有一些功能是不同或者缺失的。例如，所有的四个箭头都可以导航到选项，但是当用户在最后一个按钮上点击向下箭头时，它选到第一个按钮；它不会像 `<select>` 那样停在选项列表的顶部和底部。

我们将把添加这个缺失功能作为读者的一个练习。

## 总结

我们已经了解了所有和构建一个自定义表单控件相关的基础知识，但是如你所见，做这件事非常繁琐。在创建你自己的自定义控件之前，请考虑 HTML 是否提供可用于充分满足你的要求的替代元素。如果你的确需要创建自定义控件，那么通过第三方库，而不是自己从头构建会更容易，也更好。但是，如果你确实需要自己创建，修改现有元素或使用框架来实现预制控件，请记住创建可用且无障碍的表单控件比看起来更复杂。

这儿有一些库，在你编写自己的之前应该了解一下：

- [jQuery UI](https://jqueryui.com/)
- [AXE 无障碍的自定义选择下拉菜单](https://www.webaxe.org/accessible-custom-select-dropdowns/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)

如果你确实通过单选按钮、你自己的 JavaScript 或第三方库创建了替代控件，请确保其无障碍且功能可靠；也就是说，它需要能够更好地与各种浏览器配合使用，而这些浏览器与所使用的 Web 标准的兼容性各不相同。祝愉快！

## 参见

### 学习路径

- [你的第一个 HTML 表单](/zh-CN/docs/Learn/Forms/Your_first_form)
- [如何构造 HTML 表单](/zh-CN/docs/Learn/Forms/How_to_structure_a_web_form)
- [原生表单控件](/zh-CN/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 的 input 类型](/zh-CN/docs/Learn/Forms/HTML5_input_types)
- [其他表单控件](/zh-CN/docs/Learn/Forms/Other_form_controls)
- [UI 伪类](/zh-CN/docs/Learn/Forms/UI_pseudo-classes)
- [为 HTML 表单添加样式](/zh-CN/docs/Learn/Forms/Styling_web_forms)
- [表单数据校验](/zh-CN/docs/Learn/Forms/Form_validation)
- [发送表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)

### 高级主题

- [使用 JavaScript 发送表单](/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)
- **如何构建自定义表单控件**
- [旧式浏览器中的 HTML 表单](/zh-CN/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [高级设计 HTML 表单](/zh-CN/docs/Learn/Forms/Advanced_form_styling)
- [表单控件兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
