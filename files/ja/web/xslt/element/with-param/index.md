---
title: '<xsl:with-param>'
slug: Web/XSLT/Element/with-param
tags:
  - XSLT
  - with-param
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/with-param
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:with-param&gt;</code> 要素はテンプレートに渡すパラメータの値を設定します。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:with-param name=NAME select=EXPRESSION&gt;
	TEMPLATE
&lt;/xsl:with-param&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>このパラメータに名前を付けます。</dd>
</dl>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<dl>
 <dt><code>select</code></dt>
 <dd>XPath 式を使用してパラメータの値を定義します。要素にテンプレートが含まれている場合、この属性は無視されます。</dd>
</dl>

<h3 id="Type" name="Type">タイプ</h3>

<p>サブ命令は常に <code>&lt;xsl:apply-templates&gt;</code> または <code>&lt;xsl:call-template&gt;</code> 要素内に現れます。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT 11.6</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
