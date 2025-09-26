---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
l10n:
  sourceCommit: a6313e45a6ae4c356325f06d0e7e8919bab251a8
---

**`tabs.Tab`** 类型包含有关标签页的信息。这提供了访问有关标签页内容、大小、特殊状态或限制等的信息。

## 类型

该类型的值为对象，包含以下属性：

- `active`
  - : `boolean`。标签页是否在其窗口中处于活动状态。即使标签页的窗口当前未被聚焦，此属性也可能为 true。

    活动标签页通常是选定的标签页。但是，在 Android 版 Firefox 上，扩展弹出窗口会在新标签页中打开。当选择弹出窗口标签页时，活动标签页将是打开弹出窗口的标签页。

- `attention` {{optional_inline}}
  - : `boolean`。指示标签页是否正在吸引注意力。例如，当标签页显示模态对话框时，`attention` 将为 `true`。
- `audible` {{optional_inline}}
  - : `boolean`。指示标签页是否正在播放声音。但是，如果标签页已静音（参见 `mutedInfo` 属性），用户将听不到声音。
- `autoDiscardable` {{optional_inline}}
  - : `boolean`。标签页是否可以被浏览器丢弃。默认值为 `true`。当设置为 `false` 时，浏览器不能自动丢弃标签页，但可以通过 {{WebExtAPIRef("tabs.discard")}} 进行丢弃。
- `cookieStoreId` {{optional_inline}}
  - : `string`。标签页的 cookie 存储。更多信息请参见[使用上下文身份工作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `discarded` {{optional_inline}}
  - : `boolean`。标签页是否已被丢弃。已丢弃的标签页是指其内容已从内存中卸载，但在标签栏中仍可见。下次激活时，其内容将重新加载。
- `favIconUrl` {{optional_inline}}
  - : `string`。标签页的网站图标（favicon）的 URL。仅当扩展具有 `"tabs"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)或[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)时才会显示。如果页面没有网站图标，则可能为 `undefined`，或者如果标签页正在加载，则为空字符串。
- `height` {{optional_inline}}
  - : `integer`。标签页的高度，以像素为单位。
- `hidden`
  - : `boolean`。标签页是否隐藏。
- `highlighted`
  - : `boolean`。标签页是否被突出显示，即是否为当前选定的标签页。活动标签页始终处于突出显示状态，但某些浏览器允许额外的标签页被突出显示，例如通过按住 <kbd>Ctrl</kbd>、<kbd>Shift</kbd> 或 <kbd>⌘ Command</kbd> 键点击它们。

    Android 版 Firefox 不支持突出显示多个标签页。

- `id` {{optional_inline}}
  - : `integer`。标签页的 ID。标签页 ID 在浏览器会话中是唯一的。对于不承载内容的标签页（例如开发者工具窗口），标签页 ID 也可以设置为 {{WebExtAPIRef('tabs.TAB_ID_NONE')}}。
- `incognito`
  - : `boolean`。标签页是否在隐私浏览窗口中。
- `index`
  - : `integer`。标签页在其窗口中的从零开始的索引。
- `isArticle`
  - : `boolean`。如果标签页可以[在阅读模式中渲染](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)，则为 true，否则为 false。
- `isInReaderMode`
  - : `boolean`。如果标签页当前正[在阅读模式中渲染](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)，则为 true，否则为 false。
- `lastAccessed` {{optional_inline}}
  - : `double`。标签页上次访问的时间，以[自纪元以来的毫秒数](https://zh.wikipedia.org/wiki/UNIX时间)表示。
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}。标签页的当前静音状态及最后一次状态更改的原因。
- `openerTabId` {{optional_inline}}
  - : `integer`。打开此标签页的标签页的 ID（如果有）。此属性仅在打开者标签页仍然存在且在同一窗口中时才存在。
- `pendingUrl`
  - : `string`。标签页正在导航到的 URL，在提交之前有效。此属性仅在扩展清单包含“tabs”权限且存在待定导航时才会出现。
- `pinned`
  - : `boolean`。标签页是否被固定。
- `selected` {{deprecated_inline}}
  - : `boolean`。标签页是否被选中。此属性已被 `active` 和 `highlighted` 替代。
- `sessionId` {{optional_inline}}
  - : `string`。用于唯一标识从 {{WebExtAPIRef('sessions')}} API 获取的标签页的会话 ID。
- `status` {{optional_inline}}
  - : `string`。标签页的加载状态，可能为 _loading_ 或 _complete_。
- `successorTabId` {{optional_inline}}
  - : `integer`。标签页的后继标签页的 ID。
- `title` {{optional_inline}}
  - : `string`。标签页的标题。仅当扩展具有 `"tabs"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)或匹配标签页 URL 的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)时才会显示。
- `url` {{optional_inline}}
  - : `string`。标签页显示的文档的 URL。仅当扩展具有 `"tabs"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)或匹配[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)时才会显示。
- `width` {{optional_inline}}
  - : `integer`。标签页的宽度，以像素为单位。
- `windowId`
  - : `integer`。承载此标签页的窗口的 ID。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#type-Tab) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
