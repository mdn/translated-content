---
title: extensionTypes.RunAt
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/RunAt
---

{{AddonSidebar}}

JavaScript や CSS がどの時点でタブに挿入されるか。

## 型

この型の値は文字列です。とりうる値は、`"document_start"`, `"document_end"`, `"document_idle"` です。

- `"document_start"`: `loading` に対応します。DOM はまだ読み込み中の状態です。
- `"document_end"`: `interactive` に対応します。DOM の読み込みは終わりましたが、スクリプトや画像といったリソースはまだ読み込み中です。
- `"document_idle"`: `complete` に対応します。ドキュメントとその全てのリソースの読み込みが完了しました。

デフォルトの値は `"document_idle"` です。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes#type-RunAt) API に基づいています。また、このドキュメントは [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
