---
title: window.opener
slug: Web/API/Window/opener
---

{{ ApiRef() }}

### 概述

返回打开当前窗口的那个窗口的引用，例如：在 window A 中打开了 window B，B.opener 返回 A.

### 语法

```plain
var objRef = window.opener;
```

### 例子

```js
if (window.opener != indexWin) {
  referToTop(window.opener);
}
```

### 备注

如果当前窗口是由另一个窗口打开的，**window\.opener**保留了那个窗口的引用。如果当前窗口不是由其他窗口打开的，则该属性返回 null.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
