---
title: "XSLT: 拡張可能なスタイルシートの言語変換"
slug: Web/XSLT
---

{{XSLTRef}}

1. **[XSLT](/ja/docs/Web/XSLT)**
2. **[EXSLT](/ja/docs/Web/EXSLT)**
3. **[XPath](/ja/docs/Web/XPath)**
4. ガイド

   1. [よくある XSLT のエラー](/ja/docs/Web/XSLT/Common_errors)
   2. [PI 引数](/ja/docs/Web/XSLT/PI_Parameters)
   3. [Gecko の XSLT/JavaScript インターフェイス](/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko)
   4. [XML を XSLT で変換](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT)
   5. [Mozilla JavaScript インターフェイスからの XSLT の使用](/ja/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations)

5. [XSLT Elements](/ja/docs/XSLT/Element){{ListSubpagesForSidebar("/ja/docs/Web/XSLT/Element", "", "", "&lt;xsl:", "&gt;")}}

{{QuickLinksWithSubpages("/ja/docs/Web/XSLT")}}

**Extensible Stylesheet Language Transformations (XSLT)** は [XML](/ja/docs/Web/XML/XML_Introduction) ベースの言語で、XML 文書の変換をするために特別な処理ソフトウェア (プロセッサー) とともに利用されます。

この処理は「変換」と呼ばていれますが、元の文書は変更されません。この「変換」ではまず、新しい XML 文書が元の文書の内容をもとに作成され、プロセッサーによってそのまま、もしくは標準 XML や [HTML](/ja/docs/Web/HTML) やテキストなどの形式でシリアライズ (出力) されます。

XSLT は異なる XML スキーマ間でのデータの変換や、XML データからウェブページや PDF 文書への変換に最も使われています。

## ドキュメント

- [XSLT 要素リファレンス](/ja/docs/Web/XSLT/Element)
  - : リファレンスです。
- [XSLT を使った XML 変換](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT)
  - : XSLT を使うと、スタイルシートの制作者は、元の XML 文書を二つの重要な手法で変換できます。すなわち、コンテンツの操作・選別（もしお望みならば大規模な並べ替えも含まれます）および、異なる形式への変換です。
- [Mozilla JavaScript インターフェイスから XSLT を使う](/ja/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations)
  - : Mozilla 1.2 以降の JavaScript から XSLT 処理エンジンへのインターフェイスを説明します。
- [処理命令を使った引数の指定](/ja/docs/Web/XSLT/PI_Parameters)
  - : Firefox では `<?xml-stylesheet?>` 処理指令を使ってスタイルシートの引数を指定することができます。各引数は `<?xslt-param?>` 処理指令によって指定でき、この文書ではこれらを説明しています。
- [XSLT チュートリアル](https://www.w3schools.com/xml/xsl_intro.asp)
  - : この [W3Schools](https://www.w3schools.com) のチュートリアルでは、XML 文書を他の XHTML のような形態に変換するために、どのように XSLT を用いればいいのかを示します。
- [XSLT とは?](https://www.xml.com/pub/a/2000/08/holman/)
  - : この XSLT と XPath についての強力な導入では、技術についての予備知識が無い読者を想定して、背景、前後関係、構造、コンセプト、用語紹介を含めたガイドを提供します。
- [一般的な XSLT エラー](/ja/docs/Web/XSLT/Common_errors)
  - : この記事は Firefox で XSLT を使う際の問題点を列挙しています。

## 関連トピック

- [XML](/ja/docs/Web/XML/XML_Introduction), [XPath](/ja/docs/Web/XPath)
