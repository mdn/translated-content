---
title: SVGElement
slug: Web/API/SVGElement
l10n:
  sourceCommit: c75fd1e241ed19f19400edb2765651949f35931f
---

{{APIRef("SVG")}}

与 SVG 语言中的元素直接对应的所有 SVG DOM 接口都派生自 `SVGElement` 接口。

{{InheritanceDiagram}}

## 实例属性

_也从 {{DOMxRef("Element")}} 接口继承属性。_

- {{DOMxRef("SVGElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : 表示元素的 {{SVGAttr("style")}} 属性声明的 {{DOMxRef("StylePropertyMap")}}。
- {{DOMxRef("HTMLElement.dataset")}} {{ReadOnlyInline}}
  - : 提供了命名数据属性的键/值对列表的 {{DOMxRef("DOMStringMap")}} 对象，这些数据属性与附加到元素上的[自定义数据属性](/zh-CN/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)相对应。这些属性也可以在 SVG 中使用 {{SVGAttr("data-*")}} 形式的属性来定义，其中 `*` 是数据对的关键名称。这就像 HTML 的 {{DOMxRef("HTMLElement.dataset")}} 属性和 HTML 的 [`data-*`](/zh-CN/docs/Web/HTML/Global_attributes/data-*) 全局属性一样。
- {{DOMxRef("SVGElement.className")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : 反映给定元素上 {{SVGAttr("class")}} 属性的 {{DOMxRef("SVGAnimatedString")}} 值；如果不存在 `class`，则为空字符串。该属性已被弃用，可能会在本规范的未来版本中删除。建议作者使用 {{DOMxRef("Element.classList")}} 代替。
- {{DOMxRef("SVGElement.nonce")}}
  - : 返回内容安全策略用于确定是否允许进行给定获取请求的密码学数字。
- {{DOMxRef("SVGElement.ownerSVGElement")}} {{ReadOnlyInline}}
  - : 指向最近祖先 {{SVGElement("svg")}} 元素的 {{DOMxRef("SVGSVGElement")}}。如果给定元素是最外层的 `<svg>` 元素，则为 `null`。
- {{DOMxRef("SVGElement.style")}}
  - : 表示元素的 {{SVGAttr("style")}} 属性声明的 {{DOMxRef("CSSStyleDeclaration")}}。
- {{DOMxRef("SVGElement.tabIndex")}}
  - : 元素在标签顺序中的位置。
- {{DOMxRef("SVGElement.viewportElement")}} {{ReadOnlyInline}}
  - : 建立当前视口的 {{DOMxRef("SVGElement")}} 元素。通常是最近的祖先 {{SVGElement("svg")}} 元素。如果给定元素是最外层的 `<svg>` 元素，则为 `null`。

## 实例方法

_此接口本身没有方法，但从 {{domxref("Element")}} 继承方法。_

## 事件

使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 监听这些事件，或将事件监听器分配给等效的 `on...` 处理器属性。

- [`abort`](/zh-CN/docs/Web/API/SVGElement/abort_event)
  - : 当页面在 SVG 元素完全加载之前停止加载时触发。
- [`error`](/zh-CN/docs/Web/API/SVGElement/error_event)
  - : 当 SVG 元素无法正常加载或脚本执行过程中发生错误时触发。
- [`load`](/zh-CN/docs/Web/API/SVGElement/load_event)
  - : 在浏览器中加载 `SVGElement` 时触发。
- [`resize`](/zh-CN/docs/Web/API/SVGElement/resize_event)
  - : 在调整 SVG 文档大小时触发。
- [`scroll`](/zh-CN/docs/Web/API/SVGElement/scroll_event)
  - : 当 SVG 文档视图沿 X 轴和/或 Y 轴移动时触发。
- [`unload`](/zh-CN/docs/Web/API/SVGElement/unload_event)
  - : 当 DOM 实现从窗口或框架中移除 SVG 文档时触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML [`data-*`](/zh-CN/docs/Web/HTML/Global_attributes/data-*) 属性
- SVG {{SVGAttr("data-*")}} 属性
- [在 HTML 中使用自定义数据属性](/zh-CN/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
