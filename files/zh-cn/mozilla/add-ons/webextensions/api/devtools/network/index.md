---
title: devtools.network
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network
l10n:
  sourceCommit: 17d79d74849acaa98db0eccbfacc321fd50a7311
---

`devtools.network` API 允许开发者工具扩展获取与开发者工具附加的窗口（被检查的窗口）相关的网络请求信息。

像所有 `devtools` API 一样，只有在 [devtools_page](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json 键定义的文档中运行的代码，或扩展创建的其他开发者工具文档（如扩展创建的面板托管的文档）才能使用这个 API。有关更多信息，请参见[扩展开发者工具](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)。

## 函数

- [`devtools.network.getHAR()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/getHAR)
  - : 获取当前标签页加载页面的 [HAR 日志](http://www.softwareishard.com/blog/har-12-spec/#log)。

## 事件

- [`devtools.network.onNavigated`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onNavigated)
  - : 当用户将检查窗口导航到新页面时触发。
- [`devtools.network.onRequestFinished`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network/onRequestFinished)
  - : 当网络请求完成且其详细信息可供扩展使用时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.devtools.network`](https://developer.chrome.google.cn/docs/extensions/reference/api/devtools/network) API。

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
