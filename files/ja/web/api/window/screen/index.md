---
title: Window.screen
slug: Web/API/Window/screen
tags:
  - API
  - CSSOM View
  - HTML DOM
  - Property
  - Window
translation_of: Web/API/Window/screen
---
<p>{{APIRef("CSSOM")}}</p>

<p>{{DOMxRef("Window")}} の <strong><code>screen</code></strong> プロパティは、ウィンドウに関連付けられた画面オブジェクトへの参照を返します。 <code>screen</code> オブジェクトは {{DOMxRef("Screen")}} インターフェースを実装しており、現在のウィンドウがレンダリングされている画面のプロパティを検査するための特別なオブジェクトです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <var>screenObj</var> = <var>window</var>.screen;</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js; notranslate">if (screen.pixelDepth &lt; 8) {
  // use low-color version of page
} else {
  // use regular, colorful page
}
</pre>

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
   <td>{{SpecName('CSSOM View', '#dom-window-screen', 'window.screen')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.screen")}}</p>
