---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
---

{{AddonSidebar}}

> **メモ:** このページは Firefox 54 に存在する WebExtensions devtools APIs を記述しています。この API は [Chrome devtools APIs](https://developer.chrome.com/extensions/devtools) に基づいていますが、Firefox では実装されていない多くの機能があり、よってここに文書化されていません。現在欠けている機能を見るには、 [Limitations of the devtools APIs](/ja/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs) を見てください。

`devtools.inspectedWindow` API によって開発ツール拡張機能では開発ツールが割当てられたウィンドウと相互作用できます。

すべての `devtools` API と同様に、この API は manifest.json [devtools_page](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) キー内に定義されたドキュメントや、拡張機能が作成するその他の開発ツールドキュメント(例えば拡張機能が作ったパネル自身のドキュメント)の中だけでコードを利用できます。詳細は [developer tools の拡張](/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) を見てください。

## プロパティ

- [`devtools.inspectedWindow.tabId`](/ja/Add-ons/WebExtensions/API/devtools.inspectedWindow/tabId)
  - : 開発ツールが付属しているウィンドウの ID

## Functions

- [`devtools.inspectedWindow.eval()`](/ja/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval)
  - : ターゲットウィンドウ内の JavaScript を評価する
- [`devtools.inspectedWindow.reload()`](/ja/Add-ons/WebExtensions/API/devtools.inspectedWindow/reload)
  - : ターゲットウィンドウのドキュメントを再読み込みする

## ブラウザーの互換性

{{Compat("webextensions.api.devtools.inspectedWindow")}}{{WebExtExamples("h2")}}

> **メモ:** この API は Chromium の [`chrome.devtools.inspectedWindow`](https://developer.chrome.com/extensions/devtools_inspectedWindow) API に基づいています。また、このドキュメントは bookmarks.json における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
