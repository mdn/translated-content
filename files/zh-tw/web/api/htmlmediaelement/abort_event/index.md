---
title: abort
slug: Web/API/HTMLMediaElement/abort_event
translation_of: Web/API/HTMLMediaElement/abort_event
translation_of_original: Web/Events/abort
original_slug: Web/Events/abort
---
<p>當資源載入被拒絕時將會觸發<strong><code>abort</code></strong>事件。</p>

<h2 id="一般資訊">一般資訊</h2>

<dl>
 <dt>規範</dt>
 <dd><a href="http://www.w3.org/TR/DOM-Level-3-Events/#event-type-abort">DOM L3</a></dd>
 <dt>介面</dt>
 <dd>若由使用者介面產生，為UIEvent，否則為Event。</dd>
 <dt>是否向上(冒泡)</dt>
 <dd>否</dd>
 <dt>是否為可取消</dt>
 <dd>否</dd>
 <dt>目標對象</dt>
 <dd>Element</dd>
 <dt>預設行為</dt>
 <dd>無</dd>
</dl>

<h2 id="屬性">屬性</h2>

<table>
 <thead>
  <tr>
   <th scope="col">屬性</th>
   <th scope="col">型態</th>
   <th scope="col">描述</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/EventTarget"><code>EventTarget</code></a></td>
   <td>事件的目標對象 (DOM樹中最頂層的對象)。</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/DOMString"><code>DOMString</code></a></td>
   <td>事件的型態。</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean"><code>Boolean</code></a></td>
   <td>事件是否向上冒泡。</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean"><code>Boolean</code></a></td>
   <td>事件是否能夠取消。</td>
  </tr>
  <tr>
   <td><code>view</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/WindowProxy"><code>WindowProxy</code></a></td>
   <td><a href="/en-US/docs/Web/API/Document/defaultView"><code>document.defaultView</code></a> (該文檔(Document)的<code>window</code>)</td>
  </tr>
  <tr>
   <td><code>detail</code> {{readonlyInline}}</td>
   <td><code>long</code> (<code>float</code>)</td>
   <td>0.</td>
  </tr>
 </tbody>
</table>

<h2 id="規範">規範</h2>

{{Specifications}}
