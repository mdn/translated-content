---
title: tabs.duplicate()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/duplicate
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/duplicate
---
<div>{{AddonSidebar()}}</div>

<p>ID で指定されたタブを複製します。</p>

<p>この関数は <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> を返す非同期関数です。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox brush:js">var duplicating = browser.tabs.duplicate(
  tabId              // integer
)
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt><code>tabId</code></dt>
 <dd><code>integer</code>. 複製するタブのIDを指定します。</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>A <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be fulfilled with a {{WebExtAPIRef('tabs.Tab')}} object containing details about the duplicated tab. The <code>Tab</code> object only contains <code>url</code>, <code>title</code> and <code>favIconUrl</code> if the extension has the <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions"><code>"tabs"</code> permission</a>. If any error occurs the promise will be rejected with an error message.</p>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.api.tabs.duplicate")}}</p>

<h2 id="例">例</h2>

<p>１つ目のタブを複製し、新しく作られたタブのIDをログに残す例：</p>

<pre class="brush: js">function onDuplicated(tabInfo) {
  console.log(tabInfo.id);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

// Duplicate the first tab in the array
function duplicateFirstTab(tabs) {console.log(tabs);
  if (tabs.length &gt; 0) {
    var duplicating = browser.tabs.duplicate(tabs[0].id);
    duplicating.then(onDuplicated, onError);
  }
}

// Query for all open tabs
var querying = browser.tabs.query({});
querying.then(duplicateFirstTab, onError);</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>謝辞</strong>

<p>この API は Chromiums の <a href="https://developer.chrome.com/extensions/tabs#method-duplicate"><code>chrome.tabs</code></a> APIに基づいています。 This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json"><code>tabs.json</code></a> in the Chromium code.</p>

<p>Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。</p>
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
