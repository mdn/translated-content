---
title: 'Window: languagechange イベント'
slug: Web/API/Window/languagechange_event
tags:
  - Event
  - Experimental
  - HTML DOM
  - Reference
  - Window
  - イベント
translation_of: Web/API/Window/languagechange_event
---
<div>{{APIRef}}</div>

<p><strong><code>languagechange</code></strong> イベントはグローバルスコープオブジェクトで、ユーザーの推奨言語が変更されたときに発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラー</th>
   <td>{{domxref("WindowEventHandlers/onlanguagechange", "onlanguagechange")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>languagechange</code> は {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。</p>

<pre class="brush: js">window.addEventListener('languagechange', function() {
  console.log('languagechange event detected!');
});</pre>

<p>または、 {{domxref("WindowEventHandlers/onlanguagechange", "onlanguagechange")}} イベントハンドラープロパティを使用することもできます。</p>

<pre class="brush: js">window.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('HTML WHATWG', 'indices.html#event-languagechange', 'languagechange') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.languagechange_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("NavigatorLanguage.language", "navigator.language")}}</li>
 <li>{{domxref("NavigatorLanguage.languages", "navigator.languages")}}</li>
 <li>{{domxref("Navigator")}}</li>
 <li>{{domxref("Window.onlanguagechange")}}</li>
</ul>
