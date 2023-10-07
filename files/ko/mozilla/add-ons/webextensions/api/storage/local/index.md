---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
---

{{AddonSidebar()}}

`local` 저장소 영역을 표현한다. `local` 저장소의 항목은 확장이 설치된 기기에 제한된다.

브라우저는 local 저장소에 저장할 수 있는 데이터의 양을 제한한다:

- ["unlimitedStorage" 권한](/en-US/Add-ons/WebExtensions/manifest.json/permissions#Unlimited_storage)이 없으면 크롬은 데이터의 양을 5M로 제한한다.
- 파이어폭스는 버전 56부터 "unlimitedStorage" 권한을 요청할 수 있다. 아직은 저장 용량을 제한하지는 않지만, 앞으로 그렇게 할 것이므로 큰 용량의 저장할 의도라면 지금 "unlimitedStorage" 권한을 요청하는 것이 좋다.

확장이 제거되면, 그것과 연결된 local 저장소는 지워진다.

파이어폭스에서는 확장을 제거해도 local 저장소를 브라우저가 지우지 않도록 막을 수 있다. "about:config"에서 "keepUuidOnUninstall"와 "keepStorageOnUninstall" 두 브라우저 기본 설정을 `true`로 고치면 된다. 이 특징은 개발자가 확장을 테스트하는데 도움을 주려는 것이다. 확장 스스로 이 값들을 바꿀 수는 없다.

이 API는 {{domxref("Window.localStorage")}}와 비슷하지만, 확장 코드가 확장 관련 데이터를 저장하는데 `Window.localStorage`를 사용하지 말 것을 권장한다. 사적이 이유로 사용자가 방문 기록이나 데이터를 지우는 다양한 상황에서 확장이 localStorage API로 저장된 데이터는 지워지지만, [`storage.local`](/ko/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) API로 저장한 데이터는 정확하게 유지된다.

## 메소드

`local` 객체는 {{WebExtAPIRef("storage.StorageArea")}} 자료형에 정의된 메소드로 구현되었다:

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : 저장소 영역에서 하나 이상의 항목을 가져온다.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : 저장소의 사용된 크기를 바이트단위로 얻는다.
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : 저장소에 하나 이상의 항목을 설정한다. 이미 있는 항목은 교체된다. 값을 설정하면 {{WebExtAPIRef("storage.onChanged")}} 이벤트가 발생한다.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : 저장소에서 하나 이상의 값을 지운다.
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : 저장소의 모든 항목을 지워서 비운다.

## 브라우저 호환성

{{Compat}}

{{WebExtExamples}}

> **참고:** **Acknowledgements**This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/extensions/storage#property-local) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
