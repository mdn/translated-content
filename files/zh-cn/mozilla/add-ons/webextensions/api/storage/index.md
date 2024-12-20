---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
---

{{AddonSidebar}}使浏览器扩展能够储存及获取数据，以及监听储存的数据的变化。

此存储系统 API 基于 [Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API), 并有少许不同。

为了使用该 API，你需要在[manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json)文件包含"storage"[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。每一个浏览器扩展有自己的储存区域，每一个储存区域又分为几种不同的存储类型。

虽然此 API 类似于 {{domxref("Window.localStorage")}}，但仍建议你不要在插件中使用 `Window.localStorage`。当用户由于隐私原因清除历史浏览记录及数据时，火狐会将在浏览器扩展使用 `localStorage API` 存储的数据一并清除。而使用 `storage.localAPI` 存储的数据将会恰当保留。

## 类型

- {{WebExtAPIRef("storage.StorageArea")}}
  - : 代表存储区域的对象
- {{WebExtAPIRef("storage.StorageChange")}}
  - : 代表改变一个储存区域的对象

## 属性

storage 有 3 个属性，每一个代表不同的存储区域。

- {{WebExtAPIRef("storage.sync")}}
  - : 表示一个同步的储存区域。在此区域的数据通过浏览器进行同步，用户可通过登录使用不同的设备访问到浏览器所有可用的实例对象。
- {{WebExtAPIRef("storage.local")}}
  - : 表示一个本地的存储区域。此区域的数据属于其所在的插件。
- {{WebExtAPIRef("storage.managed")}}
  - : 表示管理的存储区域。此区域的数据由本域名下的管理员设置且对该插件是只读的。试图修改此区域数据会得到一个错误。

## 事件

- {{WebExtAPIRef("storage.onChanged")}}
  - : 当 storage 有数据变化时，此事件将被触发。

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> "Chrome 不兼容"这部分来源于 [https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) 使用[WebExtChromeCompat](/zh-CN/docs/Template:WebExtChromeCompat) macro.
>
> 如果需要更新这部分，请编辑 [https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities), 然后刷新页面即可看见所做更改。

### 在 Edge 中的不兼容

Promises 在 Edge 中不被支持，使用 callbacks 代替。

{{WebExtExamples("h2")}}

> [!NOTE]
> 这个 API 基于 Chromium 的 [`chrome.storage`](https://developer.chrome.google.cn/docs/extensions/reference/api/storage) API。这篇文档也来源于 Chromium 代码中的 [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json)。

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
