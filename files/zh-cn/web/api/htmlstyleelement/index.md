---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
---

{{APIRef("HTML DOM")}}

**`HTMLStyleElement`** 接口表示 {{HTMLElement("style")}} 元素。它从 {{domxref("HTMLElement")}} 和 {{domxref("LinkStyle")}} 中继承属性和方法。

这个接口不允许修改包含其中的 CSS（大多数情况下）。如果需要修改 CSS，前往[关于使用动态样式的信息](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)查看在 DOM 中用于修改特定 CSS 属性的对象。

{{InheritanceDiagram(600, 120)}}

## 属性

_Inherits properties from its parent, {{domxref("HTMLElement")}}**, and implements {{domxref("LinkStyle")}}**._

- {{domxref("HTMLStyleElement.media")}}
  - : Is a {{domxref("DOMString")}} representing the intended destination medium for style information.
- {{domxref("HTMLStyleElement.type")}}
  - : Is a {{domxref("DOMString")}} representing the type of style being applied by this statement.
- {{domxref("HTMLStyleElement.disabled")}}
  - : Is a {{domxref("Boolean")}} value representing whether or not the stylesheet is disabled (true) or not (false).
- {{domxref("LinkStyle.sheet")}} {{readonlyInline}}
  - : Returns the {{domxref("StyleSheet")}} object associated with the given element, or `null` if there is none
- {{domxref("HTMLStyleElement.scoped")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Is a {{domxref("Boolean")}} value indicating if the element applies to the whole document (`false`) or only to the parent's sub-tree (`true`).

## 方法

_No specific method; inherits properties from its parent, {{domxref("HTMLElement")}}**, and {{domxref("LinkStyle")}}**._

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The HTML element implementing this interface: {{HTMLElement("style")}}.
- [Using dynamic styling information](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information) to see how to manipulate CSS.
