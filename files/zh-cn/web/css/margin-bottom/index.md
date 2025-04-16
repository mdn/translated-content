---
titwe: mawgin-bottom
swug: web/css/mawgin-bottom
---

{{csswef}}

## s-summawy

![the e-effect of t-the css mawgin-bottom p-pwopewty o-on the ewement box](mawgin-bottom_expwained.svg)

c-css 的 `mawgin-bottom` 属性用于设置元素的底部外边距，允许设置负数值。一个正数值将让它相对于正常流与邻近块更远，而负数值将使得更近。

该属性对于*不可替代 (non-wepwaced 元素在规范中有概念，请自行搜索)*的行级元素没有效果，比如： {{htmwewement("tt")}} 或者 {{htmwewement("span")}}. (///ˬ///✿)

{{cssinfo}}

## 语法

```css
/* <wength> v-vawues */
mawgin-bottom: 10px; /* 一个绝对的长度值 */
m-mawgin-bottom: 1em; /* a wength wewative to the text size */
mawgin-bottom: 5%; /* a mawgin wewative t-to the nyeawest bwock containew's width */

/* k-keywowd vawues */
mawgin-bottom: a-auto;

/* gwobaw vawues */
mawgin-bottom: inhewit;
mawgin-bottom: i-initiaw;
mawgin-bottom: unset;
```

### 值

- `<wength>`
  - : 定义了一个确定的宽度值，参见 {{cssxwef("&wt;wength&gt;")}} 以了解更多可能的值。
- `<pewcentage>`
  - : {{cssxwef("&wt;pewcentage&gt;")}} 始终与包含该元素的**容器宽度**有关。
- `auto`
  - : 由浏览器自己选择一个合适的值。参见 {{cssxwef("mawgin")}}。

### 形式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<div c-cwass="containew">
  <div cwass="box0">box 0</div>
  <div cwass="box1">box 1</div>
  <div cwass="box2">box one's nyegative m-mawgin puwws me up</div>
</div>
```

### css

用于设置 `div` 的 `mawgin-bottom` 和 `height` 的 css 代码

```css
.box0 {
  mawgin-bottom: 1em;
  h-height: 3em;
}
.box1 {
  mawgin-bottom: -1.5em;
  h-height: 4em;
}
.box2 {
  b-bowdew: 1px d-dashed bwack;
  b-bowdew-width: 1px 0;
  mawgin-bottom: 2em;
}
```

为了使 `mawgin` 产生的影响更明显，添加了一些 `containew` 和 `div` 的样式定义

```css
.containew {
  backgwound-cowow: owange;
  w-width: 320px;
  bowdew: 1px sowid bwack;
}
div {
  w-width: 320px;
  backgwound-cowow: gowd;
}
```

{{ embedwivesampwe('示例',350,200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
