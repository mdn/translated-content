---
title: XLink
slug: Glossary/XLink
tags:
    - CodingScripting
    - Glossary
---

XLink は、XML と XML、または他の文書との間のリンクを記述するために使用される W3C の標準規格です。その動作の一部は、どのように処理するかを実装に委ねられています。

単純な XLinks は Firefox で一応サポートされていますが（少なくとも SVG と MathML では）、プレーンな XML ドキュメントを XLinks で読み込んで、XML ツリーの関連ポイントをクリックしようとしても、リンクとしては機能しません。

XLink 1.0 で通常のリンクとしては面倒だと感じていた人のために、XLink 1.1 では、シンプルなリンクには`xlink:type="simple"`を指定する必要がなくなりました。

XLink は [SVG](/ja/docs/Web/SVG)や, [MathML](/ja/docs/Web/MathML)、及びその他の重要な標準で使用されています。

### 仕様

-   [XLink 1.0](https://www.w3.org/TR/xlink/)
-   [XLink 1.1](https://www.w3.org/TR/xlink11/) (現在進行中の草案)

### 関連項目

-   [XML](/ja/docs/Web/XML)
-   [Code snippets:getAttributeNS](/ja/docs/Web/API/Element/getAttributeNS) - この DOM メソッドをサポートしていないブラウザに対応するためのラッパー
