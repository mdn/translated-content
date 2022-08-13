---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
translation_of: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
---
<div>{{AddonSidebar()}}</div>

<p>저장소 영역에 하나 이상의 항목을 저장하거나, 있는 항목을 고친다.</p>

<p>이 API로 값을 저장하거나 고치면, {{WebExtAPIRef("storage.onChanged")}} 이벤트가 발생한다.</p>

<p>비동기 함수로 <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>를 돌려준다.</p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox brush:js">let settingItem = browser.storage.&lt;storageType&gt;.set(
  keys             // object
)
</pre>

<p><code>&lt;storageType&gt;</code>은 쓰기 가능한 저장소 중의 하나다 — {{WebExtAPIRef("storage.sync")}} 또는 {{WebExtAPIRef("storage.local")}}.</p>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>keys</code></dt>
 <dd>
 <p>저장소에 저장할 하나 이상의 키/값 쌍을 가진 객체다. 이미 있는 항목이라면 그 값은 고쳐진다.</p>

 <p>값은 <a href="/en-US/docs/Glossary/Primitive">기초 자료형</a> (숫자, 논리값, 그리고 문자열 같은) 또는 <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">배열</a></code>이다.</p>

 <p><code>Function</code>, <code>Date</code>, <code>RegExp</code>, <code>Set</code>, <code>Map</code>, <code>ArrayBuffer</code> 기타등등 다른 자료형의 저장은 일반적으로 안된다. 지원되지 않는 이런 자료형들은 빈 객체로 저장되거나 에러를 발생시킨다. 정확한 것은 브라우저에 달렸다.</p>
 </dd>
</dl>

<h3 id="반환값">반환값</h3>

<p>반환된 <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code>는 동작이 성공하면 아무런 인수없이 완료를 수행하고, 실패하면 에러 문장과 함께 거부를 수행한다.</p>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("webextensions.api.storage.StorageArea.set")}}</p>

<h2 id="예제">예제</h2>

<pre class="brush: js">function setItem() {
  console.log("OK");
}

function gotKitten(item) {
  console.log(`${item.kitten.name} has ${item.kitten.eyeCount} eyes`);
}

function gotMonster(item) {
  console.log(`${item.monster.name} has ${item.monster.eyeCount} eyes`);
}

function onError(error) {
  console.log(error)
}

// define 2 objects
var monster = {
  name: "Kraken",
  tentacles: true,
  eyeCount: 10
}

var kitten = {
  name: "Moggy",
  tentacles: false,
  eyeCount: 2
}

// store the objects
browser.storage.local.set({kitten, monster})
  .then(setItem, onError);

browser.storage.local.get("kitten")
  .then(gotKitten, onError);
browser.storage.local.get("monster")
  .then(gotMonster, onError);
</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/storage"><code>chrome.storage</code></a> API. This documentation is derived from <a href="https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json"><code>storage.json</code></a> in the Chromium code.</p>
</div>
