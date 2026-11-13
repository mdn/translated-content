---
title: permissions.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

获取包含当前授予给扩展的所有权限的 {{WebExtAPIRef("permissions.Permissions")}} 对象。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingAll = browser.permissions.getAll()
```

### 参数

无。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现为包含当前授予给扩展的所有权限的 {{WebExtAPIRef("permissions.Permissions")}} 对象。这包括扩展在 [`permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 键中列出的所有权限，以及扩展通过调用 {{WebExtAPIRef("permissions.request()")}} 获得的 [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) 中列出的任何权限。

## 浏览器兼容性

{{Compat}}

## 示例

```js
// 扩展已取得的权限：
// “webRequest”、“tabs”、“*://*.mozilla.org/*”

const currentPermissions = await browser.permissions.getAll();

console.log(currentPermissions.permissions); // [ "webRequest", "tabs" ]
console.log(currentPermissions.origins); // [ "*://*.mozilla.org/*" ]
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.permissions`](https://developer.chrome.google.cn/docs/extensions/reference/api/permissions) API。
