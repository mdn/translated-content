---
title: scripting.registerContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/registerContentScripts
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

注册一个或多个内容脚本。

> [!NOTE]
> 该方法在 Chrome 和 Firefox 101 的 Manifest V3 或更高版本中可用。在 Firefox 102+ 中，你也可以在 Manifest V2 中使用该方法。

要使用该方法，你必须取得 `"scripting"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)以及页面的 URL 权限，可以是明确的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)，也可以使用 [activeTab 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#活动标签权限)。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
await browser.scripting.registerContentScripts(
  scripts         // 数组
)
```

### 参数

- `scripts`
  - : {{WebExtAPIRef("scripting.RegisteredContentScript")}} 数组（`array`）。要注册的脚本的列表。

### 返回值

不带参数兑现的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当有错误发生时该 promise 将被拒绝。错误可能发生在脚本解析和文件验证期间，或者在指定的 ID 不存在时。若发生错误则不会注册任何脚本。

## 示例

该示例注册一个注入文件 `"script.js"` 的内容脚本：

```js
const aScript = {
  id: "a-script",
  js: ["script.js"],
  matches: ["https://example.com/*"],
};

try {
  await browser.scripting.registerContentScripts([aScript]);
} catch (err) {
  console.error(`无法注册内容脚本：${err}`);
}
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#method-registerContentScripts) API。
