---
title: windows.WindowState
slug: Mozilla/Add-ons/WebExtensions/API/windows/WindowState
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

浏览器窗口的状态。

## 类型

该类型的取值是 `string`，可能取值包括：

- `"normal"`
  - : 窗口处于默认大小或用户选择的大小。
- `"minimized"`
  - : 窗口只显示为任务栏中的图标。
- `"maximized"`
  - : 窗口充满显示它的屏幕（但不包括操作系统保留的任何屏幕区域）。
- `"fullscreen"`
  - : 窗口正在作为全屏应用程序运行，或者标签页中的内容正在使用[全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)。
- `"docked"`
  - : 靠边窗口占据了相对于同一应用程序拥有的其他窗口的固定位置。

macOS 兼容性：自 macOS 10.10 起，窗口的默认最大化行为已变为将应用程序作为全屏应用程序运行而非“缩放”窗口。`fullscreen` 既指浏览器作为全屏应用程序运行，也指标签中的内容使用了全屏 API。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.windows`](https://developer.chrome.google.cn/docs/extensions/reference/api/windows#type-WindowState) API。该文档衍生自 Chromium 代码中的 [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json)。

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
