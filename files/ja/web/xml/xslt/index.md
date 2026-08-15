---
title: "XSLT: 拡張可能なスタイルシートの言語変換"
short-title: XSLT
slug: Web/XML/XSLT
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

**Extensible Stylesheet Language Transformations (XSLT)** は [XML](/ja/docs/Web/XML/Guides/XML_introduction) ベースの言語で、XML 文書の変換をするために専門化された処理ソフトウェア（プロセッサー）とともに利用されます。

この処理は「変換」と呼ばれますが、元の文書は変更されず、既存の文書のコンテンツに基づいて新しい XML 文書が生成されます。その後、新しい文書は、プロセッサーによって標準的な XML 構文、あるいは [HTML](/ja/docs/Web/HTML) やプレーンテキストなどの別の形式でシリアライズ（出力）されることがあります。

XSLT は異なる XML スキーマ間でのデータの変換や、XML データからウェブページや PDF 文書への変換に最も使われています。

## リファレンス

[XSLT リファレンス](/ja/docs/Web/XML/XSLT/Reference)は、利用できる要素を含め、XSLT に関する詳細な情報を提供します。

- [XSLT 要素リファレンス](/ja/docs/Web/XML/XSLT/Reference/Element)
  - : このページでは、XSLT 要素について説明します。特に、`<xsl:stylesheet>` や `<xsl:transform>` で使用されている最上位要素や、テンプレートに関する指示に焦点を当てています。
    同時に、`<hr>` のような命令以外の要素を出力に直接コピーするリテラル結果要素 (LRE) や、XPath 式を使用して属性値を設定する属性値テンプレートについても、簡単に網羅しています。

## ガイド

[XSLT ガイド](/ja/docs/Web/XML/XSLT/Guides) では、XML の変換方法、PI 引数の使用方法、XSLT でよく見られるエラーについて説明しています。

- [XSLT を使った XML 変換](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : XSLT を使うと、スタイルシートの制作者は、元の XML 文書を、コンテンツの操作・選別（もしお望みならば大規模な並べ替えも含まれます）と、異なる形式への変換という、2 つの重要な手法で変換できます。
- [処理命令を使った引数の指定](/ja/docs/Web/XML/XSLT/Guides/PI_Parameters)
  - : Firefox では `<?xml-stylesheet?>` 処理指令を使ってスタイルシートの引数を指定することができます。各引数は `<?xslt-param?>` 処理指令によって指定でき、この文書ではこれらを説明しています。
- [一般的な XSLT エラー](/ja/docs/Web/XML/XSLT/Guides/Common_errors)
  - : この記事は Firefox で XSLT を使う際の問題点を挙げています。

## 関連トピック

- [XML](/ja/docs/Web/XML/Guides/XML_introduction)
- [XPath](/ja/docs/Web/XML/XPath)
- [XSLT Introduction](https://www.w3schools.com/xml/xsl_intro.asp) w3schools.comに掲載されている、XSLT を使用して XML 文書を XHTML などの他の形式に変換する方法
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/) XSLT および XPath の入門編。これらの技術に関する予備知識がないことを想定しています。
