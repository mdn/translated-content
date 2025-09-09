---
title: permissions.request()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/request
l10n:
  sourceCommit: 509fa54c6dd5ff8c4719a3a7db45917a68718765
---

请求授予给定 {{WebExtAPIRef("permissions.Permissions")}} 对象中列出的权限。

`Permissions` 参数可以包含 `origins` 属性（[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)数组），或者可以包含 `permissions` 属性（[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)数组），又或者同时包含两个属性。

这些要请求授予的权限必须来自 [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json 键定义的权限集合。`origins` 属性可以包含与可选权限匹配的主机的子集的权限：例如，如果可选权限包括 `*://mozilla.org/`，则 `permissions.origins` 可以包括 `https://developer.mozilla.org/`。

请求[仅限可选权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#仅限可选权限)的请求不能同时包含任何其他可选权限。

该请求只可以在[用户操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/User_actions)的处理器中进行。除非所有请求的权限都是静默授予的权限，浏览器会询问用户是否授予请求的权限。对于所有请求的权限，浏览器只会询问用户一次：要么授予所有权限，要么不授予任何权限。

扩展将一直持有授予的所有权限，即使经过升级或来回禁用/启用后仍然还被授予这些权限。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let requesting = browser.permissions.request(
  permissions                // Permissions 对象
)
```

### 参数

- `permissions`
  - : {{WebExtAPIRef("permissions.Permissions")}} 对象。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。如果扩展被授予了 `permissions` 参数中列出的权限，则将兑现为 `true`，否则兑现为 `false`。

## 浏览器兼容性

{{Compat}}

## 示例

下述代码添加了用于请求各种权限，并在请求完成后记录请求的结果和扩展的权限的点击处理器。

```js
const permissionsToRequest = {
  permissions: ["bookmarks", "history"],
  origins: ["https://developer.mozilla.org/"],
};

async function requestPermissions() {
  function onResponse(response) {
    if (response) {
      console.log("被授予了权限");
    } else {
      console.log("权限请求被拒绝");
    }
    return browser.permissions.getAll();
  }

  const response = await browser.permissions.request(permissionsToRequest);
  const currentPermissions = await onResponse(response);

  console.log(`当前被授予的权限：`, currentPermissions);
}

document
  .querySelector("#request")
  .addEventListener("click", requestPermissions);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.permissions`](https://developer.chrome.google.cn/docs/extensions/reference/api/permissions) API。
