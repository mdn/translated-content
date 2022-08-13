---
title: Rozszerzenia Mozilli
slug: Web/CSS/Mozilla_Extensions
tags:
  - CSS
  - CSS:Dokumentacje
  - CSS:Rozszerzenia_Mozilli
  - Dodatki
  - Dokumentacje
  - Rozszerzenia
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/CSS/Mozilla_Extensions
---
{{CSSRef}}

Mozilla applications such as Firefox support a number of special **Mozilla extensions to [CSS](/pl/docs/Web/CSS)**, including properties, values, pseudo-elements and pseudo-classes, at-rules, and media queries. These extensions are prefixed with `-moz`.

## Mozilla-only properties and pseudo-classes (avoid using on websites)

> **Note:** These properties and pseudo-classes will only work in Mozilla applications such as Firefox, and are not on a standards track. Some of them apply only to [XUL](/pl/docs/Mozilla/Tech/XUL) elements.

### B

- {{Cssxref("-moz-binding")}}
- {{Cssxref("-moz-border-bottom-colors")}}
- {{Cssxref("-moz-border-left-colors")}}
- {{Cssxref("-moz-border-right-colors")}}
- {{Cssxref("-moz-border-top-colors")}}
- {{Cssxref("-moz-box-align")}}
- {{Cssxref("-moz-box-direction")}}
- {{Cssxref("-moz-box-flex")}}
- {{Cssxref("-moz-box-ordinal-group")}}
- {{Cssxref("-moz-box-orient")}}
- {{Cssxref("-moz-box-pack")}}

### C – I

- {{Cssxref("-moz-context-properties")}}
- {{Cssxref("-moz-float-edge")}}
- {{Cssxref("-moz-force-broken-image-icon")}}
- {{Cssxref("-moz-image-region")}}

### O

- {{cssxref("-moz-orient")}}
- {{cssxref("-moz-osx-font-smoothing")}}
- {{Cssxref("-moz-outline-radius")}}
- {{Cssxref("-moz-outline-radius-bottomleft")}}
- {{Cssxref("-moz-outline-radius-bottomright")}}
- {{Cssxref("-moz-outline-radius-topleft")}}
- {{Cssxref("-moz-outline-radius-topright")}}
- {{Cssxref("overflow-clip-box")}}
- {{Cssxref("overflow-clip-box-block")}}
- {{Cssxref("overflow-clip-box-inline")}}

### S – Z

- {{Cssxref("-moz-stack-sizing")}}
- {{Cssxref(":-moz-system-metric(images-in-menus)")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref(":-moz-system-metric(mac-graphite-theme)")}} {{gecko_minversion_inline("1.9.1")}}
- {{Cssxref(":-moz-system-metric(scrollbar-end-backward)")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref(":-moz-system-metric(scrollbar-end-forward)")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref(":-moz-system-metric(scrollbar-start-backward)")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref(":-moz-system-metric(scrollbar-start-forward)")}}
- {{Cssxref(":-moz-system-metric(scrollbar-thumb-proportional)")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref(":-moz-system-metric(touch-enabled)")}} {{gecko_minversion_inline("1.9.2")}}
- {{Cssxref(":-moz-system-metric(windows-default-theme)")}}
- {{Cssxref("-moz-user-focus")}}
- {{Cssxref("-moz-user-input")}}
- {{Cssxref("-moz-user-modify")}}
- {{cssxref("-moz-window-dragging")}}
- {{Cssxref("-moz-window-shadow")}}

## Formerly proprietary properties that are now standard

> **Note:** To maximize the compatibility of your CSS, you should use the unprefixed standard properties instead of the prefixed ones listed below. Once a given property is standardized and implemented without the prefix, the prefixed version is typically dropped after a while.

