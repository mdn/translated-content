---
title: 'Window: orientationchange event'
slug: Web/API/Window/orientationchange_event
tags:
  - Sensors
translation_of: Web/API/Window/orientationchange_event
---
<div>{{APIRef}}</div>

<p><code>orientationchange</code> 事件在設備方向改變時被觸發。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">冒泡</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">可取消</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">介面</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">事件處理器</th>
   <td><code><a href="/zh-TW/docs/Web/API/Window/onorientationchange">onorientationchange</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="範例">範例</h2>

<p>可於 <code><a href="/zh-TW/docs/Web/API/EventTarget/addEventListener">addEventListener</a></code> 方法中使用 <code>abort</code> 事件：</p>

<pre class="brush:js;">window.addEventListener("orientationchange", function() {
  console.log("the orientation of the device is now " + screen.orientation.angle);
});
</pre>

<p>或使用 <code><a href="/zh-TW/docs/Web/API/Window/onorientationchange">onorientationchange</a></code> 事件處理器屬性：</p>

<pre class="brush: js">window.onorientationchange = function() {
  console.log("the orientation of the device is now " + screen.orientation.angle);
};</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>

<p>{{Compat("api.Window.orientationchange_event")}}</p>
