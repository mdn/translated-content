---
title: tabs.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/detectLanguage
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

使用[紧凑语言检测器](https://github.com/CLD2Owners/cld2)（CLD）检测标签页内容的主要语言。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let detecting = browser.tabs.detectLanguage(
  tabId,                  // 可选整数
  callback                // 可选函数
)
```

### 参数

- `tabId` {{optional_inline}}
  - : `integer`。默认为当前窗口的活动标签。
- `callback` {{optional_inline}}
  - : `function`。目前，如果指定了 `tabId`，该方法将使用此回调函数返回结果，而不是返回一个 promise。回调函数接收一个包含检测到的语言代码（例如 `en` 或 `fr`）的字符串作为唯一输入参数。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个结果为代表 ISO 语言代码的字符串，如 `en` 或 `fr`。有关该方法支持的完整语言列表，请参见 [kLanguageInfoTable](https://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc#l23)。对于未知语言，将返回 `"und"`（但请参见 [bug 1288263](https://bugzil.la/1288263)）。如果发生任何错误，则该 promise 将以错误消息拒绝。

## 示例

用户点击浏览器操作时检测并记录活动标签的语言：

```js
function onLanguageDetected(lang) {
  console.log(`语言是：${lang}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.detectLanguage().then(onLanguageDetected, onError);
});
```

用户点击浏览器操作时检测并记录每个打开标签的语言（注意此示例需要“tabs”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)）：

```js
function onLanguageDetected(url, lang) {
  console.log(`在 ${url} 中的语言是：${lang}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

function detectLanguages(tabs) {
  for (const tab of tabs) {
    browser.tabs
      .detectLanguage(tab.id)
      .then((lang) => onLanguageDetected(tab.url, lang), onError);
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({}).then(detectLanguages, onError);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-detectLanguage) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
