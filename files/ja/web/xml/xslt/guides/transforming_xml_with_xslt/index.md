---
title: XSLT による XML の変換
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
original_slug: Web/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: de7efb5a4741ef1ae33a6e160066801c745633e4
---

{{XsltSidebar}}

## 概要

[概要](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)

コンテンツとプレゼンテーションの分離は、[XML](/ja/docs/Web/XML) の重要な設計の特徴です。 XML 文書の構造は、このデータが最終的にどのように表現されるべきかを示す必要性に妨げられることなく、コンテンツ自体の個々の側面間の重要な関係を反映し、明確にするように設計されています。このインテリジェントな構造化は、より多くのデータ移行を自動化し、ネットワークでリンクされた異機種間で配置する際に具体的な意味を持ちます。

しかし、 XML 文書内に格納されるコンテンツの多くは、最終的には人間の読者に表示する必要があります。ブラウザーは、親しみやすく柔軟性の高いインターフェイスを提供しているため、 XML コンテンツの表示版を提供するための理想的なメカニズムです。さまざまな XML 技術を利用して一から構築された Firefox は、元の XML 文書と、それらを HTML 表示用にスタイル設定およびレイアウトするために使用される特殊なスタイルシートの両方を処理するために必要なすべてのメカニズムをそれ自体に組み込んでおり、クライアントサイドの処理でサーバーの負荷を軽減します。

現時点で、 Gecko （Firefox のレイアウトエンジン）は 2 種類の XML 用のスタイルシートに対応しています。基本的な表示方法の制御 — フォント、色、位置、など — については、 Gecko は [CSS](/ja/docs/Web/CSS) を使用します。

ここでは、Gecko が対応している 2 つ目の種類のスタイルシート、XSLT スタイルシートに注目します。XSLT は eXtensible Stylesheet Language/Transform の略で、この名前は最適です。 XSLT は、スタイルシート作成者が主要な XML 文書を 2 つの重要な方法で変換することができます。コンテンツの操作と並べ替え（必要であれば、コンテンツの並べ替えも含みます）、およびコンテンツの異なる形式への変換（Firefox の場合は、ブラウザーで表示できる HTML への変換）です。

## XSLT とは何か

XSLT (eXtensible Stylesheet Language/Transform) はとても強力な言語であり、この記事の全体的な議論はこの記事の範囲をはるかに超えていますが、基本的な概念の簡単な説明は Netscape の機能の説明の理解に役立ちます。

XSLT スタイルシートは XML 文書です。独自の特殊な構文を持つ CSS と異なり、XSLT スタイルシートは XML 文書であり、整形式を含むすべての XML 規則に準拠しなければなりません。したがって、変換のモデルは 1 つの XML 文書を使用して別の XML 文書を変換することです。

XSLT スタイルシートには、標準の XSLT 見出しが含まれています。 XSLT スタイルシートの最も外側の要素は `<xsl:stylesheet>` 要素でなければなりません (受け入れ可能な代替要素は `<xsl:transform>` 要素です)。この要素には少なくとも 1 つの名前空間宣言と必須のバージョン属性が含まれます。他の名前空間と 3 つのオプションの属性も含めることができます。

## XSLT 名前空間

XSLT の必須名前空間は `"http://www.w3.org/1999/XSL/Transform"` です。名前空間は XML のかなりの混乱の対象です。多くの場合、名前空間は URI であるように見えますが、実際にはそのアドレスにあるリソースを参照していません。代わりに既知の要素セットの一意の識別子を指定する単なる方法です。文字列 `"http://www.w3.org/1999/XSL/Transform"` は、1999 年に XSLT 勧告で W3C によって指定されたタグのセットに属するとマークされた要素を指定する定数です。スタイルシートで時折見られる別の文字列 `"http://www.w3.org/TR/WD-xsl"` は、W3C 文書の以前の作業草案 (したがって WD) に準拠していることを示します。後者のネームスペースは W3C が最終的に採用したものと互換性がなく、Netscape でサポートされていません。

