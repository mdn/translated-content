---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

使扩展程序能够清除用户在浏览时积累的数据。

在 `browsingData` API 中，浏览数据被分为以下类型：

- 浏览器缓存
- cookie
- 下载
- 历史记录
- 本地存储
- 插件数据
- 已保存的表单数据
- 已保存的密码

你可以使用 {{WebExtAPIRef("browsingData.remove()")}} 函数来移除这些类型的任何组合。还有专门的函数用于移除每种特定类型的数据，例如 {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}、{{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} 等等。

所有的 `browsingData.remove[X]()` 函数都接受一个 {{WebExtAPIRef("browsingData.RemovalOptions")}} 对象，你可以使用它来进一步控制数据移除的两个方面：

- 删除多久以前的数据
- 是否仅从普通网页中移除数据，还是同时从托管的 Web 应用程序和插件中移除数据。请注意，Firefox 尚不受支持此选项。

最后，此 API 还提供了一个 {{WebExtAPIRef("browsingData.settings()")}} 函数，用于获取浏览器内置“清除历史记录”特性的当前设置值。

要使用此 API，你必须具有“browsingData” [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

## 类型

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : 用于指定要移除的数据类型的对象：例如历史记录、下载、密码等。
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : 用于指定在时间轴上移除数据的范围，以及是否仅从普通网络浏览、托管的应用程序或插件中移除数据的对象。

## 方法

- {{WebExtAPIRef("browsingData.remove()")}}
  - : 移除指定数据类型（例如，历史记录、下载、密码，等等）的浏览数据。
- {{WebExtAPIRef("browsingData.removeCache()")}}
  - : 清除浏览器的缓存。
- {{WebExtAPIRef("browsingData.removeCookies()")}}
  - : 移除 cookie。
- {{WebExtAPIRef("browsingData.removeDownloads()")}}
  - : 移除下载文件列表。
- {{WebExtAPIRef("browsingData.removeFormData()")}}
  - : 清除已保存的表单数据。
- {{WebExtAPIRef("browsingData.removeHistory()")}}
  - : 清除浏览器的历史记录。
- {{WebExtAPIRef("browsingData.removeLocalStorage()")}}
  - : 清除网站创建的任何[本地存储](/zh-CN/docs/Web/API/Window/localStorage)。
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : 清除已保存的密码。
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : 清除与插件相关的数据。
- {{WebExtAPIRef("browsingData.settings()")}}
  - : 获取浏览器“清除历史记录”特性的当前设置值。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browsingData`](https://developer.chrome.google.cn/docs/extensions/reference/api/browsingData) API。

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
