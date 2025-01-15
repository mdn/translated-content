---
title: Document.plugins
slug: Web/API/Document/plugins
---

{{APIRef("DOM")}}{{domxref("Document")}}接口的**插件**只读属性返回一个{{domxref("HTMLCollection")}} 对象，该对象包含一个或多个{{domxref("HTMLEmbedElement")}}s 表示当前文档中的{{HTMLElement("embed")}} 元素。

> [!NOTE]
> 对于已安装的插件列表，请使用 [NavigatorPlugins.plugins](/zh-CN/docs/Web/API/Navigator/plugins) 插件。

## 值

一个 {{domxref("HTMLCollection")}}, 如果文档中没有嵌入则为 null。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [MSDN documentation](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms537477(v=vs.85)>)
