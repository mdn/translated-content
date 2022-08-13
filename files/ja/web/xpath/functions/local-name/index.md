---
title: local-name
slug: Web/XPath/Functions/local-name
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/local-name
---
<p>{{ XsltRef() }}</p>

<p><code>local-name</code> 関数は、与えられたノード集合内の最初のノードのローカル名 (local name) を表す文字列を返します。</p>

<h3 id="Syntax">構文</h3>

<pre class="eval">local-name( [<em>node-set</em>] )
</pre>

<h3 id="Arguments">引数</h3>

<dl>
 <dt><code><em>node-set</em></code> (省略可)</dt>
 <dd>このノード集合内の最初のノードのローカル名が返されます。引数を省略すると、現在のコンテキストノードが使用されます。</dd>
</dl>

<h3 id="Returns">返値</h3>

<p>文字列。</p>

<h3 id="Notes">注</h3>

<ul>
 <li>ローカル名は展開名 (<a href="https://www.w3.org/TR/xpath#dt-expanded-name">expanded-name</a>) のローカル部分です。</li>
</ul>

<h3 id="Defined">定義</h3>

<p><a href="https://www.w3.org/TR/xpath#function-local-name">XPath 1.0 4.1</a></p>

<h3 id="Gecko_support">Gecko での対応</h3>

<p>対応済み。</p>
