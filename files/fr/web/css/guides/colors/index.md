---
title: Couleurs CSS
short-title: Couleurs
slug: Web/CSS/Guides/Colors
l10n:
  sourceCommit: 1055ee79c55c33ef82e2efc27ed248a561365724
---

Le module **Couleurs CSS** définit les couleurs, les types de couleurs, le mélange des couleurs, l'opacité, ainsi que la manière d'appliquer ces couleurs et effets au contenu HTML.

Bien que ce module ne comporte que deux propriétés CSS, {{CSSxRef("color")}} et {{CSSxRef("opacity")}}, plus de 20 propriétés CSS et SVG, images CSS, règles at-rules et règles `@media` dépendent de ces deux propriétés.

## Couleurs en action

Le convertisseur de syntaxe de couleur ci-dessous affiche les valeurs de la couleur actuellement sélectionnée en [rouge-vert-bleu](/fr/docs/Web/CSS/Reference/Values/color_value/rgb) (RVB), [hexadécimal](/fr/docs/Web/CSS/Reference/Values/hex-color) (HEX), [teinte, saturation et luminosité](/fr/docs/Web/CSS/Reference/Values/color_value/hsl) (TSL), et [teinte, blancheur et noirceur](/fr/docs/Web/CSS/Reference/Values/color_value/hwb) (TBN) selon les formats de couleur CSS. Toutes les valeurs RVB, HEX, TSL et TBN ici, bien qu'écrites différemment, représentent la même couleur.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Sélectionner une couleur avec le [sélecteur de couleur](/fr/docs/Web/HTML/Reference/Elements/input/color) et une opacité avec le [curseur](/fr/docs/Web/HTML/Reference/Elements/input/range) met à jour les valeurs RVB, HEX, TSL et TBN. Lorsque vous choisissez une nouvelle couleur ou valeur d'opacité, la couleur de l'arrière-plan et celle du curseur sont mises à jour avec les propriétés CSS {{CSSxRef("background-color")}} et {{CSSxRef("accent-color")}}, respectivement.

