---
title: Extensions CSS de Mozilla
slug: Web/CSS/Mozilla_Extensions
tags:
  - CSS
  - Mozilla
  - Non-standard
  - Reference
translation_of: Web/CSS/Mozilla_Extensions
original_slug: Web/CSS/Extensions_Mozilla
---
{{CSSRef}}

Les applications Mozilla, telles que Firefox, prennent en charge un certain nombre d'extensions spécifiques à [CSS](/fr/docs/Web/CSS) : des propriétés, des valeurs, des pseudo-éléments, des pseudo-classes, des règles @ et des requêtes média. Ces extensions utilisent le préfixe `-moz`.

## Propriétés et pseudo-classes spécifiques à Mozilla (ne pas utiliser sur le Web)

> **Note :** Ces propriétés et pseudo-classes ne fonctionneront que pour les applications Mozilla (Firefox par exemple) et ne sont pas en voie de standardisation. Certaines ne s'applique qu'aux éléments [XUL](/fr/docs/Mozilla/Tech/XUL).

### B

- {{CSSxRef("-moz-binding")}} {{Deprecated_Inline}}
- {{CSSxRef("-moz-border-bottom-colors")}} {{deprecated_inline}}
- {{CSSxRef("-moz-border-left-colors")}} {{deprecated_inline}}
- {{CSSxRef("-moz-border-right-colors")}} {{deprecated_inline}}
- {{CSSxRef("-moz-border-top-colors")}} {{deprecated_inline}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-flex")}}
- {{CSSxRef("-moz-box-ordinal-group")}}
- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}

### C – I

- {{CSSxRef("-moz-context-properties")}}
- {{CSSxRef("-moz-float-edge")}}
- {{CSSxRef("-moz-force-broken-image-icon")}}
- {{CSSxRef("-moz-image-region")}}

### O

- {{CSSxRef("-moz-orient")}}
- {{CSSxRef("-moz-osx-font-smoothing")}}
- {{CSSxRef("-moz-outline-radius")}}
- {{CSSxRef("-moz-outline-radius-bottomleft")}}
- {{CSSxRef("-moz-outline-radius-bottomright")}}
- {{CSSxRef("-moz-outline-radius-topleft")}}
- {{CSSxRef("-moz-outline-radius-topright")}}
- {{CSSxRef("overflow-clip-box")}}
- {{CSSxRef("overflow-clip-box-block")}}
- {{CSSxRef("overflow-clip-box-inline")}}

### S – Z

- {{CSSxRef("-moz-stack-sizing")}}
- {{CSSxRef(":-moz-system-metric(images-in-menus)")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-system-metric(mac-graphite-theme)")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-system-metric(scrollbar-end-backward)")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-system-metric(scrollbar-end-forward)")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-system-metric(scrollbar-start-backward)")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-system-metric(scrollbar-start-forward)")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-system-metric(scrollbar-thumb-proportional)")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-system-metric(touch-enabled)")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-system-metric(windows-default-theme)")}} {{deprecated_inline}}
- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-input")}}
- {{CSSxRef("user-modify")}}
- {{CSSxRef("-moz-window-dragging")}}
- {{CSSxRef("-moz-window-shadow")}}

## Anciennes propriétés spécifiques, désormais standardisées

> **Note :** Afin d'obtenir la meilleure compatibilité possible, vous devriez utiliser les versions standards, non-préfixées, de ces propriétés plutôt que les versions spécifiques. Généralement, lorsqu'une propriété est standardisée et implémentée, la version préfixée est généralement abandonnée ensuite.

