---
title: '<xsl:sort>'
slug: Web/XSLT/Element/sort
translation_of: Web/XSLT/Element/sort
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:sort&gt;</code> 要素は、<code>&lt;xsl:apply-templates&gt;</code> または <code>&lt;xsl:for-each&gt;</code> で選択されたノードのソートキーを定義し、それらが処理される順序を決定します。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:sort
	select=EXPRESSION
	order="ascending" | "descending"
	case-order="upper-first" | "lower-first"
	lang=XML:LANG-CODE
	data-type="text" | "number" /&gt; </pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<p>なし</p>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<dl>
 <dt><code>select</code></dt>
 <dd>XPath 式を使用してソートするノードを指定します。</dd>
</dl>

<dl>
 <dt><code>order</code></dt>
 <dd>ノードを "<code>ascending</code>" または "<code>descending</code>" に処理するかどうかを指定します。デフォルトは "<code>ascending</code>" です。</dd>
</dl>

<dl>
 <dt><code>case-order</code></dt>
 <dd>大文字か小文字かを最初に指示するかどうかを示します。許容される値は "<code>upper-first</code>" および "<code>lower-first</code>" である。</dd>
</dl>

<dl>
 <dt><code>lang</code></dt>
 <dd>ソートで使用する言語を指定します。</dd>
</dl>

<dl>
 <dt><code>data-type</code></dt>
 <dd>アイテムをアルファベット順または数値順に並べ替えるかどうかを定義します。 許容される値は "<code>text</code>" と "<code>number</code>" で、"<code>text</code>" がデフォルトです。</dd>
</dl>

<h3 id="Type" name="Type">タイプ</h3>

<p>Subinstructionは常に &lt;xsl:for-each&gt; の子として現れます。テンプレートの適切な場所または &lt;xsl:apply-templates&gt; の前に現れなければなりません。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section10.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
