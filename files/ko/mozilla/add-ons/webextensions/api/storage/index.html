---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
tags:
  - 비표준
  - 웹확장
  - 인터페이스
  - 저장소
  - 참조
  - 확장
translation_of: Mozilla/Add-ons/WebExtensions/API/storage
---
<div>{{AddonSidebar}}</div>

<p>웹확장이 데이터를 저장하고, 확인하고, 저장된 항목의 변화를 감시할 수 있도록 해 준다.</p>

<p>저장소 시스템은 <a href="/en-US/docs/Web/API/Web_Storage_API">Web Storage API</a>에 기반하는데 약간의 차이가 있다:</p>

<ul>
 <li>비동기로 동작한다.</li>
 <li>값은 도메인이 아니라 확장에 딸린 것이다 (예. 같은 키/값 쌍일 경우 확장의 모든 스크립트에서 사용할 수 있다).</li>
 <li>저장된 값은 그저 문자열이 아니라 JSON-화가능 값이다. 배열과 객체도 된다. 단 포함된 값도 JSON으로 나타낼 수 있어야 하므로 DOM의 노드는 안된다. 값을 저장하기 전에 JSON 문자열로 바꿀 필요는 없지만, 내부적으로 JSON으로 다뤄지므로 JSON화가능임은 요구된다.</li>
 <li>같은 API 호출로 다수의 키/값 쌍을 다룰 수 있다.</li>
</ul>

<p>이 API를 사용하려면 <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> 파일에 "storage" <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">권한</a>이 포함돼야 한다.</p>

<p>각 웹확장은 자신만의 저장소를 따로 가진다. which can be split into different types of storage.</p>

<p>이 API는 {{domxref("Window.localStorage")}}와 비슷하지만, 확장 코드가 확장 관련 데이터를 저장하는데 <code>Window.localStorage</code>를 사용하지 말 것을 권장한다. 사적이 이유로 사용자가 방문 기록이나 데이터를 지우는 다양한 상황에서 확장이 localStorage API로 저장된 데이터는 지워지지만, <code><a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local">storage.local</a></code> API로 저장한 데이터는 정확하게 유지된다.</p>

<h2 id="자료형">자료형</h2>

<dl>
 <dt>{{WebExtAPIRef("storage.StorageArea")}}</dt>
 <dd>저장소 영역을 표현하는 객체.</dd>
 <dt>{{WebExtAPIRef("storage.StorageChange")}}</dt>
 <dd>저장소 영역의 변화를 표현하는 객체.</dd>
</dl>

<h2 id="속성">속성</h2>

<p><code>storage</code>에는 저장소 영역의 가능한 형식을 나타내는 세가지 속성이 있다.</p>

<dl>
 <dt>{{WebExtAPIRef("storage.sync")}}</dt>
 <dd><code>sync</code> 저장소 영역을 표현한다. <code>sync</code> 저장소의 항목은 브라우저에 동기되므로 사용자가 로그인한 모든 브라우저에서 사용할 수 있다. 기기가 달라도 된다.</dd>
 <dt>{{WebExtAPIRef("storage.local")}}</dt>
 <dd><code>local</code> 저장소 영역을 표현한다. <code>local</code> 저장소의 항목은 확장이 설치된 기기에 한정된다.</dd>
 <dt>{{WebExtAPIRef("storage.managed")}}</dt>
 <dd><code>managed</code> 저장소 영역을 표현한다. <code>managed</code> 저장소의 항목은 도메인 관리자가 설정하고 확장은 읽을 수만 있으므로 변경을 시도하면 에러가 발생한다.</dd>
</dl>

<h2 id="이벤트">이벤트</h2>

<dl>
 <dt>{{WebExtAPIRef("storage.onChanged")}}</dt>
 <dd>저장소 영역의 항목에 변화가 있으면 발생한다.</dd>
</dl>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("webextensions.api.storage")}}</p>

<div class="hidden note">
<p>The "Chrome incompatibilities" section is included from <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities"> https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities</a> using the <a href="/en-US/docs/Template:WebExtChromeCompat">WebExtChromeCompat</a> macro.</p>

<p>If you need to update this content, edit <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities">https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities</a>, then shift-refresh this page to see your changes.</p>
</div>

<h3 id="Edge_incompatibilities">Edge incompatibilities</h3>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/storage"><code>chrome.storage</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json"><code>storage.json</code></a> in the Chromium code.</p>

<p>Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.</p>
</div>

<div class="hidden">
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre>
</div>