- ### A
- {{CSSxRef("animation", "-moz-animation")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("animation-delay", "-moz-animation-delay")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("animation-direction", "-moz-animation-direction")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("animation-duration", "-moz-animation-duration")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("animation-name", "-moz-animation-name")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("animation-timing-function","-moz-animation-timing-function")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("appearance","-moz-appearance")}} {{Experimental_Inline}}
- ### B
- {{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("background-clip", "-moz-background-clip")}} {{deprecated_inline}}
- {{CSSxRef("background-origin", "-moz-background-origin")}} {{deprecated_inline}}
- {{CSSxRef("box-decoration-break")}} {{deprecated_inline}} \[Remplacée par la version standard {{CSSxRef("box-decoration-break")}}]
- {{CSSxRef("background-size", "-moz-background-size")}} {{deprecated_inline}}
- {{CSSxRef("border-inline-end","-moz-border-end")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("border-inline-end")}}]
- {{CSSxRef("border-inline-color","-moz-border-end-color")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("border-inline-end-color")}}]
- {{CSSxRef("border-inline-style","-moz-border-end-style")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("border-inline-end-style")}}]
- {{CSSxRef("border-inline-width","-moz-border-end-width")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("border-inline-end-width")}}]
- {{CSSxRef("border-image","-moz-border-image")}} {{Deprecated_Inline}}
- {{CSSxRef("border-inline-start","-moz-border-start")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("border-inline-start")}}]
- {{CSSxRef("border-inline-start-color","-moz-border-start-color")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("border-inline-start-color")}}]
- {{CSSxRef("border-inline-start-style","-moz-border-start-style")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("border-inline-start-style")}}]
- {{CSSxRef("border-inline-start-width","-moz-border-start-width")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("border-inline-start-width")}}]
- {{CSSxRef("box-sizing", "-moz-box-sizing")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- ### C
- {{CSSxRef("clip-path")}} {{Experimental_Inline}} \[Applying to more than SVG]
- {{CSSxRef("column-count","-moz-column-count")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("column-fill","-moz-column-fill")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("column-gap","-moz-column-gap")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("column-width","-moz-column-width")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("column-rule","-moz-column-rule")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("column-rule-width","-moz-column-rule-width")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("column-rule-style","-moz-column-rule-style")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("column-rule-color","-moz-column-rule-color")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("-moz-context-properties")}} {{Experimental_Inline}}
- ### F – M
- {{CSSxRef("filter")}} {{Experimental_Inline}} \[Applying to more than SVG]
- {{CSSxRef("font-feature-settings","-moz-font-feature-settings")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("font-language-override","-moz-font-language-override")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("hyphens","-moz-hyphens")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("margin-inline-end","-moz-margin-end")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("margin-inline-end")}}]
- {{CSSxRef("margin-inline-start","-moz-margin-start")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("margin-inline-start")}}]
- {{CSSxRef("mask")}} {{Experimental_Inline}} \[Applying to more than SVG]
- ### O
- {{CSSxRef("opacity","-moz-opacity")}} {{deprecated_inline}}
- {{CSSxRef("outline","-moz-outline")}} {{deprecated_inline}}
- {{CSSxRef("outline-color","-moz-outline-color")}} {{deprecated_inline}}
- {{CSSxRef("outline-offset","-moz-outline-offset")}} {{deprecated_inline}}
- {{CSSxRef("outline-style","-moz-outline-style")}} {{deprecated_inline}}
- {{CSSxRef("outline-width","-moz-outline-width")}} {{deprecated_inline}}
- ### P
- {{CSSxRef("padding-inline-end","-moz-padding-end")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("padding-inline-start")}}]
- {{CSSxRef("padding-inline-start","-moz-padding-start")}} {{Deprecated_Inline}} \[Remplacée par la version standard {{CSSxRef("padding-inline-end")}}]
- {{CSSxRef("perspective", "-moz-perspective")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("perspective-origin","-moz-perspective-origin")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("pointer-events")}} {{Experimental_Inline}} \[Applying to more than SVG]
- ### T – U
- {{CSSxRef("tab-size","-moz-tab-size")}} {{Experimental_Inline}}
- {{CSSxRef("text-align-last","-moz-text-align-last")}} {{deprecated_inline}}
- {{CSSxRef("text-decoration-color","-moz-text-decoration-color")}} {{deprecated_inline}}
- {{CSSxRef("text-decoration-line","-moz-text-decoration-line")}} {{deprecated_inline}}
- {{CSSxRef("text-decoration-style","-moz-text-decoration-style")}} {{deprecated_inline}}
- {{CSSxRef("text-size-adjust","-moz-text-size-adjust")}} {{Experimental_Inline}}
- {{CSSxRef("transform", "-moz-transform")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("transform-origin", "-moz-transform-origin")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("transform-style", "-moz-transform-style")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("transition", "-moz-transition")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("transition-delay", "-moz-transition-delay")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("transition-duration", "-moz-transition-duration")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("transition-property", "-moz-transition-property")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("transition-timing-function", "-moz-transition-timing-function")}} {{Deprecated_Inline}} \[Version préfixée toujours acceptée]
- {{CSSxRef("user-select","-moz-user-select")}} {{Experimental_Inline}}

## Valeurs

### Valeurs globales

- {{cssxref("initial","-moz-initial")}}

### {{Cssxref("appearance")}}

