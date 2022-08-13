---
title: substring
slug: Web/XPath/Functions/substring
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/substring
---
<p>{{ XsltRef() }}</p>

<p><code>substring</code> 関数は与えられた文字列の一部を返します。</p>

<h3 id="Syntax">構文</h3>

<pre class="eval">substring(<em>string</em> ,<em>start</em> [,<em>length</em>] )
</pre>

<h3 id="Arguments">引数</h3>

<dl>
 <dt><em><code>string</code></em></dt>
 <dd>評価する文字列。</dd>
</dl>

<dl>
 <dt><em><code>start</code></em></dt>
 <dd><em><code>string</code></em>内での部分文字列の開始位置。</dd>
 <dt><em><code>length</code></em>(省略可)</dt>
 <dd>部分文字列の長さ。 省略すると、返される文字列には<em><code>start</code></em> の位置から<em><code>string</code></em> の最後までのすべての文字が格納される。</dd>
</dl>

<h3 id="Returns">返値</h3>

<p>文字列。</p>

<h3 id="Notes">注</h3>

<p>他の XPath 関数と同様に、位置はゼロ始まりではありません。 文字列内の最初の文字の位置は 1 であり、0 ではありません。</p>

<h3 id="Defined">定義</h3>

<p><a href="https://www.w3.org/TR/xpath#function-substring">XPath 1.0 4.2</a></p>

<h3 id="Gecko_support">Gecko での対応</h3>

<p>対応済み。</p>
