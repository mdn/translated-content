---
title: border-radius
slug: Web/CSS/border-radius
---

{{CSSRef("CSS Borders")}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-radius`** 允许你设置元素的外边框圆角。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆。这个（椭）圆与边框的交集形成圆角效果。

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

该属性是一个 [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)，是为了将这四个属性 {{Cssxref("border-top-left-radius")}}、{{Cssxref("border-top-right-radius")}}、{{Cssxref("border-bottom-right-radius")}}，和 {{Cssxref("border-bottom-left-radius")}} 简写为一个属性。

即使元素没有边框，圆角也可以用到 {{ Cssxref("background") }} 上面，具体效果受 {{ Cssxref("background-clip") }} 影响。

当 {{Cssxref("border-collapse")}} 的值为 `collapse` 时，`border-radius` 属性不会被应用到表格元素上。

_radius_
![all-corner.png](all-corner.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框四角的圆角半径。只在单值语法中使用。
_top-left-and-bottom-right_
![top-left-bottom-right.png](top-left-bottom-right.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框左上角和右下角的圆角半径。只在双值语法中使用。
_top-right-and-bottom-left_
![top-right-bottom-left.png](top-right-bottom-left.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框右上角和左下角的圆角半径。只在双值或三值语法中使用。
_top-left_
![top-left.png](top-left.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框左上角的圆角半径。只在三值或四值语法中使用。
_top-right_
![top-right.png](top-right.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框右上角的圆角半径。只在四值语法中使用。
_bottom-right_
![bottom-rigth.png](bottom-right.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框右下角的圆角半径。只在三值或四值语法中使用。
_bottom-left_
![bottom-left.png](bottom-left.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框左下角的圆角半径。只在四值语法中使用。
`inherit`
表示四个值都从父元素计算值继承。

- {{cssxref("&lt;length&gt;")}}
  - : {{ cssxref("&lt;length&gt;") }} 定义圆形半径或椭圆的半长轴，半短轴。负值无效。
- {{cssxref("&lt;percentage&gt;")}}
  - : 使用百分数定义圆形半径或椭圆的半长轴，半短轴。水平半轴相对于盒模型的宽度；垂直半轴相对于盒模型的高度。负值无效。

例如：

```css
border-radius: 1em/5em;

/* 等价于： */

border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* 等价于： */

border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

```html hidden
<pre id="example-1">
border: solid 10px;
border-radius: 10px 40px 40px 10px;
  </pre
>
<pre id="example-2">
border: groove 1em red;
border-radius: 2em;
  </pre
>
<pre id="example-3">
background: gold;
border: ridge gold;
border-radius: 13em/3em;
  </pre
>
<pre id="example-4">
border: none;
border-radius: 40px 10px;
background: gold;
  </pre
>
<pre id="example-5">
border: none;
border-radius: 50%;
background: burlywood;
  </pre
>
<pre id="example-6">
border: dotted;
border-width: 10px 4px;
border-radius: 10px 40px;
  </pre
>
<pre id="example-7">
border: dashed;
border-width: 2px 4px;
border-radius: 40px;
  </pre
>
```

```css hidden
pre {
  margin: 20px;
  padding: 20px;
  width: 80%;
  height: 80px;
}

pre#example-1 {
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
}

pre#example-2 {
  border: groove 1em red;
  border-radius: 2em;
}

pre#example-3 {
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
}

pre#example-4 {
  border: none;
  border-radius: 40px 10px;
  background: gold;
}

pre#example-5 {
  border: none;
  border-radius: 50%;
  background: burlywood;
}

pre#example-6 {
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
}

pre#example-7 {
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
}
```

{{EmbedLiveSample("示例", "200", "1150")}}

### 在线示例

- 示例 1：<http://jsfiddle.net/Tripad/qnGKj/2/>
- 示例 2：<http://jsfiddle.net/Tripad/qnGKj/3/>
- 示例 3：<http://jsfiddle.net/Tripad/qnGKj/4/>
- 示例 4：<http://jsfiddle.net/Tripad/qnGKj/5/>
- 示例 5：<http://jsfiddle.net/Tripad/qnGKj/6/>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 与 border-radius 相关的 CSS 属性：{{cssxref("border-top-left-radius")}}、{{cssxref("border-top-right-radius")}}、{{cssxref("border-bottom-right-radius")}}、{{cssxref("border-bottom-left-radius")}}、{{cssxref("border-start-start-radius")}}、{{cssxref("border-start-end-radius")}}、{{cssxref("border-end-start-radius")}}、{{cssxref("border-end-end-radius")}}
