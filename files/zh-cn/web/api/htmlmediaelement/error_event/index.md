---
title: 'HTMLMediaElement: error event'
slug: Web/API/HTMLMediaElement/error_event
---
<div>{{APIRef}}</div>

<p>事件 <strong><code>error</code></strong> 会在因为一些错误（如网络连接错误）导致无法加载资源的时候触发。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">起泡</th>
   <td>否</td>
  </tr>
  <tr>
   <th scope="row">可取消</th>
   <td>否</td>
  </tr>
  <tr>
   <th scope="row">接口</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">事件处理器属性</th>
   <td>{{domxref("GlobalEventHandlers/onerror", "onerror")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="示例">示例</h2>

<pre class="brush: js">const video = document.querySelector('video');
const videoSrc = 'https://path/to/video.webm';

video.addEventListener('error', () =&gt; {
  console.error(`Error loading: ${videoSrc}`);
});

video.setAttribute('src', videoSrc);</pre>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.HTMLMediaElement.error_event")}}</p>

<h2 id="更多">更多</h2>

<ul>
 <li>{{domxref("HTMLAudioElement")}}</li>
 <li>{{domxref("HTMLVideoElement")}}</li>
 <li>{{HTMLElement("audio")}}</li>
 <li>{{HTMLElement("video")}}</li>
</ul>
