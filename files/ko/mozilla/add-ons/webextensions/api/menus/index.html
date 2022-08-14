---
title: contextMenus
slug: Mozilla/Add-ons/WebExtensions/API/menus
translation_of: Mozilla/Add-ons/WebExtensions/API/menus
original_slug: Mozilla/Add-ons/WebExtensions/API/contextMenus
---
<div>{{AddonSidebar}}</div>

<p>브라우저의 메뉴 시스템에 항목을 추가한다.</p>

<p>이 API는 크롬의 <a href="https://developer.chrome.com/extensions/contextMenus">"contextMenus"</a> API를 모델로 했다. 크롬 확장앱이 브라우저의 콘텍스트 메뉴에 항목을 추가하는 API인데, 파이어폭스의 <code>browser.menus</code> API는 여기에 몇 가지 특징을 더했다.</p>

<p>파이어폭스 55 이전에 이 API의 원래 이름은 <code>contextMenus</code>였고, 지금도 이 이름은 별명으로 유지되므로 다른 브라우저에서도 동작하는 코드를 작성한다면 <code>contextMenus</code>를 사용할 수 있다.</p>

<p>이 API를 사용하려면 '<code>menus</code>'  <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">권한</a>이 필요하다. <code>menus</code> 대신에 <code>contextMenus</code>를 사용해도 된다. <code>contextMenus</code>를 사용했으면 API도 <code>browser.contextMenus</code>를 써야 한다.</p>

<p>콘텐트 스크립트에서는 <code><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement">menus.getTargetElement()</a></code>만 사용할 수 있다.</p>

<h2 id="메뉴_항목_만들기">메뉴 항목 만들기</h2>

<p>메뉴 항목을 만들려면 {{WebExtAPIRef("contextMenus.create()")}} 메소드를 호출한다. 인수로 항목의 ID, 종류, 어떤 콘텍스트일 때 표시되는지 등이 포함된 객체를 전달한다.</p>

<p>항목의 클릭을 처리하려면 {{WebExtAPIRef("contextMenus.onClicked")}} 이벤트에 리스너를 추가한다. 리스너는 상세한 이벤트 정보를 담고 있는{{WebExtAPIRef("contextMenus.OnClickData")}} 객체를 받는다.</p>

<p>콘텍스트 메뉴는 네 종류다. <code>create()</code>에 주어지는 <code>type</code> 속성으로 지정한다:</p>

<ul>
 <li>"normal": 그냥 라벨만 표시된다.</li>
 <li>"checkbox": 라벨 옆에 추가로 체크표시가 있어 두가지 상태를 표현하는 메뉴 항목이다. 클릭할 때마다 라벨표시가 토글된다. 리스너는 두가지 속성을 추가로 받게 된다: "checked"는 현재 체크 상태를 가리키고, "wasChecked"는 클릭 이벤트 전의 체크 상태를 가리킨다.</li>
 <li>"radio": 여러 선택지 중의 하나라는 것을 표현하는 메뉴 항목이다. 라벨 옆에 체크표시가 있고, "checked"와 "wasChecked" 속성이 있다는 것은 checkbox와 같다. 다른 점은 radio 항목을 하나 이상 만들어 그룹이 되면, 오직 클릭하는 하나만 선택이 된다는 것이다.</li>
 <li>"separator": 항목을 그룹짓는 구분선이다.</li>
</ul>

<p>메뉴 항목을 하나 이상 만들면 그 항목들은 서버메뉴로 표시되고, 상위메뉴의 라벨은 확장의 이름이 된다. 예를 들어, "Menu demo"라는 확장이 있고, 그것이 두 개의 콘텍스트 메뉴 항목을 추가했다면:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15431/menus-1.png" style="display: block; height: 406px; margin-left: auto; margin-right: auto; width: 500px;"></p>

<h2 id="아이콘">아이콘</h2>

<p><a href="/en-US/Add-ons/WebExtensions/manifest.json/icons">"icons" manifest 키</a>로 확장이 아이콘을 가졌으면,  콘텍스트 메뉴 항목은 라벨 옆에 아이콘을 함께 표시한다. 보통의 경우 16x16 픽셀이 표시되고, 고해상도이면 32x32 픽셀의 아이콘이 표시된다.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15433/menus-2.png" style="display: block; height: 409px; margin-left: auto; margin-right: auto; width: 500px;"></p>

