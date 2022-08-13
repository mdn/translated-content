---
title: Window.innerHeight
slug: Web/API/Window/innerHeight
tags:
  - API
  - CSSOM
  - CSSOM View
  - HTML DOM
  - NeedsInteractiveExample
  - Property
  - Reference
  - View
  - Window
  - height
  - innerHeight
translation_of: Web/API/Window/innerHeight
---
<div>{{APIRef}}</div>

<p><strong><code>innerHeight</code></strong> は {{domxref("Window")}} インターフェイスの読み取り専用プロパティで、ウィンドウの内部の高さをピクセル単位で返します。水平スクロールバーがあれば、その高さを含みます。</p>

<p><code>innerHeight</code> の値はウィンドウの{{Glossary("layout viewport", "レイアウトビューポート")}}の高さから取られます。幅は {{domxref("Window.innerWidth", "innerWidth")}} プロパティを使用して取ることができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <var>intViewportHeight</var> = window.innerHeight;</pre>

<h3 id="Value" name="Value">値</h3>

<p>整数値で、ウィンドウのレイアウトビューポートの高さをピクセル単位で示します。このプロパティは読み取り専用で、既定値はありません。</p>

<p>ウィンドウの幅を変更するには、 {{domxref("Window.resizeTo", "resizeTo()")}} や {{domxref("Window.resizeBy", "resizeBy()")}} などの寸法変更メソッドの一つを呼び出してください。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>ウィンドウから水平スクロールバーや境界を引いた高さを取得するには、ルートの {{HTMLElement("html")}} 要素の {{domxref("Element.clientHeight", "clientHeight()")}} プロパティを代わりに使用してください。</p>

<p><code>innerHeight</code> および <code>innerWidth</code> はすべてのウィンドウと、ウィンドウのように動作するすべてのオブジェクト、例えばタブやフレームで利用できます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Assuming_a_frameset" name="Assuming_a_frameset">フレームセットの想定</h3>

<pre class="brush:js notranslate">var intFrameHeight = window.innerHeight; // or

var intFrameHeight = self.innerHeight;
// フレームセット内にあるフレームのビューポートの高さを返します

var intFramesetHeight = parent.innerHeight;
// 最も近いフレームセットのビューポートの高さを返します

var intOuterFramesetHeight = top.innerHeight;
// もっとも外側のフレームセットのビューポートの高さを返します
</pre>

<p>{{todo("link to an interactive demo here")}}</p>

<p>ウィンドウの寸法を変更するには、 {{domxref("window.resizeBy()")}} と {{domxref("window.resizeTo()")}} を参照してください。</p>

<p>ウィンドウの外形の高さ、すなわちブラウザーウィンドウ全体の高さを取得するには、 {{domxref("window.outerHeight")}} を参照してください。</p>

<h3 id="Graphical_example" name="Graphical_example">図</h3>

<p>以下の図は <code>outerHeight</code> と <code>innerHeight</code> の違いを示しています。</p>

<p><img alt="innerHeight vs outerHeight illustration" src="/@api/deki/files/213/=FirefoxInnerVsOuterHeight2.png"></p>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td>{{SpecName('CSSOM View', '#dom-window-innerheight', 'window.innerHeight')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.innerHeight")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("window.innerWidth")}}</li>
 <li>{{domxref("window.outerHeight")}}</li>
 <li>{{domxref("window.outerWidth")}}</li>
</ul>
