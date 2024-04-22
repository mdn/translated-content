---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
---

{{AddonSidebar}}

웹확장이 데이터를 저장하고, 확인하고, 저장된 항목의 변화를 감시할 수 있도록 해 준다.

저장소 시스템은 [Web Storage API](/ko/docs/Web/API/Web_Storage_API)에 기반하는데 약간의 차이가 있다:

- 비동기로 동작한다.
- 값은 도메인이 아니라 확장에 딸린 것이다 (예. 같은 키/값 쌍일 경우 확장의 모든 스크립트에서 사용할 수 있다).
- 저장된 값은 그저 문자열이 아니라 JSON-화가능 값이다. 배열과 객체도 된다. 단 포함된 값도 JSON으로 나타낼 수 있어야 하므로 DOM의 노드는 안된다. 값을 저장하기 전에 JSON 문자열로 바꿀 필요는 없지만, 내부적으로 JSON으로 다뤄지므로 JSON화가능임은 요구된다.
- 같은 API 호출로 다수의 키/값 쌍을 다룰 수 있다.

이 API를 사용하려면 [manifest.json](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 파일에 "storage" [권한](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)이 포함돼야 한다.

각 웹확장은 자신만의 저장소를 따로 가진다. which can be split into different types of storage.

이 API는 {{domxref("Window.localStorage")}}와 비슷하지만, 확장 코드가 확장 관련 데이터를 저장하는데 `Window.localStorage`를 사용하지 말 것을 권장한다. 사적이 이유로 사용자가 방문 기록이나 데이터를 지우는 다양한 상황에서 확장이 localStorage API로 저장된 데이터는 지워지지만, [`storage.local`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) API로 저장한 데이터는 정확하게 유지된다.

## 자료형

- {{WebExtAPIRef("storage.StorageArea")}}
  - : 저장소 영역을 표현하는 객체.
- {{WebExtAPIRef("storage.StorageChange")}}
  - : 저장소 영역의 변화를 표현하는 객체.

## 속성

`storage`에는 저장소 영역의 가능한 형식을 나타내는 세가지 속성이 있다.

- {{WebExtAPIRef("storage.sync")}}
  - : `sync` 저장소 영역을 표현한다. `sync` 저장소의 항목은 브라우저에 동기되므로 사용자가 로그인한 모든 브라우저에서 사용할 수 있다. 기기가 달라도 된다.
- {{WebExtAPIRef("storage.local")}}
  - : `local` 저장소 영역을 표현한다. `local` 저장소의 항목은 확장이 설치된 기기에 한정된다.
- {{WebExtAPIRef("storage.managed")}}
  - : `managed` 저장소 영역을 표현한다. `managed` 저장소의 항목은 도메인 관리자가 설정하고 확장은 읽을 수만 있으므로 변경을 시도하면 에러가 발생한다.

## 이벤트

- {{WebExtAPIRef("storage.onChanged")}}
  - : 저장소 영역의 항목에 변화가 있으면 발생한다.

## 브라우저 호환성

{{Compat}}

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/storage/) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

### Edge incompatibilities

{{WebExtExamples("h2")}}

> **참고:** **Acknowledgements**This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/extensions/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
