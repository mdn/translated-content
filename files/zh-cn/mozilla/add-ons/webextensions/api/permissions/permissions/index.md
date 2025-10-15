---
title: Permissions
slug: Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

`Permissions` 对象用于表示权限的集合。

## 类型

一个具有以下属性的 {{jsxref("object")}}：

- `origins` {{optional_inline}}
  - : 用于表示一系列的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)的[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)的数组。
- `permissions` {{optional_inline}}
  - : 具名权限的数组，包含 [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)和[剪贴板权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#剪贴板访问)。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.permissions`](https://developer.chrome.google.cn/docs/extensions/reference/api/permissions) API。
