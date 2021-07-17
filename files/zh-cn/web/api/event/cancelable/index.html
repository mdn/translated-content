---
title: event.cancelable
slug: Web/API/Event/cancelable
translation_of: Web/API/Event/cancelable
---
<p>{{ ApiRef("DOM") }}</p>

<p>{{domxref("Event")}} 实例的只读属性 <strong><dfn><code>cancelable</code></dfn></strong> 表明该事件是否可以被取消，当事件被阻止之后，该事件就好像没有被触发一样。如果事件<strong>不能</strong>被取消，则其 cancelable 属性的值为 false，且事件发生时无法在事件监听回调中停止事件。</p>

<p>在许多事件的监听回调中调用{{domxref("event.preventDefault", "preventDefault()")}}前，都需要检查 cancelable 属性的值。</p>

<p>大部分由用户与页面交互产生的原生浏览器事件都可以被取消。取消{{event("click")}}，{{event("scroll")}} 或 {{event("beforeunload")}} 事件将分别阻止用户点击某些元素，滚动页面或跳离页面。</p>

<p>使用其它 JavaScript 代码创建的 <a href="/zh-CN/docs/Web/API/Event/Event">Custom events</a> ，可以在初始化事件的时候控制该事件是否可以被取消。</p>

<h2 id="Syntax" name="Syntax">语法</h2>

<pre class="eval"><em>bool = event</em>.cancelable；</pre>

<h3 id="Syntax" name="Syntax">值</h3>

<p>返回结果为 {{domxref("Boolean")}}，如果事件可以被取消将返回 true。</p>

<h2 id="示例">示例</h2>

<p>例如，浏览器厂商提议 {{event("wheel")}} 事件只能在<a href="https://github.com/WICG/interventions/issues/33">事件监听回调第一次执行</a>时被取消，接下来的 wheel 事件都不能被取消。</p>

<pre><code>function preventScrollWheel(event) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    // The event can be canceled, so we do so.
    event.preventDefault();
  } else {
    // The event cannot be canceled, so it is not safe
    // to call preventDefault() on it.
    console.warn(`The following event couldn't be canceled:`);
    console.dir(event);
  }
}

document.addEventListener('wheel', preventScrollWheel);</code></pre>

<h2 id="Notes" name="Notes">备注</h2>

<p>事件能否被取消取决于该事件初始化时的状态。</p>

<p>要取消一个事件的默认行为，可以调用该事件的 <code><a href="/zh-cn/DOM/event.preventDefault" title="zh-cn/DOM/event.preventDefault">preventDefault()</a></code>方法。与该事件关联的默认行为仍将会保留。</p>

<h2 id="规范">规范</h2>

<table>
 <thead>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">备注</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-event-cancelable', 'Event.cancelable')}}</td>
   <td>{{ Spec2('DOM WHATWG') }}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Events', '#Events-Event-canCancel', 'Event.cancelable')}}</td>
   <td>{{ Spec2('DOM2 Events') }}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("api.Event.cancelable")}}</p>