<p>서버메뉴에 대해서만 {{WebExtAPIRef("menus.create()")}}에 <code>icons</code> 옵션을 전달해서 아이콘을 지정할 수 있다.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15435/menus-3.png" style="display: block; height: 396px; margin-left: auto; margin-right: auto; width: 500px;"></p>

<h2 id="예제">예제</h2>

<p>아래 콘텍스트 메뉴에는 4개 항목이 있다: 보통 항목 하나, 위-아래가 구분선인 두 개의 라디오 항목, 그리고 체크박스 항목 하나다. 라디오 항목에는 따로 아이콘이 지정되었다.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15437/menus-4.png" style="display: block; height: 790px; margin-left: auto; margin-right: auto; width: 500px;">이 서버메뉴는 아래 코드로 만들 수 있다:</p>

<pre class="brush: js">browser.menus.create({
  id: "remove-me",
  title: browser.i18n.getMessage("menuItemRemoveMe"),
  contexts: ["all"]
}, onCreated);

browser.menus.create({
  id: "separator-1",
  type: "separator",
  contexts: ["all"]
}, onCreated);

browser.menus.create({
  id: "greenify",
  type: "radio",
  title: browser.i18n.getMessage("menuItemGreenify"),
  contexts: ["all"],
  checked: true,
  icons: {
    "16": "icons/paint-green-16.png",
    "32": "icons/paint-green-32.png"
  }
}, onCreated);

browser.menus.create({
  id: "bluify",
  type: "radio",
  title: browser.i18n.getMessage("menuItemBluify"),
  contexts: ["all"],
  checked: false,
  icons: {
    "16": "icons/paint-blue-16.png",
    "32": "icons/paint-blue-32.png"
  }
}, onCreated);

browser.menus.create({
  id: "separator-2",
  type: "separator",
  contexts: ["all"]
}, onCreated);

var checkedState = true;

browser.menus.create({
  id: "check-uncheck",
  type: "checkbox",
  title: browser.i18n.getMessage("menuItemUncheckMe"),
  contexts: ["all"],
  checked: checkedState
}, onCreated);</pre>

<h2 id="타입">타입</h2>

<dl>
 <dt>{{WebExtAPIRef("contextMenus.ContextType")}}</dt>
 <dd>메뉴가 표시되게 하는 여러 콘텍스트. 가능한 값은: "all", "audio", "browser_action", "editable", "frame", "image", "link", "page", "page_action", "password", "selection", "tab", "video".</dd>
 <dt>{{WebExtAPIRef("contextMenus.ItemType")}}</dt>
 <dd>메뉴 항목의 종류: "normal", "checkbox", "radio", "separator".</dd>
 <dt>{{WebExtAPIRef("contextMenus.OnClickData")}}</dt>
 <dd>메뉴 항목이 클릭됐을 때 보내지는 정보.</dd>
</dl>

<h2 id="속성">속성</h2>

<dl>
 <dt>{{WebExtAPIRef("contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT")}}</dt>
 <dd>최상위에 추가할 수 있는 ContextType이 "browser_action"이나 "page_action"인 메뉴 항목의 최대 수량.</dd>
</dl>

<h2 id="함수">함수</h2>

<dl>
 <dt>{{WebExtAPIRef("contextMenus.create()")}}</dt>
 <dd>새 콘텍스트 메뉴 항목을 만든다.</dd>
 <dt>{{WebExtAPIRef("contextMenus.update()")}}</dt>
 <dd>전에 만든 콘텍스트 메뉴 항목을 갱신한다.</dd>
 <dt>{{WebExtAPIRef("contextMenus.remove()")}}</dt>
 <dd>콘텍스트 메뉴 항목을 지운다.</dd>
 <dt>{{WebExtAPIRef("contextMenus.removeAll()")}}</dt>
 <dd>확자앱에 추가된 모든 콘텍스트 메뉴 항목을 지운다.</dd>
</dl>

<h2 id="이벤트">이벤트</h2>

<dl>
 <dt>{{WebExtAPIRef("contextMenus.onClicked")}}</dt>
 <dd>콘텍스트 메뉴 항목이 클릭하면 발생한다.</dd>
</dl>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{ Compat("webextensions.api.menus", 1, "true") }}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/contextMenus"><code>chrome.contextMenus</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json"><code>context_menus.json</code></a> in the Chromium code.</p>
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
