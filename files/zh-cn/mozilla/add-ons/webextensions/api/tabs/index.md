---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
---

{{AddonSidebar}}

与浏览器标签系统进行交互。

你可以使用该 API 获取一个已打开标签的列表并且使用各种标准过滤标签，并进行 打开，刷新，移动，重载，移除操作。该 API 不能直接访问标签中的主机内容，但是你可以使用 {{WebExtAPIRef("tabs.executeScript()")}} 或者 {{WebExtAPIRef("tabs.insertCSS()")}} APIs，来插入 javascript 和 CSS。

你可以在不需要任何特殊权限的情况下使用该 APIS 的大部分，除了：

- 获取 `Tab.url`, `Tab.title`, and `Tab.favIconUrl`, 你需要拥有 "tabs" [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). 在火狐，这也意味着你需要 "tabs" ，来通过 URL 使用 {{WebExtAPIRef("tabs.query", "query")}}。
- 使用 {{WebExtAPIRef("tabs.executeScript()")}} 或者 {{WebExtAPIRef("tabs.insertCSS()")}} 你必须在目标标签拥有 [host permission](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) 。

或者你可以仅仅只为当前的活动标签临时的获取这些权限并且仅仅只响应一个显示的用户行为，请查看 ["activeTab" permission](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission).

## 枚举值

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : 确定一个标签静音与否的原因（用户修改，扩展修改）。
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : 该对象包含一个布尔值只是该标签是否静音，以及最近一次静音的原因。
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
  - : 定义缩放设置。 {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}}, 和默认缩放比例。

## 属性

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : 给予非浏览器标签的一个特殊 ID 值（比如，在开发工具中的标签）。

## 方法

- {{WebExtAPIRef("tabs.connect()")}}
  - : 在运行于该标签的任何 [content scripts](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) 和该扩展的后台脚本（或者其他的比如弹出菜单脚本或者设置页面脚本）间创建一个消息连接。
- {{WebExtAPIRef("tabs.create()")}}
  - : 创建一个新标签。
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : 创意一个数据统一资源标识符解码在规定窗口中当前活动标签的可视区域重的一个图片。
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : 检查在一个标签中的主要语言。
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : 复制一个标签
- {{WebExtAPIRef("tabs.executeScript()")}}
  - : 向一个页面注入脚本。
- {{WebExtAPIRef("tabs.get()")}}
  - : 取回制定标签的详细信息。
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : 获取指定窗口所有标签的详细信息。
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : 返回一个 [`tabs.Tab`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/Tab) 对象包含了该脚本当前的宿主标签的信息。
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : 获取在指定窗口被选定的标签。
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : 获取制定标签的缩放系数。
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : 获取指定标签的缩放设置。
- {{WebExtAPIRef("tabs.highlight()")}}
  - : 高亮显示一个或多个标签。
- {{WebExtAPIRef("tabs.insertCSS()")}}
  - : 向一个页面注入 CSS。
- {{WebExtAPIRef("tabs.removeCSS()")}}
  - : 移除之前调用{{WebExtAPIRef("tabs.insertCSS()")}} 注入的一个 css。
- {{WebExtAPIRef("tabs.move()")}}
  - : 移动一个或多个标签页到同一窗口的一个新的位置或是到不同窗口。
- {{WebExtAPIRef("tabs.query()")}}
  - : 获取所有包含指定属性的标签，如果没有属性则获取所有标签。
- {{WebExtAPIRef("tabs.reload()")}}
  - : 重载一个标签，可选的可以绕过本地缓存。
- {{WebExtAPIRef("tabs.remove()")}}
  - : 关闭一个或多个标签。
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : 向一个指定标签的 content script 发送单个消息。
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : 向一个指定标签的 content script 发送一个单一请求。 **过时**: 请使用 {{WebExtAPIRef("tabs.sendMessage()")}} 替代。
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : 缩放指定标签。
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : 为一个制定标签设置缩放选项。
- {{WebExtAPIRef("tabs.update()")}}
  - : 导航一个标签到新的地址，或是修改其它的属性。

## Events

- {{WebExtAPIRef("tabs.onActivated")}}
  - : 当窗口活动标签改变时触发，注意当该消息触发时，标签地址可能没有被设置。
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : **已过时：** 请使用 {{WebExtAPIRef("tabs.onActivated")}} 代替。
- {{WebExtAPIRef("tabs.onAttached")}}
  - : 当一个标签被附加到一个窗口时触发，因为他可能在窗口间移动。
- {{WebExtAPIRef("tabs.onCreated")}}
  - : 当一个标签被创建时触发，注意当该事件触发时可能没有设置地址。
- {{WebExtAPIRef("tabs.onDetached")}}
  - : 当一个标签脱离一个窗口时被触发。
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : **过时：** 请使用 {{WebExtAPIRef("tabs.onHighlighted")}} 代替。
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : 当一个标签被高亮显示或是被选中时触发。
- {{WebExtAPIRef("tabs.onMoved")}}
  - : 当一个标签在一个窗口内移动时被触发。
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : 当一个标签关闭时被触发。
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : 当一个标签因为预载取代另一个标签时被触发。
- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : **以过时：** 请使用 {{WebExtAPIRef("tabs.onActivated")}} 代替。
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : 当一个标签被更新时触发。
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : 当一个标签被缩放时触发

## Browser compatibility

{{Compat}}

> **备注：** The "Chrome incompatibilities" section is included from [https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities](/zh-CN/Add-ons/WebExtensions/Chrome_incompatibilities) using the [WebExtChromeCompat](/zh-CN/docs/Template:WebExtChromeCompat) macro.
>
> If you need to update this content, edit [https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities](/zh-CN/Add-ons/WebExtensions/Chrome_incompatibilities), then shift-refresh this page to see your changes.

{{WebExtExamples("h2")}}

> **备注：** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/extensions/tabs) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
