---
title: GlobalEventHandlers.onclick
slug: Web/API/GlobalEventHandlers/onclick
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - 事件处理器
  - 全局事件处理器
translation_of: Web/API/GlobalEventHandlers/onclick
---
<div>{{ ApiRef("HTML DOM") }}</div>

<p>全局事件处理器（{{domxref("GlobalEventHandlers")}}）之一的 <code><strong>onclick</strong></code> 属性，是处理当前元素的 {{event("click")}} 事件的事件处理器（{{event("Event_handlers", "event handler")}}）。</p>

<p>当用户点击一个元素时，会触发 <code>click</code> 事件。在每次点击的整个过程中，<code>click</code> 事件的运行顺序在 {{event("mousedown")}} 和 {{event("mouseup")}} 事件之后。</p>

<div class="note"><strong>注意：</strong>当你使用 <code>click</code> 事件去触发一个动作时，也要考虑向 {{event("keydown")}} 事件添加此动作，以便允许不使用鼠标或触摸屏的用户进行同样的操作。</div>

<h2 id="语法">语法</h2>

<pre class="brush: js"><var>element</var>.onclick = <var>functionRef</var>;
</pre>

<p><code><em>functionRef</em></code> 是一个函数名称，或一个<a href="/zh-CN//docs/Web/JavaScript/Reference/Operators/function">函数</a>表达式。该函数接收 {{domxref("MouseEvent")}} 对象作为其唯一参数。在函数内，<code><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/this">this</a></code> 是触发当前事件的元素。</p>

<p>同一时刻，每个 <code>onclick</code> 接收器只能指向唯一一个对象。所以，你可能更倾向于使用{{domxref("EventTarget.addEventListener()")}} 的方法，这种方法更加灵活，同时也是 DOM 事件规范格式。</p>

<h2 id="例子">例子</h2>

<p>这个例子会记录每次点击的坐标。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;p&gt;请随意点击本例子。&lt;/p&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">let log = document.getElementById('log');

document.onclick = inputChange;

function inputChange(e) {
  log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<p>也可以使用匿名函数：</p>

<pre class="brush:js">p.onclick = function() { alert("moot!"); };
</pre>

<h2 id="Specification" name="Specification">规范</h2>

<table class="spectable standard-table">
 <tbody>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG','webappapis.html#handler-onclick','onclick')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<div>


<p>{{Compat("api.GlobalEventHandlers.onclick")}}</p>
</div>

<h2 id="参见">参见</h2>

<ul>
 <li>{{event("click")}} 事件</li>
 <li>与 <code>onclick</code> 有关的事件处理器
  <ul>
   <li>{{domxref("GlobalEventHandlers.onauxclick")}}</li>
   <li>{{domxref("GlobalEventHandlers.ondblclick")}}</li>
  </ul>
 </li>
</ul>
