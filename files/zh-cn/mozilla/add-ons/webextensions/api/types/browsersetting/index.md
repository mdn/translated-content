---
title: BrowserSetting
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

`BrowserSetting` 是一个表示浏览器设置的对象。

它提供了方法来设置和获取设置的基础值，清除扩展程序对其进行的任何更改，和监听其值的变化。

请注意，虽然此对象基于 [ChromeSetting](https://developer.chrome.google.cn/docs/extensions/reference/api/types#type-ChromeSetting) 类型，但它不区分在普通浏览窗口和私密浏览窗口中设置值。这意味着所有与无痕浏览相关的 API 部分（例如 `ChromeSetting.set()` 的 `scope` 选项）未实现。

## 方法

- {{WebExtAPIRef("types.BrowserSetting.get()")}}
  - : 获取设置的当前值，并返回一个表示当前设置可以如何控制的枚举值。
- {{WebExtAPIRef("types.BrowserSetting.set()")}}
  - : 将设置设定为新值。
- {{WebExtAPIRef("types.BrowserSetting.clear()")}}
  - : 清除扩展程序对设置所做的任何更改。

## 事件

- {{WebExtAPIRef("types.BrowserSetting.onChange")}}
  - : 当设置的值发生变化时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.types`](https://developer.chrome.google.cn/docs/extensions/reference/api/types) API。

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
