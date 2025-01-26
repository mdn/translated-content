---
title: HTMLLinkElement：relList 属性
slug: Web/API/HTMLLinkElement/relList
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`relList`** 只读属性反映了 [`rel`](/zh-CN/docs/Web/HTML/Attributes/rel) 属性。它是一个实时的 {{domxref("DOMTokenList")}}，包含表示由 {{HTMLElement("link")}} 元素代表的资源与当前文档之间关系的链接类型集合。

该属性本身是只读的，这意味着你不能用另一个 {{domxref("DOMTokenList")}} 来替换它，但返回的列表内容是可以更改的。

## 值

一个包含字符串的实时 {{domxref("DOMTokenList")}}。

## 示例

```js
const links = document.getElementsByTagName("link");
for (const link of links) {
  console.log("发现新链接");
  link.relList.forEach((relEntry) => {
    console.log(relEntry);
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 在 {{HTMLElement("a")}} 和 {{HTMLElement("area")}} 元素上对应的属性是 {{domxref("HTMLAnchorElement.relList")}} 和 {{domxref("HTMLAreaElement.relList")}}。
- 相同的列表，但以标记形式表示：{{domxref("HTMLLinkElement.rel")}}
