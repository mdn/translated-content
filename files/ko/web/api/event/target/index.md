---
title: Event.target
slug: Web/API/Event/target
tags:
  - 돔
  - 레퍼런스
  - 속성
  - 이벤트
  - 타겟
translation_of: Web/API/Event/target
---
<p>{{ApiRef("DOM")}}</p>

<p>{{domxref("Event")}} interface의 <code><strong>target</strong></code> 속성은 event가 전달한 객체에 대한 참조입니다. 이는 이벤트의 버블링 또는 캡처 단계에서 이벤트 핸들러를 호출하는 {{domxref("Event.currentTarget")}}와 다릅니다.</p>

<h2 id="Syntax">구문</h2>

<pre class="brush: js">const theTarget = someEvent.target</pre>

<h3 id="Value">Value</h3>

<p>{{domxref("EventTarget")}}</p>

<h2 id="Example">예제</h2>

<p><code>event.target</code> 속성을 사용하여 <strong>event delegation</strong>을 구현할 수 있습니다.</p>

<pre class="brush: js notranslate">// Make a list
var ul = document.createElement('ul');
document.body.appendChild(ul);

var li1 = document.createElement('li');
var li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e){
  // e.target refers to the clicked &lt;li&gt; element
  // This is different than e.currentTarget which would refer to the parent &lt;ul&gt; in this context
  e.target.style.visibility = 'hidden';
}

// Attach the listener to the list
// It will fire when each &lt;li&gt; is clicked
ul.addEventListener('click', hide, false);
</pre>

<h2 id="Specifications">명세</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName("DOM WHATWG", "#dom-event-target", "Event.target")}}</td>
      <td>{{Spec2("DOM WHATWG")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName("DOM4", "#dom-event-target", "Event.target")}}</td>
      <td>{{Spec2("DOM4")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{SpecName("DOM2 Events", "#Events-Event-target", "Event.target")}}</td>
      <td>{{Spec2("DOM2 Events")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("api.Event.target")}}</p>

<h3 id="Compatibility_notes">호환성 참고</h3>

<p>IE 6–8에서는 이벤트 모델이 다릅니다. 이벤트 리스너는 비표준 
  {{domxref('EventTarget.attachEvent()')}} 메서드로 연결됩니다.</p>

<p>이 모델에서 이벤트 객체는 {{domxref('Event.srcElement')}} 속성 
  (<code>target</code> 속성 대신)을 가지며 <code>Event.target</code>과 
  동일한 의미를 갖습니다.</p>

<pre class="brush: js">function hide(evt) {
  // Support IE6-8
  var target = evt.target || evt.srcElement;
  target.style.visibility = 'hidden';
}
</pre>

<h2 id="See_also">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Event/Comparison_of_Event_Targets">Comparison of Event Targets</a></li>
</ul>
