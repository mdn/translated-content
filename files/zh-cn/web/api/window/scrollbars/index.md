---
title: Window：scrollbars 属性
slug: Web/API/Window/scrollbars
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef()}}

返回 `scrollbars` 对象。

这是包含布尔值 `visible` 属性的一组 `Window` 属性之一，用于表示 web 浏览器用户界面的特定部分是否可见。

出于隐私和互操作性的原因，如果 `Window` 是弹出窗口，则 `visible` 属性的值为 `false`，反之为 `true`。

## 值

包含单个属性的对象：

- `visible` {{ReadOnlyInline}}
  - : 布尔属性，如果 `Window` 是弹出窗口，则为 `false`，反之为 `true`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.locationbar")}}
- {{domxref("window.menubar")}}
- {{domxref("window.personalbar")}}
- {{domxref("window.statusbar")}}
- {{domxref("window.toolbar")}}
