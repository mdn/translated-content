---
title: CSS の Mozilla 拡張
slug: Web/CSS/Mozilla_Extensions
tags:
  - CSS
  - CSS:Mozilla 拡張
  - ガイド
  - 標準外
  - 概要
  - リファレンス
translation_of: Web/CSS/Mozilla_Extensions
---
{{CSSRef}}

Firefox などの Mozilla アプリケーションは、いくつもの特別な **[CSS](/ja/docs/Web/CSS) の Mozilla 拡張**に対応しています。これには、プロパティ、値、擬似要素、擬似クラス、アットルール、メディアクエリーが含まれます。これらの拡張には `-moz-` の接頭辞が付いています。

## Mozilla 独自のプロパティと擬似クラス (ウェブサイトで使用しないでください)

> **Note:** これらのプロパティと擬似クラスは、Firefox などの Mozilla アプリケーション内でのみ動作するものであり、標準化されていません。これら標準外のプロパティの一部は、[XUL](/ja/docs/Mozilla/Tech/XUL) 要素にのみ適用されます。

### B

- {{CSSxRef("-moz-binding")}} {{Deprecated_Inline}}
- {{CSSxRef("-moz-border-bottom-colors")}} {{deprecated_inline}}
- {{CSSxRef("-moz-border-left-colors")}} {{deprecated_inline}}
- {{CSSxRef("-moz-border-right-colors")}} {{deprecated_inline}}
- {{CSSxRef("-moz-border-top-colors")}} {{deprecated_inline}}
- {{CSSxRef("-moz-box-align")}}
- {{CSSxRef("-moz-box-direction")}}
- {{CSSxRef("-moz-box-flex")}}
- {{CSSxRef("-moz-box-ordinal-group")}}
- {{CSSxRef("-moz-box-orient")}}
- {{CSSxRef("-moz-box-pack")}}

### C–I

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

### S–Z

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
- {{CSSxRef("-moz-user-modify")}}
- {{CSSxRef("-moz-window-dragging")}}
- {{CSSxRef("-moz-window-shadow")}}

## 以前は独自だったが標準化されたもの

> **Note:** CSS の互換性を最大化するため、以下の接頭辞付きのものではなく、接頭辞なしの標準プロパティを使用してください。これらは、標準化されて接頭辞なしの形式が対応され次第、接頭辞付きのバージョンは順次破棄されます。

### A

- {{CSSxRef("animation", "-moz-animation")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("animation-delay", "-moz-animation-delay")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("animation-direction", "-moz-animation-direction")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("animation-duration", "-moz-animation-duration")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("animation-name", "-moz-animation-name")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("animation-timing-function","-moz-animation-timing-function")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("appearance","-moz-appearance")}} {{Experimental_Inline}}

### B

