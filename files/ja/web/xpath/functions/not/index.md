---
title: not
slug: Web/XPath/Functions/not
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/not
---
<p>{{ XsltRef() }}</p>

<p><code>not</code> 関数は式を真偽値として評価し、その逆の値を返します。</p>

<h3 id="Syntax">構文</h3>

<pre class="eval">not(<em>expression</em> )
</pre>

<h3 id="Arguments">引数</h3>

<dl>
 <dt><code><em>expression</em></code></dt>
 <dd>この式は <a href="/ja/docs/Web/XPath/Functions/boolean">boolean()</a> 関数の引数として渡された場合とまったく同じように評価されます。</dd>
</dl>

<h3 id="Returns">返値</h3>

<p>false と評価できる式に対しては true を返し、true と評価できる式に対しては false を返します。</p>

<h3 id="Notes">注</h3>

<ul>
 <li>この関数は <a href="/ja/docs/Web/XPath/Functions/boolean">boolean()</a> 関数と同様のふるまいをしますが、返される値はその逆です。</li>
 <li>要素に一部の属性がないことを検査することができます。</li>
</ul>

<pre class="eval">&lt;xsl:for-each match="//a[not(@name and @name = 'badname')]"&gt;
  &lt;!-- iterates over any &lt;a&gt; element in the document, that
       either has no 'name' attribute at all, or it has one,
       but its value is not "badname". --&gt;
&lt;/xsl:template&gt;
</pre>

<h3 id="Defined">定義</h3>

<p><a href="https://www.w3.org/TR/xpath#function-not">XPath 1.0 4.3</a></p>

<h3 id="Gecko_support">Gecko での対応</h3>

<p>対応済み。</p>
