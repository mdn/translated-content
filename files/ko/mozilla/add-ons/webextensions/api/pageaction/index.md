---
title: pageAction
slug: Mozilla/Add-ons/WebExtensions/API/pageAction
---

{{AddonSidebar}}

[페이지 액션](/ko/docs/Mozilla/Add-ons/WebExtensions/Page_actions)은 브라우저의 주소창에 있는 아이콘이다.

![](page-action.png)

아이콘 클릭에 대한 대응은 리스너를 등록하고 클릭 이벤트를 기다리는 것이나, [팝업창](/ko/docs/Mozilla/Add-ons/WebExtensions/Popups)이 열리게 하는 것일 수 있다.

팝업창은 보통의 웹페이지처럼 HTML, CSS, 그리고 자바스크립트로 내용과 동작을 작성할 수 있다. 팝업창에서 실행되는 자바스크립트는 백그라운드 스크립트와 마찬가지로 모든 확장앱 API를 사용할 수 있다.

[manifest.json](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json)의 [page_action 키](/en-US/Add-ons/WebExtensions/manifest.json/page_action)에 페이지 액션의 대부분의 속성들을 정의할 수 있지만, 이것들은 확정되는 것이라 이후에 바꿀 수 없다. 하지만 이 API는 그것들을 프로그램적으로 재정의하는 것도 가능하다. 그러나 API는 [manifest.json](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json)에 [page_action](/en-US/Add-ons/WebExtensions/manifest.json/page_action) 키가 있어야만 사용할 수 있게 되므로 설사 모든 것을 프로그램적으로 할 계획이더라도 [page_action 키](/en-US/Add-ons/WebExtensions/manifest.json/page_action)는 있어야 한다.

페이지 액션은 특정 페이지에만 적절한 동작들을 위한 것이다(이럴테면 "현재 탭을 북마크하기" 같은). 그렇지 않고, 브라우저가 전반적으로 관련되는 동작이라면(가령은 "모든 북마크 보기" 라면) 브라우저 액션을 대신 사용하라.

## 자료형

- {{WebExtAPIRef("pageAction.ImageDataType")}}
  - : 이미지에 대한 픽셀 자료.

## 함수

- {{WebExtAPIRef("pageAction.show()")}}
  - : 지정한 탭에 페이지 액션을 보인다.
- {{WebExtAPIRef("pageAction.hide()")}}
  - : 지정한 탭의 페이지 액션을 숨긴다.
- {{WebExtAPIRef("pageAction.isShown()")}}
  - : 페이지 액션이 보이는지 아닌지 검사한다.
- {{WebExtAPIRef("pageAction.setTitle()")}}
  - : 페이지 액션의 제목을 설정한다. 이것은 페이지 액션위에 툴팁으로 표시된다.
- {{WebExtAPIRef("pageAction.getTitle()")}}
  - : 페이지 액션의 제목을 얻는다.
- {{WebExtAPIRef("pageAction.setIcon()")}}
  - : 페이지 액션의 아이콘을 설정한다.
- {{WebExtAPIRef("pageAction.setPopup()")}}
  - : 페이지 액션의 팝업 URL을 설정한다.
- {{WebExtAPIRef("pageAction.getPopup()")}}
  - : 페이지 액션의 팝업 URL을 얻는다.
- {{WebExtAPIRef("pageAction.openPopup()")}}
  - : 페이지 액션의 팝업을 연다.

## 이벤트

- {{WebExtAPIRef("pageAction.onClicked")}}
  - : 페이지 액션의 아이콘이 클릭되면 발생한다. 페이지 액션이 팝업이 설정되어 있으면 발생하지 않는다.

## 브라우저 호환성

{{Compat}}

{{WebExtExamples("h2")}}

> **참고:** **Acknowledgements** This API is based on Chromium's [`chrome.pageAction`](https://developer.chrome.com/extensions/pageAction) API. This documentation is derived from [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
