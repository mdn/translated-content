---
title: sessions
slug: Mozilla/Add-ons/WebExtensions/API/sessions
---

{{AddonSidebar}}

セッション API を使ってブラウザーが動作している間に閉じたタブやウィンドウを一覧、復帰します。

{{WebExtAPIRef("sessions.getRecentlyClosed()")}} 関数は {{WebExtAPIRef("tabs.Tab")}} 配列と{{WebExtAPIRef("windows.Window")}} オブジェクトを返し、これはブラウザーが動作している間に閉じられたタブやウィンドウを {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} で定義される上限まで表します。

ウィンドウやタブの復帰は {{WebExtAPIRef("sessions.restore()")}} 関数を使ってできます。復帰はタブを再オープンするだけではありません: タブの移動履歴を復帰して戻る/進むのボタンが動くようにもします。

この API は拡張機能にタブやウィンドウに関連する追加状態の保存させる関数グループも提供します。それで、タブやウィンドウが閉じられて順次復帰された場合、拡張機能は状態を取得できます。例えば、タブをグループ化する拡張機能は、これを使ってタブがどのグループにいるのかを記憶し、ユーザーがタブを復帰した時に正しいグループに復帰できるようになります。

セッション API を使うには "sessions" [API パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)が必要です。

## 型

- {{WebExtAPIRef("sessions.Filter")}}
  - : {{WebExtAPIRef("sessions.getRecentlyClosed()")}}の呼び出しで返される{{WebExtAPIRef("sessions.Session", "Session")}} オブジェクトの数を制限します。
- {{WebExtAPIRef("sessions.Session")}}
  - : 現在のブラウジングセッションでユーザーが閉じたタブやウィンドウを表します。

## プロパティ

- {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}}
  - : [`sessions.getRecentlyClosed()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed)の呼び出しで返される最大のセッション数。

## 関数

- {{WebExtAPIRef("sessions.forgetClosedTab()")}}
  - : ブラウザーの最近閉じたタブリストから閉じたタブを削除します。
- {{WebExtAPIRef("sessions.forgetClosedWindow()")}}
  - : ブラウザーの最近閉じたウィンドウリストから閉じたウィンドウを削除します。
- {{WebExtAPIRef("sessions.getRecentlyClosed()")}}
  - : {{WebExtAPIRef("sessions.Session", "Session")}} オブジェクトを返します、これは現在のブラウジングセッション(つまり: ブラウザーが起動した以降の)で閉じたウィンドウとタブを表しています。
- {{WebExtAPIRef("sessions.restore()")}}
  - : 閉じたタブやウィンドウを復元します。
- {{WebExtAPIRef("sessions.setTabValue()")}}
  - : あるタブに関連するキー/バリューペアを保存します。
- {{WebExtAPIRef("sessions.getTabValue()")}}
  - : あるタブのキーに対応するバリューを取得します。
- {{WebExtAPIRef("sessions.removeTabValue()")}}
  - : あるタブに関連するキー/バリューペアを削除します。
- {{WebExtAPIRef("sessions.setWindowValue()")}}
  - : あるウィンドウに関連するキー/バリューペアを保存します。
- {{WebExtAPIRef("sessions.getWindowValue()")}}
  - : あるウィンドウに関連するキー/バリューペアを保存します。
- {{WebExtAPIRef("sessions.removeWindowValue()")}}
  - : あるウィンドウに関連するキー/バリューペアを削除します。

## イベント

- {{WebExtAPIRef("sessions.onChanged")}}
  - : タブかウィンドウが閉じられたときに発火します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
