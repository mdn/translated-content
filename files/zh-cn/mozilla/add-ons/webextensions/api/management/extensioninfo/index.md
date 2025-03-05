---
title: ExtensionInfo
slug: Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

包含附加组件信息的 `ExtensionInfo` 对象。

## 类型

它是包含下述属性的对象：

- `description`
  - : `string`，从 manifest.json 的 [description](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) 键中获取的该附加组件的描述。
- `disabledReason`
  - : `string`，附加组件被禁用的原因（如果它被禁用了）。可能是“unknown”、“permissions_increase”中的其中之一。
- `enabled`
  - : `boolean`，附加组件当前是否已启用。
- `homepageUrl`
  - : `string`，从 manifest.json 的 [homepage_url](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) 键中获取的该附加组件的主页 URL。
- `hostPermissions`
  - : `string` 数组。附加组件的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。
- `icons`

  - : `object` 数组，关于附加组件图标的信息。一个对象数组，其中的每个对象代表一个图标。每个对象包含两个属性：

    - `size`：表示图标的宽度和高度（以像素为单位）的整数值。
    - `url`：包含从附加组件的根目录开始到图标的相对 URL 的字符串。

- `id`
  - : `string`，附加组件的 ID。
- `installType`

  - : `string`，描述附加组件是如何被安装的字符串。可能是以下之一：

    - “admin”：附加组件是因为管理策略而安装的。
    - “development”：附加组件是从磁盘上的未打包文件安装的。
    - “normal”：附加组件是从安装包正常安装的。
    - “sideload”：附加组件是由用户计算机上的其他软件安装的。
    - “other”：附加组件是以其他方式安装的。

- `mayDisable`
  - : `boolean`，用户是否可以禁用或卸载此附加组件。
- `name`
  - : `string`，从 manifest.json 的 [name](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) 键中获取的该附加组件的名称。
- `offlineEnabled`
  - : `boolean`，附加组件是否支持离线使用。
- `optionsUrl`
  - : `string`，附加组件的[选项页](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)的 URL（如果它有选项页）。这是一个从附加组件的根目录开始的相对 URL。
- `permissions`
  - : `string` 数组，包含附加组件的 [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。
- `shortName`
  - : `string`，从 manifest.json 的 [short_name](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name) 键中获取的附加组件名称的简短版本。
- `type`

  - : `string`，描述附加组件类型的字符串，用于区分扩展、应用和主题。可能取以下任一值：

    - “extension”：最常见的附加组件类型。
    - “hosted_app”
    - “packaged_app”
    - “legacy_packaged_app”
    - “theme”

- `updateUrl`
  - : `string`，从 manifest.json 的 [browser_specific_settings](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) 键中获取的用于此附加组件的更新的 URL。
- `version`
  - : `string`，从 manifest.json 的 [version](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) 键中获取的该附加组件的版本。
- `versionName`
  - : `string`，从 manifest.json 的 [version_name](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name) 键中获取的该附加组件版本的描述性名称。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.management`](https://developer.chrome.google.cn/docs/extensions/reference/api/management#type-ExtensionInfo) API。本文衍生自 Chromium 代码中的 [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json)。

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
