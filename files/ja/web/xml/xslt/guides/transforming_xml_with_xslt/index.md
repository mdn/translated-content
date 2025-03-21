---
title: XSLT による XML の変換
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
original_slug: Web/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

## 概要

[概要](/ja/docs/Web/XML/XSLT/Transforming_XML_with_XSLT/An_Overview)

コンテンツとプレゼンテーションの分離は、[XML](/ja/docs/Web/XML) の重要な設計の特徴です。 XML 文書の構造は、このデータが最終的にどのように表現されるべきかを示す必要性に妨げられることなく、コンテンツ自体の個々の側面間の重要な関係を反映し、明確にするように設計されています。このインテリジェントな構造化は、より多くのデータ移行を自動化し、ネットワークでリンクされた異機種間で配置する際に具体的な意味を持ちます。

しかし、 XML 文書内に格納されるコンテンツの多くは、最終的には人間の読者に表示する必要があります。ブラウザーは、親しみやすく柔軟性の高いインターフェイスを提供しているため、 XML コンテンツの表示版を提供するための理想的なメカニズムです。さまざまな XML 技術を利用して一から構築された Firefox は、元の XML 文書と、それらを HTML 表示用にスタイル設定およびレイアウトするために使用される特殊なスタイルシートの両方を処理するために必要なすべてのメカニズムをそれ自体に組み込んでおり、クライアントサイドの処理でサーバーの負荷を軽減します。

現時点で、 Gecko （Firefox のレイアウトエンジン）は 2 種類の XML 用のスタイルシートに対応しています。基本的な表示方法の制御 — フォント、色、位置、など — については、 Gecko は [CSS](/ja/docs/Web/CSS) を使用します。

ここでは、Gecko が対応している 2 つ目の種類のスタイルシート、XSLT スタイルシートに注目します。XSLT は eXtensible Stylesheet Language/Transform の略で、この名前は最適です。 XSLT は、スタイルシート作成者が主要な XML 文書を 2 つの重要な方法で変換することができます。コンテンツの操作と並べ替え（必要であれば、コンテンツの並べ替えも含みます）、およびコンテンツの異なる形式への変換（Firefox の場合は、ブラウザーで表示できる HTML への変換）です。

## XSLT/XPath リファレンス

### 要素

[要素](/ja/docs/Web/XML/XSLT/Element)

