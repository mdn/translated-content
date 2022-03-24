---
title: ':-moz-first-node'
slug: 'Web/CSS/:-moz-first-node'
tags:
  - CSS
  - CSS Reference
  - Non-standard
translation_of: 'Web/CSS/:-moz-first-node'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<h2 id="Summary" name="Summary">概要</h2>

`:-moz-first-node` [CSS](/ja/docs/Web/CSS) [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)は、ある要素の最初の子ノードの要素に一致します。最初の子要素の前に (スペースではない) テキストがあると一致しないため、{{Cssxref(":first-child")}} とは動作が異なります。

<p class="note">要素の先頭にある空白文字は `:-moz-first-node` の決定において無視されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>span</var>:-moz-first-node { <em>style プロパティ</em> }
</pre>

<h2 id="Example" name="Example">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">span:-moz-first-node {
  background-color: lime;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush:html"><div>
  <span>:-moz-first-node</span>
  <span>:-moz-last-node</span>
</div>
</pre>

{{EmbedLiveSample("Example", "220", "20")}}

<h2 id="参照">参照</h2>

<ul>
 <li>{{cssxref(":-moz-last-node")}}</li>
 <li>{{cssxref(":first-child")}}</li>
</ul>
