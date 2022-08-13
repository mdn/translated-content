---
title: '<xsl:preserve-space>'
slug: Web/XSLT/Element/preserve-space
tags:
  - XSLT
  - preserve-space
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/preserve-space
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:preserve-space&gt;</code> 要素は空白を保存する要素をソース文書内で定義します。複数の要素がある場合は、名前を空白文字で区切ります。空白を保持するのがデフォルト設定なので、この要素は <code>&lt;xsl:strip-space&gt;</code> 要素を打ち消すために使用する必要があります。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:preserve-space elements=LIST-OF-ELEMENT-NAMES  /&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<dl>
 <dt><code>elements</code></dt>
 <dd>空白を保持する要素を指定します。</dd>
</dl>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<p>なし</p>

<h3 id="Type" name="Type">タイプ</h3>

<p>トップレベル、 <code>&lt;xsl:stylesheet&gt;</code> または <code>&lt;xsl:transform&gt;</code> の子である必要があります。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 3.4</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>サポート済み</p>
