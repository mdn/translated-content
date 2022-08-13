---
title: browsingData
slug: Mozilla/Add-ons/WebExtensions/API/browsingData
translation_of: Mozilla/Add-ons/WebExtensions/API/browsingData
---
<div>{{AddonSidebar}}</div>

<p>WebExtensions 을 통해 사용자가 브라우저를 사용하는 동안 축적된 데이터를 삭제할 수 있는 기능을 제공합니다.</p>

<p><code>browsingData</code> API는 브라우징 데이터를 다음과 같은 타입으로 구분합니다:</p>

<ul>
 <li>브라우저 캐시</li>
 <li>쿠키</li>
 <li>다운로드</li>
 <li>히스토리</li>
 <li>플러그인 데이터</li>
 <li>저장된 폼 데이터</li>
 <li>저장된 비밀번호saved passwords</li>
</ul>

<p>You can use the {{WebExtAPIRef("browsingData.remove()")}} function to remove any combination of these types. There are also dedicated functions to remove each particular type of data, such as {{WebExtAPIRef("browsingData.removePasswords()", "removePasswords()")}}, {{WebExtAPIRef("browsingData.removeHistory()", "removeHistory()")}} and so on.</p>

<p>All the <code>browsingData.remove[X]()</code> functions take a {{WebExtAPIRef("browsingData.RemovalOptions")}} object, which you can use to control two further aspects of data removal:</p>

<ul>
 <li>how far back in time to remove data</li>
 <li>whether to remove data only from normal web pages, or also from hosted web apps and add-ons. Note that this option is not yet supported in Firefox.</li>
</ul>

<p>Finally, this API gives you a {{WebExtAPIRef("browsingData.settings()")}} function that gives you the current value of the settings for the browser's built-in "Clear History" feature.</p>

<p>To use this API you must have the "browsingData" <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">API permission</a>.</p>

<h2 id="Types">Types</h2>

<dl>
 <dt>{{WebExtAPIRef("browsingData.DataTypeSet")}}</dt>
 <dd>Object used to specify the type of data to remove: for example, history, downloads, passwords, and so on.</dd>
 <dt>{{WebExtAPIRef("browsingData.RemovalOptions")}}</dt>
 <dd>Object used to specify how far back in time to remove data, and whether to remove data added through normal web browsing, by hosted apps, or by add-ons.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{WebExtAPIRef("browsingData.remove()")}}</dt>
 <dd>Removes browsing data for the data types specified.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeCache()")}}</dt>
 <dd>Clears the browser's cache.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeCookies()")}}</dt>
 <dd>Removes cookies.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeDownloads()")}}</dt>
 <dd>Removes the list of downloaded files.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeFormData()")}}</dt>
 <dd>Clears saved form data.</dd>
 <dt>{{WebExtAPIRef("browsingData.removeHistory()")}}</dt>
 <dd>Clears the browser's history.</dd>
 <dt>{{WebExtAPIRef("browsingData.removePasswords()")}}</dt>
 <dd>Clears saved passwords.</dd>
 <dt>{{WebExtAPIRef("browsingData.removePluginData()")}}</dt>
 <dd>Clears data associated with plugins.</dd>
 <dt>{{WebExtAPIRef("browsingData.settings()")}}</dt>
 <dd>Gets the current value of settings in the browser's "Clear History" feature.</dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("webextensions.api.browsingData", 2)}}</p>

<div class="hidden note">
<p>The "Chrome incompatibilities" section is included from <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities"> https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities</a> using the <a href="/en-US/docs/Template:WebExtChromeCompat">WebExtChromeCompat</a> macro.</p>

<p>If you need to update this content, edit <a href="https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities">https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Chrome_incompatibilities</a>, then shift-refresh this page to see your changes.</p>
</div>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/browsingData"><code>chrome.browsingData</code></a> API.</p>

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
