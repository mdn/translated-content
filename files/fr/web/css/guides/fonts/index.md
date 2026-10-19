---
title: Les polices CSS
short-title: Les polices
slug: Web/CSS/Guides/Fonts
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

Le module de **polices CSS** définit les propriétés relatives aux polices et la façon dont les ressources des polices sont chargées. Il permet de définir le style d'une police, comme sa famille, sa taille ou sa graisse ainsi que la variante du glyphe à utiliser dans le cas des polices disposant de plusieurs glyphes par caractère.

Une police est un fichier de ressources contenant la représentation visuelle des caractères, mappant les codes de caractères aux glyphes qui représentent les lettres, les chiffres, la ponctuation et même les emojis d'une police de caractères. Une famille de polices est un groupe de polices partageant des styles de conception et des propriétés de police communs, chaque membre du groupe offrant différentes façons d'afficher les glyphes, variant par le poids du trait, l'inclinaison ou la largeur relative, entre autres attributs. Une police représente généralement un style unique d'une famille de polices, comme Helvetica en gras et italique. Une famille de polices est l'ensemble complet des styles. L'inclusion d'une telle police dans un document ou un design se fait en définissant une déclaration `@font-face` distincte pour chaque ressource de police.

Les propriétés, les règles @ et les descripteurs du module de polices CSS permettent le téléchargement de plusieurs variantes d'une police. Ils définissent également le fichier de police à utiliser pour une caractéristique de police particulière, ainsi que les instructions de repli au cas où une ressource ne parvienne pas à se charger. Le mécanisme de sélection des polices CSS décrit le processus consistant à faire correspondre un ensemble donné de propriétés de police CSS à une seule police.

Le module de polices CSS prend également en charge les polices variables. Contrairement aux polices classiques, où chaque style est implémenté sous forme de fichier de police distinct, les polices variables peuvent contenir tous les styles dans un seul fichier. En utilisant une seule déclaration `@font-face`, vous pouvez importer une police variable qui inclut tous les styles. Selon la police, cela peut inclure une multitude de variantes de police. Les polices variables font partie de la spécification de police OpenType.

## Référence

### Propriétés

- {{CSSxRef("font")}} (raccourcie)
- {{CSSxRef("font-family")}}
- {{CSSxRef("font-feature-settings")}}
- {{CSSxRef("font-kerning")}}
- {{CSSxRef("font-language-override")}}
- {{CSSxRef("font-optical-sizing")}}
- {{CSSxRef("font-palette")}}
- {{CSSxRef("font-size")}}
- {{CSSxRef("font-size-adjust")}}
- {{CSSxRef("font-width")}} et sont alias hérité {{CSSxRef("font-stretch")}}
- {{CSSxRef("font-style")}}
- {{CSSxRef("font-weight")}}

<!-- -->

- {{CSSxRef("font-synthesis")}} (raccourcie)
- {{CSSxRef("font-synthesis-position")}}
- {{CSSxRef("font-synthesis-small-caps")}}
- {{CSSxRef("font-synthesis-style")}}
- {{CSSxRef("font-synthesis-weight")}}

<!-- -->

- {{CSSxRef("font-variant")}} (raccourcie)
- {{CSSxRef("font-variant-alternates")}}
- {{CSSxRef("font-variant-caps")}}
- {{CSSxRef("font-variant-east-asian")}}
- {{CSSxRef("font-variant-emoji")}}
- {{CSSxRef("font-variant-ligatures")}}
- {{CSSxRef("font-variant-numeric")}}
- {{CSSxRef("font-variant-position")}}
- {{CSSxRef("font-variation-settings")}}

### Règles @ et descripteurs

- Règle @&nbsp;: {{CSSxRef("@font-face")}}
  - : Descripteurs&nbsp;:
    - {{CSSxRef("@font-face/ascent-override", "ascent-override")}}
    - {{CSSxRef("@font-face/descent-override", "descent-override")}}
    - {{CSSxRef("@font-face/font-display", "font-display")}}
    - {{CSSxRef("@font-face/font-family", "font-family")}}
    - {{CSSxRef("@font-face/font-feature-settings", "font-feature-settings")}}
    - {{CSSxRef("@font-face/font-width", "font-width")}} et son alias hérité {{CSSxRef("@font-face/font-stretch", "font-stretch")}}
    - {{CSSxRef("@font-face/font-style", "font-style")}}
    - {{CSSxRef("@font-face/font-variation-settings", "font-variation-settings")}}
    - {{CSSxRef("@font-face/font-weight", "font-weight")}}
    - {{CSSxRef("@font-face/line-gap-override", "line-gap-override")}}
    - {{CSSxRef("@font-face/size-adjust", "size-adjust")}}
    - {{CSSxRef("@font-face/src", "src")}}
    - {{CSSxRef("@font-face/unicode-range", "unicode-range")}}

Le module des polices CSS définit également les descripteurs `font-language-override`, `font-named-instance`, `font-size`, `subscript-position-override`, `subscript-size-override`, `superscript-position-override` et `superscript-size-override`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

- Règle @&nbsp;: {{CSSxRef("@font-feature-values")}}

Le module des polices CSS définit également le descripteur {{CSSxRef("@font-feature-values/font-display", "font-display")}}. Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

- Règle @&nbsp;: {{CSSxRef("@font-palette-values")}}
  - : Descripteurs&nbsp;:
    - {{CSSxRef("@font-palette-values/base-palette", "base-palette")}}
    - {{CSSxRef("@font-palette-values/font-family", "font-family")}}
    - {{CSSxRef("@font-palette-values/override-colors", "override-colors")}}

### Fonctions

Le module des polices CSS définit la fonction `generic()`. Actuellement, aucune navigateur ne prend en charge cette fonctionnalité.

