---
title: management
slug: Mozilla/Add-ons/WebExtensions/API/management
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

获取关于已经安装的附加组件的相关信息。

使用 `management` API，你可以：

- 获取已经安装的附加组件的相关信息
- 启用/禁用附加组件
- 卸载附加组件
- 查找特定附加组件或清单的权限警告
- 获取附加组件被安装、卸载、启用或禁用的通知。

大多数操作需要“management”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。不提供对其他附加组件的访问的操作则并不需要此权限。

## 类型

- {{WebExtAPIRef("management.ExtensionInfo")}}
  - : 包含已安装的附加组件的相关信息的对象。

## 函数

- {{WebExtAPIRef("management.getAll()")}}
  - : 返回所有已安装的附加组件的相关信息。
- {{WebExtAPIRef("management.get()")}}
  - : 返回给定 ID 的附加组件的相关信息。
- {{WebExtAPIRef("management.getSelf()")}}
  - : 返回正在调用该函数的附加组件的相关信息。
- {{WebExtAPIRef("management.install()")}}
  - : 安装特定主题（需要提供其在 [addons.mozilla.org](https://addons.mozilla.org) 上的 URL）。
- {{WebExtAPIRef("management.uninstall()")}}
  - : 卸载给定 ID 的附加组件。
- {{WebExtAPIRef("management.uninstallSelf()")}}
  - : 卸载正在调用该函数的附加组件。
- {{WebExtAPIRef("management.getPermissionWarningsById()")}}
  - : 获取给定 ID 的附加组件的权限警告集合。
- {{WebExtAPIRef("management.getPermissionWarningsByManifest()")}}
  - : 获取给定清单字符串的权限警告集合。
- {{WebExtAPIRef("management.setEnabled()")}}
  - : 启用/禁用给定 ID 的附加组件。

## 事件

- {{WebExtAPIRef("management.onInstalled")}}
  - : 当附加组件被安装时触发。
- {{WebExtAPIRef("management.onUninstalled")}}
  - : 当附加组件被卸载时触发。
- {{WebExtAPIRef("management.onEnabled")}}
  - : 当附加组件被启用时触发。
- {{WebExtAPIRef("management.onDisabled")}}
  - : 当附加组件被禁用时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.management`](https://developer.chrome.google.cn/docs/extensions/reference/api/management) API。本文衍生自 Chromium 代码中的 [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json)。

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
