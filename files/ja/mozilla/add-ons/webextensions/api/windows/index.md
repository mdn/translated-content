---
title: windows
slug: Mozilla/Add-ons/WebExtensions/API/windows
---

{{AddonSidebar}}

ブラウザーウィンドウと相互作用します。この API を使って開いているウィンドウの情報を取得したり、ウィンドウを開き、修正し、閉じることができます。ウィンドウのオープン、クローズ、アクティベートのイベントをリッスンすることもできます。

## 型

- {{WebExtAPIRef("windows.WindowType")}}
  - : ブラウザーウィンドウの this の型。
- {{WebExtAPIRef("windows.WindowState")}}
  - : ブラウザーウィンドウの状態。
- {{WebExtAPIRef("windows.Window")}}
  - : ブラウザーウィンドウについての情報を含む。
- {{WebExtAPIRef("windows.CreateType")}}
  - : 作成するブラウザーウィンドウの型を指定する。

## 定数

- {{WebExtAPIRef("windows.WINDOW_ID_NONE")}}
  - : ブラウザーウィンドウがないことを表す `windowId` の値。
- {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}
  - : 現在のウィンドウを表す `windowId` の値。

## メソッド

- {{WebExtAPIRef("windows.get()")}}
  - : 与えられた ID のウィンドウの詳細を取得します。
- {{WebExtAPIRef("windows.getCurrent()")}}
  - : 現在のウィンドウを取得します。
- {{WebExtAPIRef("windows.getLastFocused()")}}
  - : 最も最近フォーカスされたウィンドウを取得します — 典型的には「最上位」のウィンドウです。
- {{WebExtAPIRef("windows.getAll()")}}
  - : すべてのウィンドウを取得します。
- {{WebExtAPIRef("windows.create()")}}
  - : 新しいウィンドウを作成します。
- {{WebExtAPIRef("windows.update()")}}
  - : ウィンドウのプロパティを更新します。これを使ってウィンドウの移動、リサイズ、フォーカス(外し)などを行います。
- {{WebExtAPIRef("windows.remove()")}}
  - : ウィンドウと、そのタブのすべてを閉じます。

## イベント

- {{WebExtAPIRef("windows.onCreated")}}
  - : ウィンドウが作成された時に発火します。
- {{WebExtAPIRef("windows.onRemoved")}}
  - : ウィンドウが閉じられた時に発火します。
- {{WebExtAPIRef("windows.onFocusChanged")}}
  - : 現在フォーカスされているウィンドウが変わった時に発火します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.

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
