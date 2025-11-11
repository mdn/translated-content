---
title: window.clearImmediate
slug: Web/API/Window/clearImmediate
---

{{ ApiRef() }}

## 概述

此方法用来清除 {{ domxref("window.setImmediate") }}.

## 语法

```js-nolint
clearImmediate(immediateID)
```

这里的 immediateID 是由{{ domxref("window.setImmediate") }}返回的。

## 例子

```js
var immediateID = setImmediate(function () {
  // Run some code
}

document.getElementById("button").addEventListener(function () {
  clearImmediate(immediateID);
}, false);
```

## 浏览器兼容性

{{Compat}}

## 相关链接

{{ domxref("window.setImmediate") }}

[Specification: Efficient Script Yielding](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html)
