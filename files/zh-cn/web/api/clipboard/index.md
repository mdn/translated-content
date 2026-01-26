---
title: Clipboard
slug: Web/API/Clipboard
l10n:
  sourceCommit: 7087ffd50a4d81d1b91fe603c26456e9ce398574
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

[Clipboard API](/zh-CN/docs/Web/API/Clipboard_API) 的 **`Clipboard`** 接口提供系统剪贴板读写访问的权限。这让 Web 应用程序可以实现剪切、复制和粘贴功能。

{{InheritanceDiagram}}

系统剪贴板暴露于全局属性 {{domxref("Navigator.clipboard")}} 之中。

所有 Clipboard API 方法都是异步的；它们返回一个 {{jsxref("Promise")}} 对象，在剪贴板访问完成后被兑现。如果剪贴板访问被拒绝，promise 也会被拒绝。

所有的方法也都需要[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)。使用 API 的其他要求在 API 概述主题的[安全考虑](/zh-CN/docs/Web/API/Clipboard_API#安全考虑)部分进行了讨论。

## 方法

_`Clipboard` 继承自 {{domxref("EventTarget")}} 接口，因此拥有它的方法。_

- {{domxref("Clipboard.read()","read()")}}
  - : 从剪贴板读取数据（比如图片），返回一个 {{jsxref("Promise")}}。在检索到数据后，其将兑现为包含剪贴板数据的 {{domxref("ClipboardItem")}} 对象数组。
- {{domxref("Clipboard.readText()","readText()")}}
  - : 从操作系统剪切板读取文本，返回一个 {{jsxref("Promise")}}，一旦数据可用，其将兑现为包含剪切板文本的字符串。
- {{domxref("Clipboard.write()","write()")}}
  - : 写入任意数据至操作系统剪贴板，返回一个在操作完成时被兑现的 {{jsxref("Promise")}}。
- {{domxref("Clipboard.writeText()","writeText()")}}
  - : 写入文本至操作系统剪贴板。返回一个在文本已被完全写入剪贴板后兑现的 {{jsxref("Promise")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.execCommand()")}}
