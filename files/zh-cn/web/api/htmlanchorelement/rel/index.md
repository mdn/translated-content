---
title: HTMLAnchorElement：rel 属性
slug: Web/API/HTMLAnchorElement/rel
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement.rel`** 属性反映 [`rel`](/zh-CN/docs/Web/HTML/Attributes/rel) 属性。它是一个字符串，包含由空格分隔的链接类型列表，这些类型指示由 {{HTMLElement("a")}} 元素表示的资源与当前文档之间的关系。

## 值

一个字符串。

## 示例

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  alert(`关系：${anchor.rel}`);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 在 {{HTMLElement("area")}} 和 {{HTMLElement("link")}} 元素上对应的属性是 {{domxref("HTMLAreaElement.rel")}} 和 {{domxref("HTMLLinkElement.rel")}}。
- 相同的列表，但以标记形式表示：{{domxref("HTMLAnchorElement.relList")}}
