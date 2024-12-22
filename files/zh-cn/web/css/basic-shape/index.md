---
title: <basic-shape>
slug: Web/CSS/basic-shape
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

**`<basic-shape>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)表示一种用于 {{cssxref("clip-path")}}、{{cssxref("shape-outside")}} 和 {{cssxref("offset-path")}} 属性的形状。

{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}

## 语法

`<basic-shape>` 数据类型用于创建基本形状，包括通过[容器 inset](#通过容器_inset_定义矩形的语法)、通过[坐标距离](#通过距离定义矩形的语法)，或通过[设定尺寸](#具有尺寸的矩形语法)、[圆形](#圆形语法)、[椭圆形](#椭圆形语法)、[多边形](#多边形语法)、[路径](#路径语法)以及[作者创建的形状](#形状语法)。这些基本形状是使用一个 `<basic_shape>` CSS 函数来定义的，每个值都需要一个符合该形状函数特定语法的参数。

### 公共参数

一些基本形状函数的语法中公共的参数包括：

- `round <'border-radius'>`

  - : 为[通过容器 inset 定义的矩形](#通过容器_inset_定义矩形的语法)、[通过距离定义的矩形](#通过距离定义矩形的语法)以及[具有尺寸的矩形](#具有尺寸的矩形语法)定义圆角，使用与 CSS [`border-radius`](/zh-CN/docs/Web/CSS/border-radius) 缩写属性相同的语法。

- `<shape-radius>`

  - : 定义[圆形](#圆形语法)或[椭圆形](#椭圆形语法)的半径。有效值包括 {{cssxref("length")}}、{{cssxref("percentage")}}、`closest-side`（默认值）和 `farthest-side`。负值无效。

    `closest-side` 关键字值使用从形状中心到参考框最近边的长度来创建半径长度。`farthest-side` 关键字值使用从形状中心到参考框最远边的长度。

- `<position>`

  - : 定义[圆形](#圆形语法)或[椭圆形](#椭圆形语法)的中心 [`<position>`](/zh-CN/docs/Web/CSS/position_value)。如果省略，则默认为 `center`。

- `<fill-rule>`

  - : 设置 {{SVGAttr("fill-rule")}} 用于确定由基本形状[多边形](#多边形语法)、[路径](#路径语法)和[形状](#形状语法)定义的形状内部应如何填充。可能的值为 `nonzero`（默认值）和 `evenodd`。

    > [!NOTE]
    > 在 {{cssxref("offset-path")}} 中不支持 `<fill-rule>`，使用它会使属性无效。

### 通过容器 inset 定义矩形的语法

{{cssxref("basic-shape/inset","inset()")}} 函数创建一个内嵌矩形，其大小由容器四边向内偏移的距离定义，并且可以选择是否带有圆角。

```plain
inset( <length-percentage>{1,4} [ round <`border-radius`> ]? )
```

当提供全部四个参数时，它们分别代表从参考框向内偏移的顶部、右侧、底部和左侧距离，这些距离定义了内嵌矩形的边缘位置。这些参数遵循 {{cssxref("margin")}} 缩写语法的规则，允许你使用一个、两个、三个或四个值来设置所有四个 inset。

如果某个尺寸的两个 inset 之和超过了该尺寸的 100%，则这两个值会按比例减小，使它们的和等于 100%。例如，值 `inset(90% 10% 60% 10%)` 中，顶部 inset 为 `90%`，底部 inset 为 `60%`。这些值会按比例减小为 `inset(60% 10% 40% 10%)`。像这样的形状，如果不包围任何区域并且没有 {{cssxref("shape-margin")}}，则不会影响换行。

### 通过距离定义矩形的语法

{{cssxref("basic-shape/rect","rect()")}} 函数使用距参考框顶部和左侧边缘的指定距离来定义一个矩形，同时可选择是否带有圆角。

```plain
rect( [ <length-percentage> | auto ]{4} [ round <`border-radius`> ]? )
```

在使用 `rect()` 函数时，你无需定义矩形的宽度和高度。相反，你通过指定四个值来创建矩形，其尺寸由参考框的大小和这四个偏移值共同决定。每个值可以是 {{cssxref("length")}}、{{cssxref("percentage")}} 或关键字 `auto`。对于顶部和左侧的值，`auto` 关键字被解释为 `0%`；对于底部和右侧的值，`auto` 被解释为 `100%`。

### 具有尺寸的矩形语法

{{cssxref("basic-shape/xywh","xywh()")}} 函数定义了一个矩形，该矩形位于距参考框左边缘（`x`）和上边缘（`y`）的指定距离处，并按照指定的矩形宽度（`w`）和高度（`h`）进行尺寸设置，顺序依此排列，同时可选择是否带有圆角。

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <`border-radius`> ]? )
```

