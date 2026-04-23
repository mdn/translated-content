---
title: menus.ContextType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ContextType
l10n:
  sourceCommit: 2c5465eab20015868a1eeca59c5623d37b105f7c
---

{{AddonSidebar}}

메뉴 항목이 표시될 수 있는 컨텍스트들입니다.

## 타입

이 타입의 값은 문자열입니다. 지정된 컨텍스트가 적용될 때 항목이 나타납니다. `menus.ContextType`에서 사용 가능한 값은 다음과 같습니다.

- all
  - : 'all'을 지정하면 'bookmark', 'tab', 'tools_menu'를 제외한 모든 컨텍스트의 조합과 동일하게 동작합니다.
- action
  - : 사용자가 Manifest V3 확장의 브라우저 액션을 컨텍스트 클릭할 때 적용됩니다. 최상위 브라우저 액션 컨텍스트 메뉴에 추가할 수 있는 최대 항목수는 {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}이지만, 서브 메뉴에는 얼마든지 추가할 수 있습니다.
- audio
  - : 사용자가 [audio](/ko/docs/Web/HTML/Element/audio) 요소를 컨텍스트 클릭할 때 적용됩니다.
- bookmark
  - : 사용자가 북마크 툴바나 북마크 메뉴, 북마크 사이드바(<kbd>Ctrl</kbd>+<kbd>B</kbd>)나 라이브러리 윈도우(<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>)에서 북마크 항목을 컨텍스트 클릭할 때 적용됩니다. 북마크 사이드바와 라이브러리 윈도우에서의 적용은 Firefox 66부터 지원됩니다. 매니페스트에 "bookmarks" [API 권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)이 요구됩니다.

- browser_action
  - : 사용자가 Manifest V2 확장의 브라우저 액션을 컨텍스트 클릭할 때 적용됩니다. 최상위 브라우저 액션 컨텍스트 메뉴에 추가할 수 있는 최대 항목수는 {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}이지만, 서브 메뉴에는 얼마든지 추가할 수 있습니다.
- editable
  - : [textarea](/ko/docs/Web/HTML/Element/textarea)처럼 편집 가능한 요소를 컨텍스트 클릭할 때 적용됩니다.
- frame
  - : 중첩된 [iframe](/ko/docs/Web/HTML/Element/iframe)을 컨텍스트 클릭할 때 적용됩니다.
- image
  - : 사용자가 이미지를 컨텍스트 클릭할 때 적용됩니다.
- link
  - : 사용자가 링크를 컨텍스트 클릭할 때 적용됩니다.
- page
  - : 사용자가 페이지를 컨텍스트 클릭했지만 다른 페이지 컨텍스트가 적용되지 않는 경우에 적용됩니다(예: 클릭이 이미지나 중첩된 iframe, 혹은 링크에서 발생하지 않은 경우).
- page_action
  - : 사용자가 페이지 액션을 컨텍스트 클릭할 때 적용됩니다. 최상위 페이지 액션 컨텍스트 메뉴에 추가할 수 있는 최대 항목수는 {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}이지만, 서브 메뉴에는 얼마든지 추가할 수 있습니다.
- password
  - : 사용자가 [password 입력 요소](/ko/docs/Web/HTML/Element/input/password)를 컨텍스트 클릭할 때 적용됩니다.
- selection
  - : 페이지 일부가 선택되어 있을 때 적용됩니다.
- tab
  - : 사용자가 탭을 컨텍스트 클릭할 때 적용됩니다. 구체적으로 페이지 자체가 아니라, 사용자가 한 브라우저 탭에서 다른 탭으로 전환할 수 있도록 하는 탭 스트립 또는 기타 사용자 인터페이스 요소를 의미합니다.

    Firefox 63부터는 탭의 메뉴 항목을 클릭하면 현재 활성 탭이 아닌 경우에도 클릭한 탭에 대해 [activeTab](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) 권한이 부여됩니다.

- tools_menu
  - : 항목이 브라우저의 도구 메뉴에 추가됩니다. 이 기능은 `menus` 네임스페이스를 통해 `ContextType`에 접근하는 경우에만 사용할 수 있다는 것을 참고하십시오. `contextMenus` 네임스페이스를 통해 접근하는 경우에는 사용할 수 없습니다.
- video
  - : [video](/ko/docs/Web/HTML/Reference/Elements/video) 요소에 컨텍스트 클릭을 할 때 적용됩니다.

참고: "launcher"는 지원되지 않습니다.

## 브라우저 호환성

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 이 API는 Chromium의 [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ContextType) API를 기반으로 합니다. 이 문서는 Chromium 코드의 [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json)에서 파생되었습니다.

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
