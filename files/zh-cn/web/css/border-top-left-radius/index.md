---
title: border-top-left-radius
slug: Web/CSS/border-top-left-radius
---

{{CSSRef}}

## 概要

**`border-top-left-radius`** 用来设置元素左上角的圆角效果。这段圆弧（角）可以是圆或椭圆的一部分。如果其中有一个值为 0，那么将无圆角效果（见 **`border-top-left-radius`** 取值方式)。

![border-radius.png](border-radius.png)

盒模型的背景，可以是一张图片或一种颜色，会在边框处被剪裁，更甚至可以是一个圆；剪切的额外定位通过另一个 CSS 属性"background-clip"来定义。

> [!NOTE]
> 在 border-top-left-radius 属性值之后，如果作用的元素上没有设置“border-radius”属性，那么这个属性值就会通过[简写属性](/zh-CN/docs/CSS/Shorthand_properties)重新设置成它的初始值。

## 语法

```css
/* the corner is a circle */
/* border-top-left-radius: radius */
border-top-left-radius: 3px;

/* the corner is an ellipsis */
/* border-top-left-radius: horizontal vertical */
border-top-left-radius: 0.5em 1em;

border-top-left-radius: inherit;
```

##### 属性值：

- _radius_
  - : 可以是 [`<length>`](/zh-CN/docs/Web/CSS/length) 或者 [`<percentage>`](/zh-CN/docs/Web/CSS/percentage)，表示左上角边框的圆角半径。
- _horizontal_
  - : 可以是 [`<length>`](/zh-CN/docs/Web/CSS/length) 或者 [`<percentage>`](/zh-CN/docs/Web/CSS/percentage)，表示椭圆的水平半长轴在被用作边框左上角的半径。
- _vertical_
  - : 可以是 [`<length>`](/zh-CN/docs/Web/CSS/length) 或者 [`<percentage>`](/zh-CN/docs/Web/CSS/percentage)，表示椭圆的垂直半长轴在被用作边框左上角的半径。

### 取值

- `<length>`
  - : [`<length>`](/zh-CN/docs/Web/CSS/length) 定义圆形半径或椭圆的半长轴，半短轴。不能用负值。
- `<percentage>`
  - : 使用百分数定义圆形半径或椭圆的半长轴，半短轴。水平半轴相对于盒模型的宽度；垂直半轴相对于盒模型的高度。不能用负值。

### Formal syntax

{{csssyntax}}

## 示例

<table class="standard-table">
  <thead>
    <tr>
      <th>实例</th>
      <th>代码</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 1.5em">
        <div
          id="circle-arc"
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-top-left-radius: 40px 40px;
            width: 100px;
            height: 100px;
          "
        ></div>
      </td>
      <td>
        椭圆的弧被用作左上角边框
        <pre class="brush:css">
div {
  border-top-left-radius: 40px 40px;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          id="ellipse-arc"
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-top-left-radius: 40px 20px;
            width: 100px;
            height: 100px;
          "
        ></div>
      </td>
      <td>
        椭圆的弧被用作左上角边框
        <pre class="brush:css">
div {
  border-top-left-radius: 40px 20px;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          id="square-box-circle-arc"
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-top-left-radius: 40%;
            width: 100px;
            height: 100px;
          "
        ></div>
      </td>
      <td>
        盒子是方形的，圆弧被用作左上角边框
        <pre class="brush: css">
div
  border-top-left-radius: 40%;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          id="not-square-ellipse-arc"
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-top-left-radius: 40%;
            width: 100px;
            height: 200px;
          "
        ></div>
      </td>
      <td>
        盒子不是方形的，椭圆的弧被用作左上角边框
        <pre class="brush: css">
div {
  border-top-left-radius: 40%;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          id="clipped-border"
          style="
            background-color: rgb(250, 20, 70);
            background-clip: content-box;
            border: double 3px black;
            border-top-left-radius: 40%;
            width: 100px;
            height: 100px;
          "
        ></div>
      </td>
      <td>
        背景色在左上角被剪切
        <pre class="brush: css">
div {
  border-top-left-radius:40%;
  border-style: black 3px double;
  background-color: rgb(250,20,70);
  background-clip: content-box;
}
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- border-radius 相关 CSS 属性：{{cssxref("border-radius")}}, 其他边角属性： {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, and {{cssxref("border-bottom-left-radius")}}.
