---
title: CSS シェイプ
slug: Web/CSS/CSS_Shapes
tags:
  - 境界
  - CSS
  - CSS シェイプ
  - ガイド
  - 概要
  - Reference
  - シェイプ
  - wrapping
translation_of: Web/CSS/CSS_Shapes
---
{{CSSRef}}

**CSS シェイプ**は、 CSS で使用する幾何学的な図形を記述します。[レベル 1 の仕様書](https://drafts.csswg.org/css-shapes/)では、 CSS シェイプは浮動状態の要素に適用されます。仕様書では浮動状態の要素においてシェイプを定義する様々な方法を定義しており、コンテンツの折り返し線が要素ボックスの矩形に従うのではなく、図形に回り込むようになります。

## 基本的な例

以下の例では、左に浮動状態の画像を表示し、`shape-outside` プロパティを `circle(50%)` の値で適用しています。これは円形を作成し、浮動状態の要素で折り返すコンテンツが図形に回り込むようになります。これにより、テキストの行ボックスが折り返す長さが変わります。

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## リファレンス

### プロパティ

- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-outside")}}

### データ型

- {{cssxref("&lt;basic-shape&gt;")}}

## ガイド

- [CSS シェイプの概要](/ja/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- [ボックス値からのシェイプ](/ja/docs/Web/CSS/CSS_Shapes/From_box_values)
- [基本シェイプ](/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
- [画像からのシェイプ](/ja/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)
- [CSS でのシェイプのパスの編集 — Firefox 開発ツール](/ja/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes)

## 外部リソース

- [A list of CSS Shapes resources](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101)
- [Creating non-rectangular layouts with CSS Shapes](https://www.sarasoueidan.com/blog/css-shapes/)
- [How To Use CSS Shapes In Your Web Design](https://webdesign.tutsplus.com/tutorials/how-to-use-css-shapes-in-your-web-design--cms-27498)
- [How To Get Started With CSS Shapes](https://www.webdesignerdepot.com/2015/03/how-to-get-started-with-css-shapes/)
- [What I Learned In One Weekend With CSS Shapes](https://medium.com/@MHarreither/what-i-learned-in-one-weekend-with-css-shapes-66ae9be69cc5)
- [CSS vs. SVG: Shapes and Arbitrarily-Shaped UI Components](https://theblog.adobe.com/css-vs-svg-shapes-and-arbitrarily-shaped-ui-components/)

## 仕様書

| 仕様書                     | 状態                    | 備考     |
| -------------------------- | ----------------------- | -------- |
| {{SpecName("CSS Shapes")}} | {{Spec2("CSS Shapes")}} | 初回定義 |
