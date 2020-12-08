---
title: scroll
slug: Web/API/Document/scroll_event
translation_of: Web/API/Document/scroll_event
---
<p>當文件的可視區或元素被滾動(scroll)，<code>scroll</code>事件會被觸發</p>

<h2 id="一般資訊">一般資訊</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">規範</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/DOM-Level-3-Events/#event-type-scroll">DOM L3</a>, <a href="http://www.w3.org/TR/cssom-view/#scrolling-0">CSSOM View</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">介面</dt>
 <dd style="margin: 0 0 0 120px;">UIEvent</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bubbles</dt>
 <dd style="margin: 0 0 0 120px;">Not on elements, but bubbles to the default view when fired on the document</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">defaultView, Document, Element</dd>
 <dt style="float: left; text-align: right; width: 120px;">Default Action</dt>
 <dd style="margin: 0 0 0 120px;">None</dd>
</dl>

<h2 id="屬性">屬性</h2>

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
   <td><a href="/en-US/docs/Web/API/EventTarget" title="EventTarget is an interface implemented by objects that can receive events and may have listeners for them."><code>EventTarget</code></a></td>
   <td>The event target (the topmost target in the DOM tree).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a></td>
   <td>The type of event.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a></td>
   <td>Whether the event normally bubbles or not.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a></td>
   <td>Whether the event is cancellable or not.</td>
  </tr>
  <tr>
   <td><code>view</code> {{readonlyInline}}</td>
   <td><a class="new" href="/en-US/docs/Web/API/WindowProxy" rel="nofollow" title="The documentation about this has not yet been written; please consider contributing!"><code>WindowProxy</code></a></td>
   <td><a href="/en-US/docs/Web/API/Document/defaultView" title="In browsers, document.defaultView returns the window object associated with a document, or null if none is available."><code>document.defaultView</code></a> (<code>window</code> of the document)</td>
  </tr>
  <tr>
   <td><code>detail</code> {{readonlyInline}}</td>
   <td><code>long</code> (<code>float</code>)</td>
   <td>0.</td>
  </tr>
 </tbody>
</table>

<h2 id="Example">Example</h2>

<p>因為 <code>scroll</code> 事件是高頻觸發，這樣的事件處理程式不該進行運算成本高的程式，像是DOM的修改。所以，建議使用 <a href="/en-US/docs/DOM/window.requestAnimationFrame" title="/en-US/docs/DOM/window.requestAnimationFrame">requestAnimationFrame</a>, <a href="/en-US/docs/Web/API/WindowTimers/setTimeout">setTimeout</a> 或 <a href="/en-US/docs/Web/API/CustomEvent">customEvent</a> 如下所示</p>

<h4 id="Scroll_optimization_with_window.requestAnimationFrame">Scroll optimization with window.requestAnimationFrame</h4>

<pre class="brush: js">// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  // do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});</pre>

<p> </p>

<p>關於<a href="/en-US/docs/Web/Events/resize#Example">resize</a>事件的更多類似例子。</p>

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>

<h3 id="iOS_UIWebView">iOS UIWebView</h3>

<p>在iOS UIWebViews中，滾動捲軸時 <code>scroll </code>事件不會觸發；它們要等到滾動完成時才被觸發。請參閱<a href="https://github.com/twbs/bootstrap/issues/16202">Bootstrap issue #16202</a>。 Safari 和 WKWebViews 不受此bug的影響。</p>
