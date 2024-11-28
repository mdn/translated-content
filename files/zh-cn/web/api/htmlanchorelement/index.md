---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement`** 接口表示超链接元素，并为操控此类元素的布局和表现提供特殊的属性和方法（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用）。此接口对应于 [`<a>`](/zh-CN/docs/Web/HTML/Element/a) 元素；不要与由 [`HTMLLinkElement`](/zh-CN/docs/Web/API/HTMLLinkElement) 表示的 [`<link>`](/zh-CN/docs/Web/HTML/Element/link) 元素相混淆。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLAnchorElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : 以编程方式获取和设置 {{htmlelement("a")}} 元素上的 [`attributionsrc`](/zh-CN/docs/Web/HTML/Element/a#attributionsrc) 属性，反映该属性的值。`attributionsrc` 指定你希望浏览器发送一个 {{httpheader("Attribution-Reporting-Eligible")}} 标头。在服务器端，这用于触发在响应中发送 {{httpheader("Attribution-Reporting-Register-Source")}} 标头，以注册基于导航的归因来源。
- {{domxref("HTMLAnchorElement.download")}}
  - : 一个字符串，指示链接资源旨在被下载而不是在浏览器中显示。该值表示建议的文件名。如果名称不是底层操作系统的有效文件名，浏览器将对其进行适应调整。
- {{domxref("HTMLAnchorElement.hash")}}
  - : 一个字符串，表示引用 URL 中的片段标识符，如果存在，则包括前导井号 `#`。
- {{domxref("HTMLAnchorElement.host")}}
  - : 一个字符串，表示引用 URL 中的主机名和端口号（如果不是默认端口）。
- {{domxref("HTMLAnchorElement.hostname")}}
  - : 一个字符串，表示引用 URL 中的主机名。
- {{domxref("HTMLAnchorElement.href")}}
  - : 一个字符串，是相对于文档解析 [`href`](/zh-CN/docs/Web/HTML/Element/a#href) HTML 属性的结果，包含链接资源的有效 URL。
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : 一个字符串，反映 [`hreflang`](/zh-CN/docs/Web/HTML/Element/a#hreflang) HTML 属性，指示链接资源的语言。
- {{domxref("HTMLAnchorElement.origin")}} {{ReadOnlyInline}}
  - : 返回一个字符串，包含 URL 的来源，即其协议、域名和端口。
- {{domxref("HTMLAnchorElement.password")}}
  - : 一个字符串，包含域名前指定的密码。
- {{domxref("HTMLAnchorElement.pathname")}}
  - : 一个字符串，包含一个初始的 `/`，后跟 URL 的路径，不包括查询字符串或片段。
- {{domxref("HTMLAnchorElement.ping")}}
  - : 一个由空格分隔的 URL 列表。当链接被点击时，浏览器将向这些 URL 发送带有 PING 正文的 {{HTTPMethod("POST")}} 请求。
- {{domxref("HTMLAnchorElement.port")}}
  - : 一个字符串，表示引用 URL 中的端口组件（如果存在）。
- {{domxref("HTMLAnchorElement.protocol")}}
  - : 一个字符串，表示引用 URL 中的协议组件，包括尾随的冒号（`:`）。
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
  - : 一个字符串，反映 [`referrerpolicy`](/zh-CN/docs/Web/HTML/Element/a#referrerpolicy) HTML 属性，指示应使用哪个来源地址。
- {{domxref("HTMLAnchorElement.rel")}}
  - : 一个字符串，反映 [`rel`](/zh-CN/docs/Web/HTML/Element/a#rel) HTML 属性，指定目标对象与链接对象的关系。
- {{domxref("HTMLAnchorElement.relList")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("DOMTokenList")}}（以标记列表的形式），反映 [`rel`](/zh-CN/docs/Web/HTML/Element/a#rel) HTML 属性。
- {{domxref("HTMLAnchorElement.search")}}
  - : 一个字符串，表示引用 URL 中的搜索元素，如果存在，则包括前导问号 `?`。
- {{domxref("HTMLAnchorElement.target")}}
  - : 一个字符串，反映 [`target`](/zh-CN/docs/Web/HTML/Element/a#target) HTML 属性，指示链接资源应在哪里显示。
- {{domxref("HTMLAnchorElement.text")}}
  - : 一个字符串，是 {{domxref("Node.textContent")}} 属性的同义词。
- {{domxref("HTMLAnchorElement.type")}}
  - : 一个字符串，反映 [`type`](/zh-CN/docs/Web/HTML/Element/a#type) HTML 属性，指示链接资源的 MIME 类型。
- {{domxref("HTMLAnchorElement.username")}}
  - : 一个包含域名前指定的用户名的字符串。

### 已弃用的属性

- `HTMLAnchorElement.charset` {{deprecated_inline}}
  - : 表示链接资源的字符编码的字符串。
- `HTMLAnchorElement.coords` {{deprecated_inline}}
  - : 表示逗号分隔的坐标列表的字符串。
- `HTMLAnchorElement.name` {{deprecated_inline}}
  - : 表示锚点名称的字符串。
- `HTMLAnchorElement.rev` {{deprecated_inline}}
  - : 表示 [`rev`](/zh-CN/docs/Web/HTML/Element/a#rev) HTML 属性的字符串，该属性指定链接对象与目标对象的关系。
- `HTMLAnchorElement.shape` {{deprecated_inline}}
  - : 表示活动区域形状的字符串。

## 实例方法

_从其父接口 {{domxref("HTMLElement")}} 继承方法。_

- {{domxref("HTMLAnchorElement.toString()")}}
  - : 返回一个包含完整 URL 的字符串。它是 {{domxref("HTMLAnchorElement.href")}} 的同义词，但不能用于修改该值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("a")}}
