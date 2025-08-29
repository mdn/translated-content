---
title: idle
slug: Mozilla/Add-ons/WebExtensions/API/idle
---

找出用户系统何时处于空闲，锁定或活动状态。

要使用此 API，你需要具有“空闲”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 类型

- {{WebExtAPIRef("idle.IdleState")}}
  - : 描述设备空闲状态的字符串。

## 函数

- {{WebExtAPIRef("idle.queryState()")}}
  - : 如果系统被锁定则返回“已锁定”，如果用户未在指定的秒数内生成任何输入，则返回“空闲”，否则返回“活动”。
- {{WebExtAPIRef("idle.setDetectionInterval()")}}
  - : 设置用于确定系统何时处于 {{WebExtAPIRef("idle.onStateChanged")}} 事件的空闲状态的时间间隔。

## 事件

- {{WebExtAPIRef("idle.onStateChanged")}}
  - : 当系统改变状态时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.idle`](https://developer.chrome.google.cn/docs/extensions/reference/api/idle) API。该文档衍生自 Chromium 代码中的 [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json)。

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

### 了解更多：

[requestIdleCallback](/zh-CN/docs/Web/API/Window/requestIdleCallback)...
