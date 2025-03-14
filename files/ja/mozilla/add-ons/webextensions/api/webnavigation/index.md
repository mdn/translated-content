---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
---

{{AddonSidebar}}

ナビゲーションのいろいろな段階でイベントリスナーを追加します。ナビゲーションにはある URL から他に移動するブラウザーフレームにより成り立っていて、それは(いつもではなく)通常はリンクのクリックやロケーションバーへの URL 入力といったユーザー操作の応答として発生します。

{{WebExtAPIRef("webRequest")}} API と比較して: ナビゲーションは通常、ブラウザーにウェブリクエストを発生させますが、webRequest API は HTTP 層からの低レベルな観点に関心を持っており、一方で webNavigation API はブラウザー UI 自身に対して、より関心を持っています。

それぞれのイベントはナビゲーションの特定のステージに対応しています。イベントシーケンスは次の通りです:

![](we-flow.png)

- 主なフローは次の通り:

  - `{{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}`
  - `{{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}`
  - `{{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}`
  - `{{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}`.

- 追加のものは次の通り:

  - `{{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}}` は、ブラウザーがナビゲーション用にタブやウィンドウを作成する必要がある場合 (例えば、ユーザーがリンクを新しいタブで開いたために)、`onBeforeNavigate` の前に発火します。
  - {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} はページが [history API](http://diveintohtml5.info/history.html) を使ってブラウザーのロケーションバーに表示された URL を更新する場合に発火します。
  - {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} はページの [fragment identifier](https://en.wikipedia.org/wiki/Fragment_identifier) が変更された場合に発火します。
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} はあらゆる場所で発火します。

それぞれのナビゲーションは特定のブラウザーフレーム内の URL の遷移です。ブラウザーフレームはタブ ID とフレーム ID で識別されます。フレームはタブ内の再上位の閲覧コンテキストである場合や、[iframe](/ja/docs/Web/HTML/Element/iframe) として実装されたネストされた閲覧コンテキストである場合があります。

それぞれのイベントの `addListener()` の呼び出しはオプションの filter パラメーターを受け入れます。filter は 1 つ以上の URL パターンを指定し、イベントはターゲット URL がパターンにマッチしたナビゲーションの時だけに発火します。

`onCommitted` イベントリスナーには 2 つの追加プロパティが渡されます: ナビゲーションの原因 (例えばユーザーがリンクをクリックしたり、ユーザーがブックマークを選んだり) を示す{{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}} と、ナビゲーションの詳細情報を提供する{{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}} です。

この API を使うには"webNavigation" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)が必要です。

## 型

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : ナビゲーションの原因: 例えば、ユーザーがリンクをクリックしたり、アドレスを入力したり、ブックマークをクリックしたりなど。
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : 遷移の追加情報

## 関数

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : 特定フレームについての情報を取得します。フレームにはタブ内のトップレベルのフレームや、ネストされた [iframe](/ja/docs/Web/HTML/Element/iframe) であり、タブ ID とフレーム ID でユニークに識別されます。
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : タブ ID を指定すると、そのタブに含まれているすべてのフレームの情報を取得します。

## イベント

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : ブラウザーがナビゲーションイベントを開始する直前に発火します。
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : ナビゲーションがコミットされたときに発火します。少なくともサーバーから新しい document がいくらか取得されてブラウザーが新 document に切り替えると決めたとき。
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : ページ内で [DOMContentLoaded](/ja/docs/Web/API/Document/DOMContentLoaded_event) イベントが発火したときに発火します。
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : document と、それが参照するリソースが完全にロードされて初期化されたときに発火します。これは DOM [`load`](/ja/docs/Web/API/Window/load_event) イベントと等価です。
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : エラーが起こってナビゲーションが停止したときに発火します。これはネットワークエラーが起きたときや、ユーザーがナビゲーションを停止したときのいずれかで起こりえます。
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : 新しいウィンドウや、既存のウィンドウ内の新規タブが作成されてナビゲーションをホストするときに発火します: 例えば、ユーザーが新しいタブでリンクを開いた場合。
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : ページの [fragment identifier](https://en.wikipedia.org/wiki/Fragment_identifier) が変化したときに発火します。
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : タブのコンテンツが別のタブ (通常は以前レンダリング済みのもの) に置き換えられるときに発火します。
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : ページで [history API](http://diveintohtml5.info/history.html) を使ってブラウザーのロケーションバーの URL が更新されたときに発火します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation) API. This documentation is derived from [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
