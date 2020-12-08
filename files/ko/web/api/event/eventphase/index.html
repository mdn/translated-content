---
title: Event.eventPhase
slug: Web/API/Event/eventPhase
translation_of: Web/API/Event/eventPhase
---
<p>{{ApiRef("DOM")}}</p>

<p>현재 발생중인 이벤트 흐름의 단계를 나타냅니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>var phase</em> = event.eventPhase;
</pre>

<p>이벤트 흐름의 최근 실행 단계에 대한 지정된 정수값을 반환합니다. 가능한 값은 {{anch("이벤트 단계 상수")}} 목록을 참조.</p>

<h2 id="Constants">Constants</h2>

<h3 id="Event_phase_constants">Event phase constants</h3>

<p>이 값들은 이벤트 흐름의 현재 실행 단계를 나타냅니다.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Constant</th>
   <th scope="col">Value</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>Event.NONE</code></td>
   <td>0</td>
   <td>아무런 이벤트도 발생하지 않았습니다.</td>
  </tr>
  <tr>
   <td><code>Event.CAPTURING_PHASE</code></td>
   <td>1</td>
   <td>이벤트가 상위 개체를 통해 전파됩니다. 이 프로세스는 {{domxref("Window")}},  {{domxref("Document")}}에서 시작하여,  {{domxref("HTMLHtmlElement")}} 등 대상의 부모에 도달할 때까지 요소들을 통과합니다. 이 단계에서 {{domxref("EventTarget.addEventListener()")}} 가 호출될 때 캡처 모드에 있는 {{domxref("EventListener", "Event listeners", "", 1)}} 가 트리거됩니다.</td>
  </tr>
  <tr>
   <td><code>Event.AT_TARGET</code></td>
   <td>2</td>
   <td>이벤트가 {{domxref("EventTarget", "the event's target", "", 1)}}에 도착했습니다. 이 단계에서 등록된 이벤트 리스너가 이 때 호출됩니다. 만약  {{domxref("Event.bubbles")}} 이 <code>false</code> 라면, 이 단계가 완료된 다음 이벤트 진행은 종료됩니다.</td>
  </tr>
  <tr>
   <td><code>Event.BUBBLING_PHASE</code></td>
   <td>3</td>
   <td>이벤트가 역순으로 대상의 조상을 통해 전파됩니다. 대상의 부모부터 시작해서, {{domxref("Window")}}를 포함하는 단계까지 도달합니다. 이는 버블링으로 알려져 있으며, {{domxref("Event.bubbles")}}가 <code>true</code> 일 때만 발생합니다. 이 프로세스 중에 이 단계에 등록된 {{domxref("EventListener", "Event listeners", "", 1)}} 가 트리거됩니다.</td>
  </tr>
 </tbody>
</table>

<p>더 상세한 내용은 DOM Level 3 Events 명세인 <a class="external" href="http://www.w3.org/TR/DOM-Level-3-Events/#event-flow">section 3.1, Event dispatch and DOM event flow</a> 를 참고하세요.</p>

<h2 id="Example" name="Example">Example</h2>

<h3 id="HTML_Content">HTML Content</h3>

<pre class="brush: html">&lt;h4&gt;Event Propagation Chain&lt;/h4&gt;
&lt;ul&gt;
  &lt;li&gt;Click 'd1'&lt;/li&gt;
  &lt;li&gt;Analyse event propagation chain&lt;/li&gt;
  &lt;li&gt;Click next div and repeat the experience&lt;/li&gt;
  &lt;li&gt;Change Capturing mode&lt;/li&gt;
  &lt;li&gt;Repeat the experience&lt;/li&gt;
&lt;/ul&gt;
&lt;input type="checkbox" id="chCapture" /&gt;
&lt;label for="chCapture"&gt;Use Capturing&lt;/label&gt;
 &lt;div id="d1"&gt;d1
  &lt;div id="d2"&gt;d2
      &lt;div id="d3"&gt;d3
          &lt;div id="d4"&gt;d4&lt;/div&gt;
      &lt;/div&gt;
  &lt;/div&gt;
 &lt;/div&gt;
 &lt;div id="divInfo"&gt;&lt;/div&gt;
</pre>

<h3 id="CSS_Content">CSS Content</h3>

<pre class="brush: css">div {
  margin: 20px;
  padding: 4px;
  border: thin black solid;
}

#divInfo {
  margin: 18px;
  padding: 8px;
  background-color:white;
  font-size:80%;
}</pre>

<h3 id="JavaScript_Content">JavaScript Content</h3>

<pre class="brush: js">var clear = false, divInfo = null, divs = null, useCapture = false;
window.onload = function () {
  divInfo = document.getElementById("divInfo");
  divs = document.getElementsByTagName('div');
  chCapture = document.getElementById("chCapture");
  chCapture.onclick = function () {
    RemoveListeners();
    AddListeners();
  }
  Clear();
  AddListeners();
}

function RemoveListeners() {
  for (var i = 0; i &lt; divs.length; i++) {
    var d = divs[i];
    if (d.id != "divInfo") {
      d.removeEventListener("click", OnDivClick, true);
      d.removeEventListener("click", OnDivClick, false);
    }
  }
}

function AddListeners() {
  for (var i = 0; i &lt; divs.length; i++) {
    var d = divs[i];
    if (d.id != "divInfo") {
      if (chCapture.checked)
        d.addEventListener("click", OnDivClick, true);
      else
        d.addEventListener("click", OnDivClick, false);
      d.onmousemove = function () { clear = true; };
    }
  }
}

function OnDivClick(e) {
  if (clear) {
    Clear(); clear = false;
  }
  if (e.eventPhase == 2)
    e.currentTarget.style.backgroundColor = 'red';
  var level = e.eventPhase == 0 ? "none" : e.eventPhase == 1 ? "capturing" : e.eventPhase == 2 ? "target" : e.eventPhase == 3 ? "bubbling" : "error";
  divInfo.innerHTML += e.currentTarget.id + "; eventPhase: " + level + "&lt;br/&gt;";
}

function Clear() {
  for (var i = 0; i &lt; divs.length; i++) {
    if (divs[i].id != "divInfo")
      divs[i].style.backgroundColor = (i &amp; 1) ? "#f6eedb" : "#cceeff";
  }
  divInfo.innerHTML = '';
}</pre>

<p>{{ EmbedLiveSample('Example', '', '700', '', 'Web/API/Event/eventPhase') }}</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Specification</th>
   <th>Status</th>
   <th>Comment</th>
  </tr>
  <tr>
   <td>{{SpecName("DOM WHATWG", "#dom-event-eventphase", "Event.eventPhase")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("DOM4", "#dom-event-eventphase", "Event.eventPhase")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Events", "#Events-Event-eventPhase", "Event.eventPhase")}}</td>
   <td>{{Spec2("DOM2 Events")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>
