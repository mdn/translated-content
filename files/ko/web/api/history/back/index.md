---
title: History.back()
slug: Web/API/History/back
tags:
  - API
  - HTML DOM
  - History
  - History API
  - Method
  - Reference
  - Web
translation_of: Web/API/History/back
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary"><strong><code>History.back()</code></strong> 메서드는 브라우저가 세션 기록의 바로 뒤 페이지로 이동하도록 지시합니다.</span> {{domxref("History.go", "history.go(-1)")}}와 같습니다. 이전 페이지가 없는 경우 아무것도 하지 않습니다.</p>

<p>이 메서드는 비동기적입니다. {{event("popstate")}} 이벤트 처리기를 통해 탐색 완료 시점을 알 수 있습니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">history.back()</pre>

<h2 id="예제">예제</h2>

<p>다음 예제는 클릭했을 때 뒤로 가는 버튼을 생성합니다.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;button id="go-back"&gt;뒤로 가기!&lt;/button&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">document.getElementById('go-back').addEventListener('click', () =&gt; {
  window.history.back();
});</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.History.back")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{domxref("History")}}</li>
</ul>