- ### A
- {{Cssxref("animation", "-moz-animation")}} \[Prefixed version still accepted]
- {{Cssxref("animation-delay", "-moz-animation-delay")}} \[Prefixed version still accepted]
- {{Cssxref("animation-direction", "-moz-animation-direction")}} \[Prefixed version still accepted]
- {{Cssxref("animation-duration", "-moz-animation-duration")}} \[Prefixed version still accepted]
- {{Cssxref("animation-fill-mode", "-moz-animation-fill-mode")}} \[Prefixed version still accepted]
- {{Cssxref("animation-iteration-count", "-moz-animation-iteration-count")}} \[Prefixed version still accepted]
- {{Cssxref("animation-name", "-moz-animation-name")}} \[Prefixed version still accepted]
- {{Cssxref("animation-play-state", "-moz-animation-play-state")}} \[Prefixed version still accepted]
- {{Cssxref("animation-timing-function","-moz-animation-timing-function")}} \[Prefixed version still accepted]
- {{Cssxref("-moz-appearance")}}
- ### B
- {{Cssxref("backface-visibility", "-moz-backface-visibility")}} \[Prefixed version still accepted]
- {{Cssxref("background-clip", "-moz-background-clip")}}
- {{Cssxref("background-origin", "-moz-background-origin")}}
- {{Cssxref("-moz-background-inline-policy")}} \[Superseded by the standard version {{cssxref("box-decoration-break")}}]
- {{Cssxref("background-size", "-moz-background-size")}}
- {{Cssxref("-moz-border-end")}} \[Superseded by the standard version {{cssxref("border-inline-end")}}]
- {{Cssxref("-moz-border-end-color")}} \[Superseded by the standard version {{cssxref("border-inline-end-color")}}]
- {{Cssxref("-moz-border-end-style")}} \[Superseded by the standard version {{cssxref("border-inline-end-style")}}]
- {{Cssxref("-moz-border-end-width")}} \[Superseded by the standard version {{cssxref("border-inline-end-width")}}]
- {{Cssxref("border-image","-moz-border-image")}}
- {{Cssxref("-moz-border-start")}} \[Superseded by the standard version {{cssxref("border-inline-start")}}]
- {{Cssxref("-moz-border-start-color")}} \[Superseded by the standard version {{cssxref("border-inline-start-color")}}]
- {{Cssxref("-moz-border-start-style")}} \[Superseded by the standard version {{cssxref("border-inline-start-style")}}]
- {{Cssxref("-moz-border-start-width")}} \[Superseded by the standard version {{cssxref("border-inline-start-width")}}]
- {{cssxref("box-sizing", "-moz-box-sizing")}} \[Prefixed version still accepted]
- ### C
- {{Cssxref("clip-path")}} \[Applying to more than SVG]
- {{Cssxref("-moz-column-count")}}
- {{Cssxref("-moz-column-fill")}}
- {{Cssxref("-moz-column-gap")}}
- {{Cssxref("-moz-column-width")}}
- {{Cssxref("-moz-column-rule")}}
- {{Cssxref("-moz-column-rule-width")}}
- {{Cssxref("-moz-column-rule-style")}}
- {{Cssxref("-moz-column-rule-color")}}
- {{Cssxref("-moz-context-properties")}}
- ### F – M
- {{Cssxref("filter")}} \[Applying to more than SVG]
- {{Cssxref("-moz-font-feature-settings")}} \[Prefixed version still accepted]
- {{cssxref("-moz-font-language-override")}} \[Prefixed version still accepted]
- {{Cssxref("-moz-hyphens")}}
- {{Cssxref("-moz-margin-end")}} \[Superseded by the standard version {{cssxref("margin-inline-end")}}]
- {{Cssxref("-moz-margin-start")}} \[Superseded by the standard version {{cssxref("margin-inline-start")}}]
- {{Cssxref("mask")}} \[Applying to more than SVG]
- ### O
- {{Cssxref("opacity","-moz-opacity")}}
- {{Cssxref("outline","-moz-outline")}}
- {{Cssxref("outline-color","-moz-outline-color")}}
- {{Cssxref("outline-offset","-moz-outline-offset")}}
- {{Cssxref("outline-style","-moz-outline-style")}}
- {{Cssxref("outline-width","-moz-outline-width")}}
- ### P
- {{Cssxref("-moz-padding-end")}} \[Superseded by the standard version {{cssxref("padding-inline-end")}}]
- {{Cssxref("-moz-padding-start")}} \[Superseded by the standard version {{cssxref("padding-inline-start")}}]
- {{Cssxref("perspective", "-moz-perspective")}} \[Prefixed version still accepted]
- {{Cssxref("perspective-origin","-moz-perspective-origin")}} \[Prefixed version still accepted]
- {{Cssxref("pointer-events")}} \[Applying to more than SVG]
- ### T – U
- {{cssxref("-moz-tab-size")}}
- {{cssxref("-moz-text-align-last")}}
- {{Cssxref("text-decoration-color","-moz-text-decoration-color")}}
- {{Cssxref("text-decoration-line","-moz-text-decoration-line")}}
- {{Cssxref("text-decoration-style","-moz-text-decoration-style")}}
- {{cssxref("-moz-text-size-adjust")}}
- {{Cssxref("transform", "-moz-transform")}} \[Prefixed version still accepted]
- {{Cssxref("transform-origin", "-moz-transform-origin")}} \[Prefixed version still accepted]
- {{Cssxref("transform-style", "-moz-transform-style")}} \[Prefixed version still accepted]
- {{cssxref("transition", "-moz-transition")}} \[Prefixed version still accepted]
- {{cssxref("transition-delay", "-moz-transition-delay")}} \[Prefixed version still accepted]
- {{cssxref("transition-duration", "-moz-transition-duration")}} \[Prefixed version still accepted]
- {{cssxref("transition-property", "-moz-transition-property")}} \[Prefixed version still accepted]
- {{cssxref("transition-timing-function", "-moz-transition-timing-function")}} \[Prefixed version still accepted]
- {{cssxref("-moz-user-select")}}

