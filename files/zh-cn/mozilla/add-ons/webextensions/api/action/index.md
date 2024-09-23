---
title: action
slug: Mozilla/Add-ons/WebExtensions/API/action
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

用于读取和修改使用 [`action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) 清单键定义的浏览器工具栏按钮的属性，以及监听按钮的点击事件。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。它替代了 Manifest V2 API {{WebExtAPIRef("browserAction")}}，以及在 Chrome、Safari 中的 {{WebExtAPIRef("pageAction")}}。

[浏览器操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)是浏览器工具栏中的一个按钮。

你可以将弹窗与按钮关联。与网页一样，弹窗使用 HTML、CSS 和 JavaScript 指定。在弹窗中运行的 JavaScript 可以访问与后台脚本相同的 WebExtension API，但其全局上下文是弹窗，而不是浏览器中显示的当前页面。要影响网页，你需要通过[消息](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#消息)与网页进行通信。

如果指定了弹窗，当用户点击图标时，它会显示并加载内容。如果没有指定弹窗，当用户点击图标时，会向你的扩展发送一个事件。

按钮还有一个上下文菜单。你可以利用 {{WebExtAPIRef("menus")}} API 中 `action` 的 {{WebExtAPIRef("menus.ContextType")}} 添加上下文菜单项。

使用 `action` API，你可以：

- 使用 {{WebExtAPIRef("action.onClicked")}} 监听图标的点击事件。
- 获取和设置图标的属性（图标、标题、弹窗等）。你可以获取和设置这些属性的全局值（针对所有标签页），也可以通过传递标签页 id 作为额外参数来对某个标签页单独获取和设置这些属性。

## 类型

- {{WebExtAPIRef("action.ColorArray")}}
  - : 四个范围在 0-255 间的整型组成的数组，表示一个 RGBA 颜色。
- {{WebExtAPIRef("action.ImageDataType")}}
  - : 图片的像素数据，必须是一个 [`ImageData`](/zh-CN/docs/Web/API/ImageData) 对象（如来源于一个 {{htmlelement("canvas")}} 元素）。

## 函数

- {{WebExtAPIRef("action.setTitle()")}}
  - : 设置浏览器操作的标题。这会在工具提示中显示出来。
- {{WebExtAPIRef("action.getTitle()")}}
  - : 获取浏览器操作的标题。
- {{WebExtAPIRef("action.setIcon()")}}
  - : 设置浏览器操作的图标。
- {{WebExtAPIRef("action.setPopup()")}}
  - : 设置用户单击浏览器操作图标时打开的弹窗所用的 HTML 文档。
- {{WebExtAPIRef("action.getPopup()")}}
  - : 设置用户单击浏览器操作图标时打开的弹窗所用的 HTML 文档。
- {{WebExtAPIRef("action.openPopup()")}}
  - : 打开浏览器操作的弹窗。
- {{WebExtAPIRef("action.setBadgeText()")}}
  - : 设置浏览器操作的徽标文本（徽标将显示在图标上方）。
- {{WebExtAPIRef("action.getBadgeText()")}}
  - : 获取浏览器操作的徽标文本。
- {{WebExtAPIRef("action.setBadgeBackgroundColor()")}}
  - : 设置徽标的背景颜色。
- {{WebExtAPIRef("action.getBadgeBackgroundColor()")}}
  - : 获取徽标的背景颜色。
- {{WebExtAPIRef("action.setBadgeTextColor()")}}
  - : 设置徽标的文本颜色。
- {{WebExtAPIRef("action.getBadgeTextColor()")}}
  - : 获取徽标的文本颜色。
- {{WebExtAPIRef("action.getUserSettings()")}}
  - : 获取浏览器操作的用户设置。
- {{WebExtAPIRef("action.enable()")}}
  - : 启用某一个标签页的浏览器操作。默认情况下，所有标签页的浏览器操作都是启用的。
- {{WebExtAPIRef("action.disable()")}}
  - : 禁用某一个标签页的浏览器操作，意味着当该标签页处于活动状态时浏览器操作将无法被点击。
- {{WebExtAPIRef("action.isEnabled()")}}
  - : 检查浏览器操作是否被启用。

## 事件

- {{WebExtAPIRef("action.onClicked")}}
  - : 当浏览器操作图标被点击时触发。当浏览器操作有弹窗时该事件不会触发。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.action`](https://developer.chrome.google.cn/docs/extensions/reference/api/action) API。该文档衍生自 Chromium 代码中的 [`action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/action.json)。

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
