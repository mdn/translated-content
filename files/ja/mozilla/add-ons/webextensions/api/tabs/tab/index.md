---
title: tabs.Tab
slug: Mozilla/Add-ons/WebExtensions/API/tabs/Tab
---

{{AddonSidebar}}

**`tabs.Tab`** 型はタブについての情報を含んでいます。これはタブの中のコンテンツについての情報へのアクセスを提供します。例えば、コンテンツはどれくらいの大きさか、どのような特別な状態もしくは制限が有効になっているか、など。

## Type

この型の値はオブジェクトです。以下のプロパティを含みます:

- `active`
  - : `boolean`. タブがウィンドウ内でアクティブかどうかを示します。タブのウィンドウがフォーカスされていない場合でも当てはまります。

    アクティブなタブは通常一つ検出されます。しかしながら、Firefox for Android 上では、拡張機能のポップアップが新しいタブの中で開かれます。このポップアップタブが検出されたとき、アクティブなタブはポップアップが開かれたタブに代えられます。

- `attention` {{optional_inline}}
  - : `boolean`. タブが注目を集めているかを示します。例えば、タブがモーダルダイアログを表示したとき、`attention`は`true`になります。
- `audible` {{optional_inline}}
  - : `boolean`. タブがミュートではないとき: タブが音を作り出すかどうかです。タブがミュートであるとき: タブがミュートでないなら、音を作り出せたかどうかです。
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Whether the tab can be discarded automatically by the browser when resources are low.
- `cookieStoreId` {{optional_inline}}
  - : `string`. タブのクッキーストア。If different tabs can have different cookie stores (for example, to support [contextual identity](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)), you can pass this as the `storeId` option into various methods of the {{WebExtAPIRef("cookies")}} API, to set and get cookies associated with this tab's cookie store. Only present if the extension has the `"cookies"` [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
- `discarded` {{optional_inline}}
  - : `boolean`. タブが破棄されたか。 A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
- `favIconUrl` {{optional_inline}}
  - : `string`. タブの favicon の URL。Only present if the extension has the `"tabs"` [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). It may also be an empty string if the tab is loading.
- `height` {{optional_inline}}
  - : `integer`. タブの高さのピクセル値。
- `hidden`
  - : `boolean`. タブが隠されている(非表示)かどうか。
- `highlighted`
  - : `boolean`. タブがハイライトされているかどうかどうか。 An active tab is always highlighted, but some browsers may allow additional tabs to be highlighted, for example by clicking them while holding <kbd>Ctrl</kbd> or <kbd>⌘ Command</kbd> keys.

    Firefox for Android doesn't support highlighting multiple tabs, and Firefox desktop requires the `browser.tabs.multiselect` preference.

- `id` {{optional_inline}}
  - : `integer`. タブの ID。 タブの ID はブラウザーセッショの中でユニークです。The tab ID may also be set to {{WebExtAPIRef('tabs.TAB_ID_NONE')}} for browser windows that don't host content tabs (for example, devtools windows).
- `incognito`
  - : `boolean`. タブがプライベートブラウジングウィンドウの中にあるかどうか。
- `index`
  - : `integer`. 0 を底としたウィンドウの中のタブのインデックス。
- `isArticle`
  - : `boolean`. True なら[rendered in Reader Mode](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)で閲覧可能、false ならそれ以外。
- `isInReaderMode`
  - : `boolean`. True なら[rendered in Reader Mode](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)で閲覧中、false ならそれ以外。
- `lastAccessed`
  - : `double`. タブが最後にアクセスされた時刻(単位: [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time))。
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. The current muted state for the tab and the reason for the last state change.
- `openerTabId` {{optional_inline}}
  - : `integer`. The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
- `pinned`
  - : `boolean`. タブがピン留めされているかどうか。
- `selected` {{deprecated_inline}}
  - : `boolean`. タブが選択されているかどうか。
- `sessionId` {{optional_inline}}
  - : `string`. The session ID used to uniquely identify a `Tab` obtained from the {{WebExtAPIRef('sessions')}} API.
- `status` {{optional_inline}}
  - : `string`. _loading_ か _complete_ のどちらか。
- `successorId` {{optional_inline}}
  - : `integer` タブの後継者の ID。
- `title` {{optional_inline}}
  - : `string`. タブのタイトル。Only present if the extension has the `"tabs"` [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
- `url` {{optional_inline}}
  - : `string`. タブが表示しているドキュメントの URL。Only present if the extension has the `"tabs"` [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
- `width` {{optional_inline}}
  - : `integer`. タブの横幅のピクセル値。
- `windowId`
  - : `integer`. このタブのホストのウィンドウの ID。

> [!NOTE]
> In extension background scripts, the only properties that are available are tabId and **windowId.**

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-Tab) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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
