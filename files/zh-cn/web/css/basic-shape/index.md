---
title: <basic-shape>
slug: Web/CSS/basic-shape
---

{{CSSRef}}

**`<basic-shape>`** 是一种表现基础图形的 CSS 数据类型，作用于{{cssxref("clip-path")}} 与 {{cssxref("shape-outside")}} 属性中。

{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}

## 语法

**`<basic-shape>`**数据类型可以由下列函数得到。

当构建一个图形时，运用了 **`<basic-shape>`** 值的属性就会定义一个相关的盒模型。基础图形使用的坐标系统即设置相关的盒模型左上角顶点为原点，该坐标轴的 x 轴正方向为右、y 轴的正方向为下。所有以百分比定义的长度将通过相关盒模型与使用的维度重定义。

### 图形函数

以下为当前支持的图形。所有\<basic-shape>值都由函数表达式定义，并且遵循属性值定义语法（[value definition syntax](/zh-CN/docs/Web/CSS/Value_definition_syntax)）。

- {{cssxref("basic-shape/inset","inset()")}}

  - : 定义了一个插进的长方形。

    ```css
    inset( <shape-arg>{1,4} [round <border-radius>]? )
    ```

    上式的前四个参数分别代表了插进的长方形与相关盒模型的上，右，下与左边界和顶点的偏移量。这些参数遵循边际速记语法（the syntax of the margin shorthand），所以给予一个、两个、或四个值都能设置四个偏移量。

    可选参数\<border-radius>用于定义插进长方形顶点的圆弧角度，该参数同上遵循边际速记语法（the syntax of the margin shorthand），给予一个、两个、或四个值都能设置四个偏移量。

    如果一对插进图形在通过堆叠产生的高于当前使用维度的维度中（例如，左右插进图像相叠 75%）将会定义一个包围不了任何区域的图形。这种情况会在元素中产生一个空白且平坦的区域。

- {{cssxref("basic-shape/circle","circle()")}}

  - : 使用一个半径和一个位置定义一个圆形。

    ```css
    circle( [<shape-radius>]? [at <position>]? )
    ```

    `<shape-radius>` 参数代表了 _r，_ 即圆形的半径，不接受负数作为该参数的值。一个以百分比表示的值将以公式 `sqrt(width^2+height^2)/sqrt(2)`计算，其中 width 与 height 为相关盒模型的宽与高。

    {{cssxref("&lt;position&gt;")}} 参数定义了圆心的位置。省缺值为盒模型的中心。

- {{cssxref("basic-shape/ellipse","ellipse()")}}

  - : 使用两个半径和一个位置定义一个椭圆。

    ```css
    ellipse( [<shape-radius>{2}]? [at <position>]? )
    ```

    `<shape-radius>` 参数代表了 rx 与 ry，其中 rx 代表了 x 轴方向的半径，ry 代表了 y 轴方向的半径。该参数不接受负数值。以百分比表示的长度将把盒模型的宽与高作为参照，宽作为 rx 的参照值，高作为 ry 的参照值。

    \<position>参数定义了椭圆形圆心的位子。其省缺值为盒模型的中心。

- {{cssxref("basic-shape/polygon","polygon()")}}

  - : 使用一个 SVG {{SVGAttr("fill-rule")}} 和一组顶点定义一个多边形，

    ```css
    polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )
    ```

    `<fill-rule>` 代表了填充规则（ [filling rule](/zh-CN/docs/Web/SVG/Attribute/fill-rule) ），即，如何填充该多边形。可选值为 nonzero 和 evenodd。该参数的省缺值为 nonzero。

    每一对在列表中的参数都代表了多边形顶点的坐标，_xi_ 与 _yi_，i 代表顶点的编号，即，第 i 个顶点。

- {{cssxref("path","path()")}}

  - : 使用一个 SVG {{SVGAttr("fill-rule")}} 和 SVG [路径定义](/zh-CN/docs/Web/SVG/Attribute/d)来定义一个形状。

    ```css
    path( [<fill-rule>,]? <string>)
    ```

    可选的 `<fill-rule>` 表示 {{SVGAttr("fill-rule")}} 填充规则。可选 `nonzero`（非零环绕规则）和 `evenodd`（奇偶规则）。如果省略，则默认是 `nonzero`。

    参数 \<string> 是用引号包含的 [SVG Path](/zh-CN/docs/SVG/Attribute/d) 字符串

上文未曾解释的参数如下：

```css
<shape-arg> = <length> | <percentage>
<shape-radius> = <length> | <percentage> | closest-side | farthest-side
```

为一个圆形或椭圆形定义一个半径。其省缺值为 `closest-side`。

`closest-side` 即图形中心到盒模型最近一条边之间的距离。对于圆形，该值在任意维度都表示最近的一条边。对于椭圆形，该值为半径维度最近的一条边。

`farthest-side` 取图形中心到盒模型最远一条边之间的距离作为值。对于圆形，该值在任意维度都是最远的一条边。对于椭圆形，该值为半径维度最远的一条边。

## 基础图形的计算值

在 `<basic-shape>` 函数中的值通过指定的方式计算，但是有下列情况会出现错误：

- 遗漏值（omitted values）参与到了省缺值的计算中。
- 在 `circle()` 或 `ellipse()` 函数中的{{cssxref("&lt;position&gt;")}}值被作为一对（水平的或垂直的）从左上原点的偏移值，每一次这样的计算将会给出绝对长度与百分比的结合。
- 一个在 `inset()`中的 [`<border-radius>`](/zh-CN/docs/Web/CSS/border-radius) 值，往往被当作一个扩展列表来计算，所有八个 {{cssxref("length")}}值或百分比代表的值都是如此。

## 基础图形的插值

`<basic-shape>` 值之间的动画变化将会遵循以下规则。图形函数的值会被放进一个插入的简易列表中。这些列表中的值将会尽可能地被当作 [`<length>`](/zh-CN/docs/Web/CSS/length)、[`<percentage>`](/zh-CN/docs/Web/CSS/percentage)、或 [`calc()`](/zh-CN/docs/Web/CSS/calc) 类型插入.。如果列表中的值不为上述三种类型中的一种，然而却是相同的（比如 `nonzero` 类型的值在多个列表的相同位置出现)，那么这些值将不会被作为插值。

- 一对的图形需要使用一样的盒模型。
- 如果一对图形是同一种类型，例如， `ellipse()` 或 `circle()`，并且没有任何半径使用了 `closest-side` 或 `farthest-side` 关键值，那么这些值将会成为相应的图形函数的插值。
- 如果一对图形都属于 `inset()`类，那么这些值将会成为相应的图形函数的插值。
- 如果一对图形都属于 `polygon()`类，并且两者有同样数量的顶点，并且使用了相同的填充规则 `<fill-rule>`，那么这些值将会成为相应的图形函数的插值。
- 其余状况将不会出现插值。

## 示例

### 动画多边形

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

{{EmbedLiveSample('动画多边形','340', '340')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Edit Shape Paths in CSS — Firefox Developer Tools](/zh-CN/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes)
