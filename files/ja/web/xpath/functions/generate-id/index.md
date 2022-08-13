---
title: generate-id
slug: Web/XPath/Functions/generate-id
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/generate-id
---
<p>{{ XsltRef() }}</p>

<p><code>generate-id</code>関数は、指定されたノード集合の最初のノードの一意のIDを生成し、そのIDを含む文字列を返します。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre class="eval">generate-id( [<em>node-set</em>] )
</pre>

<h3 id="Arguments" name="Arguments">引数</h3>

<dl>
 <dt><code><em>node-set</em></code> (任意)</dt>
 <dd>このノード集合の最初のノードに対してIDが生成されます。省略すると、現在のコンテキストノードが使用されます。</dd>
</dl>

<h3 id="Returns" name="Returns">戻り値</h3>

<p>生成されたIDを含む文字列。</p>

<h3 id="Notes" name="Notes">注記</h3>

<ul>
 <li>同じIDは、現在の変換で現在の文書の同じノードに対して毎回生成されなければなりません</li>
</ul>

<ul>
 <li>生成されたIDは、その後の変換では同じではない可能性があります</li>
</ul>

<p>この関数はXPathへのXSLT固有の追加です。コアXPath関数ライブラリの一部ではありません。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p><a class="external" href="http://www.w3.org/TR/xslt#function-generate-id">XSLT 1.0 12.4</a></p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
