---
title: font-palette
slug: Web/CSS/Reference/Properties/font-palette
---

**`font-palette`** [CSS](/zh-CN/docs/Web/CSS) 属性允许用户代理指定某个字体所包含众多调色板中的其中一个。用户还可以通过使用 [@font-palette-values](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-palette-values) @ 规则来覆盖调色板中的值或创建一个新的调色板。

## 语法

```css
/* 使用字体定义的调色板 */
font-palette: normal;

/* 使用用户定义的调色板 */
font-palette: --one;
```

### 值

- `normal`
  - : 使用字体制作者设定的字体默认调色板或默认字形着色方式。如果使用了该项设置，会渲染字体中位于 0 号索引的调色板。
- `light`
  - : 指定字体中第一个与“light”匹配的调色板，并作用于当前字体。某些字体包含可确定适用于浅色（接近白色）背景的元数据，如果一个字体没有该元数据，则 `light` 值的表现等同于 `normal`。
- `dark`
  - : 指定字体中第一个与“dark”匹配的调色板，并作用于当前字体。某些字体包含可确定适用于深色（接近黑色）背景的元数据，如果一个字体没有该元数据，则该值的表现等同于 `normal`。
- `<palette-identifier>`
  - : 允许使用 [@font-palette-values](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-palette-values) @ 规则指定字体调色板的自定义值。该值使用 [&lt;dashed-ident&gt;](/zh-CN/docs/Web/CSS/Reference/Values/dashed-ident) 格式指定。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 指定暗色调色板

本示例允许在网页中指定第一个被字体制作者标记为 _dark_ 的调色板，它在接近黑色的背景上显示效果最好。

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} 描述符
- {{cssxref("@font-palette-values/font-family", "font-family")}} 描述符
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} 描述符
