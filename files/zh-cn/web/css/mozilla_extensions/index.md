---
title: 具有 Mozilla 厂商前缀的 CSS 扩展
slug: Web/CSS/Mozilla_Extensions
l10n:
  sourceCommit: d36cd679498a75dccf51685d8e178994a0df585e
---

{{CSSRef}}

Firefox 支持一些 _[CSS](/zh-CN/docs/Web/CSS) 的 Mozilla 扩展_，包括属性、值、伪元素、伪类、at 规则和媒体查询。这些扩展具有 `-moz-` 前缀。

> [!NOTE]
> 这些扩展大多是实验性的或已弃用的，但出于向后兼容性而被保留。请勿在生产环境的网站中使用它们。

## 仅 Mozilla 具有的属性

- {{CSSxRef("box-align", "-moz-box-align")}} {{deprecated_inline}}
- {{CSSxRef("box-direction", "-moz-box-direction")}} {{deprecated_inline}}
- {{CSSxRef("box-flex", "-moz-box-flex")}} {{deprecated_inline}}
- {{CSSxRef("box-ordinal-group" ,"-moz-box-ordinal-group")}} {{deprecated_inline}}
- {{CSSxRef("box-orient", "-moz-box-orient")}} {{deprecated_inline}}
- {{CSSxRef("box-pack", "-moz-box-pack")}} {{deprecated_inline}}
- {{CSSxRef("-moz-float-edge")}} {{deprecated_inline}}
- {{CSSxRef("-moz-force-broken-image-icon")}} {{deprecated_inline}}
- {{CSSxRef("-moz-image-region")}} {{deprecated_inline}}
- {{CSSxRef("-moz-orient")}} {{non-standard_inline}}
- {{CSSxRef("font-smooth", "-moz-osx-font-smoothing")}} {{non-standard_inline}}
- {{CSSxRef("-moz-user-focus")}} {{non-standard_inline}}
- {{CSSxRef("-moz-user-input")}} {{non-standard_inline}}
- {{CSSxRef("user-modify", "-moz-user-modify")}} {{non-standard_inline}}

## 以前为专有而现在已被标准化的属性

> [!NOTE]
> 为最大限度地提高 CSS 的兼容性，你应该使用下面列出的不带前缀的标准属性，而不是带有前缀的属性。一旦某个属性被标准化并且已在没有前缀的情况下实现，那么在一段时间后，带有前缀的版本通常会被删除。

### A

- {{CSSxRef("animation", "-moz-animation")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("animation-delay", "-moz-animation-delay")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("animation-direction", "-moz-animation-direction")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("animation-duration", "-moz-animation-duration")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("animation-name", "-moz-animation-name")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("animation-timing-function","-moz-animation-timing-function")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("appearance","-moz-appearance")}} {{Experimental_Inline}}

### B

