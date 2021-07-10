---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
tags:
  - API
  - Boundary
  - Bounding
  - Bounds
  - CSSOM View
  - Client
  - Containing
  - DOM
  - Element
  - Enclosing
  - Method
  - Minimum
  - Rectangle
  - Reference
  - Smallest
  - clientHeight
  - getBoundingClientRect
  - getClientRects
  - offsetHeight
  - scrollHeight
  - メソッド
translation_of: Web/API/Element/getBoundingClientRect
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>Element.getBoundingClientRect()</strong></code> メソッドは、要素の寸法と、そのビューポートに対する位置を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><em>domRect</em> = <em>element</em>.getBoundingClientRect();</pre>

<h3 id="Value" name="Value">値</h3>

<p>返値は、要素に対しての {{domxref("Element.getClientRects", "getClientRects()")}} が返す矩形の集合である {{domxref("DOMRect")}} オブジェクトです。つまり、要素に関連付けられている CSS の境界ボックスのことです。結果は境界ボックス全体を表す読み取り専用の <code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code>, <code>x</code>, <code>y</code>, <code>width</code>, <code>height</code> の各プロパティを持つ、要素全体を含む最小の矩形です。 <code>width</code> と <code>height</code> 以外のプロパティは、<strong>"<em>ビューポート</em></strong><em>の左上を基準</em>"としています。</p>

<p style="display: block;"><img alt="DOMRect 値の説明" src="https://mdn.mozillademos.org/files/15087/rect.png" style="float: right; height: 300px; width: 300px;" title="Explanation of DOMRect values"></p>

<p>空のボーダーボックスは完全に無視されます。もし要素のボーダーボックスの全てが空である場合は、 <code>width</code> と <code>height</code> が 0 で、 <code>top</code> と <code>left</code> は、要素に対する (コンテンツ順での) 最初の CSS ボックスの左上である矩形を返します。</p>

<p>境界矩形を計算するときには、ビューポート領域（または他のスクロール可能な要素）のスクロール量が考慮されます。これは、スクロール位置が変更される度に (その値はビューポートの相対値であり、絶対値ではないため) 矩形の境界線のエッジ (<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>) が変更されることを意味しています。</p>

<p>もし文書の左上隅を基準とする境界矩形が必要な場合は、現在のスクロール位置から独立した境界矩形を取得する <code>top</code> と <code>left</code> プロパティに、現在のスクロール位置を加えるだけです（これらは {{domxref("window.scrollX")}} と {{domxref("window.scrollY")}} で取得できます）。</p>

<h3 id="Cross-browser_fallback" name="Cross-browser_fallback">クロスブラウザーの代替</h3>

<p>高いクロスブラウザーの互換性を必要とするスクリプトでは、 <code>window.scrollX</code> と <code>window.scrollY</code> の代わりに {{domxref("window.pageXOffset")}} と {{domxref("window.pageYOffset")}} を使うことができます。これらのプロパティへのアクセスを使わない、次のようなスクリプトもあります。</p>

<pre class="brush: js notranslate">// For scrollX
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft
// For scrollY
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.scrollTop == 'number' ? t : document.body).scrollTop
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">// rect は left, top, right, bottom, x, y, width, height の 8 つのプロパティを持つ DOMRect オブジェクト
var rect = obj.getBoundingClientRect();
</pre>

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
   <td>{{SpecName("CSSOM View", "#dom-element-getboundingclientrect", "Element.getBoundingClientRect()")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h3 id="Notes" name="Notes">メモ</h3>

<p>モダンブラウザーでは返された <code>DOMRect</code> オブジェクトを変更することが可能ですが、これは <code>DOMRectReadOnly</code> を返す古いバージョンには該当しません。IE と Edge では、返された <a href="https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx"> <code>ClientRect</code></a> オブジェクトに対し、見過ごされたプロパティを追加することができず、<code>x</code> と <code>y</code> を補填することができません。</p>

<p>互換性問題 (下記参照) のため、 <code>left</code>, <code>top</code>, <code>right</code>, <code>bottom</code> のみに頼ることが最も安全です。</p>

<p>返された <code>DOMRect</code> オブジェクトのプロパティは、自身のプロパティではありません。<code>in</code> 演算子や <code>for...in</code> では返されたプロパティを見つけますが、他の <code>Object.keys()</code> のような API では失敗します。さらに予期しないことに、 <code>Object.assign()</code> のような ES2015 やより新しい機能では、返されるプロパティのコピーに失敗します。</p>

<pre class="brush: js notranslate">rect = elt.getBoundingClientRect()
// emptyObj の結果は {}
emptyObj = Object.assign({}, rect)
emptyObj = { ...rect }
{width, ...emptyObj} = rect
</pre>

<p><code>DOMRect</code> の <code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code> の各プロパティは他のプロパティ値から計算されます。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.getBoundingClientRect")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Element.getClientRects", "getClientRects()")}}</li>
 <li><a href="https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx">MSDN: <code>getBoundingClientRect</code></a></li>
 <li><a href="https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx">MSDN: <code>ClientRect</code></a>, an earlier version of <code>DOMRect</code></li>
</ul>
