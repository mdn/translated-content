---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
---

{{AddonSidebar()}}

**`tabs.Tab`** 包含有关标签页的信息 . 这样可以访问有关标签页中的内容，内容有多大，特殊状态或限制有效的信息等等。

## 类型

这种类型的值是对象。它包含以下属性：

- `active`
  - : `boolean`. 该标签页是否在其窗口中处于活动状态。即使标签的窗口当前没有被关注，也可能是 true。
- `audible` {{optional_inline}}
  - : `boolean`. 如果标签页没有静音：标签页是否正在发出声音。如果标签页被静音：如果没有静音标签页是否会发出声音。
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. 资源不足时浏览器是否可以自动丢弃该标签页。
- `cookieStoreId` {{optional_inline}}
  - : `string`. 该标签页的 Cookie 存储。如果不同的标签可以有不同的 cookie 存储 (例如，支持 [contextual identity](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)), 你可以将此作为 `storeId` 选项传递给 {{WebExtAPIRef("cookies")}} API 的各种方法，设置和获取与此标签页的 Cookie 存储关联的 Cookie。只有在扩展具有“cookies”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)的情况下才会出现。
- `discarded` {{optional_inline}}
  - : `boolean`. 是否丢弃的标签页。被丢弃的标签页是其内容已经从内存中卸载的标签页，但在标签页条中仍可见。它的内容在下一次被激活时被重新加载。
- `favIconUrl` {{optional_inline}}
  - : `string`. 该标签的图标的网址。只有在扩展具有“cookies”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)的情况下才会出现。如果标签页正在加载中，该值可以为空字符串
- `height` {{optional_inline}}
  - : `integer`. 标签页的像素单位高度。
- `highlighted`
  - : `boolean`. 标签页是否突出显示。
- `id` {{optional_inline}}
  - : `integer`. 标签页的 ID. 标签 ID 在浏览器的会话中是唯一的。在浏览器窗口中不包含内容的标签页 (例如，devtools 窗口),标签 ID 也可以设置为 {{WebExtAPIRef('tabs.TAB_ID_NONE')}} 。
- `incognito`
  - : `boolean`. 该标签页是否在隐私浏览窗口中。
- `index`
  - : `integer`. 窗口中的标签页从零开始的索引。
- `isArticle`
  - : `boolean`. 如果标签页可以在 [Reader 模式下呈现](/zh-CN/Add-ons/WebExtensions/API/tabs/toggleReaderMode)，则返回 true，否则返回 false。
- `isInReaderMode`
  - : `boolean`. 如果标签页正在 [Reader 模式下呈现](/zh-CN/Add-ons/WebExtensions/API/tabs/toggleReaderMode)，则返回 true，否则返回 false。
- `lastAccessed`
  - : `double`. 上次访问该标签页的时间 , 参考 [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}.标签页的当前静音状态以及上次状态更改的原因。
- `openerTabId` {{optional_inline}}
  - : `integer`. 打开此标签页的标签页 ID（如果有）。如果开启者标签页仍然存在，该属性才会出现。
- `pinned`
  - : `boolean`. 标签页是否被固定
- `selected` {{deprecated_inline}}
  - : `boolean`.标签页是否被选中
- `sessionId` {{optional_inline}}
  - : `string`. 从{{WebExtAPIRef('sessions')}} API 获取的标签页的唯一标识会话 ID.
- `status` {{optional_inline}}
  - : `string`._加载_ 或 _完成_.
- `title` {{optional_inline}}
  - : `string`. 标签页的标题。只有当扩展具有 `"tabs"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 时才会出现。
- `url` {{optional_inline}}
  - : `string`. 该选项卡正在显示的文档的 URL。只有当扩展具有 `"tabs"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 时才会出现。
- `width` {{optional_inline}}
  - : `integer`. 标签页的像素单位宽度。
- `windowId`
  - : `integer`. 包含此标签页的窗口 ID。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> **备注：** 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#type-Tab) API. 本文档来源于 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json).
>
> Microsoft Edge 兼容性数据由 Microsoft Corporation 提供，并包含在 Creative Commons Attribution 3.0 美国许可证下。

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
