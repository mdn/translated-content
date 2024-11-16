---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
l10n:
  sourceCommit: 8d4f5dfc253d1d0181d72ce5debaf1bcc26112ef
---

{{AddonSidebar}}

새 탭을 만듭니다.

`tabs.create()`는 [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 반환하는 비동기 함수입니다.

## 구문

```js-nolint
let creating = browser.tabs.create(
  createProperties   // object
)
```

### 매개변수

- `createProperties`

  - : `object`. 새 탭에 줄 속성들입니다. 이 속성들에 대해 더 알아보려면 {{WebExtAPIRef("tabs.Tab")}} 문서를 확인하십시오.

    - `active`{{optional_inline}}
      - : `boolean`. 탭을 창의 활성 탭으로 변경할지에 대한 여부입니다. `false`인 경우에는 효과가 없습니다. 창에 포커스가 맞춰져 있는지 여부에는 영향을 주지 않습니다({{WebExtAPIRef('windows.update')}}를 참조하십시오). 기본 값은 `true`입니다.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. 쿠키 저장소 ID가 `cookieStoreId`인 탭을 생성하기 위해 사용합니다. 이 옵션은 확장이 `"cookies"` [권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)을 가져야만 사용할 수 있습니다. [상황별 신원을 사용해 작업하기](/ko/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)에서 더 많은 정보를 확인하세요.
    - `discarded` {{optional_inline}}
      - : `boolean`. 탭이 생성된 뒤 메모리에 로드된 콘텐츠 없이 탭 표시줄에 표시되는 상태인지에 대한 여부입니다. 탭이 활성화되면 탭의 콘텐츠가 로드됩니다.
    - `index`{{optional_inline}}
      - : `integer`. 창에서 탭이 차지할 위치입니다. 제공되는 값은 0부터 창의 탭 개수 사이로 고정됩니다.
    - `muted` {{optional_inline}}
      - : `boolean`. 탭의 음소거 여부입니다. 기본 값은 `false`입니다.
    - `openerTabId`{{optional_inline}}
      - : `integer`. 이 탭을 연 탭의 ID입니다. 이 값이 지정된 경우, 새로운 탭을 연 탭은 반드시 새로 생성한 탭과 같은 창에 있어야 합니다.
    - `openInReaderMode`{{optional_inline}}
      - : `boolean`. `true`일 경우, 이 탭을 [읽기 모드](/ko/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)로 엽니다. 기본 값은 `false`입니다.
    - `pinned`{{optional_inline}}
      - : `boolean`. 탭의 고정 여부입니다. 기본 값은 `false`입니다.
    - `selected`{{optional_inline}}

      - : `boolean`. 창에서 선택된 탭이 되는지에 대한 여부입니다. 기본 값은 `true`입니다.

        > [!WARNING]
        > 이 속성은 폐기되었으며, Firefox에서는 지원되지 않습니다. 대신 `active`를 사용하십시오.

    - `title` {{optional_inline}}
      - : `string`. 탭의 제목입니다. `discarded` 속성이 `true`로 생성된 탭에서만 사용할 수 있습니다.
    - `url` {{optional_inline}}

      - : `string`. 탭이 초기에 이동할 URL입니다. 기본 값은 새 탭 페이지입니다.

        정규화된 URL에는 반드시 스킴이 포함되어야 합니다. 예를 들어, 'www.google.com' 이 아닌 'http://www.google.com' 을 사용해야 합니다.

        보안상의 이유로 Firefox에서는 특수한 권한을 가진 URL은 사용할 수 없습니다. 따라서 다음과 같은 URL을 전달하면 실패하게 됩니다.

        - chrome: URLs
        - javascript: URLs
        - data: URLs
        - file: URLs (예: 파일시스템의 파일들. 단, 확장 안에 패키지된 파일을 사용하려면 아래를 참조하십시오.)
        - 특수한 권한을 가지는 about: URLs (예: `about:config`, `about:addons`, `about:debugging`). 권한이 없는 URL(예: `about:blank`)은 허용됩니다.
        - URL 값이 주어지지 않으면 새 탭 페이지 (`about:newtab`)가 열립니다.

        확장 프로그램과 함께 패키지된 페이지를 로드하려면, 확장 프로그램의 manifest.json 파일에서부터 시작하는 절대 URL을 지정하십시오. 예를 들어 '/path/to/my-page.html' 앞의 '/'를 생략하면, URL이 상대 URL로 취급되어 브라우저마다 다른 절대 URL을 생성할 수 있습니다.

    - `windowId`{{optional_inline}}
      - : `integer`. 새 탭을 생성할 창입니다. 기본 값은 현재 창입니다.

### 반환 값

생성된 탭에 대한 세부 정보가 포함된 {{WebExtAPIRef('tabs.Tab')}} 객체로 이행되는 [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)입니다. 탭을 만들 수 없는 경우(예: `url`에 권한이 있는 스킴을 사용한 경우) 오류 메시지와 함께 프로미스가 거부됩니다.

`browser.tabs.create()`가 반환한 프로미스는 탭이 생성되는 즉시 리졸브됩니다. 탭은 아직 로드 중일 수 있습니다. 탭 로딩이 완료되었는지 확인하려면, `tabs.create`를 호출하기 전에 {{WebExtAPIRef('tabs.onUpdated')}} 또는 {{WebExtAPIRef('webNavigation.onCompleted')}} 이벤트를 수신하십시오.

## 예제

새 탭에서 "https\://example.org" 열기.

```js-nolint
function onCreated(tab) {
  console.log(`새 탭 생성: ${tab.id}`);
}

function onError(error) {
  console.log(`오류: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let creating = browser.tabs.create({
    url: "https://example.org",
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

## 브라우저 호환성

{{Compat}}

> [!NOTE]
> 이 API는 Chromium의 [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-create) API를 기반으로 합니다. 이 문서는 Chromium 코드의 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)에서 파생되었습니다.

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
