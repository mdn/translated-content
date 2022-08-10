---
title: page-break-after
slug: Web/CSS/page-break-after
tags:
  - page-break-after
  - page-break-after & break-after
translation_of: Web/CSS/page-break-after
---


<div>{{CSSRef}}</div>

<p><strong><code>page-break-after</code></strong> CSS 属性调整当前元素之后的分页符。</p>

<p>此属性适用于生成一个盒子的块元素。它不适用于不会生成一个盒子的空 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a>。</p>



<pre class="notranslate"><code>/* Keyword values */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Global values */
page-break-after: inherit;
page-break-after: initial;
page-break-after: unset;</code></pre>



<div class="note">
<p><strong>Note:</strong> 这个属性正在被更通用的 {{ cssxref("break-after")}} 取代。这个新的属性也处理列和区域中断，并在语法上兼容 <code>page-break-after</code>。</p>

<p>在使用 <code>page-break-after</code> 之前，请检查是否可以使用 <code>break-after</code> 代替。在将来， <code>page-break-after</code> 将只是它的一些值的别名。</p>
</div>





<h2 id="语法">语法</h2>

<pre class="brush:css notranslate">/* Keyword values */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Global values */
page-break-after: inherit;
page-break-after: initial;
page-break-after: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>初始值。自动分页符（既不强制也不禁止）。</dd>
 <dt><code>always</code></dt>
 <dd>始终在元素后强制分页。</dd>
 <dt><code>avoid</code></dt>
 <dd>避免在元素后出现分页符。</dd>
 <dt><code>left</code></dt>
 <dd>在元素之后足够的分页符，一直到一张空白的左页为止。</dd>
 <dt><code>right</code></dt>
 <dd>在元素之后足够的分页符，一直到一张空白的右页为止。</dd>
 <dt><code>recto</code> {{experimental_inline}}</dt>
 <dd>If pages progress left-to-right, then this acts like <code>right</code>. If pages progress right-to-left, then this acts like <code>left</code>.</dd>
 <dt><code>verso</code> {{experimental_inline}}</dt>
 <dd>If pages progress left-to-right, then this acts like <code>left</code>. If pages progress right-to-left, then this acts like <code>right</code>.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<pre class="brush: css notranslate">/* move to a new page after footnotes */
div.footnotes {
  page-break-after:always;
}
</pre>

<h2 id="Specification">Specification</h2>

{{Specifications}}

<h2 id="Browser_Compatibility">Browser compatibility</h2>

{{Compat("css.properties.page-break-after")}}

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en/CSS/page-break-before"><code>page-break-before</code></a>, <a href="/en/CSS/page-break-inside"><code>page-break-inside</code></a></li>
 <li><a href="/en/CSS/orphans"><code>orphans</code></a>, <a href="/en/CSS/widows"><code>widows</code></a></li>
</ul>