- `button`
- `button-arrow-down`
- `button-arrow-next`
- `button-arrow-previous`
- `button-arrow-up`
- `button-bevel`
- `checkbox`
- `checkbox-container`
- `checkbox-label`
- `checkmenuitem`
- `dialog`
- `groupbox`
- `listbox`
- `menuarrow`
- `menucheckbox`
- `menuimage`
- `menuitem`
- `menuitemtext`
- `menulist`
- `menulist-button`
- `menulist-text`
- `menulist-textfield`
- `menupopup`
- `menuradio`
- `menuseparator`
- `-moz-mac-unified-toolbar`
- `-moz-win-borderless-glass`
- `-moz-win-browsertabbar-toolbox`
- `-moz-win-communications-toolbox`
- `-moz-win-glass`
- `-moz-win-media-toolbox`
- `-moz-window-button-box`
- `-moz-window-button-box-maximized`
- `-moz-window-button-close`
- `-moz-window-button-maximize`
- `-moz-window-button-minimize`
- `-moz-window-button-restore`
- `-moz-window-titlebar`
- `-moz-window-titlebar-maximized`
- `progressbar`
- `progresschunk`
- `radio`
- `radio-container`
- `radio-label`
- `radiomenuitem`
- `resizer`
- `resizerpanel`
- `scale-horizontal`
- `scalethumb-horizontal`
- `scalethumb-vertical`
- `scale-vertical`
- `scrollbarbutton-down`
- `scrollbarbutton-left`
- `scrollbarbutton-right`
- `scrollbarbutton-up`
- `scrollbar-small`
- `scrollbarthumb-horizontal`
- `scrollbarthumb-vertical`
- `scrollbartrack-horizontal`
- `scrollbartrack-vertical`
- `separator`
- `spinner`
- `spinner-downbutton`
- `spinner-textfield`
- `spinner-upbutton`
- `statusbar`
- `statusbarpanel`
- `tab`
- `tabpanels`
- `tab-scroll-arrow-back`
- `tab-scroll-arrow-forward`
- `textfield`
- `textfield-multiline`
- `toolbar`
- `toolbarbutton-dropdown`
- `toolbox`
- `tooltip`
- `treeheadercell`
- `treeheadersortarrow`
- `treeitem`
- `treetwisty`
- `treetwistyopen`
- `treeview`
- `window`

### {{cssxref("background-image")}}

- #### Dégradés

  - {{CSSxRef("linear-gradient","-moz-linear-gradient")}} {{Deprecated_Inline}}
  - {{CSSxRef("radial-gradient","-moz-radial-gradient")}} {{Deprecated_Inline}}

- #### Éléments

  - {{cssxref("-moz-element")}}

- #### Sub-images

  - {{cssxref("-moz-image-rect")}}

### {{Cssxref("border-color")}}

