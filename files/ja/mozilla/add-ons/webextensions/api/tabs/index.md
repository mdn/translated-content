---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
---

{{AddonSidebar}}

ブラウザーのタブシステムとやりとりします。

この API を使って開いているタブの一覧を取得したり、いろいろな条件でフィルターしたり、タブを開き、更新し、移動し、再読み込みし、削除できます。この API ではタブのコンテンツに直接アクセスできませんが、JavaScript と CSS をタブに挿入することは、{{WebExtAPIRef("tabs.executeScript()")}} や {{WebExtAPIRef("tabs.insertCSS()")}} API を使ってできます。

この API の大半の使用に特別なパーミッションは要りませんが:

- `Tab.url` `Tab.title` `Tab.favIconUrl`, のアクセスには "tabs" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)が必要です。また Firefox では URL による{{WebExtAPIRef("tabs.query", "問い合わせ")}}をするのにも "tabs" が必要です。
- {{WebExtAPIRef("tabs.executeScript()")}} や {{WebExtAPIRef("tabs.insertCSS()")}} を使うには、そのタブの [host パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)が必要です。

あるいは、これらのパーミッションを一時的に取得することもできますが、それは現在アクティブなタブで明示的なユーザーアクションへの応答する場合のみで、["activeTab" パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission)を要求することで可能です。

タブ操作の多くはタブ ID を使います。タブ ID はブラウザーセッションの単一のタブごとにユニークである保証がされています。ブラウザーが再起動したら、タブ ID を再利用できて、実際そうします。ブラウザーの再起動をまたいでタブ情報を関連づけるには {{WebExtAPIRef("sessions.setTabValue()")}} を使います。

