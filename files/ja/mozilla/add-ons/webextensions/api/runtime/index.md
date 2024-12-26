---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
---

{{AddonSidebar}}

このモジュールは拡張機能と実行環境の情報を提供します。

また以下のような機能を持つメッセージ API も提供します:

- 拡張機能の別々の部分同士で通信します。メッセージのオプションについて詳しく知りたい場合は、[ワンオフメッセージとコネクションベースのメッセージとの選択](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#ワンオフメッセージとコネクションベースのメッセージとの選択)をご覧ください。
- 他の拡張機能と通信します。
- ネイティブアプリケーションと通信します。

## 型

- {{WebExtAPIRef("runtime.Port")}}
  - : 2 つのコンテキスト間の接続の一方を表します。メッセージを交換するために使います。
- {{WebExtAPIRef("runtime.MessageSender")}}
  - : 接続リクエストやメッセージの送信者の情報です。
- {{WebExtAPIRef("runtime.PlatformOs")}}
  - : ブラウザーの OS の識別です。
- {{WebExtAPIRef("runtime.PlatformArch")}}
  - : ブラウザーのプロセッサーアーキテクチャの識別です。
- {{WebExtAPIRef("runtime.PlatformInfo")}}
  - : ブラウザーが動作しているプラットフォームの情報です。
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : {{WebExtAPIRef("runtime.requestUpdateCheck()")}} を呼び出した結果です。
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : {{WebExtAPIRef("runtime.onInstalled")}} イベントをディスパッチした理由です。
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : {{WebExtAPIRef("runtime.onRestartRequired")}} イベントをディスパッチした理由です。

## プロパティ

- {{WebExtAPIRef("runtime.lastError")}}
  - : 呼び出し元に伝える必要があるエラーが非同期の関数で起こった時に、この値が設定されます。
- {{WebExtAPIRef("runtime.id")}}
  - : 拡張機能の ID です。

## 関数

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : 拡張機能が動作しているバックグラウンドページの [Window](/ja/docs/Web/API/Window) オブジェクトを取得します。
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : 拡張機能の[オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)を開きます。
- {{WebExtAPIRef("runtime.getFrameId()")}}
  - : グローバルまたはフレーム要素のウィンドウのフレーム ID を取得します。
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : 完全な [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルを取得し、オブジェクトとしてシリアライズします。
- {{WebExtAPIRef("runtime.getURL()")}}
  - : [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) からの相対パスを指定し、拡張機能に含まれるリソースの完全修飾の URL を返します。
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : 拡張機能がアンインストールされた時にアクセスさせる URL を設定します。
- {{WebExtAPIRef("runtime.reload()")}}
  - : 拡張機能をリロードします。
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : 拡張機能のアップデートを確認します。
- {{WebExtAPIRef("runtime.connect()")}}
  - : コンテンツスクリプトから同じ拡張機能の別の処理、または別の拡張機能への接続します。
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : ユーザーのコンピューターに入っているネイティブアプリケーションと拡張機能を接続します。
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : 拡張機能自身や別の拡張機能のイベントリスナーに 1 つのメッセージを送信します。 {{WebExtAPIRef('runtime.connect')}} と似ていますが、 {{WebExtAPIRef("runtime.sendMessage()")}} では 1 つのメッセージを送るだけで、オプションで応答可能です。
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : 拡張機能からネイティプアプリケーションに 1 つのメッセージを送信します。
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : 現在のプラットフォーム情報を返します。
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : 拡張機能がインストールされたブラウザーの情報を返します。
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : 拡張機能のディレクトリーの [DirectoryEntry](/ja/docs/Web/API/FileSystemDirectoryEntry) オブジェクトを返します。

## イベント

- {{WebExtAPIRef("runtime.onStartup")}}
  - : 拡張機能がインストールされたプロフィールが最初に起動された時に発火します。このイベントは、プライベートプロフィールの起動では発火しません。
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : 拡張機能が最初にインストールされた時、拡張機能やブラウザーが新しいバージョンに更新された時に発火します。
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : 拡張機能がアンロードされる直前にイベントページに送信します。拡張機能をクリーンアップできます。
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : 拡張機能が結果的にアンロードされなかったことを示すため、 {{WebExtAPIRef("runtime.onSuspend")}} の後に送信します。
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : 拡張機能が更新可能ですが現在実行中のため、すぐにインストールされない時に発火します。
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}}
  - : ブラウザーが更新可能ですが再起動が必要であるため、すぐにインストールされない時に発火します。
- {{WebExtAPIRef("runtime.onConnect")}}
  - : 拡張機能の処理や コンテンツスクリプトと接続した時に発火します。
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : 別の拡張機能と接続した時に発火します。
- {{WebExtAPIRef("runtime.onMessage")}}
  - : 拡張機能の処理や コンテンツスクリプトからメッセージが送信された時に発火します。
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : 別の拡張機能からメッセージが送信された時に発火します。コンテンツスクリプトでは使えません。
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : デバイスの再起動が必要な時に発火します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime) API に基づいています。また、このドキュメントは [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
