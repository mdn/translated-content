---
title: namespace-uri
slug: Web/XPath/Functions/namespace-uri
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/namespace-uri
---
<p>{{ XsltRef() }}</p>

<p><code>namespace-uri</code> 関数は、指定されたノード集合内の最初のノードの名前空間 URI を表す文字列を返します。</p>

<h3 id="Syntax">構文</h3>

<pre class="eval">namespace-uri( [<em>node-set</em>] )
</pre>

<h3 id="Arguments">引数</h3>

<dl>
 <dt><code><em>node-set</em></code> (省略可)</dt>
 <dd>このノード集合内の最初のノードの名前空間 URI が返されます。引数を省略すると、現在のコンテキストノードが使用されます。</dd>
</dl>

<h3 id="Returns">返値</h3>

<p>指定されたノードが属する名前空間の URI を表す文字列。</p>

<h3 id="Notes">注</h3>

<ul>
 <li>指定されたノードが特定の名前空間を持たなければ、空文字列が返されます。</li>
</ul>

<ul>
 <li>要素ノードおよび属性ノード以外のノードに対しては、常に空文字列が返されます。</li>
</ul>

<h3 id="Defined">定義</h3>

<p><a href="https://www.w3.org/TR/xpath#function-local-name">XPath 1.0 4.1</a></p>

<h3 id="Gecko_support">Gecko での対応</h3>

<p>対応済み。</p>
