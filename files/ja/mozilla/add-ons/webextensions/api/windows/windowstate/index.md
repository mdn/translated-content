---
title: windows.WindowState
slug: Mozilla/Add-ons/WebExtensions/API/windows/WindowState
l10n:
  sourceCommit: 4b10cb28d5eee0e952b2d84bd1b23cc53daa93b7
---

{{AddonSidebar}}

ブラウザーウィンドウの状態です。

## 型

この値の型は `strings` です。可能な値は以下のとおりです。

- `"normal"`
  - : このウィンドウは既定のサイズまたはユーザー指定のサイズです。
- `"minimized"`
  - : このウィンドウはアイコンとしてタスクバーの中にだけ表示されています。
- `"maximized"`
  - : このウィンドウはオペレーティングシステムによって予約されている画面領域を除く画面全体を埋め尽くしています。
- `"fullscreen"`
  - : ウィンドウは全画面アプリケーションとして動作しているか、タブのコンテンツが[全画面 API](/ja/docs/Web/API/Fullscreen_API)を利用しています。
- `"docked"`
  - : ドックされたウィンドウは、同じアプリケーションで所有されている他のウィンドウとの相対的な位置が固定されます。

macOS の互換性: macOS 10.10 から、ウィンドウの既定の最大化動作が変更され、アプリケーションを「ズーム」ウィンドウではなく全画面アプリケーションとして実行するようになりました。全画面 (`fullscreen`) は、全画面アプリケーションとして実行されているブラウザーと、全画面 API を使用しているタブ内のコンテンツの両方を指します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#type-WindowState) API に基づいています。この記事は Chromium コードの [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) から派生しています。

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
