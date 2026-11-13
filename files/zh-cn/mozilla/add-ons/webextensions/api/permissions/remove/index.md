---
title: permissions.remove()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/remove
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

请求移除给定 {{WebExtAPIRef("permissions.Permissions")}} 对象中列出的权限。

`Permissions` 参数可以包含 `origins` 属性（[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)数组），或者可以包含 `permissions` 属性（[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)数组），又或者同时包含两个属性。这些权限必须来自 [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json 键中定义的权限集合。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removing = browser.permissions.remove(
  permissions                // Permissions 对象
)
```

### 参数

- `permissions`
  - : {{WebExtAPIRef("permissions.Permissions")}} 对象。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。如果扩展现在没有被授予 `permissions` 参数中列出的权限，则将兑现为 `true`，否则兑现为 `false`。

## 浏览器兼容性

{{Compat}}

## 示例

下述代码添加了一个用于移除给定权限的点击处理器。

```js
const permissionToRemove = {
  permissions: ["history"],
};

async function remove() {
  console.log("移除中");
  const removed = await browser.permissions.remove(permissionToRemove);
  console.log(removed);
}

document.querySelector("#remove").addEventListener("click", remove);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.permissions`](https://developer.chrome.google.cn/docs/extensions/reference/api/permissions) API。
