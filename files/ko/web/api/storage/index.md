---
title: Storage
slug: Web/API/Storage
tags:
  - API
  - Interface
  - Reference
  - Storage
  - Web Storage
translation_of: Web/API/Storage
---
<div>{{APIRef("Web Storage API")}}</div>

<p><a href="/ko/docs/Web/API/Web_Storage_API">Web Storage API</a>의 <strong><code>Storage</code></strong> 인터페이스는 특정 도메인을 위한 세션 저장소 또는 로컬 저장소의 접근 경로로서 데이터를 추가하고 수정하거나 삭제할 수 있습니다.</p>

<p>도메인의 세션 저장소를 수정해야 하면 {{domxref("Window.sessionStorage")}}에, 로컬 저장소를 수정해야 하면 {{domxref("Window.localStorage")}}에 접근하세요.</p>

<h2 id="속성">속성</h2>

<dl>
 <dt>{{domxref("Storage.length")}} {{readonlyInline}}</dt>
 <dd><code>Storage</code> 객체에 저장된 데이터 항목의 수를 반환합니다.</dd>
</dl>

<h2 id="메서드">메서드</h2>

<dl>
 <dt>{{domxref("Storage.key()")}}</dt>
 <dd>주어진 숫자 <code>n</code>에 대하여 저장소의 <code>n</code>번째 항목 키를 반환합니다.</dd>
</dl>

<dl>
 <dt>{{domxref("Storage.getItem()")}}</dt>
 <dd>주어진 키에 연결된 값을 반환합니다.</dd>
 <dt>{{domxref("Storage.setItem()")}}</dt>
 <dd>키가 저장소에 존재하는 경우 값을 재설정합니다. 존재하지 않으면 키와 값을 저장소에 추가합니다.</dd>
 <dt>{{domxref("Storage.removeItem()")}}</dt>
 <dd>주어진 키를 저장소에서 제거합니다.</dd>
 <dt>{{domxref("Storage.clear()")}}</dt>
 <dd>저장소의 모든 키를 저장소에서 제거합니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<p>아래 코드에서는 <code>localStorage</code>에 접근해 <code>Storage</code> 객체를 접근합니다. 우선 <code>!localStorage.getItem('bgcolor')</code>를 사용해 데이터가 저장소에 존재하는지 알아냅니다. 데이터가 있으면 {{domxref("Storage.getItem()")}}으로 회수한 후 <code>setStyles()</code>로 페이지 스타일을 바꿉니다. 데이터가 없으면 <code>populateStorage()</code> 함수를 호출하고, 그 안에서는 {{domxref("Storage.setItem()")}}을 통해 데이터를 설정합니다. 그 후에는 동일하게 <code>setStyles()</code>를 사용합니다.</p>

<pre class="brush: js notranslate">if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}</pre>

<div class="note">
<p><strong>참고</strong>: 실제 작동 예제는 저희의 <a href="https://github.com/mdn/web-storage-demo">Web Storage Demo</a>에서 볼 수 있습니다.</p>
</div>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Storage")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Web Storage API 사용하기</a></li>
 <li>{{domxref("Window.localStorage")}}</li>
 <li>{{domxref("Window.sessionStorage")}}</li>
 <li>{{domxref("CacheStorage")}}</li>
</ul>
