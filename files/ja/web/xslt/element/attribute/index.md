---
title: '<xsl:attribute>'
slug: Web/XSLT/Element/attribute
tags:
  - XSLT
  - リファレンス
  - 属性
  - 要素
translation_of: Web/XSLT/Element/attribute
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:attribute&gt;</code> 要素は、スタイルシートからアクセス可能な任意の値を使用して出力文書に属性を作成します。要素は属性値を設定する出力文書要素内の他の出力文書要素の前に定義する必要があります。しかし、( <code>&lt;xsl:choose&gt;</code> や <code>&lt;xsl:apply-templates&gt;</code> などのように) 出力の一部ではない要素の後または内部にある可能性があります。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:attribute name=NAME namespace=URI&gt;
	TEMPLATE
&lt;/xsl:attribute&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>出力文書に作成する属性の名前を指定します。名前は有効な QName でなければなりません。</dd>
</dl>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<dl>
 <dt><code>namespace</code></dt>
 <dd>この属性の名前空間 URI を出力文書に定義します。関連する名前空間プレフィックスをこの要素で設定することはできません。</dd>
</dl>

<h3 id="Type" name="Type">タイプ</h3>

<p>命令は、テンプレートまたは <code>&lt;xsl:attribute-set&gt;</code> 要素内に現れます。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 7.1.3.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
