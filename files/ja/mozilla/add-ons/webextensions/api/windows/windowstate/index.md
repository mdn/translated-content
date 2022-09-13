---
title: windows.WindowState
slug: Mozilla/Add-ons/WebExtensions/API/windows/WindowState
---
{{AddonSidebar()}}

ブラウザウィンドウの状態。

## 型

値の方は`strings`です。可能な値は以下:

- `"normal"`
  - : ウィンドウはデフォルトかユーザ指定のサイズ。
- `"minimized"`
  - : ウィンドウはアイコンとしてタスクバーの中に表示(最小化)。
- `"maximized"`
  - : ウィンドウはシステムエリアや OS による予約なしに画面を満たしている(最大化)。
- `"fullscreen"`
  - : ウィンドウはフルスクリーンアプリケーションとして稼働しているか、タブの内容が[Fullscreen API](/ja/docs/Web/API/Fullscreen_API)を利用している(全画面)。
- `"docked"`
  - : ドックされたウィンドウは、同じアプリケーションで所有されている他のウィンドウとの相対的な位置が固定されます。

macOSとの互換性: macOS 10.10 から、ウィンドウのデフォルトの最大化動作が変更され、アプリケーションを「ズーム」ウィンドウではなくフルスクリーンアプリケーションとして実行するようになりました。 「フルスクリーン」は、フルスクリーンアプリケーションとして実行されているブラウザと、タブ内のコンテンツがフルスクリーン API を使用する場合の両方を指します。

## ブラウザーの互換性

{{Compat("webextensions.api.windows.WindowState")}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/extensions/windows#type-WindowState) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<pre class="hidden">// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre>
