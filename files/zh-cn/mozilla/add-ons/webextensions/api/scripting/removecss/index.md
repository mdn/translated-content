---
title: scripting.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

移除一个通过调用 {{WebExtAPIRef("scripting.insertCSS()")}} 注入的 CSS 样式表。

> [!NOTE]
> 该方法在 Chrome 和 Firefox 101 的 Manifest V3 或更高版本中可用。在 Safari 和 Firefox 102+ 中，该方法也在 Manifest V2 中可用。

要使用该方法，你必须取得 `"scripting"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)以及页面的 URL 权限，可以是明确的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)，也可以使用 [activeTab 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#活动标签权限)。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
await browser.scripting.removeCSS(
  details       // 对象
)
```

### 参数

- `details`
  - : 描述要移除的 CSS 以及从何处移除的对象。它包含以下属性：
    - `css` {{optional_inline}}
      - : `string`。包含要注入的 CSS 的字符串。必须指定 `css` 或 `files` 其中之一，并且必须与通过 {{WebExtAPIRef("scripting.insertCSS()")}} 插入的样式表匹配。
    - `files` {{optional_inline}}
      - : `string` 数组（`array`）。要注入的 CSS 文件相对于扩展的根目录的路径。必须指定 `files` 或 `css`，并且必须与通过 {{WebExtAPIRef("scripting.insertCSS()")}} 插入的样式表匹配。
    - `origin` {{optional_inline}}
      - : `string`。注入的样式的来源，可以是 `USER` 或 `AUTHOR`。默认为 `AUTHOR`。必须与通过 {{WebExtAPIRef("scripting.insertCSS()")}} 插入的样式表的来源匹配。
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}。指定要从中移除 CSS 的目标。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当所有 CSS 都被移除时将不带参数地兑现。如果发生了错误，则该 promise 将被拒绝。移除不存在的样式表的尝试将被忽略。

## 示例

该示例使用 {{WebExtAPIRef("scripting.insertCSS")}} 添加了一些 CSS，然后在用户点击浏览器操作时将其移除：

```js
// 假设之前已经使用以下代码注入了一些样式：
//
// await browser.scripting.insertCSS({
//   target: {
//     tabId: tab.id,
//   },
//   css: "* { background: #c0ffee }",
// });
//
// 当用户点击扩展按钮时，我们可以这样移除它：
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.removeCSS({
      target: {
        tabId: tab.id,
      },
      css: "* { background: #c0ffee }",
    });
  } catch (err) {
    console.error(`无法移除 CSS：${err}`);
  }
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#method-removeCSS) API。