### Types de donnée

Types de `font-size`&nbsp;:

- {{CSSxRef("&lt;absolute-size&gt;")}}
- {{CSSxRef("&lt;relative-size&gt;")}}

Type de `font-family`&nbsp;:

- {{CSSxRef("&lt;generic-family&gt;")}}

Type de `font-feature-settings`&nbsp;:

- [`<feature-tag-value>`](/fr/docs/Web/CSS/Reference/Properties/font-feature-settings#valeurs)

Type de `font-format`&nbsp;:

- [`<font-format>`](/fr/docs/Web/CSS/Reference/At-rules/@supports#font-format)

Type de `font-stretch`&nbsp;:

- [`<font-stretch-css3>`](/fr/docs/Web/CSS/Reference/Properties/font-stretch#valeurs)

Types de `font-tech`&nbsp;:

- [`<color-font-tech>`](/fr/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`<font-features-tech>`](/fr/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`<font-tech>`](/fr/docs/Web/CSS/Reference/At-rules/@supports#font-tech)

Types de `font-variant`&nbsp;:

- [`<font-variant-css2>`](/fr/docs/Web/CSS/Reference/Properties/font-variant)
- [`<east-asian-variant-values>`](/fr/docs/Web/CSS/Reference/Properties/font-variant#valeurs)
- [`<east-asian-width-values>`](/fr/docs/Web/CSS/Reference/Properties/font-variant#valeurs)

Types de `font-variant-ligatures`&nbsp;:

- [`<common-lig-values>`](/fr/docs/Web/CSS/Reference/Properties/font-variant-ligatures#valeurs)
- [`<contextual-alt-values>`](/fr/docs/Web/CSS/Reference/Properties/font-variant-ligatures#valeurs)
- [`<discretionary-lig-values>`](/fr/docs/Web/CSS/Reference/Properties/font-variant-ligatures#valeurs)
- [`<historical-lig-values>`](/fr/docs/Web/CSS/Reference/Properties/font-variant-ligatures#valeurs)

Types de `font-variant-numeric`&nbsp;:

- [`<numeric-figure-values>`](/fr/docs/Web/CSS/Reference/Properties/font-variant-numeric#valeurs)
- [`<numeric-fraction-values>`](/fr/docs/Web/CSS/Reference/Properties/font-variant-numeric#valeurs)
- [`<numeric-spacing-values>`](/fr/docs/Web/CSS/Reference/Properties/font-variant-numeric#valeurs)

Type de `font-weight`&nbsp;:

- [`<font-weight-absolute>`](/fr/docs/Web/CSS/Reference/Properties/font-weight#valeurs)

### Interfaces

- {{DOMxRef("CSSFontFaceRule")}}
- {{DOMxRef("CSSFontFeatureValuesRule")}}
- {{DOMxRef("CSSFontPaletteValuesRule")}}

## Guides

- [Apprendre&nbsp;: Les bases de la mise en forme du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
  - : Cet article d'apprentissage pour débutant·e·s couvre les bases de la mise en forme du texte et des polices. Il explique comment définir le poids, la famille et le style de la police en utilisant le raccourci {{CSSxRef("font")}} et comment aligner le texte et gérer l'espacement des lignes et des lettres.

- [Apprendre&nbsp;: Les polices web](/fr/docs/Learn_web_development/Core/Text_styling/Web_fonts)
  - : Cet article d'apprentissage pour débutant·e·s explique comment utiliser des polices personnalisées sur votre page web afin de permettre un style de texte plus varié et personnalisé.

- [Les caractéristiques de police OpenType](/fr/docs/Web/CSS/Guides/Fonts/OpenType_fonts)
  - : Les caractéristiques ou variantes de police font référence à différents glyphes ou styles de caractères contenus dans une police OpenType. Cela inclut des éléments tels que les ligatures (glyphes spéciaux qui combinent des caractères comme `fi` ou `ffl`), le crénage (ajustements de l'espacement entre des paires de lettres spécifiques), les fractions, les styles numériques, et un certain nombre d'autres. Tous ces éléments sont appelés caractéristiques OpenType et sont disponibles pour une utilisation sur le web avec des propriétés spécifiques et une propriété de contrôle de bas niveau — {{CSSxRef("font-feature-settings")}}. Cet article vous fournit toutes les informations nécessaires pour utiliser les caractéristiques de police OpenType en CSS.

- [Le format de police web ouvert (WOFF)](/fr/docs/Web/CSS/Guides/Fonts/WOFF)
  - : WOFF utilise une version compressée de la même structure `sfnt` basée sur des tables utilisée par TrueType, OpenType et Open Font Format, mais ajoute des métadonnées et des structures de données à usage privé, y compris des champs prédéfinis permettant aux fonderies et aux fournisseurs de fournir des informations sur les licences si nécessaire.

- [Les polices variables](/fr/docs/Web/CSS/Guides/Fonts/Variable_fonts)
  - : Cet article vous aide à commencer à utiliser les polices variables.

- [Améliorer les performances des polices](/fr/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - : Cet article, faisant partie du guide sur les performances CSS, traite du chargement des polices, du chargement uniquement des glyphes requis et de la définition du comportement d'affichage des polices avec le descripteur `font-display`.

## Concepts associés

- La propriété CSS {{CSSxRef("letter-spacing")}}
- La propriété CSS {{CSSxRef("line-height")}}
- La propriété CSS {{CSSxRef("text-transform")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [de chargement des polices CSS](/fr/docs/Web/CSS/Guides/Font_loading)
- [L'API de chargement des polices CSS](/fr/docs/Web/API/CSS_Font_Loading_API)
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
- Le module [des modes d'écriture CSS](/fr/docs/Web/CSS/Guides/Writing_modes)