- `-moz-use-text-color` {{deprecated_inline}} retiré de Gecko (cf. {{bug(1306214)}}) ; [currentcolor](/fr/docs/Web/CSS/color_value#currentcolor_keyword) doit être utilisée à la place.

### {{Cssxref("border-style")}} et {{Cssxref("outline-style")}}

- `-moz-bg-inset` {{deprecated_inline}}
- `-moz-bg-outset` {{deprecated_inline}}
- `-moz-bg-solid` {{deprecated_inline}}

### Mots-clés pour {{cssxref("&lt;color&gt;")}}

- `-moz-activehyperlinktext`
- `-moz-hyperlinktext`
- `-moz-visitedhyperlinktext`
- `-moz-buttondefault`
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
- `-moz-dragtargetzone`
- `-moz-mac-accentdarkestshadow`
- `-moz-mac-accentdarkshadow`
- `-moz-mac-accentface`
- `-moz-mac-accentlightesthighlight`
- `-moz-mac-accentlightshadow`
- `-moz-mac-accentregularhighlight`
- `-moz-mac-accentregularshadow`
- `-moz-mac-chrome-active`
- `-moz-mac-chrome-inactive`
- `-moz-mac-focusring`
- `-moz-mac-menuselect`
- `-moz-mac-menushadow`
- `-moz-mac-menutextselect`
- `-moz-menuhover`
- `-moz-menuhovertext`
- `-moz-win-communicationstext`
- `-moz-win-mediatext`
- `-moz-nativehyperlinktext`

### {{Cssxref("display")}}

- `-moz-box` {{Deprecated_Inline}}
- `-moz-inline-block` {{deprecated_inline}}
- `-moz-inline-box` {{Deprecated_Inline}}
- `-moz-inline-grid` {{deprecated_inline}}
- `-moz-inline-stack` {{deprecated_inline}}
- `-moz-inline-table` {{deprecated_inline}}
- `-moz-grid` {{deprecated_inline}}
- `-moz-grid-group` {{deprecated_inline}}
- `-moz-grid-line` {{deprecated_inline}}
- `-moz-groupbox`{{deprecated_inline}}
- `-moz-deck` {{deprecated_inline}}
- `-moz-popup` {{deprecated_inline}}
- `-moz-stack` {{deprecated_inline}}
- `-moz-marker` {{deprecated_inline}}

### {{cssxref("empty-cells")}}

- `-moz-show-background` (valeur par défaut en _quirks mode_)

### {{Cssxref("font")}}

- `-moz-button`
- `-moz-info`
- `-moz-desktop`
- `-moz-dialog` (également une couleur)
- `-moz-document`
- `-moz-workspace`
- `-moz-window`
- `-moz-list`
- `-moz-pull-down-menu`
- `-moz-field` (également une couleur)

### {{Cssxref("font-family")}}

- `-moz-fixed`

### {{Cssxref("image-rendering")}}

- {{Cssxref("image-rendering","-moz-crisp-edges")}}

### {{cssxref("&lt;length&gt;")}}

- {{cssxref("-moz-calc")}}

### {{Cssxref("list-style-type")}}

- `-moz-arabic-indic`
- `-moz-bengali`
- `-moz-cjk-earthly-branch`
- `-moz-cjk-heavenly-stem`
- `-moz-devanagari`
- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `-moz-ethiopic-halehame-ti-er`
- `-moz-ethiopic-halehame-ti-et`
- `-moz-ethiopic-numeric`
- `-moz-gujarati`
- `-moz-gurmukhi`
- `-moz-hangul`
- `-moz-hangul-consonant`
- `-moz-japanese-formal`
- `-moz-japanese-informal`
- `-moz-kannada`
- `-moz-khmer`
- `-moz-lao`
- `-moz-malayalam`
- `-moz-myanmar`
- `-moz-oriya`
- `-moz-persian`
- `-moz-simp-chinese-formal`
- `-moz-simp-chinese-informal`
- `-moz-tamil`
- `-moz-telugu`
- `-moz-thai`
- `-moz-trad-chinese-formal`
- `-moz-trad-chinese-informal`
- `-moz-urdu`

### {{Cssxref("overflow")}}

- {{Cssxref("-moz-scrollbars-none")}} {{deprecated_inline}}
- {{Cssxref("-moz-scrollbars-horizontal")}} {{Deprecated_inline}}
- {{Cssxref("-moz-scrollbars-vertical")}} {{Deprecated_inline}}
- {{Cssxref("-moz-hidden-unscrollable")}}

### {{Cssxref("text-align")}}

- `-moz-center`
- `-moz-left`
- `-moz-right`

### {{Cssxref("text-decoration")}}

- `-moz-anchor-decoration`

### {{Cssxref("-moz-user-select")}}

- `-moz-all`
- `-moz-none`

### {{Cssxref("width")}}, {{Cssxref("min-width")}}, and {{Cssxref("max-width")}}

- `-moz-min-content`
- `-moz-fit-content`
- `-moz-max-content`
- `-moz-available`

## Pseudo-éléments et pseudo-classes

- ### A – D
- {{CSSxRef("::-moz-anonymous-block")}} eg@:- bug 331432
- {{CSSxRef("::-moz-anonymous-positioned-block")}}
- {{CSSxRef(":-moz-any")}}
- {{CSSxRef(":-moz-any-link")}} \[Matches `:link` and `:visited`]
- {{CSSxRef(":-moz-broken")}}
- {{CSSxRef("::-moz-canvas")}}
- {{CSSxRef("::-moz-color-swatch")}}
- {{CSSxRef("::-moz-cell-content")}}
- {{CSSxRef(":-moz-drag-over")}}
- ### F – I
- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef("::-moz-focus-inner")}}
- {{CSSxRef("::-moz-focus-outer")}}
- {{CSSxRef(":-moz-focusring")}}
- {{CSSxRef(":-moz-full-screen")}}
- {{CSSxRef(":-moz-full-screen-ancestor")}}
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef("::-moz-inline-table")}}
- ### L
- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":-moz-list-bullet")}}
- {{CSSxRef(":-moz-list-number")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir(rtl)")}}
- {{CSSxRef(":-moz-lwtheme")}}
- {{CSSxRef(":-moz-lwtheme-brighttext")}}
- {{CSSxRef(":-moz-lwtheme-darktext")}}
- ### N – R
- {{CSSxRef(":-moz-native-anonymous")}}
- {{CSSxRef(":-moz-only-whitespace")}}
- {{CSSxRef("::-moz-page")}}
- {{CSSxRef("::-moz-page-sequence")}}
- {{CSSxRef("::-moz-pagebreak")}}
- {{CSSxRef("::-moz-pagecontent")}}
- {{CSSxRef(":placeholder-shown")}} {{deprecated_inline}}
- {{CSSxRef("::placeholder")}}{{Deprecated_Inline("51")}}
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}
- {{CSSxRef(":-moz-read-only")}}
- {{CSSxRef(":-moz-read-write")}}
- ### S
- {{CSSxRef("::-moz-scrolled-canvas")}}
- {{CSSxRef("::-moz-scrolled-content")}}
- {{CSSxRef("::-moz-scrolled-page-sequence")}}
- {{CSSxRef("::selection","::-moz-selection")}}{{Deprecated_Inline(62)}}
- {{CSSxRef(":-moz-submit-invalid")}}
- {{CSSxRef(":-moz-suppressed")}}
- {{CSSxRef("::-moz-svg-foreign-content")}}
- ### T
- {{CSSxRef("::-moz-table")}}
- {{CSSxRef("::-moz-table-cell")}}
- {{CSSxRef("::-moz-table-column")}}
- {{CSSxRef("::-moz-table-column-group")}}
- {{CSSxRef("::-moz-table-outer")}}
- {{CSSxRef("::-moz-table-row")}}
- {{CSSxRef("::-moz-table-row-group")}}
- {{CSSxRef(":-moz-tree-cell")}}
- {{CSSxRef(":-moz-tree-cell-text")}}
- {{CSSxRef(":-moz-tree-cell-text(hover)")}}
- {{CSSxRef(":-moz-tree-checkbox")}}
- {{CSSxRef(":-moz-tree-column")}}
- {{CSSxRef(":-moz-tree-drop-feedback")}}
- {{CSSxRef(":-moz-tree-image")}}
- {{CSSxRef(":-moz-tree-indentation")}}
- {{CSSxRef(":-moz-tree-line")}}
- {{CSSxRef(":-moz-tree-progressmeter")}}
- {{CSSxRef(":-moz-tree-row")}}
- {{CSSxRef(":-moz-tree-row(hover)")}}
- {{CSSxRef(":-moz-tree-separator")}}
- {{CSSxRef(":-moz-tree-twisty")}}
- ### U – X
- {{CSSxRef(":user-invalid")}}
- {{CSSxRef(":-moz-ui-valid")}}
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef("::-moz-viewport")}}
- {{CSSxRef("::-moz-viewport-scroll")}}
- {{CSSxRef(":-moz-window-inactive")}}
- {{CSSxRef("::-moz-xul-anonymous-block")}}

