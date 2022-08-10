---
title: SVGEvent
slug: Web/API/SVGEvent
translation_of: Web/API/SVGEvent
---
<div>{{APIRef("SVG")}}</div>

<p>{{domxref("SVGEvent")}} 是一种与SVG相关事件所对应的事件对象接口。</p>



<h2 id="Properties">Properties</h2>

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
   <td>{{domxref("EventTarget")}}</td>
   <td>事件目标（DOM树的最顶端）</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>事件类型</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>事件是否冒泡</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>事件是否可取消</td>
  </tr>
 </tbody>
</table>
