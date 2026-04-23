---
title: <display-internal>
slug: Web/CSS/Reference/Values/display-internal
---

一些布局模型，例如 `table` 和 `ruby`具有复杂的内部结构，具有他们的孩子和后代可以填充的几个不同的角色。此页面定义了那些“内部”显示值，这些值仅在该特定布局模式中具有意义。

## 语法

除非另有说明，否则使用这些显示值的元素的内部显示类型和外部显示类型都将设置为给定的关键字。

- `table-row-group`
  - : 这些元素的行为类似于[`<tbody>`](/zh-CN/docs/Web/HTML/Reference/Elements/tbody)HTML 元素。
- `table-header-group`
  - : 这些元素的行为类似于[`<thead>`](/zh-CN/docs/Web/HTML/Reference/Elements/thead)HTML 元素。
- `table-footer-group`
  - : 这些元素的行为类似于[`<tfoot>`](/zh-CN/docs/Web/HTML/Reference/Elements/tfoot)HTML 元素。
- `table-row`
  - : 这些元素的行为类似于[`<tr>`](/zh-CN/docs/Web/HTML/Reference/Elements/tr)HTML 元素。
- `table-cell`
  - : 这些元素的行为类似于[`<td>`](/zh-CN/docs/Web/HTML/Reference/Elements/td)HTML 元素。
- `table-column-group`
  - : 这些元素的行为类似于[`<colgroup>`](/zh-CN/docs/Web/HTML/Reference/Elements/colgroup)HTML 元素。
- `table-column`
  - : 这些元素的行为类似于[`<col>`](/zh-CN/docs/Web/HTML/Reference/Elements/col)HTML 元素。
- `table-caption`
  - : 这些元素的行为类似于[`<caption>`](/zh-CN/docs/Web/HTML/Reference/Elements/caption)HTML 元素。
- `ruby-base` {{Experimental_Inline}}
  - : 这些元素的行为类似于[`<rb>`](/zh-CN/docs/Web/HTML/Reference/Elements/rb)HTML 元素。
- `ruby-text` {{Experimental_Inline}}
  - : 这些元素的行为类似于[`<rt>`](/zh-CN/docs/Web/HTML/Reference/Elements/rt)HTML 元素。
- `ruby-base-container` {{Experimental_Inline}}
  - : 这些元素的行为类似于[`<rbc>`](/zh-CN/docs/Web/HTML/Element/rbc)匿名框生成的 HTML 元素。
- `ruby-text-container` {{Experimental_Inline}}
  - : 这些元素的行为类似于[`<rtc>`](/zh-CN/docs/Web/HTML/Reference/Elements/rtc)HTML 元素。

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("display")}}
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
