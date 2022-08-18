---
title: border-radius
slug: Web/CSS/border-radius
---
{{ CSSRef("CSS Borders") }}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-radius`** 允许你设置元素的外边框圆角。当使用一个半径时确定一个圆形，当使用两个半径时确定一个椭圆。这个 (椭) 圆与边框的交集形成圆角效果。

![Images of CSS3 rounded corners: no rounding, rounding w/ an arc of circle, rounding w/ an arc of ellipse](/files/3638/border-radius-sh.png)

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

该属性是一个 [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)，是为了将这四个属性 {{Cssxref("border-top-left-radius")}}、{{Cssxref("border-top-right-radius")}}、{{Cssxref("border-bottom-right-radius")}}，和 {{Cssxref("border-bottom-left-radius")}} 简写为一个属性。

即使元素没有边框，圆角也可以用到 {{ Cssxref("background") }} 上面，具体效果受 {{ Cssxref("background-clip") }} 影响。

当 {{Cssxref("border-collapse")}} 的值为 `collapse` 时，`border-radius` 属性不会被应用到表格（

）元素上。

_radius_
![all-corner.png](https://developer.mozilla.org/@api/deki/files/6138/=all-corner.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框四角的圆角半径。只在单值语法中使用。
_top-left-and-bottom-right_
![top-left-bottom-right.png](https://developer.mozilla.org/@api/deki/files/6141/=top-left-bottom-right.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框左上角和右下角的圆角半径。只在双值语法中使用。
_top-right-and-bottom-left_
![top-right-bottom-left.png](https://developer.mozilla.org/@api/deki/files/6143/=top-right-bottom-left.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框右上角和左下角的圆角半径。只在双值或三值语法中使用。
_top-left_
![top-left.png](https://developer.mozilla.org/@api/deki/files/6142/=top-left.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框左上角的圆角半径。只在三值或四值语法中使用。
_top-right_
![top-right.png](https://developer.mozilla.org/@api/deki/files/6144/=top-right.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框右上角的圆角半径。只在四值语法中使用。
_bottom-right_
![bottom-rigth.png](https://developer.mozilla.org/@api/deki/files/6140/=bottom-rigth.png)
可以是 {{ cssxref("&lt;length&gt;") }} 或者 {{cssxref("&lt;percentage&gt;")}}，表示边框右下角的圆角半径。只在三值或四值语法中使用。
_bottom-left_
![bottom-left.png](https://developer.mozilla.org/@api/deki/files/6139/=bottom-left.png)
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

border-top-left-radius:     1em 5em;
border-top-right-radius:    1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius:  1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* 等价于： */

border-top-left-radius:     4px 2px;
border-top-right-radius:    3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius:  3px 4px;
```

### Formal syntax

{{csssyntax}}

## 示例

```
  border: solid 10px;
  /* the border will curve into a 'D' */
  border-radius: 10px 40px 40px 10px;
```

```
  border: groove 1em red;
  border-radius: 2em;
```

```
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
```

```
  border: none;
  border-radius: 40px 10px;
```

```
  border: none;
  border-radius: 50%;
```

## 在线示例

示例 1 : <http://jsfiddle.net/Tripad/qnGKj/2/>

示例 2 : <http://jsfiddle.net/Tripad/qnGKj/3/>

示例 3 : <http://jsfiddle.net/Tripad/qnGKj/4/>

示例 4 : <http://jsfiddle.net/Tripad/qnGKj/5/>

示例 5 : <http://jsfiddle.net/Tripad/qnGKj/6/>

## 注意

- 在 Gecko 中，点状和虚线状圆角边框被渲染为了实线 {{ bug("382721") }}.
- 当表格元素的 {{ Cssxref("border-collapse") }} 为 `collapse` 时 `border-radius` 不会生效。
- 旧版本 WebKit 对于多重值有不同的处理方式，见下。

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 另请参阅

- 与 border-radius 相关的 CSS 属性：{{Cssxref("border-top-left-radius")}}, {{Cssxref("border-top-right-radius")}}, {{Cssxref("border-bottom-right-radius")}}, {{Cssxref("border-bottom-left-radius")}}