- {{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("background-clip", "-moz-background-clip")}}{{deprecated_inline}}
- {{CSSxRef("background-origin", "-moz-background-origin")}}{{deprecated_inline}}
- {{CSSxRef("-moz-background-inline-policy")}}{{deprecated_inline}} [標準化された {{CSSxRef("box-decoration-break")}} に置き換え]
- {{CSSxRef("background-size", "-moz-background-size")}}{{deprecated_inline}}
- {{CSSxRef("border-inline-end","-moz-border-end")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-end")}} に置き換え]
- {{CSSxRef("border-inline-color","-moz-border-end-color")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-end-color")}} に置き換え]
- {{CSSxRef("border-inline-style","-moz-border-end-style")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-end-style")}} に置き換え]
- {{CSSxRef("border-inline-width","-moz-border-end-width")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-end-width")}} に置き換え]
- {{CSSxRef("border-image","-moz-border-image")}} {{Deprecated_Inline}}
- {{CSSxRef("border-inline-start","-moz-border-start")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-start")}} に置き換え]
- {{CSSxRef("border-inline-start-color","-moz-border-start-color")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-start-color")}} に置き換え]
- {{CSSxRef("border-inline-start-style","-moz-border-start-style")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-start-style")}} に置き換え]
- {{CSSxRef("border-inline-start-width","-moz-border-start-width")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("border-inline-start-width")}} に置き換え]
- {{CSSxRef("box-sizing", "-moz-box-sizing")}} {{Deprecated_Inline}} [接頭辞付きも許容]

### C

- {{CSSxRef("clip-path")}} {{Experimental_Inline}} [SVG 以外にも適用]
- {{CSSxRef("column-count","-moz-column-count")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("column-fill","-moz-column-fill")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("column-gap","-moz-column-gap")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("column-width","-moz-column-width")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("column-rule","-moz-column-rule")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("column-rule-width","-moz-column-rule-width")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("column-rule-style","-moz-column-rule-style")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("column-rule-color","-moz-column-rule-color")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("-moz-context-properties")}} {{Experimental_Inline}}

### F–M

- {{CSSxRef("filter")}} {{Experimental_Inline}} [SVG 以外にも適用]
- {{CSSxRef("font-feature-settings","-moz-font-feature-settings")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("font-language-override","-moz-font-language-override")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("hyphens","-moz-hyphens")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("margin-inline-end","-moz-margin-end")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("margin-inline-end")}} に置き換え]
- {{CSSxRef("margin-inline-start","-moz-margin-start")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("margin-inline-start")}} に置き換え]
- {{CSSxRef("mask")}} {{Experimental_Inline}} [SVG 以外にも適用]

### O

- {{CSSxRef("opacity","-moz-opacity")}} {{deprecated_inline}}
- {{CSSxRef("outline","-moz-outline")}} {{deprecated_inline}}
- {{CSSxRef("outline-color","-moz-outline-color")}} {{deprecated_inline}}
- {{CSSxRef("outline-offset","-moz-outline-offset")}} {{deprecated_inline}}
- {{CSSxRef("outline-style","-moz-outline-style")}} {{deprecated_inline}}
- {{CSSxRef("outline-width","-moz-outline-width")}} {{deprecated_inline}}

### P

- {{CSSxRef("padding-inline-end","-moz-padding-end")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("padding-inline-end")}} に置き換え]
- {{CSSxRef("padding-inline-start","-moz-padding-start")}} {{Deprecated_Inline}} [標準化された {{CSSxRef("padding-inline-start")}} に置き換え]
- {{CSSxRef("perspective", "-moz-perspective")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("perspective-origin","-moz-perspective-origin")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("pointer-events")}} {{Experimental_Inline}} [SVG 以外にも適用]

### T–U

- {{CSSxRef("tab-size","-moz-tab-size")}} {{Experimental_Inline}}
- {{CSSxRef("text-align-last","-moz-text-align-last")}}{{deprecated_inline}}
- {{CSSxRef("text-decoration-color","-moz-text-decoration-color")}}{{deprecated_inline}}
- {{CSSxRef("text-decoration-line","-moz-text-decoration-line")}}{{deprecated_inline}}
- {{CSSxRef("text-decoration-style","-moz-text-decoration-style")}}{{deprecated_inline}}
- {{CSSxRef("text-size-adjust","-moz-text-size-adjust")}} {{Experimental_Inline}}
- {{CSSxRef("transform", "-moz-transform")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("transform-origin", "-moz-transform-origin")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("transform-style", "-moz-transform-style")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("transition", "-moz-transition")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("transition-delay", "-moz-transition-delay")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("transition-duration", "-moz-transition-duration")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("transition-property", "-moz-transition-property")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("transition-timing-function", "-moz-transition-timing-function")}} {{Deprecated_Inline}} [接頭辞付きも許容]
- {{CSSxRef("user-select","-moz-user-select")}} {{Experimental_Inline}}

## 値

### グローバル値

- {{CSSxRef("initial","-moz-initial")}}

### {{CSSxRef("-moz-appearance")}}

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

### {{CSSxRef("background-image")}}

#### グラデーション

- {{CSSxRef("linear-gradient","-moz-linear-gradient")}} {{Deprecated_Inline}}
- {{CSSxRef("radial-gradient","-moz-radial-gradient")}} {{Deprecated_Inline}}

#### 要素

- {{CSSxRef("element","-moz-element")}}

#### サブ画像

- {{CSSxRef("-moz-image-rect")}}

### {{CSSxRef("border-color")}}

- `-moz-use-text-color` {{deprecated_inline}} ({{bug(1306214)}} で削除)、代わりに {{CSSxRef("color_value#currentColor_keyword","currentcolor")}} を使用してください。

### {{CSSxRef("border-style")}} と {{CSSxRef("outline-style")}}

- `-moz-bg-inset` {{deprecated_inline}}
- `-moz-bg-outset` {{deprecated_inline}}
- `-moz-bg-solid` {{deprecated_inline}}

### {{CSSxRef("&lt;color&gt;")}} キーワード

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

### {{CSSxRef("display")}}

- `-moz-box` {{deprecated_inline}}
- `-moz-inline-block` {{deprecated_inline}}
- `-moz-inline-box` {{Deprecated_Inline}}
- `-moz-inline-grid` {{deprecated_inline}}
- `-moz-inline-stack` {{deprecated_inline}}
- `-moz-inline-table` {{deprecated_inline}}
- `-moz-grid` {{deprecated_inline}}
- `-moz-grid-group` {{deprecated_inline}}
- `-moz-grid-line` {{deprecated_inline}}
- `-moz-groupbox` {{deprecated_inline}}
- `-moz-deck` {{deprecated_inline}}
- `-moz-popup` {{deprecated_inline}}
- `-moz-stack` {{deprecated_inline}}
- `-moz-marker` {{deprecated_inline}}

### {{CSSxRef("empty-cells")}}

- `-moz-show-background` (後方互換モードでは既定値)

### {{CSSxRef("font")}}

- `-moz-button`
- `-moz-info`
- `-moz-desktop`
- `-moz-dialog` (色も)
- `-moz-document`
- `-moz-workspace`
- `-moz-window`
- `-moz-list`
- `-moz-pull-down-menu`
- `-moz-field` (色も)

### {{CSSxRef("font-family")}}

- `-moz-fixed`

### {{CSSxRef("image-rendering")}}

- {{CSSxRef("image-rendering","-moz-crisp-edges")}}

### {{CSSxRef("&lt;length&gt;")}}

- {{CSSxRef("-moz-calc")}}

### {{CSSxRef("list-style-type")}}

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

### {{CSSxRef("overflow")}}

- {{CSSxRef("-moz-scrollbars-none")}} {{deprecated_inline}}
- {{CSSxRef("-moz-scrollbars-horizontal")}} {{Deprecated_Inline}}
- {{CSSxRef("-moz-scrollbars-vertical")}} {{Deprecated_Inline}}
- {{CSSxRef("-moz-hidden-unscrollable")}}

### {{CSSxRef("text-align")}}

- `-moz-center`
- `-moz-left`
- `-moz-right`

### {{CSSxRef("text-decoration")}}

- `-moz-anchor-decoration`

### {{CSSxRef("-moz-user-select")}}

- `-moz-all`
- `-moz-none`

### {{CSSxRef("width")}}, {{CSSxRef("min-width")}}, {{CSSxRef("max-width")}}

- `-moz-min-content`
- `-moz-fit-content`
- `-moz-max-content`
- `-moz-available`

## 擬似要素と擬似クラス

### A – D

- {{CSSxRef("::-moz-anonymous-block")}}
- {{CSSxRef("::-moz-anonymous-positioned-block")}}
- {{CSSxRef(":-moz-any")}}
- {{CSSxRef(":-moz-any-link")}} [`:link` と `:visited` に一致する]
- {{CSSxRef(":-moz-broken")}}
- {{CSSxRef("::-moz-canvas")}}
- {{CSSxRef("::-moz-color-swatch")}}
- {{CSSxRef("::-moz-cell-content")}}
- {{CSSxRef(":-moz-drag-over")}}

### F – I

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

### L

- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":-moz-list-bullet")}}
- {{CSSxRef(":-moz-list-number")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir(rtl)")}}
- {{CSSxRef(":-moz-lwtheme")}}
- {{CSSxRef(":-moz-lwtheme-brighttext")}}
- {{CSSxRef(":-moz-lwtheme-darktext")}}

### N – R

- {{CSSxRef(":-moz-native-anonymous")}}
- {{CSSxRef(":-moz-only-whitespace")}}
- {{CSSxRef("::-moz-page")}}
- {{CSSxRef("::-moz-page-sequence")}}
- {{CSSxRef("::-moz-pagebreak")}}
- {{CSSxRef("::-moz-pagecontent")}}
- {{CSSxRef(":-moz-placeholder")}} {{deprecated_inline}}
- {{CSSxRef("::-moz-placeholder")}} {{deprecated_inline}}
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}
- {{CSSxRef(":-moz-read-only")}}
- {{CSSxRef(":-moz-read-write")}}

### S

- {{CSSxRef("::-moz-scrolled-canvas")}}
- {{CSSxRef("::-moz-scrolled-content")}}
- {{CSSxRef("::-moz-scrolled-page-sequence")}}
- {{CSSxRef("::selection","::-moz-selection")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-submit-invalid")}}
- {{CSSxRef(":-moz-suppressed")}}
- {{CSSxRef("::-moz-svg-foreign-content")}}

### T

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

### U – X

- {{CSSxRef(":-moz-ui-invalid")}}
- {{CSSxRef(":-moz-ui-valid")}}
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef("::-moz-viewport")}}
- {{CSSxRef("::-moz-viewport-scroll")}}
- {{CSSxRef(":-moz-window-inactive")}}
- {{CSSxRef("::-moz-xul-anonymous-block")}}

## アットルール

- {{CSSxRef("@-moz-document")}}

## メディア特性

- {{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
- {{CSSxRef("@media/-moz-os-version", "-moz-os-version")}}
- {{CSSxRef("@media/-moz-touch-enabled", "-moz-touch-enabled")}}
- {{CSSxRef("@media/-moz-windows-glass", "-moz-windows-glass")}}

## その他

- {{CSSxRef("-moz-alt-content")}} (see {{Bug(11011)}})

## 関連情報

- [Chrome 専用 CSS リファレンス](/ja/docs/Mozilla/Gecko/Chrome/CSS)
- [CSS の Microsoft 拡張](/ja/docs/Web/CSS/Microsoft_Extensions)
- [CSS の WebKit 拡張](/ja/docs/Web/CSS/WebKit_Extensions)
