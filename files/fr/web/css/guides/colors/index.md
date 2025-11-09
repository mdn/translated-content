---
title: Couleurs CSS
slug: Web/CSS/Guides/Colors
original_slug: Web/CSS/CSS_colors
l10n:
  sourceCommit: 54ac1367cb817a0079c30d2e36b5cbafc0a01431
---

Le module **Couleurs CSS** définit les couleurs, les types de couleurs, le mélange des couleurs, l'opacité, ainsi que la manière d'appliquer ces couleurs et effets au contenu HTML.

Bien que ce module ne comporte que deux propriétés CSS, {{CSSXref("color")}} et {{CSSXref("opacity")}}, plus de 20 propriétés CSS et SVG, images CSS, règles at-rules et règles `@media` dépendent de ces deux propriétés.

## Couleurs en action

Le convertisseur de syntaxe de couleur ci-dessous affiche les valeurs de la couleur actuellement sélectionnée en [rouge-vert-bleu](/fr/docs/Web/CSS/Reference/Values/color_value/rgb) (RVB), [hexadécimal](/fr/docs/Web/CSS/Reference/Values/hex-color) (HEX), [teinte, saturation et luminosité](/fr/docs/Web/CSS/Reference/Values/color_value/hsl) (TSL), et [teinte, blancheur et noirceur](/fr/docs/Web/CSS/Reference/Values/color_value/hwb) (TBN) selon les formats de couleur CSS. Toutes les valeurs RVB, HEX, TSL et TBN ici, bien qu'écrites différemment, représentent la même couleur.

{{EmbedGHLiveSample("css-examples/modules/colors.html", '100%', 450)}}

Sélectionner une couleur via le [sélecteur de couleur](/fr/docs/Web/HTML/Reference/Elements/input/color) et une opacité via le [curseur](/fr/docs/Web/HTML/Reference/Elements/input/range) met à jour les valeurs RVB, HEX, TSL et TBN. Lorsque vous choisissez une nouvelle couleur ou valeur d'opacité, la couleur de l'arrière-plan et celle du curseur sont mises à jour via les propriétés CSS {{CSSXref("background-color")}} et {{CSSXref("accent-color")}}, respectivement.

Pour voir le code de ce convertisseur de syntaxe de couleur, [consultez la source sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/css-examples/blob/main/modules/colors.html).

## Référence

### Propriétés

- {{CSSXref("color")}}
- {{CSSXref("dynamic-range-limit")}}
- {{CSSXref("opacity")}}

### Règles @ et descripteurs

Le module Couleurs CSS introduit également la règle @ {{CSSXref("@color-profile")}}, ainsi que ses descripteurs `components`, `rendering-intent` et `src`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Fonctions

- Fonctions de couleur&nbsp;:
  - [`rgb()`](/fr/docs/Web/CSS/Reference/Values/color_value/rgb)
  - [`hsl()`](/fr/docs/Web/CSS/Reference/Values/color_value/hsl)
  - [`hwb()`](/fr/docs/Web/CSS/Reference/Values/color_value/hwb)
  - [`lab()`](/fr/docs/Web/CSS/Reference/Values/color_value/lab)
  - [`lch()`](/fr/docs/Web/CSS/Reference/Values/color_value/lch)
  - [`oklab()`](/fr/docs/Web/CSS/Reference/Values/color_value/oklab)
  - [`oklch()`](/fr/docs/Web/CSS/Reference/Values/color_value/oklch)
  - [`color()`](/fr/docs/Web/CSS/Reference/Values/color_value/color)
- [`color-mix()`](/fr/docs/Web/CSS/Reference/Values/color_value/color-mix)
- [`contrast-color()`](/fr/docs/Web/CSS/Reference/Values/color_value/contrast-color)
- {{CSSXref("color_value/light-dark", "light-dark()")}}
- {{CSSXref("dynamic-range-limit-mix()")}}

Les modules Couleurs CSS introduisent également les fonctions {{CSSXref("color_value/device-cmyk", "device-cmyk()")}}, `contrast-color()` et `hdr-color()`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Types de valeurs

