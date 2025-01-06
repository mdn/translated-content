---
title: scripting.unregisterContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/unregisterContentScripts
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

注销一个或多个内容脚本。

> [!NOTE]
> 该方法在 Chrome 和 Firefox 101 的 Manifest V3 或更高版本中可用。在 Firefox 102+ 中，你也可以在 Manifest V2 中使用该方法。

要使用该方法，你必须取得 `"scripting"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 以及页面的 URL 权限，可以是明确的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)，也可以使用 [activeTab 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#活动标签权限)。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
await browser.scripting.unregisterContentScripts(
  scripts         // 对象
)
```

### 参数

- `scripts` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ContentScriptFilter")}}。用于识别要注销的动态内容脚本的过滤器。如果未指定则会注销所有动态内容脚本。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当所有脚本都被注销时将不带参数地兑现。如果发生了错误，则该 promise 将被拒绝。

## 示例

该示例注销以 ID `a-script` 注册的内容脚本：

```js
try {
  await browser.scripting.unregisterContentScripts({
    ids: ["a-script"],
  });
} catch (err) {
  console.error(`无法注销内容脚本：${err}`);
}
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#method-unregisterContentScripts) API。