Pour voir le code de ce convertisseur de syntaxe de couleur, [consultez la source sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Référence

### Propriétés

- {{CSSxRef("color")}}
- {{CSSxRef("opacity")}}

### Règles @ et descripteurs

Le module Couleurs CSS introduit également la règle @ {{CSSxRef("@color-profile")}}, ainsi que ses descripteurs `components`, `rendering-intent` et `src`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Fonctions

- Fonctions de couleur&nbsp;:
  - {{CSSxRef("color_value/rgb", "rgb()")}}
  - {{CSSxRef("color_value/hsl", "hsl()")}}
  - {{CSSxRef("color_value/hwb", "hwb()")}}
  - {{CSSxRef("color_value/lab", "lab()")}}
  - {{CSSxRef("color_value/lch", "lch()")}}
  - {{CSSxRef("color_value/oklab", "oklab()")}}
  - {{CSSxRef("color_value/oklch", "oklch()")}}
  - {{CSSxRef("color_value/color", "color()")}}
- {{CSSxRef("color_value/alpha", "alpha()")}}
- {{CSSxRef("color_value/color-mix", "color-mix()")}}
- {{CSSxRef("color_value/contrast-color", "contrast-color()")}}
- {{CSSxRef("color_value/light-dark", "light-dark()")}}

Les modules Couleurs CSS introduisent également les fonctions {{CSSxRef("color_value/device-cmyk", "device-cmyk()")}}, `contrast-color()` et `hdr-color()`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Types de valeurs

- {{CSSxRef("&lt;color&gt;")}}
- [`<color-function>`](#fonctions)
- {{CSSxRef("&lt;hex-color&gt;")}}
- {{CSSxRef("&lt;named-color&gt;")}}
- {{CSSxRef("&lt;alpha-value&gt;")}}
- {{CSSxRef("&lt;hue&gt;")}}
- {{CSSxRef("&lt;system-color&gt;")}}
- [`<colorspace-params>`](/fr/docs/Web/CSS/Reference/Values/color_value/color#utiliser_les_espaces_colorimétriques_prédéfinis_avec_color)

### Termes du glossaire et mots-clés

- {{Glossary("color space", "Espace colorimétrique")}}
- [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor)
- {{Glossary("Interpolation")}}
- {{Glossary("RGB")}}
- [`transparent`](/fr/docs/Web/CSS/Reference/Values/named-color#transparent)

### Interfaces

Le module Couleurs CSS introduit également l'interface `CSSColorProfileRule`. Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Guides

- [Appliquer la couleur aux éléments HTML avec CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Un guide pour utiliser CSS afin d'appliquer la couleur à différents types de contenu, y compris toutes les propriétés CSS acceptant `<color>` comme valeur.
- [Valeurs de couleur CSS](/fr/docs/Web/CSS/Guides/Colors/Color_values)
  - : Un aperçu des espaces colorimétriques et des différentes notations fonctionnelles `<color>` disponibles en CSS.
- [Utiliser la couleur judicieusement](/fr/docs/Web/CSS/Guides/Colors/Using_color_wisely)
  - : Théorie des couleurs et ressources, y compris comment trouver les bonnes couleurs pour créer une palette accessible, le contraste et l'impression en couleur.
- [Utiliser les couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors)
  - : Cet article explique la syntaxe relative des couleurs CSS, présente les différentes options et propose des exemples illustratifs.
- [Convertisseur de format de couleur](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - : Un outil permettant de saisir ou de choisir une couleur et de copier sa valeur correspondante dans n'importe quel [format de couleur](/fr/docs/Web/CSS/Reference/Values/color_value) CSS.
- [Comprendre la couleur et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Perception des couleurs et utilisation des couleurs en tenant compte des utilisateur·ice·s daltonien·ne·s, malvoyant·e·s et des utilisateur·ice·s avec des troubles vestibulaires ou d'autres troubles neurologiques.
- [WCAG 1.4.1&nbsp;: Contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Explication des exigences de contraste entre le fond et le contenu de premier plan pour garantir la lisibilité.
- [Sérialisation des valeurs CSS](/fr/docs/Web/API/CSS_Object_Model/CSS_value_serialization)
  - : Comment les [API CSSOM](/fr/docs/Web/API/CSS_Object_Model) sérialisent les couleurs et autres valeurs en représentations de chaînes de caractères standardisées.

## Concepts associés

- Les propriétés CSS faisant partie d'autres spécifications&nbsp;:
  - {{CSSxRef("accent-color")}}
  - {{CSSxRef("background-color")}}
  - {{CSSxRef("background-image")}}
  - {{CSSxRef("border-color")}}
  - {{CSSxRef("box-shadow")}}
  - {{CSSxRef("caret-color")}}
  - {{CSSxRef("color")}}
  - {{CSSxRef("color-scheme")}}
  - {{CSSxRef("column-rule-color")}}
  - {{CSSxRef("dynamic-range-limit")}}
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("scrollbar-color")}}
  - {{CSSxRef("text-decoration-color")}}
  - {{CSSxRef("text-emphasis-color")}}
  - {{CSSxRef("text-shadow")}}
  - {{CSSxRef("-webkit-tap-highlight-color")}}
- Les propriétés de couleur SVG faisant partie d'autres spécifications&nbsp;:
  - {{SVGAttr("fill")}}
  - {{SVGAttr("flood-color")}}
  - {{SVGAttr("lighting-color")}}
  - {{SVGAttr("stop-color")}}
  - {{SVGAttr("stroke")}}
- L'attribut SVG {{SVGAttr("color")}}
- Le terme du glossaire {{Glossary("Color wheel", "Roue chromatique")}}
- Le terme du glossaire {{Glossary("Interpolation")}}
- La règle {{CSSxRef("@font-palette-values")}} et le descripteur {{CSSxRef("@font-palette-values/override-colors", "override-colors")}}
- La règle {{CSSxRef("@color-profile")}}
- La fonctionnalité `@media` {{CSSxRef("@media/color-gamut", "color-gamut")}}
- La fonctionnalité `@media` {{CSSxRef("@media/forced-colors", "forced-colors")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [d'ajustement des couleurs CSS](/fr/docs/Web/CSS/Guides/Color_adjustment) et la propriété {{CSSxRef("print-color-adjust")}}.
- Le module [d'images CSS](/fr/docs/Web/CSS/Guides/Images), où sont définies les images CSS {{CSSxRef("&lt;gradient&gt;")}}.
- L'interface API {{DOMxRef("VideoColorSpace")}}
- L'élément SVG {{SVGElement("feColorMatrix")}}
- [L'API Canvas&nbsp;: appliquer des styles et des couleurs](/fr/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#les_couleurs)
- Outils&nbsp;:
  - [Convertisseur de format de couleur](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - [Mélangeur de couleurs](/fr/docs/Web/CSS/Guides/Colors/Color_mixer)
