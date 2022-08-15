---
title: select
slug: Web/API/HTMLInputElement/select_event
---
<div>{{APIRef}}</div>

<p><strong><code>select</code></strong> 选择某些文本时会触发事件。</p>

<p>该事件不适用于所有语言的所有元素。例如，在 HTML，<code>select</code>事件只能在表单{{HtmlElement('input/text', '&lt;input type="text"&gt;')}}和 {{HtmlElement("textarea")}}元素上触发。</p>

<h2 id="General_info">General info</h2>

<table class="properties">
 <thead>
 </thead>
 <tbody>
  <tr>
   <th>Interface</th>
   <td>{{domxref("UIEvent")}} if generated from a user interface, {{domxref("Event")}} otherwise</td>
  </tr>
  <tr>
   <th>Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th>Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th>Target</th>
   <td>{{domxref("Element")}}</td>
  </tr>
  <tr>
   <th>Default Action</th>
   <td>None</td>
  </tr>
 </tbody>
</table>

<h2 id="属性">属性</h2>

<table>
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
   <td><a href="/en-US/docs/Web/API/EventTarget"><code>EventTarget</code></a></td>
   <td>The event target (the topmost target in the DOM tree).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/DOMString"><code>DOMString</code></a></td>
   <td>The type of event.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean"><code>Boolean</code></a></td>
   <td>Whether the event normally bubbles or not.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean"><code>Boolean</code></a></td>
   <td>Whether the event is cancellable or not.</td>
  </tr>
  <tr>
   <td><code>view</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/WindowProxy"><code>WindowProxy</code></a></td>
   <td><a href="/en-US/docs/Web/API/Document/defaultView"><code>document.defaultView</code></a> (<code>window</code> of the document)</td>
  </tr>
  <tr>
   <td><code>detail</code> {{readonlyInline}}</td>
   <td><code>long</code> (<code>float</code>)</td>
   <td>0.</td>
  </tr>
 </tbody>
</table>

<h2 id="示例">示例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input value="Try selecting some text in this element."&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);</pre>

<h3 id="结果">结果</h3>

<p>{{EmbedLiveSample("示例")}}</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="参见">参见</h2>

<ul>
 <li>{{domxref("GlobalEventHandlers.onselect")}}</li>
</ul>
