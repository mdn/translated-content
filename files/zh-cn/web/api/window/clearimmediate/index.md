---
title: window.clearImmediate
slug: Web/API/Window/clearImmediate
---

{{ ApiRef() }}

## 概述

此方法用来清除 {{ domxref("window.setImmediate") }}.

> **备注：** 该方法最近刚刚被微软提出，可能不会被 w3c 批准成为标准，目前只有最新版 Internet Explorer 实现了该方法。

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
