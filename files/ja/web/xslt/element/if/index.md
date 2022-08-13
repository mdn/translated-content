---
title: '<xsl:if>'
slug: Web/XSLT/Element/if
tags:
  - XSLT
  - if
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/if
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:if&gt;</code> 要素にはテスト属性とテンプレートが含まれています。テストが真と評価された場合、テンプレートは処理されます。これは、他の言語のif文に似ています。ただし、if-then-elseステートメントの機能を実現するには、<code>&lt;xsl:when&gt;</code> と <code>&lt;xsl:otherwise&gt;</code> の子要素を1つずつ持つ <code>&lt;xsl:choose&gt;</code> 要素を使用します。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:if test=EXPRESSION&gt;
	TEMPLATE
&lt;/xsl:if&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<dl>
 <dt><code>test</code></dt>
 <dd>必要に応じて <code>boolean( )</code> に対して定義されたルールを使用して評価可能な XPath 式を含め、ブール値にします。値が true の場合、テンプレートは処理されます。そうでない場合は何もしません。</dd>
</dl>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<p>なし</p>

<h3 id="Type" name="Type">タイプ</h3>

<p>命令は、テンプレート内に表示されます。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSL section 9.1.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
