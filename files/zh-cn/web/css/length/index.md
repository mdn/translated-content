---
title: <length>
slug: Web/CSS/length
---

{{CSSRef}}

长度 **`<length>`** 是用于表示距离尺寸的 [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)。许多 CSS 属性会用到长度，比如 {{Cssxref("width")}}、{{Cssxref("margin")}}、{{Cssxref("padding")}}、{{Cssxref("font-size")}}、{{Cssxref("border-width")}} 和 {{Cssxref("text-shadow")}}。

> **备注：** 虽然 {{cssxref("&lt;percentage&gt;")}} 值也是 CSS 维度，并且可以在接受 `<length>` 值的某些相同属性中使用，但它们本身不是 `<length>` 值。具体请参阅{{cssxref("&lt;length-percentage&gt;")}}。

## 语法

`<length>` 数据类型由一个 {{cssxref("&lt;number&gt;")}} 和一个长度单位构成。与所有 CSS 维度一样，单位的字面值与数字之间没有空格。数字为 `0` 时，长度单位是可选的。

> 有些属性支持使用负数的长度值，而有些不支持

### 单位

#### 相对长度单位

相对长度代表着以其他距离为单位的一种尺寸。这个单位可以是指定字符的大小，[行高](/zh-CN/docs/Web/CSS/line-height)，或者是 {{glossary("viewport")}} 的大小。

##### 字体相对长度

字体的相对长度指的是根据一个特定字符的大小或当前字符所在元素的父元素所定义的字符大小来定义长度值。

> **备注：** 这些相对单位，尤其是 em 和 rem, 经常被用于满足即使用户更改字体大小，也可以保持页面的垂直阅读节奏可拓展布局中

- `cap` {{experimental_inline}}
  - : 表示元素字体 {{Cssxref("font")}} 的“上限高度”（cap height，大写字母的标称高度（nominal height））。
- `ch`
  - : 这一单位代表元素所用字体 {{Cssxref("font")}} 中“0”这一字形的宽度（"0"，Unicode 字符 U+0030），更准确地说，是“0”这一字形的预测尺寸（advance measure）。
    如果无法确定“0”字形的大小，则必须假定其宽为 `0.5em`，高为 `1em`。
- `em`
  - : 相对长度单位，这个单位表示元素的 {{Cssxref("font-size")}} 的计算值。如果用在{{ Cssxref("font-size") }} 属性本身，它则表示元素*继承*的 `font-size` 值。
