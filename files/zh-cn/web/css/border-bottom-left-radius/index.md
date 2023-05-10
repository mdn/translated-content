---
title: 左下边框圆角
slug: Web/CSS/border-bottom-left-radius
---

{{CSSRef}}

**`border-bottom-left-radius`** 这个 css 属性设置元素左下角的圆角。圆角可以是圆或椭圆（注：应为圆或椭圆的一部分），或者当其中一个值为 0 时，圆角将不被设置，这时这个角将展示为直角。

![border-bottom-left-radius.png](border-bottom-left-radius.png)

一个无论是图像或颜色的背景，都会在边框上被裁剪，即使背景是圆角的; 裁剪的确切位置由 {{cssxref("background-clip")}} 属性定义。

> **备注：** 如果该属性的值没有被一个在**`border-bottom-left-radius`** 属性后，作用于当前元素上的{{cssxref("border-radius")}}简写属性设置，那么该属性值将会被[shorthand property](/zh-CN/docs/Web/CSS/Shorthand_properties)重置为初始值。

{{cssinfo}}

## 语法

```css
/* 圆形 */
/* border-bottom-left-radius: radius */
border-bottom-left-radius: 3px;

/* 椭圆形 */
/* border-bottom-left-radius: 水平方向 垂直方向 */
border-bottom-left-radius: 0.5em 1em;

border-bottom-left-radius: inherit;
```

where:

- _radius_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting the radius of the circle to use for the border in that corner.
- _horizontal_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting the horizontal semi-major axis of the ellipsis to use for the border in that corner.
- _vertical_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting the vertical semi-major axis of the ellipsis to use for the border in that corner.

### Values

- `<length-percentage>`
  - : Denotes the size of the circle radius or the semi-major and semi-minor axes of the ellipsis. As absolute length it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Percentages for the horizontal axis refer to the width of the box, percentages for the vertical axis refer to the height of the box. Negative values are invalid.

### Formal syntax

{{csssyntax}}

## Examples

<table class="standard-table">
  <thead>
    <tr>
      <th>Live example</th>
      <th>Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-bottom-left-radius: 40px 40px;
            width: 100px;
            height: 100px;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        An arc of circle is used as the border
        <pre class="brush: css notranslate">
div {
  border-bottom-left-radius: 40px 40px;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-bottom-left-radius: 40px 20px;
            width: 100px;
            height: 100px;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        An arc of ellipse is used as the border
        <pre class="brush: css notranslate">
div {
  border-bottom-left-radius: 40px 20px;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-bottom-left-radius: 40%;
            width: 100px;
            height: 100px;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        The box is a square: an arc of circle is used as the border
        <pre class="brush: css notranslate">
div {
  border-bottom-left-radius: 40%;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-bottom-left-radius: 40%;
            width: 100px;
            height: 200px;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        The box is not a square: an arc of ellipse is used as the border
        <pre class="brush: css notranslate">
div {
  border-bottom-left-radius: 40%;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            border: black 3px double;
            border-bottom-left-radius: 40%;
            height: 100px;
            width: 100px;
            background-color: rgb(250, 20, 70);
            background-clip: content-box;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        The background color is clipped at the border
        <pre class="brush: css notranslate">
div {
  border-bottom-left-radius:40%;
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The border-radius-related CSS properties: the CSS shorthand {{cssxref("border-radius")}}, the properties for the other corners: {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, and {{cssxref("border-top-left-radius")}}.
