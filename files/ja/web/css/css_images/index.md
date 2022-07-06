---
title: CSS 画像
slug: Web/CSS/CSS_Images
tags:
  - CSS
  - CSS 画像
  - ガイド
  - 概要
  - Reference
translation_of: Web/CSS/CSS_Images
---
{{CSSRef}}

**CSS 画像** (CSS Images) は CSS のモジュールの一つで、どのような種類の画像が利用できるか ({{CSSxRef("&lt;image&gt;")}} 型、その中の URL、グラデーション、その他の種類の画像)、どのように大きさを変更するか、様々なレイアウトモデルで画像やその他の置換コンテンツが応答するかを定義します。

## リファレンス

### プロパティ

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("image-resolution")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}

### 関数

- {{CSSxRef("gradient/linear-gradient()", "linear-gradient()")}}
- {{CSSxRef("gradient/radial-gradient()", "radial-gradient()")}}
- {{CSSxRef("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}}
- {{CSSxRef("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}
- {{CSSxRef("gradient/conic-gradient()", "conic-gradient()")}}
- {{CSSxRef("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}}
- {{CSSxRef("url()", "url()")}}
- {{CSSxRef("element()", "element()")}}
- {{CSSxRef("image/image()", "image()")}}
- {{CSSxRef("cross-fade()", "cross-fade()")}}

### データ型

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## ガイド

- [CSS グラデーションの使用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
  - : 特殊な CSS 画像型である*グラデーション*と、その作り方や使い方を紹介します。
- [CSS での画像スプライトの実装](/ja/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
  - : 単一の文書でいくつかの画像をグループ化して、ダウロードリクエストを節約し、ページのスピードを上げることができる共通のテクニックを説明します。

## 仕様書

| 仕様書                                                           | 状態                     | 備考                                                                                                                               |
| ---------------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Images")}}                                      | {{Spec2("CSS4 Images")}} | {{CSSxRef("image-resolution")}}, {{CSSxRef("gradient/conic-gradient()", "conic-gradient()")}}, {{CSSxRef("image/image()", "image()")}} を追加                            |
| {{SpecName("CSS3 Images")}}                                      | {{Spec2("CSS3 Images")}} | {{CSSxRef("image-orientation")}}, {{CSSxRef("image-rendering")}}, {{CSSxRef("object-fit")}}, {{CSSxRef("object-position")}} を追加 |
| {{SpecName("Compat", "#css-%3Cimage%3E-type", "CSS Gradients")}} | {{Spec2("Compat")}}      | `-webkit` の接頭辞が付いたグラデーション値の関数を標準化                                                                           |
| {{SpecName("CSS3 Values", "#urls", "&lt;url&gt;")}}              | {{Spec2("CSS3 Values")}} |                                                                                                                                    |
| {{Specname("CSS2.1", "syndata.html#uri", "&lt;uri&gt;")}}        | {{Spec2("CSS2.1")}}      |                                                                                                                                    |
| {{SpecName("CSS1", "#url", "&lt;url&gt;")}}                      | {{Spec2("CSS1")}}        | 初回定義                                                                                                                           |
