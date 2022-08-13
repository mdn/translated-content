---
title: '<xsl:copy>'
slug: Web/XSLT/Element/copy
tags:
  - XSLT
  - copy
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/copy
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:copy&gt;</code> 要素は、現在のノードの浅いコピー (ノードおよび関連する名前空間ノード) を出力ドキュメントに転送します。現在のノードの子または属性はコピーされません。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:copy use-attribute-sets=LIST-OF-NAMES&gt;
	TEMPLATE
&lt;/xsl:copy&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<p>なし</p>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<dl>
 <dt><code>use-attribute-sets</code></dt>
 <dd>要素であれば、出力ノードに適用される属性セットをリストします。 セットの名前は空白文字で区切る必要があります。</dd>
</dl>

<h3 id="Type" name="Type">タイプ</h3>

<p>命令は、テンプレート内に表示されます。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 7.5.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