繰り返し `"http://www.w3.org/1999/XSL/Transform"` と入力するのは面倒で、マークアップを読みにくくするため、スタイルシートの見出しの名前空間に省略名を割り当てるための標準的なメカニズムがあります。したがって、スタイルシートを開始する要素の完全な例は、このようになります。

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

`xmlns` 擬似属性は、後続の文書全体で使用するために短縮名 `xsl` を完全な名前空間に対応付けます。したがって、上記の stylesheet 要素の前に `xsl:` が付いています。`xsl` は従来使用されていた短縮名（接頭辞と呼ばれます）ですが必須ではなく、別の名前を選択することも可能です。この記事の例はすべて `xsl` 接頭辞の使用を前提としています。

## XSLT が XML ツリーを処理する方法

プロセッサーと呼ばれる XSLT 変換エンジンは、文書では直接動作しません。変換が行われる前に、プライマリ XML 文書とスタイルシート文書は、メモリー内の文書構造の抽象的な表現を作成するパーサーを介して実行する必要があります。ツリーと呼ばれるこの表現は、プロセッサーによって実際に操作されるものです。ツリーは抽象データ型であり、パーサーとプロセッサーに応じてさまざまな方法で実装できる概念モデルです。 Netscape ではツリー構造として W3C DOM に似た構造を使用していますが、他のものも可能です。唯一の要件はツリー内のオブジェクトの配置、そのプロパティ、およびそれらの関係に関係します。

ツリーはノードの階層的なフレームワークで構成されています。単一のルートノード、要素ノード、テキストノード、属性ノード、コメントノード、処理命令ノード、および名前空間ノードの 7 つの異なるタイプのノードで構成できます。

ツリーの最上部にルートノードがあります。ルートノードは XML 文書の個々の部分に対応していません。文書全体を表します。ルートノードの下には要素、コメント、処理命令などの子要素があります。これらの子要素の中にはさらに子要素がいるものもあります。そして、これはいくつかのレベルのために続けることができます。たとえば、テキストノードには子を持たないなど、ノードの種類が発生する特定の制約があります。

プロセッサーのアクションの結果もツリーになります。 Netscape はこのツリーを使用してブラウザーウィンドウにコンテンツを表示します。

## XPath とノードの選択

本質的に、XSLT スタイルシートはテンプレートと呼ばれる一連のルールであり、この特定のパターンに一致するノードはこの特定の方法で操作され、結果ツリーのこの特定の位置で終了することを宣言します。これがどのように達成されるかについての詳細は、プロセッサーに委ねられています。スタイルシートの実行順序は保証できないため、XSLT は副作用を発生させる機能をサポートしていません。これは Lisp や Scheme のようなものです。

変換はプロセッサーがツリー上の個々のノードを特定できるかどうかに依存します。これを容易にするために、W3C は別の言語である XPath を使用することに決め、XPath は XSLT コンテキスト外でも使用されています。その名前が示すように、XPath はプロセッサーがツリーを通過して目的のノードに到達する「パス」を定義します。このパスは評価される XPath 特有の表現、一致される条件の数、ノードを関連付ける方法、および/またはツリー内の方向性の指示を含む式からなります。XSLT で最も一般的に使用される XPath の部分の詳細な説明は、参考セクションで説明します。

テンプレートを照合する際に潜在的な競合があった場合は、一連のカスケード優先ルールを使用して解決されます。一般的に、より具体的なテンプレートルールはあまり具体的でないテンプレートルールよりも優先され、他のものは同等であるため、文書の後に表示されるテンプレートルールが先に表示されたものよりも優先されます。

スタイルシートは、処理命令を介して XML 文書に添付することができます。特定の XML 文書を処理するためにどの XSLT スタイルシートを使用すべきかを示す最も簡単な方法は、XML 文書自体に処理命令を含めることです。 たとえば、スタイルシートが inventory.xsl と呼ばれ、XML 文書と同じディレクトリーにある場合、XML 文書の処理命令は次のようになります。

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

これは XML 文書のプロローグセクションに配置する必要があります。

## XSLT/XPath リファレンス

### 要素

[要素](/ja/docs/Web/XML/XSLT/Reference/Element)

