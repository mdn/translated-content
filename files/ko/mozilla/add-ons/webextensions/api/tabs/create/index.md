---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
---

{{AddonSidebar()}}

새 탭을 만든다.

이것은 비동기 함수로 [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 돌려준다.

## 문법

```js
var creating = browser.tabs.create(
  createProperties, // object
);
```

### 매개변수

- `createProperties`

  - : `object`. 새 탭에 대한 속성들. 속성들에 대해 더 배우려면 {{WebExtAPIRef("tabs.Tab")}} 문서를 보라.

    - `active`{{optional_inline}}
      - : `boolean`. 활성탭이 되는지를 정한다. 윈도우의 포커스에는 영향이 없다({{WebExtAPIRef('windows.update')}} 참조). 기본값은 `true`.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. 탭의 쿠키 저장 ID를 `cookieStoreId`로 지정한다. 이 옵션은 확장이 `"cookies"` [권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)을 가져야 쓸 수 있다.
    - `index`{{optional_inline}}
      - : `integer`. 윈도우에서 탭의 위치를 지정한다. 쓸 수 있는 값은 0에서 윈도에 있는 탭의 수까지다.
    - `openerTabId`{{optional_inline}}
      - : `integer`. The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
    - `openInReaderMode`{{optional_inline}}
      - : `boolean`. If `true`, open this tab in [Reader Mode](/en-US/Add-ons/WebExtensions/API/tabs/toggleReaderMode). Defaults to `false`.
    - `pinned`{{optional_inline}}
      - : `boolean`. Whether the tab should be pinned. Defaults to `false`.
    - `selected`{{optional_inline}}

      - : `boolean`. 윈도우에서 탭이 선택되는지를 지정한다. 기본값은 `true`.

        > **경고:** 이 속성은 사용이 중단되었다. 파이어폭스에서는 지원하지 않는다. `active`가 대신한다.

    - `url` {{optional_inline}}

      - : `string`. 최초 표시될 URL. 기본값은 새 탭 페이지다.
        URL은 반드시 scheme를 포함해야 한다 (가령은 'http://www.google.com'은 되지만, 'www.google.com'은 안된다).
        보안상 파이어폭스에서 특권이 있는 URL은 안된다. 그래서 아래와 같은 URL을 주면 실패할 것이다:

        - chrome: URL
        - javascript: URL
        - data: URL
        - file: URL (예, 파일시스템의 파일들. 단, 확장 안에 포함된 파일의 사용은 아래를 보라)
        - 특권이 있는 about: URL (예, `about:config`, `about:addons`, `about:debugging`). 특권이 없는 URL은 된다 (예, `about:blank`).
        - 새 탭 페이지 ( `about:newtab`)는 URL 값이 주어지지 않으면 열린다.

        확장에 포함된 페이지의 로딩은 확장의 manifest.json 파일이 있는데서 시작하는 절대 경로를 써라. 예를 들면: '/path/to/my-page.html'. 만약 첫 '/'를 빼면 URL은 상대 경로로 취급되고, 다른 브라우저들은 다른 절대 경로를 생성해낼 것이다.

    - `windowId`{{optional_inline}}
      - : `integer`. 새 탭이 만들어질 윈도우. 기본값은 현재 윈도우.

### Return value

A [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('tabs.Tab')}} object containing details about the created tab. If the tab could not be created (for example, because `url` used a privileged scheme) the promise will be rejected with an error message.

## 브라우저 호환성

{{Compat}}

## 예제

Open "https\://example.org" in a new tab:

```js
function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function () {
  var creating = browser.tabs.create({
    url: "https://example.org",
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

> **참고:** **Acknowledgements**This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-create) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
