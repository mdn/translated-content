---
title: <length>
slug: Web/CSS/Reference/Values/length
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

**`<length>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)表示距离值。许多 CSS 属性会用到长度，比如 {{Cssxref("width")}}、{{Cssxref("margin")}}、{{Cssxref("padding")}}、{{Cssxref("border-width")}}、{{Cssxref("font-size")}} 和 {{Cssxref("text-shadow")}}。

> [!NOTE]
> 虽然 {{cssxref("&lt;percentage&gt;")}} 值可以在接受 `<length>` 值的某些相同属性中使用，但它们本身不是 `<length>` 值。具体请参阅 {{cssxref("&lt;length-percentage&gt;")}}。

## 语法

`<length>` 数据类型由一个 {{cssxref("&lt;number&gt;")}} 和一个下述长度单位构成。与所有 CSS 维度一样，单位的字面值与数字之间没有空格。数字为 `0` 时，长度单位是可选的。

> [!NOTE]
> 有些属性支持使用负数的 `<length>` 值，而有些不支持。

长度的[指定值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#指定值)由其数量和单位表示。长度的[计算值](/zh-CN/docs/Web/CSS/Guides/Cascade/Property_value_processing#计算值)是解析为绝对长度的指定长度，其单位没有区分。

`<length>` 的单位可以是相对或绝对的。相对长度表示以其他距离为单位的测量值。根据单位的不同，这个距离可以是特定字符的大小、[行高](/zh-CN/docs/Web/CSS/Reference/Properties/line-height)或{{Glossary("viewport", "视口")}}的大小。使用相对长度单位的样式表可以更容易地从一个输出环境扩展到另一个输出环境。

> [!NOTE]
> 子元素不会继承父元素的相对值，而是继承计算值。

## 相对长度单位

CSS 相对长度单位可以基于字体、容器或视口尺寸。

### 基于字体的相对长度单位

字体长度根据元素或其父元素当前使用的字体中特定字符或字体属性的大小定义 `<length>` 值。

> [!NOTE]
> 这些相对单位，尤其是 `em` 和相对于根的 `rem`，通常用于创建可扩展的布局，即使用户改变字体大小，也能保持页面的垂直节奏。

- `cap`
  - : 表示元素字体（{{Cssxref("font")}}）的“大写字高”（即大写字母的标称高度）。
- `ch`
  - : 表示元素字体（{{Cssxref("font")}}）中 `0` 这一字形的宽度（“0”，Unicode 字符 U+0030），更准确地说，是“0”这一字形的{{Glossary("advance measure", "步进尺寸")}}。如果无法确定 `0` 字形的大小，则必须假定其宽为 `0.5em`，高为 `1em`。
- `em`
  - : 相对长度单位，这个单位表示元素的 {{Cssxref("font-size")}} 的计算值。如果用在 {{Cssxref("font-size")}} 属性本身，它则表示元素*继承*的 `font-size` 值。
- `ex`
  - : 这个单位表示元素字体（{{Cssxref("font")}}）的 [x-字高](https://zh.wikipedia.org/wiki/x字高)。在含有 `x` 字母的字体中，它是该字体的小写字母的高度；对于很多字体来说，`1ex ≈ 0.5em`。
- `ic` {{experimental_inline}}
  - : 等于在用于渲染的字体中找到的“水”（CJK 表意文字“水”，U + 6C34）字形的{{Glossary("advance measure", "步进尺寸")}}。
- `lh` {{experimental_inline}}
  - : 等于使用它的元素的 {{Cssxref("line-height")}} 属性的计算值，转换为绝对长度。使用该单位可以根据理想空行的理论尺寸计算长度。不过，实际行盒子的大小可能会因内容而异。

### 基于根元素字体的相对长度单位

根元素字体相对长度单位以[根](/zh-CN/docs/Web/CSS/Reference/Selectors/:root)元素的特定字符或字体属性的大小来定义 `<length>` 值：

- `rcap`
  - : 表示根元素字体（{{Cssxref("font")}}）的“大写字高”（即大写字母的标称高度）。
- `rch`
  - : 表示根元素字体（{{Cssxref("font")}}）中 `0` 这一字形的宽度（“0”，Unicode 字符 U+0030），更准确地说，是“0”这一字形的{{Glossary("advance measure", "步进尺寸")}}。
- `rem`
  - : 相对长度单位，这个单位表示根元素的（通常是 {{HTMLElement("html")}}）{{Cssxref("font-size")}} 的计算值。在根元素 {{Cssxref("font-size")}} 中使用时，它代表初始值。常见的浏览器默认值为 `16px`，但用户自定义的偏好设置可能会对此进行修改。
- `rex`
  - : 代表根元素字体（{{Cssxref("font")}}）的 x-字高。
- `ric`
  - : 等同于根元素字体的 [`ic`](#ic) 值。
- `rlh` {{experimental_inline}}
  - : 等同于根元素字体的 [`lh`](#lh) 值。该单位可根据理想空行的理论尺寸计算长度。不过，实际行盒子的大小可能会因内容而异。

### 基于视口的相对长度单位

视口百分比长度单位基于四种不同的视口尺寸：小（small）、大（large）、动态（dynamic）和默认（default）。允许不同的视口尺寸是为了应对浏览器界面的动态扩展和收缩，以及隐藏和显示下方的内容。

- **小**
  - : 当浏览器界面动态扩展时，如果需要尽可能小的视口，则应使用小视口尺寸。视口尺寸允许你设计的内容在浏览器界面展开时充满整个视口。选择这种尺寸也有可能在浏览器界面缩回时留下空白。

    例如，如果一个元素的大小是根据小视口大小使用视口百分比单位确定的，那么当所有动态浏览器界面都显示出来时，该元素就会完全填满屏幕，其内容不会被遮挡。但是，当这些浏览器界面被隐藏时，元素周围可能会有额外的可见空间。因此，在一般情况下，使用小视口百分比单位比较“安全”，但在用户开始与页面交互后，可能不会产生最有吸引力的布局。

    小视口尺寸由 `sv` 前缀表示，并产生 `sv*` 视口百分比长度单位。小视口百分比单位的大小是固定的，因此是稳定的，除非调整视口本身的大小。

- **大**
  - : 当浏览器界面动态缩回时，如果需要尽可能大的视口，则应使用大视口尺寸。大视口尺寸允许你设计的内容在浏览器界面收缩时充满整个视口。需要注意的是，当浏览器界面展开时，内容可能会被隐藏。

    例如，在屏幕空间有限的手机上，浏览器通常会在用户开始滚动页面后隐藏部分或全部标题栏和地址栏。当一个元素的大小是基于大视口尺寸的视口百分比单位时，当这些浏览器界面被隐藏时，元素的内容将充满整个可见页面。但是，当这些可收缩的浏览器界面显示出来时，它们会隐藏使用*大*视口百分比单位确定大小或位置的内容。

    大型视口单位由 `lv` 前缀表示，并产生 `lv*` 视口百分比单位。除非调整视口本身的大小，否则大视口百分比单位的大小是固定的，因此也是稳定的。

- **动态**
  - : 如果希望根据浏览器界面的动态扩展或收缩自动调整视口大小，可以使用动态视口大小。动态视口尺寸可使你设计的内容完全适合视口，而与浏览器界面的动态变化无关。

    动态视口单位由 `dv` 前缀表示，并产生 `dv*` 视口百分比单位。动态视口百分比单位的大小并不稳定，即使视口本身保持不变。

    > [!NOTE]
    > 虽然动态视口尺寸可以提供更多控制和灵活性，但根据动态视口尺寸使用视口百分比单位可能会导致用户滚动页面时调整内容大小。这可能会导致用户界面质量下降并影响性能。

- **默认**
  - : 默认视口尺寸由浏览器定义。生成的视口百分比单位的行为可能等同于基于小视口尺寸、大视口尺寸、两者之间的中间尺寸或动态视口尺寸的视口百分比单位。

    > [!NOTE]
    > 例如，浏览器可能会将默认视口百分比高度单位（`vh`）等同于大视口百分比高度单位（`lvh`）。如果是这样，当浏览器界面展开时，这可能会遮挡全页面显示的内容。

视口百分比长度定义了相对于初始[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)大小的百分比值 `<length>`，而初始[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)的大小又基于{{Glossary("viewport", "视口")}}或页面区域（即文档的可见部分）的大小。当初始包含块的高度或宽度发生变化时，根据它们确定大小的元素也会相应缩放。如下所述，每个视口尺寸都有一个与之相对应的视口百分比长度单位变量。

> [!NOTE]
> 视口长度在 {{cssxref("@page")}} 声明块中无效。

- `vh`
  - : 代表视口初始[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)高度的百分比。`1vh` 是视口高度的 1%。例如，如果视口高度为 `300px`，那么属性上的 `70vh` 值就是 `210px`。

    对于小、大和动态视口尺寸，视口百分比单位分别是 `svh`、`lvh` 和 `dvh`。`vh` 表示基于浏览器默认视口尺寸的视口百分比长度单位。

- `vw`
  - : 代表视口初始[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)宽度的百分比。`1vw` 是视口宽度的 1%。例如，如果视口宽度为 `800px`，那么属性上的 `50vw` 值就是 `400px`。

    对于小、大和动态视口尺寸，视口百分比单位分别是 `svw`、`lvw` 和 `dvw`。`vw` 表示基于浏览器默认视口尺寸的视口百分比长度单位。

- `vmax`
  - : 以百分比表示 `vw` 和 `vh` 的最大值。

    对于小、大和动态视口尺寸，相应的视口百分比单位分别是 `svmax`、`lvmax` 和 `dvmax`。`vmax` 表示基于浏览器默认视口尺寸的视口百分比长度单位。

- `vmin`
  - : 以百分比表示 `vw` 和 `vh` 的最小值。

    对于小、大和动态视口尺寸，相应的视口百分比单位分别是 `svmin`、`lvmin` 和 `dvmin`。`vmin` 表示基于浏览器默认视口尺寸的视口百分比长度单位。

- `vb`
  - : 代表初始[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)大小在根元素的[区块轴](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)方向上的百分比。

    对于小、大和动态视口尺寸，各自的视口百分比单位分别是 `svb`、`lvb` 和 `dvb`。`vb` 表示基于浏览器默认视口尺寸的视口百分比长度单位。

- `vi`
  - : 代表初始[包含块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)大小的百分比，方向与根元素的[行向轴](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)一致。

    对于小、大和动态视口尺寸，相应的视口百分比单位分别是 `svi`、`lvi` 和 `dvi`。`vi` 表示基于浏览器默认视口尺寸的视口百分比长度单位。

### 容器查询长度单位

使用容器查询对容器应用样式时，可以使用容器查询长度单位。这些单位指定了相对于查询容器尺寸的长度。使用相对于其容器的长度单位的组件在不同容器中使用更灵活，而无需重新计算具体的长度值。更多信息，请参见[容器查询](/zh-CN/docs/Web/CSS/Guides/Containment/Container_queries)。

- `cqw`
  - : 表示查询容器宽度的百分比。`1cqw` 是查询容器宽度的 1%。例如，如果查询容器的宽度是 `800px`，那么属性上的 `50cqw` 值就是 `400px`。

- `cqh`
  - : 表示查询容器高度的百分比。`1cqh` 是查询容器高度的 1%。例如，如果查询容器的高度是 `300px`，那么属性上的 `10cqh` 值就是 `30px`。

- `cqi`
  - : 表示查询容器行级尺寸的百分比。`1cqi` 是查询容器行级尺寸的 1%。例如，如果查询容器的行级尺寸是 `800px`，那么属性上的 `50cqi` 值就是 `400px`。

- `cqb`
  - : 表示查询容器块级尺寸的百分比。`1cqb` 是查询容器块级尺寸的 1%。例如，如果查询容器的块级尺寸是 `300px`，那么属性上的 `10cqb` 值就是 `30px`。

- `cqmin`
  - : 表示查询容器行级尺寸或块级尺寸中较小值的百分比。`1cqmin` 是查询容器行级尺寸或块级尺寸中较小值的 1%。例如，如果查询容器的行级尺寸是 `800px`，块级尺寸是 `300px`，那么属性上的 `50cqmin` 值就是 `150px`。

- `cqmax`
  - : 表示查询容器行级尺寸或块级尺寸中较大值的百分比。`1cqmax` 是查询容器行级尺寸或块级尺寸中较大值的 1%。例如，如果查询容器的行级尺寸是 `800px`，块级尺寸是 `300px`，那么属性上的 `50cqmax` 值就是 `400px`。

## 绝对长度单位

当输出介质的物理特性已知时，绝对长度单位代表一种物理测量，例如印刷排版。具体做法是将其中一个单位锚定到一个物理单位上，然后再定义与之相对的其他单位。低分辨率设备（如屏幕）与高分辨率设备（如打印机）的锚定方式不同。

对于低分辨率设备，单位 `px` 代表物理*参考像素*；其他单位是相对于它定义的。因此，`1in` 被定义为 `96px`，相当于 `72pt`。这一定义的结果是，在这些设备上，以英寸（`in`）、厘米（`cm`）或毫米（`mm`）描述的尺寸不一定与同名物理单位的尺寸一致。

对于高分辨率设备，英寸（`in`）、厘米（`cm`）和毫米（`mm`）与物理单位相同。因此，`px` 单位是相对于它们定义的（`1in` 的 1/96）。

> [!NOTE]
> 很多用户选择增加{{glossary("user agent", "用户代理")}}的字体大小以提高文本可读性。因为绝对长度是固定值，无法根据用户的设置进行缩放，因此会降低页面友好性，因此在设置字体大小 `font-size` 相关的长度值时，最好优先选择使用相对长度单位，比如 `em` 或 `rem`。

- `px`
  - : 一像素（pixel）。对于普通的屏幕，通常是一个设备像素（点）。对于*打印机*和*高分辨率屏幕*，一个 CSS 像素往往占多个设备像素。一般来说，每英寸的像素的数量保持在 96 左右，`1px` = `1in / 96`。
- `cm`
  - : 一厘米。`1cm` = `96px / 2.54`。
- `mm`
  - : 一毫米。`1mm` = `1cm / 10`。
- `Q`
  - : 四分之一毫米。`1Q` = `1cm / 40`。
- `in`
  - : 一英寸（inch）。`1in` = `2.54cm` = `96px`。
- `pc`
  - : 一派卡（pica）。`1pc` = `12pt` = `1in / 6`。
- `pt`
  - : 一磅（point）。`1pt` = `1in / 72`。

## 插值

当包含动画效果时，动画中 `<length>` 的值是由计算出的值应用{{glossary("interpolation", "插值")}}后得出的浮点实数。插值的速度由动画的[缓动函数](/zh-CN/docs/Web/CSS/Reference/Values/easing-function)决定。

## 示例

### 长度单位的比较

下面的示例为你提供了一个输入框，在框中输入一个 `<length>` 值（比如：`300px`、`50%`、`30vw`），按下 <kbd>Enter</kbd> 或 <kbd>Return</kbd>，一个由你设置宽度的结果条将出现在下方。

这允许你对比不同长度单位的效果。

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label for="length">输入宽度：</label>
    <input type="text" id="length" />
  </div>
  <div class="inner"></div>
</div>
<div class="results"></div>
```

