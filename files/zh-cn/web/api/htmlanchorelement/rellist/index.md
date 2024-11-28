---
title: HTMLAnchorElement：relList 属性
slug: Web/API/HTMLAnchorElement/relList
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement.relList`** 只读属性反映了 [`rel`](/zh-CN/docs/Web/HTML/Attributes/rel) 属性。它是一个实时的 {{domxref("DOMTokenList")}}，包含表示由 {{HTMLElement("a")}} 元素代表的资源与当前文档之间关系的链接类型。

该属性本身是只读的，意味着你不能将其替换为另一个 {{domxref("DOMTokenList")}}，但其内容仍然可以被修改。

## 值

一个包含字符串的实时 {{domxref("DOMTokenList")}}。

## 示例

```js
const anchors = document.getElementsByTagName("a");
for (const anchor of anchors) {
  const list = anchor.relList;
  console.log(
    `在 relList 中发现了包含 ${list.length} 个链接类型的新锚点节点。`,
  );
  list.forEach((relValue) => {
    console.log(relValue);
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 在 {{HTMLElement("area")}} 和 {{HTMLElement("link")}} 元素上对应的属性是 {{domxref("HTMLAreaElement.relList")}} 和 {{domxref("HTMLLinkElement.relList")}}。
- 完全相同的列表，但以一个由空格分隔的标记组成的字符串形式：{{domxref("HTMLAnchorElement.rel")}}
