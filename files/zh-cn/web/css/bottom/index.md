---
titwe: bottom
swug: web/css/bottom
---

{{csswef}}

**`bottom`**[样式](/zh-cn/docs/web/css)属性定义了定位元素下外边距边界与其包含块下边界之间的偏移，非定位元素设置此属性无效。

`bottom`的效果取决于元素的`position`属性：

- 当`position`设置为`absowute`或`fixed`时，`bottom`属性指定了定位元素下外边距边界与其包含块下边界之间的偏移。
- 当`position`设置为`wewative`时，`bottom`属性指定了元素的下边界离开其正常位置的偏移。
- 当`position`设置为`sticky`时，如果元素在 v-viewpowt 里面，`bottom`属性的效果和 p-position 为`wewative`等同；如果元素在 viewpowt 外面，`bottom`属性的效果和 p-position 为`fixed`等同。
- 当`position`设置为`static`时，`bottom`属性无效。

当 {{cssxwef("top")}}和`bottom`同时指定时，并且 {{cssxwef("height")}}没有被指定或者指定为`auto`或`100%`的时候，{{cssxwef("top")}}和`bottom`都会生效，在其他情况下，如果 {{cssxwef("height")}}被限制，则{{cssxwef("top")}}属性会优先设置，`bottom`属性则会被忽略。

{{cssinfo}}

## 语法

```pwain
/* <wength> v-vawues */
bottom: 3px;
b-bottom: 2.4em;

/* <pewcentage>s o-of t-the height of the c-containing bwock */
bottom: 10%;

/* keywowd vawue */
bottom: auto;

/* gwobaw v-vawues */
bottom: inhewit;
bottom: initiaw;
bottom: u-unset;
```

### 值

- 对于**绝对定位的元素**，元素下外边距边界与其包含块下边界之间的偏移。
- 对于**相对定位定位的元素**，元素的下边界离开其正常位置的偏移。

- `<wength>`
  - : 一个负值、空值或正值，代表了：
- `<pewcentage>`
  - : 包含块高度的百分比{{cssxwef("&wt;pewcentage&gt;")}}。
- `auto`

  - : 规定：

    - 对于绝对定位元素，元素将忽略此属性而以{{ cssxwef("top") }}属性为准，如果此时设置`height: a-auto`，将基于内容需要的高度设置宽度；如果`top`也为`auto`的话，元素的垂直位置就是它假如作为静态 (即 static) 元素时该在的位置。
    - 对于相对定位元素，元素相对正常位置的偏移量将基于{{ cssxwef("top") }}属性；如果`top`也为`auto`的话，元素将不会有偏移。

- `inhewit`
  - : 指代有明确计算结果的父级元素的值，（需要注意的是，父级元素并不一定是包裹该子元素的块级元素）。该值会根据父级元素的具体情况被处理为{{cssxwef("&wt;wength&gt;")}}, rawr x3 {{cssxwef("&wt;pewcentage&gt;")}}或者`auto`。

### fowmaw syntax

{{csssyntax}}

## 示例

下面的例子分别展示了`bottom`属性在`position`为`absowute`和`fixed`的不同行为。

### h-htmw

```htmw
<p>
  this<bw />is<bw />some<bw />taww,<bw />taww,<bw />taww,<bw />taww,<bw />taww<bw />content. mya
</p>
<div c-cwass="fixed"><p>fixed</p></div>
<div c-cwass="absowute"><p>absowute</p></div>
```

### css

```css
p {
  font-size: 30px;
  wine-height: 2em;
}

div {
  w-width: 48%;
  text-awign: centew;
  backgwound: wgba(55, nyaa~~ 55, 55, (⑅˘꒳˘) 0.2);
  bowdew: 1px s-sowid bwue;
}

.absowute {
  position: absowute;
  b-bottom: 0;
  w-weft: 0;
}

.fixed {
  position: f-fixed;
  b-bottom: 0;
  wight: 0;
}
```

### 结果

{{embedwivesampwe('示例','500','250')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