- `ex`
  - : 这个单位表示元素{{Cssxref("font")}}的 [x-height](http://en.wikipedia.org/wiki/X-height) 。在含有“X”字母的字体中，它是该字体的小写字母的高度；对于很多字体来说，`1ex ≈ 0.5em`。
- `ic` {{experimental_inline}}
  - : 等于在用于渲染的字体中找到的“水”（CJK 表意文字 "水"，U + 6C34）字形的使用预先测量（used advance measure）。
- `lh` {{experimental_inline}}
  - : 等于使用它的元素的 {{Cssxref("line-height")}} 属性的计算值，转换为绝对长度。
- `rem`
  - : 这个单位代表根元素（通常为{{HTMLElement("html")}} 元素）的 {{Cssxref("font-size")}} 大小。当用在根元素的 {{Cssxref("font-size")}} 上面时，它代表了它的初始值。
- `rlh` {{experimental_inline}}
  - : 等于根元素行高 {{Cssxref("line-height")}} 的计算值。当用于设置根元素的行高 {{Cssxref("line-height")}} 或是字体大小 {{Cssxref("font-size")}} 时，该 rlh 指的是根元素行高 {{Cssxref("line-height")}} 或字体大小 {{Cssxref("font-size")}} 的初始值。

##### 视口比例的长度

视口百分比长度定义相对于 {{glossary("viewport")}} 的大小的 `<length>` 值，即文档的可见部分。视口长度在 {{cssxref("@page")}} 声明块中无效。

- `vh`
  - : 视口的初始[包含块](/zh-CN/docs/Web/CSS/All_About_The_Containing_Block)的高度的 1%。
- `vw`
  - : 视口的初始[包含块](/zh-CN/docs/Web/CSS/All_About_The_Containing_Block)的宽度的 1%。
- `vi` {{experimental_inline}}
  - : 等于初始[包含块](/zh-CN/docs/Web/CSS/All_About_The_Containing_Block)大小的 1%，在根元素的[行内轴](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values#行向尺度)方向上。
- `vb` {{experimental_inline}}
  - : 等于初始[包含块](/zh-CN/docs/Web/CSS/All_About_The_Containing_Block)大小的 1%，在根元素的[区块轴](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values#块向尺度)方向上。
- `vmin`
  - : 视口高度 `vw` 和宽度 `vh` 两者之间的最小值。
- `vmax`
  - : 视口高度 `vw` 和宽度 `vh` 两者之间的最大值。

#### 绝对长度单位

当输出介质的物理性质已知时，如用于打印布局，绝对长度单位代表一个物理度量单位。这是通过：将一个单元锚定到一个物理单元，并将其定义为相对于它的另一个，来实现的。对于低分辨率的设备（如屏幕），高分辨率设备（如打印机），该锚定是不同的。

对于低 dpi 设备，单位 px 表示物理参考像素;其他单位是相对于它定义的。因此，1 in 定义为 96px，等于 72pt。此定义的后果是，在此类设备上，以英寸（in）、厘米（cm）或 毫米（mm）表示的尺寸不需要与同名的物理单位的大小相匹配。

对于高 dpi 设备，英寸（in）、厘米（cm）和毫米（mm）与物理设备相同。因此，px 单位是相对于它们定义的（1/96 of 1 inch）。

> **备注：** 很多用户选择增加用户代理 {{glossary("user agent")}} 的字体大小以提高文本可读性。因为绝对长度是固定值，无法根据用户的设置进行缩放，因此会降低页面友好性，因此在设置字体大小 `font-size` 相关的长度值时，最好优先选择使用相对长度单位，比如 `em` 或 `rem`。
>
> **译者注：** 一些浏览器还支持设置最低字体大小。常见的最低字体大小限制为 9px 到 12px，

- `px`
  - : 一像素（pixel）。对于普通的屏幕，通常是一个设备像素（点）。
    对于*打印机*和*高分辨率屏幕*，一个 CSS 像素往往占多个设备像素。一般来说，每英寸的像素的数量保持在 96 左右， `1px` = `1in` 的 96 分之一。
- `cm`
  - : 一厘米。 `1cm = 96px / 2.54`。
- `mm`
  - : 一毫米。 `1mm = 1/10 * 1cm`。
- `Q` {{experimental_inline}}
  - : 四分之一毫米。`1Q = 1/40 * 1cm`。
- `in`
  - : 一英寸。`1in = 2.54cm = 96px`。
- `pc`
  - : 一**十二点活字**（pica），六分之一英寸。 `1pc = 12pt = 1/6 * 1in`。
- `pt`
  - : 一磅（point），72 分之一英寸。`1pt = 1/12 * 1pc = 1/72 * 1in`。
- `mozmm` {{non-standard_inline}}, 在 Firefox 59 中被移除
  - : 一个实验单位，无论显示器的尺寸或分辨率如何，都会尝试在一毫米处进行渲染。很少会用到，但可能在移动设备上特别有用。

## 插值

当包含动画效果时，动画中`<length>`的值是由计算出的值使用插值法得出的浮点实数。插值的速度由动画的[定时函数](/zh-CN/docs/Web/CSS/easing-function)决定。

## 示例

### 长度单位的比较

下面的示例为你提供了一个输入框，在框中输入一个`<length>`值（比如：`300px`, `50%`, `30vw`），按下<kbd>Return</kbd>，一个由你设置宽度的结果条将出现在下方。

这允许你对比不同长度单位的效果。

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label>Enter width:</label>
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
    inset 3px 3px 5px rgba(255, 255, 255, 0.5),
    inset -3px -3px 5px rgba(0, 0, 0, 0.5);
}

.result {
  height: 20px;
  background-color: #999;
  box-shadow:
    inset 3px 3px 5px rgba(255, 255, 255, 0.5),
    inset -3px -3px 5px rgba(0, 0, 0, 0.5);
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
  result.innerHTML = `<code>width: ${inputElem.value}</code>`;
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

- [CSS 属性值与单位教程](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
- [CSS 属性值与单位参考](/zh-CN/docs/Web/CSS/CSS_Values_and_Units)
- [框盒模型](/zh-CN/docs/Web/CSS/CSS_box_model)
