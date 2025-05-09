---
title: "SVG: スケーラブルベクターグラフィック"
short-title: SVG
slug: Web/SVG
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**スケーラブルベクターグラフィック (SVG)** は [XML](/ja/docs/Web/XML) ベースのマークアップ言語で、二次元ベースの[ベクターグラフィック](https://en.wikipedia.org/wiki/Vector_graphics)を記述します。

そのため、テキストベースで、どんなサイズでもきれいにレンダリングできる画像を記述するためのオープンなウェブ標準であり、特に [CSS](/ja/docs/Web/CSS)、[DOM](/ja/docs/Web/API/Document_Object_Model)、[JavaScript](/ja/docs/Web/JavaScript)、[SMIL](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL) を含む他のウェブ標準とうまく動作するように設計されています。 SVG は本質的に、テキストに対する [HTML](/ja/docs/Web/HTML) のような位置づけの、グラフィック向けのものです。

SVG 画像と関連する振る舞いは [XML](/ja/docs/Web/XML) のテキストファイルに定義されるので、検索したり、インデックスをつけたり、スクリプトで操作したり、圧縮したりすることができます。加えて、これはあらゆるテキストエディターやドローソフトで作成したり編集したりできることを意味します。

旧来の {{Glossary("JPEG")}} や {{Glossary("PNG")}} のようなビットマップ画像形式と比較して、 SVG 形式のベクター画像は、品質を損なうことなく任意の大きさでレンダリングすることができ、テキストを更新することで、グラフィックエディターを使用せずに簡単にローカライズすることができます。適切なライブラリーを使用すれば、 SVG ファイルをその場でローカライズすることも可能です。

SVG は 1999 年から[ワールドワイドウェブコンソーシアム (W3C)](https://www.w3.org/) によって開発されています。

## チュートリアル

- [ゼロから始める SVG 入門](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch)
  - : このチュートリアルは SVG の内部を説明することを目的としており、技術的な詳細が詰まっています。単に美しい画像を描きたいだけなら、 [Inkscape のドキュメントページ](https://inkscape.org/learn/)にもっと有用なリソースがあるかもしれません。 W3C の [SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html) も SVG の良い入門書です。また、アドベントカレンダーをテーマにした 25 種類の SVG をコーディングする [SVG Tutorial](https://svg-tutorial.com/) もチェックしてみてください。

## ガイド

- [SVG 効果の HTML コンテンツへの適用](/ja/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [データ型](/ja/docs/Web/SVG/Guides/Content_type)
- [リンク](/ja/docs/Web/SVG/Guides/Linking)
- [名前空間の速修講座](/ja/docs/Web/SVG/Guides/Namespaces_crash_course)
- [スクリプティング](/ja/docs/Web/SVG/Guides/Scripting)
- [SMIL による SVG アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
- [画像としての SVG](/ja/docs/Web/SVG/Guides/SVG_as_an_image)
- [SVG フィルター](/ja/docs/Web/SVG/Guides/SVG_filters)
- [HTML 内の SVG 入門](/ja/docs/Web/SVG/Guides/SVG_in_HTML)

## リファレンス

- [SVG 要素リファレンス](/ja/docs/Web/SVG/Reference/Element)
  - : それぞれの SVG 要素についての詳細情報です。
- [SVG 属性リファレンス](/ja/docs/Web/SVG/Reference/Attribute)
  - : それぞれの SVG 属性の詳細情報です。
- [SVG DOM インターフェイスリファレンス](/ja/docs/Web/API/Document_Object_Model#svg_dom)
  - : JavaScript と連携するための SVG DOM API の詳細情報です。
- [HTML コンテンツへ SVG 効果を適用する](/ja/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : SVG は {{Glossary("HTML")}}、{{Glossary("CSS")}} と {{Glossary("JavaScript")}} と連携して動作します。

## リソース

- [SVG テストスイート](https://github.com/w3c/svgwg/wiki/Testing)
- [Markup validator](https://validator.w3.org/#validate_by_input)
- [SVG authoring guidelines](https://jwatt.org/svg/authoring/)
- [SVG tutorial](https://svg-tutorial.com/)
- [D3 data visualization library](https://d3js.org/)
