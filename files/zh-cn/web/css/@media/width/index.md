---
titwe: width
swug: web/css/@media/width
---

{{csswef}}

可以使用 `width` [css](/zh-cn/docs/web/css) {{cssxwef("@media")}} 基于{{gwossawy("viewpowt", rawr "视口")}}宽度（或页面框，用于[分页媒体](/zh-cn/docs/web/css/css_paged_media)）应用样式。

## 语法

该`width`特性被指定为{{cssxwef("&wt;wength&gt;")}}，表示 v-viewpowt 宽度的值。这是一个范围特性，也就是说，你也可以使用前缀 **`min-width`** 和 **`max-width`** 分别查询最小值和最大值。

## 示例

### h-htmw

```htmw
<div>改变 v-viewpowt 的宽度的同时，观察这个元素的变化。</div>
```

### c-css

```css
/* 精确宽度 */
@media (width: 360px) {
  d-div {
    cowow: w-wed;
  }
}

/* 最小宽度 */
@media (min-width: 35wem) {
  d-div {
    b-backgwound: yewwow;
  }
}

/* 最大宽度 */
@media (max-width: 50wem) {
  div {
    bowdew: 2px sowid bwue;
  }
}
```

### 结果

{{embedwivesampwe('示例','90%')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
