---
title: node-set
slug: Web/EXSLT/exsl/node-set
tags:
  - EXSLT
  - XSLT
  - XSLT_Reference
translation_of: Web/EXSLT/exsl/node-set
---
<p>
{{ XsltRef() }}
</p><p><br>
<code>exsl:node-set()</code>は、<code>xsl:variable</code>の値を取得するための選択属性の代わりに、<code>xsl:variable</code>を見た時に得られる返却ツリー・フラグメントからノードセットを返します。これにより、変数内に生成されたXMLを複数ステップで処理させることができる。
</p><p>また、文字列をテキストノードに変換するために<code>exsl:node-set()</code>を使うことができます。
</p>
<h3 id="Syntax" name="Syntax"> Syntax </h3>
<pre class="eval">exsl:node-set(<i>object</i>)
</pre>
<h3 id="Arguments" name="Arguments"> Arguments </h3>
<dl><dt><code><i>object</i></code>
</dt><dd>対応するノードセットを返却するためのオブジェクト
</dd></dl>
<h3 id="Returns" name="Returns"> Returns </h3>
<p>指定された<code><i>object</i></code>に対応するノードセット
</p>
<h3 id="Defined" name="Defined"> Defined </h3>
<p><a href="http://www.exslt.org/regexp/functions/node-set/index.html" class="external">EXSLT - EXSL:NODE-SET</a>
</p>
<h3 id="Gecko_support" name="Gecko_support"> Gecko support </h3>
<p>Gecko 1.9およびそれ以降でサポートされる。
</p><p><br>
</p>
<div class="noinclude">
</div>
{{ languages( { "en": "en/EXSLT/exsl/node-set", "es": "es/EXSLT/exsl/node-set", "fr": "fr/EXSLT/exsl/node-set" } ) }}
