---
title: HTMLLinkElement：as 属性
slug: Web/API/HTMLLinkElement/as
l10n:
  sourceCommit: c30827dea447e33d0d875cb3e7e1632b56148e5f
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`as`** 属性返回一个字符串，该字符串表示将由链接元素预加载的内容类型。

当链接元素的 [`rel="preload"`](/zh-CN/docs/Web/HTML/Attributes/rel/preload) 时，`as` 属性必须有一个值，否则资源将不会被获取。它也可以应用于 [`rel="modulepreload"`](/zh-CN/docs/Web/HTML/Attributes/rel/preload) 的链接元素，但如果省略，将默认值为 `script`。对于其他类型的链接元素，如 `rel="prefetch"`，则不应设置此属性。

此属性反映 HTML [`<link>`](/zh-CN/docs/Web/HTML/Element/link) 元素的 [`as` 属性](/zh-CN/docs/Web/HTML/Element/link#as) 的值。

## 值

一个字符串，允许以下值：`"audio"`、`"document"`、`"embed"`、`"fetch"`、`"font"`、`"image"`、`"object"`、`"script"`、`"style"`、`"track"`、`"video"`、`"worker"`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
