---
title: 'Element: focusout イベント'
slug: Web/API/Element/focusout_event
tags:
  - API
  - DOM
  - Element
  - Event
  - FocusEvent
  - Reference
  - focusout
  - onfocusout
  - イベント
translation_of: Web/API/Element/focusout_event
---
<div>{{APIRef}}</div>

<p><strong><code>focusout</code></strong> イベントは、要素がフォーカスを失おうとしているときに発生します。このイベントと {{domxref("Element/blur_event", "blur")}} との主な違いは、 <code>focusout</code> が<a href="/ja/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture">バブリング</a>を行うのに対し <code>blur</code> は行わないことです。</p>

<p><code>focusout</code> の反対は {{domxref("Element/focusin_event", "focusin")}} です。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{DOMxRef("FocusEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers/onfocusout", "onfocusout")}}</td>
  </tr>
  <tr>
   <th scope="row">同期 / 非同期</th>
   <td>同期</td>
  </tr>
  <tr>
   <th scope="row">Composed</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Live_example" name="Live_example">ライブデモ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;form id="form"&gt;
  &lt;input type="text" placeholder="text input"&gt;
  &lt;input type="password" placeholder="password"&gt;
&lt;/form&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const form = document.getElementById('form');

form.addEventListener('focusin', (event) =&gt; {
  event.target.style.background = 'pink';
});

form.addEventListener('focusout', (event) =&gt; {
  event.target.style.background = '';
});</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Live_example", '100%', '50px')}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("UI Events", "#event-type-focusout")}}</td>
   <td>{{Spec2("UI Events")}}</td>
   <td>Added info that this event is composed.</td>
  </tr>
  <tr>
   <td>{{SpecName("DOM3 Events", "#event-type-focusout")}}</td>
   <td>{{Spec2("DOM3 Events")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.focusout_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}</li>
</ul>
