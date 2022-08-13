---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
translation_of: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
---
<div>{{AddonSidebar()}}</div>

<p>저장소에서 하나 이상의 항목을 가져온다.</p>

<p>비동기 함수로 <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>를 돌려준다.</p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox">let gettingItem = browser.storage.&lt;storageType&gt;.get(
  keys    // null, string, object or array of strings
)
</pre>

<p><code>&lt;storageType&gt;</code>는 읽기 가능한 저장소 중의 하나다 — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, 또는 {{WebExtAPIRef("storage.managed", "managed")}}.</p>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>keys</code></dt>
 <dd>저장소에서 가져올 항목을 지정하는 키 (문자열) 또는 키들 (문자열의 배열 또는 기본값이 주어진 객체). 빈 문자열, 객체, 또는 배열이 주어지면 빈 객체가 반환된다. null이나 undefined가 주어지면 전체 항목이 반환된다.</dd>
</dl>

<h3 id="반환값">반환값</h3>

<p>반환된 <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>는 저장소에서 찾은 모든 항목을 담은 객체를 인수로 완료를 수행한다. 실패하면 에러 문장으로 거부가 수행된다. managed 저장소가 설정되어 있지 않으면 <code>undefined</code>가 반환된다.</p>

<div class="warning">
<p>When used within a content script in Firefox versions prior to 52, the Promise returned by <code>browser.storage.local.get()</code> is fulfilled with an Array containing one Object. The Object in the Array contains the <code>keys</code> found in the storage area, as described above. The Promise is correctly fulfilled with an Object when used in the background context (background scripts, popups, options pages, etc.). When this API is used as <code>chrome.storage.local.get()</code>, it correctly passes an Object to the callback function.</p>
</div>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("webextensions.api.storage.StorageArea.get")}}</p>

<h2 id="예제">예제</h2>

<p>두 항목을 담고 있는 저장소를 가정한다:</p>

<pre class="brush: js">// storage contains two items,
// "kitten" and "monster"
browser.storage.local.set({
  kitten:  {name:"Mog", eats:"mice"},
  monster: {name:"Kraken", eats:"people"}
});</pre>

<p>promise에 대한 성공과 실패 핸들러를 정의한다:</p>

<pre class="brush: js">function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}</pre>

<p><code>keys</code> 인수없이 전체를 구한다:</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -&gt; Object { kitten: Object, monster: Object }</pre>

<p>빈 인수는 빈 객체를 반환한다:</p>

<pre class="brush: js">// with an empty array, retrieve nothing
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -&gt; Object { }</pre>

<p>이름을 인수로 하면 일치하는 항목을 담은 객체를 반환한다:</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -&gt; Object { kitten: Object }</pre>

<p>이름들을 인수로 하면 전체 일치 항목을 모두 담은 객체를 반환한다:</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get(["kitten", "monster", "grapefruit"]);
gettingItem.then(onGot, onError);

// -&gt; Object { kitten: Object, monster: Object } </pre>

<p>객체를 인수로 하면 주어진 객체의 키들을 이름으로 항목을 찾아서 돌려준다:</p>

<pre class="brush: js">let gettingItem = browser.storage.local.get({
  kitten: "no kitten",
  monster: "no monster",
  grapefruit: {
    name: "Grape Fruit",
    eats: "Water"
  }
});

// -&gt; Object { kitten: Object, monster: Object, grapefruit: Object }
</pre>

<p>{{WebExtExamples}}</p>

<h3 id="크롬_예제">크롬 예제</h3>

<p>크롬에서는 <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>가 아니라 콜백 형태로 해야 한다.</p>

<pre class="brush: js">chrome.storage.local.get("kitten", function(items){
  console.log(items.kitten);  // -&gt; {name:"Mog", eats:"mice"}
});</pre>

<p class="brush: js">또는 화살표 함수로 할 수 있다.</p>

<pre class="brush: js">chrome.storage.local.get("kitten", items=&gt;{
  console.log(items.kitten); // -&gt; {name:"Mog", eats:"mice"}
});</pre>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/storage"><code>chrome.storage</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json"><code>storage.json</code></a> in the Chromium code.</p>

<p>Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.</p>
</div>
