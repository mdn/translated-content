---
title: XPath
slug: Web/XPath
tags:
  - CSS セレクター
  - DOM
  - JXON
  - Landing
  - Path
  - XML
  - XPath
  - XSLT
translation_of: Web/XPath
---
{{XSLTRef}}

XPath は XML Path Language の略称です。非 XML 構文を使って、柔軟な方法で [XML](/ja/docs/Web/XML/XML_introduction) 文書の様々な部分をアドレッシングする（指し示す）ことができます。さらに、文書中で指し示されたノードがパターンに一致するかどうかの判定を行うこともできます。

XPath は主に [XSLT](/ja/docs/Web/XSLT) で使われていますが、 [HTML](/ja/docs/Web/HTML) や [SVG](/ja/docs/Web/SVG) のような XML 風の言語の文書の [DOM](/ja/docs/Web/API/Document_Object_Model) においても {{DOMxRef("XPathExpression")}} を用いることで、 {{DOMxRef("Document.getElementById()")}} や {{DOMxRef("Document.querySelectorAll()")}} メソッドや {{DOMxRef("Node.childNodes")}} プロパティ、その他の DOM コア機能に依存することなく、はるかにパワフルな方法でたどることができます。

XPath は XML 文書の階層構造を辿るために（URL のような）パス表記を使います。また、URI や XML 属性値の中で使えるように非 XML 構文を採用しています。

> **Note:** XPath の対応状況は大きく異なります。 Firefox は合理的にうまく対応しています（対応をさらに改善する計画はありません）が、他のブラウザーではそれほど実装されていません。ポリフィルが必要な場合は、[js-xpath](http://nchc.dl.sourceforge.net/project/js-xpath/js-xpath/1.0.0/xpath.js)または [wicked-good-xpath](https://github.com/google/wicked-good-xpath) を検討してください。

## ドキュメント

- [JavaScript からの XPath 利用入門](/ja/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
  - : XSLT 以外で XPath を使用する方法です。
- [XPath:Axes](/ja/docs/Web/XPath/Axes)
  - : XPath 仕様で定められている軸 (Axis) の一覧とその定義。軸はノード間の関係性を記述するのに使われます。
- [XPath:Functions](/ja/docs/Web/XPath/Functions)
  - : コア XPath 関数及び XSLT 固有の追加 XPath 関数の一覧とその定義。
- [XSLT による XML の変換](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT)
  - : XSLT では変換したい XML 文書内のコードの一部を指し示すのに XPath を使います。
- [XPath スニペット](/ja/docs/Web/XPath/Snippets)
  - : これらは [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/) API に基づいて、独自のコードで使用できる JavaScript ユーティリティ関数です。
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/) （英語）
  - : XSLT と XPath の予備知識が無い人を対象に、その背景や構造、概念、初歩的な専門用語を紹介する広範囲な入門ガイド。

## ツール

- [XMLQuire (以前は SketchPath と呼ばれていた)](http://qutoric.com/xmlquire/)
  - : グラフィカルな XPath ビルダー／デバッガー (.NET) です。
- [XPath tester](https://extendsclass.com/xpath-tester.html)
  - : オンラインの XPath ビルダー／デバッガーです。

## 関連事項

- [XSLT](/ja/docs/Web/XSLT), [XML](/ja/docs/Web/XML), [DOM](/ja/docs/Web/API/Document_Object_Model)
- [CSS セレクターと XPath の比較](/ja/docs/Web/XPath/Comparison_with_CSS_selectors)

<section id="Quick_links"><ol><li><strong><a href="/ja/docs/Web/XSLT">XSLT</a></strong></li><li><strong><a href="/ja/docs/Web/EXSLT">EXSLT</a></strong></li><li><strong><a href="/ja/docs/Web/XPath">XPath</a></strong></li><li class="toggle"><details open><summary>Guides</summary><ol><li><a href="/ja/docs/Web/XPath/Comparison_with_CSS_selectors">CSS セレクターと XPath の比較</a></li><li><a href="/ja/docs/Web/XPath/Snippets">XPath スニペット</a></li></ol></details></li><li class="toggle"><details open><summary><a href="/ja/docs/Web/XPath/Axes">XPath 軸</a></summary>{{ListSubpagesForSidebar("/ja/docs/Web/XPath/Axes")}}</details></li><li class="toggle"><details open><summary><a href="/ja/docs/Web/XPath/Functions">XPath 関数</a></summary>{{ListSubpagesForSidebar("/ja/docs/Web/XPath/Functions")}}</details></li></ol></section>
