---
title: captivePortal
slug: Mozilla/Add-ons/WebExtensions/API/captivePortal
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

确定用户连接的强制门户状态。强制门户页面是在用户首次连接到 Wi-Fi 网络时显示的网页。用户在强制门户页面上提供信息或执行操作以获得更广泛的网络资源访问权限，例如接受条款和条件或进行付款。

使用此 API 需要具有“captivePortal”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 属性

- {{WebExtAPIRef("captivePortal.canonicalURL")}}
  - : 返回强制门户检测页面的规范 URL。只读。

## 函数

- {{WebExtAPIRef("captivePortal.getLastChecked()")}}
  - : 返回自上次请求完成以来的时间，以毫秒为单位。
- {{WebExtAPIRef("captivePortal.getState()")}}
  - : 返回门户状态，值可以是 `unknown`、`not_captive`、`unlocked_portal` 或 `locked_portal` 之一。

## 事件

- {{WebExtAPIRef("captivePortal.onConnectivityAvailable")}}
  - : 当强制门户服务确定用户可以连接到互联网时触发。
- {{WebExtAPIRef("captivePortal.onStateChanged")}}
  - : 当强制门户状态改变时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

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