- {{CSSXref("&lt;color&gt;")}}
- [`<color-function>`](#fonctions)
- {{CSSXref("hex-color")}}
- {{CSSXref("named-color")}}
- {{CSSXref("alpha-value")}}
- {{CSSXref("hue")}}
- {{CSSXref("system-color")}}
- [`<colorspace-params>`](/fr/docs/Web/CSS/Reference/Values/color_value/color#using_predefined_color_spaces_with_color)

### Termes du glossaire et mots-clés

- {{glossary("color space")}}
- [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword)
- {{glossary("interpolation")}}
- {{glossary("RGB")}}
- [`transparent`](/fr/docs/Web/CSS/Reference/Values/named-color#transparent)

### Interfaces

Le module Couleurs CSS introduit également l'interface `CSSColorProfileRule`. Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Guides

- [Appliquer la couleur aux éléments HTML avec CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Un guide pour utiliser CSS afin d'appliquer la couleur à différents types de contenu, y compris toutes les propriétés CSS acceptant `<color>` comme valeur.
- [Valeurs de couleur CSS](/fr/docs/Web/CSS/CSS_colors/Color_values)
  - : Un aperçu des espaces colorimétriques et des différentes notations fonctionnelles `<color>` disponibles en CSS.
- [Utiliser la couleur judicieusement](/fr/docs/Web/CSS/CSS_colors/Using_color_wisely)
  - : Théorie des couleurs et ressources, y compris comment trouver les bonnes couleurs pour créer une palette accessible, le contraste et l'impression en couleur.
- [Utiliser les couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
  - : Cet article explique la syntaxe relative des couleurs CSS, présente les différentes options et propose des exemples illustratifs.
- [Convertisseur de format de couleur](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - : Un outil permettant de saisir ou de choisir une couleur et de copier sa valeur correspondante dans n'importe quel [format de couleur](/fr/docs/Web/CSS/Reference/Values/color_value) CSS.
- [Comprendre la couleur et la luminance](/fr/docs/Web/Accessibility/Guides/Colors_and_Luminance)
  - : Perception des couleurs et utilisation des couleurs en tenant compte des utilisateur·ice·s daltonien·ne·s, malvoyant·e·s et des utilisateur·ice·s avec des troubles vestibulaires ou d'autres troubles neurologiques.
- [WCAG 1.4.1&nbsp;: Contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
  - : Explication des exigences de contraste entre le fond et le contenu de premier plan pour garantir la lisibilité.

## Concepts associés

- Propriétés CSS faisant partie d'autres spécifications&nbsp;:
  - {{CSSXref("accent-color")}}
  - {{CSSXref("background-color")}}
  - {{CSSXref("background-image")}}
  - {{CSSXref("border-color")}}
  - {{CSSXref("box-shadow")}}
  - {{CSSXref("caret-color")}}
  - {{CSSXref("color")}}
  - {{CSSXref("color-scheme")}}
  - {{CSSXref("column-rule-color")}}
  - {{CSSXref("outline-color")}}
  - {{CSSXref("scrollbar-color")}}
  - {{CSSXref("text-decoration-color")}}
  - {{CSSXref("text-emphasis-color")}}
  - {{CSSXref("text-shadow")}}
  - {{CSSXref("-webkit-tap-highlight-color")}}
- Propriétés de couleur SVG faisant partie d'autres spécifications&nbsp;:
  - [`fill`](/fr/docs/Web/SVG/Reference/Attribute/fill)
  - [`flood-color`](/fr/docs/Web/SVG/Reference/Attribute/flood-color)
  - [`lighting-color`](/fr/docs/Web/SVG/Reference/Attribute/lighting-color)
  - [`stop-color`](/fr/docs/Web/SVG/Reference/Attribute/stop-color)
  - [`stroke`](/fr/docs/Web/SVG/Reference/Attribute/stroke)
- Attribut SVG [`color`](/fr/docs/Web/SVG/Reference/Attribute/color)
- Terme du glossaire {{glossary("Color wheel")}}
- Terme du glossaire {{glossary("Interpolation")}}
- La règle at-rule [`@font-palette-values`](/fr/docs/Web/CSS/Reference/At-rules/@font-palette-values) et le descripteur [`override-colors`](/fr/docs/Web/CSS/Reference/At-rules/@font-palette-values/override-colors)
- La règle at-rule [`@color-profile`](/fr/docs/Web/CSS/Reference/At-rules/@color-profile)
- La fonctionnalité @media [`color-gamut`](/fr/docs/Web/CSS/Reference/At-rules/@media/color-gamut)
- La fonctionnalité @media [`forced-colors`](/fr/docs/Web/CSS/Reference/At-rules/@media/forced-colors)

## Spécifications

{{Specifications}}

## Voir aussi

- [Module d'ajustement des couleurs CSS](/fr/docs/Web/CSS/CSS_color_adjustment) et la propriété {{CSSXref("print-color-adjust")}}.
- [Module d'images CSS](/fr/docs/Web/CSS/Guides/Images), où sont définies les images CSS [`<gradient>`](/fr/docs/Web/CSS/Reference/Values/gradient).
- L'interface [`VideoColorSpace`](/fr/docs/Web/API/VideoColorSpace)
- L'élément SVG [`<feColorMatrix>`](/fr/docs/Web/SVG/Reference/Element/feColorMatrix)
- [API Canvas&nbsp;: appliquer des styles et des couleurs](/fr/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#colors)
