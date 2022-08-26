---
title: 如何构建表单控件
slug: Learn/Forms/How_to_build_custom_form_controls
original_slug: Learn/HTML/Forms/How_to_build_custom_form_widgets
---
{{LearnSidebar}}

在许多情况下，现有的一些 HTML 表单小组件可能是不够的。如果要在某些小部件（例如 {{HTMLElement("select")}} 元素）上赋予一些[高级样式](/zh-CN/docs/Learn/Forms/Advanced_styling_for_HTML_forms)，或者如果要提供自定义行为，则可以考虑构建自己的小部件。

在本文中，我们会看到如何构建自定义控件。为此，我们将使用这样一个例子：重建 {{HTMLElement("select")}} 元素。

> **备注：** 我们将专注于构建控件，而不是怎样让代码更通用或可复用；那会涉及一些非基础的 JavaScript 代码和未知环境下的 DOM 操作，这超过了这篇文章的范围。

## 设计、结构和语义

在构建一个自定义控件之前，首先你要确切的知道你要什么。这将为您节省宝贵的时间。特别地，清楚地定义控件的所有状态非常重要。为了做到这一点，从状态和行为表现都众所周知的现有小控件开始是很好的选择，这样你可以轻松的尽量模仿这些控件。

在我们的示例中，我们将重建 {{HTMLElement("select")}} 元素，这是我们希望实现的结果：

![The three states of a select box](custom-select.png)

上面图片显示了我们控件的三个主要状态：正常状态（左）、活动状态（中）和打开状态（右）。

在行为方面，我们希望我们的控件像任何原生控件一样对鼠标和键盘都可用。让我们从定义控件如何到达每个状态开始：

- 以下情况控件将会呈现正常状态：

  - 页面加载。
  - 控件处于活动状态，但用户点击控件以外的任何位置。
  - 控件是活动状态，但用户使用键盘将焦点移动到另一个小部件（如按下键盘上的 <kbd>Tab</kbd> 键）。

- 以下情况控件将会呈现活动状态：

  - 用户点击控件，或在触摸屏上按压控件。
  - 用户按下键盘上的 tab 键让控件获得了焦点。
  - 控件呈现打开状态，且用户点击控件。

- 以下情况控件将会呈现打开状态：

  - 控件在非打开状态时被用户点击。

我们知道如何改变控件的状态后，定义如何改变控件的值也很重要：

- 以下情况控件的值将会被改变：

  - 控件在打开状态下用户点击一个选项。
  - 控件在活动状态下用户按下键盘上方向键或者下方向键。

- 以下情况控件的值将不会被改变：

  - 在第一个选项选中时继续按下键盘的向上箭头键。
  - 在最后一个选项选中时继续按下键盘的向下箭头键。

最后，让我们定义控件的选项将要怎么表现：

- 当控件在打开状态时，被选中的选项将被突出显示。
- 当鼠标悬停在某个选项上时，该选项将被突出显示，并且之前突出显示的选项将返回正常的状态。

对于我们的例子的目的，我们将就此结束；但是，如果你是一个认真的读者，你会注意到我们省略了一些东西，例如，你认为用户在小部件处于打开状态时点击 tab 键会发生什么？答案是：什么也不会发生。好吧，似乎很明显这就是正确的行为，但事实是，因为在我们的规范中没有定义这种情况，我们很容易忽略这种行为。在团队环境中尤其是这样，因为设计小部件行为的人与实现的人通常是不同的。

另外一个有趣的例子是：当小部件处于打开状态时，用户按下键盘上方向键和下方向键将会发生什么？这个问题有些棘手，如果你认为活动状态和打开状态是完全不同的，那么答案就是“什么都不会发生”，因为我们没有定义任何在打开状态下键盘的交互行为。从另一个方面看，如果你认为活动状态和打开状态是有重叠的部分，那么控件的值可能会改变，但是被选中的选项肯定不会相应的进行突出显示，同样是因为我们没有定义在控件打开状态下的任何键盘交互事件（我们仅仅定义了控件打开会发生什么，而没有定义在其打开后会发生什么）

我们需要再进一步：那么，转义的键怎么办？按下 <kbd>Esc</kbd> 键将关闭打开的选择框。记住，如果你想提供与原生 {{htmlelement('select')}} 元素完全一致的功能，那么应该对于任何用户从键盘、鼠标、触摸屏至屏幕阅读器，以及任何输入设备上均表现一致。

在我们的例子中，缺失的规范是显而易见的，所以我们将着手处理他们，但是对于一些没有人想到去定义正确行为的小部件而言，这的确是一个问题。当涉及到标准化的元素时，{{htmlelement('select')}} 就是其中之一，规范的作者花了大量的时间来指定每个输入设备的每个使用情况的所有交互。创建新的控件并不容易，尤其是当你创建的东西以前没有人做过，因此没有人对预期的行为和交互有丝毫的了解。至少选择以前做过的，所以我们知道它应该如何表现！

