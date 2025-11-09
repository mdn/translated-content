---
title: Extensions CSS préfixées par le vendeur WebKit (-webkit-)
slug: Web/CSS/Reference/Webkit_extensions
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

Un {{glossary("vendor prefix", "préfixe vendeur")}} est utilisé pour indiquer qu'une fonctionnalité est spécifique à un certain navigateur.
Les agents utilisateurs basés sur WebKit ou Blink (tels que Safari et Chrome) prennent en charge plusieurs extensions de [CSS](/fr/docs/Web/CSS), qui sont préfixées par `-webkit-`.

## Propriétés préfixées par -webkit sans équivalents standard

> [!NOTE]
> Ces propriétés fonctionnent dans les navigateurs basés sur WebKit ou Blink, sauf indication contraire dans les notes de support.
> Vous devriez éviter de les utiliser sur des sites web en production.

### A - C

- `-webkit-app-region` {{deprecated_inline}}&nbsp;: N'est plus pris en charge dans Safari.
- `-webkit-border-horizontal-spacing`
- `-webkit-border-vertical-spacing`
- {{CSSxRef("-webkit-box-reflect")}}&nbsp;: Prise en charge avec `-webkit-` par tous les navigateurs, pour des raisons de compatibilité.
- `-webkit-column-axis`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-column-progression`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-cursor-visibility`&nbsp;: N'est pas pris en charge dans Chrome.

### D-L

- `-webkit-font-smoothing`&nbsp;: Voir {{CSSxRef("font-smooth")}}.
- `-webkit-hyphenate-limit-after`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-hyphenate-limit-before`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-hyphenate-limit-lines`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-line-align`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-line-box-contain`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-line-grid`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-line-snap`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-locale`
- `-webkit-logical-height`
- `-webkit-logical-width`

### M

- `-webkit-margin-after`
- `-webkit-margin-before`
- {{CSSxRef("-webkit-mask-box-image")}}&nbsp;: Voir {{cssxref("mask-border")}} et {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-outset")}}&nbsp;: Voir {{cssxref("mask-border")}} et {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-repeat")}}&nbsp;: Voir {{cssxref("mask-border")}} et {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-slice")}}&nbsp;: Voir {{cssxref("mask-border")}} et {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-source")}}&nbsp;: Voir {{cssxref("mask-border")}} et {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-width")}}&nbsp;: Voir {{cssxref("mask-border")}} et {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-composite")}}&nbsp;: Voir {{cssxref("mask-border")}} et {{cssxref("border-image")}}.
- {{CSSxRef("-webkit-mask-position-x")}}&nbsp;: Prise en charge avec `-webkit-` par tous les navigateurs, pour des raisons de compatibilité.
- {{CSSxRef("-webkit-mask-position-y")}}&nbsp;: Prise en charge avec `-webkit-` par tous les navigateurs, pour des raisons de compatibilité.
- {{CSSxRef("-webkit-mask-repeat-x")}} {{deprecated_inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("mask-repeat")}}.
- {{CSSxRef("-webkit-mask-repeat-y")}} {{deprecated_inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("mask-repeat")}}.
- `-webkit-mask-source-type`: N'est pas pris en charge dans Chrome.
- `-webkit-max-logical-height`
- `-webkit-max-logical-width`
- `-webkit-min-logical-height`
- `-webkit-min-logical-width`

### N - Z

- `-webkit-nbsp-mode`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-perspective-origin-x`
- `-webkit-perspective-origin-y`
- `-webkit-rtl-ordering`
- {{CSSxRef("-webkit-tap-highlight-color")}}&nbsp;: N'est pris en charge que dans Safari sur iOS.
- `-webkit-text-decoration-skip`&nbsp;: N'est pas pris en charge dans Chrome.
- `-webkit-text-decorations-in-effect`
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke")}}
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- `-webkit-text-zoom`&nbsp;: N'est pas pris en charge dans Chrome.
- {{CSSxRef("-webkit-touch-callout")}} {{deprecated_inline}}: N'est pris en charge que dans Safari sur iOS.
- `-webkit-transform-origin-x`
- `-webkit-transform-origin-y`
- `-webkit-transform-origin-z`
- `-webkit-user-drag`
- `-webkit-user-modify`

## Propriétés préfixées par -webkit avec équivalents standard

