---
title: Window.event
slug: Web/API/Window/event
tags:
  - API
  - DOM
  - Event
  - Event Handler
  - Read-only
  - Window
translation_of: Web/API/Window/event
---
<div>{{APIRef("DOM")}}</div>

<p>{{domxref("Window")}} の読み取り専用プロパティである <code><strong>event</strong></code> は、現在サイトのコードが処理している {{domxref("Event")}} を返します。イベントハンドラーのコンテキスト外では、値が常に <code>undefined</code> になります。</p>

<p>新しいコードではこのプロパティの使用を<em>避けるべき</em>であり、代わりにイベントハンドラー関数になる {{domxref("Event")}} を使用してください。このプロパティは広くサポートされておらず、またサポートされていてもコードが壊れやすくなるおそれがあります。</p>

<div class="note">
<p><strong>注記:</strong> このプロパティは、返された <code>Event</code> が期待する値ではない状況になる場合があり、壊れやすい可能性があります。加えて <code>Window.event</code> は、{{Glossary("shadow tree", "shadow trees")}} で発生したイベントに対して不適格です。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', "#ref-for-dom-window-event", "Window.event")}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.Window.event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Event.srcElement")}}</li>
</ul>