## Values

### Global values

- {{cssxref("initial","-moz-initial")}}

### {{Cssxref("-moz-appearance")}}

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

- #### Gradients {{Gecko_minversion_inline("1.9.2")}}

  - {{cssxref("-moz-linear-gradient")}}
  - {{cssxref("-moz-radial-gradient")}}

- #### Elements {{gecko_minversion_inline("2.0")}}

  - {{cssxref("-moz-element")}}

- #### Sub-images {{gecko_minversion_inline("2.0")}}

  - {{cssxref("-moz-image-rect")}}

### {{Cssxref("border-color")}}

- `-moz-use-text-color` {{obsolete_inline}} removed from Gecko (see {{bug(1306214)}}); use [currentcolor](/pl/docs/Web/CSS/color_value#currentColor_keyword) instead.

### {{Cssxref("border-style")}} and {{Cssxref("outline-style")}}

- `-moz-bg-inset | -moz-bg-outset | -moz-bg-solid `{{obsolete_inline}} dropped in Gecko 1.9 (Firefox 3.0)

### {{cssxref("&lt;color&gt;")}} keywords

- `-moz-activehyperlinktext`
- `-moz-hyperlinktext`
- `-moz-visitedhyperlinktext`
- `-moz-buttondefault`
- `-moz-buttonhoverface`
- `-moz-buttonhovertext`
- `-moz-default-background-color` {{Gecko_minversion_inline("5.0")}}
- `-moz-default-color` {{Gecko_minversion_inline("5.0")}}
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
- `-moz-mac-chrome-active` {{Gecko_minversion_inline("1.9.1")}}
- `-moz-mac-chrome-inactive` {{Gecko_minversion_inline("1.9.1")}}
- `-moz-mac-focusring`
- `-moz-mac-menuselect`
- `-moz-mac-menushadow`
- `-moz-mac-menutextselect`
- `-moz-menuhover`
- `-moz-menuhovertext`
- `-moz-win-communicationstext`
- `-moz-win-mediatext` {{gecko_minversion_inline(1.9)}}
- `-moz-nativehyperlinktext` {{Gecko_minversion_inline("1.9.1")}}

### {{Cssxref("display")}}

- `-moz-box`
- `-moz-inline-block` {{obsolete_inline}}
- `-moz-inline-box`
- `-moz-inline-grid`
- `-moz-inline-stack`
- `-moz-inline-table` {{obsolete_inline}}
- `-moz-grid`
- `-moz-grid-group`
- `-moz-grid-line`
- `-moz-groupbox`
- `-moz-deck`
- `-moz-popup`
- `-moz-stack`
- `-moz-marker`

### {{cssxref("empty-cells")}}

- `-moz-show-background` (default value in quirks mode)

### {{Cssxref("font")}}

- `-moz-button`
- `-moz-info`
- `-moz-desktop`
- `-moz-dialog` (also a color)
- `-moz-document`
- `-moz-workspace`
- `-moz-window`
- `-moz-list`
- `-moz-pull-down-menu`
- `-moz-field` (also a color)

### {{Cssxref("font-family")}}

- `-moz-fixed`

### {{Cssxref("image-rendering")}}

- {{Cssxref("image-rendering","-moz-crisp-edges")}} {{Gecko_minversion_inline("1.9.2")}}

### {{cssxref("&lt;length&gt;")}}

- {{cssxref("-moz-calc")}} {{gecko_minversion_inline("2.0")}}

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

- {{Cssxref("-moz-scrollbars-none")}} {{obsolete_inline}}
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

## Pseudo-elements and pseudo-classes

- ### A – D
- {{Cssxref("::-moz-anonymous-block")}} eg@:- bug 331432
- {{Cssxref("::-moz-anonymous-positioned-block")}}
- {{cssxref(":-moz-any")}} {{gecko_minversion_inline("2.0")}}
- {{Cssxref(":-moz-any-link")}} \[Matches `:link` and `:visited`]
- {{Cssxref(":-moz-broken")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref("::-moz-canvas")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-cell-content")}} eg@:- bug 331432
- {{Cssxref(":-moz-drag-over")}}
- ### F – I
- {{Cssxref(":-moz-first-node")}}
- {{cssxref("::-moz-focus-inner")}}
- {{cssxref("::-moz-focus-outer")}}
- {{cssxref(":-moz-focusring")}} {{gecko_minversion_inline("2.0")}}
- {{cssxref(":-moz-full-screen")}} {{gecko_minversion_inline("9.0")}}
- {{cssxref(":-moz-full-screen-ancestor")}} {{gecko_minversion_inline("10.0")}}
- {{cssxref(":-moz-handler-blocked")}} {{gecko_minversion_inline("1.9.1")}}
- {{cssxref(":-moz-handler-crashed")}} {{gecko_minversion_inline("2.0")}}
- {{cssxref(":-moz-handler-disabled")}} {{gecko_minversion_inline("1.9.1")}}
- {{Cssxref("::-moz-inline-table")}}
- ### Leg@:- resource://gre/res/ua.css
- {{Cssxref(":-moz-last-node")}}
- {{Cssxref(":-moz-list-bullet")}}
- {{cssxref(":-moz-list-number")}}
- {{cssxref(":-moz-loading")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref(":-moz-locale-dir(ltr)")}} {{gecko_minversion_inline("1.9.2")}}
- {{Cssxref(":-moz-locale-dir(rtl)")}} {{gecko_minversion_inline("1.9.2")}}
- {{Cssxref(":-moz-lwtheme")}} {{gecko_minversion_inline("1.9.2")}}
- {{Cssxref(":-moz-lwtheme-brighttext")}} {{gecko_minversion_inline("1.9.2")}}
- {{Cssxref(":-moz-lwtheme-darktext")}} {{gecko_minversion_inline("1.9.2")}}
- ### N – R
- {{Cssxref(":-moz-native-anonymous")}} {{gecko_minversion_inline("36")}}
- {{Cssxref(":-moz-only-whitespace")}}
- {{Cssxref("::-moz-page")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-page-sequence")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-pagebreak")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-pagecontent")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref(":-moz-placeholder")}} {{gecko_minversion_inline("1.9")}}
- {{cssxref("::-moz-placeholder")}} {{gecko_minversion_inline("19")}}
- {{Cssxref("::-moz-progress-bar")}}
- {{Cssxref("::-moz-range-progress")}}
- {{Cssxref("::-moz-range-thumb")}}
- {{Cssxref("::-moz-range-track")}}
- {{Cssxref(":-moz-read-only")}}
- {{Cssxref(":-moz-read-write")}}
- ### S
- {{Cssxref("::-moz-scrolled-canvas")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-scrolled-content")}} eg@:- bug 331432
- {{Cssxref("::-moz-scrolled-page-sequence")}} eg@:- bug 331432
- {{cssxref("::selection","::-moz-selection")}}
- {{cssxref(":-moz-submit-invalid")}} {{gecko_minversion_inline("2.0")}}
- {{cssxref(":-moz-suppressed")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref("::-moz-svg-foreign-content")}} example at

  resource://gre/res/svg.css

  , \*|\*::-moz-svg-foreign-content {display: block !important;position: static !important;}

-
- ### T
- {{Cssxref("::-moz-table")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-table-cell")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-table-column")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-table-column-group")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-table-outer")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-table-row")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-table-row-group")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref(":-moz-tree-cell")}}
- {{Cssxref(":-moz-tree-cell-text")}}
- {{Cssxref(":-moz-tree-cell-text(hover)")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref(":-moz-tree-checkbox")}}
- {{Cssxref(":-moz-tree-column")}}
- {{Cssxref(":-moz-tree-drop-feedback")}}
- {{Cssxref(":-moz-tree-image")}}
- {{Cssxref(":-moz-tree-indentation")}}
- {{Cssxref(":-moz-tree-line")}}
- {{Cssxref(":-moz-tree-progressmeter")}}
- {{Cssxref(":-moz-tree-row")}}
- {{Cssxref(":-moz-tree-row(hover)")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref(":-moz-tree-separator")}}
- {{Cssxref(":-moz-tree-twisty")}}
- ### U – X
- {{Cssxref(":-moz-ui-invalid")}}{{gecko_minversion_inline("2.0")}}
- {{Cssxref(":-moz-ui-valid")}}{{gecko_minversion_inline("2.0")}}
- {{cssxref(":-moz-user-disabled")}} {{gecko_minversion_inline("1.9")}}
- {{Cssxref("::-moz-viewport")}} eg@:-

  resource://gre/res/ua.css

- {{Cssxref("::-moz-viewport-scroll")}} eg@:-

  resource://gre/res/ua.css

- {{cssxref(":-moz-window-inactive")}} {{gecko_minversion_inline("2.0")}}
- {{Cssxref("::-moz-xul-anonymous-block")}} eg@:-

  resource://gre/res/ua.css

## At-rules

- {{Cssxref("@-moz-document")}}

## Media features

- [`-moz-mac-graphite-theme`](/en-US/docs/Web/CSS/@media/-moz-mac-graphite-theme) {{gecko_minversion_inline("1.9.2")}}
- `-moz-maemo-classic `{{gecko_minversion_inline("1.9.2")}}
- [`-moz-device-pixel-ratio`](/en-US/docs/Web/CSS/@media/-moz-device-pixel-ratio) {{gecko_minversion_inline("2.0")}}
- [`-moz-os-version`](/en-US/docs/Web/CSS/@media/-moz-os-version)
- [`-moz-scrollbar-end-backward`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-end-backward) {{gecko_minversion_inline("1.9.2")}}
- [`-moz-scrollbar-end-forward`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-end-forward) {{gecko_minversion_inline("1.9.2")}}
- [`-moz-scrollbar-start-backward`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-start-backward) {{gecko_minversion_inline("1.9.2")}}
- [`-moz-scrollbar-start-forward`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-start-forward) {{gecko_minversion_inline("1.9.2")}}
- [`-moz-scrollbar-thumb-proportional`](/en-US/docs/Web/CSS/@media/-moz-scrollbar-thumb-proportional) {{gecko_minversion_inline("1.9.2")}}
- `-moz-touch-enabled `{{gecko_minversion_inline("1.9.2")}}
- [`-moz-windows-accent-color-in-titlebar`](/en-US/docs/Web/CSS/@media/-moz-windows-accent-color-in-titlebar)
- [`-moz-windows-classic`](/en-US/docs/Web/CSS/@media/-moz-windows-classic) {{gecko_minversion_inline("1.9.2")}}
- [`-moz-windows-compositor`](/en-US/docs/Web/CSS/@media/-moz-windows-compositor) {{gecko_minversion_inline("1.9.2")}}
- [`-moz-windows-default-theme`](/en-US/docs/Web/CSS/@media/-moz-windows-default-theme) {{gecko_minversion_inline("1.9.2")}}
- [`-moz-windows-glass`](/en-US/docs/Web/CSS/@media/-moz-windows-glass)
- [`-moz-windows-theme`](/en-US/docs/Web/CSS/@media/-moz-windows-theme) {{gecko_minversion_inline("2.0")}}

## Other

- {{Cssxref("-moz-alt-content")}} {{Bug("11011")}}

## See also

- [Microsoft CSS Extensions](/pl/docs/Web/CSS/Microsoft_CSS_extensions)
- [WebKit CSS Extensions](/pl/docs/Web/CSS/Webkit_Extensions)
