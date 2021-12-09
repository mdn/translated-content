---
title: event.cancelable
slug: Web/API/Event/cancelable
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/Event/cancelable
---
<p>{{ ApiRef() }}</p>
<h3 id=".E6.A6.82.E8.A6.81" name=".E6.A6.82.E8.A6.81">개요</h3>
<p>이벤트의 취소가 가능한지를 나타냅니다.</p>
<h3 id=".E6.A7.8B.E6.96.87" name=".E6.A7.8B.E6.96.87">구문</h3>
<pre class="eval"><em>bool</em> = <em>event</em>.cancelable;
</pre>
<p>이벤트에 규정한 액션을 취소할 수 있는가의 가능여부에 따라서 bool은 true 또는 false가 됩니다.</p>
<h3 id=".E6.B3.A8.E6.84.8F.E7.82.B9" name=".E6.B3.A8.E6.84.8F.E7.82.B9">주의</h3>
<p>이벤트취소의 가능여부는 이벤트의 초기화 시에 판별됩니다.</p>
<p>이벤트를 취소하기 위해 <a href="/ja/DOM/event.preventDefault" style="text-decoration: none; color: rgb(51, 102, 153) !important; cursor: default;" title="ja/DOM/event.preventDefault">preventDefault</a> 메소드를 호출하게 되며, 관련 이벤트에 규정된 액션을 실행하지 않도록 합니다.</p>
<h3 id=".E4.BB.95.E6.A7.98.E6.9B.B8" name=".E4.BB.95.E6.A7.98.E6.9B.B8">사양</h3>
<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event-canCancel">DOM Level 2 Events: cancelable</a></p>
<p> </p>
<p>{{ languages( { "en": "en/DOM/event.cancelable", "es": "es/DOM/event.cancelable", "pl": "pl/DOM/event.cancelable", "ja": "ja/DOM/event.cancelable" } ) }}</p>
