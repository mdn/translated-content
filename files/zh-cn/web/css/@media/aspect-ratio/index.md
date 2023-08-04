---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
---

{{CSSRef}}

**`aspect-ratio`** [CSS](/zh-CN/docs/CSS) [媒体属性](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#Media_features) 可以用来测试 {{glossary("viewport")}} 的宽高比。

## 语法

宽高比属性被指定为{{cssxref("&lt;ratio&gt;")}}值来代表 viewport 的宽高比。其为一个范围，这意味着你可以使用 **`min-aspect-ratio`** 和 **`max-aspect-ratio`** 分别查询最小和最大的值。

## 示例

下面的例子包含一个 {{htmlElement("iframe")}}，拥有它自身的 viewport。调整的 `<iframe>` 宽高来观察 `aspect-ratio` 的变化。

### HTML

```html
<div id="inner">
  Watch this element as you resize your viewport's width and height.
</div>
```

### CSS

```css
/* 最小宽高比 */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9af; /* blue */
  }
}

/* 最大宽高比 */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9ff; /* cyan */
  }
}

/* 明确的宽高比，放在最下部防止同时满足条件时的覆盖*/
@media (aspect-ratio: 1/1) {
  div {
    background: #f9a; /* red */
  }
}
```

### 结果

{{ EmbedLiveSample('示例', '300px', '400px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
