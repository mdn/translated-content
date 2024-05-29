---
title: shape()
slug: Web/CSS/basic-shape/shape
l10n:
  sourceCommit: 8cd08162e592c1baf5d888f4c5a08a58360344b5
---

{{CSSRef}}

**`shape()`** [CSS 函数](/zh-CN/docs/Web/CSS/CSS_Functions)用于定义 {{cssxref("clip-path")}} 和 {{cssxref("offset-path")}} 属性的形状。它结合了一个初始起点和一系列定义形状路径的形状命令。`shape()` 函数是 {{cssxref("&lt;basic-shape&gt;")}} 数据类型的成员。

## 语法

```css
/* <fill-rule> */
clip-path: shape(nonzero from 0 0, line to 10px 10px);

/* <move-command>, <line-command>, and close */
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

## 参数
- [`<fill-rule>`](/zh-CN/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}

    - : 指定了如何填充形状的重叠区域。可能的取值包括：

        - `nonzero`: 如果从某点绘制的射线穿过的左到右路径段多于右到左路径段，即导致非零计数，则该点被视为形状内部。当省略 `<fill-rule>` 时，这是默认值。

        - `evenodd`: 如果从某点绘制的射线穿过的路径段数量为奇数，则该点被视为形状内部。这意味着每当射线进入形状时，它都没有相等数量的退出，表明具有不对应的退出的奇数计数。

        **备注：** `<fill-rule>` 不受 {{cssxref("offset-path")}} 支持，使用它会使该属性无效。

- `from <coordinate-pair>`

    - : 将第一个 `<shape-command>` 的起始点定义为一对坐标，这些坐标是从[参考框](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box)的左上角测量得到的。这些坐标被指定为用空格分隔的 `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} 值，分别表示左偏移和上偏移。百分比值相对于元素的参考框的宽度和高度计算。在此参数后添加逗号。

