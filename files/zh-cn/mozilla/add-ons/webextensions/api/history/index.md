---
title: history
slug: Mozilla/Add-ons/WebExtensions/API/history
---

{{AddonSidebar}}

使用 `history` API 与浏览器历史记录进行交互。

> [!NOTE]
> 下载也被当做一个 [`HistoryItem`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem) 对象。因此，[`history.onVisited`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited)等事件也会被下载所触发。

浏览器历史记录是对用户所访问的页面按时间顺序进行的记录和保存。history API 可以帮你实现以下功能：

- [查找浏览器历史记录中出现过的页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history/search)
- [移除浏览器历史记录中的单个页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteUrl)
- [向浏览器历史记录中添加页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history/addUrl)
- [移除所有浏览器历史记录中的页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteAll)

然而，用户可能多次访问单个页面，因此 API 中有访问集合“visits”的概念。所以，该 API 还可以做如下使用：

- [获取用户对单个页面的所有访问记录的集合](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history/getVisits)
- [移除给定期间内任意页面的访问记录的集合](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteRange)

使用该 API 之前，扩展程序必须在其 [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中获取 history 的[许可](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 类型

- {{WebExtAPIRef("history.TransitionType")}}
  - : 描述浏览器如何转到特定页面。
- {{WebExtAPIRef("history.HistoryItem")}}
  - : 提供浏览器历史记录中单个特定页面的详细信息。
- {{WebExtAPIRef("history.VisitItem")}}
  - : 描述对一个页面的单次访问。

## 方法

- {{WebExtAPIRef("history.search()")}}
  - : 在浏览器历史记录中查找符合给定条件的[`history.HistoryItem`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/History/HistoryItem)
- {{WebExtAPIRef("history.getVisits()")}}
  - : 获取指定页面的访问集信息。
- {{WebExtAPIRef("history.addUrl()")}}
  - : 为浏览器历史记录添加一个指定页面的访问。
- {{WebExtAPIRef("history.deleteUrl()")}}
  - : 移除浏览器历史记录中所有对指定 URL 的访问。
- {{WebExtAPIRef("history.deleteRange()")}}
  - : 移除指定时间段内对用户指定页面的访问。
- {{WebExtAPIRef("history.deleteAll()")}}
  - : 移除浏览器历史记录中的所有访问。

## 事件

- {{WebExtAPIRef("history.onTitleChanged")}}
  - : 当用户访问的页面标题被记录时触发。
- {{WebExtAPIRef("history.onVisited")}}
  - : 每次用户访问页面时会触发，并提供该页面的 {{WebExtAPIRef("history.HistoryItem")}} 数据。
- {{WebExtAPIRef("history.onVisitRemoved")}}
  - : 当一个 URL 被彻底从浏览器历史记录中移除时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.history`](https://developer.chrome.google.cn/docs/extensions/reference/api/history) API。该文档由 Chromium 代码中的 [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) 衍生而来。

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
