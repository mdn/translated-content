---
title: permissions.contains()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/contains
l10n:
  sourceCommit: 697597718a002a37e2fb8bfdaeeb8ee4c95bddb7
---

判断扩展是否有给定 {{WebExtAPIRef("permissions.Permissions")}} 对象中列出的权限。

`Permissions` 参数可以包含 `origins` 属性（[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)数组），或者可以包含 `permissions` 属性（[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)数组），又或者同时包含两个属性。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。如果扩展已经有了指定的权限，那么 promise 会兑现为 `true`。对于主机权限，如果扩展的权限[模式匹配](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `origins` 中列出的权限，那么它们被认为是匹配的。

## 语法

```js-nolint
let getContains = browser.permissions.contains(
  permissions                // Permissions 对象
)
```

### 参数

- `permissions`
  - : {{WebExtAPIRef("permissions.Permissions")}} 对象。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，如果扩展已经取得 `permissions` 参数中列出的所有权限则将兑现为 `true`，否则兑现为 `false`。

## 浏览器兼容性

{{Compat}}

## 示例

```js
// 扩展已取得的权限：
// “webRequest”、“tabs”、“*://*.mozilla.org/*”

let testPermissions1 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs"],
};

const testResult1 = await browser.permissions.contains(testPermissions1);
console.log(testResult1); // true

let testPermissions2 = {
  origins: ["*://mozilla.org/"],
  permissions: ["tabs", "alarms"],
};

const testResult2 = await browser.permissions.contains(testPermissions2);
console.log(testResult2); // false：“alarms”权限不匹配

let testPermissions3 = {
  origins: ["https://developer.mozilla.org/"],
  permissions: ["tabs", "webRequest"],
};

const testResult3 = await browser.permissions.contains(testPermissions3);
console.log(testResult3); // true：“https://developer.mozilla.org/”与“*://*.mozilla.org/*”相匹配

let testPermissions4 = {
  origins: ["https://example.org/"],
};

const testResult4 = await browser.permissions.contains(testPermissions4);
console.log(testResult4); // false：`origins` 的“https://example.org/”并不匹配
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.permissions`](https://developer.chrome.google.cn/docs/extensions/reference/api/permissions) API。