- [xsl:apply-imports](/ja/docs/Web/XML/XSLT/Element/apply-imports) _(対応済み)_
- [xsl:apply-templates](/ja/docs/Web/XML/XSLT/Element/apply-templates) _(対応済み)_
- [xsl:attribute](/ja/docs/Web/XML/XSLT/Element/attribute) _(対応済み)_
- [xsl:attribute-set](/ja/docs/Web/XML/XSLT/Element/attribute-set) _(対応済み)_
- [xsl:call-template](/ja/docs/Web/XML/XSLT/Element/call-template) _(対応済み)_
- [xsl:choose](/ja/docs/Web/XML/XSLT/Element/choose) _(対応済み)_
- [xsl:comment](/ja/docs/Web/XML/XSLT/Element/comment) _(対応済み)_
- [xsl:copy](/ja/docs/Web/XML/XSLT/Element/copy) _(対応済み)_
- [xsl:copy-of](/ja/docs/Web/XML/XSLT/Element/copy-of) _(対応済み)_
- [xsl:decimal-format](/ja/docs/Web/XML/XSLT/Element/decimal-format) _(対応済み)_
- [xsl:element](/ja/docs/Web/XML/XSLT/Element/element) _(対応済み)_
- [xsl:fallback](/ja/docs/Web/XML/XSLT/Element/fallback) _(未対応)_
- [xsl:for-each](/ja/docs/Web/XML/XSLT/Element/for-each) _(対応済み)_
- [xsl:if](/ja/docs/Web/XML/XSLT/Element/if) _(対応済み)_
- [xsl:import](/ja/docs/Web/XML/XSLT/Element/import) _(ほぼ対応済み)_
- [xsl:include](/ja/docs/Web/XML/XSLT/Element/include) _(対応済み)_
- [xsl:key](/ja/docs/Web/XML/XSLT/Element/key) _(対応済み)_
- [xsl:message](/ja/docs/Web/XML/XSLT/Element/message) _(対応済み)_
- [xsl:namespace-alias](/ja/docs/Web/XML/XSLT/Element/namespace-alias) _(未対応)_
- [xsl:number](/ja/docs/Web/XML/XSLT/Element/number) _(一部対応済み)_
- [xsl:otherwise](/ja/docs/Web/XML/XSLT/Element/otherwise) _(対応済み)_
- [xsl:output](/ja/docs/Web/XML/XSLT/Element/output) _(一部対応済み)_
- [xsl:param](/ja/docs/Web/XML/XSLT/Element/param) _(対応済み)_
- [xsl:preserve-space](/ja/docs/Web/XML/XSLT/Element/preserve-space) _(対応済み)_
- [xsl:processing-instruction](/ja/docs/Web/XML/XSLT/Element/processing-instruction)
- [xsl:sort](/ja/docs/Web/XML/XSLT/Element/sort) _(対応済み)_
- [xsl:strip-space](/ja/docs/Web/XML/XSLT/Element/strip-space) _(対応済み)_
- [xsl:stylesheet](/ja/docs/Web/XML/XSLT/Element/stylesheet) _(一部対応済み)_
- [xsl:template](/ja/docs/Web/XML/XSLT/Element/template) _(対応済み)_
- [xsl:text](/ja/docs/Web/XML/XSLT/Element/text) _(一部対応済み)_
- [xsl:transform](/ja/docs/Web/XML/XSLT/Element/transform) _(対応済み)_
- [xsl:value-of](/ja/docs/Web/XML/XSLT/Element/value-of) _(一部対応済み)_
- [xsl:variable](/ja/docs/Web/XML/XSLT/Element/variable) _(対応済み)_
- [xsl:when](/ja/docs/Web/XML/XSLT/Element/when) _(対応済み)_
- [xsl:with-param](/ja/docs/Web/XML/XSLT/Element/with-param) _(対応済み)_

### 軸

[軸](/ja/docs/Web/XML/XPath/Axes)

