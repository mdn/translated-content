---
title: "@page"
slug: Web/CSS/@page
---

{{CSSRef}}

@page 规则用于在打印文档时修改某些 CSS 属性。

## 语法

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

### 描述符

- [`page-orientation`](/zh-CN/docs/Web/CSS/@page/page-orientation)
  - : 指定文档在页面上的方向，允许它进行正常的布局和格式化或者也可以将其向左或向右旋转。
- [`size`](/zh-CN/docs/Web/CSS/@page/size)
  - : 指定页面框包含块的目标大小和方向。通常情况下，一个页面框渲染到一页纸上时，它也会指定目标页的大小。

## 描述

你不能用 @page 规则来修改所有的 CSS 属性。你只能修改文档的 margin、orphans、widows 和分页符。试图对其他属性的修改都是无效的。

`@page` 规则可以通过 CSS 对象模型接口的 {{domxref("CSSPageRule")}} 访问。

> **备注：** W3C 正在讨论如何处理和视图窗口有关的 {{cssxref("&lt;length&gt;")}} 的单位：`vh`、`vm`、`vmin` 和 `vmax`。目前，请不要在 `@page` 规则中使用他们。

### 形式语法

```
@page <page-selector-list> {
  <page-body>
}
```

## 示例

### @page 伪类示例

请参考 `@page` 的各种[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)的例子。

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}
- {{Cssxref(":recto")}} {{experimental_inline}}
- {{Cssxref(":verso")}} {{experimental_inline}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 参阅 Bugzilla 中的 [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) 工单，以追踪该主题（例如：基于页面的计数器，等等）的进展
