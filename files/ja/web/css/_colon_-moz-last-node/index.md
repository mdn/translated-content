---
title: ':-moz-last-node'
slug: 'Web/CSS/:-moz-last-node'
tags:
  - CSS
  - CSS Reference
  - Non-standard
translation_of: 'Web/CSS/:-moz-last-node'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<h2 id="Summary" name="Summary">概要</h2>

`:-moz-last-node` [CSS](/ja/docs/Web/CSS) [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)は、ある要素の最後の子ノードの要素に一致します。最後の子要素の後に (スペースではない) テキストがあると一致しないため、{{ Cssxref(":last-child") }} とは動作が異なります。

<p class="note">要素の末尾にある空白文字は `:-moz-last-node` の決定において無視されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">span:-moz-last-node { <em>style プロパティ</em> }
</pre>

<h2 id="Example" name="Example">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">span:-moz-last-node {
  background-color: lime;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;div&gt;
  &lt;span&gt;:-moz-first-node&lt;/span&gt;
  &lt;span&gt;:-moz-last-node&lt;/span&gt;
&lt;/div&gt;
</pre>

{{EmbedLiveSample("Example", "220", "20")}}

<h2 id="参照">参照</h2>

<ul>
 <li>{{cssxref(":-moz-first-node")}}</li>
 <li>{{cssxref(":last-child")}}</li>
</ul>
