---
title: Event.cancelBubble
slug: Web/API/Event/cancelBubble
translation_of: Web/API/Event/cancelBubble
---
<p>{{APIRef("DOM Events")}}</p>

<p><strong>Event.cancelBubble</strong> 속성은 {{domxref("Event.stopPropagation()")}}의 별칭입니다. 이벤트 핸들러에서 반환되기 전에 값을 true로 설정하면 이벤트가 전파되지 않습니다.</p>

<p>Syntax</p>

<pre class="syntaxbox">event.cancelBubble = <em>bool;</em>
<em>var bool</em> = event.cancelBubble;
</pre>

<h2 id="Example">Example</h2>

<pre>elem.onclick = function(e) {
 // do cool things here
  e.cancelBubble = true;
}</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-event-cancelbubble', 'cancellBubble')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.Event.cancelBubble")}}</p>
