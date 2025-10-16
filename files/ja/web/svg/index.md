---
title: "SVG: スケーラブルベクターグラフィック"
short-title: SVG
slug: Web/SVG
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

**スケーラブルベクターグラフィック (SVG)** は [XML](/ja/docs/Web/XML) ベースのマークアップ言語で、二次元ベースの[ベクターグラフィック](https://en.wikipedia.org/wiki/Vector_graphics)を記述します。

そのため、テキストベースで、どんなサイズでもきれいにレンダリングできる画像を記述するためのオープンなウェブ標準であり、特に [CSS](/ja/docs/Web/CSS)、[DOM](/ja/docs/Web/API/Document_Object_Model)、[JavaScript](/ja/docs/Web/JavaScript)、[SMIL](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL) を含む他のウェブ標準とうまく動作するように設計されています。 SVG は本質的に、テキストに対する [HTML](/ja/docs/Web/HTML) のような位置づけの、グラフィック向けのものです。

SVG 画像と関連する振る舞いは [XML](/ja/docs/Web/XML) のテキストファイルに定義されるので、検索したり、インデックスをつけたり、スクリプトで操作したり、圧縮したりすることができます。加えて、これはあらゆるテキストエディターやドローソフトで作成したり編集したりできることを意味します。

旧来の {{Glossary("JPEG")}} や {{Glossary("PNG")}} のようなビットマップ画像形式と比較して、 SVG 形式のベクター画像は、品質を損なうことなく任意の大きさでレンダリングすることができ、テキストを更新することで、グラフィックエディターを使用せずに簡単にローカライズすることができます。適切なライブラリーを使用すれば、 SVG ファイルをその場でローカライズすることも可能です。

SVG は 1999 年から[ワールドワイドウェブコンソーシアム (W3C)](https://www.w3.org/) によって開発されています。

## チュートリアル

[SVG チュートリアル](/ja/docs/Web/SVG/Tutorials)は、基礎からより高度なテクニックへと段階的に進みながら、事前知識がないことを前提に各テーマを解説するよう設計されています。

- [ゼロから始める SVG 入門](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch)
  - : このチュートリアルは SVG の内部を説明することを目的としており、技術的な詳細が詰まっています。単に美しい画像を描きたいだけなら、 [Inkscape のドキュメントページ](https://inkscape.org/learn/)にもっと有用なリソースがあるかもしれません。 W3C の [SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html) も SVG の良い入門書です。また、アドベントカレンダーをテーマにした 25 種類の SVG をコーディングする [SVG Tutorial](https://svg-tutorial.com/) もチェックしてみてください。

## ガイド

[SVGガイド](/ja/docs/Web/SVG/Guides)は、ウェブ上でのSVGの扱い方を支援するもので、埋め込み、MIME（メディア）タイプ、スクリプトの処理、アニメーション、フィルターなどのトピックを網羅しています。

- [SVG 効果の HTML コンテンツへの適用](/ja/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : 現代のブラウザーは、CSSスタイル内でSVGを使用し、HTMLコンテンツにグラフィック効果を適用することに対応しています。
- [コンテンツ型](/ja/docs/Web/SVG/Guides/Content_type)
  - : SVG はいくつもののデータ型を使用します。この記事ではこれらの型を、構文と用途の説明とともに掲載しています。
- [名前空間の速修講座](/ja/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : 名前空間は、複数の XML 方言に対応するユーザーエージェントにとって不可欠です。
    ブラウザーは、とても厳格である必要があります。名前空間を理解する時間を割くことで、将来の頭痛の種を回避できます。
- [スクリプティング](/ja/docs/Web/SVG/Guides/Scripting)
  - : JavaScriptを 使用して SVG を生成する操作を行う方法はいくつかあります。
    この記事では、イベント処理、インタラクティブ機能、埋め込み SVG コンテンツの操作について説明します。
- [SMIL による SVG アニメーション](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : SMIL は、インタラクティブなマルチメディアプレゼンテーションを作成するための XML ベースの言語です。
    作成者は、SMIL 構文を SVG 内で使用することにより、アニメーションの要素のタイミングとレイアウトを定義することができます。
- [画像としての SVG](/ja/docs/Web/SVG/Guides/SVG_as_an_image)
  - : SVG は、HTML、CSS、特定の SVG 要素、およびキャンバス API を通じて画像形式として使用できます。
    このページでは、画像ソースとして SVG を提供できる機能を掲載しています。
- [SVG フィルター](/ja/docs/Web/SVG/Guides/SVG_filters)
  - : SVG はフィルターに対応しているため、作成者は影やぼかしなどの効果を適用したり、さまざまなフィルターの結果を合成したりすることができます。
- [HTML 内の SVG 入門](/ja/docs/Web/SVG/Guides/SVG_in_HTML)
  - : この記事は、インライン SVG を使用する方法を示し、説明のための例を記載しています。

## リファレンス

[SVG リファレンス](/ja/docs/Web/SVG/Reference)の文書には、要素、属性、DOM インターフェイスに関する包括的な情報が記載されており、関連する仕様書や標準文書が掲載されています。

- [SVG の要素](/ja/docs/Web/SVG/Reference/Element)
  - : ベクターグラフィックを構築、描画、レイアウトするために使用する SVG 要素です。
- [SVG の属性](/ja/docs/Web/SVG/Reference/Attribute)
  - : 要素の扱い方やレンダリング方法を指定するために使用できる SVG 属性です。
- [SVG DOM インターフェイス](/ja/docs/Web/API/Document_Object_Model#svg_dom)
  - : JavaScript を使用して SVG を操作するための SVG DOM API です。

## リソース

- [SVG テストスイート](https://github.com/w3c/svgwg/wiki/Testing)
- [Markup validator](https://validator.w3.org/#validate_by_input)
- [SVG authoring guidelines](https://jwatt.org/svg/authoring/)
- [SVG tutorial](https://svg-tutorial.com/)
- [D3 data visualization library](https://d3js.org/)
