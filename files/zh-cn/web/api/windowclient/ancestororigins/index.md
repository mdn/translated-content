---
title: WindowClient：ancestorOrigins 属性
short-title: ancestorOrigins
slug: Web/API/WindowClient/ancestorOrigins
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

{{domxref("WindowClient")}} 接口的只读属性 **`ancestorOrigins`** 是一个字符串数组，其按逆序列出由该 `WindowClient` 表示的浏览上下文的所有祖先的源。

数组中的第一个元素是此窗口父级的源，最后一个元素是顶级浏览上下文的源。如果此窗口本身是顶级浏览上下文，则 `ancestorOrigins` 是一个空数组。

## 值

字符串数组。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
