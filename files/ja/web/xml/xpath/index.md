---
title: XPath
slug: Web/XML/XPath
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

XPath は XML Path Language の略称です。非 XML 構文を使って、柔軟な方法で [XML](/ja/docs/Web/XML/Guides/XML_introduction) 文書の様々な部分をアドレッシングする（指し示す）ことができます。さらに、文書中で指し示されたノードがパターンに一致するかどうかの判定を行うこともできます。

XPath は主に [XSLT](/ja/docs/Web/XML/XSLT) で使われていますが、 [HTML](/ja/docs/Web/HTML) や [SVG](/ja/docs/Web/SVG) のような XML 風の言語の文書の [DOM](/ja/docs/Web/API/Document_Object_Model) においても {{DOMxRef("XPathExpression")}} を用いることで、 {{DOMxRef("Document.getElementById()")}} や {{DOMxRef("Document.querySelectorAll()")}} メソッドや {{DOMxRef("Node.childNodes")}} プロパティ、その他の DOM コア機能に依存することなく、はるかにパワフルな方法でたどることができます。

XPath は XML 文書の階層構造を辿るために（URL のような）パス表記を使います。また、URI や XML 属性値の中で使えるように非 XML 構文を採用しています。

## ガイド

- [JavaScript からの XPath 利用入門](/ja/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : XSLT 以外で XPath を使用する方法です。
- [XPath スニペット](/ja/docs/Web/XML/XPath/Guides/Snippets)
  - : JavaScript ユーティリティ関数があり、 [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/) API に基づいて、独自のコードで使用することができます。

## リファレンス

- [XPath:Axes](/ja/docs/Web/XML/XPath/Reference/Axes)
  - : XPath 仕様で定められている軸 (Axis) の一覧とその定義。軸はノード間の関係性を記述するのに使われます。
- [XPath:Functions](/ja/docs/Web/XML/XPath/Reference/Functions)
  - : コア XPath 関数及び XSLT 固有の追加 XPath 関数の一覧とその定義。

## 関連事項

- [XSLT](/ja/docs/Web/XML/XSLT), [XML](/ja/docs/Web/XML), [DOM](/ja/docs/Web/API/Document_Object_Model)
- [XSLT による XML の変換](/ja/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
- [CSS セレクターと XPath の比較](/ja/docs/Web/XML/XPath/Guides/Comparison_with_CSS_selectors)
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/) - XSLT と XPath の予備知識が無い人を対象に、その背景や構造、概念、初歩的な専門用語を紹介する広範囲な入門ガイド。 (xml.com, 2000)
- [XPath tester](https://extendsclass.com/xpath-tester.html) - オンラインの XPath ビルダー／デバッガー
