---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

向页面注入 JavaScript 代码。

> [!NOTE]
> 当使用 Manifest V3 或更高版本时，请使用 {{WebExtAPIRef("scripting.executeScript()")}} 来执行脚本。

你可以将代码注入到其 URL 可以用[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)表示的页面中。为此，其协议必须是以下之一：`http`、`https` 或 `file`。

你必须拥有页面 URL 的权限。无论是明确的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)，还是通过 [activeTab 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_权限)。请注意，一些特殊页面不允许此权限，包括阅读器视图、view-source 以及 PDF 查看器页面。

你还可以将代码注入到你自己扩展中打包的页面：

```js
browser.tabs.create({ url: "/my-page.html" }).then(() => {
  browser.tabs.executeScript({
    code: `console.log('location:', window.location.href);`,
  });
});
```

此操作不需要任何特殊权限。

你*不能*将代码注入浏览器的任何内置页面，例如：`about:debugging`、`about:addons` 或打开新空白标签页时打开的页面。

你注入的脚本称为[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let executing = browser.tabs.executeScript(
  tabId,                 // 可选整数
  details                // 对象
)
```

### 参数

- `tabId` {{optional_inline}}

  - : `integer`。要运行脚本的标签页的 ID。

    默认为当前窗口的活动标签页。

- `details`

  - : 描述要运行的脚本的对象。

    它包含以下属性：

    - `allFrames` {{optional_inline}}

      - : `boolean`。如果为 `true`，代码将注入到当前页面的所有框架中。

        如果为 `true` 并且设置了 `frameId`，则会引发错误。（`frameId` 和 `allFrames` 是互斥的。）

        如果为 `false`，代码仅注入到顶层框架中。

        默认为 `false`。

    - `code` {{optional_inline}}

      - : `string`。要注入的代码，作为文本字符串。

        > [!WARNING]
        > 不要使用此属性将不受信任的数据插入 JavaScript，因为这可能会导致安全问题。

    - `file` {{optional_inline}}

      - : `string`。包含要注入代码的文件的路径。

        - 在 Firefox 中，不从扩展根目录开始的相对 URL 相对于当前页面 URL 解析。
        - 在 Chrome 中，这些 URL 相对于扩展的根 URL 解析。

        为了跨浏览器工作，可以指定从扩展根目录开始的相对 URL，如：`"/path/to/script.js"`。

    - `frameId` {{optional_inline}}

      - : `integer`。应注入代码的框架。

        默认为 `0`（顶层框架）。

    - `matchAboutBlank` {{optional_inline}}

      - : `boolean`。如果为 `true`，且你的扩展具有访问其父文档的权限，代码将注入到内嵌的 `about:blank` 和 `about:srcdoc` 框架中。代码不能注入到顶层 `about:` 框架中。

        默认为 `false`。

    - `runAt` {{optional_inline}}

      - : {{WebExtAPIRef('extensionTypes.RunAt')}}。代码将在标签页中注入的最早时间。

        默认为 `"document_idle"`。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个对象数组。数组的值表示脚本在每个注入框架中的结果。

脚本的结果是最后评估的语句，这类似于如果在 [Web 控制台](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)中执行脚本时输出的结果（不是任何 `console.log()` 的输出）。例如，考虑这样的脚本：

```js
let foo = "my result";
foo;
```

在这里，结果数组将包含字符串 `"my result"` 作为元素。

结果值必须是[可结构化克隆](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)的（请参见[数据克隆算法](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#数据克隆算法)）。

> [!NOTE]
> 最后一个语句也可能是一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，但 [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript) 库不支持此功能。

如果发生任何错误，则该 promise 将被拒绝并带有错误消息。

## 示例

此示例在当前活动标签页中执行一行代码片段：

```js
function onExecuted(result) {
  console.log(`我们把它变绿了`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

const makeItGreen = 'document.body.style.border = "5px solid green"';

const executing = browser.tabs.executeScript({
  code: makeItGreen,
});
executing.then(onExecuted, onError);
```

此示例执行一个文件（随扩展打包）的脚本，名为 `"content-script.js"`。脚本在当前活动标签页中执行。脚本在子框架和主文档中执行：

```js
function onExecuted(result) {
  console.log(`我们在所有子框架中执行了`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

const executing = browser.tabs.executeScript({
  file: "/content-script.js",
  allFrames: true,
});
executing.then(onExecuted, onError);
```

此示例执行一个文件（随扩展打包）的脚本，名为 `"content-script.js"`。脚本在 ID 为 `2` 的标签页中执行：

```js
function onExecuted(result) {
  console.log(`我们在标签页 2 中执行了`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

const executing = browser.tabs.executeScript(2, {
  file: "/content-script.js",
});
executing.then(onExecuted, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-executeScript) API。此文档源自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