- [ancestor](/ja/docs/Web/XML/XPath/Axes#ancestor)
- [ancestor-or-self](/ja/docs/Web/XML/XPath/Axes#ancestor-or-self)
- [attribute](/ja/docs/Web/XML/XPath/Axes#attribute)
- [child](/ja/docs/Web/XML/XPath/Axes#child)
- [descendant](/ja/docs/Web/XML/XPath/Axes#descendant)
- [descendant-or-self](/ja/docs/Web/XML/XPath/Axes#descendant-or-self)
- [following](/ja/docs/Web/XML/XPath/Axes#following)
- [following-sibling](/ja/docs/Web/XML/XPath/Axes#following-sibling)
- [namespace](/ja/docs/Web/XML/XPath/Axes#namespace) _(未対応)_
- [parent](/ja/docs/Web/XML/XPath/Axes#parent)
- [preceding](/ja/docs/Web/XML/XPath/Axes#preceding)
- [preceding-sibling](/ja/docs/Web/XML/XPath/Axes#preceding-sibling)
- [self](/ja/docs/Web/XML/XPath/Axes#self)

### 関数

[関数](/ja/docs/Web/XML/XPath/Functions)

- [boolean()](/ja/docs/Web/XML/XPath/Functions/boolean) _(対応済み)_
- [ceiling()](/ja/docs/Web/XML/XPath/Functions/ceiling) _(対応済み)_
- [concat()](/ja/docs/Web/XML/XPath/Functions/concat) _(対応済み)_
- [contains()](/ja/docs/Web/XML/XPath/Functions/contains) _(対応済み)_
- [count()](/ja/docs/Web/XML/XPath/Functions/count) _(対応済み)_
- [current()](/ja/docs/Web/XML/XPath/Functions/current) _(対応済み)_
- [document()](/ja/docs/Web/XML/XPath/Functions/document) _(対応済み)_
- [element-available()](/ja/docs/Web/XML/XPath/Functions/element-available) _(対応済み)_
- [false()](/ja/docs/Web/XML/XPath/Functions/false) _(対応済み)_
- [floor()](/ja/docs/Web/XML/XPath/Functions/floor) _(対応済み)_
- [format-number()](/ja/docs/Web/XML/XPath/Functions/format-number) _(対応済み)_
- [function-available()](/ja/docs/Web/XML/XPath/Functions/function-available) _(対応済み)_
- [generate-id()](/ja/docs/Web/XML/XPath/Functions/generate-id) _(対応済み)_
- [id()](/ja/docs/Web/XML/XPath/Functions/id) _(partially 対応済み)_
- [key()](/ja/docs/Web/XML/XPath/Functions/key) _(対応済み)_
- [lang()](/ja/docs/Web/XML/XPath/Functions/lang) _(対応済み)_
- [last()](/ja/docs/Web/XML/XPath/Functions/last) _(対応済み)_
- [local-name()](/ja/docs/Web/XML/XPath/Functions/local-name) _(対応済み)_
- [name()](/ja/docs/Web/XML/XPath/Functions/name) _(対応済み)_
- [namespace-uri()](/ja/docs/Web/XML/XPath/Functions/namespace-uri) _(対応済み)_
- [normalize-space()](/ja/docs/Web/XML/XPath/Functions/normalize-space) _(対応済み)_
- [not()](/ja/docs/Web/XML/XPath/Functions/not) _(対応済み)_
- [number()](/ja/docs/Web/XML/XPath/Functions/number) _(対応済み)_
- [position()](/ja/docs/Web/XML/XPath/Functions/position) _(対応済み)_
- [round()](/ja/docs/Web/XML/XPath/Functions/round) _(対応済み)_
- [starts-with()](/ja/docs/Web/XML/XPath/Functions/starts-with) _(対応済み)_
- [string()](/ja/docs/Web/XML/XPath/Functions/string) _(対応済み)_
- [string-length()](/ja/docs/Web/XML/XPath/Functions/string-length) _(対応済み)_
- [substring()](/ja/docs/Web/XML/XPath/Functions/substring) _(対応済み)_
- [substring-after()](/ja/docs/Web/XML/XPath/Functions/substring-after) _(対応済み)_
- [substring-before()](/ja/docs/Web/XML/XPath/Functions/substring-before) _(対応済み)_
- [sum()](/ja/docs/Web/XML/XPath/Functions/sum) _(対応済み)_
- [system-property()](/ja/docs/Web/XML/XPath/Functions/system-property) _(対応済み)_
- [translate()](/ja/docs/Web/XML/XPath/Functions/translate) _(対応済み)_
- [true()](/ja/docs/Web/XML/XPath/Functions/true) _(対応済み)_
- [unparsed-entity-url()](/ja/docs/Web/XML/XPath/Functions/unparsed-entity-url) _(not 対応済み)_

## 参考文献

[参考文献](/ja/docs/Web/XML/XSLT/Transforming_XML_with_XSLT/For_Further_Reading)

- [書籍](/ja/docs/Web/XML/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#書籍)
- [デジタル](/ja/docs/Web/XML/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#デジタル)

  - [ウェブサイト](/ja/docs/Web/XML/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#ウェブサイト)
  - [記事](/ja/docs/Web/XML/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#記事)
  - [チュートリアル／例](/ja/docs/Web/XML/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#チュートリアル／例)
  - [その他](/ja/docs/Web/XML/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#その他)

## 原典情報

- Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- 注: この転載記事はもともと DevEdge サイトの一部でした。
