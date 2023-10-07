---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
---

{{AddonSidebar()}}

{{WebExtAPIRef("downloads")}} API の **`download()`** 関数では URL とそのほかのオプションの設定を行うことでファイルのダウンロードをすることができます。

- HTTP もしくは HTTPS のプロトコルを使用した URL を指定した場合、対象のホスト名に対応する全ての cookie を含んだリクエストが送られます。
- `filename` と `saveAs` が指定されている場合、指定された`filename`が設定された\[名前をつけて保存]のダイアログが開きます。

この関数は非同期に実行され、[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)を返します。

## 構文

```js
var downloading = browser.downloads.download(
  options, // object
);
```

### パラメータ

- `options`

  - : この`object`ではダウンロードしたいファイルやその他のダウンロードに関する設定を指定します。指定できるプロパティは以下です。

    - `body`{{optional_inline}}
      - : リクエストの body を`string`で指定します。
    - `conflictAction`{{optional_inline}}
      - : A string representing the action you want taken if there is a filename conflict, as defined in the {{WebExtAPIRef('downloads.FilenameConflictAction')}} type (defaults to "uniquify" when it is not specified).
    - `filename` {{optional_inline}}
      - : A `string` representing a file path relative to the default downloads directory — this provides the location where you want the file to be saved, and what filename you want to use. Absolute paths, empty paths, and paths containing back-references (`../`) will cause an error. If omitted, this value will default to the filename already given to the download file, and a location immediately inside the downloads directory.
    - `headers`{{optional_inline}}
      - : An `array` of `objects` representing extra HTTP headers to send with the request if the URL uses the HTTP\[s] protocol. Each header is represented as a dictionary object containing the keys `name` and either `value` or `binaryValue`, restricted to those allowed by [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest).
    - `incognito`{{optional_inline}}
      - : A `boolean`: if present and set to true, then associate this download with a private browsing session. This means that it will only appear in the download manager for any private windows that are currently open.
    - `method`{{optional_inline}}
      - : HTTP\[S]を使用した URL を指定した際、HTTP メソッドを`string`で指定します。GET もしくは POST を設定できます。
    - `saveAs`{{optional_inline}}

      - : A `boolean` that specifies whether to provide a file chooser dialog to allow the user to select a filename (`true`), or not (`false`).

        If this option is omitted, the browser will show the file chooser or not based on the general user preference for this behavior (in Firefox this preference is labeled "Always ask you where to save files" in about:preferences, or `browser.download.useDownloadDir` in about:config).

    - `url`
      - : ダウンロードする URL を`string`で指定します。

### 戻り値

[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)が返却されます。ダウンロードが成功した場合、new {{WebExtAPIRef("downloads.DownloadItem")}}の id が格納された promise を受け取ります。対して、promise が reject された場合は、エラーメッセージを受け取ります。

## ブラウザーの互換性

{{Compat("webextensions.api.downloads.download")}}

## 例

以下のダウンロードの例ではファイル名と保存場所を指定し、`conflictAction`に`uniquify`を指定しています。

```js
function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

var downloadUrl = "https://example.org/image.png";

var downloading = browser.downloads.download({
  url: downloadUrl,
  filename: "my-image-again.png",
  conflictAction: "uniquify",
});

downloading.then(onStartedDownload, onFailed);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.downloads`](https://developer.chrome.com/extensions/downloads#method-download) API を元にしています。

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
