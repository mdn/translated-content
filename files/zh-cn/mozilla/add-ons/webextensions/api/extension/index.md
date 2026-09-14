---
title: extension
slug: Mozilla/Add-ons/WebExtensions/API/extension
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

有关插件的工具；获取你的插件的资源包的 URL；获取你的插件页面的 [`Window`](/zh-CN/docs/Web/API/Window) 对象；获取各种设置的值。

> [!NOTE]
> **该模块中的消息 API 被弃用**，取而代之的是 [`runtime`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime) 模块中相应的 API。

## 类型

- {{WebExtAPIRef("extension.ViewType")}}
  - : 用于指定要获取的视图类型的字符串。

## 属性

- {{WebExtAPIRef("extension.lastError")}} {{deprecated_inline}}
  - : 如果异步扩展 API 中出现错误，将在回调的调用中将该属性设置为那一错误。若没有发生错误，`lastError` 将为 {{jsxref("undefined")}}。
- {{WebExtAPIRef("extension.inIncognitoContext")}}
  - : 对在隐身模式标签中运行的内容脚本、在隐身模式进程中运行的扩展页面返回 `true`。（仅适用于 `incognito_behavior` 取值为“`split`”的扩展。）

## 函数

- {{WebExtAPIRef("extension.getBackgroundPage()")}}
  - : 返回当前扩展内运行的后台页面的 [`Window`](/zh-CN/docs/Web/API/Window) 对象。如果扩展不存在后台页面，则返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。
- {{WebExtAPIRef("extension.getExtensionTabs()")}} {{deprecated_inline}}
  - : 返回当前扩展内运行的每个标签的 JavaScript [`Window`](/zh-CN/docs/Web/API/Window) 对象的数组。
- {{WebExtAPIRef("extension.getURL()")}} {{deprecated_inline}}
  - : 将扩展安装目录内的相对路径转换为完全限定的 URL。
- {{WebExtAPIRef("extension.getViews()")}}
  - : 返回当前扩展内运行的每个页面的 [`Window`](/zh-CN/docs/Web/API/Window) 对象的数组。
- {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}}
  - : 获取扩展对隐身模式的访问权限的状态（由用户控制的“_允许在隐身模式中_”复选框确定）。
- {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}}
  - : 获取扩展对 `file://` 协议的访问权限的状态（由用户控制的“_允许访问文件 URL_”复选框确定）。
- {{WebExtAPIRef("extension.sendRequest()")}} {{deprecated_inline}}
  - : 发送单一请求到扩展中的其他监听器。
- {{WebExtAPIRef("extension.setUpdateUrlData()")}}
  - : 设置扩展的更新 URL 中使用的 ap CGI 参数的值。对于托管在浏览器供应商商店中的扩展，此值将被忽略。

## 事件

- {{WebExtAPIRef("extension.onRequest")}} {{deprecated_inline}}
  - : 当从扩展进程或内容脚本发送请求时触发。
- {{WebExtAPIRef("extension.onRequestExternal")}} {{deprecated_inline}}
  - : 当从另一个扩展发送请求时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.extension`](https://developer.chrome.google.cn/docs/extensions/reference/api/extension/) API。该文档衍生自 Chromium 代码中的 [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json)。

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
