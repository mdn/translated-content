---
title: HTMLLinkElement：rel 属性
slug: Web/API/HTMLLinkElement/rel
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`rel`** 属性反映 [`rel`](/zh-CN/docs/Web/HTML/Attributes/rel) 属性。它是一个字符串，包含由空格分隔的链接类型列表，这些类型指示由 {{HTMLElement("link")}} 元素表示的资源与当前文档之间的关系。

此属性最常见的用途是指定一个外部样式表的链接：将属性设置为 `stylesheet`，并将 [`href`](/zh-CN/docs/Web/HTML/Element/link#href) 属性设置为外部样式表的 URL，以便格式化页面。

## 值

一个字符串。

## 示例

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log(link);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 在 {{HTMLElement("a")}} 和 {{HTMLElement("area")}} 元素上对应的属性是 {{domxref("HTMLAnchorElement.rel")}} 和 {{domxref("HTMLAreaElement.rel")}}。
- 相同的列表，但以标记形式表示：{{domxref("HTMLLinkElement.relList")}}
