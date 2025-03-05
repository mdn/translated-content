---
title: Document：fragmentDirective 属性
slug: Web/API/Document/fragmentDirective
l10n:
  sourceCommit: 9aaaa8597f2b1b952a9ed116cbe48e4810254cea
---

{{APIRef}}{{SeeCompatTable}}

{{domxref("Document")}} 接口的 **`fragmentDirective`** 只读属性返回当前文档的 {{domxref("FragmentDirective")}}。

## 值

{{domxref("FragmentDirective")}} 对象。

## 示例

在支持该特性的浏览器中打开一个包含一个或多个匹配的文本片段的标签页，并尝试在其开发者工具中运行以下代码：

```js
document.fragmentDirective;
// 如果支持则返回空的 FragmentDirective 对象，否则返回 undefined
```

此功能目前主要用于特性检测。未来 `FragmentDirective` 对象可以包含更多信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [文本片段](/zh-CN/docs/Web/URI/Reference/Fragment/Text_fragments)
- {{cssxref("::target-text")}}
