---
title: pageAction.show()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/show
---

{{AddonSidebar()}}

지정한 탭의 페이지 액션을 보인다. 페이지 액션은 해당 탭이 활성일 때 표시된다.

`show()`는 설정된 URL 패턴과 상관없이 동작한다. 따라서 [`show_matches`](/Add-ons/WebExtensions/manifest.json/page_action)와 일치하지 않아도 [`hide_matches`](/Add-ons/WebExtensions/manifest.json/page_action)여도 표시된다.

`show()`는 아무런 내용도 없는 탭에는 효과가 없다.

## 문법

```js
browser.pageAction.show(
  tabId, // integer
);
```

### 매개변수

- `details`

  - : `object`. An object containing the `tabId` to check.

    - `tabId`
      - : `integer`. ID of the tab to check.

### 반환 값

A [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with `true` if the extension's page action is being shown for the given tab, and `false` otherwise.

## 브라우저 호환성

{{Compat}}

## 예제

콘텍스트 메뉴가 선택되면 페이지 액션을 보이는 예제다. 메뉴를 만들려면 `contextMenus` [권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)이 [manifest](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json)에 필요하다.

```js
browser.contextMenus.create({
  id: "show",
  title: "Show page action",
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "show") {
    browser.pageAction.show(tab.id);
  }
});
```

{{WebExtExamples}}

> **참고:** **Acknowledgements**This API is based on Chromium's [`chrome.pageAction`](https://developer.chrome.com/extensions/pageAction#method-show) API. This documentation is derived from [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

```
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
```
