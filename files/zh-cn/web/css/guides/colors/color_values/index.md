---
title: CSS 颜色值
short-title: 颜色值
slug: Web/CSS/Guides/Colors/Color_values
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

要在 CSS 中表示一种颜色，就必须找到一种方法，将“颜色”这一模拟概念转化为计算机可以使用的数字形式。通常的做法是将颜色分解成不同的分量，例如混合不同原色的比例，或是明度与色相。定义明确的颜色模型能确保颜色在任何渲染环境中呈现一致的效果。

色彩模型是一种通过数值表示颜色的数学模型。它描述了如何在特定色彩空间内生成可用颜色。{{glossary("RGB")}} 是首个用于网络的色彩模型。RGB 色彩模型的 `sRGB` 色彩空间——即标准红、绿、蓝色彩空间——于 1996 年为计算机显示器和网页而创立。{{glossary("color space", "色彩空间")}}是将颜色进行分组的系统，确保对任意给定颜色的描述保持一致。若将颜色在两个不同色彩空间之间转换，其在两者中的显示效果应完全相同。

早期显示器在可呈现色彩数量上存在限制，CSS 颜色也受此约束，随着技术进步逐步扩展。现代设备已突破 RGB 限制，我们现在还拥有基于人类视觉感知的新型色彩模型，提供了更广阔的{{glossary("gamut", "色域")}}。如今 CSS 支持多种色彩描述方式，且选项仍在持续扩展。

本指南介绍了不同的 {{cssxref("&lt;color&gt;")}} 值类型。有关每种颜色值类型的详细讨论，请参阅下方提供的参考链接。

## 关键字

web 定义了一组标准颜色名称，允许使用关键字而非数值表示来描述颜色。这种方法虽然更简单，但受限性也更大——可能找不到完全匹配所需颜色的关键字。

颜色关键字包含标准原色与间色（如 `red`、`blue` 或 `orange`）、灰度色阶（从 `black` 到 `white`，含 `darkgray` 和 `lightgrey` 等色调），以及多种混合色，例如 `lightseagreen`、`cornflowerblue` 和 `rebeccapurple`。具名颜色采用 [RGB](/zh-CN/docs/Glossary/RGB) 模型，并关联 sRGB（`srgb`）色彩空间。

