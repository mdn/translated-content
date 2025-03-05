---
title: HTMLAnchorElement：target 属性
slug: Web/API/HTMLAnchorElement/target
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLAnchorElement")}} 接口的 **`target`** 属性是一个字符串，用于指示在何处显示链接的资源。

它反映 {{HTMLElement("a")}} 元素的 [`target`](/zh-CN/docs/Web/HTML/Element/a#target) 属性。

## 值

表示目标的字符串，它的值可以是：

- {{HTMLElement("frame")}} 的名字。
- [特定值的关键字](/zh-CN/docs/Web/HTML/Element/a#target)之一：`_blank`、`_self`、`_parent` 或 `_top`。

## 示例

```html
<a href="www.example1.com" class="link1" target="_blank">示例 1</a>
```

```js
const link = document.querySelector(".link1");
console.log(link.target); // 输出：“_blank”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLBaseElement.target")}} 属性
- {{domxref("HTMLFormElement.target")}} 属性
- {{domxref("HTMLAreaElement.target")}} 属性
