---
title: 色選択ツール
slug: Web/CSS/CSS_colors/Color_picker_tool
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

このツールは、 sRGB {{glossary("color space","色空間")}}で色を選択し、それをさまざまな CSS [色形式](/ja/docs/Web/CSS/color_value)に変換することで、次の sRGB 色記法の構文を理解するのに役立ちます。

- {{cssxref("hex-color")}} は [sRGB](/ja/docs/Glossary/RGB) 色の 16 進色表現であり、三原色（赤、緑、青）と透明度を 16 進数で記述します。
- {{CSSxRef("color_value/rgb", "rgb()")}} は、赤、緑、青とアルファ（透明度）の成分によって指定される色を定義します。
- {{CSSxRef("color_value/hsl", "hsl()")}} は、色相、彩度、明度とアルファ（透明度）の成分によって指定される色を定義します。
- {{CSSxRef("color_value/hwb", "hwb()")}} は、色相、白色度、黒色度とアルファ（透明度）の成分によって指定される色を定義します。
- {{CSSxRef("color_value/color", "color()")}} は、指定された色空間で色を定義します。

色を定義するパラメーターを調整すると、3 つの標準ウェブ CSS 形式すべてが表示されます。アルファチャンネルの制御にも対応しています。

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

作成した色は、 CSS において {{cssxref("color_value", "&lt;color&gt")}} データ型ならどこでも使用することができます。

## 関連情報

- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/CSS/CSS_colors/Applying_color)
- [CSS 色の値](/ja/docs/Web/CSS/CSS_colors/Color_values)
- [賢い色の使用](/ja/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [相対色の使用](/ja/docs/Web/CSS/CSS_colors/Relative_colors)
- [色と明るさの理解](/ja/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
- [WCAG 1.4.1: 色のコントラスト](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [学習: CSS を使用した背景と境界のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [アクセシビリティの学習: 色とそのコントラスト](/ja/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#色とそのコントラスト)
