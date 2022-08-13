---
title: translate
slug: Web/XPath/Functions/translate
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/translate
---
<p>{{ XsltRef() }}</p>

<p><code>translate</code> 関数は、文字列と、その文字列を変換するための文字の集合を評価し、変換された文字列を返します。</p>

<h3 id="Syntax">構文</h3>

<pre class="eval">translate(<em>string</em>, <em>abc</em>, <em>XYZ</em>)
</pre>

<h3 id="Arguments">引数</h3>

<dl>
 <dt><em><code>string</code></em></dt>
 <dd>評価する文字列。</dd>
 <dt><em><code>abc</code></em></dt>
 <dd>置換の対象となる文字を格納した文字列。</dd>
 <dt><em><code>XYZ</code></em></dt>
 <dd>置換に使用する文字を格納した文字列。 例えば <em><code>string</code></em> の中に <em><code>abc</code></em> の 1 文字目が見つかると、それらはすべて <em><code>XYZ</code></em> の 1 文字目に置き換えられる。</dd>
</dl>

<h3 id="Returns">返値</h3>

<p>変換された文字列。</p>

<h3 id="Notes">注</h3>

<p>XPath では、大文字と小文字の変換に使用するための解決策としては、translate 関数はすべての言語において十分なものであるとは言えないと注記されています。 XPath の将来のバージョンでは、大文字と小文字の変換のための関数が追加されるかもしれません。</p>

<p>ですが、現在のところはこの関数が文字列を大文字や小文字に変換するのには最も適しています。</p>

<p>例</p>

<pre class="eval">&lt;xsl:value-of select="translate('The quick brown fox.', 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')" /&gt;
</pre>

<p>出力</p>

<pre class="eval">THE QUICK BROWN FOX.
</pre>

<ul>
 <li><em><code>abc</code></em> が <em><code>XYZ</code></em> よりも長い場合、<em><code>XYZ</code></em> の中に対応する文字がない <em><code>abc</code></em> の文字はすべて削除されます。</li>
</ul>

<p>例</p>

<pre class="eval">&lt;xsl:value-of select="translate('The quick brown fox.', 'brown', 'red')" /&gt;
</pre>

<p>出力</p>

<pre class="eval">The quick red fdx.
</pre>

<ul>
 <li><em><code>XYZ</code></em> に <em><code>abc</code></em> よりも多く文字が含まれている場合、余分な文字は無視されます。</li>
</ul>

<h3 id="Defined">定義</h3>

<p><a class="external" href="http://www.w3.org/TR/xpath#function-translate">XPath 1.0 4.2</a></p>

<h3 id="Gecko_support">Gecko での対応</h3>

<p>対応済み。</p>
