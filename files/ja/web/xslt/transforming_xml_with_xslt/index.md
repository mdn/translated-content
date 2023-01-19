---
title: XSLT による XML の変換
slug: Web/XSLT/Transforming_XML_with_XSLT
---

{{XSLTRef}}

## [概要](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview)

コンテンツとプレゼンテーションの分離は、[XML](/ja/docs/XML) の重要な設計の特徴です。 XML 文書の構造は、コンテンツ自体の個々の側面の間の重要な関係を反映し、明確にするように設計されています。このデータが最終的にどのように提示されるべきかに関する指示を提供する必要はありません。このインテリジェントな構造化は、ますます多くのデータ転送が自動化され、ネットワークでリンクされた非常に異種のマシン間で行われるため、特に重要です。

しかし、最終的には XML 文書に格納されているコンテンツの大部分を人間の読者に提示する必要があります。ブラウザは使い慣れた非常に柔軟なインタフェースを提供するため、このようなプレゼンテーションバージョンの XML コンテンツを配信するための理想的なメカニズムです。さまざまな XML テクノロジを利用してゼロから構築されているため、 Firefox は、元の XML 文書とそれを HTML 表示用にスタイル設定してレイアウトするために使用される特殊なスタイルシートの両方を処理するために必要なすべてのメカニズムを組み込んでおり、クライアントサイド処理によるサーバの負荷を軽減します。

