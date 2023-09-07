---
title: border-top-right-radius
slug: Web/CSS/border-top-right-radius
---

{{CSSRef("CSS Borders")}}

`border-top-right-radius` 属性设置元素的右上角弧形，这个圆弧可能是一个椭圆，或者其中一个值是 0 的话，就是没有圆弧，换句话就是说拐角是方形的。

![border-top-right-radius.png](border-top-right-radius.png)

一个背景通常以一张图片或者颜色开始，在边框处被剪切，更甚至就是一个圆形；剪切的额外定位通过一个 CSS 属性"background-clip"来定义。

> **备注：** 在 border-top-radius-radiu 属性值之后，如果作用在一个元素上没有设置“border-radius”简写属性，那么这个属性值就会通过[简写属性](/zh-CN/CSS/Shorthand_properties)重新设置成它的初始值。

## 语法

```css
/* the corner is a circle */
/* border-top-right-radius: radius */
border-top-right-radius: 3px;

/* the corner is an ellipse */
/* border-top-right-radius: horizontal vertical */
border-top-right-radius: 0.5em 1em;

border-top-right-radius: inherit;

/* Global values */
border-top-right-radius: inherit;
border-top-right-radius: initial;
border-top-right-radius: revert;
border-top-right-radius: revert-layer;
border-top-right-radius: unset;
```

之上：

- _radius_
  - : 这是一个 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}，标志着圆的半径在这个拐角用作边框。
- _horizontal_
  - : 这是一个 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}，标志着椭圆的水平半长轴在这个拐角被用作边框。
- _vertical_
  - : 这是一个 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}，标志着椭圆的垂直半长轴在这个拐角被用作边框。

### 属性值

- `<长度>`
  - : 标志着圆弧半径的大小或者椭圆的半长轴或半短轴，它属性值的数据类型表示任意单位通过{{cssxref("&lt;length&gt;")}}，负值是无效的。
- `<百分数>`
  - : 标志着圆弧半径的大小或者椭圆的半长轴或半短轴，水平轴的百分值是相对盒模型的宽度，垂直轴的百分值是相对盒模型的宽度，负值是无效的。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

<table class="standard-table" style="border: 2px solid rgb(255, 255, 255)">
  <thead>
    <tr>
      <th
        style="
          border-width: 2px;
          border-style: solid;
          border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228);
        "
      >
        实例
      </th>
      <th
        style="
          border-width: 2px;
          border-style: solid;
          border-color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(212, 221, 228);
        "
      >
        代码
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 1.5em; border: 2px solid rgb(255, 255, 255)">
        <div
          style="
            border: 1px solid black;
            border-top-right-radius: 40px;
            width: 100px;
            height: 100px;
            background-color: rgb(144, 238, 144);
          "
        ></div>
      </td>
      <td style="border: 2px solid rgb(255, 255, 255)">
        圆形的弧被用作边框
        <pre
          class="language-html"
          style="padding: 1em 0px 1em 30px"
        ><code class="language-html" style="direction: ltr;">div {
  border-top-right-radius: 40px 40px;
}</code></pre>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 0px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 19px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 38px;
            background: 0px 0px;
          "
        ></div>
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em; border: 2px solid rgb(255, 255, 255)">
        <div
          style="
            border: 1px solid black;
            border-top-right-radius: 40px 20px;
            width: 100px;
            height: 100px;
            background-color: rgb(144, 238, 144);
          "
        ></div>
      </td>
      <td style="border: 2px solid rgb(255, 255, 255)">
        椭圆的弧被用作边框
        <pre
          class="language-html"
          style="padding: 1em 0px 1em 30px"
        ><code class="language-html" style="direction: ltr;">div {
  border-top-right-radius: 40px 20px;
}</code></pre>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 0px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 19px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 38px;
            background: 0px 0px;
          "
        ></div>
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em; border: 2px solid rgb(255, 255, 255)">
        <div
          style="
            border: 1px solid black;
            border-top-right-radius: 40%;
            width: 100px;
            height: 100px;
            background-color: rgb(144, 238, 144);
          "
        ></div>
      </td>
      <td style="border: 2px solid rgb(255, 255, 255)">
        盒子是方形，圆形的弧被用作边框
        <pre
          class="language-html"
          style="padding: 1em 0px 1em 30px"
        ><code class="language-html" style="direction: ltr;">div {
  border-top-right-radius: 40%;
}</code></pre>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 0px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 19px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 38px;
            background: 0px 0px;
          "
        ></div>
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em; border: 2px solid rgb(255, 255, 255)">
        <div
          style="
            border: 1px solid black;
            border-top-right-radius: 40%;
            width: 100px;
            height: 200px;
            background-color: rgb(144, 238, 144);
          "
        ></div>
      </td>
      <td style="border: 2px solid rgb(255, 255, 255)">
        盒子不是方形，椭圆的弧被用作边框
        <pre
          class="language-html"
          style="padding: 1em 0px 1em 30px"
        ><code class="language-html" style="direction: ltr;">div {
  border-top-right-radius: 40%;
}</code></pre>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 0px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 19px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 38px;
            background: 0px 0px;
          "
        ></div>
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em; border: 2px solid rgb(255, 255, 255)">
        <div
          style="
            border: 3px double black;
            border-top-right-radius: 40%;
            height: 100px;
            width: 100px;
            background-color: rgb(250, 20, 70);
            background-clip: content-box;
          "
        ></div>
      </td>
      <td style="border: 2px solid rgb(255, 255, 255)">
        背景颜色在边框处剪切
        <pre
          class="language-html"
          style="padding: 1em 0px 1em 30px"
        ><code class="language-html" style="direction: ltr;">div {
  border-top-right-radius:40%;
  border-style: black 3px double;
  background-color: rgb(250,20,70);
  background-clip: content-box;
}</code></pre>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 0px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 19px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 38px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 57px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 76px;
            background: 0px 0px;
          "
        ></div>
        <div
          class="line-number"
          style="
            margin-top: 1em;
            position: absolute;
            left: 0px;
            right: 0px;
            line-height: inherit;
            top: 95px;
            background: 0px 0px;
          "
        ></div>
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

边框半径相关的 CSS 属性：CSS 速记 {{ cssxref("border-radius") }}, 其他角的属性：{{ cssxref("border-top-left-radius") }}, {{ cssxref("border-bottom-right-radius") }}和 {{ cssxref("border-bottom-left-radius") }}。
