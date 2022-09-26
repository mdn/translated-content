---
title: Gamepad.displayId
slug: Web/API/Gamepad/displayId
tags:
  - Виртуальная реальность
translation_of: Web/API/Gamepad/displayId
---
<p>{{DefaultAPISidebar("WebVR API")}}{{SeeCompatTable}}</p>

<p>Свойство <strong>displayId</strong> только для чтения {{domxref("Gamepad")}} возвращаемый интерфейс<dfn> {{domxref("VRDisplay.displayId")}} связанный с {{domxref("VRDisplay")}} —  <code>VRDisplay</code>  (дисплей виртуальной реальности) в котором геймпад управляет отображаемой сценой.</dfn></p>

<p>Геймпад считается связанным с {{domxref("VRDisplay")}} если он сообщает о позиции, которая находится в том же месте, что и {{domxref("VRDisplay.pose")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myDisplayId = gamepadInstance.displayId;</pre>

<h3 id="Value">Value</h3>

<p>Число, представляющее связанный интерфейс {{domxref("VRDisplay.displayId")}}.Если число равно 0, то геймпад не связан с дисплеем VR( виртуальной реальности).</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">window.addEventListener("gamepadconnected", function(e) {
  if(!e.gamepad.displayId) {
    console.log('Gamepad connected');
  } else {
    console.log('Gamepad connected, associated with VR display ' + e.gamepad.displayId);
  }
});</code></pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR 1.1', '#gamepad-getvrdisplays-attribute', 'displayId')}}</td>
   <td>{{Spec2('WebVR 1.1')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebVR_API">WebVR API homepage</a></li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — демосцены, материалы, доступные для скачивания и другие материалы команды the Mozilla VR team.</li>
</ul>
