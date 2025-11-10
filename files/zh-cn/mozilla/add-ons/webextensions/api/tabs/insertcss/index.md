---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

向一个页面注入 CSS。

> [!NOTE]
> 当使用 Manifest V3 或更高版本时，请使用 {{WebExtAPIRef("scripting.insertCSS()")}} 和 {{WebExtAPIRef("scripting.removeCSS()")}} 来插入和移除 CSS。

使用该 API 前你必须拥有目标页面 URL 的权限，可以是[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限), 或者使用 [activeTab 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#活动标签权限)。

你只能向 URL 符合[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)的网页注入 CSS——其方案必须是“http”、“https”、“file”和“ftp”之一。你不能向任何浏览器内置页面注入 CSS，比如 about:debugging、about:addons 或者你打开的一个新的空白页。

> [!NOTE]
> Firefox 在注入的 CSS 文件中解析 URL 时是相对于 CSS 文件本身的位置，而不是相对于它被注入到的页面的位置。

当再次调用 {{WebExtAPIRef("tabs.removeCSS()")}} 时，已经注入的 CSS 可能会被移除。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let inserting = browser.tabs.insertCSS(
  tabId,           // 可选的整型
  details          // 对象
)
```

### 参数

- `tabId` {{optional_inline}}
  - : `integer`。要插入 CSS 的选项卡 ID。默认为当前窗口的活动选项卡。
- `details`
  - : 描述要插入的 CSS 的对象。包含以下属性：
    - `allFrames` {{optional_inline}}
      - : `boolean`。如果为 `true`，则将 CSS 注入到当前页面的所有框架中。如果为 `false`，则仅将 CSS 注入到顶层框架。默认为 `false`。
    - `code` {{optional_inline}}
      - : `string`。要注入的代码（文本字符串形式）。
    - `cssOrigin` {{optional_inline}}
      - : `string`。可以取以下两个值之一：“user”，表示将 CSS 添加为用户样式表；“author”，表示将其添加为作者样式表。如果省略此选项，则 CSS 将作为作者样式表添加。
        - “user”允许你防止网站覆盖你插入的 CSS。参见[层叠顺序](/zh-CN/docs/Web/CSS/Guides/Cascade/Introduction#层叠顺序)。
        - “author”样式表的行为就像它们出现在页面指定的所有作者规则之后一样。这种行为包括页面脚本动态添加的任何作者样式表，即使此添加发生在 `insertCSS` 调用完成之后。

    - `file` {{optional_inline}}
      - : `string`。包含要插入代码的文件路径。在 Firefox 中，相对 URL 是相对于当前页面 URL 解析的。在 Chrome 中，这些 URL 是相对于扩展的基础 URL 解析的。为了跨浏览器工作，你可以将路径指定为绝对 URL，从扩展的根目录开始，例如 `"/path/to/stylesheet.css"`。
    - `frameId` {{optional_inline}}
      - : `integer`。应该插入 CSS 的框架 ID。默认为 `0`（顶层框架）。
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`。如果为 `true`，则代码将被注入到嵌入的“about:blank”和“about:srcdoc”框架中，如果你的扩展具有访问其父文档的权限。不能在顶级 about: 框架中插入代码。默认为 `false`。
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}。代码将被注入到选项卡中的最早时间。默认为“document_idle”。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在所有 CSS 都插入完成时其会被兑现且不带有参数。如果发生任何错误，promise 会以错误信息拒绝。

## 示例

这个示例将来自字符串的 CSS 插入到当前活动标签页中。

```js
let css = "body { border: 20px dotted pink; }";

browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS({ code: css });
  insertingCSS.then(null, onError);
});
```

这个示例从扩展中打包的文件中加载 CSS，并将其插入到 ID 为 2 的标签页中：

```js
browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS(2, { file: "content-style.css" });
  insertingCSS.then(null, onError);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-insertCSS) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
