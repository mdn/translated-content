---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
l10n:
  sourceCommit: 05808d3600f3a5b856eaaf89359f1fdc3d255c26
---

添加按钮到浏览器的工具栏。

[浏览器操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)是浏览器工具栏中的一个按钮。

你可以为该按钮指派一个弹出窗。弹出窗可采用 HTML、CSS 和 JavaScript 编写，就像是一个普通的网页。运行在该弹出窗中的 JavaScript 可以同你的后台脚本一样访问所有的 WebExtension API，但它的全局上下文是该弹出窗，而不是浏览器中的当前页面。要影响网页，你需要通过[消息](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#消息)通信。

如果你指定了弹出窗，它将显示——内容将在用户点击该图标时被加载。如果你没有指定一个弹出窗，用户单击该图标的事件将派发到你的扩展。

该按钮还具有上下文菜单，你可以使用 {{WebExtAPIRef("menus")}} API 通过 `browser_action` {{WebExtAPIRef("menus.ContextType")}} 向此菜单添加项目。

你可以使用 manifest.json 中的 [`browser_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) 键以声明方式定义大多数浏览器操作的属性。

使用 `browserAction` API，你可以：

- 使用 {{WebExtAPIRef("browserAction.onClicked")}} 监听该图标的点击事件。
- 获取和设置该图标的属性——图标、标题、弹出窗等。你可以在所有标签页上全局获取和设置这些属性，或者通过将标签页 ID 作为额外参数传递来针对特定标签页进行操作。

## 类型

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : 0-255 范围内的四个整数的数组，定义 RGBA 颜色。
- {{WebExtAPIRef("browserAction.ImageDataType")}}
  - : 一个图像的像素数据。必须为一个 [`ImageData`](/zh-CN/docs/Web/API/ImageData) 对象（例如，来自一个 {{htmlelement("canvas")}} 元素）。

## 函数

- {{WebExtAPIRef("browserAction.setTitle()")}}
  - : 设置浏览器动作的标题。这将在工具提示（鼠标悬停时）显示。
- {{WebExtAPIRef("browserAction.getTitle()")}}
  - : 获取浏览器动作的标题。
- {{WebExtAPIRef("browserAction.setIcon()")}}
  - : 设置浏览器动作的图标。
- {{WebExtAPIRef("browserAction.setPopup()")}}
  - : 设置 HTML 文档作为浏览器动作图标被用户点击时显示的弹出窗。
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : 获取作为浏览器动作的弹出窗的 HTML 文档。
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : 打开浏览器操作的弹出窗口。
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : 设置浏览器动作的徽章文本。该徽章显示在图标上方。
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : 获取浏览器动作的徽章文本。
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : 设置徽章的后台颜色。
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : 获取徽章的后台颜色。
- {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}
  - : 设置徽章的文本颜色。
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}}
  - : 获取徽章的文本颜色。
- {{WebExtAPIRef("browserAction.getUserSettings()")}}
  - : 获取浏览器操作的用户指定设置。
- {{WebExtAPIRef("browserAction.enable()")}}
  - : 为一个标签页启用浏览器动作。默认情况下，浏览器动作为所有标签页启用。
- {{WebExtAPIRef("browserAction.disable()")}}
  - : 为一个标签页禁用浏览器动作，使该标签页为活动时无法单击它。
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : 检查浏览器操作是否已启用。

## 事件

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : 在浏览器动作图标点击时被触发。如果浏览器动作有弹出窗，则该事件不会触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browserAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/browserAction) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