共有超过 160 种具名颜色，其中具有特殊意义的包括：[`transparent`](/zh-CN/docs/Web/CSS/Reference/Values/named-color#transparent) 设置透明色值，而 [`currentColor`](/zh-CN/docs/Web/CSS/Reference/Values/color_value#currentcolor_关键字) 则设置 CSS {{cssxref("color")}} 属性的当前值。此外还存在系统颜色（{{cssxref("system-color")}}），例如 `accentcolortext` 和 `buttonface`，这些颜色反映了用户、浏览器或操作系统默认的颜色选择。

所有的颜色关键字是不区分大小写的。参见 {{cssxref("named-color")}} 数据类型参考以了解颜色关键字的更多信息。

## RGB 值

在 CSS 中，通过红、绿、蓝三原色定义 {{glossary("RGB")}} 颜色主要有两种方式——十六进制值和 `rgb()` 函数值。与具名颜色类似，这些方法均采用 [RGB](/zh-CN/docs/Glossary/RGB)模型，并关联 sRGB（`srgb`）色彩空间。但它们能指定的颜色范围更为广泛。

### 十六进制字符串表示法

十六进制字符串表示法用十六进制数字来表示 RGB 颜色的各个分量（红、绿、蓝）。它还可能包括第四个分量：alpha 通道（或透明度）。

十六进制字符串符号中的颜色总是以字符 `"#"` 开头。之后是颜色代码的十六进制数字。字符串不区分大小写。

- `"#rrggbb"`
  - : 指定完全不透明的颜色，其红色分量为十六进制数 `0xrr`，绿色分量为 `0xgg`，蓝色分量为 `0xbb`。
- `"#rrggbbaa"`
  - : 指定一种颜色，其红色分量为十六进制数 `0xrr`，绿色分量为 `0xgg`，蓝色分量为 `0xbb`。Alpha 通道由 `0xaa` 指定；该值越小，颜色就越半透明。
- `"#rgb"`
  - : 指定一种颜色，其红色分量为十六进制数 `0xrr`，绿色分量为 `0xgg`，蓝色分量为 `0xbb`。
- `"#rgba"`
  - : 指定一种颜色，其红色分量为十六进制数 `0xrr`，绿色分量为 `0xgg`，蓝色分量为 `0xbb`。Alpha 通道由 `0xaa` 指定；该值越小，颜色就越半透明。

如上所示，红、绿、蓝三种颜色分量均可采用两位十六进制数表示，其取值范围为 0（`00`）至 255（`FF`）；亦可采用一位十六进制数表示，其取值范围为 0（`0`）至 15（`F`）。

> [!NOTE]
> 上述值前缀的 `0x` 表示十六进制整数常量。十六进制整数可包含数字（`0` - `9`）及字母 `a` – `f` 和 `A` – `F`。字符的大小写不影响其数值。因此：`0xa` = `0xA` = `10`，而 `0xf` = `0xF` = `15`。

这两个十六进制颜色是完全相等的颜色值，它们都代表红色：

```css
color: #ff0000;
color: #f00;
```

所有的分量*必须*使用相同位数的数字来指定。如果使用了单个数位的表示法，则最终的颜色通过使用每个位数两次计算得出；也就是说，`"#D"` 经绘制后会变为 `"#DD"`。

要使得颜色值具有 25% 不透明度，像这样添加 alpha 通道值：

```css
color: #ff000044;
color: #f004;
```

参见 {{cssxref("hex-color")}} 数据类型参考以了解有关颜色的十六进制字符串表示法的更多信息。

#### HTML 颜色输入类型

在许多情况下，你的网站可能需要让用户选择颜色。也许你拥有可定制的用户界面，或正在开发绘图应用。或许你需要让用户为可编辑文本选择字体颜色。又或者你的应用允许用户为文件夹或项目分配颜色。针对此类场景，{{HTMLElement("input")}} 元素的 `"color"` [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/input#type) 属性可渲染一个颜色选择器控件。

此示例允许你选择一个颜色。做出选择后，{{cssxref("border-color")}} 会设置为那个颜色，且值会显示。

```html
<div id="box">
  <label for="colorPicker">边框颜色：</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <output></output>
</div>
```

此 HTML 代码创建了一个包括颜色选择器控件（具有 {{HTMLElement("label")}} 元素创建的标签）和空的 {{HTMLElement("output")}} 元素（将使用 JavaScript 输出颜色的值）的盒子。颜色输入的值总是一个十六进制字符串。

{{EmbedLiveSample("HTML 颜色输入类型", 525, 120)}}

```css hidden
#box {
  width: 500px;
  height: 100px;
  border: 5px solid rgb(245 220 225);
  padding: 4px 6px;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

以下 JavaScript 代码将边框的颜色更新为颜色选择器初始值，然后向 [`<input type="color">`](/zh-CN/docs/Web/HTML/Reference/Elements/input/color) 元素添加两个事件处理器，以响应对其值的修改。

```js
const colorPicker = document.querySelector("#colorPicker");
const box = document.querySelector("#box");
const output = document.querySelector("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener("input", (event) => {
  box.style.borderColor = event.target.value;
});

colorPicker.addEventListener("change", (event) => {
  output.innerText = `${colorPicker.value}`;
});
```

每次元素的值发生修改（也就是每次用户在颜色选择器调整颜色）时，都会派发 {{domxref("Element/input_event", "input")}} 事件。我们通过设定 `<output>` 为选定颜色的字符串值来响应这个事件。

### RGB 函数表示法

RGB（红/绿/蓝）函数表示法与十六进制字符串表示法一样，都是用红、绿、蓝三种分量（以及可选的表示不透明度的 alpha 通道分量）来表示颜色。不过，定义颜色时使用的不是字符串，而是 CSS 函数 {{cssxref("color_value/rgb", "rgb()")}} 。该函数的输入参数包括红色、绿色和蓝色分量的值，以及可选的第四个参数，即 alpha 通道的值。

这些参数的合法值分别是：

- `red`、`green`、`blue`
  - : 每个值都必须是 0 到 255（含）之间的 {{cssxref("&lt;number&gt;")}} 值，或 0% 到 100% 之间的 {{cssxref("&lt;percentage&gt;")}} 值，或关键字 `none`（在这种情况下等效于指定 `0`）。
- `alpha`
  - : alpha 通道以百分比形式指定，范围介于 `0%`（完全透明）与 `100%`（完全不透明）之间，或以数值形式指定，范围介于 `0.0`（等效于 `0%`）与 `1.0`（等效于 `100%`）之间。

例如，50% 不透明的鲜红色可以用 `rgb(255 0 0 / 50%)` 或 `rgb(100% 0 0 / 0.5)` 表示。

参见 {{cssxref("color_value/rgb", "rgb()")}} 颜色函数参考以了解 RGB 函数表示法的更多信息。

## 含有色相分量的颜色函数

包含 {{cssxref("hue")}} 分量的颜色函数——即该颜色模型{{glossary("color wheel", "色轮")}}中的 {{cssxref("angle")}}——包括 `srgb` 颜色函数 `hsl()` 和 `hwb()`、CIElab 的 `lch()` 函数以及 OKLab 的 `oklch()` 颜色函数。这些颜色函数更具直观性，因为色相使我们能够区分或比较红色、橙色、黄色、绿色、蓝色等颜色的差异或相似性。

### HSL 函数表示法

`hsl()` CSS 颜色函数是浏览器支持的首个基于色相的颜色函数。相较于 `rgb()`，`hsl()` 更具直观性——通过调整色相（`h`）、饱和度（`s`）和明度（`l`）值来确定颜色效果，通常比通过红、绿、蓝通道值声明具体颜色更为便捷。此外，HSL 与 Photoshop 中的 HSB（色相、饱和度、亮度）调色板相似，这使得许多人在首次接触时便能立即熟悉其用法。

`hsl()` 和 `hwb()` 这两种 sRGB 颜色函数均采用圆柱模型。色相通过 {{cssxref("angle")}} 在圆形{{glossary("color wheel", "色轮")}}上定义颜色。下图展示了 HSL 颜色柱。饱和度以百分比形式定义颜色在完全灰度与最大色相值之间的分布程度。随着明度值增加，颜色将从最暗过渡至最亮（从黑色到白色）。

![HSL 颜色柱](640px-hsl_color_solid_cylinder.png)

图片由用户 [SharkD](https://commons.wikimedia.org/wiki/User:SharkD) 在 [Wikipedia](https://zh.wikipedia.org/) 上提供，采用 [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) 许可发布。

HSL 颜色的色相（`H`）分量值是从红色开始，依次经过黄色、绿色、青色、蓝色和洋红色（360° 时又回到红色）的一个角度，用于确定基色。该值可以用 CSS 支持的任何 {{cssxref("&lt;angle&gt;")}} 单位指定，包括度（`deg`）、弧度（`rad`）、梯度（`grad`）或转数（`turn`）。色调值用于确定颜色的基调，不能控制颜色的鲜艳或暗淡、明亮或昏暗程度。

饱和度（`S`）参数决定最终颜色中指定色调所占的比例，100% 表示完全饱和，0% 则表示完全无色（灰度）。明度（`L`）参数则在纯黑（`0%`）与纯白（`100%`）之间滑动调节颜色的亮度。还可选择性添加透明度通道，在颜色值前添加斜杠（`/`）即可使颜色透明度低于 100%。

以下是一些 HSL 表示法的颜色示例：

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0 0% 75%);
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th scope="col">HSL 表示法下的颜色</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js hidden
const colors = [
  "hsl(90deg 0% 50%)",
  "hsl(90 100% 50%)",
  "hsl(0.15turn 50% 75%)",
  "hsl(0.15turn 90% 75%)",
  "hsl(0.15turn 90% 50%)",
  "hsl(270deg 90% 50% / 50%)",
];

const tbody = document.querySelector("tbody");
for (const color of colors) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.appendChild(document.createElement("code")).textContent = color;
  const td2 = document.createElement("td");
  td2.style.backgroundColor = color;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
```

{{EmbedLiveSample("HSL_函数表示法", 300, 200)}}

最后一个值为半透明值；它包含可选的透明度值，该值前缀为正斜杠。

> [!NOTE]
> 如果省略了色相的单位，则假定其单位为度（`deg`）。

### HWB 函数表示法

[`hwb()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/hwb) 颜色函数采用与 `hsl()` 相同的色相坐标系，其中 `0deg` 代表红色。但不同于 `hsl()` 使用明度和饱和度，`hwb()` 函数通过白度（`W`）和黑度（`B`）进行定义。该函数同样直观易用——可先选定色相，再混合不同比例的白色或黑色以获得目标颜色。

`W` 和 `B` 的取值范围为 `0%` 至 `100%`（或 `0` 至 `1`）。当 `W` 与 `B` 的总值达到 100%（或 `1`）及以上时，颜色将呈现灰色，效果类似于 `hsl()` 中将 `s` 设为 `0%`。与 `hsl()` 相同，可通过在值前添加斜杠 `/` 添加可选的透明度值。

下面是一些用 HWB 表示法的颜色示例：

```css
/* 这些示例都指定了深浅不一的青绿色。 */
hwb(90 10% 10%)
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(.25turn 0% 40%)

/* 同样的青绿色，这次包含了透明度值 */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

在下面的示例中，我们设置了与 `hsl()` 示例相同的色调，但通过 `hwb()` 函数为每个色调添加白度和黑度，而非饱和度和明度：

```css hidden live-sample___hwb_functional_notation
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hwb(0 75% 25%);
}
```

```html hidden live-sample___hwb_functional_notation
<table>
  <thead>
    <tr>
      <th scope="col">HWB 表示法下的颜色</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```

```js hidden live-sample___hwb_functional_notation
const colors = [
  "hwb(90deg 50% 50%)",
  "hwb(90 0% 0%)",
  "hwb(0.15turn 25% 0%)",
  "hwb(0.15turn 10% 25%)",
  "hwb(1turn 10% 65%)",
  "hwb(270deg 75% 10%)",
];

const tbody = document.querySelector("tbody");
for (const color of colors) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.appendChild(document.createElement("code")).textContent = color;
  const td2 = document.createElement("td");
  td2.style.backgroundColor = color;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
```

{{EmbedLiveSample("hwb_functional_notation", 300, 200)}}

### LCH 和 OkLCh：CIELAB 和 Oklab 色彩空间

虽然 `hsl()` 和 `hwb()` 函数直观易用，但存在重大缺陷。使用这些函数时，所有饱和度为 100% 的色相角度（如 `hsl(<angle> 100% 50%)` 或 `hwb(<angle> 0% 0%)`）都会呈现相同明度，而这与人类视觉及显示器的工作原理相悖。在饱和度为 100% 的蓝色背景（`hsl(240deg 100% 50%)`）上放置白色文字尚可辨识，但同样的文字若置于饱和度为 100% 的黄色背景（`hsl(60deg 100% 50%)`）上，不仅难以阅读，甚至可能伤害用户眼睛。这些色彩函数中的明度值是相对于其他颜色而非人类视觉感知而设定的。实际上，并非所有色相都具有相同的最大饱和度。

若能在不影响文字可读性的前提下，直接调整网站色彩的色相通道，岂不美妙？借助 CIELAB 和 Oklab 色彩空间中的色彩函数，完全可以实现这一目标。

CIELAB 和 Oklab 色彩空间涵盖了人类可见的全部色彩范围。CIE Lab 色彩函数包括 [`lch()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/lch) 和 [`lab()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/lab)。Oklab 颜色函数包含 [`oklch()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/oklch) 和 [`oklab()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/oklab)。这些模型的核心目标在于实现感知均匀性，即色彩空间中任意两点间的给定距离，对观者而言应呈现等同的差异感。Oklab 采用与 CIELAB 相同的模型类型，但通过额外的数值优化步骤构建，因此其数值精度被认为高于 CIELAB。这种优化使得色相在感知上更为均匀。

`lch()` 和 `oklch()` 函数使用明度（`L`）、色度（`C`）和色相（`H`），本节将进一步探讨这些函数。[`lab()` 和 `oklab()`](#lab_和_oklab) 函数的工作原理不同，它们使用明度（`L`）、红/绿度（沿 `a` 轴）和黄/蓝度（沿 `b` 轴）。这些轴被称为直角坐标轴。这些色彩函数的核心优势在于其“明度”采用感知明度——即人眼感知到的色彩亮度，而非相对于其他颜色的相对明度。

与 sRGB 色相函数类似，`lch()` 和 `oklch()` 中的色相（`h`）值可以是数字、角度或关键字 `none`（等效于 `0deg`），代表颜色的 `<hue>` 角度。但不同角度对应的颜色并不相同。特定色相对应的角度值在 sRGB、CIELAB（`lch()` 采用）和 Oklab（`oklch()` 采用）三种色彩空间中存在差异。

以下渐变展示了 sRGB、CIE Lab 和 OKlab 色彩空间中，从 `0deg` 到 `360deg` 每个角度的色相颜色：

```html hidden live-sample___hues
<p>sRGB（<code>hsl()</code> 和 <code>hwb()</code>）</p>
<div id="srgb"></div>
<p>CIE Lab（<code>lch()</code>）</p>
<div id="lch"></div>
<p>OKLab（<code>oklch()</code>）</p>
<div id="oklch"></div>
<p>
  <label><input type="checkbox" />切换灰度</label>
</p>
```

```css hidden live-sample___hues
div:has(~ p input:checked) {
  filter: grayscale(100%);
}
p {
  margin: 0;
}
div {
  height: 50px;
  margin-bottom: 10px;
}
#srgb {
  background: linear-gradient(
    to right,
    hsl(0deg 100% 50%),
    hsl(90deg 100% 50%),
    hsl(180deg 100% 50%),
    hsl(270deg 100% 50%),
    hsl(360deg 100% 50%)
  );
}
#lch {
  background: linear-gradient(
    to right,
    lch(50% 100% 0deg),
    lch(50% 100% 90deg),
    lch(50% 100% 180deg),
    lch(50% 100% 270deg),
    lch(50% 100% 360deg)
  );
}
#oklch {
  background: linear-gradient(
    to right,
    oklch(50% 100% 0deg),
    oklch(50% 100% 90deg),
    oklch(50% 100% 180deg),
    oklch(50% 100% 270deg),
    oklch(50% 100% 360deg)
  );
}
```

{{embedlivesample("hues", '100', '260') }}

你可能注意到，后者色调渐变在整个色谱中的亮度分布比 sRGB 渐变更为均匀。勾选上方示例中的复选框，将色调渐变转换为灰度模式，即可更清晰地呈现这一差异。

另请注意 CIE Lab 中蓝色值的分布范围比其他两种更长。这正是 `lch()` 与 `oklch()` 的差异所在。`lch()` 的蓝色分布异常源于一个 bug——该 bug 会使色相值在 `270deg` 至 `330deg` 区间内发生色度与明度偏移。此问题已在 oklab 色彩空间中解决，故 `oklch()` 色彩标记法得以修正。

如上所述，`lch()` 和 `oklch()` 中的色相（`H`）可以是 `<angle>`、`number` 或关键字 `none`。`lightness` 参数可为 {{cssxref("percentage")}}，或在 `lch()` 中为 `0` 至 `100` 之间的数值，在 `oklch()` 中为 `0` 至 `1` 之间的数值。其中 `0` 或 `0%` 表示完全缺乏明度，即黑色。

`C` 参数可为 `<number>`、`<percentage>` 或关键字 `none`（等效于 `0%`），表示颜色的色度（即“色彩饱和度”）。该属性类似于 `hsl()` 颜色函数中的 `S` 饱和度值。数值 `0` 表示完全缺乏色度或饱和度，根据明度值不同，会呈现介于白与黑之间的灰色。数值理论上无上限，其中 `100%` 在 `lch()` 中等于 `150`，在 `oklch()` 中等于 `0.4`。

与其他颜色函数类似，这里也提供了一个可选的 alpha 透明度值，该值前需加斜杠（`/`）。

下面的示例展示了在 `lch()` 和 `oklch()` 函数中改变明度值的效果。

```css hidden live-sample___lch-colors
/* 不同深浅度的粉色 */
.container {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
}

.dark-text {
  color: lch(1% 40 0deg);
}

.container div {
  border-radius: 8px;
  padding: 8px 4px;
}
```

```html hidden live-sample___lch-colors
<div class="container"></div>
```

```js hidden live-sample___lch-colors
const container = document.querySelector(".container");
for (let l = 0; l <= 100; l += 10) {
  const div = document.createElement("div");
  const usedL = l === 0 ? 1 : l === 100 ? 99 : l;
  div.textContent = div.style.backgroundColor = `lch(${usedL}% 40 0)`;
  if (usedL >= 80) div.classList.add("dark-text");
  container.appendChild(div);
}
container.appendChild(document.createElement("div"));
for (let l = 0; l <= 100; l += 10) {
  const div = document.createElement("div");
  const usedL = l === 0 ? 1 : l === 100 ? 99 : l;
  div.textContent = div.style.backgroundColor = `oklch(${usedL}% 0.12 0)`;
  if (usedL >= 80) div.classList.add("dark-text");
  container.appendChild(div);
}
```

{{embedlivesample("lch-colors", '100', '200') }}

## Lab 和 OKLab

[`lab()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/lab) 函数表示法用于在 CIE L\*a\*b\* 色彩空间中表达给定颜色。`oklab()` 函数则定义 OKLab 色彩空间中的颜色。这些函数通过指定颜色的明度（`L`）、红绿轴值（`a`）、蓝黄轴值（`b`）以及可选的 alpha 透明度值，完整呈现人类可见的色彩范围。

与 `lch()` 和 `oklch()` 类似，`lightness` 可以是：

- 一个{{cssxref("percentage")}}值，其中 `0%` 表示纯黑色，`100%` 表示纯白色。
- `lab()` 取值范围为 `0` 至 `100`，`oklab()` 取值范围为 `0` 至 `1`，其中 `0` 表示纯黑，`1`/`100` 表示纯白。

`a` 值在 `lab()` 中为 `-125` 至 `125` 之间的 `<number>`，在 `oklab()` 中为 `-0.4` 至 `0.4` 之间的 `<number>`，或为 `-100%` 至 `100%` 之间的 `<percentage>`，亦可使用关键字 `none`（此处等效于 `0%`）。该值指定颜色在色彩空间中沿 a 轴的偏移量，决定了该颜色偏向绿色（向 -100% 移动）或偏向红色（向 +100% 移动）的程度。

请注意这些值为有符号类型（允许正负值），且理论上无上限，这意味着可以设置超出 ±125 或 ±0.4（±100%）范围的值。实际应用中，数值分别不能超过 ±160 或 ±0.5。

`b` 值同样受相同约束。它指定颜色在色彩空间中沿 b 轴的距离，该轴定义了颜色偏向蓝色（向 -100% 移动）或偏向黄色（向 +100% 移动）的程度。

以下示例通过 `lab()` 函数演示改变 `a` 轴的效果，并通过 `oklab()` 函数演示改变 `b` 轴的效果。

```html hidden live-sample___lab-colors
<div class="container"></div>
```

```css hidden live-sample___lab-colors
/* 不同深浅度的粉色 */
.container {
  display: grid;
  font-family: sans-serif;
  font-size: 14px;
  color: white;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
}
.container div {
  border-radius: 8px;
  padding: 8px 4px;
}
```

```js hidden live-sample___lab-colors
const container = document.querySelector(".container");

for (let a = -100; a <= 100; a += 25) {
  const div = document.createElement("div");
  div.textContent = div.style.backgroundColor = `lab(50% ${a}% 0)`;
  container.appendChild(div);
}
container.appendChild(document.createElement("div"));
for (let b = -4; b <= 4; b++) {
  const div = document.createElement("div");
  div.textContent = div.style.backgroundColor = `oklab(50% 0 ${b / 10})`;
  container.appendChild(div);
}
```

{{embedlivesample("lab-colors", '100', '150') }}

## 其他颜色表示法

### `color()` 函数

如果想在定义颜色时明确控制色彩空间，可以使用 [`color()`](/zh-CN/docs/Web/CSS/Reference/Values/color_value/color) 函数。这对使用更宽[色域](/zh-CN/docs/Glossary/Gamut)的高清设备描述颜色非常有用。例如，如果我们想显示超出 sRGB 色域的 `display-p3 0 0 1` 颜色，可以使用 [`@media`](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/color-gamut) at 规则来检测客户端硬件是否支持此范围内的颜色：

```css
.vibrant {
  background-color: color(srgb 0 0 1);
}

@media (color-gamut: p3) {
  .vibrant {
    background-color: color(display-p3 0 0 1);
    /* 等效于色域之外的 rgb(-27, 55, 153) */
  }
}
```

理解 `color()` 函数对于理解后续讨论的相对颜色至关重要。前文提及的旧版 sRGB 颜色表示法——`hsl()`、`hwb()` 和 `rgb()`——无法完整呈现可见光谱，而 `color()` 函数支持更广阔的色域。因此，当使用旧式函数类型定义相对颜色时，通过查询 {{domxref("HTMLElement.style")}} 属性或调用 {{domxref("CSSStyleDeclaration.getPropertyValue()")}} 方法获取的输出颜色值将呈现为 `color(srgb ...)` 格式。

要查看将 `rgb()`、`hsl()`、`hwb()` 及其他[颜色格式](/zh-CN/docs/Web/CSS/Reference/Values/color_value)转换的示例，请访问我们的[颜色格式转换工具](/zh-CN/docs/Web/CSS/Guides/Colors/Color_format_converter)。

### 相对颜色

上述每种颜色函数均可用于定义[**相对颜色**](/zh-CN/docs/Web/CSS/Guides/Colors/Using_relative_colors)，该功能允许将 {{cssxref("&lt;color&gt;")}} 值相对于其他现有颜色进行定义，而非每次都从头开始定义颜色值。此强大功能可创建现有颜色的补色——例如原始颜色的浅色、深色、饱和色、半透明色或反转色变体。相对颜色为创建调色板和定义颜色调整提供了高效机制。请参阅各颜色函数页面以了解其相对语法详情。

如前所述，当使用 `rgb()`、`hsl()` 或 `hwb()` 输出相对颜色时，输出结果将以 `srgb` 色彩空间的 `color()` 函数形式呈现。

### color-mix() 函数

{{cssxref("color_value/color-mix", "color-mix()")}} 函数接受两个任意上述语法形式的颜色值，可选地为每种颜色指定比例百分值，并返回在指定颜色空间中按指定比例混合后的结果。

### light-dark() 函数

{{cssxref("color_value/light-dark", "light-dark()")}} 函数允许为某个属性分别指定适用于浅色和深色配色的两个颜色值。实际应用哪个值取决于开发者是否设置了浅色配色方案，或用户是否请求了浅色配色方案。此为快捷函数，可实现与媒体特征查询 {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} 相同的效果，但代码更简洁。

## 参见

- [使用 CSS 为 HTML 元素添加颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Applying_color)
- [恰当使用颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [使用相对颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [理解颜色与亮度](/zh-CN/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1：色彩对比度](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS 颜色模块](/zh-CN/docs/Web/CSS/Guides/Colors)
