---
title: extension
slug: Mozilla/Add-ons/WebExtensions/API/extension
---

{{AddonSidebar}}

拡張機能に関連するユーティリティ。拡張機能のリソースパッケージの URL を取得したり、拡張機能のページの [`Window`](/ja/docs/Web/API/Window) オブジェクトを取得したり、いろいろな設定の値を取得したりします。注意として、このモジュールのメッセージ APIs は非推奨で、 [`runtime`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime) モジュールの同様な API が好まれます。

## 型

- {{WebExtAPIRef("extension.ViewType")}}
  - : 拡張機能ビューの型

## プロパティ

- {{WebExtAPIRef("extension.lastError")}}
  - : 同期型の拡張機能 API がエラーに終わった場合のコールバックの寿命をセットします。エラーが起きなかったら lastError は _undefined_.になります。
- {{WebExtAPIRef("extension.inIncognitoContext")}}
  - : incognito タブ内でコンテンツスクリプトが実行されたり、 incognito プロセス内で拡張機能ページが実行されたら true になります。後者は 'split' incognito_behavior の場合だけです。

## 関数

- {{WebExtAPIRef("extension.getURL()")}}
  - : 拡張機能がインストールされたディレクトリーの相対パスを完全修飾 URL に変換する
- {{WebExtAPIRef("extension.getViews()")}}
  - : 今の拡張機能内で実行されているページの [`Window`](/ja/docs/Web/API/Window) オブジェクトを返す
- {{WebExtAPIRef("extension.getBackgroundPage()")}}
  - : 今の拡張機能内で実行されているバックグラウンドページの [`Window`](/ja/docs/Web/API/Window) オブジェクトを返す。拡張機能がバックグラウンドページを持たない場合は null を返す
- {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}}
  - : 拡張機能が Incognito-モード (ユーザーが制御する 'Incognito を許可' のチェックボックスで定義される) にアクセスする状態を取得する
- {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}}
  - : 拡張機能が 'file://' スキーム(ユーザーが制御する 'File URLs のアクセスを許可' のチェックボックスで定義される) にアクセスする状態を取得する
- {{WebExtAPIRef("extension.setUpdateUrlData()")}}
  - : 拡張機能の更新 URL 内で使われる ap CGI パラメーターをセットする。この値はブラウザーのベンダーストアでホストされる拡張機能では無視される

## イベント

- {{WebExtAPIRef("extension.onRequest")}}
  - : 拡張機能のプロセスかコンテンツスクリプトのいずれかからリクエストが送られた時に発火します
- {{WebExtAPIRef("extension.onRequestExternal")}}
  - : その他の拡張機能からリクエストが送られた時に発火します

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension) API に基づいています。また、このドキュメントは [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json)における Chromium のコードに基づいています。

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