- `<shape-command>`

    - : 指定一个或多个逗号分隔的命令列表，用于定义形状，其语法类似于 [SVG 路径命令](/zh-CN/docs/Web/SVG/Attribute/d#path_commands)。命令包括 `<move-command>`、`<line-command>`、`<hv-line-command>`、`<curve-command>`、`<smooth-command>`、`<arc-command>` 和 `close`。每个命令的起始点是前一个命令的结束点，形状的第一个点由 from [`from <coordinate-pair>`](#from_coordinate-pair) 参数定义。

    大多数形状命令的语法是一个关键字，提供一个指令，如 move 或 line，后跟 by 或 to 关键字，以及一组坐标。

    `by`：表示 `<coordinate-pair>` 相对于命令的起始点的位置（"相对" 值）。

    `to`：表示 `<coordinate-pair>` 相对于参考框的左上角的位置（"绝对" 值）。

    > **备注：** 如果 `<coordinate-pair>` 中的坐标以百分比形式指定，则该值相对于参考框的宽度或高度进行计算。

    可以指定以下 `<shape-command>`：

        - `<move-command>`：指定为 `move [by | to] <coordinate-pair>`。此命令将 [MoveTo 命令](/zh-CN/docs/Web/SVG/Attribute/d#moveto_path_commands)添加到形状命令列表中。它不绘制任何内容。相反，它指定了下一个命令的起始位置。`by` 或 `to` 关键字指定 `<coordinate-pair>` 点是“相对”还是“绝对“，分别。如果 `<move-command>` 跟随 `close` 命令，则它标识了下一个形状或子路径的起始点。

        - `<line-command>`：指定为 `line [by | to] <coordinate-pair>`。此命令将 [LineTo 命令](/zh-CN/docs/Web/SVG/Attribute/d#lineto_path_commands)添加到形状命令列表中。它从命令的起始点直线绘制到其结束点。`by` 或 `to` 关键字指定由 `<coordinate-pair>` 分别指定的结束点是“相对”还是“绝对”。

        - `<hv-line-command>`：指定为 `[hline | vline] [by | to] <length-percentage>`。此命令将水平 (`hline`) 或垂直 (`vline`) [LineTo 命令](/zh-CN/docs/Web/SVG/Attribute/d#lineto_path_commands)添加到形状命令列表中。使用 `hline`，从命令的起始点绘制水平线到由 `<length-percentage>` 定义的 `x` 位置的 `to` 或 `by`。使用 `vline`，从命令的起始点绘制垂直线到由 `<length-percentage>` 定义的 `y` 位置的 `to` 或 `by`。`by` 或 `to` 关键字分别确定了“相对”或“绝对”结束点。此命令相当于 `<line-command>`，其中一个坐标值由单个 `<length-percentage>` 设置，另一个坐标值保持从其起始命令开始的不变。

        - `<curve-command>`：指定为 `curve [by | to] <coordinate-pair> via <coordinate-pair> [<coordinate-pair>]`。此命令将一个[贝塞尔曲线命令](/zh-CN/docs/Web/SVG/Attribute/d#cubic_bézier_curve)添加到形状命令列表中。`by` 或 `to` 关键字确定由第一个 `<coordinate-pair>` 指定的曲线的结束点是“相对”还是“绝对”。
    
        `via` 关键字指定贝塞尔曲线的控制点。如果仅提供一个 `<coordinate-pair>`，则该命令绘制一个[二次贝塞尔曲线](/zh-CN/docs/Web/SVG/Attribute/d#quadratic_bézier_curve)，由三个点（起始点、控制点和结束点）定义。如果提供了两个 `<coordinate-pair>` 值，则该命令绘制一个由四个点（起始点、两个控制点和结束点）定义的三次贝塞尔曲线。

        - `<smooth-command>`：指定为 `smooth [by | to] <coordinate-pair> [via <coordinate-pair>]`。此命令将一个平滑的[贝塞尔曲线命令](/zh-CN/docs/Web/SVG/Attribute/d#cubic_bézier_curve)添加到形状命令列表中。`by` 或 `to` 关键字确定由第一个 `<coordinate-pair>` 指定的曲线的结束点是“相对“还是”绝对“。
    
        如果省略 `via <coordinate-pair>`，则该命令绘制一个平滑的二次贝塞尔曲线，该曲线使用前一个控制点和当前端点来定义曲线。如果包含可选的 `via` 关键字，则它通过 `<coordinate-pair>` 指定曲线的控制点，绘制由前一个控制点、当前控制点和当前端点定义的平滑三次贝塞尔曲线。平滑曲线确保从形状中连续过渡，而二次曲线则不会。平滑二次曲线使用单个控制点保持无缝过渡，而平滑三次曲线使用两个控制点提供更精细的过渡。

        - `<arc-command>`：指定为 `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`。此命令将一个[椭圆弧曲线命令](/zh-CN/docs/Web/SVG/Attribute/d#elliptical_arc_curve)添加到形状命令列表中。它在起始点和结束点之间绘制椭圆弧。`by` 或 `to` 关键字确定由第一个 `<coordinate-pair>` 指定的曲线的结束点是“相对”还是“绝对”。
    
        椭圆弧曲线命令定义了两个可能的椭圆，这两个椭圆都与起始点和结束点相交，并且每个椭圆都可以顺时针或逆时针追踪，从而根据弧的大小、方向和角度得到四个可能的弧。`of` 关键字指定从中获取弧的椭圆的大小。第一个 `<length-percentage>` 提供椭圆的水平半径，第二个提供垂直半径。如果只提供一个 `<length-percentage>`，则该值用于两个半径（圆的半径）。以下参数有助于确定使用哪个弧：

        - `<arc-sweep>`：指示所需的弧是否是顺时针 (`cw`) 或逆时针 (`ccw`) 围绕椭圆追踪的。如果省略，这默认为 `ccw`。

        - `<arc-size>`：指示所需的弧是否是两个弧中较大的一个 (`large`) 或较小的一个 (`small`)。如果省略，这默认为 `small`。

        - `<angle>`：指定椭圆相对于 x 轴旋转的角度，单位为度。正角度将椭圆顺时针旋转，负角度将其逆时针旋转。如果省略，这默认为 `0deg`。

        > **备注：** 如果弧的起始点和结束点恰好位于椭圆的正好相对的两侧，则只有一个可能的椭圆和两个可能的弧。在这种情况下，`<arc-sweep>` 指定要选择的弧，而 `<arc-size>` 不起作用。

        - `close`：将 [ClosePath 命令](/zh-CN/docs/Web/SVG/Attribute/d#closepath)添加到形状命令列表中，从当前位置（上一个命令的结束点）绘制一条直线到 `from <coordinate-pair>` 参数中定义的路径中的第一个点。要关闭形状而不绘制线，请在 `close` 命令之前包含一个 `<move-command>`，并使用原始坐标。如果 `close` 命令紧随 `<move-command>`，则它定义了下一个形状或子路径的起始点。

## 描述
`shape()` 函数允许你定义复杂的形状。它在几个方面类似于 {{cssxref("basic-shape/path","path()")}} 形状函数：

- `shape()` 函数中的 `<fill-rule>` 参数的工作方式与 `path()` 函数中的相同。
- `shape()` 函数要求指定一个或多个 `<shape-command>`，其中每个命令使用底层的[路径命令](/zh-CN/docs/Web/SVG/Attribute/d#path_commands)，例如 [MoveTo](/zh-CN/docs/Web/SVG/Attribute/d#moveto_path_commands)、[LineTo](/zh-CN/docs/Web/SVG/Attribute/d#lineto_path_commands) 和 [ClosePath](/zh-CN/docs/Web/SVG/Attribute/d#closepath)。

然而，与使用 `path()` 相比，`shape()` 提供了几个优点：

- `shape()` 使用标准的 CSS 语法，使得在样式表中直接创建和修改形状更加容易。相比之下，`path()` 使用 [SVG 路径](/zh-CN/docs/Web/SVG/Element/path)语法，对于不熟悉 SVG 的用户来说可能不太直观。
- `shape()` 支持各种 CSS 单位，包括百分比、`rem` 和 `em`。相反，`path()` 将形状定义为单个字符串，并将单位限制为 `px`。
- 此外，`shape()` 还允许使用 CSS 数学函数，例如 {{cssxref("calc")}}、{{cssxref("max")}} 和 {{cssxref("abs")}}，在定义形状时提供了更多的灵活性。
## 正式语法
{{csssyntax}}

## 示例

### 使用 `shape()` 定义路径

该示例演示了如何在 {{cssxref("offset-path")}} 属性中使用 `shape()` 函数来定义元素可以跟随的路径形状。在这个示例中，我们创建了一个曲线路径。

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

#### 结果
{{EmbedLiveSample('使用 shape() 来定义路径', '100%', 300)}}

### 使用 `shape()` 定义元素的可见部分
该示例演示了如何在 {{cssxref("clip-path")}} 属性中使用 `shape()` 函数来创建裁剪区域的形状。

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

/* 简单的三角形 */
.shape1 {
  clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
}

/* 更复杂的形状，包括曲线和平滑过渡 */
.shape2 {
  clip-path: shape(
    from 10px 10px,
    curve to 60px 20% via 40px 0,
    smooth to 90px 0,
    curve by -20px 60% via 10% 40px 20% 20px,
    smooth by -40% -10px via -10px 70px
  );
}
```
#### 结果
{{EmbedLiveSample('使用 shape() 函数来定义元素的可见部分', '100%', 300)}}

## 规范
{{Specifications}}

## 浏览器兼容性
{{Compat}}

## 参见
- {{cssxref("clip-path")}}
- {{cssxref("offset-path")}}
- [CSS shapes](/zh-CN/docs/Web/CSS/CSS_shapes) 模块
- [形状概述](/zh-CN/docs/Web/CSS/CSS_shapes/Overview_of_shapes) 指南
- [基本形状](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_shapes) 指南
