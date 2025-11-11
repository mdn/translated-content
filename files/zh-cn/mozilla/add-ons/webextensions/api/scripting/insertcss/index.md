---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

向页面中注入 CSS。

> [!NOTE]
> 该方法在 Chrome 和 Firefox 101 的 Manifest V3 或更高版本中可用。在 Safari 和 Firefox 102+ 中，该方法也在 Manifest V2 中可用。

要使用此 API，你必须拥有 `"scripting"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 以及目标 URL 的权限，可以明确作为[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)或使用 [activeTab 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#活动标签权限)。

你只可以将 CSS 注入到 URL 可以使用[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)表达的页面中：这意味着其协议必须是“http”、“https”、“file”其中之一。这意味着你不能将 CSS 注入到浏览器的内置页面中，例如 about:debugging、about:addons 或打开新空标签页时打开的页面。

> [!NOTE]
> Firefox 解析注入的 CSS 文件中的 URL 时是相对于 CSS 文件解析的，而不是相对于注入的页面解析的。

注入的 CSS 可以通过调用 {{WebExtAPIRef("scripting.removeCSS()")}} 来移除。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
await browser.scripting.insertCSS(
  details     // 对象
)
```

### 参数

- `details`
  - : 描述要注入的 CSS 和注入位置的对象。它包含以下属性：
    - `css` {{optional_inline}}
      - : `string`。包含要注入的 CSS 的字符串。必须指定 `css` 或 `files` 其中之一。
    - `files` {{optional_inline}}
      - : `string` 的数组（`array`）。要注入的 CSS 文件相对于扩展根目录的路径。必须指定 `files` 或 `css` 其中之一。
    - `origin` {{optional_inline}}
      - : `string`。注入的样式来源，可以是 `USER`（将 CSS 作为用户样式表添加）、`AUTHOR`（将 CSS 作为作者样式表添加）。默认为 `AUTHOR`。
        - `USER` 允许你防止网站覆盖你注入的 CSS：参见[层叠顺序](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction#层叠顺序)。
        - `AUTHOR` 样式表的行为就好像它们出现在页面指定的所有作者规则之后一样。这种行为包括页面的脚本动态添加的任何作者样式表，即使这种添加发生在 `insertCSS` 调用完成之后。

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}。指定要将 CSS 注入到的目标的详细信息。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当所有的 CSS 都被注入时将不带参数地兑现。如果出现了错误，则该 promise 将被拒绝。

## 示例

该示例将来自字符串的 CSS 注入到活动标签页中。

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      css: `body { border: 20px dotted pink; }`,
    });
  } catch (err) {
    console.error(`无法注入 CSS：${err}`);
  }
});
```

该示例将注入 `"content-style.css"` 文件（与扩展一起打包）加载的 CSS 到页面中：

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      files: ["content-style.css"],
    });
  } catch (err) {
    console.error(`无法注入 CSS：${err}`);
  }
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#method-insertCSS) API。
