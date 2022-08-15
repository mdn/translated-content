---
title: 'Window: error event'
slug: Web/API/Window/error_event
---
<div>{{APIRef}}</div>

<p>当资源加载失败或无法使用时，会在{{domxref("Window")}}对象触发<code>error</code>事件。例如：script 执行时报错。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles（支持冒泡）</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Cancelable（可撤销）</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface（接口）</th>
   <td>{{domxref("Event")}} or {{domxref("UIEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property（事件处理程序属性）</th>
   <td><code><a href="/en-US/docs/Web/API/GlobalEventHandlers/onerror">onerror</a></code></td>
  </tr>
 </tbody>
</table>

<p>如果它是由用户界面元素生成的，或者是由事件实例生成的，那么此事件是{{domxref("UIEvent")}}实例。</p>

<h2 id="示例">示例</h2>

<h3 id="在线示例"><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/blur_event#%E5%9C%A8%E7%BA%BF%E7%A4%BA%E4%BE%8B">在线示例</a></h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="controls"&gt;
  &lt;button id="script-error" type="button"&gt;Generate script error&lt;/button&gt;
  &lt;img class="bad-img" /&gt;
&lt;/div&gt;

&lt;div class="event-log"&gt;
  &lt;label&gt;Event log:&lt;/label&gt;
  &lt;textarea readonly class="event-log-contents" rows="8" cols="30"&gt;&lt;/textarea&gt;
&lt;/div&gt;</pre>

<div class="hidden">
<h4 id="CSS">CSS</h4>

<pre class="brush: css">body {
  display: grid;
  grid-template-areas: "control  log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label, button {
  display: block;
}

button {
  height: 2rem;
  margin: .5rem;
}

img {
  width: 0;
  height: 0;
}
</pre>
</div>

<h4 id="JS">JS</h4>

<pre class="brush: js">const log = document.querySelector('.event-log-contents');

window.addEventListener('error', (event) =&gt; {
    log.textContent = log.textContent + `${event.type}: ${event.message}\n`;
    console.log(event)
});

const scriptError = document.querySelector('#script-error');
scriptError.addEventListener('click', () =&gt; {
    const badCode = 'const s;';
    eval(badCode);
});
</pre>

<h4 id="结果">结果</h4>

<p>{{ EmbedLiveSample('Live_example', '100%', '150px') }}</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.Window.error_event")}}</p>

<h2 id="相关事件">相关事件</h2>

<ul>
 <li>This event on <code>Element</code> targets: <code><a href="/en-US/docs/Web/API/Element/error_event">error</a></code> event </li>
</ul>
