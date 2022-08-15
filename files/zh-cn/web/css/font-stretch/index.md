---
title: font-stretch
slug: Web/CSS/font-stretch
translation_of: Web/CSS/font-stretch
---
<p>{{CSSRef}}</p>

<h2 id="Summary">Summary</h2>

<p><strong><code>font-stretch</code></strong> 属性为字体定义一个正常或经过伸缩变形的字体外观，这个属性并不会通过伸展/缩小而改变字体的几何外形，如{{cssxref("font-feature-settings")}}和{{cssxref("font-variant")}}属性，它仅仅意味着当有多种字体可供选择时，会为字体选择最适合的大小。</p>

<p><img alt="The two 'e' belong to the same fonts. One is condensed, the other normal and can be selected by 'font-stretch'." src="/files/4321/Character_in_same_font_but_one_condensed.png" style="display: block; height: 92px; margin: auto; width: 188px;"></p>

<p>{{cssinfo}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css">/* Keyword values */
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: normal;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* Global values */
font-stretch: inherit;
font-stretch: initial;
font-stretch: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>指定默认字体</dd>
 <dt><code>semi-condensed</code>, <code>condensed</code>, <code>extra-condensed</code>, <code>ultra-condensed</code></dt>
 <dd>小于默认字体，其中 ultra-condensed 是缩的最小的字体</dd>
 <dt><code>semi-expanded</code>, <code>expanded</code>, <code>extra-expanded</code>, <code>ultra-expanded</code></dt>
 <dd>大于默认字体的值</dd>
</dl>

<h3 id="Interpolation">Interpolation</h3>

<p>Font stretch values are interpolated in discrete steps. The interpolation happens as though the ordered values are equally spaced real numbers; the result is rounded to the nearest value, with values exactly halfway between two values rounded towards the later value, that is the most expanded one.</p>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="ultra stretch"&gt; This is text with the font extremely expanded&lt;/div&gt;
&lt;div class="stretch"&gt; This is text with the font stretched&lt;/div&gt;
&lt;div class="normal"&gt; This is text without font stretching&lt;/div&gt;
&lt;div class="condensed"&gt; This is text with the font condensed&lt;/div&gt;
&lt;div class="ultra condensed"&gt; This is text with the font extremely condensed&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.ultra.stretch{font-stretch: ultra-expanded;}
.stretch {font-stretch: expanded;}
.normal {font-stretch: normal;}
.condensed {font-stretch: condensed;}
.ultra.condensed {font-stretch: ultra-condensed;}</pre>

<h3 id="Result">Result</h3>

<p>{{ EmbedLiveSample('Example', '500', '', '', 'Web/CSS/font-stretch') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<p>The CSS property <code>font-stretch</code> was initially defined in CSS 2, but dropped in CSS 2.1 due to lack of implementation experience. It has been newly defined in CSS 3.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat("css.properties.font-stretch")}}
