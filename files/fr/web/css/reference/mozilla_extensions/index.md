---
title: Extensions CSS préfixées par le vendeur Firefox (-moz-)
slug: Web/CSS/Reference/Mozilla_extensions
l10n:
  sourceCommit: a9fd2746e238ae3948572a94036bb505de19b81b
---

Un {{Glossary("vendor prefix", "préfixe vendeur")}} est utilisé pour indiquer qu'une fonctionnalité est spécifique à un certain navigateur.
Firefox prend en charge plusieurs extensions [CSS](/fr/docs/Web/CSS), qui sont préfixées par `-moz-`.

## Propriétés préfixées par -moz sans équivalents standard

> [!NOTE]
> Ces extensions sont pour la plupart expérimentales ou obsolètes, mais elles sont conservées pour des raisons de compatibilité rétroactive.
> Vous devez éviter de les utiliser sur des sites web en production.

- {{CSSxRef("-moz-float-edge")}} {{Deprecated_Inline}}
- {{CSSxRef("-moz-force-broken-image-icon")}} {{Deprecated_Inline}}&nbsp;: Utilisez l'attribut de texte `alt` à la place.
- {{CSSxRef("-moz-orient")}}
- `-moz-osx-font-smoothing`&nbsp;: Similaire à {{CSSxRef("font-smooth")}}.
- {{CSSxRef("-moz-user-focus")}} {{Deprecated_Inline}}
- {{CSSxRef("-moz-user-input")}} {{Deprecated_Inline}}
- `-moz-user-modify`: Un équivalent non préfixé de {{CSSxRef("user-modify")}} existe, mais l'attribut HTML [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) est recommandé à la place.

## Propriétés préfixées par -moz avec équivalents standard

Les propriétés suivantes ont d'abord été implémentées en utilisant le préfixe vendeur `-moz-`, mais sont désormais prises en charge dans Firefox en utilisant la syntaxe standard (non préfixée).
Le support de la version préfixée est généralement abandonné par la suite, il est donc recommandé d'utiliser la propriété standard à la place.

### A

- {{CSSxRef("animation", "-moz-animation")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- {{CSSxRef("animation-delay", "-moz-animation-delay")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- {{CSSxRef("animation-direction", "-moz-animation-direction")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- {{CSSxRef("animation-duration", "-moz-animation-duration")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- {{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- {{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- {{CSSxRef("animation-name", "-moz-animation-name")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- {{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- {{CSSxRef("animation-timing-function", "-moz-animation-timing-function")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- `-moz-appearance`&nbsp;: La version préfixée de {{CSSxRef("appearance")}} est toujours prise en charge.

### B

- {{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{Deprecated_Inline}}&nbsp;: Version préfixée toujours prise en charge.
- `-moz-background-clip` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("background-clip")}}.
- `-moz-background-origin` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("background-origin")}}.
- `-moz-box-align` {{Deprecated_Inline}}&nbsp;: Utilisez [CSS flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("align-items")}}.
- `-moz-background-inline-policy` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("box-decoration-break")}}.
- `-moz-box-direction` {{Deprecated_Inline}}&nbsp;: Utilisez [CSS flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("flex-direction")}}.
- `-moz-box-flex` {{Deprecated_Inline}}&nbsp;: Utilisez [CSS flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("flex-grow")}}.
- `-moz-box-ordinal-group` {{Deprecated_Inline}}&nbsp;: Utilisez [CSS flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("order")}}.
- `-moz-box-orient` {{Deprecated_Inline}}&nbsp;: Utilisez [CSS flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("flex-direction")}}.
- `-moz-box-pack` {{Deprecated_Inline}}&nbsp;: Utilisez [CSS flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) avec {{CSSxRef("justify-content")}}.
- `-moz-background-size` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("background-size")}}.
- `-moz-border-end` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("border-inline-end")}}.
- `-moz-border-end-color` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("border-inline-end-color")}}.
- `-moz-border-end-style` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("border-inline-end-style")}}.
- `-moz-border-end-width` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("border-inline-end-width")}}.
- `-moz-border-image` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("border-inline-end-width")}}.
- `-moz-border-start` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("border-inline-start")}}.
- `-moz-border-start-color` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("border-inline-start-color")}}.
- `-moz-border-start-style` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("border-inline-start-style")}}.
- `-moz-border-start-width` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("border-inline-start-width")}}.
- {{CSSxRef("box-sizing", "-moz-box-sizing")}} {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("box-sizing")}}.

### C

