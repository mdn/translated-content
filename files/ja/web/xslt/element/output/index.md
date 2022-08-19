---
title: '<xsl:output>'
slug: Web/XSLT/Element/output
tags:
  - XSLT
  - output
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/output
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:output&gt;</code> 要素は出力文書の特性を制御します。Netscape で正しく機能するには、method 属性を持つこの要素を使用する必要があります。 7.0より <code>method="text"</code> は期待通りに機能します。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:output
	method="xml" | "html" | "text"
	version=STRING
	encoding=STRING
	omit-xml-declaration="yes" | "no"
	standalone="yes" | "no"
	doctype-public=STRING
	doctype-system=STRING
	cdata-section-elements=LIST-OF-NAMES
	indent="yes" | "no"
	media-type=STRING  /&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<p>なし</p>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<dl>
 <dt><code>method</code></dt>
 <dd>出力形式を指定します。</dd>
</dl>

<dl>
 <dt><code>version</code></dt>
 <dd>出力文書内の XML 宣言または HTML 宣言の version 属性の値を指定します。この属性は <code>method="html"</code> または <code>method="xml"</code> の場合にのみ使用されます。</dd>
</dl>

<dl>
 <dt><code>encoding</code></dt>
 <dd>出力文書の <code>encoding</code> 属性の値を指定します。</dd>
</dl>

<dl>
 <dt><code>omit-xml-declaration</code></dt>
 <dd>XML宣言を出力に含めるかどうかを示します。許容可能な値は "<code>yes</code>" または "<code>no</code>" です。</dd>
</dl>

<dl>
 <dt><code>standalone</code> (サポートされていません)</dt>
 <dd>存在する場合、出力文書でスタンドアロン宣言が発生しその値が返されることを示します。許容可能な値は "yes" または "no" です。</dd>
</dl>

<dl>
 <dt><code>doctype-public</code></dt>
 <dd>出力文書の <code>DOCTYPE</code> 宣言の <code>PUBLIC</code> 属性の値を指定します。</dd>
</dl>

<dl>
 <dt><code>doctype-system</code></dt>
 <dd>出力文書の <code>DOCTYPE</code> 宣言の <code>SYSTEM</code> 属性の値を指定します。</dd>
</dl>

<dl>
 <dt><code>cdata-section-elements</code></dt>
 <dd>テキストの内容を <code>CDATA</code> セクションとして記述する要素をリストします。要素は空白で区切る必要があります。</dd>
</dl>

<dl>
 <dt><code>indent</code> (サポートされていません)</dt>
 <dd>階層構造を示すために出力を字下げするかどうかを指定します。</dd>
</dl>

<dl>
 <dt><code>media-type</code> (サポートされていません)</dt>
 <dd>出力ドキュメントの MIME タイプを指定します。</dd>
</dl>

<h3 id="Type" name="Type">タイプ</h3>

<p>最上位は子 <code>&lt;xsl:stylesheet&gt;</code> または <code>&lt;xsl:transform&gt;</code> である必要があります。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 16.</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>部分的なサポート。上記のコメントを参照してください。</p>
