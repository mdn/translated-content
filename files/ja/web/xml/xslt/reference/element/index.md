---
title: XSLT 要素リファレンス
short-title: 要素
slug: Web/XML/XSLT/Reference/Element
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

ここでは、最上位の要素と命令の 2 種類の要素について説明します。最上位の要素は `<xsl:stylesheet>` または `<xsl:transform>` の子として置く必要があります。一方、命令はテンプレートに関連付けられています。スタイルシートには複数のテンプレートが含まれていることがあります。ここでは説明しない第 3 の種類の要素はリテラル結果要素 (LRE) です。 LRE もテンプレートに現れます。これは、HTML 変換スタイルシートの `<hr>` 要素など、結果文書にそのままコピーする必要のある非命令要素から構成されます。

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

- [`<xsl:apply-imports>`](/ja/docs/Web/XML/XSLT/Reference/Element/apply-imports)
- [`<xsl:apply-templates>`](/ja/docs/Web/XML/XSLT/Reference/Element/apply-templates)
- [`<xsl:attribute>`](/ja/docs/Web/XML/XSLT/Reference/Element/attribute)
- [`<xsl:attribute-set>`](/ja/docs/Web/XML/XSLT/Reference/Element/attribute-set)
- [`<xsl:call-template>`](/ja/docs/Web/XML/XSLT/Reference/Element/call-template)
- [`<xsl:choose>`](/ja/docs/Web/XML/XSLT/Reference/Element/choose)
- [`<xsl:comment>`](/ja/docs/Web/XML/XSLT/Reference/Element/comment)
- [`<xsl:copy>`](/ja/docs/Web/XML/XSLT/Reference/Element/copy)
- [`<xsl:copy-of>`](/ja/docs/Web/XML/XSLT/Reference/Element/copy-of)
- [`<xsl:decimal-format>`](/ja/docs/Web/XML/XSLT/Reference/Element/decimal-format)
- [`<xsl:element>`](/ja/docs/Web/XML/XSLT/Reference/Element/element)
- [`<xsl:fallback>`](/ja/docs/Web/XML/XSLT/Reference/Element/fallback) _(未対応)_
- [`<xsl:for-each>`](/ja/docs/Web/XML/XSLT/Reference/Element/for-each)
- [`<xsl:if>`](/ja/docs/Web/XML/XSLT/Reference/Element/if)
- [`<xsl:import>`](/ja/docs/Web/XML/XSLT/Reference/Element/import) _(ほぼ対応)_
- [`<xsl:include>`](/ja/docs/Web/XML/XSLT/Reference/Element/include)
- [`<xsl:key>`](/ja/docs/Web/XML/XSLT/Reference/Element/key)
- [`<xsl:message>`](/ja/docs/Web/XML/XSLT/Reference/Element/message)
- [`<xsl:namespace-alias>`](/ja/docs/Web/XML/XSLT/Reference/Element/namespace-alias) _(未対応)_
- [`<xsl:number>`](/ja/docs/Web/XML/XSLT/Reference/Element/number) _(一部対応)_
- [`<xsl:otherwise>`](/ja/docs/Web/XML/XSLT/Reference/Element/otherwise)
- [`<xsl:output>`](/ja/docs/Web/XML/XSLT/Reference/Element/output) _(一部対応)_
- [`<xsl:param>`](/ja/docs/Web/XML/XSLT/Reference/Element/param)
- [`<xsl:preserve-space>`](/ja/docs/Web/XML/XSLT/Reference/Element/preserve-space)
- [`<xsl:processing-instruction>`](/ja/docs/Web/XML/XSLT/Reference/Element/processing-instruction)
- [`<xsl:sort>`](/ja/docs/Web/XML/XSLT/Reference/Element/sort)
- [`<xsl:strip-space>`](/ja/docs/Web/XML/XSLT/Reference/Element/strip-space)
- [`<xsl:stylesheet>`](/ja/docs/Web/XML/XSLT/Reference/Element/stylesheet) _(一部対応)_
- [`<xsl:template>`](/ja/docs/Web/XML/XSLT/Reference/Element/template)
- [`<xsl:text>`](/ja/docs/Web/XML/XSLT/Reference/Element/text) _(一部対応)_
- [`<xsl:transform>`](/ja/docs/Web/XML/XSLT/Reference/Element/transform)
- [`<xsl:value-of>`](/ja/docs/Web/XML/XSLT/Reference/Element/value-of) _(一部対応)_
- [`<xsl:variable>`](/ja/docs/Web/XML/XSLT/Reference/Element/variable)
- [`<xsl:when>`](/ja/docs/Web/XML/XSLT/Reference/Element/when)
- [`<xsl:with-param>`](/ja/docs/Web/XML/XSLT/Reference/Element/with-param)
