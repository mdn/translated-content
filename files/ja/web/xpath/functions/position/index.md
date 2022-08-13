---
title: position
slug: Web/XPath/Functions/position
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/position
---
<p>{{ XsltRef() }}</p>

<p><code>position</code> 関数は、式評価コンテキストのコンテキスト位置に等しい数値を返します。</p>

<h3 id="Syntax">構文</h3>

<pre class="eval">position()
</pre>

<h3 id="Returns">返値</h3>

<p>式評価コンテキストのコンテキスト位置に等しい整数。</p>

<h3 id="Notes">注</h3>

<ul>
 <li>コンテキストにおけるノードの位置はゼロ起点ではないことに注意してください。最初のノードの位置は 1 です。</li>
</ul>

<ul>
 <li>コンテキストはパスのほかの部分によって決定します。</li>
</ul>

<pre class="eval">&lt;xsl:template match="//a[position() = 5]"&gt;
 &lt;!-- このテンプレートは文書内のあらゆる位置にある
         5 番目の a 要素にマッチする --&gt;
&lt;/xsl:template&gt;
</pre>

<pre class="eval">&lt;xsl:template match="//div[@class='foo']/bar[position() = 1]"&gt;
 &lt;!-- このテンプレートは class 属性が "foo" に等しい div 要素の子である
      1 番目の bar 要素にマッチする --&gt;
&lt;/xsl:template&gt;
</pre>

<h3 id="Defined">定義</h3>

<p><a href="https://www.w3.org/TR/xpath#function-position">XPath 1.0 4.1</a></p>

<h3 id="Gecko_support">Gecko での対応</h3>

<p>対応済み。</p>
