---
title: shape()
slug: Web/CSS/Reference/Values/basic-shape/shape
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`shape()`** [CSS 函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)用于定义 {{cssxref("clip-path")}} 和 {{cssxref("offset-path")}} 属性的形状。它结合了一个初始起点和一系列定义形状路径的形状命令。`shape()` 函数是 {{cssxref("&lt;basic-shape&gt;")}} 数据类型的成员。

## 语法

```css
/* <fill-rule> */
clip-path: shape(nonzero from 0 0, line to 10px 10px);

/* <move-command>、<line-command> 和 close */
offset-path: shape(from 10px 10px, move by 10px 5px, line by 20px 40%, close);

/* <hvline-command> */
offset-path: shape(from 10px 10px, hline by 50px, vline to 5rem);

/* <curve-command> */
offset-path: shape(from 10px 10px, curve to 80px 80px via 160px 1px 20% 16px);

/* <smooth-command> */
offset-path: shape(from 10px 10px, smooth to 100px 50pt);

/* <arc-command> */
offset-path: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* 使用 CSS 数学函数 */
offset-path: shape(
  from 5px -5%,
  hline to 50px,
  vline by calc(0% + 160px),
  hline by 70.5px,
  close,
  vline by 60px
);

clip-path: shape(
  nonzero from 10px 10px,
  curve to 60px 20% via 40px 0,
  smooth to 90px 0,
  curve by -20px 60% via 10% 40px 20% 20px,
  smooth by -40% -10px via -10px 70px
);
```

### 参数

