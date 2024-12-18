---
title: transform-origin
slug: Web/CSS/transform-origin
---

{{CSSRef}}

**`transform-origin`** CSS 属性让你更改一个元素变形的原点。

{{EmbedInteractiveExample("pages/css/transform-origin.html")}}

转换起点是应用转换的点。例如，`rotate()`函数的转换原点是旋转中心。（这个属性的应用原理是先用这个属性的赋值转换该元素，进行变形，然后再用这个属性的值把元素转换回去）

默认的转换原点是 `center`

## 语法

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* Global values */
transform-origin: inherit;
transform-origin: initial;
transform-origin: unset;
```

`transform-origin`属性可以使用一个，两个或三个值来指定，其中每个值都表示一个偏移量。没有明确定义的偏移将重置为其对应的[初始值](/zh-CN/docs/Web/CSS/initial_value)。

如果定义了两个或更多值并且没有值的关键字，或者唯一使用的关键字是`center`，则第一个值表示水平偏移量，第二个值表示垂直偏移量。

- 一个值：

  - 必须是{{cssxref("&lt;length&gt;")}}，{{cssxref("&lt;percentage&gt;")}}，或 `left`, `center`, `right`, `top`, `bottom`关键字中的一个。

- 两个值：

  - 其中一个必须是{{cssxref("&lt;length&gt;")}}，{{cssxref("&lt;percentage&gt;")}}，或`left`, `center`, `right`关键字中的一个。
  - 另一个必须是{{cssxref("&lt;length&gt;")}}，{{cssxref("&lt;percentage&gt;")}}，或`top`, `center`, `bottom`关键字中的一个。

- 三个值：

  - 前两个值和只有两个值时的用法相同。
  - 第三个值必须是{{cssxref("&lt;length&gt;")}}。它始终代表 Z 轴偏移量。

### 值

- _x-offset_
  - : 定义变形中心距离盒模型的左侧的{{cssxref("&lt;length&gt;")}}或{{cssxref("&lt;percentage&gt;")}}偏移值。
- _offset-keyword_
  - : `left`，`right`，`top`，`bottom` 或 `center` 中之一，定义相对应的变形中心偏移。
- _y-offset_
  - : 定义变形中心距离盒模型的顶的{{cssxref("&lt;length&gt;")}}或{{cssxref("&lt;percentage&gt;")}}偏移值。
- _x-offset-keyword_
  - : `left`，`right` 或 `center` 中之一，定义相对应的变形中心偏移。
- _y-offset-keyword_
  - : `top`，`bottom` 或 `center` 中之一，定义相对应的变形中心偏移。
- _z-offset_
  - : 定义变形中心距离用户视线（z=0 处）的{{cssxref("&lt;length&gt;")}}（不能是{{cssxref("&lt;percentage&gt;")}}）偏移值。

关键字是方便的简写方法，等同于以下{{cssxref("&lt;percentage&gt;")}}值：

| keyword  | value  |
| -------- | ------ |
| `left`   | `0%`   |
| `center` | `50%`  |
| `right`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

### 形式语法

{{csssyntax}}

## 示例

<table class="standard-table">
  <tbody>
    <tr>
      <th>Code</th>
      <th>Sample</th>
    </tr>
    <tr>
      <td>
        <p><code>transform: none;</code></p>
      </td>
      <td>
        <div class="hidden" id="transform_none">
          <pre class="brush: html">
&#x3C;div class="box1">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box1 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: none;
-webkit-transform: none;
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_none', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>transform: rotate(30deg);</code></p>
      </td>
      <td>
        <div class="hidden" id="transform_rotate_only">
          <pre class="brush: html">
&#x3C;div class="box2">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box2 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: rotate(30deg);
-webkit-transform: rotate(30deg);
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_rotate_only', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>transform: rotate(30deg);<br />transform-origin: 0 0;</code>
        </p>
      </td>
      <td>
        <div class="hidden" id="transform_rotate">
          <pre class="brush: html">
&#x3C;div class="box3">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box3 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform-origin: 0 0;
-webkit-transform-origin: 0 0;
transform: rotate(30deg);
-webkit-transform: rotate(30deg);
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_rotate', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code
            >transform: rotate(30deg);<br />transform-origin: 100% 100%;</code
          >
        </p>
      </td>
      <td>
        <div class="hidden" id="transform_rotate_with_percentage">
          <pre class="brush: html">
&#x3C;div class="box4">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box4 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform-origin: 100% 100%;
-webkit-transform-origin: 100% 100%;
transform: rotate(30deg);
-webkit-transform: rotate(30deg);
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_rotate_with_percentage', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code
            >transform: rotate(30deg);<br />transform-origin: -1em -3em;</code
          >
        </p>
      </td>
      <td>
        <div class="hidden" id="transform_rotate_with_em">
          <pre class="brush: html">
&#x3C;div class="box5">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box5 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform-origin: -1em -3em;
-webkit-transform-origin: -1em -3em;
transform: rotate(30deg);
-webkit-transform: rotate(30deg);
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_rotate_with_em', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>transform: scale(1.7);</code></p>
      </td>
      <td>
        <div class="hidden" id="transform_scale_only">
          <pre class="brush: html">
&#x3C;div class="box6">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box6 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: scale(<code>1.7</code>);
-webkit-transform: scale(<code>1.7</code>);
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_scale_only', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>transform: scale(1.7);<br />transform-origin: 0 0;</code>
        </p>
      </td>
      <td>
        <div class="hidden" id="transform_scale_without_origin">
          <pre class="brush: html">
&#x3C;div class="box7">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box7 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: scale(<code>1.7</code>);
-webkit-transform: scale(<code>1.7</code>);
transform-origin: 0 0;
-webkit-transform-origin: 0 0;
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_scale_without_origin', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>transform: scale(1.7);<br />transform-origin: 100% -30%;</code>
        </p>
      </td>
      <td>
        <div class="hidden" id="transform_scale">
          <pre class="brush: html">
&#x3C;div class="box8">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box8 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: scale(<code>1.7</code>);
-webkit-transform: scale(<code>1.7</code>);
transform-origin: 100% -30%;
-webkit-transform-origin: 100% -30%;
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_scale', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code
            >transform: skewX(50deg);<br />transform-origin: 100% -30%;</code
          >
        </p>
      </td>
      <td>
        <div class="hidden" id="transform_skew_x">
          <pre class="brush: html">
&#x3C;div class="box9">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box9 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: skewX(50deg);
-webkit-transform: skewX(50deg);
transform-origin: 100% -30%;
-webkit-transform-origin: 100% -30%;
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_skew_x', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code
            >transform: skewY(50deg);<br />transform-origin: 100% -30%;</code
          >
        </p>
      </td>
      <td>
        <div class="hidden" id="transform_skew_y">
          <pre class="brush: html">
&#x3C;div class="box10">&#x26;nbsp;&#x3C;/div>
</pre
          >
          <pre class="brush: css">
.box10 {
margin: 0.5em;
width: 3em;
height: 3em;
border: solid 1px;
background-color: palegreen;
transform: skewY(50deg);
-webkit-transform: skewY(50deg);
transform-origin: 100% -30%;
-webkit-transform-origin: 100% -30%;
}
</pre
          >
        </div>
        <div>
          {{EmbedLiveSample('transform_skew_y', '', 120, '', '', 'no-button') }}
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

{{Cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 变形](/zh-CN/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
