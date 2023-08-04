---
title: devtools.panels
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels
---

{{AddonSidebar}}

> **メモ:** この API は [Chrome devtools APIs](https://developer.chrome.com/extensions/devtools) に基づいていますが、Firefox では実装されていない多くの機能があり、よってここに文書化されていません。現在欠けている機能を見るには、 [Limitations of the devtools APIs](/ja/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs) を見てください。

`devtools.panels` API によって開発ツール拡張機能では開発ツールウィンドウ内のユーザーインターフェイスの定義ができます。

開発ツールウィンドウにはいくつもの個別のツールがあります - JavaScript デバッガー、ネットワークモニター、などが。最上位のタブの行でユーザーは色々なツールを切り替えられます。ツールの UI をホストするこのウィンドウは「パネル」と呼ばれます。

`devtools.panels` API にて開発ツールウィンドウ内の新規パネルを作成できます。

すべての `devtools` API と同様に、この API は manifest.json [devtools_page](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) キー内に定義されたドキュメントや、拡張機能が作成するその他の開発ツールドキュメント(例えばパネル自身のドキュメント)の中だけでコードを利用できます。これ以上は [開発ツールを拡張する](/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)を見てください。

## 型

- [`devtools.panels.ElementsPanel`](/ja/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel)
  - : ブラウザーの開発ツールの HTML/CSS インスペクターを表す
- [`devtools.panels.ExtensionPanel`](/ja/Add-ons/WebExtensions/API/devtools.panels/ExtensionPanel)
  - : 拡張機能によって作られた開発ツールパネルを表す
- [`devtools.panels.ExtensionSidebarPane`](/ja/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane)
  - : ブラウザーの開発ツールの HTML/CSS インスペクターに、拡張機能が追加したペインを表す

## プロパティ

- [`devtools.panels.elements`](/ja/Add-ons/WebExtensions/API/devtools.panels/elements)
  - : [`ElementsPanel`](/ja/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel) オブジェクトの参照
- [`devtools.panels.themeName`](/ja/Add-ons/WebExtensions/API/devtools.panels/themeName)
  - : 現在の開発ツールテーマの名前

## 関数

- [`devtools.panels.create()`](/ja/Add-ons/WebExtensions/API/devtools.panels/create)
  - : 開発ツールを作成する

## イベント

- [`devtools.panels.onThemeChanged`](/ja/Add-ons/WebExtensions/API/devtools.panels/onThemeChanged)
  - : 開発ツールテーマが変更された時に発火する

## ブラウザーの互換性

{{Compat("webextensions.api.devtools.panels", 2)}}

{{WebExtExamples("h2")}}

> **メモ:** この API は Chromium の [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels) API に基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
