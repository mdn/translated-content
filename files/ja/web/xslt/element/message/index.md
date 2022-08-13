---
title: '<xsl:message>'
slug: Web/XSLT/Element/message
tags:
  - XSLT
  - message
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/message
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:message&gt;</code> 要素は (NS の JavaScript コンソールに) メッセージを出力し、オプションでスタイルシートの実行を終了します。これはデバッグに便利です。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:message terminate="yes" | "no" &gt;
	TEMPLATE
&lt;/xsl:message&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<p>なし</p>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<dl>
 <dt><code>terminate</code></dt>
 <dd>"<code>yes</code>" に設定すると実行を終了する必要があります。デフォルト値は "<code>no</code>" です。この場合メッセージが出力され、実行が続行されます。</dd>
</dl>

<h3 id="Type" name="Type">タイプ</h3>

<p>命令は、テンプレート内に表示されます。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 13.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
