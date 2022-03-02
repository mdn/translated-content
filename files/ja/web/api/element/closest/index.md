---
title: Element.closest()
slug: Web/API/Element/closest
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
  - メソッド
translation_of: Web/API/Element/closest
---
<div>{{APIRef('DOM')}}</div>

<div><code><strong>closest()</strong></code> メソッドは、要素とその親 (文書ルートに向かって) を、指定されたセレクター文字列に一致するノードが見つかるまで探索します。自分自身または一致する祖先を返します。そのような要素が存在しない場合は、 <code>null</code> を返します。

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <var>closestElement</var> = <var>targetElement</var>.closest(<var>selectors</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<ul>
 <li><code><var>selectors</var></code> は {{domxref("DOMString")}} で、セレクターのリストを指定します。<br>
  例: <code>p:hover, .toto + q</code></li>
</ul>

<h3 id="Return_value" name="Return_value">返値</h3>

<ul>
 <li><code><var>closestElement</var></code> は選択された要素の直近の祖先に当たる {{domxref("Element")}} です。 <code>null</code> になることがあります。</li>
</ul>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<ul>
 <li><code><var>selectors</var></code> が妥当なセレクターリストの文字列ではない場合、 {{exception("SyntaxError")}} が投げられます。</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;article&gt;
  &lt;div id="div-01"&gt;Here is div-01
    &lt;div id="div-02"&gt;Here is div-02
      &lt;div id="div-03"&gt;Here is div-03&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/article&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");
// id=div-02 である要素を返す

var r2 = el.closest("div div");
// div の中にある div である直近の祖先、ここでは div-03 自身を返す

var r3 = el.closest("article &gt; div");
// 親に article を持つ div である直近の祖先、ここでは div-01 を返す

var r4 = el.closest(":not(div)");
// div ではない直近の祖先、ここではもっとも外側の article を返す</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>Element.closest()</code> に対応していないブラウザーで、 <code>element.matches()</code> (または接頭辞付きの同等のもの、すなわち IE9+) に対応しているものには、ポリフィルがあります。</p>

<pre class="brush: js">if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null &amp;&amp; el.nodeType === 1);
    return null;
  };
}</pre>

<p>しかし、本当に IE 8 の対応が必要な場合は、以下のポリフィルがとても遅い処理ながら、結果を出すことができます。但し、 IE 8 は CSS 2.1 のセレクターにしか対応しておらず、本番のウェブサイトが極端に遅くなる原因となることがあります。</p>

<pre class="brush: js">if (window.Element &amp;&amp; !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i &gt;= 0 &amp;&amp; matches.item(i) !== el) {};
    } while ((i &lt; 0) &amp;&amp; (el = el.parentElement));
    return el;
  };
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
   <td>{{SpecName('DOM WHATWG', '#dom-element-closest', 'Element.closest()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.Element.closest")}}</p>

<h3 id="Compatibility_notes" name="Compatibility_notes">互換性のメモ</h3>

<ul>
 <li>Edge 15-18 では、要素が最初に（直接的または間接的に）コンテキストオブジェクト、例えば通常の DOM の場合は {{domxref("Document")}} オブジェクトに接続されていない場合、 <code>document.createElement(tagName).closest(tagName)</code> が <code>null</code> を返します。</li>
</ul>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Element")}} インターフェイス</li>
 <li>
  <div class="syntaxbox"><a href="/ja/docs/Web/Guide/CSS/Getting_started/Selectors">セレクターの構文</a></div>
 </li>
 <li>
  <div class="syntaxbox">Other methods that take selectors: {{domxref("element.querySelector()")}} and {{domxref("element.matches()")}}.</div>
 </li>
</ul>
</div>
