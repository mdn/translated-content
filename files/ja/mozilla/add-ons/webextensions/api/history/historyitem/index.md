---
title: history.HistoryItem
slug: Mozilla/Add-ons/WebExtensions/API/history/HistoryItem
---

{{AddonSidebar}}

`HistoryItem` オブジェクトはブラウザー履歴でのページ情報を提供します。

## 型

これは下記のプロパティを持つオブジェクトです:

- `id`
  - : `string`。アイテムに固有の ID。
- `url` {{optional_inline}}
  - : `string`。ページの URL。
- `title` {{optional_inline}}
  - : `string`。ページのタイトル。
- `lastVisitTime` {{optional_inline}}
  - : `number`。ページが最後に読み込まれた日付と時間で、epoch からのミリ秒で表現される。
- `visitCount` {{optional_inline}}
  - : `number`。ユーザーがページを訪問した回数。
- `typedCount` {{optional_inline}}
  - : `number`。ユーザーがアドレスをタイプしてページに移動したきた回数。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#type-HistoryItem) API に基づいています。また、このドキュメントは [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
