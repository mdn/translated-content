---
title: CSS 名前空間
slug: Web/CSS/Guides/Namespaces
original_slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: 3dce7daa89de9290c5ca04b6289756cd3c39d247
---

**CSS 名前空間** (CSS namespaces) は、 CSS で{{glossary("namespace", "名前空間")}}を使用するための構文を定義します。

CSS は HTML のスタイル設定だけのためにあるわけではありません。スタイルシートは、SVG、MathML、XML、HTML のスタイル設定にも使用でき、これらはそれぞれ異なる名前空間があり、または複数の名前空間を含む文書を持っています。

このモジュールで定義されている [`@namespace`](/ja/docs/Web/CSS/Reference/At-rules/@namespace) アットルールを使用すると、異なる名前空間にある同じ名前の要素を判別することができます。要素タグ名は、1 つの言語に固有のものではありません。例えば、 `<a>` 要素は HTML に限定されません。 SVG 内の `<a>` に、HTML 内のリンクとは異なるスタイルを適用したい場合などがあります。{{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} が正しい種類の要素を選択することを保証したい場合もあるでしょう。名前空間で、これらの問題に対処することができます。

`@namespace` ルールは、既定の名前空間宣言、および名前空間を名前空間の接頭辞に結び付けるために使用されます。名前空間モジュールは、これらの接頭辞を使用して名前空間修飾名を表すための構文も定義しています。名前の意味、あるいはその名前が有効であるかどうかは、コンテキストおよびホスト言語によって異なります。

## リファレンス

### アットルール

- {{cssxref("@namespace")}}

## ガイド

- [名前空間の速修講座](/ja/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : 名前空間とは何か、および XML および XML ベースのマークアップ言語で名前空間がどのように使用されているかを詳しく掘り下げて説明します。

## 関連概念

- CSS [名前空間区切り文字 (`|`)](/ja/docs/Web/CSS/Reference/Selectors/Namespace_separator) 結合子
- CSS [型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)
- CSS [全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- {{DOMXRef("CSSNamespaceRule")}} インターフェイス
  - {{DOMXRef("CSSNamespaceRule.namespaceURI")}} プロパティ
  - {{DOMXRef("CSSNamespaceRule.prefix")}} プロパティ
- [`Document.createAttributeNS()`](/ja/docs/Web/API/Document/createAttributeNS) メソッド
- [`Document.createElementNS()`](/ja/docs/Web/API/Document/createElementNS) メソッド
- [`Document.getElementsByTagNameNS()`](/ja/docs/Web/API/Document/getElementsByTagNameNS) メソッド
- [`Element.getAttributeNodeNS()`](/ja/docs/Web/API/Element/getAttributeNodeNS) メソッド
- [`Element.getAttributeNS()`](/ja/docs/Web/API/Element/getAttributeNS) メソッド
- [`Element.getElementsByTagNameNS()`](/ja/docs/Web/API/Element/getElementsByTagNameNS) メソッド
- [`Element.hasAttributeNS()`](/ja/docs/Web/API/Element/hasAttributeNS) メソッド
- [`Element.namespaceURI`](/ja/docs/Web/API/Element/namespaceURI) プロパティ
- [`Element.removeAttributeNS()`](/ja/docs/Web/API/Element/removeAttributeNS) メソッド
- [`Element.setAttributeNS()`](/ja/docs/Web/API/Element/setAttributeNS) メソッド
- [`Element.setAttributeNodeNS()`](/ja/docs/Web/API/Element/setAttributeNodeNS) メソッド
- [`NamedNodeMap.getNamedItemNS()`](/ja/docs/Web/API/NamedNodeMap/getNamedItemNS) メソッド
- [`NamedNodeMap.removeNamedItemNS()`](/ja/docs/Web/API/NamedNodeMap/removeNamedItemNS) メソッド
- [`NamedNodeMap.setNamedItemNS()`](/ja/docs/Web/API/NamedNodeMap/setNamedItemNS) メソッド
- {{glossary("Namespace", "名前空間")}} （用語集）

## 仕様書

{{Specifications}}

## 関連情報

- SVG の [`<a>`](/ja/docs/Web/SVG/Reference/Element/a#example) 要素
- [CSS `<url>` 型](/ja/docs/Web/CSS/Reference/Values/url_value)
- [CSS アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS アットルール関数](/ja/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
