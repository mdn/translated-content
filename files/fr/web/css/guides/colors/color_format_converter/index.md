---
title: Outil de sélection des couleurs
slug: Web/CSS/Guides/Colors/Color_format_converter
original_slug: Web/CSS/CSS_colors/Color_format_converter
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Cet outil vous permet de choisir une couleur dans l'{{Glossary("color space", "espace colorimétrique")}} sRGB et de la convertir entre différents [formats de couleurs](/fr/docs/Web/CSS/Reference/Values/color_value) CSS, vous aidant ainsi à comprendre la syntaxe des notations de couleurs sRGB suivantes&nbsp;:

- {{cssxref("hex-color")}}, une _représentation hexadécimale d'une couleur_ [sRVB](/fr/docs/Glossary/RGB) utilisant ses composantes de couleur primaires (rouge, vert, bleu) écrites sous forme de nombres hexadécimaux, ainsi que sa transparence.
- {{CSSxRef("color_value/rgb", "rgb()")}}, qui définit une couleur donnée en fonction de ses composantes rouge, verte, bleue et alpha (transparence).
- {{CSSxRef("color_value/hsl", "hsl()")}}, qui définit une couleur donnée en fonction de ses composantes de teinte, de saturation, de luminosité et d'alpha (transparence).
- {{CSSxRef("color_value/hwb", "hwb()")}}, qui définit une couleur donnée en fonction de ses composantes de teinte, de blancheur, de noirceur et d'alpha (transparence).
- {{CSSxRef("color_value/color", "color()")}}, qui définit une couleur dans l'espace colorimétrique donné.

Lorsque vous sélectionnez une couleur, celle-ci s'affiche dans quatre formats de couleur CSS standard. Le contrôle du canal alpha est également pris en charge.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Les valeurs de couleur générées peuvent être utilisées partout où le type de données {{cssxref("color_value", "&lt;color&gt;")}} est pris en charge dans CSS.

## Voir aussi

- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
- [Valeurs de couleur CSS](/fr/docs/Web/CSS/CSS_colors/Color_values)
- [Utiliser la couleur à bon escient](/fr/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [Utiliser des couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- [Comprendre la couleur et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1: Contraste de la couleur](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Apprendre&nbsp;: Arrière-plans et bordures](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [Apprendre&nbsp;: Meilleures pratiques d'accessibilité CSS et JavaScript](/fr/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#couleur_et_contraste_de_couleur)
