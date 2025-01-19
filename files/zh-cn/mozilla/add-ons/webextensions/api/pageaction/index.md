---
title: pageAction
slug: Mozilla/Add-ons/WebExtensions/API/pageAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

读取和修改使用 [`page_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) 清单键定义的浏览器地址栏按钮的属性，并监听按钮的点击事件。

[地址栏按钮](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)是一个添加到浏览器地址栏中的按钮。

![代表一个页面操作的脚印图标](page-action.png)

你可以在后台脚本中监听该图标的点击事件，或者指定一个在图标被点击时打开的[弹窗](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)。

如果你指定了弹窗，你可以使用 HTML、CSS 和 JavaScript 来定义其内容和行为。运行在弹出框中的 JavaScript 可以访问与后台脚本相同的 WebExtension API。尽管被称为 `pageAction`，该操作代码并不能直接访问网页内容。若需操作网页 DOM，你需要添加一个[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)并与其交互。

该按钮还包含一个上下文菜单。借助 {{WebExtAPIRef("menus")}} API，你可以通过使用 `page_action` {{WebExtAPIRef("menus.ContextType")}} 来向该菜单添加项目。

页面操作适用于只与特定页面相关的功能（如“将当前标签页加入书签”）。如果功能与整个浏览器相关（如“显示所有书签”），则请使用[浏览器操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)。

## 类型

- {{WebExtAPIRef("pageAction.ImageDataType")}}
  - : 表示图像的像素数据。

## 函数

- {{WebExtAPIRef("pageAction.show()")}}
  - : 在指定标签页中显示页面操作按钮。
- {{WebExtAPIRef("pageAction.hide()")}}
  - : 在指定标签页中隐藏页面操作按钮。
- {{WebExtAPIRef("pageAction.isShown()")}}
  - : 检查页面操作按钮是否正在显示。
- {{WebExtAPIRef("pageAction.setTitle()")}}
  - : 设置页面操作的标题。该标题会显示在按钮的工具提示中。
- {{WebExtAPIRef("pageAction.getTitle()")}}
  - : 获取页面操作的标题。
- {{WebExtAPIRef("pageAction.setIcon()")}}
  - : 设置页面操作的图标。
- {{WebExtAPIRef("pageAction.setPopup()")}}
  - : 设置页面操作的弹窗的 URL。
- {{WebExtAPIRef("pageAction.getPopup()")}}
  - : 获取页面操作的弹窗的 URL。
- {{WebExtAPIRef("pageAction.openPopup()")}}
  - : 打开页面操作的弹窗。

## 事件

- {{WebExtAPIRef("pageAction.onClicked")}}
  - : 当页面操作图标被点击时触发。如果页面操作有弹窗，则该事件将不会被触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.pageAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/pageAction) API。本文衍生自 Chromium 代码中的 [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json)。

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
