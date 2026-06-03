---
title: scripting.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/executeScript
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

将脚本注入目标上下文。默认情况下脚本将在 `document_idle` 时运行。

> [!NOTE]
> 此方法在 Chrome 和 Firefox 101 的 Manifest V3 或更高版本中可用。在 Safari 和 Firefox 102+ 中，此方法也在 Manifest V2 中可用。

使用此 API 必须拥有 `"scripting"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)以及目标 URL 的权限，权限可以是明确的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)或使用 [activeTab 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#活动标签权限)。需要注意，部分特殊页面（包括阅读模式、查看源代码和 PDF 查看器页面）不支持该权限。

在 Firefox 和 Safari 中，缺少部分主机权限也会导致执行成功（这一部分的结果会包含在兑现的 Promise 中）。在 Chrome 中，缺少任意一个权限都会导致执行被阻止（参见 [Issue 1325114](https://crbug.com/1325114)）。

注入的脚本被称为[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let results = await browser.scripting.executeScript(
  details             // 对象
)
```

### 参数

- `details`
  - : 描述注入脚本的对象，包含以下属性：
    - `args` {{optional_inline}}
      - : 传递到函数中的参数数组，仅在指定了 `func` 参数时有效。参数必须是可 JSON 序列化的。
    - `files` {{optional_inline}}
      - : `string` 的 `array`。要注入的 JavaScript 文件相对于扩展的根目录的路径的数组。必须指定 `files` 和 `func` 其中之一。
    - `func` {{optional_inline}}
      - : `function`。要注入的 JavaScript 函数。该函数将被序列化、反序列化以注入，因此任何绑定在函数上的参数和函数的执行上下文都将被丢失。必须指定 `files` 和 `func` 其中之一。
    - `injectImmediately` {{optional_inline}}
      - : `boolean`。注入目标是否尽早触发注入（但不一定在页面加载之前）。
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}。指定脚本注入目标的详细信息。
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("scripting.ExecutionWorld")}}。脚本执行的环境。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，将以 `InjectionResult` 对象数组兑现，表示在每个注入框架中注入脚本的结果。

如果注入失败（例如注入目标无效）则该 Promise 将被拒绝。当脚本执行开始时，无论成功与否（`result` 或 `error`），脚本的结果将包含在结果中。

每个 `InjectionResult` 对象具有以下属性：

- `frameId`
  - : `number`。与注入相关联的框架 ID。
- `result` {{optional_inline}}
  - : `any`。脚本执行的结果。
- `error` {{optional_inline}}
  - : `any`。如果发生错误，包含脚本抛出或拒绝的值。通常这是一个带有消息（message）属性的错误对象，但它可以是任何值（包括原始值和 `undefined`）。

    Chrome 尚不支持 `error` 属性（参见 [Issue 1271527: Propagate errors from scripting.executeScript to InjectionResult](https://crbug.com/1271527)）。作为替代，可以通过将要执行的代码包装在 try-catch 语句中来捕获运行时错误。未捕获的错误也会报告到目标标签页的控制台。

脚本的结果是最后一条执行的语句，类似于在 [Web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)中执行脚本时看到的结果（不包括任何 `console.log()` 输出）。例如，考虑这样的脚本：

```js
let foo = "my result";
foo;
```

在该示例中，结果数组中将包含一个元素：字符串 `"my result"`。

在 Firefox 中脚本的结果必须是一个[可结构化克隆](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)的值，而在 Chrome 中必须是一个[可 JSON 序列化](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#描述)的值。[Chrome 不兼容情况](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)一文中的[数据克隆算法](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#数据克隆算法)部分更详细地讨论了这种差异。

## 示例

以下示例在活动标签页中执行一行代码：

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      func: () => {
        document.body.style.border = "5px solid green";
      },
    });
  } catch (err) {
    console.error(`无法执行脚本：${err}`);
  }
});
```

以下示例执行一个名为 `"content-script.js"` 的脚本文件（随扩展一起打包）。脚本在活动标签页中（包括子框架和主文档）执行：

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.executeScript({
      target: {
        tabId: tab.id,
        allFrames: true,
      },
      files: ["content-script.js"],
    });
  } catch (err) {
    console.error(`无法执行脚本：${err}`);
  }
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.scripting`](https://developer.chrome.google.cn/docs/extensions/reference/api/scripting#method-executeScript) API。
