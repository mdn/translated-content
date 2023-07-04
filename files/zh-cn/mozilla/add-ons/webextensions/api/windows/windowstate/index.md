---
title: windows.WindowState
slug: Mozilla/Add-ons/WebExtensions/API/windows/WindowState
page-type: webextension-api-type
browser-compat: webextensions.api.windows.WindowState
---

{{AddonSidebar()}}

浏览器窗口的状态。

## 枚举值

枚举值的值是字符串类型。可能的值如下：

- `"normal"`
  - : The window is at the default size or user-selected size.
- `"minimized"`
  - : The window is only visible as an icon in the taskbar or .
- `"maximized"`
  - : The window fills the screen on which it is displayed not including any screen areas reserved by the operating system.
- `"fullscreen"`
  - : The window is running as a full screen application or content in a tab is using the [Fullscreen API](/zh-CN/docs/Web/API/Fullscreen_API)
- `"docked"`
  - : A docked window occupies a fixed position relative to other windows owned by the same application.

macOS compatibility: Beginning in macOS 10.10, the default maximizing behavior for windows changed to run applications as full screen applications instead of "zoomed" windows. `fullscreen` refers to both the browser running as a full screen application and when content in a tab uses the Fullscreen API.

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> **备注：** 此 API 基于谷歌浏览器 [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/windows/#type-WindowState) API。此文档源于谷歌源码 [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) .
>
> 微软 Edge 浏览器兼容性数据由微软公司提供，并包含在美国 Creative Commons Attribution 3.0 许可证下。

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
