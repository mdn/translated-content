---
title: CSS 画像
short-title: 画像
slug: Web/CSS/Guides/Images
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS 画像** (CSS images) モジュールは、画像に利用できる型（{{CSSxRef("&lt;image&gt;")}} 型、その中の URL、グラデーション、その他の種類の画像）、どのように大きさを変更するか、様々なレイアウトモデルで画像やその他の置換コンテンツが応答するかを定義します。

## リファレンス

### プロパティ

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}
- {{cssxref("object-view-box")}}

CSS 画像モジュールは {{CSSxRef("image-resolution")}} プロパティも定義しています。今のところ、この機能に対応しているブラウザーはありません。

### 関数

- {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}
- {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
- {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
- {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
- {{CSSxRef("element", "element()")}}
- {{CSSxRef("image/image-set", "image-set()")}}

CSS 画像モジュールは {{CSSxRef("image/image", "image()")}} 関数も定義しています。今のところ、この機能に対応しているブラウザーはありません。

### データ型

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## ガイド

- [CSS グラデーションの使用](/ja/docs/Web/CSS/Guides/Images/Using_gradients)
  - : 特殊な CSS 画像型である*グラデーション*と、その作り方や使い方を紹介します。

- [CSS での画像スプライトの実装](/ja/docs/Web/CSS/Guides/Images/Implementing_image_sprites)
  - : 単一の文書でいくつかの画像をグループ化して、ダウロードリクエストを節約し、ページのスピードを上げることができる共通のテクニックを説明します。

- [置換要素のスタイル設定](/ja/docs/Web/CSS/Guides/Images/Replaced_element_properties)
  - : 置換要素にのみ適用されるプロパティを紹介します。

- [アスペクト比の理解](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
  - : `aspect-ratio` プロパティについて学び、置き換えられた要素と置き換えられていない要素のアスペクト比について解説し、いくつかの一般的なアスペクト比の用途を検証します。

- [CSS の `object-view-box` プロパティの使用](/ja/docs/Web/CSS/Guides/Images/Using_object-view-box)
  - : CSS の `object-view-box` プロパティについて学びましょう。画像のズームイン、ズームアウト、パンなどの方法があります。

## 関連概念

- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("url_function", "url()")}}
- [`<basic-shape-rect>`](/ja/docs/Web/CSS/Reference/Values/basic-shape#syntax_for_rectangles_basic-shape-rect)

## 仕様書

{{Specifications}}

## 関連情報

- [CSS フィルター効果](/ja/docs/Web/CSS/Guides/Filter_effects)モジュール
- [CSS 合成と混合](/ja/docs/Web/CSS/Guides/Compositing_and_blending)モジュール
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- [CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)モジュール
