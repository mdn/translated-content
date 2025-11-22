---
title: tabs.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

从页面中移除先前通过调用 {{WebExtAPIRef("tabs.insertCSS()")}} 插入的 CSS。

> [!NOTE]
> 当使用 Manifest V3 或更高版本时，请使用 {{WebExtAPIRef("scripting.insertCSS()")}} 和 {{WebExtAPIRef("scripting.removeCSS()")}} 来插入和移除 CSS。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removing = browser.tabs.removeCSS(
  tabId,           // 可选的整数
  details          // 对象
)
```

### 参数

- `tabId` {{optional_inline}}
  - `integer`。要从中移除 CSS 的标签页的 ID。默认为当前窗口中的活动标签页。
- `details`
  - : 一个描述要从页面中移除的 CSS 的对象。包含以下属性：
    - `allFrames` {{optional_inline}}
      - `boolean`。如果为 `true`，则从当前页面的所有框架中移除 CSS。如果为 `false`，则只从顶层框架中移除。默认为 `false`。
    - `code` {{optional_inline}}
      - `string`。要删除的 CSS 的文本字符串。这个字符串必须与之前使用 {{WebExtAPIRef("tabs.insertCSS()")}} 插入到页面中的 CSS 字符串完全匹配。
    - `cssOrigin` {{optional_inline}}
      - `string`。可以取两个值之一：“user”，表示作为用户样式表添加的 CSS；“author”，表示作为作者样式表添加的 CSS。如果之前通过 {{WebExtAPIRef("tabs.insertCSS()")}} 设置了这个选项，则它必须完全匹配。
    - `file` {{optional_inline}}
      - `string`。包含要移除的 CSS 的文件路径。这个路径必须与之前使用 {{WebExtAPIRef("tabs.insertCSS()")}} 插入到页面中的 CSS 文件完全匹配。
    - `frameId` {{optional_inline}}
      - `integer`。要从中移除 CSS 的框架。默认为 `0`（顶层框架）。
    - `matchAboutBlank` {{optional_inline}}
      - `boolean`。如果为 `true`，则在嵌入的“about:blank”和“about:srcdoc”框架中移除 CSS，如果你的扩展有访问它们的父文档的权限。默认为 `false`。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当所有 CSS 都已被移除时其会被兑现且不带有参数。如果发生任何错误，promise 将会被拒绝并返回错误信息。

## 示例

以下示例使用 {{WebExtAPIRef("tabs.insertCSS")}} 添加一些 CSS，然后当用户点击浏览器操作时再次将其移除：

```js
let css = "body { border: 20px dotted pink; }";

function onError(error) {
  console.log(`发生错误：${error}`);
}

let insertingCSS = browser.tabs.insertCSS(2, { code: css });
insertingCSS.then(null, onError);

browser.browserAction.onClicked.addListener(() => {
  let removing = browser.tabs.removeCSS(2, { code: css });
  removing.then(null, onError);
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
