---
title: Element：lastElementChild 属性
slug: Web/API/Element/lastElementChild
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

只读属性 **`Element.lastElementChild`** 返回元素的最后一个子{{domxref("Element", "元素", "", 1)}}，如果没有子元素，则返回 `null`。

`Element.lastElementChild` 仅包含元素节点。要获取所有子节点（包括文本和注释节点等非元素节点），请使用 {{domxref("Node.lastChild")}}。

## 值

一个 {{domxref("Element")}} 对象，或 `null`。

## 示例

```html
<ul id="list">
  <li>第一（1）</li>
  <li>第二（2）</li>
  <li>第三（3）</li>
</ul>

<script>
  const list = document.getElementById("list");
  console.log(list.lastElementChild.textContent);
  // 打印“第三（3）”
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.previousElementSibling")}}
- {{domxref("Element.firstElementChild")}}
