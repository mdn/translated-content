---
title: contextMenus
slug: Mozilla/Add-ons/WebExtensions/API/menus
---

{{AddonSidebar}}

브라우저의 메뉴 시스템에 항목을 추가한다.

이 API는 크롬의 ["contextMenus"](https://developer.chrome.com/extensions/contextMenus) API를 모델로 했다. 크롬 확장앱이 브라우저의 콘텍스트 메뉴에 항목을 추가하는 API인데, 파이어폭스의 `browser.menus` API는 여기에 몇 가지 특징을 더했다.

파이어폭스 55 이전에 이 API의 원래 이름은 `contextMenus`였고, 지금도 이 이름은 별명으로 유지되므로 다른 브라우저에서도 동작하는 코드를 작성한다면 `contextMenus`를 사용할 수 있다.

이 API를 사용하려면 '`menus`' [권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)이 필요하다. `menus` 대신에 `contextMenus`를 사용해도 된다. `contextMenus`를 사용했으면 API도 `browser.contextMenus`를 써야 한다.

콘텐트 스크립트에서는 [`menus.getTargetElement()`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)만 사용할 수 있다.

## 메뉴 항목 만들기

메뉴 항목을 만들려면 {{WebExtAPIRef("contextMenus.create()")}} 메소드를 호출한다. 인수로 항목의 ID, 종류, 어떤 콘텍스트일 때 표시되는지 등이 포함된 객체를 전달한다.

항목의 클릭을 처리하려면 {{WebExtAPIRef("contextMenus.onClicked")}} 이벤트에 리스너를 추가한다. 리스너는 상세한 이벤트 정보를 담고 있는{{WebExtAPIRef("contextMenus.OnClickData")}} 객체를 받는다.

콘텍스트 메뉴는 네 종류다. `create()`에 주어지는 `type` 속성으로 지정한다:

- "normal": 그냥 라벨만 표시된다.
- "checkbox": 라벨 옆에 추가로 체크표시가 있어 두가지 상태를 표현하는 메뉴 항목이다. 클릭할 때마다 라벨표시가 토글된다. 리스너는 두가지 속성을 추가로 받게 된다: "checked"는 현재 체크 상태를 가리키고, "wasChecked"는 클릭 이벤트 전의 체크 상태를 가리킨다.
- "radio": 여러 선택지 중의 하나라는 것을 표현하는 메뉴 항목이다. 라벨 옆에 체크표시가 있고, "checked"와 "wasChecked" 속성이 있다는 것은 checkbox와 같다. 다른 점은 radio 항목을 하나 이상 만들어 그룹이 되면, 오직 클릭하는 하나만 선택이 된다는 것이다.
- "separator": 항목을 그룹짓는 구분선이다.

메뉴 항목을 하나 이상 만들면 그 항목들은 서버메뉴로 표시되고, 상위메뉴의 라벨은 확장의 이름이 된다. 예를 들어, "Menu demo"라는 확장이 있고, 그것이 두 개의 콘텍스트 메뉴 항목을 추가했다면:

![](menus-1.png)

## 아이콘

["icons" manifest 키](/en-US/Add-ons/WebExtensions/manifest.json/icons)로 확장이 아이콘을 가졌으면, 콘텍스트 메뉴 항목은 라벨 옆에 아이콘을 함께 표시한다. 보통의 경우 16x16 픽셀이 표시되고, 고해상도이면 32x32 픽셀의 아이콘이 표시된다.

![](menus-2.png)

서버메뉴에 대해서만 {{WebExtAPIRef("menus.create()")}}에 `icons` 옵션을 전달해서 아이콘을 지정할 수 있다.

![](menus-3.png)

## 예제

아래 콘텍스트 메뉴에는 4개 항목이 있다: 보통 항목 하나, 위-아래가 구분선인 두 개의 라디오 항목, 그리고 체크박스 항목 하나다. 라디오 항목에는 따로 아이콘이 지정되었다.

![](menus-4.png)이 서버메뉴는 아래 코드로 만들 수 있다:

```js
browser.menus.create(
  {
    id: "remove-me",
    title: browser.i18n.getMessage("menuItemRemoveMe"),
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-1",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "greenify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemGreenify"),
    contexts: ["all"],
    checked: true,
    icons: {
      16: "icons/paint-green-16.png",
      32: "icons/paint-green-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "bluify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemBluify"),
    contexts: ["all"],
    checked: false,
    icons: {
      16: "icons/paint-blue-16.png",
      32: "icons/paint-blue-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-2",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

var checkedState = true;

browser.menus.create(
  {
    id: "check-uncheck",
    type: "checkbox",
    title: browser.i18n.getMessage("menuItemUncheckMe"),
    contexts: ["all"],
    checked: checkedState,
  },
  onCreated,
);
```

## 타입

- {{WebExtAPIRef("contextMenus.ContextType")}}
  - : 메뉴가 표시되게 하는 여러 콘텍스트. 가능한 값은: "all", "audio", "browser_action", "editable", "frame", "image", "link", "page", "page_action", "password", "selection", "tab", "video".
- {{WebExtAPIRef("contextMenus.ItemType")}}
  - : 메뉴 항목의 종류: "normal", "checkbox", "radio", "separator".
- {{WebExtAPIRef("contextMenus.OnClickData")}}
  - : 메뉴 항목이 클릭됐을 때 보내지는 정보.

## 속성

- {{WebExtAPIRef("contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : 최상위에 추가할 수 있는 ContextType이 "browser_action"이나 "page_action"인 메뉴 항목의 최대 수량.

## 함수

- {{WebExtAPIRef("contextMenus.create()")}}
  - : 새 콘텍스트 메뉴 항목을 만든다.
- {{WebExtAPIRef("contextMenus.update()")}}
  - : 전에 만든 콘텍스트 메뉴 항목을 갱신한다.
- {{WebExtAPIRef("contextMenus.remove()")}}
  - : 콘텍스트 메뉴 항목을 지운다.
- {{WebExtAPIRef("contextMenus.removeAll()")}}
  - : 확자앱에 추가된 모든 콘텍스트 메뉴 항목을 지운다.

## 이벤트

- {{WebExtAPIRef("contextMenus.onClicked")}}
  - : 콘텍스트 메뉴 항목이 클릭하면 발생한다.

## 브라우저 호환성

{{ Compat("webextensions.api.menus", 1, "true") }}

{{WebExtExamples("h2")}}

> **참고:** **Acknowledgements**This API is based on Chromium's [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus) API. This documentation is derived from [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) in the Chromium code.

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
