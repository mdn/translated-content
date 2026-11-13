---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
l10n:
  sourceCommit: bb031733da9f5678de3cdc5b561123b111b3b2fc
---

与浏览器标签系统进行交互。

> [!NOTE]
> 使用 Manifest V3 或更高版本时，通过 {{WebExtAPIRef("scripting")}} API 提供的方法来执行脚本、插入 CSS 和移除 CSS，这些方法分别是 {{WebExtAPIRef("scripting.executeScript()")}}、{{WebExtAPIRef("scripting.insertCSS()")}} 和 {{WebExtAPIRef("scripting.removeCSS()")}}。

你可以使用该 API 获取一个已打开标签的列表并且使用各种标准过滤标签，并进行打开、刷新、移动、重载和移除操作。该 API 不能直接访问标签中的主机内容，但是你可以使用 {{WebExtAPIRef("tabs.executeScript()")}} 或者 {{WebExtAPIRef("tabs.insertCSS()")}} API，来插入 JavaScript 和 CSS。

你可以在不需要任何特殊权限的情况下使用该 API 的大部分，除了：

- 要访问 `Tab.url`、`Tab.title` 和 `Tab.favIconUrl`（或通过 {{WebExtAPIRef("tabs.query()")}} 过滤这些属性），需要具备 `"tabs"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)，或者具备匹配 `Tab.url` 的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。
  - 自 Firefox 86 和 Chrome 50 起，基于主机权限访问这些属性得到了支持。在 Firefox 85 及更早版本中，则需要“tabs”权限。

- 使用 {{WebExtAPIRef("tabs.executeScript()")}} 或者 {{WebExtAPIRef("tabs.insertCSS()")}} 你必须在目标标签拥有[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)。

或者你可以仅仅只为当前的活动标签临时的获取这些权限并且仅仅只响应一个显示的用户行为，请查看 [`"activeTab"` 的权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission)。

许多标签页操作使用标签页 `id`。标签页 `id` 在浏览器会话内对每个标签页是唯一的。如果浏览器重启，那么它可以并且会重新使用标签页 `id`。要在浏览器重启后仍与标签页关联信息，请使用 {{WebExtAPIRef("sessions.setTabValue()")}}。

## 类型

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : 指定一个标签被静音或被取消静音的原因。
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : 该对象包含一个布尔值指示该标签是否静音，以及最近一次状态改变的原因。
- {{WebExtAPIRef("tabs.PageSettings")}}
  - : 用于通过 [`tabs.saveAsPDF()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) 方法控制标签页如何渲染为 PDF。
