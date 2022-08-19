---
title: '<xsl:attribute-set>'
slug: Web/XSLT/Element/attribute-set
tags:
  - XSLT
  - attribute-set
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/attribute-set
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:attribute-set&gt;</code> 要素は名前付き属性のセットを作成します。属性のセットは、CSSの名前付きスタイルに類似した方法で出力ドキュメント全体に適用されます。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:attribute-set name=NAME use-attribute-sets=LIST-OF-NAMES&gt;
	&lt;xsl:attribute&gt;
&lt;/xsl:attribute-set&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>属性セットの名前を指定します。名前は有効な QName でなければなりません。</dd>
</dl>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<dl>
 <dt><code>use-attribute-sets</code></dt>
 <dd>他の属性セットから属性セットを構築します。寄与する集合の名前は、空白文字で区切られなければならず、直接的または間接的に埋め込まれてはいけません。</dd>
</dl>

<h3 id="Type" name="Type">タイプ</h3>

<p>最上位は <code>&lt;xsl:stylesheet&gt;</code> または <code>&lt;xsl:transform&gt;</code> の子である必要があります。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 7.1.4.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
