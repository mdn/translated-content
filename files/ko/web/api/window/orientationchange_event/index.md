---
title: orientationchange
slug: Web/API/Window/orientationchange_event
translation_of: Web/API/Window/orientationchange_event
---
<p><code>orientationchange</code> 이벤트는 장치의 방향이 바뀔 때 호출 된다.</p>

<h2 id="General_info">General info</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Specification</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/screen-orientation/#event-handlers">Screen Orientation</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">Event</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bubbles</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">Screen</dd>
 <dt style="float: left; text-align: right; width: 120px;">Default Action</dt>
 <dd style="margin: 0 0 0 120px;">None</dd>
</dl>

<h2 id="Properties">Properties</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>The event target (the topmost target in the DOM tree).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>The type of event.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event normally bubbles or not.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event is cancellable or not.</td>
  </tr>
 </tbody>
</table>

<h2 id="Example">Example</h2>

<pre class="brush:js;">// Note that "orientationchange" and screen.orientation are unprefixed in the following
// code although this API is still vendor-prefixed browsers implementing it.
screen.addEventListener("orientationchange", function() {
    alert("the orientation of the device is now " + screen.orientation);
});
</pre>
