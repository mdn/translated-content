---
title: action
slug: Mozilla/Add-ons/WebExtensions/API/action
---

ブラウザーツールバーのボタンクリックをリッスンしたり、属性の取得や改変を行ったりします。
manifest.json の [`action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) キーで設定されます。

> [!NOTE]
> この API は Manifest V3 あるいは以降のバージョンで利用可能です。Manifest V2 の {{WebExtAPIRef("browserAction")}} や Chrome や Safari での {{WebExtAPIRef("pageAction")}} APIの代替です。

[browser action](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)はブラウザーツールバーのボタンを指します。

ボタンとポップアップの関連付けができます。ウェブページのようにポップアップを HTML や CSS, JavaScript で記述できます。ポップアップ内部で動く Javascript はバックグランドスクリプトと同じ WebExtension API へのアクセスを持ちますが、グローバルコンテキストは現在ブラウザー上で表示されているウェブページのではなく、ポップアップのコンテキストになります。
ウェブページに作用させたい場合、 [messages](/ja/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page#messaging) を通した操作する必要があります。

ポップアップを明示した場合、ユーザーがクリックした際にポップアップが出現しコンテンツが読み込まれます。
ポップアップを明示しない場合には、ユーザーがアイコンをクリックしたときに拡張機能に対してイベントが発火されます。

ボタンはコンテキストメニューも持ちます。このメニューには `action` {{WebExtAPIRef("menus.ContextType")}} を利用する {{WebExtAPIRef("menus")}} API を用いてアイテムの追加が可能です。

`action` API では、次のことが可能です。

- {{WebExtAPIRef("action.onClicked")}} を使って、アイコンのクリックをリッスンします。
- アイコンやタイトル、ポップなどのアイコンのプロパティを読み書きする。タブ間で共通の変更を加えることができます。あるいは追加の引数としてタブ ID を渡すことで個別のタブへの設定も可能です。

## 型情報

- {{WebExtAPIRef("action.ColorArray")}}
  - : RGBA で定義される 0 から 255 までの 4 つの整数を含む配列です。
- {{WebExtAPIRef("action.ImageDataType")}}
  - : 画像のピクセルデータ。 [`ImageData`](/ja/docs/Web/API/ImageData) のオブジェクトである必要があります。（例： {{htmlelement("canvas")}} からの要素）

## 関数

- {{WebExtAPIRef("action.setTitle()")}}
  - : ブラウザーアクションにタイトルを設定します。ツールチップ上に表示されます。
- {{WebExtAPIRef("action.getTitle()")}}
  - : ブラウザーアクションのタイトルを取得します。
- {{WebExtAPIRef("action.setIcon()")}}
  - : ブラウザーアクションのアイコンを設定します。
- {{WebExtAPIRef("action.setPopup()")}}
  - : ユーザーがブラウザーアクションのアイコンをクリックした時に、ポップアップとして表示される HTML ドキュメントを設定します。
- {{WebExtAPIRef("action.getPopup()")}}
  - : ブラウザーアクションのポップアップの HTML ドキュメントを取得します。
- {{WebExtAPIRef("action.openPopup()")}}
  - : ブラウザーアクションのポップアップを表示します。
- {{WebExtAPIRef("action.setBadgeText()")}}
  - : ブラウザーアクションのバッジ文字列を設定します。バッジはアイコンの上部に表示されます。
- {{WebExtAPIRef("action.getBadgeText()")}}
  - : ブラウザーアクションのバッジ文字列を取得します。
- {{WebExtAPIRef("action.setBadgeBackgroundColor()")}}
  - : バッジの背景色を設定します。
- {{WebExtAPIRef("action.getBadgeBackgroundColor()")}}
  - : バッジの背景色を取得します。
- {{WebExtAPIRef("action.setBadgeTextColor()")}}
  - : バッジの文字色を設定します。
- {{WebExtAPIRef("action.getBadgeTextColor()")}}
  - : バッジの文字色を取得します。
- {{WebExtAPIRef("action.getUserSettings()")}}
  - : ブラウザーアクションへのユーザー指定設定を取得します。
- {{WebExtAPIRef("action.enable()")}}
  - : タブへのブラウザーアクションを有効化します。初期設定では全てのタブに対してブラウザーアクションが有効化されています。
- {{WebExtAPIRef("action.disable()")}}
  - : タブのブラウザーアクションを無効化します。これはタブがアクティブでもクリックできないことを意味します。
- {{WebExtAPIRef("action.isEnabled()")}}
  - : ブラウザーアクションが有効かどうかを検証しその値を返します。

## イベント

- {{WebExtAPIRef("action.onClicked")}}
  - : ブラウザーアクションのアイコンがクリックされると発火します。このイベントはブラウザーアクションがポップアップを持っている場合発火しません。

{{WebExtExamples("h2")}}

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action) API に基づいています。
> この文書は Chromium プログラムの [`action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/action.json) から派生します。

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
