---
title: number
slug: Web/XPath/Functions/number
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/number
---
<p>{{ XsltRef() }}</p>

<p><code>number</code> 関数はオブジェクトを数値に変換し、その数値を返します。</p>

<h3 id="Syntax">構文</h3>

<pre class="eval">number( [<em>object</em>] )
</pre>

<h3 id="Arguments">引数</h3>

<dl>
 <dt><em><code>object</code></em>(省略可)</dt>
 <dd>数値に変換するオブジェクト。引数を省略すると、現在のコンテキストノードが使用されます。</dd>
</dl>

<h3 id="Returns">返値</h3>

<p>オブジェクトを変換した結果として得られる数値。</p>

<h3 id="Notes">注</h3>

<ul>
 <li>文字列は、文字列内で数値の前にある空白文字を取り除き、数値の後にある空白文字を無視することによって数値に変換されます。文字列がこのパターンに一致しない場合は、NaN に変換されます。</li>
 <li>真偽値 true は 1 に変換され、 false は 0 に変換されます。</li>
 <li>ノード集合は、まず <a href="/ja/docs/Web/XPath/Functions/string">string()</a> 関数を呼び出したかのように文字列に変換され、それから文字列の引数と同じ方法で変換されます。</li>
 <li>4 つの基本型以外の型のオブジェクトは、その型に応じた方法で数値に変換されます。</li>
</ul>

<h3 id="Defined">定義</h3>

<p><a href="https://www.w3.org/TR/xpath#function-number">XPath 1.0 4.4</a></p>

<h3 id="Gecko_support">Gecko での対応</h3>

<p>対応済み。</p>
