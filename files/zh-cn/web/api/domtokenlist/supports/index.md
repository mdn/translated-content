---
title: DOMTokenList.supports()
slug: Web/API/DOMTokenList/supports
---

{{APIRef("DOM")}}

如果给定的 `token` 位于关联属性支持的 token 列表中，则 {{domxref("DOMTokenList")}} 接口的 **`supports()`** 方法返回 `true`。这个方法旨在支持特性检查。

## 语法

```js
supports(token);
```

### 参数

- `token`
  - : 一个字符串，包含了用于查询的 token。

### 返回值

一个布尔值，表示是否查询到 token。

## 示例

```js
const iframe = document.getElementById("display");

if (iframe.sandbox.supports("an-upcoming-feature")) {
  // support code for mystery future feature
} else {
  // fallback code
}

if (iframe.sandbox.supports("allow-scripts")) {
  // instruct frame to run JavaScript
  //
  // (NOTE: This feature is well-supported; this is just an example!)
  //
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
