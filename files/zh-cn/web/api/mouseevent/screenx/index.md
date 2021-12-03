---
title: MouseEvent.screenX
slug: Web/API/MouseEvent/screenX
tags:
  - API
  - MouseEvent
  - Property
  - events
  - 事件
  - 参考
  - 属性
  - 鼠标
  - 鼠标事件
translation_of: Web/API/MouseEvent/screenX
---
<p>{{APIRef("DOM Events")}}</p>

<p><span class="seoSummary"> <strong><code>screenX</code></strong> 是 {{domxref("MouseEvent")}} 的只读属性，提供鼠标在全局（屏幕）中的水平坐标（偏移量）。</span></p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox notranslate">var <em>pixelNumber</em> = <em>instanceOfMouseEvent</em>.screenX
</pre>

<h3 id="返回值">返回值</h3>

<p>一个双精度浮点值。早期版本的规范将该值定义为整数值的像素数。有关详细信息，请参见浏览器兼容性部分。</p>

<h2 id="示例">示例</h2>

<p>这个例子展示了当触发 {{Event("mousemove")}} 事件时鼠标的坐标。</p>

<h4 id="HTML">HTML</h4>

<pre class="notranslate">&lt;p&gt;Move your mouse to see its position.&lt;/p&gt;
&lt;p id="screen-log"&gt;&lt;/p&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="notranslate">let screenLog = document.querySelector('#screen-log');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}</pre>

<h4 id="结果">结果</h4>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="规范">规范</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">规范</th>
   <th scope="col">状态</th>
   <th scope="col">注释</th>
  </tr>
  <tr>
   <td>{{SpecName('CSSOM View','#dom-mouseevent-screenx', 'screenX')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td>Redefines {{domxref("MouseEvent")}} from long to double. </td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events','#widl-MouseEvent-screenX','MouseEvent.screenX')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>No change from {{SpecName('DOM2 Events')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Events','#Events-MouseEvent','MouseEvent.sceenX')}}</td>
   <td>{{Spec2('DOM2 Events')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat("api.MouseEvent.screenX")}}</p>

<h2 id="参见"><span>参见</span></h2>

<div id="compat-mobile"></div>

<ul>
 <li>{{ domxref("MouseEvent") }}</li>
 <li>{{ domxref("MouseEvent.screenY","screenY") }}</li>
 <li>{{ domxref("MouseEvent.clientX","clientX") }} / {{ domxref("MouseEvent.clientY", "clientY") }}</li>
</ul>
