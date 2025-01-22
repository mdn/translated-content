---
title: scripting.updateContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/updateContentScripts
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

更新已注册的内容脚本。如果在脚本解析和文件验证期间发生错误，或者指定的 ID 不存在，则不会更新任何脚本。

> [!NOTE]
> 该方法在 Chrome 和 Firefox 101 的 Manifest V3 或更高版本中可用。在 Firefox 102+ 中，你也可以在 Manifest V2 中使用该方法。

要使用该方法，你必须取得 `"scripting"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)以及页面的 URL 权限，可以是明确的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)，也可以使用 [activeTab 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#活动标签权限)。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
await browser.scripting.updateContentScripts(
  scripts         // 对象
)
```

### 参数

- `scripts`
  - : {{WebExtAPIRef("scripting.RegisteredContentScript")}} 的 `array`。要更新的脚本的信息。除了 `id` 属性外其他属性均为可选的。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，将以 {{WebExtAPIRef("scripting.RegisteredContentScript")}} 的数组兑现。如果发生任何错误，则该 promise 将被拒绝。

## 示例

该示例更新一个使用 ID `a-script` 注册的内容脚本：将其 `allFrames` 属性设置为 `true`：

```js
try {
  await browser.scripting.registerContentScripts([
    {
      id: "a-script",
      js: ["script.js"],
      matches: ["*://example.org/*"],
    },
  ]);

  // 更新之前注册的内容脚本让其在所有框架中执行：
  await browser.scripting.updateContentScripts([
    {
      id: "a-script",
      allFrames: true,
    },
  ]);
} catch (err) {
  console.error(`无法注册或更新内容脚本：${err}`);
}
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#method-updateContentScripts) API。
