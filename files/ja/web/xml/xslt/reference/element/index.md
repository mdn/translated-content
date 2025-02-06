---
title: XSLT 要素リファレンス
slug: Web/XML/XSLT/Reference/Element
original_slug: Web/XSLT/Reference/Element
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{XsltSidebar}}

ここでは、最上位要素と命令の 2 種類の要素について説明します。最上位の要素は `<xsl:stylesheet>` または `<xsl:transform>` の子として表示する必要があります。一方、命令はテンプレートに関連付けられています。スタイルシートにはいくつかのテンプレートが含まれています。ここでは説明しない第 3 の種類の要素はリテラル結果要素 (LRE) です。 LRE もテンプレートに現れます。これは、HTML 変換スタイルシートの `<hr>` 要素など、結果文書にそのままコピーする必要のある非命令要素から構成されます。

関連メモとして、LRE の任意の属性と、限られた数の XSLT 要素の一部の属性は、属性値テンプレートとして知られているものを含めることができます。属性値テンプレートは、属性の値を指定するために使用する XPath 式を記述した文字列です。実行時にこの式が評価され、その結果が XPath 式に置き換えられます。例えば、変数 "`image-dir`" が次のように定義されていると想定します。

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

評価される式は、中括弧の中に置かれます。

```xml
<img src="{$image-dir}/mygraphic.jpg"/>
```

この結果、次のようになります。

```xml
<img src="/images/mygraphic.jpg"/>
```

続く要素の注釈には説明、構文リスト、必須およびオプションの属性のリスト、タイプと位置の説明、W3C 勧告のソース、および現在の Gecko サポートの程度の説明が含まれます。

- [`<xsl:apply-imports>`](/ja/docs/Web/XSLT/Element/apply-imports)
- [`<xsl:apply-templates>`](/ja/docs/Web/XSLT/Element/apply-templates)
- [`<xsl:attribute>`](/ja/docs/Web/XSLT/Element/attribute)
- [`<xsl:attribute-set>`](/ja/docs/Web/XSLT/Element/attribute-set)
- [`<xsl:call-template>`](/ja/docs/Web/XSLT/Element/call-template)
- [`<xsl:choose>`](/ja/docs/Web/XSLT/Element/choose)
- [`<xsl:comment>`](/ja/docs/Web/XSLT/Element/comment)
- [`<xsl:copy>`](/ja/docs/Web/XSLT/Element/copy)
- [`<xsl:copy-of>`](/ja/docs/Web/XSLT/Element/copy-of)
- [`<xsl:decimal-format>`](/ja/docs/Web/XSLT/Element/decimal-format)
- [`<xsl:element>`](/ja/docs/Web/XSLT/Element/element)
- [`<xsl:fallback>`](/ja/docs/Web/XSLT/Element/fallback) _(対応外)_
- [`<xsl:for-each>`](/ja/docs/Web/XSLT/Element/for-each)
- [`<xsl:if>`](/ja/docs/Web/XSLT/Element/if)
- [`<xsl:import>`](/ja/docs/Web/XSLT/Element/import) _(ほぼ対応)_
- [`<xsl:include>`](/ja/docs/Web/XSLT/Element/include)
- [`<xsl:key>`](/ja/docs/Web/XSLT/Element/key)
- [`<xsl:message>`](/ja/docs/Web/XSLT/Element/message)
- [`<xsl:namespace-alias>`](/ja/docs/Web/XSLT/Element/namespace-alias) _(対応外)_
- [`<xsl:number>`](/ja/docs/Web/XSLT/Element/number) _(一部対応)_
- [`<xsl:otherwise>`](/ja/docs/Web/XSLT/Element/otherwise)
- [`<xsl:output>`](/ja/docs/Web/XSLT/Element/output) _(一部対応)_
- [`<xsl:param>`](/ja/docs/Web/XSLT/Element/param)
- [`<xsl:preserve-space>`](/ja/docs/Web/XSLT/Element/preserve-space)
- [`<xsl:processing-instruction>`](/ja/docs/Web/XSLT/Element/processing-instruction)
- [`<xsl:sort>`](/ja/docs/Web/XSLT/Element/sort)
- [`<xsl:strip-space>`](/ja/docs/Web/XSLT/Element/strip-space)
- [`<xsl:stylesheet>`](/ja/docs/Web/XSLT/Element/stylesheet) _(一部対応)_
- [`<xsl:template>`](/ja/docs/Web/XSLT/Element/template)
- [`<xsl:text>`](/ja/docs/Web/XSLT/Element/text) _(一部対応)_
- [`<xsl:transform>`](/ja/docs/Web/XSLT/Element/transform)
- [`<xsl:value-of>`](/ja/docs/Web/XSLT/Element/value-of) _(一部対応)_
- [`<xsl:variable>`](/ja/docs/Web/XSLT/Element/variable)
- [`<xsl:when>`](/ja/docs/Web/XSLT/Element/when)
- [`<xsl:with-param>`](/ja/docs/Web/XSLT/Element/with-param)