- [`<fill-rule>`](/zh-CN/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : 指定了如何填充形状的重叠区域。可能的取值包括：
    - `nonzero`：如果从某点绘制的射线穿过的左到右路径段多于右到左路径段，即导致非零计数，则该点被视为在形状内部。当省略 `<fill-rule>` 时，这是默认值。

    - `evenodd`：如果从某点绘制的射线穿过的路径段数量为奇数，则该点被视为在形状内部。这意味着每当射线进入形状时，它都没有相等数量的退出，表明缺少对应的退出而具有奇数个条目。

    > [!WARNING]
    > `<fill-rule>` 不受 {{cssxref("offset-path")}} 支持，使用它会使该属性无效。

- `from <coordinate-pair>`
  - : 将第一个 `<shape-command>` 的起始点定义为一对坐标，这些坐标是从[参考盒子](/zh-CN/docs/Web/CSS/Guides/Shapes/Using_shape-outside#参考盒子)的左上角测量得到的。这些坐标被指定为用空格分隔的 `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} 值，分别表示左偏移和上偏移。百分比值相对于元素的参考框的宽度和高度计算。在此参数后添加逗号。

- `<shape-command>`
  - : 指定一个或多个逗号分隔的命令列表，用于定义形状，其语法类似于 [SVG 路径命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#路径命令)。命令包括 `<move-command>`、`<line-command>`、`<hv-line-command>`、`<curve-command>`、`<smooth-command>`、`<arc-command>` 和 `close`。每个命令的起始点是前一个命令的结束点，形状的第一个点由 [`from <coordinate-pair>`](#from_coordinate-pair) 参数定义。

    大多数形状命令的语法是一个关键字，提供一个指令，如 `move` 或 `line`，后跟 `by` 或 `to` 关键字，以及一组坐标。

    `by`：表示 `<coordinate-pair>` 相对于命令的起始点的位置（“相对”值）。

    `to`：表示 `<coordinate-pair>` 相对于参考盒子的左上角的位置（“绝对”值）。

    > [!NOTE]
    > 如果 `<coordinate-pair>` 中的坐标以百分比形式指定，则该值相对于参考框的宽度或高度进行计算。

    可以指定 `<move-command>`、`<line-command>`、`<hv-line-command>`、`<curve-command>`、`<smooth-command>`、`<arc-command>` 和 `close` 作为 `<shape-command>`。

    `<move-command>`：指定为 `move [by | to] <coordinate-pair>`。此命令将 [MoveTo 路径命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#moveto_路径命令)添加到形状命令列表中。它不绘制任何内容。相反，它指定了下一个命令的起始位置。`by` 或 `to` 关键字分别指定 `<coordinate-pair>` 点是“相对”还是“绝对”。如果 `<move-command>` 跟随 `close` 命令，则它标识了下一个形状或子路径的起始点。

    `<line-command>`：指定为 `line [by | to] <coordinate-pair>`。此命令将 [LineTo 路径命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#lineto_路径命令)添加到形状命令列表中。它从命令的起始点直线绘制到其结束点。`by` 或 `to` 关键字指定由 `<coordinate-pair>` 分别指定的结束点是“相对”还是“绝对”。

    `<hv-line-command>`：指定为 `[hline | vline] [by | to] <length-percentage>`。此命令将水平（`hline`）或垂直（`vline`）[LineTo 命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#lineto_路径命令)添加到形状命令列表中。使用 `hline`，从命令的起始点绘制水平线到由 `<length-percentage>` 定义的 `x` 位置的 `to` 或 `by`。使用 `vline`，从命令的起始点绘制垂直线到由 `<length-percentage>` 定义的 `y` 位置的 `to` 或 `by`。`by` 或 `to` 关键字分别确定了“相对”或“绝对”结束点。此命令相当于 `<line-command>`，其中一个坐标值由单个 `<length-percentage>` 设置，另一个坐标值与命令开始时的保持一致。

    `<curve-command>`：指定为 `curve [by | to] <coordinate-pair> with <coordinate-pair> [/ <coordinate-pair>]`。此命令将一个[贝塞尔曲线命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#三次贝塞尔曲线)添加到形状命令列表中。`by` 或 `to` 关键字确定由第一个 `<coordinate-pair>` 指定的曲线的结束点是“相对”还是“绝对”。`with` 关键字指定贝塞尔曲线的控制点。
    - 如果只提供一个 `<coordinate-pair>`，该命令会绘制一条[二次贝塞尔曲线](/zh-CN/docs/Web/SVG/Reference/Attribute/d#二次贝塞尔曲线)，它由三个点（起点、控制点和终点）定义。
    - 如果提供两个 `<coordinate-pair>` 值，该命令会绘制一条三次贝塞尔曲线，它由四个点（起点、两个控制点和终点）定义。

    `<smooth-command>`：指定为 `smooth [by | to] <coordinate-pair> [with <coordinate-pair>]`。此命令将一个平滑的[贝塞尔曲线命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#三次贝塞尔曲线)添加到形状命令列表中。`by` 或 `to` 关键字确定由第一个 `<coordinate-pair>` 指定的曲线的结束点是“相对“还是”绝对“。
    - 如果省略 `with <coordinate-pair>`，该命令会绘制一条平滑的二次贝塞尔曲线，该曲线使用前一个控制点和当前终点来定义。
    - 如果包含可选的 `with` 关键字，则通过 `<coordinate-pair>` 指定曲线的控制点，绘制一条平滑的三次贝塞尔曲线，该曲线由前一个控制点、当前控制点和当前终点定义。

    平滑曲线确保形状的连续过渡，而二次曲线则不然。平滑的二次曲线使用单个控制点来保持无缝过渡，而平滑的三次曲线使用两个控制点提供更精细的过渡。

    `<arc-command>`：指定为 `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`。此命令将一个[椭圆曲线命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#椭圆曲线)添加到形状命令列表中。它在起始点和结束点之间绘制椭圆弧。`by` 或 `to` 关键字确定由第一个 `<coordinate-pair>` 指定的曲线的结束点是“相对”还是“绝对”。

    椭圆弧曲线命令定义了两个可能的椭圆，这两个椭圆都与起始点和结束点相交，并且每个椭圆都可以顺时针或逆时针追踪，从而根据弧的大小、方向和角度得到四个可能的弧。`of` 关键字指定从中获取弧的椭圆的大小。第一个 `<length-percentage>` 提供椭圆的水平半径，第二个提供垂直半径。如果只提供一个 `<length-percentage>`，则该值用于两个半径（圆的半径）。

    以下参数有助于确定使用哪个弧：
    - `<arc-sweep>`：指示所需的弧是否是顺时针（`cw`）或逆时针（`ccw`）围绕椭圆追踪的。如果省略，这默认为 `ccw`。
    - `<arc-size>`：指示所需的弧是否是两个弧中较大的一个（`large`）或较小的一个（`small`）。如果省略，这默认为 `small`。
    - `<angle>`：指定椭圆相对于 x 轴旋转的角度，单位为度。正角度将椭圆顺时针旋转，负角度将其逆时针旋转。如果省略，这默认为 `0deg`。

    特殊情况处理如下：
    - 如果只提供一个 `<length-percentage>`，则该值用于水平和垂直半径，从而有效地创建一个圆。在这种情况下，`<arc-size>` 和 `<angle>` 没有影响。
    - 如果任一半径为零，则该命令等同于到终点的 `<line-command>`。
    - 如果任一半径为负，则使用其绝对值。
    - 如果水平和垂直半径不能描述一个足够大的椭圆来同时与起点和终点相交（在通过指定的 `<angle>` 旋转后），则半径会被均匀放大，直到椭圆刚好足够大以与两点相交。
    - 如果弧的起点和终点恰好位于椭圆的两侧，则只有一个可能的椭圆和两个可能的弧。在这种情况下，`<arc-sweep>` 指定选择的弧，而 `<arc-size>` 没有影响。

    `close`：将一个 [ClosePath 命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#closepath)添加到形状命令列表中，从当前位置（最后一个命令的终点）到在 `from <coordinate-pair>` 参数中定义的路径的第一个点绘制一条直线。要关闭形状而不绘制直线，请在关闭命令之前包含一个带有起始坐标的 `<move-command>`。如果 `close` 命令后立即跟随一个 `<move-command>`，则它定义了下一个形状或子路径的起点。

## 描述

`shape()` 函数允许你定义复杂的形状。它在几个方面类似于 {{cssxref("basic-shape/path","path()")}} 形状函数：

- `shape()` 函数中的 `<fill-rule>` 参数的工作方式与 `path()` 函数中的相同。
- `shape()` 函数要求指定一个或多个 `<shape-command>`，其中每个命令使用底层的[路径命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#路径命令)，例如 [MoveTo](/zh-CN/docs/Web/SVG/Reference/Attribute/d#moveto_路径命令)、[LineTo](/zh-CN/docs/Web/SVG/Reference/Attribute/d#lineto_路径命令) 和 [ClosePath](/zh-CN/docs/Web/SVG/Reference/Attribute/d#closepath)。

然而，与使用 `path()` 相比，`shape()` 提供了几个优点：

- `shape()` 使用标准的 CSS 语法，使得在样式表中直接创建和修改形状更加容易。相比之下，`path()` 使用 [SVG 路径](/zh-CN/docs/Web/SVG/Reference/Element/path)语法，对于不熟悉 SVG 的用户来说可能不太直观。
- `shape()` 支持各种 CSS 单位，包括百分比、`rem` 和 `em`。相反，`path()` 将形状定义为单个字符串，并将单位限制为 `px`。
- `shape()` 还允许使用 CSS 数学函数，例如 {{cssxref("calc")}}、{{cssxref("max")}} 和 {{cssxref("abs")}}，在定义形状时提供了更多的灵活性。

## 形式语法

{{csssyntax}}

## 示例

### 使用 `shape()` 定义路径

该示例演示了如何在 {{cssxref("offset-path")}} 属性中使用 `shape()` 函数来定义元素可以跟随的路径形状。

第一个形状 `shape1` 遵循由 `curve to` 命令定义的三次贝塞尔曲线路径。接下来，`close` 命令从曲线的终点画一条直线回到 `from` 命令中定义的初始点。最后，`shape1` 移动到新位置 `0px 150px`，然后沿着一条水平线继续前进。

第二个形状 `shape2` 最初沿着一条水平线移动，然后返回到起始位置 `50px 90px`。接着，它沿着一条垂直线移动，最后通过 `close` 命令回到初始点关闭路径。

两个形状都从它们的原始颜色开始，并在 `move` 动画结束时逐渐过渡到 `hotpink`。随着动画重新开始，它们的颜色会恢复到初始状态。这个循环的颜色变化为你提供了一个关于动画进程和重新开始的视觉提示。

```html hidden
<div class="container">
  使用 <code>&lt;curve-command&gt;</code>
  <div class="shape shape1">>></div>
</div>

<div class="container">
  使用 <code>&lt;move-command&gt;</code> 和
  <code>&lt;hvline-command&gt;</code>
  <div class="shape shape2">>></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 250px;
  border: 2px dotted green;
  margin: 20px;
}

@supports not (offset-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "你的浏览器尚不支持 `shape()` 函数。";
  }
}
```

```css
.shape {
  width: 50px;
  height: 50px;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
  animation: move 6s infinite linear;
}

.shape1 {
  offset-path: shape(
    from 30% 60px,
    curve to 180px 180px via 90px 190px,
    close,
    move by 0px 150px,
    hline by 40%
  );
}

.shape2 {
  offset-path: shape(
    from 50px 90px,
    hline to 8em,
    move to 50px 90px,
    vline by 20%,
    close
  );
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
    background-color: hotpink;
  }
}
```

#### 结果

{{EmbedLiveSample('使用 shape() 定义路径', '100%', 300)}}

### 使用 `shape()` 定义元素的可见部分

该例子演示了如何在 {{cssxref("clip-path")}} 属性中使用 `shape()` 函数来为剪切区域创建不同的形状。第一个形状（`shape1`）使用由直线定义的三角形。第二个形状（`shape2`）包含曲线和平滑过渡；它还展示了在 `close` 命令之后使用 `<move-command>`，从而在剪切区域中添加矩形形状。

```html hidden
<div class="container">
  <div class="shape shape1"></div>
</div>

<div class="container">
  <div class="shape shape2"></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: lightgray;
}

@supports not (clip-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "你的浏览器尚不支持 `shape()` 函数。";
  }
}
```

```css
.shape {
  width: 100%;
  height: 100%;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
}

/* 三角形剪切区域 */
.shape1 {
  clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
}

/* 使用弧线以及 hline 和 vline 变换的心形剪切区域 */
.shape2 {
  clip-path: shape(
    from 20px 70px,
    arc to 100px 70px of 1% cw,
    arc to 180px 70px of 1% cw,
    curve to 100px 190px with 180px 130px,
    curve to 20px 70px with 20px 130px,
    close,
    move to 150px 150px,
    hline by 40px,
    vline by 40px,
    hline by -40px,
    close
  );
}
```

#### 结果

{{EmbedLiveSample('使用 shape() 定义元素的可见部分', '100%', 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("clip-path")}}
- {{cssxref("offset-path")}}
- [CSS 形状](/zh-CN/docs/Web/CSS/Guides/Shapes)模块
- [形状概述](/zh-CN/docs/Web/CSS/Guides/Shapes/Overview)指南
- [基本形状](/zh-CN/docs/Web/CSS/Guides/Shapes/Using_shape-outside)指南
