---
title: EXSLT
slug: Web/EXSLT
tags:
  - EXSLT
  - XSLT
  - XSLT_Reference
translation_of: Web/EXSLT
---
<p>{{XSLTRef}}</p>

<div>
<section id="Quick_links">
<ol>
 <li><strong><a href="/ja/docs/Web/XSLT">XSLT</a></strong></li>
 <li><strong><a href="/ja/docs/Web/EXSLT">EXSLT</a></strong></li>
 <li><strong><a href="/ja/docs/Web/XPath">XPath</a></strong></li>
 <li class="toggle">
  <details open><summary><a href="/ja/docs/Web/EXSLT/exsl">Common (exsl)</a></summary>{{ListSubpagesForSidebar("/ja/docs/EXSLT/exsl", "", "", "exsl:", ")")}}</details>
 </li>
 <li class="toggle">
  <details open><summary><a href="/ja/docs/Web/EXSLT/math">Math (math)</a></summary>{{ListSubpagesForSidebar("/ja/docs/EXSLT/math", "", "", "math:", ")")}}</details>
 </li>
 <li class="toggle">
  <details open><summary><a href="/ja/docs/Web/EXSLT/regexp">Regular expressions (regexp)</a></summary>{{ListSubpagesForSidebar("/ja/docs/EXSLT/regexp", "", "", "regexp:", ")")}}</details>
 </li>
 <li class="toggle">
  <details open><summary><a href="/ja/docs/Web/EXSLT/set">Sets (set)</a></summary>{{ListSubpagesForSidebar("/ja/docs/EXSLT/set", "", "", "set:", ")")}}</details>
 </li>
 <li class="toggle">
  <details open><summary><a href="/ja/docs/Web/EXSLT/str">Strings (str)</a></summary>{{ListSubpagesForSidebar("/ja/docs/EXSLT/str", "", "", "str:", ")")}}</details>
 </li>
</ol>
</section>
{{QuickLinksWithSubpages("/ja/docs/EXSLT")}}</div>



<p>EXSLTは <a href="/ja/XSLT">XSLT</a>の拡張です. 幾つかのモジュールがある。Firefox にサポートされているものを以下に示す:</p>

<dl>
 <dt><a href="#Common">Common</a> (<code>exsl</code>)</dt>
 <dd>基本的な拡張要素と関数。</dd>
 <dt><a href="#Math">Math</a> (<code>math</code>)</dt>
 <dd>ノード比較ルーチン。</dd>
 <dt><a href="#Regular_expressions">Regular expressions</a> (<code>regexp</code>)</dt>
 <dd>JavaScriptスタイル正規表現を扱う。</dd>
 <dt><a href="#Sets">Sets</a> (<code>set</code>)</dt>
 <dd>集合操作ルーチン。</dd>
 <dt><a href="#Strings">Strings</a> (<code>str</code>)</dt>
 <dd>文字列操作関数。</dd>
</dl>

<h3 id="EXSLT.E4.BD.BF.E7.94.A8.E6.96.B9.E6.B3.95" name="EXSLT.E4.BD.BF.E7.94.A8.E6.96.B9.E6.B3.95">EXSLT使用方法</h3>

<p>EXSLT拡張を使用するためには、スタイルシートに拡張名前空間として名前空間を宣言する必要があります。 例）正規表現パッケージの使用:</p>

<pre class="eval">&lt;xsl:stylesheet version="1.0"
                xmlns:xsl="<a class="external" href="http://www.w3.org/1999/XSL/Transform" rel="freelink">http://www.w3.org/1999/XSL/Transform</a>"
                xmlns:regexp="<a class="external" href="http://exslt.org/regular-expressions" rel="freelink">http://exslt.org/regular-expressions</a>"
                extension-element-prefixes="regexp"&gt;

&lt;xsl:import href="regexp.xsl" /&gt;

...

&lt;/xsl:stylesheet&gt;
</pre>

<h3 id="Common" name="Common">Common</h3>

