---
title: '<xsl:text>'
slug: Web/XSLT/Element/text
tags:
  - Text
  - XSLT
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/text
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:text&gt;</code> 要素はリテラルテキストを出力ツリーに書き込みます。 <code>#PCDATA</code>、リテラルテキスト、およびエンティティ参照を含むことがあります。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:text disable-output-escaping="yes" | "no"&gt;
	TEXT
&lt;/xsl:text&gt; </pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<p>なし</p>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<dl>
 <dt><code>disable-output-escaping</code> (Netscape は変換の結果 - 下の「出力」 - を直列化しませんので、この属性は本質的に文脈上は無関係です。htmlエンティティを出力するには、代わりに数値を使用します (例: <code>&amp;nbsp</code>の <code>&amp;#160</code>) )</dt>
 <dd>出力に書き込まれたときに特殊文字をエスケープするかどうかを指定します。使用可能な値は "<code>yes</code>" または "<code>no</code>" です。たとえば "<code>yes</code>" が設定されている場合、文字&gt;は <code>&gt;</code> ではなく"<code>&amp;gt</code>" として出力されます。</dd>
</dl>

<h3 id="Type" name="Type">タイプ</h3>

<p>命令は、テンプレート内に表示されます。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 7.2</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>注意してサポートされています。</p>
