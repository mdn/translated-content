---
title: tabs.MutedInfoReason
slug: Mozilla/Add-ons/WebExtensions/API/tabs/MutedInfoReason
---

{{AddonSidebar}}

タブがミュート・アンミュートになった理由を指定します。

## 型

値のタイプは文字列型です。可能な値:

- "capture"
  - : タブのキャプチャが開始され、ミュート状態に強いられました。
- "extension"
  - : 拡張機能がミュート状態に設定しました。もしこれが理由なら、{{WebExtAPIRef("tabs.mutedInfo")}}の`extensionId`が責任のある拡張機能の ID を含んでいます。
- "user"
  - : ユーザーがミュート状態に設定しました。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の[`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#type-MutedInfoReason) API に基づいています。このドキュメントは Chromium コードの[`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)から派生したものです。Microsoft Edge の互換性データは Microsoft Corporation から提供されており、Creative Commons Attribution 3.0 United States License のもとにここに含まれています。

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
