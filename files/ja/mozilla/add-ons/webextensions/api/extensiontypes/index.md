---
title: extensionTypes
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes
---

{{AddonSidebar}}

その他の WebExtension API で使われる共通な型

## 型

- {{WebExtAPIRef("extensionTypes.ImageFormat")}}
  - : 画像フォーマット
- {{WebExtAPIRef("extensionTypes.ImageDetails")}}
  - : 画像のフォーマットと画質の詳細
- {{WebExtAPIRef("extensionTypes.RunAt")}}
  - : タブに JavaScript か CSS が挿入されてほんのすぐ
- `extensionTypes.CSSOrigin`
  - : [`tabs.insertCSS`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) で挿入された CSS スタイルシートが "author" か "user" のスタイルシートのどちらであるかを示す

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes) API に基づいています。また、このドキュメントは [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json)における Chromium のコードに基づいています。

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
