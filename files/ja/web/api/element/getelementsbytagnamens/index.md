---
title: element.getElementsByTagNameNS
slug: Web/API/Element/getElementsByTagNameNS
tags:
  - DOM
  - Gecko
translation_of: Web/API/Element/getElementsByTagNameNS
---
<p>{{ ApiRef() }}</p>

<h3 id=".E6.A6.82.E8.A6.81" name=".E6.A6.82.E8.A6.81">概要</h3>

<p>与えられた名前空間に属し、与えられたタグの名前を持つ要素のリストを返します。</p>

<h3 id=".E6.A7.8B.E6.96.87" name=".E6.A7.8B.E6.96.87">構文</h3>

<pre class="eval"><em>elements</em> =<em> element</em>.getElementsByTagNameNS(<em>namespaceURI</em>,<em>localName</em>)
</pre>

<ul>
 <li><code>elements</code> は見付かった要素のツリーに出現した順に生きた <code>NodeList</code> です。</li>
 <li><code>element</code> は検索を始める要素です。この要素の子孫のみが検索対象になり、そのノード自身は対象になりません。</li>
 <li><code>namespaceURI</code> は検索される要素の名前空間 URI です(<code><a href="/ja/DOM/element.namespaceURI">element.namespaceURI</a></code> を参照)。例えば、XHTML 要素を検索する必要があるなら、XHTML の名前空間 URI <code><span class="nowiki">http://www.w3.org/1999/xhtml</span></code> を使ってください。</li>
 <li><code>localName</code> は探す要素のローカル名か全ての要素にマッチする特別な値 <code>"*"</code> のどちらかです(<code><a href="/ja/DOM/element.localName">element.localName</a></code> 参照)。</li>
</ul>

<h3 id=".E4.BE.8B" name=".E4.BE.8B">例</h3>

<pre class="brush: js">// XHTML 文書の table の多くのセルの配列をチェック。
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "td");
for (var i = 0; i &lt; cells.length; i++) {
    axis = cells[i].getAttribute("axis");
    if ( axis == "year") {
        // データを取得
    }
}
</pre>

<h3 id=".E6.B3.A8.E6.84.8F" name=".E6.B3.A8.E6.84.8F">注意</h3>

<p><code>element.getElementsByTagNameNS</code> は {{ Domxref("document.getElementsByTagNameNS") }} に似ていますが、指定された要素の祖先に限定されるかが異なります。</p>

<h3 id=".E4.BB.95.E6.A7.98" name=".E4.BB.95.E6.A7.98">仕様</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C90942">DOM Level 2 Core: Element.getElementsByTagNameNS</a></p>

<div class="noinclude"> </div>

<p>{{ languages( { "en": "en/DOM/element.getElementsByTagNameNS", "fr": "fr/DOM/element.getElementsByTagNameNS", "pl": "pl/DOM/element.getElementsByTagNameNS" } ) }}</p>
