---
title: popstate
slug: Web/API/Window/popstate_event
tags:
  - API
  - Event
  - History
  - History API
  - Reference
translation_of: Web/API/Window/popstate_event
---
<div>{{APIRef}}</div>

<p>{{domxref("Window")}} 인터페이스의 <strong><code>popstate</code></strong> 이벤트는 사용자의 세션 기록 탐색으로 인해 현재 활성화된 기록 항목이 바뀔 때 발생합니다. 만약 활성화된 엔트리가 history.pushState() 메서드나 history.replaceState() 메서드에 의해 생성되면, popstate 이벤트의 state 속성은 히스토리 엔트리 state 객체의 복사본을 갖게 됩니다.</p>

<p>history.pushState() 또는 history.replaceState()는 popstate 이벤트를 발생시키지 않는 것에 유의합니다.popstate 이벤트는 브라우저의 백 버튼이나 (history.back() 호출) 등을 통해서만 발생된다. </p>

<p>브라우저는 popstate 이벤트를 페이지 로딩시에 다르게 처리합니다. Chrome(v34 이전버전) 와 Safari는 popstate 이벤트를 페이지 로딩시에 발생시킵니다. 하지만 Firefox 는 그렇지 않습니다.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("PopStateEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{domxref("WindowEventHandlers.onpopstate", "onpopstate")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Window.popstate_event")}}</p>

<h2 id="Example">Example</h2>

<p>예시를 보자, 다음의 코드를 실행하는 <code><var>http://example.com/example.html </var></code>의 한 페이지는 주석에 쓰여있는 경고들을 발생시킨다.</p>

<pre class="brush: js">window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Logs "location: http://example.com/example.html, state: null
history.go(2);  // Logs "location: http://example.com/example.html?page=3, state: {"page":3}
</pre>

<p>원래의 히스토리 엔트리인 (<code><var>http://example.com/example.html</var></code>) 에 이와 연관된 state 객체가 없더라도, 두번째 history.back() API 호출 후 엔트리를 활성화 시키면 popstate 이벤트는 여전히 발생된다.</p>

<h2 id="See_Also">See Also</h2>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API">Manipulating the browser history (the History API) </a></li>
</ul>
