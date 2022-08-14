---
title: MouseEvent
slug: Web/API/MouseEvent
translation_of: Web/API/MouseEvent
---
<div>{{APIRef("DOM Events")}}</div>

<p><code><strong>MouseEvent</strong></code> 인터페이스는 특정 지점을 가리키는 장치를 통해 발생하는 이벤트를 의미한다 (마우스 등). 주로 사용되는 이벤트로는 {{event("click")}}, {{event("dblclick")}}, {{event("mouseup")}}, {{event("mousedown")}}가 있다.</p>

<p><code>MouseEvent</code> 는 {{domxref("UIEvent")}}에서, {{domxref("UIEvent")}}는 {{domxref("Event")}}에서 파생되었다. <code>MouseEvent</code> 객체(object)를 생성하고자 할 때에는 {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}} 생성자(constructor)를 사용해야 한다. {{domxref("MouseEvent.initMouseEvent()")}} 메서드는 하위호환성을 위해 유지된다.</p>

<p>{{domxref("WheelEvent")}}, {{domxref("DragEvent")}} 등 특정 이벤트는 <code>MouseEvent</code>를 기반으로 한다.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}</dt>
 <dd>Creates a <code>MouseEvent</code> object.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}.</em></p>

<dl>
 <dt>{{domxref("MouseEvent.altKey")}} {{readonlyinline}}</dt>
 <dd>Returns <code>true</code> if the <kbd>alt</kbd> key was down when the mouse event was fired.</dd>
 <dt>{{domxref("MouseEvent.button")}} {{readonlyinline}}</dt>
 <dd>The button number that was pressed (if applicable) when the mouse event was fired.</dd>
 <dt>{{domxref("MouseEvent.buttons")}} {{readonlyinline}} {{gecko_minversion_inline("15.0")}}</dt>
 <dd>The buttons being depressed (if any) when the mouse event was fired.</dd>
 <dt>{{domxref("MouseEvent.clientX")}} {{readonlyinline}}</dt>
 <dd>The X coordinate of the mouse pointer in local (DOM content) coordinates.</dd>
 <dt>{{domxref("MouseEvent.clientY")}} {{readonlyinline}}</dt>
 <dd>The Y coordinate of the mouse pointer in local (DOM content) coordinates.</dd>
 <dt>{{domxref("MouseEvent.ctrlKey")}} {{readonlyinline}}</dt>
 <dd>Returns <code>true</code> if the <kbd>control</kbd> key was down when the mouse event was fired.</dd>
 <dt>{{domxref("MouseEvent.metaKey")}} {{readonlyinline}}</dt>
 <dd>Returns <code>true</code> if the <kbd>meta</kbd> key was down when the mouse event was fired.</dd>
 <dt>{{domxref("MouseEvent.movementX")}} {{readonlyinline}}</dt>
 <dd>The X coordinate of the mouse pointer relative to the position of the last {{event("mousemove")}} event.</dd>
 <dt>{{domxref("MouseEvent.movementY")}} {{readonlyinline}}</dt>
 <dd>The Y coordinate of the mouse pointer relative to the position of the last {{event("mousemove")}} event.</dd>
 <dt>{{domxref("MouseEvent.offsetX")}} {{readonlyinline}}{{experimental_inline}}</dt>
 <dd>The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.</dd>
 <dt>{{domxref("MouseEvent.offsetY")}} {{readonlyinline}}{{experimental_inline}}</dt>
 <dd>The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.</dd>
 <dt>{{domxref("MouseEvent.pageX")}} {{readonlyinline}}{{experimental_inline}}</dt>
 <dd>The X coordinate of the mouse pointer relative to the whole document.</dd>
 <dt>{{domxref("MouseEvent.pageY")}} {{readonlyinline}}{{experimental_inline}}</dt>
 <dd>The Y coordinate of the mouse pointer relative to the whole document.</dd>
 <dt>{{domxref("MouseEvent.region")}} {{readonlyinline}}</dt>
 <dd>Returns the id of the hit region affected by the event. If no hit region is affected, <code>null</code> is returned.</dd>
 <dt>{{domxref("MouseEvent.relatedTarget")}} {{readonlyinline}}</dt>
 <dd>
 <p>The secondary target for the event, if there is one.</p>
 </dd>
 <dt>{{domxref("MouseEvent.screenX")}} {{readonlyinline}}</dt>
 <dd>The X coordinate of the mouse pointer in global (screen) coordinates.</dd>
 <dt>{{domxref("MouseEvent.screenY")}} {{readonlyinline}}</dt>
 <dd>The Y coordinate of the mouse pointer in global (screen) coordinates.</dd>
 <dt>{{domxref("MouseEvent.shiftKey")}} {{readonlyinline}}</dt>
 <dd>Returns <code>true</code> if the <kbd>shift</kbd> key was down when the mouse event was fired.</dd>
 <dt>{{domxref("MouseEvent.which")}} {{non-standard_inline}} {{readonlyinline}}</dt>
 <dd>The button being pressed when the mouse event was fired.</dd>
 <dt>{{domxref("MouseEvent.mozPressure")}} {{non-standard_inline()}} {{deprecated_inline}} {{readonlyinline}}</dt>
 <dd>The amount of pressure applied to a touch or tablet device when generating the event; this value ranges between <code>0.0</code> (minimum pressure) and <code>1.0</code> (maximum pressure). Instead of using this deprecated (and non-standard) property, you should instead use {{domxref("PointerEvent")}} and look at its {{domxref("PointerEvent.pressure", "pressure")}} property.</dd>
 <dt>{{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{readonlyinline}}</dt>
 <dd>The type of device that generated the event (one of the <code>MOZ_SOURCE_*</code> constants listed below). This lets you, for example, determine whether a mouse event was generated by an actual mouse or by a touch event (which might affect the degree of accuracy with which you interpret the coordinates associated with the event).</dd>
 <dt>{{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{readonlyinline}}</dt>
 <dd>The amount of pressure applied when clicking</dd>
 <dt>{{domxref("MouseEvent.x")}} {{experimental_inline}}{{readonlyinline}}</dt>
 <dd>Alias for {{domxref("MouseEvent.clientX")}}.</dd>
 <dt>{{domxref("MouseEvent.y")}} {{experimental_inline}}{{readonlyinline}}</dt>
 <dd>Alias for {{domxref("MouseEvent.clientY")}}</dd>
</dl>

<h2 id="Constants">Constants</h2>

<dl>
 <dt>{{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}</dt>
 <dd>Minimum force necessary for a normal click</dd>
 <dt>{{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}</dt>
 <dd>Minimum force necessary for a force click</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>This interface also inherits methods of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}.</em></p>

<dl>
 <dt>{{domxref("MouseEvent.getModifierState()")}}</dt>
 <dd>Returns the current state of the specified modifier key. See the {{domxref("KeyboardEvent.getModifierState")}}() for details.</dd>
 <dt>{{domxref("MouseEvent.initMouseEvent()")}} {{deprecated_inline}}</dt>
 <dd>Initializes the value of a <code>MouseEvent</code> created. If the event has already being dispatched, this method does nothing.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example demonstrates simulating a click (that is programmatically generating a click event) on a checkbox using DOM methods.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;&lt;label&gt;&lt;input type="checkbox" id="checkbox"&gt; Checked&lt;/label&gt;
&lt;p&gt;&lt;button id="button"&gt;Click me&lt;/button&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function simulateClick() {
  var evt = new <a href="/en-US/docs/Web/API/MouseEvent">MouseEvent</a>("click", {
    bubbles: true,
    cancelable: true,
    view: window
  });
  var cb = document.getElementById("checkbox"); //element to click on
  var canceled = !cb.<a href="/en-US/docs/Web/API/EventTarget.dispatchEvent" rel="internal">dispatchEvent</a>(evt);
  if(canceled) {
    // A handler called preventDefault
    alert("canceled");
  } else {
    // None of the handlers called preventDefault
    alert("not canceled");
  }
}
document.getElementById("button").addEventListener('click', simulateClick);</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Example')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.MouseEvent")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Its direct parent, {{domxref("UIEvent")}}.</li>
 <li>{{domxref("PointerEvent")}}: For advanced pointer events, including multi-touch</li>
</ul>