- {{WebExtAPIRef("tabs.Tab")}}
  - : 该值包含了一个标签的信息。
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : 指示某个标签是否已经加载完成
- {{WebExtAPIRef("tabs.WindowType")}}
  - : 包含该标签的窗口类型。
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : 定义缩放由浏览器控制或是扩展，或者禁用。
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : 定义缩放将对某个网址持续生效，或者仅仅只针对该标签。
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : 定义缩放设置。{{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}、{{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}} 和默认缩放比例。

## 属性

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : 给予非浏览器标签的一个特殊 ID 值（比如，在开发者工具中的标签）。

## 函数

- {{WebExtAPIRef("tabs.captureTab()")}}
  - : 创建一个数据 URL，编码给定标签页可见区域的图像。
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : 创建一个数据 URL，编码指定窗口中当前活动标签页的可见区域的图像。
- {{WebExtAPIRef("tabs.connect()")}}
  - : 在扩展的后台脚本（或其他特权脚本，例如弹出脚本或选项页面脚本）与在指定标签页中运行的任何[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)之间建立消息连接。
- {{WebExtAPIRef("tabs.create()")}}
  - : 创建一个新标签。
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : 检测标签页中内容的首选语言。
- {{WebExtAPIRef("tabs.discard()")}}
  - : 丢弃一个或多个标签页。
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : 复制一个标签
- {{WebExtAPIRef("tabs.executeScript()")}}（仅 Manifest V2）
  - : 向一个页面注入脚本。
- {{WebExtAPIRef("tabs.get()")}}
  - : 取回制定标签的详细信息。
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : 获取指定窗口所有标签的详细信息。
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : 返回一个 [`tabs.Tab`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)。该对象包含了该脚本当前的宿主标签的信息。
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : 获取在指定窗口被选定的标签。**已弃用**：请改用 [`tabs.query({active: true})`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)。
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : 获取制定标签的缩放系数。
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : 获取指定标签的缩放设置。
- {{WebExtAPIRef("tabs.goForward()")}}
  - : 前进到下一页（如果有的话）。
- {{WebExtAPIRef("tabs.goBack()")}}
  - : 返回到上一页（如果有的话）。
- {{WebExtAPIRef("tabs.hide()")}} {{experimental_inline}}
  - : 隐藏一个或多个标签页。
- {{WebExtAPIRef("tabs.highlight()")}}
  - : 高亮显示一个或多个标签。
- {{WebExtAPIRef("tabs.insertCSS()")}}（仅 Manifest V2）
  - : 向一个页面注入 CSS。
- {{WebExtAPIRef("tabs.move()")}}
  - : 移动一个或多个标签页到同一窗口的一个新的位置或是到不同窗口。
- {{WebExtApiRef("tabs.moveInSuccession()")}}
  - : 修改一组标签页的顺序关系。
- {{WebExtAPIRef("tabs.print()")}}
  - : 打印激活的标签页的内容。
- {{WebExtAPIRef("tabs.printPreview()")}}
  - : 打开激活的标签页的打印预览。
- {{WebExtAPIRef("tabs.query()")}}
  - : 获取所有包含指定属性的标签，如果没有属性则获取所有标签。
- {{WebExtAPIRef("tabs.reload()")}}
  - : 重新加载标签页，可选择是否绕过本地 Web 缓存。
- {{WebExtAPIRef("tabs.remove()")}}
  - : 关闭一个或多个标签。
- {{WebExtAPIRef("tabs.removeCSS()")}}（仅 Manifest V2）
  - : 移除之前调用 {{WebExtAPIRef("tabs.insertCSS()")}} 注入的 CSS。
- {{WebExtAPIRef("tabs.saveAsPDF()")}}
  - : 将当前页面保存为 PDF 格式。
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : 向一个指定标签的 content script 发送单个消息。
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : 向指定标签页的内容脚本发送单个请求。**已弃用**：请使用 {{WebExtAPIRef("tabs.sendMessage()")}} 替代。
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : 缩放指定标签。
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : 为一个制定标签设置缩放选项。
- {{WebExtAPIRef("tabs.show()")}}
  - : 显示一个或多个已经被隐藏的标签页。
- {{WebExtAPIRef("tabs.toggleReaderMode()")}}
  - : 切换指定标签页的阅读器模式。
- {{WebExtAPIRef("tabs.update()")}}
  - : 将标签页导航到新的 URL，或修改标签页的其他属性。
- {{WebExtAPIRef("tabs.warmup()")}}
  - : 准备标签页，以加快可能的后续切换速度。

## 事件

- {{WebExtAPIRef("tabs.onActivated")}}
  - : 当窗口活动标签改变时触发，注意当该消息触发时，标签地址可能没有被设置。
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : 窗口中选定的标签页发生更改时触发。**已弃用** ：请使用 {{WebExtAPIRef("tabs.onActivated")}} 代替。
- {{WebExtAPIRef("tabs.onAttached")}}
  - : 当一个标签被附加到一个窗口时触发，因为他可能在窗口间移动。
- {{WebExtAPIRef("tabs.onCreated")}}
  - : 当一个标签被创建时触发，注意当该事件触发时可能没有设置地址。
- {{WebExtAPIRef("tabs.onDetached")}}
  - : 当一个标签脱离一个窗口时被触发。
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : 在窗口中选定的或突出显示的标签页发生更改时触发。**已弃用**：请使用 {{WebExtAPIRef("tabs.onHighlighted")}} 代替。
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : 当一个标签被高亮显示或是被选中时触发。
- {{WebExtAPIRef("tabs.onMoved")}}
  - : 当一个标签在一个窗口内移动时被触发。
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : 当一个标签关闭时被触发。
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : 当一个标签因为预载取代另一个标签时被触发。
- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : 窗口中所选标签页更改时触发。**已弃用**：请使用 {{WebExtAPIRef("tabs.onActivated")}} 代替。
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : 当一个标签被更新时触发。
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : 当一个标签被缩放时触发

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
