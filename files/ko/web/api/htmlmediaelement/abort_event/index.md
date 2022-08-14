---
title: abort
slug: Web/API/HTMLMediaElement/abort_event
tags:
  - DOM
  - Event
  - Reference
  - 레퍼런스
  - 이벤트
translation_of: Web/API/HTMLMediaElement/abort_event
translation_of_original: Web/Events/abort
original_slug: Web/Events/abort
---
<p><strong><code>abort</code></strong> 이벤트는 리소스의 로딩이 중단되었을 때, 발생합니다.</p>

<h2 id="개요">개요</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">스펙</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/DOM-Level-3-Events/#event-type-abort">DOM L3</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">인터페이스</dt>
 <dd style="margin: 0 0 0 120px;">유저 인터페이스에서 발생하면 UIEvent, 그렇지 않으면 Event.</dd>
 <dt style="float: left; text-align: right; width: 120px;">버블</dt>
 <dd style="margin: 0 0 0 120px;">안됨</dd>
 <dt style="float: left; text-align: right; width: 120px;">취소 가능</dt>
 <dd style="margin: 0 0 0 120px;">안됨</dd>
 <dt style="float: left; text-align: right; width: 120px;">타겟</dt>
 <dd style="margin: 0 0 0 120px;">Element</dd>
 <dt style="float: left; text-align: right; width: 120px;">디폴트 액션</dt>
 <dd style="margin: 0 0 0 120px;">없음</dd>
</dl>

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
   <td><a href="/en-US/docs/Web/API/EventTarget" title="EventTarget is an interface implemented by objects that can receive events and may have listeners for them."><code>EventTarget</code></a></td>
   <td>이벤트 타겟 (DOM tree의 최상위 타겟).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a></td>
   <td>이벤트의 타입</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a></td>
   <td>이벤트가 버블링 되는지 안되는지</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a></td>
   <td>이벤트가 취소 가능한지 아닌지</td>
  </tr>
  <tr>
   <td><code>view</code> {{readonlyInline}}</td>
   <td><a class="new" href="/en-US/docs/Web/API/WindowProxy" rel="nofollow" title="The documentation about this has not yet been written; please consider contributing!"><code>WindowProxy</code></a></td>
   <td><a href="/en-US/docs/Web/API/Document/defaultView" title="In browsers, document.defaultView returns the window object associated with a document, or null if none is available."><code>document.defaultView</code></a> (document의 <code>window</code> )</td>
  </tr>
  <tr>
   <td><code>detail</code> {{readonlyInline}}</td>
   <td><code>long</code> (<code>float</code>)</td>
   <td>0.</td>
  </tr>
 </tbody>
</table>
