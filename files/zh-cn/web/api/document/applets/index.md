---
title: Document：applets 属性
slug: Web/API/Document/applets
l10n:
  sourceCommit: a468a537c0234a3035951e80af76715e1c36c8f7
---

{{APIRef("DOM")}} {{Deprecated_Header}}

{{domxref("Document")}} 的 **`applets`** 属性返回一个空的 {{domxref("HTMLCollection")}}。保留该属性只是出于兼容性考虑；在旧版本的浏览器中，它会返回文档中的小应用程序列表。

> [!NOTE]
> 所有浏览器都取消了对 `<applet>` 元素的支持。因此调用 `document.applets` 总是返回空的集合。

## 值

空的 {{domxref("HTMLCollection")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
