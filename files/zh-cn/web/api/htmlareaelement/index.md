---
title: HTMLAreaElement
slug: Web/API/HTMLAreaElement
---

{{APIRef("HTML DOM")}}

**`HTMLAreaElement`** 接口提供了一些属性和方法 (除了常见的对象{{domxref("HTMLElement")}} 接口提供的属性和方法通过继承也能获取到) 用来控制一个 area 元素的布局和展现。

## 属性

_从它的父对象{{domxref("HTMLElement")}}继承的，还有从{{domxref("URLUtils")}}继承的。_

- {{domxref("HTMLAreaElement.accessKey")}}
  - : 值为一个 {{domxref("DOMString")}} 类型，包含了一个简单的字符代表键盘上的一个按键，相当于快捷键。
- {{domxref("HTMLAreaElement.alt")}}
  - : 值为一个{{domxref("DOMString")}} 类型，代表了 [`alt`](/zh-CN/docs/Web/HTML/Reference/Elements/area#alt) HTML 属性，包含一个 area 对象显示异常的情况下显示的备用文本字符串。
- {{domxref("HTMLAreaElement.coords")}}
  - : 值为一个 {{domxref("DOMString")}} 类型，代表了 [`coords`](/zh-CN/docs/Web/HTML/Reference/Elements/area#coords) HTML 属性，包含了定义热区相关的坐标。
- {{domxref("HTMLAreaElement.download")}} {{experimental_inline}}
  - : 值为一个 {{domxref("DOMString")}} 类型，表明此资源是将要被下载的资源而不是显示在浏览器页面中。值为下载保存文件的推荐文件名。如果名字在操作系统里不是一个合格的文件名格式，浏览器将会做相应的修改。
- {{domxref("URLUtils.hash")}}
  - : Is a {{domxref("DOMString")}} containing the fragment identifier (including the leading hash mark (#)), if any, in the referenced URL.
- {{domxref("URLUtils.host")}}
  - : Is a {{domxref("DOMString")}} containing the hostname and port (if it's not the default port) in the referenced URL.
- {{domxref("URLUtils.hostname")}}
  - : Is a {{domxref("DOMString")}} containing the hostname in the referenced URL.
- {{domxref("URLUtils.href")}}
  - : Is a {{domxref("DOMString")}} containing that reflects the [`href`](/zh-CN/docs/Web/HTML/Reference/Elements/area#href) HTML attribute, containing a valid URL of a linked resource.
- {{domxref("HTMLAreaElement.hreflang")}}
  - : Is a {{domxref("DOMString")}} containing that reflects the [`hreflang`](/zh-CN/docs/Web/HTML/Reference/Elements/area#hreflang) HTML attribute, indicating the language of the linked resource.
- {{domxref("HTMLAreaElement.media")}}
  - : Is a {{domxref("DOMString")}} containing that reflects the [`media`](/zh-CN/docs/Web/HTML/Reference/Elements/area#media) HTML attribute, indicating target media of the linked resource.
- {{domxref("HTMLAreaElement.noHref")}} {{Deprecated_Inline}}
  - : Is a {{domxref("Boolean")}} flag indicating if the area is inactive (`true`) or active (`false`).
- {{domxref("URLUtils.password")}}
  - : Is a {{domxref("DOMString")}} containing the password specified before the domain name.
- {{domxref("URLUtils.origin")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the origin of the URL, that is its scheme, its domain and its port.
- {{domxref("URLUtils.pathname")}}
  - : Is a {{domxref("DOMString")}} containing the path name component, if any, of the referenced URL.
- {{domxref("URLUtils.port")}}
  - : Is a {{domxref("DOMString")}} containing the port component, if any, of the referenced URL.
- {{domxref("URLUtils.protocol")}}
  - : Is a {{domxref("DOMString")}} containing the protocol component (including trailing colon `':'`), of the referenced URL.
- {{domxref("HTMLAreaElement.rel")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`rel`](/zh-CN/docs/Web/HTML/Reference/Elements/area#rel) HTML attribute, indicating relationships of the current document to the linked resource.
- {{domxref("HTMLAreaElement.relList")}} {{readOnlyInline}}
  - : Returns a {{domxref("DOMTokenList")}} that reflects the [`rel`](/zh-CN/docs/Web/HTML/Reference/Elements/area#rel) HTML attribute, indicating relationships of the current document to the linked resource, as a list of tokens.
- {{domxref("HTMLAreaElement.search")}}
  - : Is a {{domxref("DOMString")}} containing the search element (including leading question mark `'?'`), if any, of the referenced URL.
- {{domxref("HTMLAreaElement.shape")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`shape`](/zh-CN/docs/Web/HTML/Reference/Elements/area#shape) HTML attribute, indicating the shape of the hot-spot, limited to known values.
- {{domxref("HTMLAreaElement.tabIndex")}}
  - : Is a `long` containing the element's position in the tabbing order.
- {{domxref("HTMLAreaElement.target")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`target`](/zh-CN/docs/Web/HTML/Reference/Elements/area#target) HTML attribute, indicating the browsing context in which to open the linked resource.
- {{domxref("HTMLAreaElement.type")}}
  - : Is a {{domxref("DOMString")}} that reflects the [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/area#type) HTML attribute, indicating the MIME type of the linked resource.
- {{domxref("URLUtils.username")}}
  - : Is a {{domxref("DOMString")}} containing the username specified before the domain name.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}} and implement those from {{domxref("URLUtils")}}._

- {{domxref("URLUtils.toString()")}}
  - : Returns a {{domxref("DOMString")}} containing the whole URL of the script executed in the {{domxref("Worker")}}. It is a synonym for {{domxref("URLUtils.href")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("area") }}.
