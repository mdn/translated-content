---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

获取和设置扩展的侧边栏的属性。

[侧边栏](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)是显示在浏览器窗口左侧或右侧紧挨着网页部分的面板。浏览器提供了相应的用户界面，让用户可以查看当前可用的侧边栏，并选择要显示的侧边栏。使用 [`sidebar_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) manifest.json 键，扩展可以定义自己的侧边栏。使用这里描述的 `sidebarAction` API，扩展可以获取和设置侧边栏的属性。

`sidebarAction` API 与 {{WebExtAPIRef("browserAction")}} API 非常相似。

sidebarAction API 是基于 Opera 的 [sidebarAction API](https://help.opera.com/en/extensions/sidebar-action-api/)。但是请注意，以下特性尚不支持：`setBadgeText()`、`getBadgeText()`、`setBadgeBackgroundColor()`、`getBadgeBackgroundColor()`、`onFocus`、`onBlur`。

## 类型

- {{WebExtAPIRef("sidebarAction.ImageDataType")}}
  - : 图像的像素数据。必须为一个 [`ImageData`](/zh-CN/docs/Web/API/ImageData) 对象（例如，来自一个 {{htmlelement("canvas")}} 元素）。

### 函数

- {{WebExtAPIRef("sidebarAction.close()")}}
  - : 关闭侧边栏。
- {{WebExtAPIRef("sidebarAction.getPanel()")}}
  - : 获取侧边栏的面板。
- {{WebExtAPIRef("sidebarAction.getTitle()")}}
  - : 获取侧边栏的标题。
- {{WebExtAPIRef("sidebarAction.isOpen()")}}
  - : 检查侧边栏是否打开。
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : 打开侧边栏。
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : 设置侧边栏的图标。
- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : 设置侧边栏的面板。
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : 设置侧边栏的标题。这将在浏览器提供的任何 UI 中显示出来用以列出所有的侧边栏，例如在菜单之中。
- {{WebExtAPIRef("sidebarAction.toggle()")}}
  - : 切换侧边栏的可见性。

## 浏览器兼容性

{{Compat}}

## 示例附加组件

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/main/annotate-page)

> [!NOTE]
> 此 API 基于 Opera 的 [`chrome.sidebarAction`](https://help.opera.com/cn/extensions/sidebar-action-api/) API。

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
