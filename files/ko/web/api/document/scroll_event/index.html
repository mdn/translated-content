---
title: scroll
slug: Web/API/Document/scroll_event
tags:
  - DOM
  - Event
  - Event Handler
  - Reference
  - 레퍼런스
  - 이벤트
  - 이벤트핸들링
translation_of: Web/API/Document/scroll_event
---
<p>document view 나 element가 스크롤 될 때, <strong><code>scroll</code></strong>  이벤트가 발생합니다.</p>

<h2 id="개요">개요</h2>

<table class="properties">
 <thead>
 </thead>
 <tbody>
  <tr>
   <th>인터페이스</th>
   <td>{{domxref("UIEvent")}}</td>
  </tr>
  <tr>
   <th>버블</th>
   <td>element에는 없지만, document에서 실행될 때 버블링이 발생합니다.</td>
  </tr>
  <tr>
   <th>취소가능여부</th>
   <td>불가</td>
  </tr>
  <tr>
   <th>타겟</th>
   <td>DefaultView, {{domxref("Document")}}, {{domxref("Element")}}</td>
  </tr>
  <tr>
   <th>기본 액션</th>
   <td>없음</td>
  </tr>
 </tbody>
</table>

<h2 id="속성">속성</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">속성</th>
   <th scope="col">타입</th>
   <th scope="col">설명</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>이벤트 대상 (DOM 트리의 최상위 타겟)</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>이벤트의 타입</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{domxref("Boolean")}}</td>
   <td>이벤트가 버블이 되는지</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{domxref("Boolean")}}</td>
   <td>이벤트 취소가 가능한지</td>
  </tr>
  <tr>
   <td><code>view</code> {{readonlyInline}}</td>
   <td>{{domxref("WindowProxy")}}</td>
   <td>{{domxref("Document.defaultView")}} (document의 <code>window</code>)</td>
  </tr>
  <tr>
   <td><code>detail</code> {{readonlyInline}}</td>
   <td><code>long</code> (<code>float</code>)</td>
   <td><code>0</code>.</td>
  </tr>
 </tbody>
</table>

<h2 id="예제">예제</h2>

<h3 id="스크롤_이벤트의_조절">스크롤 이벤트의 조절</h3>

<p><code>scroll </code>이벤트가 빠른 속도로 실행될 수 있기 때문에, 이벤트 핸들러는 DOM 수정과 같이 느린 작업을 실행하지 말아야 합니다. 대신, 다음을 사용하여 이벤트를 제한하는 것을 권장합니다.<br>
 {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{domxref("WindowOrWorkerGlobalScope.setTimeout()", "setTimeout()")}}, 혹은, {{domxref("CustomEvent")}}</p>

<p>그러나 입력 이벤트와 애니메이션 프레임은 거의 동일한 속도로 실행되므로 아래 최적화는 종종 불필요합니다. 다음은 <code>requestAnimationFrame</code>에 대한 <code>scroll</code>이벤트를 최적화하는 예제입니다.</p>

<pre class="brush: js">// 참조: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // scroll 위치에 대한 작업을 하세요
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});</pre>

<h3 id="추가_예제">추가 예제</h3>

<p>더 보려면, {{Event("resize")}} 이벤트 페이지에 비슷한 예제가 있습니다.</p>

<h2 id="사양">사양</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-3-Events/#event-type-scroll">DOM L3</a></li>
 <li><a href="http://www.w3.org/TR/cssom-view/#scrolling-0">CSSOM View</a></li>
</ul>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<h3 id="iOS_UIWebView">iOS UIWebView</h3>

<p>iOS UIWebViews에서, 스크롤 중에는 <code>scroll</code> 발생하지 않습니다. 스크롤이 끝났을 때, 발생됩니다. <a href="https://github.com/twbs/bootstrap/issues/16202">Bootstrap issue #16202</a>를 참고하세요. 사파리와 WKWebViews에서는 이 문제가 발생하지 않습니다.</p>

<h2 id="같이보기">같이보기</h2>

<ul>
 <li>{{domxref("GlobalEventHandlers.onscroll")}}</li>
</ul>
