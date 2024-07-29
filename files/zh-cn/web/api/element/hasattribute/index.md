---
title: Element：hasAttribute() 方法
slug: Web/API/Element/hasAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

**`Element.hasAttribute()`** 方法返回一个表示当前元素的指定属性是否存在的**布尔**值。

## 语法

```js-nolint
hasAttribute(name)
```

### 参数

- `name`
  - : 表示属性名称的字符串。

### 返回值

一个布尔值。

## 示例

```js
const foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
  // 做一些事情
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.hasAttributes()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
