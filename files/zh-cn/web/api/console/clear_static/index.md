---
title: console：clear() 静态方法
slug: Web/API/console/clear_static
---

{{APIRef("Console API")}}

**`console.clear()`** 方法会清空控制台，但前提是该控制台允许清空。像浏览器运行的图形控制台就允许清空，而像 Node 运行的终端上显示的控制台则不支持它，调用该方法将不会产生任何效果（也不会报错）。

## 语法

```js-nolint
clear();
```

### 参数

无

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
