---
title: windows.Window
slug: Mozilla/Add-ons/WebExtensions/API/windows/Window
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

关于浏览器窗口的详细信息。

## 类型

该类型的取值是包含下列对象的 `objects`：

- `alwaysOnTop`
  - : `boolean`。窗口是否设置为始终置顶。
- `focused`
  - : `boolean`。窗口当前是否被聚焦。
- `height` {{optional_inline}}
  - : `integer`。包括框架的窗口的高度（以像素为单位）。
- `id` {{optional_inline}}
  - : `integer`。窗口的 ID。窗口 ID 在浏览器会话中是唯一的。
- `incognito`
  - : `boolean`。窗口是否为隐身窗口。
- `left` {{optional_inline}}
  - : `integer`。窗口距离屏幕左边缘的偏移量（以像素为单位）。
- `sessionId` {{optional_inline}}
  - : `string`。从 {{WebExtAPIRef('sessions')}} API 中取得的用于唯一表示一个窗口的会话 ID。
- `state` {{optional_inline}}
  - : {{WebExtAPIRef('windows.WindowState')}} 值，表示此浏览器窗口的状态（最大化、最小化等）。
- `tabs` {{optional_inline}}
  - : 包含窗口中当前标签页的 {{WebExtAPIRef('tabs.Tab')}} 对象数组。
- `title` {{optional_inline}}
  - : 浏览器窗口的标题。访问该属性需要活动标签页 URL 的“tabs”权限或[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。只读属性。
- `top` {{optional_inline}}
  - : `integer`。窗口距离屏幕顶部的偏移量（以像素为单位）。
- `type` {{optional_inline}}
  - : 表示此浏览器窗口类型的 {{WebExtAPIRef('windows.WindowType')}} 值。
- `width` {{optional_inline}}
  - : `integer`。包括框架的窗口的宽度（以像素为单位）。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.windows`](https://developer.chrome.google.cn/docs/extensions/reference/api/windows#type-Window) API。该文档衍生自 Chromium 代码中的 [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json)。

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
