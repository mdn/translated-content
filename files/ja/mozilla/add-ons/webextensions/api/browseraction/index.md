---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
---

{{AddonSidebar}}

ブラウザーのツールバーにボタンを追加します。

[ブラウザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)はブラウザーのツールバー内のボタンです。

これをボタンつきポップアップと関連付けられます。ポップアップは通常のウェブページ同様に、HTML, CSS, JavaScript を使って指定できます。ポップアップの中で動く JavaScript はバックグラウンドスクリプトとすべて同じ WebExtension API にアクセスできますが、グローバルコンテキストはブラウザーに表示される現在のページではなく、ポップアップになります。ウェブページに影響するには [messages](/ja/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) 経由で通信する必要があります。

ユーザーがアイコンをクリックした時に、ポップアップを指定していると、表示され — そしてコンテンツが読み込まれるでしょう 。ポップアップを指定していない時は、ユーザーがアイコンをクリックした時、拡張機能にイベントがディスパッチされます。

たいていのブラウザーアクションのプロパティは、manifest.json 内の [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) キーを用いて宣言的に定義できます。

`browserAction` API では、次が可能です:

- {{WebExtAPIRef("browserAction.onClicked")}} を使ってアイコンのクリックをリッスンする
- アイコンのプロパティ — アイコン、タイトル、ポップアップなど、の取得、設定。これはすべてのタブを通してグローバルにも、またはタブの ID を追加引数で渡すことで特定のタブだけにも取得、設定できます。

## 型

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : RGBA 色を決める 0-255 の範囲の 4 整数の配列
- {{WebExtAPIRef("browserAction.ImageDataType")}}
  - : 画像のピクセルデータ。[`ImageData`](/ja/docs/Web/API/ImageData) オブジェクト (例えば {{htmlelement("canvas")}} 要素から) でないといけない。

## 関数

- {{WebExtAPIRef("browserAction.setTitle()")}}
  - : ブラウザーアクションのタイトルをセットする。ツールチップに表示される。
- {{WebExtAPIRef("browserAction.getTitle()")}}
  - : ブラウザーアクションのタイトルを取得します。
- {{WebExtAPIRef("browserAction.setIcon()")}}
  - : ブラウザーアクションのアイコンをセットします。
- {{WebExtAPIRef("browserAction.setPopup()")}}
  - : ユーザーがブラウザーアクションのアイコンをクリックした時に表示されるポップアップの HTML 文書をセットします。
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : ブラウザーアクションのポップアップとしてセットされた HTML 文書を取得します。
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : ブラウザーアクションのポップアップを開きます。
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : ブラウザーアクションのバッジテキストをセットします。バッジはアイコンの上部に表示されます。
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : ブラウザーアクションのバッジのテキストを取得します。
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : バッジの背景色を指定します。
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : バッジの背景色を取得します。
- {{WebExtAPIRef("browserAction.enable()")}}
  - : タブのブラウザーアクションを有効にします。既定では、ブラウザーアクションはすべてのタブで有効です。
- {{WebExtAPIRef("browserAction.disable()")}}
  - : タブのブラウザーアクションを無効にします。つまりタブがアクティブでもクリックできません。
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : ブラウザーアクションが有効か否かをチェックします。

## イベント

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : ブラウザーアクションがクリックされた時に発火します。このイベントはブラウザーアクションがポップアップ付きでない場合は発火しません。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction) API に基づいています。この文書は Chromium コードの [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) から得ています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
