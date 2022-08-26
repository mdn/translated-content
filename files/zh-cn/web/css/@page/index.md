---
title: '@page'
slug: Web/CSS/@page
---
{{CSSRef}}

@page 规则用于在打印文档时修改某些 CSS 属性。你不能用 @page 规则来修改所有的 CSS 属性，而是只能修改 margin,orphans,widow 和 page breaks of the document。对其他属性的修改是无效的。

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

`@page` 规则可以通过 CSS 对象模型接口的 {{domxref("CSSPageRule")}} 访问。

> **备注：** W3C 正在讨论如何处理和视图窗口有关的 {{cssxref("&lt;length&gt;")}} 的单位：`vh`、`vm`、`vmin` 和 `vmax`。目前，请不要在 `@page` 规则中使用他们。

## 语法

### 描述符

- [`size`](/zh-CN/docs/Web/CSS/@page/size)
  - : 指定页面盒模型所在的容器的大小和方向。一般情况下，因为一个页面盒模型被渲染到一面纸张上，所以这个属性也指示了目标纸张的大小。
- [`marks`](/zh-CN/docs/Web/CSS/@page/marks)
  - : 向文档添加剪切标记和/或注册标记。
- [`bleed`](/zh-CN/docs/Web/CSS/@page/bleed)
  - : 为页面框盒指定一个限制区域，超过这个区域的页面内容将被裁剪。

### 形式化语法

{{csssyntax}}

## 示例

请参考 `@page` 的各种[伪类](/zh-CN/docs/CSS/Pseudo-classes)的例子。

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}
- {{Cssxref(":recto")}} {{experimental_inline}}
- {{Cssxref(":verso")}} {{experimental_inline}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("css.at-rules.page")}}

## 参见

- See the [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) ticket in Bugzilla for tracking progress on the subject (page-based counters, etc.)
