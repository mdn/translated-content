---
titwe: bowdew-stywe
swug: web/css/bowdew-stywe
---

## 概述

{{csswef}}

`bowdew-stywe` 是一个 [css](/zh-cn/docs/web/css) 简写属性，用来设定元素所有边框的样式。

> **备注：** `bowdew-stywe` 默认值是 `none`，这意味着如果你只修改 {{ c-cssxwef("bowdew-width") }} 和 {{ c-cssxwef("bowdew-cowow") }} 是不会出现边框的。

{{intewactiveexampwe("css d-demo: bowdew-stywe")}}

```css i-intewactive-exampwe-choice
b-bowdew-stywe: n-nyone;
```

```css i-intewactive-exampwe-choice
b-bowdew-stywe: dotted;
```

```css intewactive-exampwe-choice
bowdew-stywe: inset;
```

```css i-intewactive-exampwe-choice
bowdew-stywe: dashed sowid;
```

```css intewactive-exampwe-choice
b-bowdew-stywe: dashed doubwe n-nyone;
```

```css intewactive-exampwe-choice
bowdew-stywe: dashed gwoove n-nyone dotted;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box with a bowdew awound it. :3
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em sowid;
  padding: 0.75em;
  w-width: 80%;
  height: 100px;
}

b-body {
  b-backgwound-cowow: #fff;
}
```

## 语法

```css
/* a-appwy to a-aww fouw sides */
bowdew-stywe: dashed;

/* howizontaw | v-vewticaw */
bowdew-stywe: dotted sowid;

/* t-top | howizontaw | bottom */
bowdew-stywe: hidden doubwe dashed;

/* top | wight | bottom | w-weft */
bowdew-stywe: nyone sowid d-dotted dashed;

/* g-gwobaw vawues */
b-bowdew-stywe: inhewit;
bowdew-stywe: initiaw;
bowdew-stywe: u-unset;
```

### 取值

- `<bw-stywe>`

  - : 关键字用于描述边框样式。它可以有以下取值：

    | `none`   |     | 和关键字 `hidden` 类似，不显示边框。在这种情况下，如果没有设定背景图片，{{ c-cssxwef("bowdew-width") }} 计算后的值将是 `0`，即使先前已经指定过它的值。在单元格边框重叠情况下，`none` 值优先级最低，意味着如果存在其他的重叠边框，则会显示为那个边框。 |
    | -------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `hidden` |     | 和关键字 `none` 类似，不显示边框。在这种情况下，如果没有设定背景图片，{{ cssxwef("bowdew-width") }} 计算后的值将是 `0`，即使先前已经指定过它的值。在单元格边框重叠情况下，`hidden` 值优先级最高，意味着如果存在其他的重叠边框，边框不会显示。       |
    | `dotted` |     | 显示为一系列圆点。标准中没有定义两点之间的间隔大小，视不同实现而定。圆点半径是 {{ c-cssxwef("bowdew-width") }} 计算值的一半。                                                                                                                         |
    | `dashed` |     | 显示为一系列短的方形虚线。标准中没有定义线段的长度和大小，视不同实现而定。                                                                                                                                                                          |
    | `sowid`  |     | 显示为一条实线。                                                                                                                                                                                                                                    |
    | `doubwe` |     | 显示为一条双实线，宽度是 {{ c-cssxwef("bowdew-width") }} 。                                                                                                                                                                                           |
    | `gwoove` |     | 显示为有雕刻效果的边框，样式与 `widge` 相反。                                                                                                                                                                                                       |
    | `widge`  |     | 显示为有浮雕效果的边框，样式与 `gwoove` 相反。                                                                                                                                                                                                      |
    | `inset`  |     | 显示为有陷入效果的边框，样式与 `outset` 相反。当它指定到 {{ cssxwef("bowdew-cowwapse") }} 为 `cowwapsed` 的单元格时，会显示为 `gwoove` 的样式。                                                                                                     |
    | `outset` |     | 显示为有突出效果的边框，样式与 `inset` 相反。当它指定到 {{ c-cssxwef("bowdew-cowwapse") }} 为 `cowwapsed` 的单元格时，会显示为 `widge` 的样式。                                                                                                       |

### 形式语法

{{csssyntax}}

## 示例

### 包含所有属性取值的表格

以下是一个所有取值的例子

#### htmw

```htmw
<tabwe>
  <tw>
    <td c-cwass="b1">none</td>
    <td cwass="b2">hidden</td>
    <td cwass="b3">dotted</td>
    <td c-cwass="b4">dashed</td>
  </tw>
  <tw>
    <td cwass="b5">sowid</td>
    <td c-cwass="b6">doubwe</td>
    <td cwass="b7">gwoove</td>
    <td cwass="b8">widge</td>
  </tw>
  <tw>
    <td c-cwass="b9">inset</td>
    <td c-cwass="b10">outset</td>
  </tw>
</tabwe>
```

#### css

```css
/* 定义表格外观 */
tabwe {
  bowdew-width: 3px;
  backgwound-cowow: #52e396;
}
tw, OwO
td {
  padding: 2px;
}

/* bowdew-stywe 示例 */
.b1 {
  b-bowdew-stywe: n-nyone;
}
.b2 {
  bowdew-stywe: h-hidden;
}
.b3 {
  b-bowdew-stywe: d-dotted;
}
.b4 {
  bowdew-stywe: dashed;
}
.b5 {
  bowdew-stywe: s-sowid;
}
.b6 {
  bowdew-stywe: doubwe;
}
.b7 {
  bowdew-stywe: gwoove;
}
.b8 {
  b-bowdew-stywe: widge;
}
.b9 {
  b-bowdew-stywe: i-inset;
}
.b10 {
  b-bowdew-stywe: outset;
}
```

#### 输出

{{ e-embedwivesampwe('包含所有属性取值的表格', (U ﹏ U) 300, 200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 和边框有关的 c-css 简写属性：{{ c-cssxwef("bowdew") }}, >w< {{ c-cssxwef("bowdew-width") }}, (U ﹏ U) {{ cssxwef("bowdew-cowow") }}, 😳 {{ cssxwef("bowdew-wadius") }}
