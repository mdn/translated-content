---
title: Window.localStorage
slug: Web/API/Window/localStorage
tags:
  - API
  - Property
  - Read-only
  - Reference
  - Storage
  - Web Storage
  - Window
  - WindowLocalStorage
  - 로컬스토리지
translation_of: Web/API/Window/localStorage
---
<p>{{APIRef("Web Storage API")}}</p>

<p><span class="seoSummary"><code><strong>localStorage</strong></code><strong> </strong>읽기 전용 속성을 사용하면 {{domxref("Document")}} {{glossary("origin", "출처")}}의 {{domxref("Storage")}} 객체에 접근할 수 있습니다. 저장한 데이터는 브라우저 세션 간에 공유됩니다.</span> <code>localStorage</code>는 {{domxref("Window.sessionStorage", "sessionStorage")}}와 비슷하지만, <code>localStorage</code>의 데이터는 만료되지 않고 <code>sessionStorage</code>의 데이터는 페이지 세션이 끝날 때, 즉 페이지를 닫을 때 사라지는 점이 다릅니다. ("사생활 보호 모드" 중 생성한 <code>localStorage</code> 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워집니다.)</p>

<p><code>localStorage</code>에 저장한 자료는 <strong>페이지 프로토콜별로 구분</strong>합니다. 특히 HTTP(<a href="http://example.com">http://example.com</a>)로 방문한 페이지에서 저장한 데이터는 같은 페이지의 HTTPS(<a href="https://example.com">https://example.com</a>)와는 다른 <code>localStorage</code>에 저장됩니다.</p>

<p>키와 값은 <u>항상</u> 각 문자에 2바이트를 할당하는 UTF-16 {{domxref("DOMString")}}의 형태로 저장합니다. 객체와 마찬가지로 정수 키는 자동으로 문자열로 변환합니다.</p>

<h2 id="구문">구문</h2>

<pre class="notranslate"><em>myStorage</em> = <em>window</em>.localStorage;</pre>

<h3 id="값">값</h3>

<p>현재 {{glossary("origin", "출처")}}의 로컬 저장 공간에 접근할 수 있는 {{domxref("Storage")}} 객체.</p>

<h3 id="예외">예외</h3>

<dl>
 <dt><code>SecurityError</code></dt>
 <dd>요청이 정책의 결정을 위반했거나, 출처가 <a href="/ko/docs/Web/Security/Same-origin_policy#출처의_정의">유효한 스킴/호스트/포트 튜플</a>이 아닌 경우. 유효하지 않은 튜플은 출처가 <code>file:</code>이나 <code>data:</code> 스킴을 사용했을 때 발생할 수 있습니다. 예외의 예를 들자면 사용자가 특정 출처의 지속성 데이터를 거부하도록 브라우저를 설정하는 경우가 있습니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<p>아래 코드는 현재 도메인의 로컬 {{domxref("Storage")}} 객체에 접근한 후, {{domxref("Storage.setItem()")}}을 사용해 항목 하나를 추가합니다.</p>

<pre class="brush: js notranslate">localStorage.setItem('myCat', 'Tom');
</pre>

<p>위에서 추가한 <code>localStorage</code> 항목을 읽는 법은 다음과 같습니다.</p>

<pre class="brush: js notranslate">const cat = localStorage.getItem('myCat');</pre>

<p>그리고 제거는 아래와 같습니다.</p>

<pre class="brush: js notranslate">localStorage.removeItem('myCat');</pre>

<p><code>localStorage</code> 항목의 전체 제거 구문입니다.</p>

<pre class="brush: js notranslate">localStorage.clear();
</pre>

<div class="blockIndicator note">
<p>참고: <a href="/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Web Storage API 사용하기</a> 문서에서 전체 예제를 살펴보세요.</p>
</div>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Window.localStorage")}}</p>

<h2 id="함께_보기">함께 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Web Storage API 사용하기</a></li>
 <li><a href="/ko/docs/Web/API/Web_Storage_API/Local_storage">Local storage with Window.localStorage</a></li>
 <li>{{domxref("Window.sessionStorage")}}</li>
</ul>
