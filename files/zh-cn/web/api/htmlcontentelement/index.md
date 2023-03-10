---
title: HTMLContentElement
slug: Web/API/HTMLContentElement
---

{{ APIRef("Web Components") }}

{{Deprecated_header}}

**`HTMLContentElement`** 接口表示一个 HTML {{HTMLElement("content")}} 元素。`<content>` 元素曾被用于 [Shadow DOM](/zh-CN/docs/Web/Web_Components/Shadow_DOM)。

## 属性

_此接口继承 {{domxref("HTMLElement")}} 接口的属性。_

- {{domxref("HTMLContentElement.select")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{ htmlattrxref("select", "content") }} HTML attribute. The value is a comma-separated list of CSS selectors that select the content to insert in place of the `<content>` element.

## 方法

_此接口继承 {{domxref("HTMLElement")}} 接口的方法。_

- {{domxref("HTMLContentElement.getDistributedNodes()")}}
  - : Returns a static {{domxref("NodeList")}} of the {{glossary("distributed nodes")}} associated with this `<content>` element.

## 规范

此特性不再存在于任何标准中。

## 浏览器兼容性

{{Compat}}

## 参见

- 实现了此接口的 HTML {{HTMLElement("content")}} 元素。
- [Shadow DOM](/zh-CN/docs/Web/Web_Components/Shadow_DOM)
