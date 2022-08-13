---
title: '<xsl:choose>'
slug: Web/XSLT/Element/choose
tags:
  - XSLT
  - choose
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/choose
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:choose&gt;</code> 要素はいくつかの選択肢の中から選択肢を定義します。 手続き型言語の switch 文のように振る舞います。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:choose&gt;
    &lt;xsl:when test="[whatever to test1]"&gt;&lt;/xsl:when&gt;
    &lt;xsl:when test="[whatever to test2]"&gt;&lt;/xsl:when&gt;
    &lt;xsl:otherwise&gt;&lt;/xsl:otherwise&gt; [optional]
&lt;/xsl:choose&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<p>なし</p>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<p>なし</p>

<h3 id="Type" name="Type">タイプ</h3>

<p>インストラクションはテンプレートとともに表示されます。1つまたは複数の <code>&lt;xsl:when&gt;</code> 要素と、オプションで最後の <code>&lt;xsl:otherwise&gt;</code> 要素を含みます。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 9.2.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