## 型

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : タブがミュートされている、またはミュートが解除されている理由を示す。
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : タブがミュートされているかを示す真理値と、最後の変更の理由からなるオブジェクト。
- {{WebExtAPIRef("tabs.PageSettings")}}
  - : [`tabs.saveAsPDF()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF)メソッドにおいて、どのように PDF を描画するかを制御する。
- {{WebExtAPIRef("tabs.Tab")}}
  - : タブについての情報を含む。
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : タブの読み込み状況を示す。
- {{WebExtAPIRef("tabs.WindowType")}}
  - : タブを所有しているウィンドウのタイプを示す。
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : ズームがブラウザーによるものか、拡張機能によるものか、またはズームが許可されていないのかを示す。
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : あるページのズームが、同一生成元の別ページにも適用されるか、タブ内でのみかを示す。
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : ズーム設定{{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}}とデフォルトのズーム要因を示す。

## プロパティ

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : ブラウザーのタブでないタブに対する特殊な ID（Windows の開発ツールなど）。

## 関数

- {{WebExtAPIRef("tabs.captureTab()")}}
  - : あるタブの可視エリアの画像をエンコードしたデータ URI を作成します。
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : 特定のウィンドウのアクティブなタブの可視エリアの画像をエンコードしたデータ URI を作成します。
- {{WebExtAPIRef("tabs.connect()")}}
  - : あるタブにおいて、バックグラウンドスクリプト（またはその他ポップアップやオプションページのスクリプトなど特権スクリプト）と [content scripts](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) 間でのメッセージのやり取り用の経路を確保します。
- {{WebExtAPIRef("tabs.create()")}}
  - : 新しいタブを作る。
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : タブのコンテンツの言語を検出する
- {{WebExtAPIRef("tabs.discard()")}}
  - : 1 つ以上のタブを破棄する。
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : タブを複製する。
- {{WebExtAPIRef("tabs.executeScript()")}}
  - : ページに JavaScript コードを挿入する。
- {{WebExtAPIRef("tabs.get()")}}
  - : 特定のタブについて情報を取り出す。
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : 特定のウィンドウ内のすべてのタブについての情報を取り出す。
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : スクリプトが実行されているタブについての情報を [`tabs.Tab`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) オブジェクトとして取り出す。
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : あるウィンドウにおいてタブが選択されているかを得る。
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : あるタブについてズーム要因を得る。
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : あるタブについてズーム設定を得る。
- {{WebExtAPIRef("tabs.goForward()")}}
  - : 可能な場合、次のページへ進む。
- {{WebExtAPIRef("tabs.goBack()")}}
  - : 可能な場合、前のページへ戻る。
- {{WebExtAPIRef("tabs.hide()")}} {{experimental_inline}}
  - : 1 つ以上のタブを隠す。
- {{WebExtAPIRef("tabs.highlight()")}}
  - : 1 つ以上のタブをハイライトする。
- {{WebExtAPIRef("tabs.insertCSS()")}}
  - : CSS をページに挿入する。
- {{WebExtAPIRef("tabs.move()")}}
  - : 2 つ以上のタブを同じ、あるいは異なるウィンドウの任意のポジションへ移動させる。
- {{WebExtApiRef("tabs.moveInSuccession()")}}
  - : タブグループの継承関係を編集する。
- {{WebExtAPIRef("tabs.print()")}}
  - : 開いているタブのコンテンツを印刷する。
- {{WebExtAPIRef("tabs.printPreview()")}}
  - : 開いているタブの印刷プレビューを開く。
- {{WebExtAPIRef("tabs.query()")}}
  - : 特定のプロパティを持つすべてのタブ、またはプロパティが指定されなければすべてのタブを取得します。
- {{WebExtAPIRef("tabs.reload()")}}
  - : タブをリロードする。キャッシュを回避することもできる。
- {{WebExtAPIRef("tabs.remove()")}}
  - : １つ以上のタブを閉じる。
- {{WebExtAPIRef("tabs.removeCSS()")}}
  - : 以前に{{WebExtAPIRef("tabs.insertCSS()")}}を呼び出して挿入されている CSS を削除する。
- {{WebExtAPIRef("tabs.saveAsPDF()")}}
  - : 現在のページを PDF として保存する。
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : あるタブのコンテンツスクリプトへ、１つのメッセージを送信する。
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : あるタブのコンテンツスクリプトへ、単一のリクエストを送信する。**非推奨**: 代わりに {{WebExtAPIRef("tabs.sendMessage()")}} を使用してください。
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : あるタブをズームする。
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : あるタブについてズーム設定をする。
- {{WebExtAPIRef("tabs.show()")}} {{experimental_inline}}
  - : {{WebExtAPIRef("tabs.hide()", "hidden")}}で隠されたタブを表示する。
- {{WebExtAPIRef("tabs.toggleReaderMode()")}}
  - : あるタブについてのリーダーモードへのトグル。
- {{WebExtAPIRef("tabs.update()")}}
  - : 新しい URL に案内、もしくはタブの他のプロパティを修正する。

## イベント

- {{WebExtAPIRef("tabs.onActivated")}}
  - : ウィンドウ内でアクティブなタブが変わったときに発火。このイベントが発火した段階ではまだタブの URL はセットされているとは限らない。
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : ウィンドウの中の選択されたタブが変更されたときに発火。**非推奨:** 代わりに{{WebExtAPIRef("tabs.onActivated")}}を利用してください。
- {{WebExtAPIRef("tabs.onAttached")}}
  - : タブがウィンドウに引っ付けられたとき、例えばウィンドウ間で移動されたときに発火。
- {{WebExtAPIRef("tabs.onCreated")}}
  - : タブが作られたときに発火。このイベントが発火した段階ではまだタブの URL はセットされているとは限らない。
- {{WebExtAPIRef("tabs.onDetached")}}
  - : タブがウィンドウから切り離されたときに発火。例えば、ウィンドウのない場所へタブを移動させたときなど。
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : ウィンドウ内でハイライトまたは選択されたタブが変更したときに発火。**非推奨:** 代わりに{{WebExtAPIRef("tabs.onHighlighted")}}を使用してください。
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : ウィンドウ内でハイライトまたは選択されたタブが変更したときに発火。
- {{WebExtAPIRef("tabs.onMoved")}}
  - : ウィンドウ内にタブが移動したときに発火する。
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : タブが閉じられたときに発火する。
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : プリレンダリングによってタブが他のタブに置き換えられたときに発火。
- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : ウィンドウ内で選択されているタブが変わったときに発火。**非推奨:** 代わりに{{WebExtAPIRef("tabs.onActivated")}}を使用してください。
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : タブが更新されたときに発火する。
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : タブがズームされたときに発火する。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.

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
