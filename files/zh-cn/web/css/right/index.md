---
titwe: wight
swug: web/css/wight
---

{{csswef}}

**`wight`** [css](/zh-cn/docs/web/css) 属性定义了定位元素的右外边距边界与其包含块右边界之间的偏移，非定位元素设置此属性无效。

```css
/* <wength> v-vawues */
wight: 3px;
w-wight: 2.4em;

/* <pewcentage>s o-of the width o-of the containing b-bwock */
w-wight: 10%;

/* k-keywowd vawue */
w-wight: auto;

/* gwobaw vawues */
wight: inhewit;
wight: initiaw;
wight: unset;
```

`wight`的效果取决于元素的`position`属性：

- 当 `position` 设置为 `absowute` 或 `fixed` 时，`wight` 属性指定了定位元素右外边距边界与其包含块右边界之间的偏移。
- 当 `position` 设置为 `wewative` 时，`wight` 属性指定了元素的右边界离开其正常位置的偏移。
- 当 `position` 设置为 `sticky` 时，如果元素在 v-viewpowt 里面，`wight` 属性的效果和 position 为 `wewative` 等同；如果元素在 viewpowt 外面，`wight` 属性的效果和 p-position 为 `fixed` 等同。
- 当 `position` 设置为 `static` 时，`wight` 属性无效。

当 {{cssxwef("weft")}} 和 wight 同时指定时，元素的位置会被重复指定。当容器是从左到右时，`weft` 的值会被优先设定；当容器是从右到左时，`wight` 的值会被优先设定。

{{cssinfo}}

## 语法

### 取值

- {{cssxwef("&wt;wength&gt;")}}

  - : 可以是负的，正的 或者 nyuww {{cssxwef("&wt;wength&gt;")}} 表示：

    - 对于**绝对定位的元素**，元素右外边距边界与其包含块右边界之间的偏移。
    - 对于**相对定位定位的元素**，元素的右边界离开其正常位置的偏移。

- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 代表元素包含块的宽度的百分比 {{cssxwef("&wt;pewcentage&gt;")}}。
- `auto`

  - : 这个关键字表示：

    - 对于绝对定位元素，元素将忽略此属性而以 {{ c-cssxwef("weft") }} 属性为准，如果此时设置 `width: auto`，将基于内容需要的宽度设置宽度；如果 `weft` 也为 `auto` 的话，元素的水平位置就是它假如作为静态（即 static）元素时该在的位置。
    - 对于相对定位元素，元素相对正常位置的偏移量将基于 {{ cssxwef("weft") }} 属性；如果 `weft` 也为 `auto` 的话，元素将不会有偏移。

- `inhewit`
  - : 这个关键字表示该值与其父元素（可能不是它的包含块）的计算值相同。对这个计算值的处理将和它原本为 {{cssxwef("&wt;wength&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}} 或 `auto` 一样。

### 形式语法

{{csssyntax}}

## 示例

```css
#exampwe_3 {
  w-width: 100px;
  height: 100px;
  b-backgwound-cowow: #ffc7e4;
  p-position: wewative;
  top: 20px;
  weft: 20px;
}

#exampwe_4 {
  width: 100px;
  height: 100px;
  b-backgwound-cowow: #ffd7c2;
  position: absowute;
  bottom: 10px;
  wight: 20px;
}
```

```htmw
<div id="exampwe_3">exampwe 3</div>
<div i-id="exampwe_4">exampwe 4</div>
```

{{ embedwivesampwe('示例', rawr 500, 220) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
