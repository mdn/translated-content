---
title: Clipboard
slug: Web/API/Clipboard
---

{{APIRef("Clipboard API")}} {{SecureContext_Header}}

**`Clipboard`** 接口实现了 [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API)，如果用户授予了相应的权限，其就能提供系统剪贴板的读写访问能力。在 Web 应用程序中，Clipboard API 可用于实现剪切、复制和粘贴功能。

{{InheritanceDiagram}}

系统剪贴板暴露于全局属性 {{domxref("Navigator.clipboard")}} 之中。

如果用户没有适时使用 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 授予 `"clipboard-read"` 或 `"clipboard-write"` 权限，调用 `Clipboard` 对象的方法不会成功。

> **备注：** 实际上，现在浏览器对于访问剪贴板权限的索取各有不同，在章节的 [剪贴板可用性](#剪贴板可用性) 部分查看更多细节。

所有 Clipboard API 的方法都是异步的；它们返回一个 {{jsxref("Promise")}} 对象，在剪贴板访问完成后被兑现。如果剪贴板访问被拒绝，promise 也会被拒绝。

> **备注：** **剪贴板**是用于短期数据储存或转移的数据缓存区，数据转移可以发生在文档和应用程序之间。剪贴板常常实现为一个匿名的、临时的 [数据缓存](https://zh.wikipedia.org/wiki/緩衝器)，有时也叫做粘贴缓存，可由绝大部分位于已定义 [应用程序接口](https://zh.wikipedia.org/wiki/应用程序接口) 的环境中的程序访问。
>
> 一个典型的应用程序常通过将 [用户输入](https://zh.wikipedia.org/wiki/I/O)（如：[快捷键](https://zh.wikipedia.org/wiki/快捷键)、[菜单选择](https://zh.wikipedia.org/wiki/選單) 等）映射到一些需要访问剪贴板的功能接口上。

## 方法

_`Clipboard` 继承自 {{domxref("EventTarget")}} 接口，因此拥有它的方法。_

- {{domxref("Clipboard.read()","read()")}}
  - : 从剪贴板读取数据（比如图片），返回一个 {{jsxref("Promise")}} 对象。在检索到数据后，promise 将兑现一个 {{domxref("ClipboardItem")}} 对象的数组来提供剪切板数据。
- {{domxref("Clipboard.readText()","readText()")}}
  - : 从操作系统读取文本；返回一个 `Promise`，在从剪切板中检索到文本后，promise 将兑现一个包含剪切板文本数据的 {{domxref("DOMString")}}。
- {{domxref("Clipboard.write()","write()")}}
  - : 写入任意数据至操作系统剪贴板。这是一个异步操作，在操作完成后，返回的 promise 的将被兑现。
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : 写入文本至操作系统剪贴板。返回一个 `Promise`，在文本被完全写入剪切板后，返回的 promise 将被兑现。

## 剪贴板可用性

异步剪贴板 API 是一个相对较新的 API，浏览器仍在逐步实现它。由于潜在的安全问题和技术复杂性，大多数浏览器都未完全实现这个 API。

例如，Firefox 不支持 `"clipboard-read"` 和 `"clipboard-write"` 权限，所以使用其他方式访问或改变剪贴板中的内容会受限。

对于浏览器扩展来说，你可以请求 clipboardRead 和 clipboardWrite 权限以使用 clipboard.readText() 和 clipboard.writeText()。但基于 HTTP 的网站中包含的脚本则不能访问剪贴板对象。参见 [extensions in Firefox 63](https://blog.mozilla.org/addons/2018/08/31/extensions-in-firefox-63/)。

除此之外，{{domxref("Clipboard.read", "read()")}} 以及 {{domxref("Clipboard.write", "write()")}} 是默认禁用且需要修改偏好设置来启用的。在使用之前请先查看浏览器兼容性表。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.execCommand()")}}