Plusieurs propriétés préfixées par `-webkit-` ont des équivalents standard.
Même si le nom et la syntaxe peuvent être différents, elles ne devraient plus être utilisées.
Pour chacune des propriétés ci-dessous, utilisez les équivalents standard.

### A-B

- `-webkit-border-after`&nbsp;: Utilisez {{CSSxRef("border-block-end")}}.
- `-webkit-border-after-color`&nbsp;: Utilisez {{CSSxRef("border-block-end-color")}}.
- `-webkit-border-after-style`&nbsp;: Utilisez {{CSSxRef("border-block-end-style")}}.
- `-webkit-border-after-width`&nbsp;: Utilisez {{CSSxRef("border-block-end-width")}}.
- {{CSSxRef("-webkit-border-before")}}&nbsp;: Utilisez {{CSSxRef("border-block-start")}}.
- `-webkit-border-before-color`&nbsp;: Utilisez {{CSSxRef("border-block-start-color")}}.
- `-webkit-border-before-style`&nbsp;: Utilisez {{CSSxRef("border-block-start-style")}}.
- `-webkit-border-before-width`&nbsp;: Utilisez {{CSSxRef("border-block-start-width")}}.
- `-webkit-border-end`&nbsp;: Utilisez {{CSSxRef("border-inline-end")}}.
- `-webkit-border-end-color`&nbsp;: Utilisez {{CSSxRef("border-inline-end-color")}}.
- `-webkit-border-end-style`&nbsp;: Utilisez {{CSSxRef("border-inline-end-style")}}.
- `-webkit-border-end-width`&nbsp;: Utilisez {{CSSxRef("border-inline-end-width")}}.
- `-webkit-border-start`&nbsp;: Utilisez {{CSSxRef("border-inline-start")}}.
- `-webkit-border-start-color`&nbsp;: Utilisez {{CSSxRef("border-inline-start-color")}}.
- `-webkit-border-start-style`&nbsp;: Utilisez {{CSSxRef("border-inline-start-style")}}.
- `-webkit-border-start-width`&nbsp;: Utilisez {{CSSxRef("border-inline-start-width")}}.
- `-webkit-box-align`&nbsp;: Utilisez les [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("align-items")}}.
- `-webkit-box-direction`&nbsp;: Utilisez les [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("flex-direction")}}.
- {{CSSxRef("box-flex-group", "-webkit-box-flex-group")}}&nbsp;: Utilisez les [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("flex-basis")}}, {{CSSxRef("flex-grow")}} et {{CSSxRef("flex-shrink")}}.
- `-webkit-box-flex`&nbsp;: Utilisez les [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("flex-grow")}}.
- `-webkit-box-lines`&nbsp;: Utilisez les [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("flex-flow")}}.
- `-webkit-box-ordinal-group`&nbsp;: Utilisez les [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("order")}}.
- `-webkit-box-orient`&nbsp;: Utilisez les [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("flex-direction")}}.
- `-webkit-box-pack`&nbsp;: Utilisez les [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("justify-content")}}.
- {{CSSxRef("-webkit-box-reflect")}}&nbsp;: Utilisez la fonction CSS {{CSSxRef("element", "element()")}}.

### C-I