- [xsl:apply-imports](/ja/docs/Web/XML/XSLT/Reference/Element/apply-imports) _(対応済み)_
- [xsl:apply-templates](/ja/docs/Web/XML/XSLT/Reference/Element/apply-templates) _(対応済み)_
- [xsl:attribute](/ja/docs/Web/XML/XSLT/Reference/Element/attribute) _(対応済み)_
- [xsl:attribute-set](/ja/docs/Web/XML/XSLT/Reference/Element/attribute-set) _(対応済み)_
- [xsl:call-template](/ja/docs/Web/XML/XSLT/Reference/Element/call-template) _(対応済み)_
- [xsl:choose](/ja/docs/Web/XML/XSLT/Reference/Element/choose) _(対応済み)_
- [xsl:comment](/ja/docs/Web/XML/XSLT/Reference/Element/comment) _(対応済み)_
- [xsl:copy](/ja/docs/Web/XML/XSLT/Reference/Element/copy) _(対応済み)_
- [xsl:copy-of](/ja/docs/Web/XML/XSLT/Reference/Element/copy-of) _(対応済み)_
- [xsl:decimal-format](/ja/docs/Web/XML/XSLT/Reference/Element/decimal-format) _(対応済み)_
- [xsl:element](/ja/docs/Web/XML/XSLT/Reference/Element/element) _(対応済み)_
- [xsl:fallback](/ja/docs/Web/XML/XSLT/Reference/Element/fallback) _(未対応)_
- [xsl:for-each](/ja/docs/Web/XML/XSLT/Reference/Element/for-each) _(対応済み)_
- [xsl:if](/ja/docs/Web/XML/XSLT/Reference/Element/if) _(対応済み)_
- [xsl:import](/ja/docs/Web/XML/XSLT/Reference/Element/import) _(ほぼ対応済み)_
- [xsl:include](/ja/docs/Web/XML/XSLT/Reference/Element/include) _(対応済み)_
- [xsl:key](/ja/docs/Web/XML/XSLT/Reference/Element/key) _(対応済み)_
- [xsl:message](/ja/docs/Web/XML/XSLT/Reference/Element/message) _(対応済み)_
- [xsl:namespace-alias](/ja/docs/Web/XML/XSLT/Reference/Element/namespace-alias) _(未対応)_
- [xsl:number](/ja/docs/Web/XML/XSLT/Reference/Element/number) _(一部対応済み)_
- [xsl:otherwise](/ja/docs/Web/XML/XSLT/Reference/Element/otherwise) _(対応済み)_
- [xsl:output](/ja/docs/Web/XML/XSLT/Reference/Element/output) _(一部対応済み)_
- [xsl:param](/ja/docs/Web/XML/XSLT/Reference/Element/param) _(対応済み)_
- [xsl:preserve-space](/ja/docs/Web/XML/XSLT/Reference/Element/preserve-space) _(対応済み)_
- [xsl:processing-instruction](/ja/docs/Web/XML/XSLT/Reference/Element/processing-instruction)
- [xsl:sort](/ja/docs/Web/XML/XSLT/Reference/Element/sort) _(対応済み)_
- [xsl:strip-space](/ja/docs/Web/XML/XSLT/Reference/Element/strip-space) _(対応済み)_
- [xsl:stylesheet](/ja/docs/Web/XML/XSLT/Reference/Element/stylesheet) _(一部対応済み)_
- [xsl:template](/ja/docs/Web/XML/XSLT/Reference/Element/template) _(対応済み)_
- [xsl:text](/ja/docs/Web/XML/XSLT/Reference/Element/text) _(一部対応済み)_
- [xsl:transform](/ja/docs/Web/XML/XSLT/Reference/Element/transform) _(対応済み)_
- [xsl:value-of](/ja/docs/Web/XML/XSLT/Reference/Element/value-of) _(一部対応済み)_
- [xsl:variable](/ja/docs/Web/XML/XSLT/Reference/Element/variable) _(対応済み)_
- [xsl:when](/ja/docs/Web/XML/XSLT/Reference/Element/when) _(対応済み)_
- [xsl:with-param](/ja/docs/Web/XML/XSLT/Reference/Element/with-param) _(対応済み)_