現時点で、 Gecko (Firefox のレイアウトエンジン) は二種類の XML 用のスタイルシートに対応しています。基本的な表示方法の制御 — フォント、色、位置、など — については、 Gecko は [CSS](/ja/docs/CSS) を使用します。 CSS1 と CSS2 はよく対応されており、 CSS3 標準への対応は開発中です。 CSS についての更なる情報は、 [Eric Meyer's CSS pages](http://www.meyerweb.com/eric/css/) を参照してください。

ここで注目するのは、 Gecko が対応する二番目の種類のスタイルシート、 XSLT スタイルシートです。 XSLT は eXtensible Stylesheet Language/Transform のことで、名前の通りです。 XSLT ではスタイルシートで最初の XML 文書を二つの意味のある方法、必要に応じてコンテンツを大規模に並べ替えたり、コンテンツを別の形式に変形したりすることで変換します。 (Firefox の場合は、 HTML に変換して表示することができます)。

## XSLT/XPath リファレンス

### [要素](/ja/docs/Web/XSLT/Elements)

- [xsl:apply-imports](/ja/docs/Web/XSLT/Elements/apply-imports) _(対応済み)_
- [xsl:apply-templates](/ja/docs/Web/XSLT/Elements/apply-templates) _(対応済み)_
- [xsl:attribute](/ja/docs/Web/XSLT/Elements/attribute) _(対応済み)_
- [xsl:attribute-set](/ja/docs/Web/XSLT/Elements/attribute-set) _(対応済み)_
- [xsl:call-template](/ja/docs/Web/XSLT/Elements/call-template) _(対応済み)_
- [xsl:choose](/ja/docs/Web/XSLT/Elements/choose) _(対応済み)_
- [xsl:comment](/ja/docs/Web/XSLT/Elements/comment) _(対応済み)_
- [xsl:copy](/ja/docs/Web/XSLT/Elements/copy) _(対応済み)_
- [xsl:copy-of](/ja/docs/Web/XSLT/Elements/copy-of) _(対応済み)_
- [xsl:decimal-format](/ja/docs/Web/XSLT/Elements/decimal-format) _(対応済み)_
- [xsl:element](/ja/docs/Web/XSLT/Elements/element) _(対応済み)_
- [xsl:fallback](/ja/docs/Web/XSLT/Elements/fallback) _(未対応)_
- [xsl:for-each](/ja/docs/Web/XSLT/Elements/for-each) _(対応済み)_
- [xsl:if](/ja/docs/Web/XSLT/Elements/if) _(対応済み)_
- [xsl:import](/ja/docs/Web/XSLT/Elements/import) _(ほぼ対応済み)_
- [xsl:include](/ja/docs/Web/XSLT/Elements/include) _(対応済み)_
- [xsl:key](/ja/docs/Web/XSLT/Elements/key) _(対応済み)_
- [xsl:message](/ja/docs/Web/XSLT/Elements/message) _(対応済み)_
- [xsl:namespace-alias](/ja/docs/Web/XSLT/Elements/namespace-alias) _(未対応)_
- [xsl:number](/ja/docs/Web/XSLT/Elements/number) _(一部対応済み)_
- [xsl:otherwise](/ja/docs/Web/XSLT/Elements/otherwise) _(対応済み)_
- [xsl:output](/ja/docs/Web/XSLT/Elements/output) _(一部対応済み)_
- [xsl:param](/ja/docs/Web/XSLT/Elements/param) _(対応済み)_
- [xsl:preserve-space](/ja/docs/Web/XSLT/Elements/preserve-space) _(対応済み)_
- [xsl:processing-instruction](/ja/docs/Web/XSLT/Elements/processing-instruction)
- [xsl:sort](/ja/docs/Web/XSLT/Elements/sort) _(対応済み)_
- [xsl:strip-space](/ja/docs/Web/XSLT/Elements/strip-space) _(対応済み)_
- [xsl:stylesheet](/ja/docs/Web/XSLT/Elements/stylesheet) _(一部対応済み)_
- [xsl:template](/ja/docs/Web/XSLT/Elements/template) _(対応済み)_
- [xsl:text](/ja/docs/Web/XSLT/Elements/text) _(一部対応済み)_
- [xsl:transform](/ja/docs/Web/XSLT/Elements/transform) _(対応済み)_
- [xsl:value-of](/ja/docs/Web/XSLT/Elements/value-of) _(一部対応済み)_
- [xsl:variable](/ja/docs/Web/XSLT/Elements/variable) _(対応済み)_
- [xsl:when](/ja/docs/Web/XSLT/Elements/when) _(対応済み)_
- [xsl:with-param](/ja/docs/Web/XSLT/Elements/with-param) _(対応済み)_

### [軸](/ja/docs/XPath/Axes)

- [ancestor](/ja/docs/XPath/Axes/ancestor)
- [ancestor-or-self](/ja/docs/XPath/Axes/ancestor-or-self)
- [attribute](/ja/docs/XPath/Axes/attribute)
- [child](/ja/docs/XPath/Axes/child)
- [descendant](/ja/docs/XPath/Axes/descendant)
- [descendant-or-self](/ja/docs/XPath/Axes/descendant-or-self)
- [following](/ja/docs/XPath/Axes/following)
- [following-sibling](/ja/docs/XPath/Axes/following-sibling)
- [namespace](/ja/docs/XPath/Axes/namespace) _(未対応)_
- [parent](/ja/docs/XPath/Axes/parent)
- [preceding](/ja/docs/XPath/Axes/preceding)
- [preceding-sibling](/ja/docs/XPath/Axes/preceding-sibling)
- [self](/ja/docs/XPath/Axes/self)

### [関数](/ja/docs/XPath/Functions)

- [boolean()](/ja/docs/XPath/Functions/boolean) _(対応済み)_
- [ceiling()](/ja/docs/XPath/Functions/ceiling) _(対応済み)_
- [concat()](/ja/docs/XPath/Functions/concat) _(対応済み)_
- [contains()](/ja/docs/XPath/Functions/contains) _(対応済み)_
- [count()](/ja/docs/XPath/Functions/count) _(対応済み)_
- [current()](/ja/docs/XPath/Functions/current) _(対応済み)_
- [document()](/ja/docs/XPath/Functions/document) _(対応済み)_
- [element-available()](/ja/docs/XPath/Functions/element-available) _(対応済み)_
- [false()](/ja/docs/XPath/Functions/false) _(対応済み)_
- [floor()](/ja/docs/XPath/Functions/floor) _(対応済み)_
- [format-number()](/ja/docs/XPath/Functions/format-number) _(対応済み)_
- [function-available()](/ja/docs/XPath/Functions/function-available) _(対応済み)_
- [generate-id()](/ja/docs/XPath/Functions/generate-id) _(対応済み)_
- [id()](/ja/docs/XPath/Functions/id) _(partially 対応済み)_
- [key()](/ja/docs/XPath/Functions/key) _(対応済み)_
- [lang()](/ja/docs/XPath/Functions/lang) _(対応済み)_
- [last()](/ja/docs/XPath/Functions/last) _(対応済み)_
- [local-name()](/ja/docs/XPath/Functions/local-name) _(対応済み)_
- [name()](/ja/docs/XPath/Functions/name) _(対応済み)_
- [namespace-uri()](/ja/docs/XPath/Functions/namespace-uri) _(対応済み)_
- [normalize-space()](/ja/docs/XPath/Functions/normalize-space) _(対応済み)_
- [not()](/ja/docs/XPath/Functions/not) _(対応済み)_
- [number()](/ja/docs/XPath/Functions/number) _(対応済み)_
- [position()](/ja/docs/XPath/Functions/position) _(対応済み)_
- [round()](/ja/docs/XPath/Functions/round) _(対応済み)_
- [starts-with()](/ja/docs/XPath/Functions/starts-with) _(対応済み)_
- [string()](/ja/docs/XPath/Functions/string) _(対応済み)_
- [string-length()](/ja/docs/XPath/Functions/string-length) _(対応済み)_
- [substring()](/ja/docs/XPath/Functions/substring) _(対応済み)_
- [substring-after()](/ja/docs/XPath/Functions/substring-after) _(対応済み)_
- [substring-before()](/ja/docs/XPath/Functions/substring-before) _(対応済み)_
- [sum()](/ja/docs/XPath/Functions/sum) _(対応済み)_
- [system-property()](/ja/docs/XPath/Functions/system-property) _(対応済み)_
- [translate()](/ja/docs/XPath/Functions/translate) _(対応済み)_
- [true()](/ja/docs/XPath/Functions/true) _(対応済み)_
- [unparsed-entity-url()](/ja/docs/XPath/Functions/unparsed-entity-url) _(not 対応済み)_

## [さらなる読み物](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading)

- [書籍](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Books)
- [オンライン](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Online)

  - [The World Wide Web Consortium](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#The_World_Wide_Web_Consortium)
  - [Portals](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Portals)
  - [Articles](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Articles)
  - [Tutorials/Examples](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Tutorials.2FExamples)
  - [Mailing Lists/Newsgroups](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Mailing_Lists.2FNewsgroups)

## [リソース](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/Resources)

## [索引](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/Index)

## 原典情報

- Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- 注: この転載記事はもともと DevEdge サイトの一部でした。