- `-moz-column-count` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("column-count")}}.
- `-moz-column-fill` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("column-fill")}}.
- `-moz-column-gap` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("column-gap")}}.
- `-moz-column-width` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("column-width")}}.
- `-moz-column-rule` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("column-rule")}}.
- `-moz-column-rule-width` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("column-rule-width")}}.
- `-moz-column-rule-style` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("column-rule-style")}}.
- `-moz-column-rule-color` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("column-rule-color")}}.

### F - M

- {{CSSxRef("font-feature-settings", "-moz-font-feature-settings")}} {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("font-feature-settings")}}.
- {{CSSxRef("font-language-override", "-moz-font-language-override")}} {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("font-language-override")}}.
- {{CSSxRef("hyphens", "-moz-hyphens")}} {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("hyphens")}}.
- `-moz-margin-end` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("margin-inline-end")}}.
- `-moz-margin-start` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("margin-inline-start")}}.

### O - P

- `-moz-opacity` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("opacity")}}.
- `-moz-outline` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("outline")}}.
- `-moz-outline-color` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("outline-color")}}.
- `-moz-outline-offset` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("outline-offset")}}.
- `-moz-outline-style` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("outline-style")}}.
- `-moz-outline-width` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("outline-width")}}.
- `-moz-padding-end` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("padding-inline-end")}}.
- `-moz-padding-start` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("padding-inline-start")}}.
- {{CSSxRef("perspective", "-moz-perspective")}} {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("perspective")}}.
- {{CSSxRef("perspective-origin", "-moz-perspective-origin")}} {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("perspective-origin")}}.

### T - Z

- `-moz-tab-size`: Utilisez {{CSSxRef("tab-size")}}
- `-moz-text-align-last` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("text-align-last")}}.
- `-moz-text-decoration-color` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("text-decoration-color")}}.
- `-moz-text-decoration-line` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("text-decoration-line")}}.
- `-moz-text-decoration-style` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("text-decoration-style")}}.
- `-moz-text-size-adjust` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("text-size-adjust")}} {{Experimental_Inline}}.
- {{CSSxRef("transform", "-moz-transform")}} {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("transform")}}.
- {{CSSxRef("transform-origin", "-moz-transform-origin")}} {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("transform-origin")}}.
- {{CSSxRef("transform-style", "-moz-transform-style")}} {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("transform-style")}}.
- `-moz-transition` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("transition")}}.
- `-moz-transition-delay` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("transition-delay")}}.
- `-moz-transition-duration` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("transition-duration")}}.
- `-moz-transition-property` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("transition-property")}}.
- `-moz-transition-timing-function` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("transition-timing-function")}}.
- `-moz-user-select` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef("user-select")}}.

## Valeurs de propriété -moz

### Valeurs globales

- `-moz-initial`&nbsp;: Voir {{CSSxRef("initial")}}.

### background-image

**Propriétés&nbsp;:** {{CSSxRef("background-image")}}

- `-moz-linear-gradient` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef("gradient/linear-gradient")}}.
- `-moz-radial-gradient` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef("gradient/radial-gradient")}}.
- `-moz-element` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef("element")}}.
- {{CSSxRef("-moz-image-rect")}} {{Deprecated_Inline}}

### order-style and outline-style

**Propriétés&nbsp;:** {{CSSxRef("border-style")}} et {{CSSxRef("outline-style")}}.

- `-moz-bg-inset` {{Deprecated_Inline}}
- `-moz-bg-outset` {{Deprecated_Inline}}
- `-moz-bg-solid` {{Deprecated_Inline}}

### Le mot-clé &lt;color&gt;

**Type&nbsp;:** {{CSSxRef("&lt;color&gt;")}}

- `-moz-activehyperlinktext`
- `-moz-hyperlinktext`
- `-moz-visitedhyperlinktext`
- `-moz-buttonhoverface`
- `-moz-buttonhovertext`
- `-moz-default-background-color`
- `-moz-default-color`
- `-moz-cellhighlight`
- `-moz-cellhighlighttext`
- `-moz-field`
- `-moz-fieldtext`
- `-moz-dialog`
- `-moz-dialogtext`
- `-moz-menuhover`
- `-moz-menuhovertext`

### empty-cells

**Propriété&nbsp;:** {{CSSxRef("empty-cells")}}

- `-moz-show-background` (valeur par défaut en mode quirks)

### font-family

**Propriété&nbsp;:** {{CSSxRef("font-family")}}

- `-moz-fixed`

### image-rendering

**Propriété&nbsp;:** {{CSSxRef("image-rendering")}}

- `-moz-crisp-edges` {{Deprecated_Inline}}&nbsp;: Utilisez [`crisp-edges`](/fr/docs/Web/CSS/Reference/Properties/image-rendering#crisp-edges).

### &lt;length&gt;

**Type&nbsp;:** {{CSSxRef("&lt;length&gt;")}}

- `-moz-calc` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef("calc")}}.

