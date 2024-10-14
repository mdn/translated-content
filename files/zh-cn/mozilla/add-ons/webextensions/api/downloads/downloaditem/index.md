---
title: downloads.DownloadItem
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
---

{{AddonSidebar}}

{{WebExtAPIRef("downloads")}} API 的 `DownloadItem` 类代表了一个被下载的文件。

## Type

这个类型的值是对象，包含了以下属性：

- `byExtensionId`{{optional_inline}}
  - : 一个代表了触发此下载的扩展的 ID 的 `string` （如果是被扩展触发的话）。一旦设置，不会改变。如果下载不是由扩展触发的，则为 undefined。
- `byExtensionName`{{optional_inline}}
  - : 一个代表了触发此下载的扩展的名字的 `string` （如果是被扩展触发的话）。如果用户改变了扩展的语言环境，则这个属性的值也可能变化。如果下载不是由扩展触发的，则为 undefined。
- `bytesReceived`
  - : 一个代表了在下载过程中从主机接收到的字节数的 `number` ；不考虑文件压缩。
- `canResume`
  - : 一个标识当前中断（例如暂停）的下载是否可以从当前位置恢复的 `boolean`。
- `danger`
  - : 一个标识这个下载是否通过一个不安全的或已知的可疑的站点。可能被设置为 {{WebExtAPIRef('downloads.DangerType')}} 类型。
- `endTime`{{optional_inline}}
  - : A `string` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) representing the number of milliseconds between the UNIX epoch and when this download ended. This is undefined if the download has not yet finished.
- `error`{{optional_inline}}
  - : A string indicating why a download was interrupted. Possible values are defined in the {{WebExtAPIRef('downloads.InterruptReason')}} type. This is undefined if an error has not occurred.
- `estimatedEndTime`{{optional_inline}}
  - : A `string` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) representing the estimated number of milliseconds between the UNIX epoch and when this download is estimated to be completed. This is undefined if it is not known (in particular, it is undefined in the `DownloadItem` that's passed into {{WebExtAPIRef("downloads.onCreated")}}).
- `exists`
  - : A `boolean` indicating whether a downloaded file still exists (`true`) or not (`false`). This information might be out-of-date, as browsers do not automatically watch for file removal — to check whether a file exists, call the {{WebExtAPIRef('downloads.search()')}} method, filtering for the file in question.
- `filename`
  - : A `string` representing the file's absolute local path.
- `fileSize`
  - : A `number` indicating the total number of bytes in the whole file, after decompression. A value of -1 here means that the total file size is unknown.
- `id`
  - : An `integer` representing a unique identifier for the downloaded file that is persistent across browser sessions.
- `incognito`
  - : A `boolean` that indicates whether the download is recorded in the browser's history (`false`), or not (`true`).
- `mime`
  - : A `string` representing the downloaded file's MIME type.
- `paused`
  - : A `boolean` indicating whether the download is paused, i.e. if the download has stopped reading data from the host but has kept the connection open. If so, the value is `true`, `false` if not.
- `referrer`
  - : A `string` representing the downloaded file's referrer.
- `startTime`
  - : A `string` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format) representing the number of milliseconds between the UNIX epoch and when this download began.
- `state`
  - : A `string` Indicating whether the download is progressing, interrupted, or complete. Possible values are defined in the {{WebExtAPIRef('downloads.State')}} type.
- `totalBytes`
  - : A `number` indicating the total number of bytes in the file being downloaded. This does not take file compression into consideration. A value of -1 here means that the total number of bytes is unknown.
- `url`
  - : A `string` representing the absolute URL from which the file was downloaded.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.downloads`](https://developer.chrome.google.cn/docs/extensions/reference/api/downloads#type-DownloadItem) API.
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
