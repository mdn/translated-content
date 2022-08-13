---
title: Window.innerWidth
slug: Web/API/Window/innerWidth
tags:
  - API
  - CSSOM View
  - HTML DOM
  - Layout
  - Property
  - Reference
  - Window
  - innerWidth
  - width
translation_of: Web/API/Window/innerWidth
---
<div>{{APIRef}}</div>

<p><span class="seoSummary">{{domxref("Window")}} の <strong><code>innerWidth</code></strong> プロパティは読み取り専用で、ウィンドウの内部の幅をピクセル単位で返します。これには垂直スクロールバーがある場合、その幅を含みます。</span></p>

<p>もっと詳細に言えば、<code>innerWidth</code> の値はウィンドウの{{Glossary("layout viewport", "レイアウトビューポート")}}の幅から取られます。ウィンドウの内部の高さは {{domxref("Window.innerHeight", "innerHeight")}} プロパティを使用して取ることができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <var>intViewportWidth</var> = window.innerWidth;</pre>

<h3 id="Value" name="Value">値</h3>

<p>整数値で、ウィンドウのレイアウトビューポートの幅をピクセル単位で示します。このプロパティは読み取り専用で、既定値はありません。</p>

<p>ウィンドウの幅を変更するには、 {{domxref("Window")}} の寸法の変更メソッドのうちの一つ、例えば {{domxref("Window.resizeBy", "resizeBy()")}} や {{domxref("Window.resizeTo", "resizeTo()")}} などを呼び出してください。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>ウィンドウからスクロールバーや境界を引いた幅を取得するには、ルートの {{HTMLElement("html")}} 要素の {{domxref("Element.clientWidth", "clientWidth")}} プロパティを代わりに使用してください。</p>

<p><code>innerWidth</code> はすべてのウィンドウと、ウィンドウのように動作するすべてのオブジェクト、例えばタブやフレームで利用できます。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">// これはビューポートの幅を返す
var intFrameWidth = window.innerWidth;

// これはフレームセット内のフレームビューポートの幅を返す
var intFrameWidth = self.innerWidth;

// これは直近のフレームセットのビューポートの幅を返す
var intFramesetWidth = parent.innerWidth;

// これはもっとも外側のフレームセットのビューポートの幅を返す
var intOuterFramesetWidth = top.innerWidth;</pre>

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
   <td>{{SpecName('CSSOM View', '#dom-window-innerwidth', 'window.innerWidth')}}</td>
   <td>{{Spec2('CSSOM View')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Window.innerWidth")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("window.outerWidth")}}</li>
 <li>{{domxref("window.innerHeight")}}</li>
 <li>{{domxref("window.outerHeight")}}</li>
</ul>
