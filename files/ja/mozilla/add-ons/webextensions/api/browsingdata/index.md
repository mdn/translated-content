---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
---

{{AddonSidebar}}

拡張機能がユーザーの閲覧中に蓄積したデータをクリアできるようにします。

`browsingData` API では、閲覧データは下記の型に分けられます。

- browser cache (ブラウザーキャッシュ)
- cookies
- downloads (ダウンロードデータ)
- history (履歴)
- local storage (ローカルストレージ)
- plugin data (プラグインのデータ)
- saved form data (保存したフォームデータ)
- saved passwords (保存したパスワード)

これらの型の組み合わせを削除するのに {{WebExtAPIRef("browsingData.remove()")}} 関数を使用できます。それぞれのデータ型を削除する専用関数もあり、例えば {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} などです。

すべての `browsingData.remove[X]()` 関数は {{WebExtAPIRef("browsingData.RemovalOptions")}} オブジェクトを取って、これをデータ削除のその他 2 つの側面を管理するのに使うことができます:

- データ削除を過去どれだけ遡れるのか
- 通常のウェブページか、ホストされたウェブアプリも含めてデータ削除するのかのいずれか。このオプションは Firefox ではまだサポートされていないことに注意してください。

最後に、この API の {{WebExtAPIRef("browsingData.settings()")}} 関数で、ブラウザー組み込みの「履歴消去」機能の現在の設定値を取得できます。

この API を使うには、"browsingData" の [API パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)が必要です。

## 型

- {{WebExtAPIRef("browsingData.DataTypeSet")}}
  - : 削除データの型を指定するオブジェクト。例えば、history, downloads, passwords, など
- {{WebExtAPIRef("browsingData.RemovalOptions")}}
  - : データ削除するのにどれくらい以前に遡るのか、通常のウェブ閲覧/ホスト型アプリ/アドオンのどのデータを削除するのかを指定するオブジェクト。

## メソッド

- {{WebExtAPIRef("browsingData.remove()")}}
  - : 指定された型の閲覧データを削除する
- {{WebExtAPIRef("browsingData.removeCache()")}}
  - : ブラウザーキャッシュを消去する
- {{WebExtAPIRef("browsingData.removeCookies()")}}
  - : cookies を削除する
- {{WebExtAPIRef("browsingData.removeDownloads()")}}
  - : ダウンロード済みのファイルを削除する
- {{WebExtAPIRef("browsingData.removeFormData()")}}
  - : 保存されたフォームデータを消去する
- {{WebExtAPIRef("browsingData.removeHistory()")}}
  - : ブラウザー履歴を消去する
- {{WebExtAPIRef("browsingData.removeLocalStorage()")}}
  - : ウェブサイトが作成した [local storage](/ja/docs/Web/API/Window/localStorage) を消去する
- {{WebExtAPIRef("browsingData.removePasswords()")}}
  - : パスワードを消去する
- {{WebExtAPIRef("browsingData.removePluginData()")}}
  - : プラグインに関連するデータを消去する
- {{WebExtAPIRef("browsingData.settings()")}}
  - : ブラウザーの「履歴消去」機能の現在の設定値を得る

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API に基づいています。

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
