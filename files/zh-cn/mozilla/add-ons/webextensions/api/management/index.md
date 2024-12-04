---
title: management
slug: Mozilla/Add-ons/WebExtensions/API/management
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

获取关于已经安装的拓展的相关信息。

使用 `management` API，你可以：

- 获取已经安装的拓展的相关信息
- 启用/禁用拓展
- 卸载拓展
- 查找特定拓展或清单的权限警告
- 获取拓展被安装、卸载、启用或禁用的通知。

大多数操作需要“management”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。不提供对其他拓展的访问的操作不需要此权限。

## 类型

- {{WebExtAPIRef("management.ExtensionInfo")}}
  - : 包含已安装的拓展的相关信息的对象。

### 函数

- {{WebExtAPIRef("management.getAll()")}}
  - : 返回所有已安装的拓展的相关信息。
- {{WebExtAPIRef("management.get()")}}
  - : 返回特定拓展的相关信息（通过提供其 ID）。
- {{WebExtAPIRef("management.getSelf()")}}
  - : 返回调用拓展的相关信息。
- {{WebExtAPIRef("management.install()")}}
  - : 安装特定主题（通过提供其在 [addons.mozilla.org](https://addons.mozilla.org) 上的 URL）。
- {{WebExtAPIRef("management.uninstall()")}}
  - : 卸载特定拓展（通过提供其 ID）。
- {{WebExtAPIRef("management.uninstallSelf()")}}
  - : 卸载正在调用该方法的拓展。
- {{WebExtAPIRef("management.getPermissionWarningsById()")}}
  - : 获取特定拓展的权限警告集合（通过提供其 ID）。
- {{WebExtAPIRef("management.getPermissionWarningsByManifest()")}}
  - : 获取给定清单字符串的权限警告集合。
- {{WebExtAPIRef("management.setEnabled()")}}
  - : 启用/禁用特定拓展（通过提供其 ID）。

## 事件

- {{WebExtAPIRef("management.onInstalled")}}
  - : 当拓展被安装时触发。
- {{WebExtAPIRef("management.onUninstalled")}}
  - : 当拓展被卸载时触发。
- {{WebExtAPIRef("management.onEnabled")}}
  - : 当拓展被启用时触发。
- {{WebExtAPIRef("management.onDisabled")}}
  - : 当拓展被禁用时触发。

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