### 軸

[軸](/ja/docs/Web/XML/XPath/Reference/Axes)

- [ancestor](/ja/docs/Web/XML/XPath/Reference/Axes#ancestor)
- [ancestor-or-self](/ja/docs/Web/XML/XPath/Reference/Axes#ancestor-or-self)
- [attribute](/ja/docs/Web/XML/XPath/Reference/Axes#attribute)
- [child](/ja/docs/Web/XML/XPath/Reference/Axes#child)
- [descendant](/ja/docs/Web/XML/XPath/Reference/Axes#descendant)
- [descendant-or-self](/ja/docs/Web/XML/XPath/Reference/Axes#descendant-or-self)
- [following](/ja/docs/Web/XML/XPath/Reference/Axes#following)
- [following-sibling](/ja/docs/Web/XML/XPath/Reference/Axes#following-sibling)
- [namespace](/ja/docs/Web/XML/XPath/Reference/Axes#namespace) _(未対応)_
- [parent](/ja/docs/Web/XML/XPath/Reference/Axes#parent)
- [preceding](/ja/docs/Web/XML/XPath/Reference/Axes#preceding)
- [preceding-sibling](/ja/docs/Web/XML/XPath/Reference/Axes#preceding-sibling)
- [self](/ja/docs/Web/XML/XPath/Reference/Axes#self)

### 関数

[関数](/ja/docs/Web/XML/XPath/Reference/Functions)

- [boolean()](/ja/docs/Web/XML/XPath/Reference/Functions/boolean) _(対応済み)_
- [ceiling()](/ja/docs/Web/XML/XPath/Reference/Functions/ceiling) _(対応済み)_
- [concat()](/ja/docs/Web/XML/XPath/Reference/Functions/concat) _(対応済み)_
- [contains()](/ja/docs/Web/XML/XPath/Reference/Functions/contains) _(対応済み)_
- [count()](/ja/docs/Web/XML/XPath/Reference/Functions/count) _(対応済み)_
- [current()](/ja/docs/Web/XML/XPath/Reference/Functions/current) _(対応済み)_
- [document()](/ja/docs/Web/XML/XPath/Reference/Functions/document) _(対応済み)_
- [element-available()](/ja/docs/Web/XML/XPath/Reference/Functions/element-available) _(対応済み)_
- [false()](/ja/docs/Web/XML/XPath/Reference/Functions/false) _(対応済み)_
- [floor()](/ja/docs/Web/XML/XPath/Reference/Functions/floor) _(対応済み)_
- [format-number()](/ja/docs/Web/XML/XPath/Reference/Functions/format-number) _(対応済み)_
- [function-available()](/ja/docs/Web/XML/XPath/Reference/Functions/function-available) _(対応済み)_
- [generate-id()](/ja/docs/Web/XML/XPath/Reference/Functions/generate-id) _(対応済み)_
- [id()](/ja/docs/Web/XML/XPath/Reference/Functions/id) _(partially 対応済み)_
- [key()](/ja/docs/Web/XML/XPath/Reference/Functions/key) _(対応済み)_
- [lang()](/ja/docs/Web/XML/XPath/Reference/Functions/lang) _(対応済み)_
- [last()](/ja/docs/Web/XML/XPath/Reference/Functions/last) _(対応済み)_
- [local-name()](/ja/docs/Web/XML/XPath/Reference/Functions/local-name) _(対応済み)_
- [name()](/ja/docs/Web/XML/XPath/Reference/Functions/name) _(対応済み)_
- [namespace-uri()](/ja/docs/Web/XML/XPath/Reference/Functions/namespace-uri) _(対応済み)_
- [normalize-space()](/ja/docs/Web/XML/XPath/Reference/Functions/normalize-space) _(対応済み)_
- [not()](/ja/docs/Web/XML/XPath/Reference/Functions/not) _(対応済み)_
- [number()](/ja/docs/Web/XML/XPath/Reference/Functions/number) _(対応済み)_
- [position()](/ja/docs/Web/XML/XPath/Reference/Functions/position) _(対応済み)_
- [round()](/ja/docs/Web/XML/XPath/Reference/Functions/round) _(対応済み)_
- [starts-with()](/ja/docs/Web/XML/XPath/Reference/Functions/starts-with) _(対応済み)_
- [string()](/ja/docs/Web/XML/XPath/Reference/Functions/string) _(対応済み)_
- [string-length()](/ja/docs/Web/XML/XPath/Reference/Functions/string-length) _(対応済み)_
- [substring()](/ja/docs/Web/XML/XPath/Reference/Functions/substring) _(対応済み)_
- [substring-after()](/ja/docs/Web/XML/XPath/Reference/Functions/substring-after) _(対応済み)_
- [substring-before()](/ja/docs/Web/XML/XPath/Reference/Functions/substring-before) _(対応済み)_
- [sum()](/ja/docs/Web/XML/XPath/Reference/Functions/sum) _(対応済み)_
- [system-property()](/ja/docs/Web/XML/XPath/Reference/Functions/system-property) _(対応済み)_
- [translate()](/ja/docs/Web/XML/XPath/Reference/Functions/translate) _(対応済み)_
- [true()](/ja/docs/Web/XML/XPath/Reference/Functions/true) _(対応済み)_
- [unparsed-entity-url()](/ja/docs/Web/XML/XPath/Reference/Functions/unparsed-entity-url) _(not 対応済み)_

## 参考文献

[参考文献](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)

- [書籍](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT#書籍)
- [デジタル](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT#デジタル)

  - [ウェブサイト](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT#ウェブサイト)
  - [記事](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT#記事)
  - [チュートリアル／例](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT#チュートリアル／例)
  - [その他](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT#その他)

## 参考文献

### 書籍

- **XSLT: Programmer's Reference, Second Edition**

  - **著者**: Michael H. Kay
  - **ページ数**: 992 pages
  - **出版社**: Wrox; 2 edition (May 3, 2001)
  - **ISBN**: 0764543814

    - Michael Kay は W3C XSL ワーキンググループのメンバーであり、オープンソース XSLT プロセッサーである Saxon の開発者です。彼はまた、このテーマに関する第 2 版に達した唯一の本の著者でもあります。これは XSLT ストーリーのすべての可能なベースを網羅している非常に大きな本です。うまくレイアウトされています。

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**

  - **著者**: Doug Tidwell
  - **ページ数**: 473 pages
  - **出版社**: O'Reilly Media; 1 edition (August 15, 2001)
  - **ISBN**: 0596000537

    - Doug Tidwell は IBM の上級開発者であり、一般に XML 技術の著名なエバンジェリストです。彼は IBM の幅広い XML 開発者サイトで、XML のさまざまな側面に関するいくつかの記事とチュートリアルの著者です。この本はマイケル・ケイのものよりもいくぶん包括的ではありませんが、基礎をうまくカバーし、興味深い例を提供しています。

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**

  - **著者**: Erik T. Ray
  - **ページ数**: 432 pages
  - **出版社**: O'Reilly Media; 2 edition (September 22, 2003)
  - **ISBN**: 0596004206

    - タイトルが示すように、これは一般的に XML の概要です。第 6 章は特に XSLT に専念しています。

<https://www.amazon.com/gp/product/0596004206>

### 仕様書

- **メインの XSL ページ**: <https://www.w3.org/Style/XSL/> （英語）
- **XSLT 仕様書の概要**: <https://www.w3.org/TR/xslt/> （英語）
- **Archive of public style (CSS and XSLT) discussions**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **XPath 仕様書の概要**: <https://www.w3.org/TR/xpath/> （英語）

### 記事

- [Hands-on XSL](https://developer.ibm.com/technologies/web-development/) by Don R. Day
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) by G. Ken Holman

### チュートリアル/例

- [Jeni's XSLT Pages](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XSL Tutorial](https://nwalsh.com/docs/tutorials/xsl/)

### その他

- [Extensible Stylesheet Language (XSL)](https://xml.coverpages.org/xsl.html)
