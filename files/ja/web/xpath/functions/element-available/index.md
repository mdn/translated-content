---
title: element-available
slug: Web/XPath/Functions/element-available
tags:
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Functions/element-available
---
<p>{{ XsltRef() }}</p>

<p><code>element-available</code> 関数は、要素が利用可能かどうかを判断し、true または false を返します。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre class="eval">element-available(<em>QName</em> )
</pre>

<h3 id="Arguments" name="Arguments">引数</h3>

<dl>
 <dt><code><em>QName</em></code></dt>
 <dd>有効な QName を評価する必要があります。QName は式のスコープ内の名前空間宣言を使用して展開された名前に展開されます。</dd>
</dl>

<h3 id="Returns" name="Returns">戻り値</h3>

<p>展開された名前が命令の名前である場合にのみ true を返します。展開された名前が XSLT 名前空間 URI と等しい名前空間 URI を持つ場合、XSLT  で定義された要素を参照します。それ以外の場合は拡張要素を参照します。展開された名前が null の名前空間 URI を持つ場合、要素利用可能な関数は false を返します。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p><a class="external" href="http://www.w3.org/TR/xslt#function-element-available">XSLT 1.0 15</a></p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