### 圆形语法

{{cssxref("basic-shape/circle","circle()")}} 函数使用一个半径和一个位置定义一个圆形。

```plain
circle( <shape-radius>? [ at <position> ]? )
```

### 椭圆形语法

{{cssxref("basic-shape/ellipse","ellipse()")}} 函数使用两个半径和一个位置定义一个椭圆形。

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

`<shape-radius>` 参数依次代表椭圆的 x 轴半径 _rx_ 和 y 轴半径 _ry_。这些值可以指定为 {{cssxref("length")}} 或 {{cssxref("percentage")}}。此处的百分比值是根据参考框的使用宽度（对于 rx 值）和使用高度（对于 ry 值）来确定的。如果只提供了一个半径值，则 `ellipse()` 形状函数是无效的。如果没有提供任何值，则默认使用 `50% 50%`。

### 多边形语法

{{cssxref("basic-shape/polygon","polygon()")}} 函数使用 SVG 的 {{SVGAttr("fill-rule")}} 和一组坐标来定义一个多边形。

```plain
polygon( <`fill-rule`>?, [ <length-percentage> <length-percentage> ]# )
```

该函数接受一个由逗号分隔的坐标对列表，每个坐标对由两个空格分隔的 `<length-percentage>` 值组成，分别作为 _xi_ 和 _yi_ 对。这些值表示多边形在位置 _i_（即两条线相交的顶点）处的 x 轴和 y 轴坐标。

### 路径语法

{{cssxref("basic-shape/path","path()")}} 函数使用 SVG 的 {{SVGAttr("fill-rule")}} 和 SVG [路径定义](/zh-CN/docs/Web/SVG/Attribute/d)来定义一个形状。

```plain
path( <`fill-rule`>?, ]? <string> )
```

必需的 `<string>` 是一个作为引用字符串的 [SVG 路径](/zh-CN/docs/Web/SVG/Attribute/d)。`path()` 函数不是有效的 {{cssxref("shape-outside")}} 属性值。

### 形状语法

{{cssxref("basic-shape/shape","shape()")}} 函数使用一个初始起点和一系列形状命令来定义一个形状。

```plain
shape( <fill-rule>? from <coordinate-pair>, <shape-command># )
```

