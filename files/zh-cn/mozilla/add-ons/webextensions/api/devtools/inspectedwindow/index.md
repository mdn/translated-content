---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

{{AddonSidebar}}

> [!NOTE]
> 本页面描述的是在 Firefox 54 中存在的 WebExtensions devtools API。尽管这些 API 基于 [Chrome devtools API](https://developer.chrome.google.cn/docs/extensions/how-to/devtools/extend-devtools)，但 Firefox 中仍有许多特性尚未实现，因此在这里未被记录。要查看目前缺失哪些特性，请参见 [devtools API 的局限性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools#devtools_api_的局限性)。

`devtools.inspectedWindow` API 允许开发者工具扩展与附加到开发者工具的窗口进行交互。

像所有 `devtools` API 一样，只有在 [devtools_page](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json 键定义的文档中运行的代码，或扩展创建的其他开发者工具文档（如扩展创建的面板托管的文档）才能使用这个 API。有关更多信息，请参见[扩展开发者工具](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)。

## 属性

- [`devtools.inspectedWindow.tabId`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId)
  - : 开发者工具附加到的窗口的 ID。

## 函数

- [`devtools.inspectedWindow.eval()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval)
  - : 在目标窗口中执行一些 JavaScript 代码。
- [`devtools.inspectedWindow.reload()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload)
  - : 重新加载目标窗口的文档。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的[`chrome.devtools.inspectedWindow`](https://developer.chrome.google.cn/docs/extensions/reference/api/devtools/inspectedWindow) API。

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
