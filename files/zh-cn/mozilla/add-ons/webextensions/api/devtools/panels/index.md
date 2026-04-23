---
title: devtools.panels
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels
l10n:
  sourceCommit: 2e7f2f7b1a817425d451a6633e131dec6b3943bf
---

> [!NOTE]
> 尽管这些 API 基于 [Chrome devtools API](https://developer.chrome.google.cn/docs/extensions/how-to/devtools/extend-devtools)，但 Firefox 中仍有许多特性尚未实现，因此这里未记录。要查看当前缺少哪些特性，请参阅 [devtools API 的局限性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools#devtools_api_的局限性)。

`devtools.panels` API 允许 devtools 扩展在 devtools 窗口内定义其用户界面。

devtools 窗口托管了多个独立的工具——JavaScript 调试器、网络监视器等。顶部的一排标签让用户可以在不同的工具之间切换。每个工具用户界面的窗口称为“面板”。

使用 `devtools.panels` API，你可以在开发者工具窗口中创建新的面板。

像所有 `devtools` API 一样，只有在 [devtools_page](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json 键定义的文档中运行的代码，或扩展创建的其他开发者工具文档（如扩展创建的面板托管的文档）才能使用这个 API。有关更多信息，请参见[扩展开发者工具](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)。

## 类型

- [`devtools.panels.ElementsPanel`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel)
  - : 表示浏览器开发者工具中的 HTML/CSS 检查器。
- [`devtools.panels.ExtensionPanel`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)
  - : 表示由扩展创建的开发者工具面板。
- [`devtools.panels.ExtensionSidebarPane`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)
  - : 表示扩展添加到浏览器开发者工具中 HTML/CSS 检查器的窗格。

## 属性

- [`devtools.panels.elements`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements)
  - : 对 [`ElementsPanel`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel) 对象的引用。
- [`devtools.panels.themeName`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/themeName)
  - : 当前开发者工具主题的名称。

## 函数

- [`devtools.panels.create()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/create)
  - : 创建一个新的开发者工具面板。

## 事件

- [`devtools.panels.onThemeChanged`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged)
  - : 当开发者工具主题更改时触发。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.devtools.panels`](https://developer.chrome.google.cn/docs/extensions/reference/api/devtools/panels) API。

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
