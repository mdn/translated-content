---
title: tabs.duplicate()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/duplicate
---

{{AddonSidebar()}}

ID で指定されたタブを複製します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var duplicating = browser.tabs.duplicate(
  tabId, // integer
);
```

### パラメータ

- `tabId`
  - : `integer`. 複製するタブの ID を指定します。

### 戻り値

A [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('tabs.Tab')}} object containing details about the duplicated tab. The `Tab` object only contains `url`, `title` and `favIconUrl` if the extension has the [`"tabs"` permission](/ja/Add-ons/WebExtensions/manifest.json/permissions). If any error occurs the promise will be rejected with an error message.

## ブラウザーの互換性

{{Compat("webextensions.api.tabs.duplicate")}}

## 例

１つ目のタブを複製し、新しく作られたタブの ID をログに残す例：

```js
function onDuplicated(tabInfo) {
  console.log(tabInfo.id);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

// Duplicate the first tab in the array
function duplicateFirstTab(tabs) {
  console.log(tabs);
  if (tabs.length > 0) {
    var duplicating = browser.tabs.duplicate(tabs[0].id);
    duplicating.then(onDuplicated, onError);
  }
}

// Query for all open tabs
var querying = browser.tabs.query({});
querying.then(duplicateFirstTab, onError);
```

{{WebExtExamples}}

> **メモ:** この API は Chromiums の [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-duplicate) API に基づいています。 This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