- `-webkit-column-break-after`&nbsp;: Utilisez la [mise en page multicolonne CSS](/fr/docs/Web/CSS/Guides/Multicol_layout) avec {{CSSxRef("break-after")}}.
- `-webkit-column-break-before`&nbsp;: Utilisez la [mise en page multicolonne CSS](/fr/docs/Web/CSS/Guides/Multicol_layout) avec {{CSSxRef("break-before")}}.
- `-webkit-column-break-inside`&nbsp;: Utilisez la [mise en page multicolonne CSS](/fr/docs/Web/CSS/Guides/Multicol_layout) avec {{CSSxRef("break-inside")}}.
- `-webkit-font-feature-settings`&nbsp;: Utilisez {{CSSxRef("font-feature-settings")}} (la version préfixée n'est pas prise en charge dans Safari).
- `-webkit-hyphenate-character`&nbsp;: Utilisez {{CSSxRef("hyphenate-character")}}.
- `-webkit-initial-letter`&nbsp;: Utilisez {{CSSxRef("initial-letter")}}.

### J-Z

- `-webkit-line-clamp`&nbsp;: Utilisez {{CSSxRef("line-clamp")}}.
- `-webkit-margin-end`&nbsp;: Utilisez {{CSSxRef("margin-block-end")}}.
- `-webkit-margin-start`&nbsp;: Utilisez {{CSSxRef("margin-block-start")}}.
- `-webkit-padding-after`&nbsp;: Utilisez {{CSSxRef("padding-block-end")}}.
- `-webkit-padding-before`&nbsp;: Utilisez {{CSSxRef("padding-block-start")}}.
- `-webkit-padding-end`&nbsp;: Utilisez {{CSSxRef("padding-inline-end")}}.
- `-webkit-padding-start`&nbsp;: Utilisez {{CSSxRef("padding-inline-start")}}.

## Pseudo-classes

> [!NOTE]
> Si une pseudo-classe invalide se trouve dans une chaîne ou un groupe de sélecteurs, l'ensemble de la liste de sélecteurs est invalide.

- `:-webkit-any()`&nbsp;: Utilisez {{CSSxRef(":is")}}
- `:-webkit-any-link`&nbsp;: Utilisez {{CSSxRef(":any-link")}}
- `:-webkit-autofill`&nbsp;: Utilisez {{CSSxRef(":autofill")}}
- `:-webkit-autofill-strong-password`&nbsp;: Utilisez {{CSSxRef(":autofill")}}
- `:-webkit-drag`
- `:-webkit-full-page-media`&nbsp;: Utilisez {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen`&nbsp;: Utilisez {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen-ancestor`&nbsp;: Utilisez {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen-document`&nbsp;: Utilisez {{CSSxRef(":fullscreen")}}
- `:-webkit-full-screen-controls-hidden`&nbsp;: Utilisez {{CSSxRef(":fullscreen")}}

## Pseudo-éléments

Pour des raisons de compatibilité web, Blink, WebKit et Gecko traitent tous les pseudo-éléments commençant par `::-webkit-` comme valides.
Si un pseudo-élément ou une pseudo-classe invalide se trouve dans une chaîne ou un groupe de sélecteurs, l'ensemble de la liste de sélecteurs est invalide.
Si un pseudo-élément (mais pas une pseudo-classe) a un préfixe `-webkit-`, les navigateurs Blink, WebKit et Gecko supposent qu'il est valide, sans invalider la liste des sélecteurs.

- `::-webkit-file-upload-button`&nbsp;: Utilisez {{CSSxRef("::file-selector-button")}}
- {{CSSxRef("::-webkit-inner-spin-button")}}
- `::-webkit-input-placeholder`&nbsp;: Utilisez {{CSSxRef("::placeholder")}}
- {{CSSxRef("::-webkit-meter-bar")}} {{deprecated_inline}}
- {{CSSxRef("::-webkit-meter-even-less-good-value")}}
- {{CSSxRef("::-webkit-meter-inner-element")}}
- {{CSSxRef("::-webkit-meter-optimum-value")}}
- {{CSSxRef("::-webkit-meter-suboptimum-value")}}
- {{CSSxRef("::-webkit-progress-bar")}}
- {{CSSxRef("::-webkit-progress-inner-element")}}
- {{CSSxRef("::-webkit-progress-value")}}
- {{CSSxRef("::-webkit-search-cancel-button")}}
- {{CSSxRef("::-webkit-search-results-button")}}
- {{CSSxRef("::-webkit-slider-runnable-track")}}
- {{CSSxRef("::-webkit-slider-thumb")}}

## Fonctionnalités multimédias

- {{CSSxRef("@media/-webkit-animation")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio")}}&nbsp;: Prise en charge multiplateforme
- {{CSSxRef("@media/-webkit-transform-2d")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-transform-3d")}}&nbsp;: Prise en charge multiplateforme
- {{CSSxRef("@media/-webkit-transition")}} {{deprecated_inline}}

## Voir aussi

- [Extensions CSS préfixées par le vendeur Firefox (-moz-)](/fr/docs/Web/CSS/Reference/Mozilla_extensions)
- L'entrée du glossaire {{glossary("Vendor Prefix", "Préfixe vendeur")}}.
- [La mise en forme des contrôles de formulaires sur le Trac WebKit <sup>(angl.)</sup>](https://trac.webkit.org/wiki/Styling%20Form%20Controls)
