---
title: 顏色選擇器
slug: Web/CSS/Guides/Colors/Color_format_converter
l10n:
  sourceCommit: c148812e0874220770cab62c16f33f48ceb98e99
---

這個工具讓你可以在 sRGB {{glossary("color space", "色彩空間")}}中選擇一個顏色，並在各種 CSS [顏色格式](/zh-TW/docs/Web/CSS/Reference/Values/color_value)之間進行轉換，幫助你了解以下 sRGB 顏色標記法的語法：

- {{cssxref("hex-color")}}，一種 [sRGB](/zh-TW/docs/Glossary/RGB) 顏色的*十六進位顏色表示法*，使用其主要顏色元件（紅、綠、藍）以及其透明度，以十六進位數字書寫。
- {{CSSxRef("color_value/rgb", "rgb()")}}，根據其紅、綠、藍和 alpha（透明度）元件來定義一個給定的顏色。
- {{CSSxRef("color_value/hsl", "hsl()")}}，根據其色相、飽和度、亮度和 alpha（透明度）元件來定義一個給定的顏色。
- {{CSSxRef("color_value/hwb", "hwb()")}}，根據其色相、白度、黑度和 alpha（透明度）元件來定義一個給定的顏色。
- {{CSSxRef("color_value/color", "color()")}}，在給定的色彩空間中定義一個顏色。

當你選擇一個顏色時，它會以四種標準的 CSS 顏色格式顯示。也支援控制 alpha 色版。

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

產生的顏色值可以在 CSS 中任何支援 {{cssxref("color_value", "&lt;color&gt;")}} 資料型別的地方使用。

## 參見

- [使用 CSS 屬性應用顏色](/zh-TW/docs/Web/CSS/Guides/Colors/Applying_color)
- [CSS 顏色值](/zh-TW/docs/Web/CSS/Guides/Colors/Color_values)
- [明智地使用顏色](/zh-TW/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [使用相對顏色](/zh-TW/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [了解顏色與亮度](/zh-TW/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1：顏色對比](/zh-TW/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [學習：使用 CSS 設定背景與邊框樣式](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [學習無障礙：顏色與顏色對比](/zh-TW/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#顏色與顏色對比)
