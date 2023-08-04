---
title: window.length
slug: Web/API/Window/length
---

{{ApiRef}}

## 概述

返回当前窗口中包含的框架数量 (框架包括`frame`和`iframe`两种元素).

## 语法

```plain
framesCount = window.length;
```

- `framesCount`就是该窗口中框架的数量。

## 示例

```js
if (window.length) {
  // 该窗口包含至少一个子框架
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
