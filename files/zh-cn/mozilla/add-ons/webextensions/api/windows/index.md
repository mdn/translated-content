---
title: windows
slug: Mozilla/Add-ons/WebExtensions/API/windows
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

与浏览器窗口互动。你可以使用此 API 获取有关已打开窗口的信息，以及打开、修改和关闭窗口。你也可以监听窗口的打开、关闭和其激活事件。

## 类型

- {{WebExtAPIRef("windows.WindowType")}}
  - : 浏览器窗口的类型。
- {{WebExtAPIRef("windows.WindowState")}}
  - : 浏览器窗口的状态。
- {{WebExtAPIRef("windows.Window")}}
  - : 有关一个浏览器窗口的信息。
- {{WebExtAPIRef("windows.CreateType")}}
  - : 指定要创建的浏览器窗口的类型。

## 属性

- {{WebExtAPIRef("windows.WINDOW_ID_NONE")}}
  - : 表示不存在浏览器窗口的 `windowId` 值。
- {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}
  - : 可在部分 API 中作为 `windowId` 参数来表示当前窗口的值。

## 函数

- {{WebExtAPIRef("windows.get()")}}
  - : 获取给定 ID 的窗口信息。
- {{WebExtAPIRef("windows.getCurrent()")}}
  - : 获取当前窗口。
- {{WebExtAPIRef("windows.getLastFocused()")}}
  - : 获取最近获得焦点的窗口（通常是“最上层”的窗口）。
- {{WebExtAPIRef("windows.getAll()")}}
  - : 获取所有窗口。
- {{WebExtAPIRef("windows.create()")}}
  - : 创建新窗口。
- {{WebExtAPIRef("windows.update()")}}
  - : 更新一个窗口的属性。使用该函数移动窗口、调整窗口大小、聚焦/取消聚焦窗口等。
- {{WebExtAPIRef("windows.remove()")}}
  - : 关闭一个窗口及其所有标签页。

## 事件

- {{WebExtAPIRef("windows.onBoundsChanged")}}
  - : 当一个窗口被调整大小或移动时触发。
- {{WebExtAPIRef("windows.onCreated")}}
  - : 一个窗口创建时触发。
- {{WebExtAPIRef("windows.onRemoved")}}
  - : 一个窗口关闭时触发。
- {{WebExtAPIRef("windows.onFocusChanged")}}
  - : 当前聚焦的窗口改变时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.windows`](https://developer.chrome.google.cn/docs/extensions/reference/api/windows) API。该文档衍生自 Chromium 代码中的 [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json)。

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
