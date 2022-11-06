---
title: Navigator.vendor
slug: Web/API/Navigator/vendor
---

{{ ApiRef() }}

### 概述

返回当前所使用浏览器的浏览器供应商的名称。

### 语法

```plain
venString = window.navigator.vendor
```

### 参数

- `venString` 浏览器供应商。

### 例子

```plain
window.navigator.vendor
// 返回 "Netscape6"
```

### 备注

vendor 属性值也是组成 userAgent 字符串的一部分 .product 属性值和 vendor 属性值可以是不同的，比如在 Firefox 中，两者的值表示：Netscape 6.1 使用 Gecko 来渲染网页。想了解更多，请查看 [navigator.product](/zh-CN/DOM/window.navigator.product)，[navigator.userAgent](/zh-CN/DOM/window.navigator.userAgent)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
