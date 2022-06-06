---
title: 'HTMLMediaElement: loadeddata'
slug: Web/API/HTMLMediaElement/loadeddata_event
translation_of: Web/API/HTMLMediaElement/loadeddata_event
---
<p><code>loadeddata</code> 事件在第一帧数据加载完成后触发。</p>

<h2 id="基本信息">基本信息</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">规范</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/html5/media-elements.html#mediahttp://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#event-media-loadeddataevents">HTML5 media</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">接口</dt>
 <dd style="margin: 0 0 0 120px;">Event</dd>
 <dt style="float: left; text-align: right; width: 120px;">冒泡</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">可取消</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">目标</dt>
 <dd style="margin: 0 0 0 120px;">Element</dd>
 <dt style="float: left; text-align: right; width: 120px;">默认行为</dt>
 <dd style="margin: 0 0 0 120px;">None.</dd>
</dl>

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
   <td>The event target (the topmost target in the DOM tree).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>The type of event.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event normally bubbles or not.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event is cancellable or not.</td>
  </tr>
 </tbody>
</table>

<h2 id="Related_Events">Related Events</h2>

<ul>
 <li>{{event("playing")}}</li>
 <li>{{event("waiting")}}</li>
 <li>{{event("seeking")}}</li>
 <li>{{event("seeked")}}</li>
 <li>{{event("ended")}}</li>
 <li>{{event("loadedmetadata")}}</li>
 <li>{{event("loadeddata")}}</li>
 <li>{{event("canplay")}}</li>
 <li>{{event("canplaythrough")}}</li>
 <li>{{event("durationchange")}}</li>
 <li>{{event("timeupdate")}}</li>
 <li>{{event("play")}}</li>
 <li>{{event("pause")}}</li>
 <li>{{event("ratechange")}}</li>
 <li>{{event("volumechange")}}</li>
 <li>{{event("suspend")}}</li>
 <li>{{event("emptied")}}</li>
 <li>{{event("stalled")}}</li>
</ul>