### list-style-type

**Propriété&nbsp;:** {{CSSxRef("list-style-type")}}

De nombreuses valeurs avec préfixe de fournisseur pour `list-style-type` sont désormais prises en charge en tant que valeurs standard sans préfixe `-moz-`, sauf pour celles de la liste suivante.
Voir la [Compatibilité des navigateurs](/fr/docs/Web/CSS/Reference/Properties/list-style-type#compatibilité_des_navigateurs) pour plus de détails.

- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `-moz-ethiopic-halehame-ti-er`
- `-moz-ethiopic-halehame-ti-et`
- `-moz-hangul`
- `-moz-hangul-consonant`
- `-moz-urdu`

### text-align

**Propriété&nbsp;:** {{CSSxRef("text-align")}}

- `-moz-center` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef("text-align", "text-align: center")}}.
- `-moz-left` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef("text-align", "text-align: left")}}.
- `-moz-right` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef("text-align", "text-align: right")}}.

### width, min-width, and max-width

**Propriétés&nbsp;:** {{CSSxRef("width")}}, {{CSSxRef("min-width")}} et {{CSSxRef("max-width")}}

- `-moz-min-content`&nbsp;: Voir {{CSSxRef("min-content")}}.
- `-moz-fit-content`&nbsp;: Voir {{CSSxRef("fit-content")}}.
- `-moz-max-content`&nbsp;: Voir {{CSSxRef("max-content")}}.
- `-moz-available`&nbsp;: Voir [`stretch`](/fr/docs/Web/CSS/Reference/Properties/width#stretch).

## Pseudo-classes

- `:-moz-any` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef(":is")}}.
- `:-moz-any-link` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef(":any-link")}}.
- {{CSSxRef(":-moz-broken")}} {{Deprecated_Inline}}
- {{CSSxRef(":-moz-drag-over")}}
- {{CSSxRef(":-moz-first-node")}}
- `:-moz-full-screen` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef(":fullscreen")}}.
- `:-moz-full-screen-ancestor` {{Deprecated_Inline}}&nbsp;: N'est plus prise en charge&nbsp;; utilisez {{CSSxRef(":fullscreen")}}.
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
- `:-moz-native-anonymous`
- `:-moz-placeholder` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef(":placeholder-shown")}}.
- {{CSSxRef(":-moz-only-whitespace")}}
- `:-moz-read-only` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef(":read-only")}}.
- `:-moz-read-write` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef(":read-write")}}.
- {{CSSxRef(":-moz-submit-invalid")}}&nbsp;: Voir {{CSSxRef(":invalid")}}.
- {{CSSxRef(":-moz-suppressed")}}
- `:-moz-ui-invalid` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef(":user-invalid")}}.
- `:-moz-ui-valid` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef(":user-valid")}}.
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef(":-moz-window-inactive")}}

## Les pseudo-éléments

- `::-moz-canvas`
- `::-moz-cell-content`
- {{CSSxRef("::-moz-color-swatch")}}
- {{CSSxRef("::-moz-focus-inner")}}
- `::-moz-focus-outer`
- `::-moz-inline-table`
- {{CSSxRef("::-moz-list-bullet")}}
- {{CSSxRef("::-moz-list-number")}}
- {{CSSxRef("::-moz-meter-bar")}}
- `::-moz-pagebreak`
- `::-moz-pagecontent`
- `::-moz-placeholder` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef("::placeholder")}}.
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}
- `::-moz-scrolled-canvas`
- `::-moz-scrolled-content`
- `::-moz-selection` {{Deprecated_Inline}}&nbsp;: Utilisez {{CSSxRef("::selection")}}.
- `::-moz-svg-foreign-content`
- `::-moz-table`
- `::-moz-table-cell`
- `::-moz-table-column`
- `::-moz-table-column-group`
- `::-moz-table-outer`
- `::-moz-table-row`
- `::-moz-table-row-group`
- `::-moz-viewport`
- `::-moz-viewport-scroll`

## Les règles @

- {{CSSxRef("@document", "@-moz-document")}}

## Fonctionnalités multimédias

- {{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}} {{Deprecated_Inline}}
- `-moz-platform`
- `-moz-windows-glass`

## Autres

- `-moz-alt-content`: Voir le ticket de [bogue Firefox 11011 <sup>(angl.)</sup>](https://bugzil.la/11011)

## Voir aussi

- [Extensions CSS préfixées par le vendeur WebKit (-webkit-)](/fr/docs/Web/CSS/Reference/Webkit_extensions)
- L'entrée du glossaire {{Glossary("Vendor Prefix", "Préfixe vendeur")}}.