设计新的交互方式通常只是非常大的行业参与者的选择，他们有足够的影响力，他们创造的交互方式可以成为一种标准。例如，苹果公司在 2001 年的 iPod 中引入了滚轮。他们有足够的市场份额来成功引入一种全新的设备交互方式，这是大多数设备公司做不到的。

最好不要发明新的用户交互。对于任意添加的交互，在设计阶段花费时间是值得的，因为如果你定义的行为不够好，或者忘记定义了一个行为，那么在用户开始实际使用时，将会很难去重新定义它们。如果你在定义时有疑问，请征询他人的意见，如果你有预算，请不要犹豫的去进行[用户可行性测试](https://en.wikipedia.org/wiki/Usability_testing)，这个过程被称为 UX design (User Experience *Design*用户体验设计）。如果你想要深入学习相关的内容，请查阅下面这些有用资源：

- [UXMatters.com](https://www.uxmatters.com/)
- [UXDesign.com](http://uxdesign.com/)
- [The UX Design section of SmashingMagazine](https://uxdesign.smashingmagazine.com/)

> **备注：** 另外，在绝大多数系统中，还有一种方法能够打开 {{HTMLElement("select")}} 元素来观察其所有的选项（这和用鼠标点击{{HTMLElement("select")}}元素是一样的）。通过 Windows 下的 <kbd>Alt</kbd> + <kbd>Down</kbd> 实现，在我们的例子中没有实现——但是这样做会很方便，因为鼠标点击 `click` 事件就是由该原理实现的。

### 定义语义化的 HTML 结构

现在控件的基本功能已经决定了，可以开始构建自定义控件了。第一步就是去确定它的 HTML 结构并给予一些基本的语义。重构 {{HTMLElement("select")}} 元素的步骤如下：

```html
<!-- 这是我们小部件的主要容器。
     tabindex 属性是用来让用户聚焦在小部件上的。
     稍后我们会发现最好通过 JavaScript 来设定它的值。-->
<div class="select" tabindex="0">

  <!-- 这个容器用来显示组件现在的值 -->
  <span class="value">Cherry</span>

  <!-- 这个容器包含我们的组件的所有可用选项。
       因为他是一个列表，用 ul 元素是有意义的。-->
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

注意类名的使用：不管实际使用了哪种底层 HTML 元素，它们都标识每个相关的部分。这很重要，因为这样做能确保我们的 CSS 和 JavaScript 不会和 HTML 结构强绑定，这样我们就可以在不破坏使用小部件的代码的情况下进行实现更改。比如，如果你希望增加一个等价的 {{HTMLElement("optgroup")}} 元素。

然而，类名没有提供语义值。在目前状态下，屏幕阅读器用户只能“看到”一个无需的列表。我们稍后再添加 ARIA 语义。

## 使用 CSS 创建外观

现在我们有了控件结构，我们可以开始设计我们的控件了。构建自定义控件的重点是能够完全按照我们的期望设置它的样式。为了达到这个目的，我们将 CSS 部分的工作分为两部分：第一部分是让我们的控件表现得像一个 {{HTMLElement("select")}} 元素所必需的的 CSS 规则，第二部分包含了让组件看起来像我们所希望那样的精妙样式。

### 所需的样式

所需的样式是那些用以处理我们组件的三种状态的必须样式。

```css
.select {
  /* 这将为选项列表创建一个上下文定位 */
  position: relative;

  /* 这将使我们的组件成为文本流的一部分，同时又可以调整大小 */
  display : inline-block;
}
```

我们需要一个额外的类 `active` 来定义我们的组件处于其激活状态时的的界面外观。因为我们的组件是可以聚焦的，我们通过 {{cssxref(":focus")}} 伪类重复自定义样式来确保它们表现得一样。

```css
.select .active,
.select:focus {
  outline: none;

  /* 这里的 box-shadow 属性并非必须，但确保活动状态能看出来非常重要，特别是键盘用户来说——我们将其作为一个默认值。*/
  box-shadow: 0 0 3px 1px #227755;
}
```

现在，让我们处理选项列表：

```css
/* 这里的 .select 选择器是一个糖衣语法，用来确保我们定义的类是
   在我们的组件里的那个。 */
.select .optList {
  /* 这可以确保我们的选项列表将会显示在值的下面，并且会处在
     HTML 流之外*/
  position : absolute;
  top      : 100%;
  left     : 0;
}
```

我们需要一个额外的类来处理选项列表隐藏时的情况。为了管理没有完全匹配的活动状态和打开状态之间的差异，这是有必要的。

```css
.select .optList.hidden {
  /* 这是一个以可访问形式隐藏列表的简单方法，
     对无障碍我们将在最后进一步拓展 */
  max-height: 0;
  visibility: hidden;
}
```

### 美化

所以现在我们的基本功能已经就位，有趣的事情就可以开始了。下面是一个可行的简单的例子，和本文开头的截图是相对应的。不管怎样，你可以随意的体验一下看看能收获什么。

```css
.select {
  /* 出于无障碍方面的原因，所有尺寸都会由 em 值表示，
     用来确保用户在文本模式下使用浏览器缩放时组件的可缩放性。
     在大多数浏览器下的默认换算是 1em == 16px。
     如果你对 em 和 px 的转换感到疑惑，请参考 http://riddle.pl/emcalc/ */
  font-size   : 0.625em; /* 这个（等价于 10px）是以 em 方式表达的这个环境里的字体大小 */
  font-family : Verdana, Arial, sans-serif;
  
  box-sizing : border-box;

  /* 我们需要为将要添加的向下箭头准备一些额外的空间 */
  padding : .1em 2.5em .2em .5em; /* 1px 25px 2px 5px */
  width   : 10em; /* 100px */

  border        : .2em solid #000; /* 2px */
  border-radius : .4em; /* 4px */
  box-shadow    : 0 .1em .2em rgba(0,0,0,.45); /* 0 1px 2px */

  /* 第一段声明是为了不支持线性梯度填充的浏览器准备的。 */
  background : #F0F0F0;
  background : linear-gradient(0deg, #E3E3E3, #fcfcfc 50%, #f0f0f0);

.select .value {
  /* 因为值的宽度可能超过组件的宽度，我们需要确保他不会改变组件的宽度 */
  display  : inline-block;
  width    : 100%;
  overflow : hidden;

  vertical-align: top;

  /* 如果内容溢出了，最好有一个恰当的缩写。*/
  white-space  : nowrap;
  text-overflow: ellipsis;
}
```

我们不需要一个额外的元素来设计向下的箭头，而使用 {{cssxref(":after")}} 伪类来替代。然而，这也可以通过使用一张加在 `select` class 上的简单的背景图像来实现。

```css
.select:after {
  content : "▼"; /* 我们使用了 unicode 编码的字符 U+25BC；请确保设定了 meta charset 标签 */
  position: absolute;
  z-index : 1; /* 这对于防止箭头覆盖选项列表很重要 */
  top     : 0;
  right   : 0;

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  height  : 100%;
  width   : 2em;
  padding-top : .1em;

  border-left  : .2em solid #000;
  border-radius: 0 .1em .1em 0;

  background-color : #000;
  color : #FFF;
  text-align : center;
}
```

接下来，让我们定义选项列表的样式。

```css
.select .optList {
  z-index : 2; /* 我们明确的表示选项列表会始终与向下箭头重叠 */

  /* 这会重置 ul 元素的默认样式 */
  list-style: none;
  margin : 0;
  padding: 0;

  -moz-box-sizing : border-box;
  box-sizing : border-box;

  /* 这会确保即使数值比组件小，选项列表仍能变得跟组件自身一样大 */
  min-width : 100%;

  /* 万一列表太长了，它的内容会从垂直方向溢出（会自动添加一个竖向滚动条）
     但是水平方向不会（因为我们没有设定宽度，列表会自适应宽度。如果不能的话，内容会被截断） */
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;

  border: .2em solid #000;
  border-top-width : .1em;
  border-radius: 0 0 .4em .4em;

  box-shadow: 0 .2em .4em rgba(0,0,0,.4);
  background: #f0f0f0;
}
```

对于选项，我们需要添加一个 `highlight` 类以便能标明用户将要选择的值或者已经选择的值。

```css
.select .option {
  padding: .2em .3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #FFFFFF;
}
```

这是三种状态的结果：

<table>
  <thead>
    <tr>
      <th scope="col">基本状态</th>
      <th scope="col">活动状态</th>
      <th scope="col">打开状态</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{EmbedLiveSample("Basic_state",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_1")}}
      </td>
      <td>
        {{EmbedLiveSample("Active_state",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_1")}}
      </td>
      <td>
        {{EmbedLiveSample("Open_state",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_1")}}
      </td>
    </tr>
    <tr>
      <td colspan="3">
        <a
          href="/zh-CN/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets/Example_1"
          >查看源代码</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 通过 JavaScript 让你的小部件动起来

现在我们的设计和结构已经完成了。我们可以写些 JavaScript 代码来让这个部件真正生效。

> **警告：** 下面的代码仅仅是教学性质的，并且不应该照搬使用。在许多方面，正如我们所看到的，这种方案不具有前瞻性，而且可能在旧浏览器上会不工作。这里面还有冗余的部分，在生产环境下，代码需要优化。

### 它为什么不生效？

在我们开始之前，要记住一件和 JavaScript 有关的非常重要的事情：在浏览器中，**这是一种不可靠的技术**。当你构建一个自定义组件时，你会不得不得依赖于 JavaScript，因为这是将所有的东西联系在一起的线索。但是，很多情况下，JavaScript 不能在浏览器中运行。

- 用户关掉了 JavaScript：这是最不常见的情形。现在只有很少的人会关掉 JavaScript。
- 脚本没有加载。这是最常见的情形，特别是在移动端上，在那些网络非常不可靠的地方。
- 脚本是有问题的。你应该总是考虑这种可能性。
- 脚本和第三方脚本冲突。这可能会由用户使用的跟踪脚本和一些书签工具引发。
- 脚本与一个浏览器的拓展冲突，或者受其影响（比如 Firefox 的 [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) 拓展或者 Chrome 的 [ScriptBlock](https://chrome.google.com/webstore/detail/scriptblock/hcdjknjpbnhdoabbngpmfekaecnpajba) 拓展）。
- 用户在使用老旧的浏览器，而且你需要的一些功能没有被支持。当你使用一些最新的 API 时，这种情况会经常发生。
- 用户在 JavaScript 完全下载、解析和执行之前与内容进行交互。

因为这些风险，认真考虑 JavaScript 不生效时会发生什么是很重要的。处理这个问题的细节超出了这篇文章的范围，因为这与你有多么想使你的脚本具有通用性和可复用性更加相关，不过我们将在我们的例子中考虑与其相关的基本内容。

在我们的例子中，如果 JavaScript 代码没有运行，我们会回退到显示一个标准的 {{HTMLElement("select")}} 元素。我们包括我们的控件和 {{HTMLElement("select")}} 元素；哪一个被显示取决于主体元素的类别，主体元素的类别由成功加载时使控件发挥作用的脚本更新。为了实现这一点，我们需要两样东西。

首先，在每次使用我们的自定义部件前，我们需要添加一个标准的 {{HTMLElement("select")}} 元素。实际上，为了能将来自我们自定义的表单组件和以及其他部分的表单数据发送出去，这个元素也是需要的。我们随后会详细的解释这一点。

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

第二，我们需要两个新的类名来隐藏不需要的元素（即，当我们的脚本没有运行时的自定义组件，或是脚本正常运行时的"真正的" {{HTMLElement("select")}} 元素）。注意默认情况下，我们的 HTML 代码会隐藏我们的自定义组件。

```css
.widget select,
.no-widget .select {
  /* 这个 CSS 选择器大体上说的是：
     - 要么我们将 body 的 class 设置为"widget"，隐藏真实的 {{HTMLElement("select")}} 元素
     - 或是我们没有改变 body 的 class，这样 body 的 class 还是"no-widget",
       因此 class 为"select"的元素需要被隐藏 */
  position : absolute;
  left     : -5000em;
  height   : 0;
  overflow : hidden;
}
```

接下来我们需要一个 JavaScript 开关来决定脚本是否运行。这个开关非常简单：如果页面加载时，我们的脚本运行了，它将会移除 `no-widget` class，并添加 `widget` class，由此切换 {{HTMLElement("select")}} 元素和自定义组件的可视性。

```js
window.addEventListener("load", () => {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

<table>
  <thead>
    <tr>
      <th scope="col">无 JS</th>
      <th scope="col">有 JS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{EmbedLiveSample("No_JS",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_2")}}
      </td>
      <td>
        {{EmbedLiveSample("JS",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_2")}}
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <a
          href="/zh-CN/docs/Learn/Forms/How_to_build_custom_form_widgets/Example_2"
          >查看源代码</a
        >
      </td>
    </tr>
  </tbody>
</table>

> **备注：** 如果你真的想让你的代码变得通用和可重用，最好不要做一个 class 选择器开关，而是通过添加一个组件 class 的方式来隐藏{{HTMLElement("select")}} 元素，并且动态地在每一个{{HTMLElement("select")}} 元素后面添加代表页面中自定义组件的 DOM 树。

### 让工作变得更简单

在我们将要构建的代码之中，我们将会使用标准的 DOM API 来完成我们所要做的所有工作。我们打算使用的特性如下所示：

1. {{domxref("element.classList","classList")}}
2. {{domxref("EventTarget.addEventListener","addEventListener()")}}
3. {{domxref("NodeList.forEach()")}}
4. {{domxref("element.querySelector","querySelector()")}} 和 {{domxref("element.querySelectorAll","querySelectorAll()")}}

### 构造事件回调

基础已经准备好了，我们现在可以开始定义用户每次同我们的组件交互时会用到的所有函数了。

```js
// 这个函数会用在每当我们想要停用一个自定义组件的时候
// 它需要一个参数：
// select :要停用的带有 'select' 类的节点
function deactivateSelect(select) {

  // 如果组件没有运行，不用进行任何操作
  if (!select.classList.contains('active')) return;

  // 我们需要获取自定义组件的选项列表
  var optList = select.querySelector('.optList');

  // 关闭选项列表
  optList.classList.add('hidden');

  // 然后停用组件本身
  select.classList.remove('active');
}

// 每当用户想要激活这个组件的时候，会调用这个函数
// 调用该函数会取消激活其他选择控件
// 它需要 2 个参数：
// select : 要激活的带有'select'类的 DOM 节点
// selectList : 包含所有带'select'类的 DOM 节点的列表
function activeSelect(select, selectList) {

  // 如果组件已经激活了，不进行任何操作
  if (select.classList.contains('active')) return;

  // 我们需要关闭所有自定义组件的活动状态
  // 因为 deactiveselect 函数满足 forEach 回调函数的所有请求，
  // 我们直接使用它，不使用中间匿名函数
  selectList.forEach(deactivateSelect);

  // 然后我们激活特定的组件
  select.classList.add('active');
}

// 每当用户想要打开或关闭选项列表的时候，会调用这个函数
// 它需要一个参数：
// select : 要触发的列表的 DOM 节点
function toggleOptList(select) {
  // 该列表不包含在组件中
  const optList = select.querySelector('.optList');

  // 我们改变列表的class去显示或隐藏它
  optList.classList.toggle('hidden');
}

// 每当我们要高亮一个选项的时候，会调用该函数
// 它需要两个参数：
// select : 带有'select'类的 DOM 节点，包含了需要高亮强调的选项
// option : 需要高亮强调的带有'option'类的 DOM 节点
function highlightOption(select, option) {

  // 为我们的自定义 select 元素获取所有有效选项的列表
  const optionList = select.querySelectorAll('.option');

  // 我们移除所有选项的高亮强调
  optionList.forEach((other) => {
    other.classList.remove('highlight');
  });

  // 我们高亮强调正确的选项
  option.classList.add('highlight');
};
```

这是你需要用来处理组件不同状态的所有代码。

接下来，我们将这些函数绑定到合适的事件上：

```js
// 我们处理文档加载时的事件绑定。
window.addEventListener('load', () => {
  const selectList = document.querySelectorAll('.select');

  // 每个自定义组件都需要初始化
  selectList.forEach((select) => {

    // 它的'option'元素也需要
    const optionList = select.querySelectorAll('.option');

    // 每当用户的鼠标悬停在一个选项上时，我们高亮这个指定的选项
    optionList.forEach((option) => {
      option.addEventListener('mouseover', () => {
        // 注意:'select'和'option'变量是我们函数调用范围内有效的闭包。
        highlightOption(select, option);
      });
    });

    // 每当用户点击一个自定义的 select 元素时
    select.addEventListener('click', (event) => {
      // 注意:'select'变量是我们函数调用范围内有效的闭包。

      // 我们改变选项列表的可见性
      toggleOptList(select);
    });

    // 如果组件获得了焦点
    // 每当用户点击它或是用 tab 键访问这个组件时，组件获得焦点
    select.addEventListener('focus', (event) => {
      // 注意:'select'和'selectlist'变量是我们函数调用范围内有效的闭包。

      // 我们激活这个组件
      activeSelect(select, selectList);
    });

    // 如果组件失去焦点
    select.addEventListener('blur', (event) => {
      // 注意:'select'变量是我们函数调用范围内有效的闭包。

      // 我们关闭这个组件
      deactivateSelect(select);
    });

    // 如果用户按下 `esc` 键，取消聚焦
    select.addEventListener('keyup', (event) => {

      // 在松开 `esc` 键时取消激活
      if (event.key === "Escape") {
        deactivateSelect(select);
      }
    });
  });
});
```

此时，我们的组件会根据我们的设计改变状态，但是它的值仍然没有更新。我们接下来会处理这件事。

| 在线示例                                                                                                        |
|-------------------------------------------------------------------------------------------------------------|
| {{EmbedLiveSample("Change_states",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_3")}} |
| [查看源代码](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls/Example_3)                                |

### 处理控件的值

既然我们的组件已经开始工作了，我们必须添加代码，使其能够根据用户的输入更新取值，并且能将取值随表单数据一同发送。

实现这一点最简单的方法是使用后台原生组件。这样的一个组件会使用浏览器提供的所有内置控件跟踪值，并且在表单提交时，取值也会像往常一样发送。当有现成的功能时，我们再做重复工作就毫无意义了。

像前面所看到的那样，出于无障碍的原因，我们已经使用了一个原生的选择组件作为后备显示内容；我们可轻松的将它的值与我们的自定义组件之间的值同步。

```js
// 这个函数更新显示的值并将其通过原生组件同步
// 它需要 2 个参数：
// select : 含有要更新的值的'select'类的 DOM 节点
// index  : 要被选择的值的索引
function updateValue(select, index) {
  // 我们需要为了给定的自定义组件获取原生组件
  // 在我们的例子中，原生组件是自定义组件的‘同胞’
  const nativeWidget = select.previousElementSibling;

  // 我们也需要得到自定义组件的值占位符，
  const value = select.querySelector('.value');

  // 还有整个选项列表。
  const optionList = select.querySelectorAll('.option');

  // 我们将被选择的索引设定为我们的选择的索引
  nativeWidget.selectedIndex = index;

  // 更新相应的值占位符
  value.innerHTML = optionList[index].innerHTML;

  // 然后高亮我们自定义组件里对应的选项
  highlightOption(select, optionList[index]);
};

// 这个函数返回原生组件里当前选定的索引
// 它需要 1 个参数：
// select : 跟原生组件有关的'select'类 DOM 节点
function getIndex(select) {
  // 我们需要为了给定的自定义组件访问原生组件
  // 在我们的例子中，原生组件是自定义组件的一个“同胞”
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
};
```

通过这两个函数，我们可以将原生组件绑定到自定义的组件上。

```js
// 我们在文档加载时处理事件的绑定。
window.addEventListener('load', () => {
  const selectList = document.querySelectorAll('.select');

  // 每个自定义组件都需要初始化
  selectList.forEach((select) => {
    const optionList = select.querySelectorAll('.option');
    const selectedIndex = getIndex(select);

    // 使我们的自定义组件可以获得焦点
    select.tabIndex = 0;

    // 我们让原生组件无法获得焦点
    select.previousElementSibling.tabIndex = -1;

    // 确保默认选中的值正确显示
    updateValue(select, selectedIndex);

    // 每当用户点击一个选项的时候，更新相应的值
    optionList.forEach((option, index) => {
      option.addEventListener('click', (event) => {
        updateValue(select, index);
      });
    });

    // 每当用户在获得焦点的组件上用键盘操作时，更新相应的值
    select.addEventListener('keyup', (event) => {
      let index  = getIndex(select);

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

在上面的代码里，值得注意的是 [`tabIndex`](/zh-CN/docs/Web/API/HTMLElement/tabIndex) 属性的使用。使用这个属性是很有必要的，这可以确保原生组件将永远不会获得焦点，而且还可以确保当用户使用键盘和鼠标时，我们的自定义组件能够获得焦点。

做完上面这些后，我们就完成了！下面是结果：

| 在线示例                                                                                                        |
|-------------------------------------------------------------------------------------------------------------|
| {{EmbedLiveSample("Change_states",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_4")}} |
| [查看源代码](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls/Example_4)                                |

但是等等，我们真的做完了嘛？

## 使其具有无障碍性

我们已经建立了一个可以工作的东西，虽然我们离一个功能齐全的选择框还很远，但它工作得很好。但我们所做的只不过是在 DOM 上做了些手脚而已。它没有真正的语义，即使它看起来像一个选择框，但从浏览器的角度来看，它并不是一个选择框，所以辅助技术无法理解它是一个选择框。简而言之，这个漂亮的全新选择框是不具有无障碍性的！

幸运的是，有一种解决方案叫做 [ARIA](/zh-CN/docs/Accessibility/ARIA)。ARIA 代表“无障碍富互联网应用“。这是一个专为我们现在做的事情设计的 [W3C 规范](https://www.w3.org/TR/wai-aria/)：使网络应用和自定义组件易于访问，它本质上是一组用来拓展 HTML 的属性集，以便我们能够更好的描述角色，状态和属性，就像我们刚才设计的元素是是它试图传递的原生元素一样。使用这些属性可以通过编辑 HTML 标记来完成。当用户更新他们的选择值时，我们也通过 JavaScript 更新 ARIA 属性。

### `role` 属性

[ARIA](/zh-CN/docs/Accessibility/ARIA) 使用的关键属性是 [`role`](/zh-CN/docs/Accessibility/ARIA/ARIA_Techniques) 属性。[`role`](/zh-CN/docs/Accessibility/ARIA/ARIA_Techniques) 属性接受一个值，该值定义了一个元素的用途。每一个 role 定义了它自己的需求和行为。在我们的例子中，我们会使用 [`listbox`](/zh-CN/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role) 这一 role。这是一个“合成角色”，表示具有该 role 的元素应该有子元素，每个子元素都有特定的角色（在这个案例中，至少有一个具有 `option` 角色的子元素）。

同样值得注意的是，ARIA 定义了默认应用于标准 HTML 标记的角色。例如，{{HTMLElement("table")}} 元素与角色 `grid` 相匹配，而 {{HTMLElement("ul")}} 元素与角色 `list` 相匹配。由于我们使用了一个 {{HTMLElement("ul")}} 元素，我们想要确保我们组件的 `listbox` 角色能替代 {{HTMLElement("ul")}} 元素的 `list` 角色。为此，我们会使用角色 `presentation`。这个角色被设计成让我们来表示一个元素没有特殊的含义，并且仅仅用于提供信息。我们会将其应用到 {{HTMLElement("ul")}} 元素上。

为了支持 [`listbox`](/zh-CN/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role) 角色，我们只需要将我们 HTML 改成这样：

```html
<!-- 我们把 role="listbox" 属性添加到我们的顶部元素 -->
<div class="select" role="listbox">
  <span class="value">Cherry</span>
  <!-- 我们也把 role="presentation" 添加到 ul 元素中 -->
  <ul class="optList" role="presentation">
    <!-- 然后把 role="option" 属性添加到所有 li 元素里 -->
    <li role="option" class="option">Cherry</li>
    <li role="option" class="option">Lemon</li>
    <li role="option" class="option">Banana</li>
    <li role="option" class="option">Strawberry</li>
    <li role="option" class="option">Apple</li>
  </ul>
</div>
```

> **备注：** 只有当你想要为不支持 [CSS 属性选择器](/zh-CN/docs/CSS/Attribute_selectors)的旧浏览器提供支持时，才有必要同时包含 `role` 属性和一个 `class` 属性。

### `aria-selected` 属性

仅仅使用 [`role`](/en-US/docs/Accessibility/ARIA/ARIA_Techniques) 属性是不够的。 [ARIA](/en-US/docs/Accessibility/ARIA) 还提供了许多状态和属性的内部特征。你能更好更充分的利用它们，你的组件就会能够被辅助技术更好的理解。在我们的例子中，我们会把使用限制在一个属性上：`aria-selected`。

`aria-selected` 属性被用来标记当前被选中的选项；这可以让辅助技术告知用户当前的选项是什么。我们会通过 JavaScript 动态地使用该属性，每当用户选择一个选项时标记选中的选项。为了达到这一目的，我们需要修正我们的 `updateValue()` 函数：

```js
function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector('.value');
  const optionList = select.querySelectorAll('[role="option"]');

  // 我们确保所有的选项都没有被选中
  optionList.forEach((other) => {
    other.setAttribute('aria-selected', 'false');
  });

  // 我们确保选定的选项被选中了
  optionList[index].setAttribute('aria-selected', 'true');

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
};
```

这是经过所有的改变之后的最终结果（藉由 [NVDA](https://www.nvaccess.org/) 或 [VoiceOver](https://www.apple.com/accessibility/voiceover/) 这样的辅助技术尝试它，你会对此有更好的体会）：

| 在线示例                                                                                                        |
|-------------------------------------------------------------------------------------------------------------|
| {{EmbedLiveSample("Change_states",120,130, "", "Learn/Forms/How_to_build_custom_form_controls/Example_5")}} |
| [查看源代码](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls/Example_5)                                |

如果你想继续前进，这个例子中的代码在成为通用和可复用代码之前需要一些改进。这是一个你可以尝试进行的练习。有两个提示可以帮助你：我们所有函数的第一个参数都是一样的，这意味着这些函数需要相同的上下文。建立一个对象来共享这个上下文是明智的。

## 其他方案：使用单选按钮

在上述示例中，我们使用了非语义化的 HTML、CSS 和 JavaScript 重新发明了 {{htmlelement('select')}} 元素。此选择器可以从一些有限数量的选项中选择出其中的一项，这不是跟同样名称的一组 {{htmlelement('input/radio', 'radio')}} 单选按钮功能很相似吗？

因此，我们可以用单选按钮来重新构建，让我们看看这个选项。

我们可以从完全具有语义、无障碍性的一系列由无序列表的 {{htmlelement('input/radio','radio')}} 单选按钮和附带相应 {{htmlelement('label')}} 元素，将整个组使用语义上匹配的 {{htmlelement('fieldset')}} 和 {{htmlelement('legend')}} 对来标记。

```html
<fieldset>
  <legend>Pick a fruit</legend>
  <ul class="styledSelect">
    <li><input type="radio" name="fruit" value="Cherry" id="fruitCherry" checked><label for="fruitCherry">Cherry</label></li>
    <li><input type="radio" name="fruit" value="Lemon" id="fruitLemon"><label for="fruitLemon">Lemon</label></li>
    <li><input type="radio" name="fruit" value="Banana" id="fruitBanana"><label for="fruitBanana"">Banana</label></li>
    <li><input type="radio" name="fruit" value="Strawberry" id="fruitStrawberry"><label for="fruitStrawberry">Strawberry</label></li>
    <li><input type="radio" name="fruit" value="Apple" id="fruitApple"><label for="fruitApple">Apple</label></li>
  </ul>
</fieldset>
```

我们将对单选按钮列表（而不是 legend/fieldset）做一点样式设计，使其看起来有点像前面的例子，只是为了说明可以这样做：

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
.styledSelect [type=radio] {
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
  border: .2em solid #000;
  border-radius: .4em;
  box-shadow: 0 .1em .2em rgba(0,0,0,.45);
}
.styledSelect:not(:focus-within) input:checked + label::after {
  content : "▼";
  background: black;
  float: right;
  color: white;
  padding: 0 4px;
  margin: 0 -4px 0 4px;
}
.styledSelect:focus-within {
  border: .2em solid #000;
  border-radius: .4em;
  box-shadow: 0 .1em .2em rgba(0,0,0,.45);
}
.styledSelect:focus-within input:checked + label {
  background-color: #333;
  color: #fff;
  width: 100%;
}
```

目前还并没有使用任何 JavaScript，也只使用了一丁点 CSS，我们可以对单选按钮列表进行样式化处理，只显示选中的项目。当焦点在 `<fieldset>` 中的 `<ul>` 内时，列表会打开，上下（和左右）箭头会发挥作用，选择上一个和下一个项目。试试这个例子：

{{EmbedLiveSample("An_alternative_approach_Using_radio_buttons",200,240)}}

在某种程度上，这在没有JavaScript的情况下也能工作。我们已经创建了一个与我们的自定义控件类似的控件，即使JavaScript失效也能工作。这个解决方案很不错，不是吗？然而，也不是百分百的情况下。这在键盘下可以工作，但鼠标点击不能如期进行。使用 web 标准作为自定义控件的基础，而不是依靠框架来创建没有本地语义的元素，这可能更有意义。然而，我们的控件并不具备 `<select>` 所具有的相同功能。

从好的方面看，这个控件对屏幕阅读器来说是完全无障碍的，而且完全可以通过键盘进行导航。然而，这个控件并不是对 {{htmlelement('select')}} 元素的替换。有一些功能是不同或缺失的。例如，四个方向键都可以在选项中选择，但当用户在最后一个按钮上时，按下向下的箭头会把他们带到第一个按钮；它不像 `<select>` 那样停在选项列表的顶部和底部。

我们会将添加这项缺失的功能留作读者的练习。

## 总结

我们已经了解了所有和构建一个自定义表单组件相关的基础知识，但是如你所见做这件事非常繁琐。在创建你自己的自定义控件之前，请考虑 HTML 是否提供了可以用来充分支持你的要求的替代元素。如果你确实需要创建一个自定义控件，依靠第三方库而不是自己创建，往往会更容易。但是，如果你确实自己创建并修改了现有的元素，或者使用一个框架来实现一个预先封装好的控件，请记住，创建一个可用的、无障碍的表单控件比它看起来更复杂。

这里有一些库，在你编写自己的之前应该了解一下：

- [jQuery UI](http://jqueryui.com/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)
- [Nice Forms](http://www.emblematiq.com/lab/niceforms/)

如果你确实通过单选按钮、你自己的 JavaScript 或者用第三方库来创建替代控件，请确保它是无障碍且经过考验的；也就是说，它需要能够在各种浏览器上更好地工作，而这些浏览器与它们使用的网络标准的兼容性是不同的。祝愉快！

## 本章目录

### 学习之路

- [你的第一个表单](/zh-CN/docs/Learn/Forms/Your_first_form)
- [如何构造 HTML 表单](/zh-CN/docs/Learn/Forms/How_to_structure_a_web_form)
- [原生表单部件](/zh-CN/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 input 类型](/zh-CN/docs/Learn/Forms/HTML5_input_types)
- [其它表单控件](/zh-CN/docs/Learn/Forms/Other_form_controls)
- [UI 伪类](/zh-CN/docs/Learn/Forms/UI_pseudo-classes)
- [样式化 HTML 表单](/zh-CN/docs/Learn/Forms/Styling_web_forms)
- [客户端表单验证](/zh-CN/docs/Learn/Forms/Form_validation)
- [发送表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)

### 高级技巧

- [使用 JavaScript 发送表单](/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [如何构建表单控件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [旧式浏览器上的 HTML 表单](/zh-CN/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [高级表单样式](/zh-CN/docs/Learn/Forms/Advanced_form_styling)
- [表单部件兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)