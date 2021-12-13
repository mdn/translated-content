---
title: EventTarget
slug: Web/API/EventTarget
tags:
  - API
  - DOM
  - DOM Events
  - EventTarget
  - Interface
  - Reference
translation_of: Web/API/EventTarget
---
<div>{{ApiRef("DOM Events")}}</div>

<p><strong><code>EventTarget</code></strong>은 이벤트를 받을 수 있으며, 이벤트에 대한 수신기(listener)를 가질 수 있는 객체가 구현하는 DOM 인터페이스입니다.</p>

<p>{{domxref("Element")}}, {{domxref("document")}} 및 {{domxref("window")}}가 가장 흔한 이벤트 대상이지만, 다른 객체, 예컨대 {{domxref("XMLHttpRequest")}}, {{domxref("AudioNode")}}, {{domxref("AudioContext")}} 등 역시 이벤트 대상이 될 수 있습니다.</p>

<p>많은 이벤트 대상(요소, 문서, 창, ...)은 <code>on<em>event</em></code> 속성과 특성을 사용한 <a href="/ko/docs/Web/Guide/Events/Event_handlers">이벤트 처리기</a> 등록도 지원합니다.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="생성자">생성자</h2>

<dl>
 <dt>{{domxref("EventTarget.EventTarget()", "EventTarget()")}}</dt>
 <dd>새로운 <code>EventTarget</code> 객체 인스턴스를 생성합니다.</dd>
</dl>

<h2 id="메서드">메서드</h2>

<dl>
 <dt>{{domxref("EventTarget.addEventListener()")}}</dt>
 <dd><code>EventTarget</code>에 특정 이벤트 유형의 이벤트 처리기를 등록합니다.</dd>
 <dt>{{domxref("EventTarget.removeEventListener()")}}</dt>
 <dd><code>EventTarget</code>에서 주어진 이벤트 수신기를 제거합니다.</dd>
 <dt>{{domxref("EventTarget.dispatchEvent()")}}</dt>
 <dd><code>EventTarget</code>에 이벤트를 디스패치 합니다.</dd>
</dl>

<div class="hidden">
<h3 id="Mozilla_chrome_코드_용_추가_메서드">Mozilla chrome 코드 용 추가 메서드</h3>

<p>on* property를 구현하는 JS로 구현된 이벤트 대상에 쓰이는 Mozilla 확장기능(extension). <a href="/ko/docs/Mozilla/WebIDL_bindings">WebIDL 바인딩</a>도 참조.</p>

<ul>
 <li>void <strong>setEventHandler</strong>(DOMString type, EventHandler handler) {{non-standard_inline}}</li>
 <li>EventHandler <strong>getEventHandler</strong>(DOMString type) {{non-standard_inline}}</li>
</ul>
</div>

<h2 id="예제">예제</h2>

<h3 id="간단한_EventTarget_구현">간단한 EventTarget 구현</h3>

<pre class="brush: js">var EventTarget = function() {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;
EventTarget.prototype.addEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function(type, callback) {
  if (!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for (var i = 0, l = stack.length; i &lt; l; i++) {
    if (stack[i] === callback){
      stack.splice(i, 1);
      return;
    }
  }
};

EventTarget.prototype.dispatchEvent = function(event) {
  if (!(event.type in this.listeners)) {
    return true;
  }
  var stack = this.listeners[event.type].slice();

  for (var i = 0, l = stack.length; i &lt; l; i++) {
    stack[i].call(this, event);
  }
  return !event.defaultPrevented;
};
</pre>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">명세</th>
   <th scope="col">상태</th>
   <th scope="col">설명</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#interface-eventtarget', 'EventTarget')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>변화 없음.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', 'DOM3-Events.html#interface-EventTarget', 'EventTarget')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>매개변수 약간이 이제 선택사항(<code>listener</code>) 또는 <code>null</code> 값을 받아들임(<code>useCapture</code>).</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Events', 'events.html#Events-EventTarget', 'EventTarget')}}</td>
   <td>{{Spec2('DOM2 Events')}}</td>
   <td>초기 정의.</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("api.EventTarget")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/Reference/Events">Event 참고서</a> - 웹 플랫폼에서 사용할 수 있는 이벤트 목록</li>
 <li><a href="/ko/docs/Web/Guide/Events">Event 개발자 안내서</a></li>
 <li>{{domxref("Event")}} 인터페이스</li>
</ul>