#### CSS

```css
html {
  font-family: sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.outer {
  width: 100%;
  height: 50px;
  background-color: #eee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999;
  box-shadow:
    inset 3px 3px 5px rgb(255 255 255 / 50%),
    inset -3px -3px 5px rgb(0 0 0 / 50%);
}

.result {
  height: 20px;
  box-shadow:
    inset 3px 3px 5px rgb(255 255 255 / 50%),
    inset -3px -3px 5px rgb(0 0 0 / 50%);
  background-color: orange;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.result code {
  position: absolute;
  margin-left: 20px;
}

.results {
  margin-top: 10px;
}

.input-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

label {
  margin: 0 10px 0 20px;
}
```

#### JavaScript

```js
const inputDiv = document.querySelector(".inner");
const inputElem = document.querySelector("input");
const resultsDiv = document.querySelector(".results");

inputElem.addEventListener("change", () => {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement("div");
  result.className = "result";
  result.style.width = inputElem.value;
  const code = document.createElement("code");
  code.textContent = `宽度：${inputElem.value}`;
  result.appendChild(code);
  resultsDiv.appendChild(result);

  inputElem.value = "";
  inputElem.focus();
});
```

#### 结果

{{EmbedLiveSample('长度单位的比较','100%', 700)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 值和单位教程](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS 值和单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units)模块
- [盒模型](/zh-CN/docs/Web/CSS/Guides/Box_model)