## Règles @

- {{Cssxref("@-moz-document")}}

## Caractéristiques

- {{CSSxRef("@media/-moz-mac-graphite-theme", "-moz-mac-graphite-theme")}}
- {{CSSxRef("@media/-moz-maemo-classic", "-moz-maemo-classic")}}
- {{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
- {{CSSxRef("@media/-moz-os-version", "-moz-os-version")}}
- {{CSSxRef("@media/-moz-scrollbar-end-backward", "-moz-scrollbar-end-backward")}}
- {{CSSxRef("@media/-moz-scrollbar-end-forward", "-moz-scrollbar-end-forward")}}
- {{CSSxRef("@media/-moz-scrollbar-start-backward", "-moz-scrollbar-start-backward")}}
- {{CSSxRef("@media/-moz-scrollbar-start-forward", "-moz-scrollbar-start-forward")}}
- {{CSSxRef("@media/-moz-scrollbar-thumb-proportional", "-moz-scrollbar-thumb-proportional")}}
- {{CSSxRef("@media/-moz-touch-enabled", "-moz-touch-enabled")}}
- {{CSSxRef("@media/-moz-windows-accent-color-in-titlebar", "-moz-windows-accent-color-in-titlebar")}}
- {{CSSxRef("@media/-moz-windows-classic", "-moz-windows-classic")}}
- {{CSSxRef("@media/-moz-windows-compositor", "-moz-windows-compositor")}}
- {{CSSxRef("@media/-moz-windows-default-theme", "-moz-windows-default-theme")}}
- {{CSSxRef("@media/-moz-windows-glass", "-moz-windows-glass")}}
- {{CSSxRef("@media/-moz-windows-theme", "-moz-windows-theme")}}

## Autres

- {{Cssxref("-moz-alt-content")}} {{Bug("11011")}}

## Voir aussi

- [CSS Mozilla uniquement destiné au chrome (l'interface du navigateur)](/fr/docs/Mozilla/Gecko/Chrome/CSS)
- [Extensions CSS spécifiques à Microsoft](/fr/docs/Web/CSS/Microsoft_Extensions)
- [Extensions CSS spécifiques à WebKit](/fr/docs/Web/CSS/WebKit_Extensions)
