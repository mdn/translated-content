---
title: 'Window: unload 이벤트'
slug: Web/API/Window/unload_event
tags:
  - Event
  - Reference
  - Window
  - 이벤트
translation_of: Web/API/Window/unload_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>unload</code></strong> 이벤트는 문서나 하위 리소스가 언로딩 중일 때 발생합니다.</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">확산</th>
   <td>아니오</td>
  </tr>
  <tr>
   <th scope="row">취소 가능</th>
   <td>아니오</td>
  </tr>
  <tr>
   <th scope="row">인터페이스</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">이벤트 처리기 속성</th>
   <td>{{domxref("WindowEventHandlers/onunload", "onunload")}}</td>
  </tr>
 </tbody>
</table>

<p><code>unload</code>는 다음 이벤트 이후 발생합니다.</p>

<ul>
 <li>{{domxref("Window/beforeunload_event", "beforeunload")}} (취소 가능한 이벤트)</li>
 <li>{{domxref("Window/pagehide_event", "pagehide")}}</li>
</ul>

<p><code>unload</code> 시점의 문서는 다음과 같은 상태입니다.</p>

<ul>
 <li>이미지, IFrame 등 모든 리소스는 여전히 존재합니다.</li>
 <li>최종 사용자는 아무것도 볼 수 없습니다.</li>
 <li>UI 상호작용은 아무 효과도 없습니다. ({{domxref("window.open()")}}, {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, 등등)</li>
 <li>오류가 발생해도 언로딩 절차는 중단되지 않습니다.</li>
</ul>

<p>참고로 <code>unload</code> 이벤트 역시 문서 트리의 순서를 따라갑니다. 즉 부모 프레임의 <code>unload</code>가 자식 프레임의 <code>unload</code> <strong>이전에</strong> 발생합니다. 아래 예제를 확인하세요</p>

<h2 id="예제">예제</h2>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Parent Frame&lt;/title&gt;
    &lt;script&gt;
      window.addEventListener('beforeunload', function(event) {
        console.log('I am the 1st one.');
      });
      window.addEventListener('unload', function(event) {
        console.log('I am the 3rd one.');
      });
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;iframe src="child-frame.html"&gt;&lt;/iframe&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>아래는 <code>child-frame.html</code>의 내용입니다.</p>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Child Frame&lt;/title&gt;
    &lt;script&gt;
      window.addEventListener('beforeunload', function(event) {
        console.log('I am the 2nd one.');
      });
      window.addEventListener('unload', function(event) {
        console.log('I am the 4th and last one…');
      });
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
      ☻
  &lt;/body&gt;
&lt;/html&gt;</pre>

<p>부모 프레임이 언로딩 될 때, <code>console.log()</code> 메시지를 통해 순서를 확인할 수 있습니다.</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Window.unload_event")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>관련 이벤트: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}</li>
 <li><a href="https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents">Unloading Documents — unload a document</a></li>
</ul>
