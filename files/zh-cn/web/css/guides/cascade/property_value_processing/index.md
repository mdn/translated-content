---
title: CSS 属性值处理
short-title: 属性值处理
slug: Web/CSS/Guides/Cascade/Property_value_processing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

对于文档树中的每个元素，浏览器都会为适用于该元素的每个 CSS 属性赋值。特定元素或盒子的每个 CSS 属性的渲染值都是基于样式表定义、继承、[层叠](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)、依赖关系、单位转换和显示环境的计算结果。本指南通过探讨指定值、计算值、应用值和实际值等关键概念，概述了用于定义每个 CSS 值最终如何渲染的处理步骤。

## 属性值

每个 CSS 属性的值都来自具有最大 {{cssxref("specificity")}} 的声明。如果两个或两个以上具有相同优先级的声明为同一元素提供了不同的属性值，则会应用选择器具有最大算法权重的声明值。

每个属性值都来自一个属性值对；每个属性都应用了一个值。即使值是一个逗号分隔的值列表，该值列表也是来自一个单一的声明。

为确定应用哪个指定值，用户代理会收集并处理来自不同来源的所有样式，如内联样式、内部和外部样式表。

某些属性会继承父元素的值，除非明确覆写。当元素上的特定属性没有样式信息时，就会出现[继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)。如果属性被继承，其值将被设置为父元素的[计算值](#计算值)。如果属性没有被继承，其值将被设置为该元素的[初始值](#初始值)。

[层叠](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)决定了当多个相互冲突的样式针对同一元素时该应用哪个值。级联算法定义了用户代理如何组合来自不同来源、作用域和/或层的属性值。当选择器与元素匹配时，即使优先级较低的来源或层的选择器具有更大的 {{cssxref("specificity")}}，也会应用优先级最高的来源的属性[指定值](#指定值)。

在逐步应用层叠规则和解析值后，浏览器会确保视觉呈现与处理过的 CSS 相匹配。

## 处理阶段

作为文档扁平化元素树一部分的所有元素都有声明值、级联值、指定值、计算值、应用值和实际值。对于特定属性，这些值可能相同，也可能不相同。例如，如果大型代码库包含 CSS `p { font-size: 1.25em; }`，而 HTML 包含 `<p>CSS is fun!</p>`，{{cssxref("font-size")}} 值会经过几个阶段，从指定的 `em` 值变为渲染的 `px` 值。

- [初始值](#初始值)
- [指定值](#指定值)
- [计算值](#计算值)
- [应用值](#应用值)

这些值用于决定最终的[渲染值](#渲染值)。

### 初始值

属性的**初始值**（initial value）是其默认值，如其定义表中所列。初始值的使用取决于属性是否被继承：

- 对于[继承属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance#继承属性)，只要没有提供[指定值](#指定值)，初始值*只能*被用于没有指定值的*根元素*上。
- 对于[非继承属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance#非继承属性)，只要没有提供[指定值](#指定值)，初始值可以被用于*任意*没有指定值的元素上。

你可以使用 {{cssxref("initial")}} 关键字明确指定初始值。

> [!NOTE]
> 初始值可在每个 CSS 属性参考页面的形式语法部分找到。例如，[`font-size` 的初始值为 `medium`](/zh-CN/docs/Web/CSS/Reference/Properties/font-size#形式定义)。初始值不应与浏览器样式表指定的值相混淆。

### 指定值

属性的**指定值**（specified value）是 CSS 文件或 `style` 属性最初分配的值。给定属性的指定值根据以下规则确定：

1. 在当前文档的样式表中给这个属性赋的值，会被优先使用。
2. 如果在当前文档的样式表中没有给这个属性赋值，那么它会尝试从父元素那继承一个值。
3. 如果上面的两种途径都不可行，则使用元素的[初始值](#初始值)。

在示例 `p { font-size: 1.25em; }` 中，除非代码库中包含了 {{cssxref("specificity")}} 更大的 `font-size` 声明，否则指定值为 `1.25em`。

### 计算值

属性的**计算值**（computed value）是指这个属性在由父类转向子类的继承中的值。这是在将相对单位和自定义属性转换为绝对值等内容后，但在考虑特定布局信息之前得出的结果。

计算值由[指定值](#指定值)计算得出，计算方法是：

- 处理特殊值 {{cssxref("inherit")}}、{{cssxref("initial")}}、{{cssxref("unset")}}、{{cssxref("revert")}}、{{cssxref("revert-layer")}} 和 {{cssxref("unset")}}。
- 进行计算，以达到属性摘要中“计算值”中描述的值。

计算值所需要的计算通常包括将相对值转换成绝对值（如 `em` 单位或百分比）。例如，如一个元素的属性值为 `font-size:16px` 和 `padding-top:2em`，则 `padding-top` 的计算值为 `32px`（字体大小的 2 倍）。

然而，对于有些属性（这些元素的百分比与需要布局确定后才能知道的值有关，如 `width`、`margin-right`、`text-indent` 和 `top`），它们的“百分比值”会转换成“百分比的计算值”。另外，line-height 属性值如是没有单位的数字，则该值就是其计算值。这些计算值中的相对值会在[使用值](#使用值)确定后转换成绝对值。

给定 `p { font-size: 1.25em; }`，如果 `em` 对应了 `16px`，则段落字体大小的计算值将为 `20px`。

### 应用值

属性的**应用值**（used value）是在对[计算值](#计算值)进行了所有计算，并根据布局的具体细节（例如，将百分比解析为实际像素值）对其进行细化后的属性值。

每个 CSS 属性都有一个应用值。尺寸（如 {{cssxref("width")}} 或 {{cssxref("line-height")}}）的使用值以像素为单位。简写属性（如 {{cssxref("background")}}）的使用值与其组件属性（如 {{cssxref("background-color")}} 或 {{cssxref("background-size")}}）以及 {{cssxref("position")}} 和 {{cssxref("float")}} 的应用值一致。

元素的 {{cssxref("width")}} 或 {{cssxref("inline-size")}} 的应用值是像素值，即使属性的指定值是用百分比或关键字值设置的。

如果我们有三个宽度分别设置为 `auto`、`50%` 和 `inherit` 的容器元素：

```html hidden
<div id="no-width">
  <p>没有明确设置宽度</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>明确设定宽度：50%</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>明确设定宽度：inherit</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* 使结果更易于查看 */
div {
  border: 1px solid red;
  padding: 8px;
}
```

```js hidden
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `应用宽度：${wid}。`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

虽然三个指定值 `auto`、`50%` 和 `inherit` 都是关键字和 {{cssxref("percentage")}} 值，但使用 `window.getComputedStyle(el)[‘width’];` 获取 `width` 时，返回的是[绝对长度](/zh-CN/docs/Web/CSS/Reference/Values/length#绝对长度单位) `px` 值：

{{ EmbedLiveSample('示例', '80%', 372) }}

改变窗口尺寸或旋转移动设备以改变尺寸和应用值。

## 渲染值

渲染的值称为[实际值](#实际值)，而通过脚本获取的值称为[解析值](#解析值)。

### 实际值

属性的**实际值**（actual value）是应用值（used value）被应用后的近似值。例如，一个用户代理可能只能渲染一个整数像素值的边框（实际值），并且该值可能被强制近似于边框的计算宽度值。

计算分为三步：

1. 首先，根据[级联](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction)、[继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)或使用[初始值](#初始值)的结果确定[指定值](#指定值)。
2. 接下来，[计算值](#计算值)将根据规范进行计算（例如，具有 `position: absolute` 的 `span` 将把其计算的 `display` 更改为 `block`）。
3. 然后计算布局，得出[应用值](#应用值)。
4. 最后，根据本地环境的限制对已用值进行转换，得出实际值。

### 解析值

属性的**解析值**（resolved value）是应用活动样式表并解析这些值可能包含的任何基本计算后的值。{{domxref("Window.getComputedStyle", "getComputedStyle()")}} 方法会返回一个实时的 {{domxref("CSSStyleDeclaration")}} 对象，其中包含应用到指定元素的所有 CSS 属性的解析值。每个解析值都是[计算值](#计算值)或[使用值](#使用值)，具体取决于属性。

一直以来，`getComputedStyle()` 返回元素或伪元素的计算值。随着 CSS 的发展，“计算值”的概念也发生了变化，但为了向后兼容已部署的脚本，`getComputedStyle()` 返回的值必须保持不变。这些值就是“解析值”。

对于大多数属性，解析值就是计算值，但对于少数传统属性（包括 {{cssxref("width")}} 和 {{cssxref("height")}}），解析值就是应用值。[CSSOM 规范](https://drafts.csswg.org/cssom/#resolved-values) 提供了每个属性的详细信息。

CSS 2.0 将*计算值*定义为属性计算的最后一步。CSS 2.1 引入了“应用值”的独特定义。这样，一个元素就可以明确地继承其父元素的宽度/高度，其计算值是一个百分比。对于不依赖布局的 CSS 属性（如 `display`、`font-size` 或 `line-height`），计算值和应用值是相同的。下面列出的 CSS 2.1 属性*依赖于*布局，因此计算值和应用值不同（摘自 [CSS 2.1 变更：指定值、计算值和实际值](https://www.w3.org/TR/CSS2/changes.html#q21.36)）：

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}、{{cssxref("left")}}、{{cssxref("right")}}、{{cssxref("top")}}
- {{cssxref("height")}}、{{cssxref("width")}}
- {{cssxref("margin-bottom")}}、{{cssxref("margin-left")}}、{{cssxref("margin-right")}}、{{cssxref("margin-top")}}
- {{cssxref("min-height")}}、{{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}、{{cssxref("padding-left")}}、{{cssxref("padding-right")}}、{{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## 参见

- 控制继承的 CSS 值：[`inherit`](/zh-CN/docs/Web/CSS/Reference/Values/inherit)、[`initial`](/zh-CN/docs/Web/CSS/Reference/Values/initial)、[`revert`](/zh-CN/docs/Web/CSS/Reference/Values/revert)、[`revert-layer`](/zh-CN/docs/Web/CSS/Reference/Values/revert-layer) 和 [`unset`](/zh-CN/docs/Web/CSS/Reference/Values/unset)
- [CSS 层叠与继承](/zh-CN/docs/Web/CSS/Guides/Cascade)模块
- [CSS 语法](/zh-CN/docs/Web/CSS/Guides/Syntax)模块
