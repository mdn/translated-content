---
title: '<xsl:apply-imports>'
slug: Web/XSLT/Element/apply-imports
tags:
  - XSLT
  - apply-imports
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/apply-imports
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:apply-imports&gt;</code> 要素は非常に秘密で、複雑なスタイルシートで主に使用されます。インポートの優先順位では、メインスタイルシートのテンプレートルールは、インポートされたスタイルシートのテンプレートルールより優先される必要があります。ただし、メインスタイルシートの同等のルールではなく、(低い優先順位の) インポートされたスタイルシートからテンプレートルールを使用するようにプロセッサを強制することが可能な場合があります。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:apply-imports/&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<p>なし</p>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<p>なし</p>

<h3 id="Type" name="Type">タイプ</h3>

<p>命令は、テンプレート内に表示されます。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 5.6.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
