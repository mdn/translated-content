---
title: history
slug: Mozilla/Add-ons/WebExtensions/API/history
---

{{AddonSidebar}}

ブラウザー履歴とやりとりする `history` API を使用します。

> [!NOTE]
> downloads は [`HistoryItem`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem) オブジェクトとして扱われるのに注意します。このため、ダウンロードのために [`history.onVisited`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited) も発火します。

ブラウザー履歴はユーザーが訪れたページの時間順の記録です。history API では次の事ができます:

- [ブラウザー履歴に出てくるページの検索](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/search)
- [ブラウザー履歴から個々のページを削除](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteUrl)
- [ブラウザー履歴にページを追加](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/addUrl)
- [ブラウザー履歴から全ページを削除](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteAll)

しかしながら、ユーザーは１つのページを何度も訪問することがあるので、この API は「訪問数」の概念もあります。したがってこの API を次のようにも使えます:

- [ユーザーが特定のページを訪問した完全なセットを取得する](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/getVisits)
- [所定の期間に訪問したあらゆるページの訪問を削除する](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteRange)

この API を使うには [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルで指定する "history" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)が必要です。

## 型

- {{WebExtAPIRef("history.TransitionType")}}
  - : ブラウザーがあるページにどのように移動したのかを記述
- {{WebExtAPIRef("history.HistoryItem")}}
  - : ブラウザー履歴のあるページに関する情報を提供
- {{WebExtAPIRef("history.VisitItem")}}
  - : ページへの単一の訪問を記述

## 関数

- {{WebExtAPIRef("history.search()")}}
  - : ブラウザー履歴を検索して、所与の条件にマッチする [`history.HistoryItem`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem) オブジェクトを得る
- {{WebExtAPIRef("history.getVisits()")}}
  - : 所定のページへの訪問についての情報を取得する
- {{WebExtAPIRef("history.addUrl()")}}
  - : ブラウザー履歴に所定のページへの訪問のレコードを追加する
- {{WebExtAPIRef("history.deleteUrl()")}}
  - : ブラウザー履歴から 所定の URL へのすべての訪問を削除する
- {{WebExtAPIRef("history.deleteRange()")}}
  - : 所定の時間範囲でユーザーが訪問したすべてのページを削除する
- {{WebExtAPIRef("history.deleteAll()")}}
  - : ブラウザー履歴からすべての訪問を削除する

## イベント

- {{WebExtAPIRef("history.onTitleChanged")}}
  - : ユーザーがあるページに訪問してタイトルが記録された時に発火します
- {{WebExtAPIRef("history.onVisited")}}
  - : ユーザーがあるページに {{WebExtAPIRef("history.HistoryItem")}} を提供しつつそのページを訪問した時に発火します
- {{WebExtAPIRef("history.onVisitRemoved")}}
  - : ある URL がブラウザー履歴から完全に削除された時に発火します

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history) API に基づいています。また、このドキュメントは [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) における Chromium のコードに基づいています。

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
