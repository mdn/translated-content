---
title: Navigator：webdriver 属性
slug: Web/API/Navigator/webdriver
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("WebDriver")}}

{{domxref("navigator")}} 接口的 **`webdriver`** 只读属性表示用户代理是否由自动化控制。

它定义了一种标准的方法，使得被控用户代理可以通知文档当前用户代理是由 [WebDriver](/zh-CN/docs/Web/WebDriver) 控制的。例如，在自动化过程中触发替代代码路径。`navigator.webdriver` 属性在以下情况下为 true：

- Chrome
  - : 使用了 `--remote-debugging-port` 或 `--headless` 标志或 `--enable-automation`。
- Firefox
  - : 使用了 `marionette.enabled` 首选项或 `--marionette` 标志。

## 值

一个{{JSxRef("Boolean", "布尔值", "", 1)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