- {{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("background-clip", "-moz-background-clip")}} {{deprecated_inline}}
- {{CSSxRef("background-origin", "-moz-background-origin")}} {{deprecated_inline}}
- {{CSSxRef("box-decoration-break", "-moz-background-inline-policy")}} {{deprecated_inline}}（不再被支持；请使用标准的 {{CSSxRef("box-decoration-break")}}）
- {{CSSxRef("background-size", "-moz-background-size")}} {{deprecated_inline}}
- {{CSSxRef("border-inline-end", "-moz-border-end")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("border-inline-end")}}）
- {{CSSxRef("border-inline-color", "-moz-border-end-color")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("border-inline-end-color")}}）
- {{CSSxRef("border-inline-style", "-moz-border-end-style")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("border-inline-end-style")}}）
- {{CSSxRef("border-inline-width", "-moz-border-end-width")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("border-inline-end-width")}}）
- {{CSSxRef("border-image", "-moz-border-image")}} {{Deprecated_Inline}}
- {{CSSxRef("border-inline-start", "-moz-border-start")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("border-inline-start")}}）
- {{CSSxRef("border-inline-start-color", "-moz-border-start-color")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("border-inline-start-color")}}）
- {{CSSxRef("border-inline-start-style", "-moz-border-start-style")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("border-inline-start-style")}}）
- {{CSSxRef("border-inline-start-width", "-moz-border-start-width")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("border-inline-start-width")}}）
- {{CSSxRef("box-sizing", "-moz-box-sizing")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）

### C

- {{CSSxRef("clip-path")}} {{Experimental_Inline}}（应用于 SVG 和其他地方）
- {{CSSxRef("column-count", "-moz-column-count")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("column-fill", "-moz-column-fill")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("column-gap", "-moz-column-gap")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("column-width", "-moz-column-width")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("column-rule", "-moz-column-rule")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("column-rule-width", "-moz-column-rule-width")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("column-rule-style", "-moz-column-rule-style")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("column-rule-color", "-moz-column-rule-color")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）

### F–M

- {{CSSxRef("filter")}} {{Experimental_Inline}}（应用于 SVG 和其他地方）
- {{CSSxRef("font-feature-settings", "-moz-font-feature-settings")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("font-language-override", "-moz-font-language-override")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("hyphens", "-moz-hyphens")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("margin-inline-end", "-moz-margin-end")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("margin-inline-end")}}）
- {{CSSxRef("margin-inline-start", "-moz-margin-start")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("margin-inline-start")}}）
- {{CSSxRef("mask")}} {{Experimental_Inline}}（应用于 SVG 和其他地方）

### O

- {{CSSxRef("opacity", "-moz-opacity")}} {{deprecated_inline}}
- {{CSSxRef("outline", "-moz-outline")}} {{deprecated_inline}}
- {{CSSxRef("outline-color", "-moz-outline-color")}} {{deprecated_inline}}
- {{CSSxRef("outline-offset", "-moz-outline-offset")}} {{deprecated_inline}}
- {{CSSxRef("outline-style", "-moz-outline-style")}} {{deprecated_inline}}
- {{CSSxRef("outline-width", "-moz-outline-width")}} {{deprecated_inline}}

### P

- {{CSSxRef("padding-inline-end", "-moz-padding-end")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("padding-inline-end")}}）
- {{CSSxRef("padding-inline-start", "-moz-padding-start")}} {{Deprecated_Inline}}（不再被支持；请使用标准的 {{CSSxRef("padding-inline-start")}}）
- {{CSSxRef("perspective", "-moz-perspective")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("perspective-origin", "-moz-perspective-origin")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("pointer-events")}} {{Experimental_Inline}}（应用于 SVG 和其他地方）

### T–U

- {{CSSxRef("tab-size", "-moz-tab-size")}} {{Experimental_Inline}}
- {{CSSxRef("text-align-last", "-moz-text-align-last")}} {{deprecated_inline}}
- {{CSSxRef("text-decoration-color", "-moz-text-decoration-color")}} {{deprecated_inline}}
- {{CSSxRef("text-decoration-line", "-moz-text-decoration-line")}} {{deprecated_inline}}
- {{CSSxRef("text-decoration-style", "-moz-text-decoration-style")}} {{deprecated_inline}}
- {{CSSxRef("text-size-adjust", "-moz-text-size-adjust")}} {{Experimental_Inline}}
- {{CSSxRef("transform", "-moz-transform")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("transform-origin", "-moz-transform-origin")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("transform-style", "-moz-transform-style")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("transition", "-moz-transition")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("transition-delay", "-moz-transition-delay")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("transition-duration", "-moz-transition-duration")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("transition-property", "-moz-transition-property")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("transition-timing-function", "-moz-transition-timing-function")}} {{Deprecated_Inline}}（仍受支持的带有前缀的版本）
- {{CSSxRef("user-select", "-moz-user-select")}} {{Experimental_Inline}}

## 值

### 全局值

- {{CSSxRef("initial", "-moz-initial")}}

### -moz-appearance

属性：{{CSSxRef("appearance", "-moz-appearance")}}

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

### background-image

属性：{{CSSxRef("background-image")}}

#### 渐变

- {{CSSxRef("gradient/linear-gradient","-moz-linear-gradient")}} {{Deprecated_Inline}}
- {{CSSxRef("gradient/radial-gradient","-moz-radial-gradient")}} {{Deprecated_Inline}}

#### 元素

- {{CSSxRef("element","-moz-element")}}

#### 子图像

- {{CSSxRef("-moz-image-rect")}}

### border-color

属性：{{CSSxRef("border-color")}}

- `-moz-use-text-color` {{deprecated_inline}}（已移除，参见 [Firefox bug 1306214](https://bugzil.la/1306214)）请使用 {{CSSxRef("color_value#currentcolor_keyword","currentcolor")}} 代替。

### order-style 和 outline-style

属性：{{CSSxRef("border-style")}} 和 {{CSSxRef("outline-style")}}

- `-moz-bg-inset` {{deprecated_inline}}
- `-moz-bg-outset` {{deprecated_inline}}
- `-moz-bg-solid` {{deprecated_inline}}

### &lt;color&gt; 关键字

类型：{{CSSxRef("&lt;color&gt;")}}

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

### display

属性：{{CSSxRef("display")}}

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

### empty-cells

属性：{{CSSxRef("empty-cells")}}

- `-moz-show-background`（怪异模式中的默认值）

### font

属性：{{CSSxRef("font")}}

- `-moz-button`
- `-moz-info`
- `-moz-desktop`
- `-moz-dialog`（也为一种颜色）
- `-moz-document`
- `-moz-workspace`
- `-moz-window`
- `-moz-list`
- `-moz-pull-down-menu`
- `-moz-field`（也为一种颜色）

### font-family

属性：{{CSSxRef("font-family")}}

- `-moz-fixed`

### image-rendering

属性：{{CSSxRef("image-rendering")}}

- {{CSSxRef("image-rendering","-moz-crisp-edges")}}

### &lt;length&gt;

属性：{{CSSxRef("&lt;length&gt;")}}

- {{CSSxRef("calc", "-moz-calc")}}

### list-style-type

属性：{{CSSxRef("list-style-type")}}

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

### text-align

属性：{{CSSxRef("text-align")}}

- `-moz-center`
- `-moz-left`
- `-moz-right`

### text-decoration

属性：{{CSSxRef("text-decoration")}}

- `-moz-anchor-decoration`

### -moz-user-select

属性：{{CSSxRef("user-select", "-moz-user-select")}}

- `-moz-all`
- `-moz-none`

### width、min-width 和 max-width

属性：{{CSSxRef("width")}}、{{CSSxRef("min-width")}} 和 {{CSSxRef("max-width")}}

- `-moz-min-content`
- `-moz-fit-content`
- `-moz-max-content`
- `-moz-available`

## 伪元素和伪类

### A – D

- {{CSSxRef("::-moz-anonymous-block")}}
- {{CSSxRef("::-moz-anonymous-positioned-block")}}
- {{CSSxRef(":is", ":-moz-any")}}
- {{CSSxRef(":any-link", ":-moz-any-link")}} \[匹配 `:link` 和 `:visited`]
- {{CSSxRef(":-moz-broken")}}
- {{CSSxRef("::-moz-canvas")}}
- {{CSSxRef("::-moz-color-swatch")}}
- {{CSSxRef("::-moz-cell-content")}}
- {{CSSxRef(":-moz-drag-over")}}

### F – I

- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef("::-moz-focus-inner")}}
- {{CSSxRef("::-moz-focus-outer")}}
- {{CSSxRef(":fullscreen", ":-moz-full-screen")}}
- {{CSSxRef(":-moz-full-screen-ancestor")}}
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef("::-moz-inline-table")}}

### L

- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef("::-moz-list-bullet")}}
- {{CSSxRef("::-moz-list-number")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":dir_ltr", ":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":dir_rtl", ":-moz-locale-dir(rtl)")}}
- {{CSSxRef(":-moz-lwtheme")}}
- {{CSSxRef(":-moz-lwtheme-brighttext")}}
- {{CSSxRef(":-moz-lwtheme-darktext")}}

### N – R

- {{CSSxRef(":-moz-native-anonymous")}}
- {{CSSxRef(":-moz-only-whitespace")}}
- {{CSSxRef("::-moz-pagebreak")}}
- {{CSSxRef("::-moz-pagecontent")}}
- {{CSSxRef(":placeholder-shown", ":-moz-placeholder")}} {{deprecated_inline}}
- {{CSSxRef("::placeholder", "::-moz-placeholder")}} {{deprecated_inline}}
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}
- {{CSSxRef(":-moz-read-only")}}
- {{CSSxRef(":-moz-read-write")}}

### S

- {{CSSxRef("::-moz-scrolled-canvas")}}
- {{CSSxRef("::-moz-scrolled-content")}}
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

### U – X

- {{CSSxRef(":user-invalid", ":-moz-ui-invalid")}} {{deprecated_inline}}
- {{CSSxRef(":user-valid", ":-moz-ui-valid")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef("::-moz-viewport")}}
- {{CSSxRef("::-moz-viewport-scroll")}}
- {{CSSxRef(":-moz-window-inactive")}}

## At 规则

- {{CSSxRef("@document", "@-moz-document")}}

## 媒体特性

- {{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}} {{deprecated_inline}}
- {{CSSxRef("@media/-moz-os-version", "-moz-os-version")}}
- {{CSSxRef("@media/-moz-touch-enabled", "-moz-touch-enabled")}}
- {{CSSxRef("@media/-moz-windows-glass", "-moz-windows-glass")}}

## 其他

- {{CSSxRef("-moz-alt-content")}}（参见 [Firefox bug 11011](https://bugzil.la/11011)）

## 参见

- [厂商前缀](/zh-CN/docs/Glossary/Vendor_Prefix)术语表条目
- [具有 WebKit 厂商前缀的 CSS 扩展](/zh-CN/docs/Web/CSS/WebKit_Extensions)
