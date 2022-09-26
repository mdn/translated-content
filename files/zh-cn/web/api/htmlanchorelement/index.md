---
title: HTMLAnchorElement
slug: Web/API/HTMLAnchorElement
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement`** 接口表示超链接元素，并提供一些特别的属性和方法（除了那些继承自普通 {{domxref("HTMLElement")}}对象接口的之外）以用于操作这些元素的布局和显示。

## 属性（Properties）

_继承其父类 {{domxref("HTMLElement")}} 的属性，并实现 {{domxref("URLUtils")}} 中（定义）的（属性）。_

- {{domxref("HTMLAnchorElement.accessKey")}}
  - : 是一个代表了单个字符的 {{domxref("DOMString")}}，单个字符可以切换输入焦点到超链接。
- {{domxref("HTMLAnchorElement.charset")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} representing the character encoding of the linked resource.
- {{domxref("HTMLAnchorElement.coords")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} representing a comma-separated list of coordinates.
- {{domxref("HTMLAnchorElement.download")}} {{experimental_inline}}
  - : Is a {{domxref("DOMString")}} indicating that the linked resource is intended to be downloaded rather than displayed in the browser. The value represent the proposed name of the file. If the name is not a valid filename of the underlying OS, browser will adapt it. The value is a URL with a scheme like `http:`, `file:`, `data:` or even `blob:` (created with {{domxref("URL.createObjectURL")}}).
- {{domxref("URLUtils.hash")}}
  - : Is a {{domxref("DOMString")}} representing the fragment identifier, including the leading hash mark ('`#`'), if any, in the referenced URL.
- {{domxref("URLUtils.host")}}
  - : Is a {{domxref("DOMString")}} representing the hostname and port (if it's not the default port) in the referenced URL.
- {{domxref("URLUtils.hostname")}}
  - : Is a {{domxref("DOMString")}} representing the hostname in the referenced URL.
- {{domxref("URLUtils.href")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("href", "a")}} HTML attribute, containing a valid URL of a linked resource.
- {{domxref("HTMLAnchorElement.hreflang")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("hreflang", "a")}} HTML attribute, indicating the language of the linked resource.
- {{domxref("HTMLAnchorElement.media")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("media", "a")}} HTML attribute, indicating the intended media for the linked resource.
- {{domxref("HTMLAnchorElement.name")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} representing the anchor name.
- {{domxref("URLUtils.passport")}}
  - : Is a {{domxref("DOMString")}} 包含指定域名的密码。
- {{domxref("URLUtils.origin")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} containing the origin of the URL, that is its scheme, its domain and its port.
- {{domxref("URLUtils.pathname")}}
  - : Is a {{domxref("DOMString")}} representing the path name component, if any, of the referenced URL.
- {{domxref("URLUtils.port")}}
  - : Is a {{domxref("DOMString")}} representing the port component, if any, of the referenced URL.
- {{domxref("URLUtils.protocol")}}
  - : Is a {{domxref("DOMString")}} representing the protocol component, including trailing colon ('`:`'), of the referenced URL.
- {{domxref("HTMLAnchorElement.rel")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("rel", "a")}} HTML attribute, specifying the relationship of the target object to the linked object.
- {{domxref("HTMLAnchorElement.relList")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMTokenList")}} that reflects the {{htmlattrxref("rel", "a")}} HTML attribute, as a list of tokens.
- {{domxref("HTMLAnchorElement.rev")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} representing that the {{htmlattrxref("rev", "a")}} HTML attribute, specifying the relationship of the link object to the target object.
- {{domxref("URLUtils.search")}}
  - : Is a {{domxref("DOMString")}} representing tThe search element, including leading question mark ('`?`'), if any, of the referenced URL.
- {{domxref("HTMLAnchorElement.shape")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} representing the shape of the active area.
- {{domxref("HTMLAnchorElement.tabindex")}}
  - : Is a `long` containing the position of the element in the tabbing navigation order for the current document.
- {{domxref("HTMLAnchorElement.target")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("target", "a")}} HTML attribute, indicating where to display the linked resource.
- {{domxref("HTMLAnchorElement.text")}}
  - : Is a {{domxref("DOMString")}} being a synonym for the {{domxref("Node.textContent")}} property.
- {{domxref("HTMLAnchorElement.type")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("type", "a")}} HTML attribute, indicating the MIME type of the linked resource.
- {{domxref("URLUtils.username")}}
  - : Is a {{domxref("DOMString")}} containing the username specified before the domain name.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}},_ _and implements those from {{domxref("URLUtils")}}._

- {{domxref("HTMLElement.blur()")}}
  - : Removes the keyboard focus from the current element.
- {{domxref("HTMLElement.focus()")}}
  - : Gives the keyboard focus to the current element.
- {{domxref("URLUtils.toString()")}}
  - : Returns a {{domxref("DOMString")}} containing the whole URL. It is a synonym for {{domxref("URLUtils.href")}}, though it can't be used to modify the value.

The `blur()` and `focus()` methods are inherited from {{domxref("HTMLElement")}} from HTML5 on, but were defined on `HTMLAnchorElement` in DOM Level 2 HTML and earlier specifications.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("a")}}
