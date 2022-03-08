---
title: drag
slug: Web/API/Document/drag_event
tags:
  - API
  - DOM
  - Document
  - Drag
  - DragEvent
  - Event
  - Reference
  - Web
  - drag and drop
translation_of: Web/API/Document/drag_event
---
<div>{{APIRef}}</div>



<p><code>drag</code> 이벤트는 사용자가 요소 또는 텍스트를 드래그할 때 수백 밀리초마다 발생합니다.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">이벤트 버블링</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">이벤트 취소</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">기본 액션</th>
   <td>드래그 앤 드롭을 계속한다.</td>
  </tr>
  <tr>
   <th scope="row">인터페이스</th>
   <td>{{domxref("DragEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">이벤트 핸들러 속성</th>
   <td>{{domxref("GlobalEventHandlers/ondrag", "ondrag")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p><a href="http://jsfiddle.net/zfnj5rv4/">JSFiddle demo</a>에서 이 코드를 보거나 아래에서 상호작용 하십시오.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div class="dropzone"&gt;
  &lt;div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"&gt;
    This div is draggable
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class="dropzone"&gt;&lt;/div&gt;
&lt;div class="dropzone"&gt;&lt;/div&gt;
&lt;div class="dropzone"&gt;&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">#draggable {
  width: 200px;
  height: 20px;
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin-bottom: 10px;
  padding: 10px;
}
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">var dragged;

/* 드래그 가능한 대상에서 이벤트 발생 */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // 드래그한 요소에 대한 참조 변수
  dragged = event.target;
  // 요소를 반투명하게 함
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // 투명도를 리셋
  event.target.style.opacity = "";
}, false);

/* 드롭 대상에서 이벤트 발생 */
document.addEventListener("dragover", function(event) {
  // 드롭을 허용하도록 prevetDefault() 호출
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // 요소를 드롭하려는 대상 위로 드래그했을 때 대상의 배경색 변경
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // 요소를 드래그하여 드롭하려던 대상으로부터 벗어났을 때 배경색 리셋
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // 기본 액션을 막음 (링크 열기같은 것들)
  event.preventDefault();
  // 드래그한 요소를 드롭 대상으로 이동
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);</pre>

<p>{{EmbedLiveSample('Examples', '300', '200', '')}}</p>

<h2 id="사양">사양</h2>

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
   <td>{{SpecName("HTML WHATWG", "interaction.html#dndevents", "drag event")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Document.drag_event")}}</p>

<h2 id="더보기">더보기</h2>

<ul>
 <li>다른 드래그 앤 드롭 이벤트:
  <ul>
   <li>{{domxref("Document/dragstart_event", "dragstart")}}</li>
   <li>{{domxref("Document/dragend_event", "dragend")}}</li>
   <li>{{domxref("Document/dragover_event", "dragover")}}</li>
   <li>{{domxref("Document/dragenter_event", "dragenter")}}</li>
   <li>{{domxref("Document/dragleave_event", "dragleave")}}</li>
   <li>{{domxref("Document/dragexit_event", "dragexit")}}</li>
   <li>{{domxref("Document/drop_event", "drop")}}</li>
  </ul>
 </li>
 <li>다른 대상의 <code>drag</code> 이벤트:
  <ul>
   <li>{{domxref("Window")}}: {{domxref("Window/drag_event", "drag")}} event</li>
   <li>{{domxref("HTMLElement")}}: {{domxref("HTMLElement/drag_event", "drag")}} event</li>
   <li>{{domxref("SVGElement")}}: {{domxref("SVGElement/drag_event", "drag")}} event</li>
  </ul>
 </li>
</ul>
