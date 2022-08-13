---
title: element.setAttributeNS
slug: Web/API/Element/setAttributeNS
tags:
  - DOM
  - Gecko
  - 翻訳中
translation_of: Web/API/Element/setAttributeNS
---
<p>{{ ApiRef() }}</p>

<h3 id=".E6.A6.82.E8.A6.81" name=".E6.A6.82.E8.A6.81">概要</h3>

<p><code>setAttributeNS</code> は指定の名前空間と名前で新しい属性を追加したり、属性の値を変更します。</p>

<h3 id=".E6.A7.8B.E6.96.87" name=".E6.A7.8B.E6.96.87">構文</h3>

<pre class="eval"><em>element</em>.setAttributeNS(<em>namespace</em>,<em>name</em>,<em>value</em>)
</pre>

<ul>
 <li><code>namespace</code> は属性の名前空間を指定する文字列です。</li>
 <li><code>name</code> はセットしたい属性を特定する文字列です。</li>
 <li><code>value</code> は新しい属性の希望する文字列値です。</li>
</ul>

<h3 id=".E4.BE.8B" name=".E4.BE.8B">例</h3>

<pre class="eval">var d = document.getElementById("d1");
d.setAttributeNS("<span class="nowiki">http://www.mozilla.org/ns/specialspace</span>", "align", "center");
</pre>

<h3 id="Notes" name="Notes">Notes</h3>

<p>{{ DOMAttributeMethods() }}</p>

<h3 id=".E4.BB.95.E6.A7.98" name=".E4.BB.95.E6.A7.98">仕様</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS">DOM Level 2 Core: setAttributeNS</a></p>
