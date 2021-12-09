---
title: Event.stopImmediatePropagation()
slug: Web/API/Event/stopImmediatePropagation
translation_of: Web/API/Event/stopImmediatePropagation
---
<div>{{APIRef("DOM")}}</div>

<p><code>event.stopImmediatePropagation()</code> 는 같은 이벤트에서 다른 리스너들이 불려지는 것을 막습니다. </p>

<h2 id="문법">문법</h2>

<pre class="eval"><em>event</em>.stopImmediatePropagation();
</pre>

<h2 id="주석">주석</h2>

<p>만약  다양한 리스너들이 같은 이벤트타입을 위한 같은 요소에 소속되어 있다면 그들은 추가 된 순서대로 불리게 될 것입니다. 만약 <code>event.stopImmediatePropagation()을 호출하면, 남아있는 리스너들이 불리는 일이 없을 것입니다.</code></p>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">명세</th>
   <th scope="col">상태</th>
   <th scope="col">설명</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-event-stopimmediatepropagation', 'Event.stopImmediatePropagation()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('DOM4', '#dom-event-stopimmediatepropagation', 'Event.stopImmediatePropagation()')}}</td>
   <td>{{Spec2('DOM4')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Event.stopImmediatePropagation")}}</p>
