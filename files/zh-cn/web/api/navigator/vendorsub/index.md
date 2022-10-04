---
title: Navigator.vendorSub
slug: Web/API/Navigator/vendorSub
---

{{ ApiRef() }}

### 概述

**vendorSub** navigator.vendor 的值的一部分，表示浏览器供应商的版本号。

### 语法

```plain
venSub = window.navigator.vendorSub
```

### 参数

- `venSub`是个字符串。

### 例子

```plain
window.navigator.vendorSub
// 返回 "6.1"，该值还作为 navigator.userAgent 的值的一部分。
```

### 备注

vendorSub 的属性值也是一个组成 navigator.userAgent 字符串的一部分。表示浏览器供应商给该当前浏览器的版本号 (可能和 navigator.productSub 属性值不同)。在 navigator.vendor 等于 "Netscape 6.1" 时，navigator.productSub 为 "5.0"，navigator.vendorSub 为 "6.1"。想要了解更多，请查看 [navigator.productSub](/zh-CN/DOM/window.navigator.productSub)、[navigator.userAgent](/zh-CN/DOM/window.navigator.userAgent)、[navigator.vendor](/zh-CN/DOM/window.navigator.vendor)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
