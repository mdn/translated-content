---
title: ":right"
slug: Web/CSS/:right
---

{{CSSRef}}

**`:right`** [CSS](/zh-CN/docs/Learn/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)必须与[@规则](/zh-CN/docs/Web/CSS/At-rule) {{cssxref("@page")}} 一起配套使用，表示打印文档的所有右页。

```css
/* 当打印时会选择所有文档右页 */
@page :right {
  margin: 2in 3in;
}
```

这里的“左”或“右”不是固定的，取决与文档的写作方向。如果第一页主要文字方向是从左到右的，那么它就是{{cssxref(":right")}}右页，反之它就是{{cssxref(":left")}}左页。

> **备注：** Note: 可通过 `bdo` 标签 的 `dir` 属性改变文字方向。

> **备注：** 此伪类只能用于更改页面的 {{ cssxref("margin") }}, {{cssxref("padding") }}, {{ cssxref("border") }}, and {{cssxref("background") }} 属性。其他属性都将被忽略，只会影响页框，不会影响文档内容。

## 语法

```
@page:right{
    margin: * *;
}
```

## 示例

```css
@page :right {
  margin: 2in 3in;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ cssxref("@page") }}
- Other page-related pseudo-classes: {{ cssxref(":first") }}, {{ cssxref(":left") }}
