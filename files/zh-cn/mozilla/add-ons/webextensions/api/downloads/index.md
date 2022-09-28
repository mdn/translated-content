---
title: downloads
slug: Mozilla/Add-ons/WebExtensions/API/downloads
---

{{AddonSidebar}}启用与浏览器的下载管理器交互的扩展。你可以使用这个 API 模块来下载文件、取消、暂停、恢复下载和在文件管理器中显示下载的文件。

为使用此 API，你需要在你的 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中声明 "downloads" [API 权限](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#API_permissions)。

## Types

- {{WebExtAPIRef("downloads.FilenameConflictAction")}}
  - : 定义当一个下载的文件与现存的文件命名冲突时要做什么。
- {{WebExtAPIRef("downloads.InterruptReason")}}
  - : 定义一系列中断下载的可能理由。
- {{WebExtAPIRef("downloads.DangerType")}}
  - : 定义一组与可下载文件相关的潜在危险的常见警告。
- {{WebExtAPIRef("downloads.State")}}
  - : 定义当前下载可能处于的不同状态。
- {{WebExtAPIRef("downloads.DownloadItem")}}
  - : 代表下载的文件。
- {{WebExtAPIRef("downloads.StringDelta")}}
  - : 表示两个字符串之间的差异。
- {{WebExtAPIRef("downloads.DoubleDelta")}}
  - : 代表两个双精度浮点数之间的差异。
- {{WebExtAPIRef("downloads.BooleanDelta")}}
  - : 代表两个布尔数之间的差异。
- {{WebExtAPIRef("downloads.DownloadTime")}}
  - : 代表一个下载将会花费的时间。
- {{WebExtAPIRef("downloads.DownloadQuery")}}
  - : 定义一组参数，可用于在下载管理器中搜索一组特定的下载。

## Functions

- {{WebExtAPIRef("downloads.download()")}}
  - : 下载一个文件，给出它的 URL 和其他可选的参数。
- {{WebExtAPIRef("downloads.search()")}}
  - : 查询 {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} 是否在浏览器的下载管理器中可用，返回匹配指定的搜索标准的条目。
- {{WebExtAPIRef("downloads.pause()")}}
  - : 暂停一个下载。
- {{WebExtAPIRef("downloads.resume()")}}
  - : 恢复一个暂停的下载。
- {{WebExtAPIRef("downloads.cancel()")}}
  - : 取消一个下载。
- {{WebExtAPIRef("downloads.getFileIcon()")}}
  - : 检索指定下载的图标。
- {{WebExtAPIRef("downloads.open()")}}
  - : 用下载的文件相关联的程序打开它。
- {{WebExtAPIRef("downloads.show()")}}
  - : 打开当前平台的文件管理应用来在它包含的文件夹中显示下载的文件。
- {{WebExtAPIRef("downloads.showDefaultFolder()")}}
  - : 用当前平台的文件管理应用显示默认下载文件夹。
- {{WebExtAPIRef("downloads.erase()")}}
  - : 擦除浏览器的下载历史中匹配 {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} 的下载记录，不会在磁盘中删除文件。
- {{WebExtAPIRef("downloads.removeFile()")}}
  - : 从磁盘中移除下载的文件，但不从浏览器的下载历史中去除。
- {{WebExtAPIRef("downloads.acceptDanger()")}}
  - : 提示用户接受或取消危险的下载。
- {{WebExtAPIRef("downloads.drag()")}}
  - : 将下载的文件拖动到另一个应用程序。
- {{WebExtAPIRef("downloads.setShelfEnabled()")}}
  - : 启用或禁用与当前浏览器配置文件关联的每个窗口底部的灰色架子。只要至少一个扩展名已禁用该架子，它就会被禁用。

## Events

- {{WebExtAPIRef("downloads.onCreated")}}
  - : 当一个下载开始时被 {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} 对象触发。
- {{WebExtAPIRef("downloads.onErased")}}
  - : 当一个下载从历史中擦除时被 Fires with the `downloadId` 触发。
- {{WebExtAPIRef("downloads.onChanged")}}
  - : 当任意一个 {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} 的属性期望 `bytesReceived` 改变时，此事件被这个 `downloadId` 和包含了变化属性的对象触发。

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> **备注：** This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.com/extensions/downloads) API.
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
