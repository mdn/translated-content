---
title: devtools
slug: Mozilla/Add-ons/WebExtensions/API/devtools
l10n:
  sourceCommit: 0210ca9c0d036c29acea25295974118ff46338a8
---

{{AddonSidebar}}

允许扩展与浏览器的{{Glossary("Developer Tools", "开发者工具")}}进行交互。你可以使用这个 API 来创建开发者工具页面，操作被检查的窗口，检查页面的网络使用情况。

要使用这个 API，你必须在清单（manifest）中指定相应的 [`devtools_page`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) 键。使用这个清单键会触发[安装时的开发者工具权限警告](https://support.mozilla.org/zh-CN/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs)。为了避免安装时的权限警告，可以在 [`optional_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) 清单键中列出 `"devtools"` 权限，将该特性标记为可选。

> **备注：** `"devtools"` 可选权限仅被 Firefox 支持，Chrome 不支持（[Chromium issue 1143015](https://crbug.com/1143015)）。

## 属性

- {{WebExtAPIRef("devtools.inspectedWindow")}}
  - : 与开发者工具附加到的窗口（检查窗口）进行交互。这包括获取检查页面的标签页 ID，在检查窗口的上下文中评估代码，重新加载页面，或获取页面内的资源列表。
- {{WebExtAPIRef("devtools.network")}}
  - : 获取与开发者工具附加到的窗口（检查窗口）相关的网络请求信息。
- {{WebExtAPIRef("devtools.panels")}}
  - : 创建将在用户代理开发者工具内显示的用户界面面板。

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.devtools`](https://developer.chrome.google.cn/docs/extensions/mv2/devtools) API。

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
