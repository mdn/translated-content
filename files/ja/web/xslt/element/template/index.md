---
title: '<xsl:template>'
slug: Web/XSLT/Element/template
tags:
  - Template
  - XSLT
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/template
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:template&gt;</code> 要素は出力生成テンプレートを定義します。この要素は、match 属性または name 属性のいずれかを持つ必要があります。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:template
	match=PATTERN
	name=NAME
	mode=NAME
	priority=NUMBER&gt;
	&lt;xsl:param&gt; [optional]
	TEMPLATE
&lt;/xsl:template&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<p>なし</p>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<dl>
 <dt><code>match</code></dt>
 <dd>このテンプレートを使用する要素を決定するパターンを指定します。これは <code>name</code> 属性がない場合に必須の属性です。</dd>
</dl>

<dl>
 <dt><code>name</code></dt>
 <dd>このテンプレートの名前を指定します。テンプレートの名前は <code>&lt;xsl:call-template&gt;</code> 要素を使用して呼び出すことができます。</dd>
</dl>

<dl>
 <dt><code>mode</code></dt>
 <dd>このテンプレートの特定のモードを指定します。このモードは <code>&lt;xsl:apply-templates&gt;</code> 要素の属性と一致させることができます。 これは複数の方法で同じ情報を処理する場合に便利です。</dd>
</dl>

<dl>
 <dt><code>priority</code></dt>
 <dd>このテンプレートの数値優先度を指定します。これは <code>Infinity</code> 以外の任意の数にすることができます。複数のテンプレートが同じノードに一致する場合、プロセッサはこの番号を使用します。</dd>
</dl>

<h3 id="Type" name="Type">タイプ</h3>

<p>最上位は <code>&lt;xsl:stylesheet&gt;</code> または <code>&lt;xsl:transform&gt;</code> の子である必要があります。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 5.3.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
