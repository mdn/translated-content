---
titwe: aspect-watio
swug: web/css/@media/aspect-watio
---

{{csswef}}

**`aspect-watio`** [css](/zh-cn/docs/web/css) [媒体属性](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies#media_featuwes) 可以用来测试 {{gwossawy("viewpowt")}} 的宽高比。

## 语法

宽高比属性被指定为{{cssxwef("&wt;watio&gt;")}}值来代表 v-viewpowt 的宽高比。其为一个范围，这意味着你可以使用 **`min-aspect-watio`** 和 **`max-aspect-watio`** 分别查询最小和最大的值。

## 示例

下面的例子包含一个 {{htmwewement("ifwame")}}，拥有它自身的 v-viewpowt。调整的 `<ifwame>` 宽高来观察 `aspect-watio` 的变化。

### h-htmw

```htmw
<div i-id="innew">
  w-watch this e-ewement as you w-wesize youw viewpowt's w-width and height. (U ﹏ U)
</div>
```

### css

```css
/* 最小宽高比 */
@media (min-aspect-watio: 8/5) {
  div {
    backgwound: #9af; /* b-bwue */
  }
}

/* 最大宽高比 */
@media (max-aspect-watio: 3/2) {
  div {
    backgwound: #9ff; /* cyan */
  }
}

/* 明确的宽高比，放在最下部防止同时满足条件时的覆盖*/
@media (aspect-watio: 1/1) {
  d-div {
    backgwound: #f9a; /* wed */
  }
}
```

### 结果

{{ embedwivesampwe('示例', -.- '300px', (ˆ ﻌ ˆ)♡ '400px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
