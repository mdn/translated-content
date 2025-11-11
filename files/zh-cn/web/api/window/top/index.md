---
title: Window：top 属性
slug: Web/API/Window/top
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

返回对窗口层次结构中最顶层窗口的引用。

## 值

对最顶层窗口的引用。

## 备注

{{domxref("window.parent")}} 属性返回当前窗口的直接父窗口，而 `window.top` 返回窗口对象层次结构中的最顶层窗口。

此属性在处理位于父窗口或多个父窗口的子框架中的窗口时特别有用，可以用来获取顶级框架集。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