`from <coordinate-pair>` 参数表示第一个形状命令的起点，而 `<shape-command>` 则定义了一个或多个形状命令，这些命令类似于 [SVG 路径命令](/zh-CN/docs/Web/SVG/Attribute/d#path_commands)。`shape()` 函数不是有效的 {{cssxref("shape-outside")}} 属性值。

## 描述

在创建形状时，参考框由使用 `<basic-shape>` 值的属性定义。形状的坐标系默认以元素的外边距框的左上角为原点，x 轴向右延伸，y 轴向下延伸。所有以百分比表示的长度都是根据参考框的尺寸来确定的。

默认的参考框是 [`margin-box`](/zh-CN/docs/Web/CSS/box-edge#margin-box)，如下图所示。该图展示了一个使用 `shape-outside: circle(50%)` 创建的圆形，在浏览器开发者工具中高亮可见的盒模型的不同部分。此处的形状是相对于外边距框来定义的。

![一张图片，展示了使用 Firefox 开发者工具的形状检查器检查的圆形。盒模型的不同部分已被高亮显示。](shapes-reference-box.png)

### 基础形状的计算值

在 `<basic-shape>` 函数中的值按照指定方式计算，考虑以下附加因素：

- 对于任何省略值，将使用其默认值。
- `circle()` 或 `ellipse()` 中的 {{cssxref("position_value", "&lt;position&gt;")}} 值计算为从参考框左上角开始的一对偏移量：第一个偏移量是水平方向的，第二个偏移量是垂直方向的。每个偏移量都被指定为 {{cssxref("length-percentage")}} 值。
- `inset()` 中的 [`<border-radius>`](/zh-CN/docs/Web/CSS/border-radius) 值被扩展为一个包含八个值的列表，每个值要么是 {{cssxref("length")}}，要么是 {{cssxref("percentage")}}。
- {{cssxref("basic-shape/inset","inset()")}}、{{cssxref("basic-shape/rect","rect()")}} 和 {{cssxref("basic-shape/xywh","xywh()")}} 函数计算为等效的 `inset()` 函数。

### 基本形状的插值

在两个 `<basic-shape>` 函数之间进行动画处理时，遵循以下{{Glossary("interpolation", "插值")}}规则。每个 `<basic-shape>` 函数的参数值构成一个列表。为了在两个形状之间进行插值，这两个形状必须使用相同的参考框，并且两个 `<basic-shape>` 列表中的值的数量和类型必须匹配。

在两个 `<basic-shape>` 函数的列表中，每个值都尽可能的基于其计算值进行插值，计算值是 {{cssxref("number")}}、{{cssxref("length")}}、{{cssxref("percentage")}}、{{cssxref("angle")}} 或 {{cssxref("calc", "calc()")}}。如果值不是这些数据类型之一，但在两个进行插值的基本形状函数中相同，例如 `nonzero`，则仍然可以进行插值。

- **两个形状均为 `ellipse()` 类型或 `circle()` 类型**：如果它们的半径指定为 {{cssxref("length")}} 或 {{cssxref("percentage")}}（而不是 `closest-side` 或 `farthest-side` 等关键字），则对每个相应的值应用插值。

- **两个形状均为 `inset()` 类型**：对每个相应的值应用插值。

- **两个形状均为 `polygon()` 类型**：如果它们使用相同的 `<fill-rule>` 并且具有相同数量的逗号分隔的坐标对，则对每个相应的值应用插值。

- **两个形状均为 `path()` 类型**：如果两个形状中的路径字符串匹配[路径数据命令](/zh-CN/docs/Web/SVG/Attribute/d#path_commands)的数量、类型和顺序，则将每个参数作为 {{cssxref("&lt;number&gt;")}} 应用插值。

- **两个形状均为 `shape()` 类型**：如果它们具有相同的命令关键字并且使用相同的 `<by-to>` 关键字，则对每个相应的值应用插值。如果 `shape()` 用于 {{cssxref("clip-path")}} 属性，则当它们还具有相同的 `<fill-rule>` 时，对这两个形状进行插值。

  - 如果它们使用 `<curve-command>` 或 `<smooth-command>`，则控制点的数量必须匹配才能进行插值。
  - 如果它们使用不同 `<arc-sweep>` 方向的 `<arc-command>`，则插值结果按顺时针方向（`cw`）进行。如果它们使用不同的 `<arc-size>` 关键字，则使用 `large` 值对大小进行插值。

- **一个形状为 `path()` 类型，另一个为 `shape()` 类型**：如果路径数据命令的列表在数量和顺序上相同，则对每个相应的值应用插值。插值后的形状是一个 `shape()` 函数，保持相同的路径数据命令列表。

在其他所有情况下，不进行插值，动画是离散的。

## 示例

### 动画多边形

在这个示例中，我们使用了[@keyframes](/zh-CN/docs/Web/CSS/@keyframes) at 规则为两个多边形之间的裁剪路径创建动画效果。请注意，这两个多边形必须具有相同数量的顶点，这是此类动画能够正常工作的必要条件。

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(
    50% 0%,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0% 50%,
    40% 40%
  );
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(
      50% 0%,
      60% 40%,
      100% 50%,
      60% 60%,
      50% 100%,
      40% 60%,
      0% 50%,
      40% 40%
    );
  }

  to {
    clip-path: polygon(
      50% 30%,
      100% 0%,
      70% 50%,
      100% 100%,
      50% 70%,
      0% 100%,
      30% 50%,
      0% 0%
    );
  }
}
```

#### 结果

{{EmbedLiveSample('动画多边形', '340', '340')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用此数据类型的属性：{{cssxref("clip-path")}}、{{cssxref("offset-path")}}、{{cssxref("shape-outside")}}。
- [CSS 形状](/zh-CN/docs/Web/CSS/CSS_shapes)模块
- [CSS 形状概览](/zh-CN/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [在 CSS 中编辑形状路径——Firefox 开发者工具](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