<p>　EXSLT CommonパッケージはXSLTの機能に関わる基本関数を提供します。Commonパッケージの名前空間は <code><span class="nowiki">http://exslt.org/common</span></code>.</p>

<h4 id="Functions" name="Functions">Functions</h4>

<ul>
 <li><a href="/ja/EXSLT/exsl/node-set">exsl:node-set</a></li>
 <li><a href="/ja/EXSLT/exsl/object-type">exsl:object-type</a></li>
</ul>

<h3 id="Math" name="Math">Math</h3>

<p>EXSLT Mathパッケージは数値とノード比較に関わる関数を提供する。Mathパッケージの名前空間は <code><span class="nowiki">http://exslt.org/math</span></code>.</p>

<h4 id="Functions_2" name="Functions_2">Functions</h4>

<ul>
 <li><a href="/ja/EXSLT/math/highest">math:highest</a></li>
 <li><a href="/ja/EXSLT/math/lowest">math:lowest</a></li>
 <li><a href="/ja/EXSLT/math/max">math:max</a></li>
 <li><a href="/ja/EXSLT/math/min">math:min</a></li>
</ul>

<h3 id="Regular_expressions" name="Regular_expressions">Regular expressions</h3>

<p>EXSLT Regular ExpressionsパッケージはJavaScriptスタイルの正規表現を使った、 検査(test)、検索(match)、および置換(replace)を行う関数を提供する。</p>

<p>Regular Expressionsの名前空間は <code><span class="nowiki">http://exslt.org/regular-expressions</span></code>.</p>

<h4 id="Functions_3" name="Functions_3">Functions</h4>

<ul>
 <li><a href="/ja/EXSLT/regexp/match">regexp:match</a></li>
 <li><a href="/ja/EXSLT/regexp/replace">regexp:replace</a></li>
 <li><a href="/ja/EXSLT/regexp/test">regexp:test</a></li>
</ul>

<h3 id="Sets" name="Sets">Sets</h3>

<p>EXSLT Setsパッケージは集合操作関数を提供する。Setsパッケージの名前空間は</p>

<pre class="eval"><code><span class="nowiki">http://exslt.org/sets</span></code>.
</pre>

<h4 id="Functions_4" name="Functions_4">Functions</h4>

<ul>
 <li><a href="/ja/EXSLT/set/difference">set:difference</a></li>
 <li><a href="/ja/EXSLT/set/distinct">set:distinct</a></li>
 <li><a href="/ja/EXSLT/set/intersection">set:intersection</a></li>
 <li><a href="/ja/EXSLT/set/has-same-node">set:has-same-node</a></li>
 <li><a href="/ja/EXSLT/set/leading">set:leading</a></li>
 <li><a href="/ja/EXSLT/set/trailing">set:trailing</a></li>
</ul>

<h3 id="Strings" name="Strings">Strings</h3>

<p>EXSLT Stringsパッケージは文字列操作関数を提供する。 Stringsパッケージの名前空間は<code><span class="nowiki">http://exslt.org/sets</span></code>.</p>

<h4 id="Functions_5" name="Functions_5">Functions</h4>

<ul>
 <li><a href="/ja/EXSLT/str/concat">str:concat</a></li>
 <li><a href="/ja/EXSLT/str/split">str:split</a></li>
 <li><a href="/ja/EXSLT/str/tokenize">str:tokenize</a></li>
</ul>

<h4 id="Functions_6" name="Functions_6">Functions</h4>

<ul>
 <li><a href="/ja/EXSLT/regexp/match">regexp:match</a></li>
 <li><a href="/ja/EXSLT/regexp/replace">regexp:replace</a></li>
 <li><a href="/ja/EXSLT/regexp/test">regexp:test</a></li>
</ul>

<h3 id="See_also" name="See_also">See also</h3>

<ul>
 <li><a class="external" href="http://www.exslt.org/">EXSLT web site</a></li>
</ul>

<p>&lt;/div&gt;</p>

<p>{{ languages( { "en": "en/EXSLT", "es": "es/EXSLT", "fr": "fr/EXSLT", "pl": "pl/EXSLT" } ) }}</p>
