---
title: "-webkit-mask-attachment"
slug: Web/CSS/-webkit-mask-attachment
---

{{CSSRef}}{{Non-standard_header}}

如果使用了 {{Cssxref("-webkit-mask-image")}}, `-webkit-mask-attachment` 将指定蒙版在视口的位置是固定的，还是同包含块一起滚动的。

```css
/* 关键字 */
-webkit-mask-attachment: scroll;
-webkit-mask-attachment: fixed;
-webkit-mask-attachment: local;

/* 多个值 */
-webkit-mask-attachment: scroll, local;
-webkit-mask-attachment: fixed, local, scroll;

/* 全局值 */
-webkit-mask-attachment: inherit;
-webkit-mask-attachment: initial;
-webkit-mask-attachment: unset;
```

{{cssinfo}}

## 语法

### 可用的值

- scroll
  - : 使用 `scroll` 时，蒙版在视口中同包含它的块一起滚动。
- fixed
  - : 使用 `fixed` 时，蒙版不会同包含它的元素一起滚动，而是在视口中固定不动。

### 使用语法

{{csssyntax}}

## 示例

```css
body {
  -webkit-mask-image: url("images/mask.png");
  -webkit-mask-attachment: fixed;
}
```

## 浏览器兼容性

{{Compat}}

## 另见

{{cssxref("-webkit-mask")}}, {{cssxref("-webkit-mask-clip")}}, {{cssxref("-webkit-mask-box-image")}}, {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-image")}}, {{cssxref("-webkit-mask-composite")}}, {{cssxref("-webkit-mask-repeat")}}
