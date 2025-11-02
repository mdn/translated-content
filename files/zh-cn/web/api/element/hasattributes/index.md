---
title: Element：hasAttributes() 方法
short-title: hasAttributes()
slug: Web/API/Element/hasAttributes
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{ApiRef("DOM")}}

{{domxref("Element")}} 接口的 **`hasAttributes()`** 方法返回一个表示当前元素是否具有任何属性的布尔值。

## 语法

```js-nolint
hasAttributes()
```

### 参数

无。

### 返回值

布尔值。

## 示例

```js
let foo = document.getElementById("foo");
if (foo.hasAttributes()) {
  // 对“foo.attributes”进行操作
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
