---
title: Document：head 属性
slug: Web/API/Document/head
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的 **`head`** 只读属性返回当前文档的 {{HTMLElement("head")}} 元素。

## 值

{{domxref("HTMLHeadElement")}}。

## 示例

```html
<!doctype html>
<head id="my-document-head">
  <title>示例：使用 document.head</title>
</head>

<script>
  const theHead = document.head;

  console.log(theHead.id); // "my-document-head";

  console.log(theHead === document.querySelector("head")); // true
</script>
```

## 备注

`document.head` 是只读的。尝试给这个属性赋值将会静默失败，或者在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下抛出 {{jsxref("TypeError")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.body")}}
