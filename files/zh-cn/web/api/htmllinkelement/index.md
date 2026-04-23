---
title: HTMLLinkElement
slug: Web/API/HTMLLinkElement
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{ APIRef("HTML DOM") }}

**`HTMLLinkElement`** 接口表示外部资源的来源地址以及这些资源与文档之间的关系（对应于 [`<link>`](/zh-CN/docs/Web/HTML/Reference/Elements/link) 元素；不要与 [`<a>`](/zh-CN/docs/Web/HTML/Reference/Elements/a) 混淆，后者由 [`HTMLAnchorElement`](/zh-CN/docs/Web/API/HTMLAnchorElement) 表示）。此对象继承 {{domxref("HTMLElement")}} 接口的所有属性和方法。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLLinkElement.as")}}
  - : 一个字符串，表示当 [`rel="preload"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload) 或 [`rel="modulepreload"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/modulepreload) 时，HTML 链接正在加载的内容类型。
- {{domxref("HTMLLinkElement.blocking")}}
  - : 一个字符串，指示在获取外部资源时应阻止某些操作。它反映 {{HTMLElement("link")}} 元素的 `blocking` 属性。
- {{domxref("HTMLLinkElement.crossOrigin")}}
  - : 一个字符串，对应于此链接元素的 CORS 设置。有关详细信息，参见 [CORS 设置属性](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)。
- {{domxref("HTMLLinkElement.disabled")}}
  - : 一个布尔值，表示链接是否被禁用；当前仅与样式表链接一起使用。
- {{domxref("HTMLLinkElement.fetchPriority")}}
  - : 一个可选的字符串，向浏览器提供关于如何相对于其他同类型资源优先获取预加载资源的提示。如果提供此值，它必须是允许的可能值之一：`high` 表示以较高优先级获取，`low` 表示以较低优先级获取，或者 `auto` 表示没有偏好（这是默认值）。
- {{domxref("HTMLLinkElement.href")}}
  - : 一个字符串，表示目标资源的 URI。
- {{domxref("HTMLLinkElement.hreflang")}}
  - : 一个字符串，表示链接资源的语言代码。
- {{domxref("HTMLLinkElement.integrity")}}
  - : 一个字符串，包含浏览器可以用来验证所获取资源在传输过程中未被意外篡改的内置元数据。它反映 {{HTMLElement("link")}} 元素的 `integrity` 属性。
- {{domxref("HTMLLinkElement.media")}}
  - : 一个字符串，表示资源适用的一个或多个媒体格式列表。它反映 {{HTMLElement("link")}} 元素的 `media` 属性。
- {{domxref("HTMLLinkElement.referrerPolicy")}}
  - : 一个字符串，反映 [`referrerpolicy`](/zh-CN/docs/Web/HTML/Reference/Elements/link#referrerpolicy) HTML 属性，用于指示应使用哪个来源地址。
- {{domxref("HTMLLinkElement.rel")}}
  - : 一个字符串，表示从文档到链接资源的前向关系。
- {{domxref("HTMLLinkElement.relList")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("DOMTokenList")}}，它反映 [`ref`](/zh-CN/docs/Web/HTML/Reference/Elements/link#ref) HTML 属性，表现为一系列标记的列表。
- {{domxref("HTMLLinkElement.sizes")}} {{ReadOnlyInline}}
  - : 一个 {{domxref("DOMTokenList")}}，它反映 [`sizes`](/zh-CN/docs/Web/HTML/Reference/Elements/link#sizes) HTML 属性，表现为一系列标记的列表。
- {{domxref("HTMLLinkElement.sheet")}} {{ReadOnlyInline}}
  - : 返回与给定元素相关联的 {{domxref("StyleSheet")}} 对象，如果没有则返回 `null`。
- {{domxref("HTMLLinkElement.type")}}
  - : 一个字符串，表示链接资源的 MIME 类型。

### 已废弃属性

- {{domxref("HTMLLinkElement.charset")}} {{deprecated_inline}}
  - : 一个字符串，表示目标资源的字符编码。
- {{domxref("HTMLLinkElement.rev")}} {{deprecated_inline}}
  - : 一个字符串，表示从资源到文档的反向链接关系。

    > [!NOTE]
    > 当前，W3C 的 HTML 5.2 规范指出 `rev` 属性已不再废弃，然而 WHATWG 的实时标准（living standard）仍然将其标记为废弃。在这一差异得到解决之前，你仍应认为它是废弃的。

- {{domxref("HTMLLinkElement.target")}} {{deprecated_inline}}
  - : 一个字符串，表示资源所适用的目标框架的名称。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("link")}}
