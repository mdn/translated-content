---
title: downloads.DownloadItem
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{WebExtAPIRef("downloads")}} API 的 `DownloadItem` 类型表示一个被下载的文件。

## 类型

这个类型的值是包含以下属性的对象：

- `byExtensionId`{{optional_inline}}
  - : 一个代表了触发此下载的扩展的 ID 的 `string`（如果下载是由扩展触发的）。一旦设置，不会改变。如果下载不是由扩展触发的，则为 undefined。
- `byExtensionName`{{optional_inline}}
  - : 一个代表了触发此下载的扩展的名字的 `string`（如果下载是由扩展触发的）。如果用户改变了扩展的语言环境，则这个属性的值也可能变化。如果下载不是由扩展触发的，则为 undefined。
- `bytesReceived`
  - : 一个代表了在下载过程中从主机接收到的字节数的 `number`；此处不考虑文件的压缩。
- `canResume`
  - : 一个标识当前中断（例如暂停）的下载是否可以从当前位置恢复的 `boolean`，如果可以恢复则为 `true`，否则为 `false`。
- `cookieStoreId` {{optional_inline}}
  - : 进行下载操作的[场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)的 cookie 存储 ID。详细信息请参见[使用场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `danger`
  - : 一个 `string`，标识这个下载是否通过一个不安全的或已知的可疑的站点。其可能的值在 {{WebExtAPIRef('downloads.DangerType')}} 类型中定义。
- `endTime`{{optional_inline}}
  - : 一个 `string`（采用 [ISO 8601](https://zh.wikipedia.org/wiki/ISO_8601) 格式），表示从 UNIX 纪元到此下载结束时的毫秒数。如果下载尚未完成，则为 undefined。
- `error`{{optional_inline}}
  - : 一个 `string`，指示下载中断的原因。可能的值在 {{WebExtAPIRef('downloads.InterruptReason')}} 类型中定义。如果未发生错误，则为 undefined。
- `estimatedEndTime`{{optional_inline}}
  - : 一个 `string`（采用 [ISO 8601](https://zh.wikipedia.org/wiki/ISO_8601) 格式），表示从 UNIX 纪元到预计下载完成时的毫秒数。如果未知（特别是在传递给 {{WebExtAPIRef("downloads.onCreated")}} 的 `DownloadItem` 中），则为 undefined。
- `exists`
  - : 一个 `boolean`，指示下载的文件是否仍然存在（`true`）或不存在（`false`）。此信息可能已过时，因为浏览器不会自动监视文件删除情况——要检查文件是否存在，请调用 {{WebExtAPIRef('downloads.search()')}} 方法，并过滤相关文件。
- `filename`
  - : 一个 `string`，表示文件的本地绝对路径。
- `fileSize`
  - : 一个 `number`，表示整个文件的总字节数（解压后）。如果此处的值为 -1，则表示文件的总大小未知。
- `id`
  - : 一个 `integer`，表示下载文件的唯一标识符，该标识符在浏览器会话之间保持不变。
- `incognito`
  - : 一个 `boolean`，指示下载是否记录在浏览器的历史记录中（`false`），或未记录（`true`）。
- `mime`
  - : 一个 `string`，表示下载文件的 MIME 类型。
- `paused`
  - : 一个 `boolean`，指示下载是否已暂停，即下载是否已停止从主机读取数据但保持连接打开。如果是，则值为 `true`，否则为 `false`。
- `referrer`
  - : 一个 `string`，表示下载文件的引用来源。
- `startTime`
  - : 一个 `string`（采用 [ISO 8601](https://zh.wikipedia.org/wiki/ISO_8601) 格式），表示从 UNIX 纪元到此下载开始时的毫秒数。
- `state`
  - : 一个 `string`，指示下载是正在进行中、中断还是已完成。可能的值在 {{WebExtAPIRef('downloads.State')}} 类型中定义。
- `totalBytes`
  - : 一个 `number`，表示正在下载的文件的总字节数。此处不考虑文件的压缩。如果此处的值为 -1，则表示文件的总字节数未知。
- `url`
  - : 一个 `string`，表示文件下载的绝对 URL。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.downloads`](https://developer.chrome.google.cn/docs/extensions/reference/api/downloads#type-DownloadItem) API。

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
