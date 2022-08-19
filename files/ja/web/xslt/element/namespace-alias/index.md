---
title: '<xsl:namespace-alias>'
slug: Web/XSLT/Element/namespace-alias
tags:
  - XSLT
  - namespace-alias
  - リファレンス
  - 要素
translation_of: Web/XSLT/Element/namespace-alias
---
<p>{{ XsltRef() }}</p>

<p><code>&lt;xsl:namespace-alias&gt;</code> 要素はスタイルシート内の名前空間を出力ツリー内の別の名前空間にマップする、めったに使用されないデバイスです。 この要素の最も一般的な使い方は、別のスタイルシートからスタイルシートを生成することです。通常は <code>xsl:</code>-prefixed リテラルの result 要素 (結果ツリーにそのままコピーする必要があります) がプロセッサによって誤解されるのを防ぐため、出力ツリーの XSLT 名前空間に適切に再変換される一時的な名前空間が割り当てられます。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre>&lt;xsl:namespace-alias stylesheet-prefix=NAME result-prefix=NAME /&gt;</pre>

<h3 id="Required_Attributes" name="Required_Attributes">必須属性</h3>

<dl>
 <dt><code>stylesheet-prefix</code></dt>
 <dd>一時的な名前空間を指定します。</dd>
 <dt><code>result-prefix</code></dt>
 <dd>出力ツリーに必要な名前空間を指定します。</dd>
</dl>

<h3 id="Optional_Attributes" name="Optional_Attributes">任意属性</h3>

<p>なし</p>

<h3 id="Type" name="Type">タイプ</h3>

<p>最上位は <code>&lt;xsl:stylesheet&gt;</code> または <code>&lt;xsl:transform&gt;</code> の子である必要があります。</p>

<h3 id="Defined" name="Defined">定義</h3>

<p>XSLT, section 7.1.1</p>

<h3 id="Gecko_support" name="Gecko_support">Gecko のサポート</h3>

<p>現時点ではサポートされていません。</p>
