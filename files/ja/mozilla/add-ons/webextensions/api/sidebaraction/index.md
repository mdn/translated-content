---
title: sidebarAction
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction
---

{{AddonSidebar}}

拡張機能のサイドバーのプロパティを取得、設定します。

[サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) はブラウザーウィンドウのウェブページの隣の、右側か左側にあるペインです。ブラウザーはユーザーが利用できるサイドバーを見て、表示するサイドバーを選択できる UI を提供します。manifest.json の [`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) キーを使って、拡張機能は自身のサイドバーを定義できます。ここで述べる `sidebarAction` API を使って、拡張機能はサイドバーのプロパティを設定、取得できます。

`sidebarAction` API は {{WebExtAPIRef("browserAction")}} API と緊密にモデリングされています。

sidebarAction API は Opera の [sidebarAction API](https://dev.opera.com/extensions/sidebar-action-api/) を元にしていますが、次のものはサポートされていません: `setBadgeText()`, `getBadgeText()`, `setBadgeBackgroundColor()`, `getBadgeBackgroundColor()`, `onFocus`, `onBlur`.

## 型

- {{WebExtAPIRef("sidebarAction.ImageDataType")}}
  - : 画像のピクセルデータ。[`ImageData`](/ja/docs/Web/API/ImageData) オブジェクト (例えば、{{htmlelement("canvas")}} 要素からのもの)でなければならない。

## 関数

- {{WebExtAPIRef("sidebarAction.setPanel()")}}
  - : サイドバーのバネルを設定します。
- {{WebExtAPIRef("sidebarAction.getPanel()")}}
  - : サイドバーのバネルを取得します。
- {{WebExtAPIRef("sidebarAction.setTitle()")}}
  - : サイドバーのタイトルを設定します。これはブラウザーがサイドバーを一覧するあらゆる UI、例えばメニューに表示されます。
- {{WebExtAPIRef("sidebarAction.getTitle()")}}
  - : サイドバーのタイトルを取得します。
- {{WebExtAPIRef("sidebarAction.setIcon()")}}
  - : サイドバーのアイコンを設定します。
- {{WebExtAPIRef("sidebarAction.open()")}}
  - : サイドバーを開きます。
- {{WebExtAPIRef("sidebarAction.close()")}}
  - : サイドバーを閉じます。
- {{WebExtAPIRef("sidebarAction.isOpen()")}}
  - : サイドバーが開いているか否かをチェックします。

## ブラウザーの互換性

{{Compat}}

## add-ons の例

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page)

> [!NOTE]
> This API is based on Opera's [`chrome.sidebarAction`](https://dev.opera.com/extensions/sidebar-action-api/) API.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
