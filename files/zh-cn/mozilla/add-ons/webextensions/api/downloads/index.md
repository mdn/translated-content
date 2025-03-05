---
title: downloads
slug: Mozilla/Add-ons/WebExtensions/API/downloads
l10n:
  sourceCommit: f72ba695e4d6d4dd74ee71a2cc3b774410acd1ea
---

{{AddonSidebar}}

允许扩展程序与浏览器的下载管理器进行交互。你可以使用此 API 模块下载文件，取消、暂停、恢复下载，并在文件管理器中显示已下载的文件。

要使用此 API，你需要在 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中指定“downloads” [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

## 类型

- {{WebExtAPIRef("downloads.FilenameConflictAction")}}
  - : 定义当下载的文件名与现有文件冲突时的处理选项。
- {{WebExtAPIRef("downloads.InterruptReason")}}
  - : 定义下载中断的可能原因。
- {{WebExtAPIRef("downloads.DangerType")}}
  - : 定义与可下载文件相关的常见危险警告。
- {{WebExtAPIRef("downloads.State")}}
  - : 定义当前下载的不同状态。
- {{WebExtAPIRef("downloads.DownloadItem")}}
  - : 表示已下载的文件。
- {{WebExtAPIRef("downloads.StringDelta")}}
  - : 表示两个字符串之间的差异。
- {{WebExtAPIRef("downloads.DoubleDelta")}}
  - : 表示两个双精度浮点数之间的差异。
- {{WebExtAPIRef("downloads.BooleanDelta")}}
  - : 表示两个布尔值之间的差异。
- {{WebExtAPIRef("downloads.DownloadTime")}}
  - : 表示下载完成所需的时间。
- {{WebExtAPIRef("downloads.DownloadQuery")}}
  - : 定义一组参数，这些参数可用于在下载管理器中搜索特定的下载集合。

## 函数

- {{WebExtAPIRef("downloads.download()")}}
  - : 根据给定的 URL 和其他可选首选项下载文件。
- {{WebExtAPIRef("downloads.search()")}}
  - : 查询浏览器下载管理器中可用的 {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}}，并返回符合指定搜索条件的项目。
- {{WebExtAPIRef("downloads.pause()")}}
  - : 暂停下载。
- {{WebExtAPIRef("downloads.resume()")}}
  - : 恢复暂停的下载。
- {{WebExtAPIRef("downloads.cancel()")}}
  - : 取消下载。
- {{WebExtAPIRef("downloads.getFileIcon()")}}
  - : 检索指定下载的图标。
- {{WebExtAPIRef("downloads.open()")}}
  - : 使用关联的应用程序打开已下载的文件。
- {{WebExtAPIRef("downloads.show()")}}
  - : 打开平台的文件管理器应用程序，以显示包含已下载文件的文件夹。
- {{WebExtAPIRef("downloads.showDefaultFolder()")}}
  - : 打开平台的文件管理器应用程序，以显示默认的下载文件夹。
- {{WebExtAPIRef("downloads.erase()")}}
  - : 从浏览器的下载历史记录中删除匹配的 {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}}，而不从磁盘上删除下载的文件。
- {{WebExtAPIRef("downloads.removeFile()")}}
  - : 从磁盘上删除已下载的文件，但不从浏览器的下载历史记录中删除。
- {{WebExtAPIRef("downloads.acceptDanger()")}}
  - : 提示用户接受或取消危险下载。
- {{WebExtAPIRef("downloads.setShelfEnabled()")}}
  - : 启用或禁用与当前浏览器配置文件关联的每个窗口底部的灰色下载栏。只要至少有一个扩展程序禁用了下载栏，下载栏将保持禁用状态。

## 事件

- {{WebExtAPIRef("downloads.onCreated")}}
  - : 下载开始时，触发并传递 {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} 对象。
- {{WebExtAPIRef("downloads.onErased")}}
  - : 从历史记录中删除下载时，触发并传递 `downloadId`。
- {{WebExtAPIRef("downloads.onChanged")}}
  - : 当 {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} 的任何属性（除了 `bytesReceived`）发生变化时，触发并传递 `downloadId` 和包含更改属性的对象。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.downloads`](https://developer.chrome.google.cn/docs/extensions/reference/api/downloads) API。

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
