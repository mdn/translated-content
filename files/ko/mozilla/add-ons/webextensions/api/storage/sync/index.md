---
title: storage.sync
slug: Mozilla/Add-ons/WebExtensions/API/storage/sync
---

{{AddonSidebar()}}

`sync` 저장 공간을 의미합니다. `sync` 저장 공간에 있는 데이터는 브라우저 사이에서 동기화되며 서로 다른 기기 간에 사용자가 브라우저에 로그인 한 경우 언제든지 접근 가능합니다.

Firefox에서 `sync.storage` 는 고유한 부가기능 ID에 의존성을 갖고 동작합니다. `sync.storage`, 를 사용하신다면 [`어플리케이션`](/ko/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) manifest.json 파일에 있는 키를 통해 여러분의 부가기능에 고유한 ID를 부여해야 합니다.

이 API는 주로 여러분의 부가기능에 사용자 설정 정보를 저장하고 서로 다른 프로필 간에 설정을 동기화 할 수 있도록 사용됩니다. 이 API는 100KB까지 저장할 수 있습니다. 이보다 더 큰 데이터를 저장하려고 하는 경우, API 요청은 특정한 에러 메시지를 반환할 것입니다. 이 API는 아쉽게도 현재까지 특정한 성능을 보장하진 않습니다.

## 메소드

`sync` 객체는 {{WebExtAPIRef("storage.StorageArea")}} 타입에 정의 된 메소드를 제공합니다:

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : 저장소 영역에서 하나 이상의 항목을 가져온다.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : 저장소의 사용된 크기를 바이트단위로 얻는다.
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : 저장소에 하나 이상의 항목을 설정한다. 이미 있는 항목은 교체된다.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : 저장소에서 하나 이상의 값을 지운다.
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : 저장소의 모든 항목을 지워서 비운다.

## Browser 호환성

{{Compat}}

{{WebExtExamples}}

> **참고:** **Acknowledgements**This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/extensions/storage#property-sync) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
