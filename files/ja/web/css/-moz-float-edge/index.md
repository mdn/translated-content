---
title: '-moz-float-edge'
slug: Web/CSS/-moz-float-edge
tags:
  - CSS
  - CSS Property
  - 'CSS:Mozilla Extensions'
  - Layout
  - NeedsCompatTable
  - Non-standard
  - 'recipe:css-property'
translation_of: Web/CSS/-moz-float-edge
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>非標準の <strong><code>-moz-float-edge</code></strong> <a href="/ja/docs/Web/CSS">CSS</a> プロパティは要素の高さと幅のプロパティが margin 、border 、padding の厚さを含んでいるのかを指定します。</p>

<pre class="brush:css no-line-numbers notranslate">/* Keyword values */
-moz-float-edge: border-box;
-moz-float-edge: content-box;
-moz-float-edge: margin-box;
-moz-float-edge: padding-box;

/* Global values */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>border-box</code></dt>
 <dd>高さと幅のプロパティがコンテンツ、padding および border を含むが、margin は含まない。</dd>
 <dt><code>content-box</code></dt>
 <dd>高さと幅のプロパティがコンテンツを含むが、padding 、border および margin は含まない。</dd>
 <dt><code>margin-box</code></dt>
 <dd>高さと幅のプロパティがコンテンツ、padding 、 border および margin を含む。</dd>
 <dt><code>padding-box</code></dt>
 <dd>高さと幅のプロパティがコンテンツと padding を含むが、border および margin は含まない。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">形式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="html prettyprint notranslate"><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"box"</span><span class="tag">&gt;</span><span class="pln"> </span>
<span class="pln">  </span><span class="tag">&lt;p&gt;</span><span class="pln">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span><span class="tag">&lt;/p&gt;</span><span class="pln">
</span><span class="tag">&lt;/div&gt;</span></pre>

<h3 id="CSS" name="CSS">CSS</h3>

<pre class="brush: css notranslate">.box {
  display: <span class="highVAL">block</span>;
  height: 5px;
  margin: 0.5em auto 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
} </pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Examples') }}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>このプロパティはどの CSS 標準でも定義されていません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの対応</h2>



<p>{{Compat("css.properties.-moz-float-edge")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{bug(432891)}}</li>
</ul>
