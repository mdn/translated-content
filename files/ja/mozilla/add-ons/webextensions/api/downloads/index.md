---
title: downloads
slug: Mozilla/Add-ons/WebExtensions/API/downloads
---

{{AddonSidebar}}

拡張機能にブラウザーのダウンロードマネージャーとのやりとりを可能にします。この API モジュールを、ファイルマネージャーでのファイルのダウンロード、キャンセル、停止、ダウンロードの再開、ダウンロード済みのファイルの表示に使用できます。

この API を使うには [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルで指定する "downloads" [API パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)が必要です。

## 型

- {{WebExtAPIRef("downloads.FilenameConflictAction")}}
  - : ダウンロードされたファイル名が既存ファイルと衝突する場合の動作オプション定義
- {{WebExtAPIRef("downloads.InterruptReason")}}
  - : ダウンロードが中断された理由の集合を定義
- {{WebExtAPIRef("downloads.DangerType")}}
  - : ダウンロード可能なファイルに関連した想定される危険性への警告の集合を定義
- {{WebExtAPIRef("downloads.State")}}
  - : 現在のダウンロードが取りうるさまざまな状態を定義
- {{WebExtAPIRef("downloads.DownloadItem")}}
  - : ダウンロード済みのファイルを表現する
- {{WebExtAPIRef("downloads.StringDelta")}}
  - : 2 つの文字列の差異を表現する
- {{WebExtAPIRef("downloads.DoubleDelta")}}
  - : 2 つの倍精度実数の差異を表現する
- {{WebExtAPIRef("downloads.BooleanDelta")}}
  - : 2 つの真偽値の差異を表現する
- {{WebExtAPIRef("downloads.DownloadTime")}}
  - : ダウンロード完了にかかった時間を表現する
- {{WebExtAPIRef("downloads.DownloadQuery")}}
  - : ダウンロードマネージャーで特定のダウンロードを検索するのに使われるパラメーターを定義

## 関数

- {{WebExtAPIRef("downloads.download()")}}
  - : URL とオプション設定を与えて、ファイルをダウンロードします
- {{WebExtAPIRef("downloads.search()")}}
  - : ブラウザーのダウンロードマネージャーで使える {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} に問い合わせて、指定した検索条件にマッチするものを返します
- {{WebExtAPIRef("downloads.pause()")}}
  - : ダウンロードを停止します
- {{WebExtAPIRef("downloads.resume()")}}
  - : 停止したダウンロードを再開します
- {{WebExtAPIRef("downloads.cancel()")}}
  - : ダウンロードをキャンセルします
- {{WebExtAPIRef("downloads.getFileIcon()")}}
  - : 指定したダウンロードのアイコンを取得します
- {{WebExtAPIRef("downloads.open()")}}
  - : 関連付けられたアプリケーションでダウンロード済みのファイルを開きます
- {{WebExtAPIRef("downloads.show()")}}
  - : プラットフォームのファイルマネージャーアプリケーションを開いて、ダウンロードフォルダー内のファイルを表示します
- {{WebExtAPIRef("downloads.showDefaultFolder()")}}
  - : プラットフォームのファイルマネージャーアプリケーションを開いて、デフォルトのダウンロードフォルダーを表示します
- {{WebExtAPIRef("downloads.erase()")}}
  - : ダウンロード済みのファイルをディスクから消去することなく、ブラウザーのダウンロード履歴からマッチした {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} を消去します
- {{WebExtAPIRef("downloads.removeFile()")}}
  - : ブラウザーのダウンロード履歴ではなく、ダウンロード済みのファイルをディスクから消去します
- {{WebExtAPIRef("downloads.acceptDanger()")}}
  - : 危険なダウンロードを受け入れるかキャンセルするかを、ユーザーに確認します
- {{WebExtAPIRef("downloads.drag()")}}
  - : ダウンロード済みのファイルを他のアプリケーションにドラッグし始めます
- {{WebExtAPIRef("downloads.setShelfEnabled()")}}
  - : 現在のブラウザープロファイルに関連するすぺてのウィンドウの下のグレーの棚を有効化/無効化します。この棚は少なくとも 1 つの拡張機能が無効化すると無効になります。

## イベント

- {{WebExtAPIRef("downloads.onCreated")}}
  - : ダウンロード開始時に {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} オブジェクトと共に発火します
- {{WebExtAPIRef("downloads.onErased")}}
  - : ダウンロードが履歴から消去された時に `downloadId` と共に発火します
- {{WebExtAPIRef("downloads.onChanged")}}
  - : `bytesReceived` を除くいかなる {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} のプロパティが変わった時、このイベントは `downloadId` や変更したプロパティを含むオブジェクトと共に発火します

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads) API に基づいています。

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
