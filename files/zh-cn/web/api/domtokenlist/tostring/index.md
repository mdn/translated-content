---
title: DOMTokenList：toString() 方法
slug: Web/API/DOMTokenList/toString
l10n:
  sourceCommit: 494edeb208c312a26b7f5efb0902799d89a2bb33
---

{{APIRef("DOM")}}

{{domxref("DOMTokenList")}} 接口的 **`toString()`** {{Glossary("stringifier", "字符串化器")}}方法将标记（token）列表的值序列化为字符串返回。返回值是以空格分隔的标记列表，与 {{domxref("DOMTokenList.value")}} 属性值相等。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

一个字符串。

## 示例

```js
const element = document.createElement("div");
const classes = element.classList;

element.className = "shop empty-cart";
classes.add("logged-in", "dark-mode");

console.log(classes.toString());
// "shop empty-cart logged-in dark-mode"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.classList")}}
- {{domxref("DOMTokenList.add()")}}
