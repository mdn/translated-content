---
title: Firefox の (-moz-) ベンダー接頭辞付きの CSS 拡張
slug: Web/CSS/Reference/Mozilla_extensions
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{glossary("vendor prefix", "ベンダー接頭辞")}}は、機能が特定のブラウザー専用であることを示すために使われます。
Firefox はいくつかの拡張を [CSS](/ja/docs/Web/CSS) に行っており、それらには `-moz-` の接頭辞が付いています。

## 標準の相当機能がない -moz- 接頭辞付きのプロパティ

> [!NOTE]
> これらの拡張機能は主に実験的または非推奨ですが、下位互換性のために維持されています。
> 本番環境のウェブサイトでは使用を避けるべきです。

- {{CSSxRef("-moz-float-edge")}} {{deprecated_inline}}
- {{CSSxRef("-moz-force-broken-image-icon")}} {{deprecated_inline}}: 代わりに `alt` テキストを使用してください。
- {{CSSxRef("-moz-orient")}}
- `-moz-osx-font-smoothing`: 類似の相当機能に {{CSSxRef("font-smooth")}} があります。
- {{CSSxRef("-moz-user-focus")}} {{deprecated_inline}}
- {{CSSxRef("-moz-user-input")}} {{deprecated_inline}}
- `-moz-user-modify`: 接頭辞のない {{CSSxRef("user-modify")}} の相当機能がありますが、HTML の [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性を代わりに使用してください。

## 標準の相当機能がある -moz- 接頭辞付きのプロパティ

以下のプロパティはまず `-moz-` ベンダー接頭辞を使用して実装されましたが、現在は Firefox が標準（接頭辞なし）の構文で対応しています。
接頭辞付きバージョンの対応は通常、最終的に廃止されるため、代わりに標準プロパティを使用してください。

### A

- {{CSSxRef("animation", "-moz-animation")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("animation-delay", "-moz-animation-delay")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("animation-direction", "-moz-animation-direction")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("animation-duration", "-moz-animation-duration")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("animation-fill-mode", "-moz-animation-fill-mode")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("animation-iteration-count", "-moz-animation-iteration-count")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("animation-name", "-moz-animation-name")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("animation-play-state", "-moz-animation-play-state")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("animation-timing-function","-moz-animation-timing-function")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- `-moz-appearance`: {{CSSxRef("appearance")}} の接頭辞付き版もまだ対応しています。

### B

- {{CSSxRef("backface-visibility", "-moz-backface-visibility")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- `-moz-background-clip` {{deprecated_inline}}: 対応していません。 {{CSSxRef("background-clip")}} を使用してください。
- `-moz-background-origin` {{deprecated_inline}}: 対応していません。 {{CSSxRef("background-origin")}} を使用してください。
- `-moz-box-align` {{deprecated_inline}}: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)の {{CSSxRef("align-items")}} を使用してください。
- `-moz-background-inline-policy` {{deprecated_inline}}: 対応していません。{{CSSxRef("box-decoration-break")}} を使用してください。
- `-moz-box-direction` {{deprecated_inline}}: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)の {{CSSxRef("flex-direction")}} を使用してください。
- `-moz-box-flex` {{deprecated_inline}}: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)の {{CSSxRef("flex-grow")}} を使用してください。
- `-moz-box-ordinal-group` {{deprecated_inline}}: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)の {{CSSxRef("order")}} を使用してください。
- `-moz-box-orient` {{deprecated_inline}}: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)の {{CSSxRef("flex-direction")}} を使用してください。
- `-moz-box-pack` {{deprecated_inline}}: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)の {{CSSxRef("justify-content")}} を使用してください。
- `-moz-background-size` {{deprecated_inline}}: 対応していません。{{CSSxRef("background-size")}} を使用してください。
- `-moz-border-end` {{deprecated_inline}}: 対応していません。{{CSSxRef("border-inline-end")}} を使用してください。
- `-moz-border-end-color` {{deprecated_inline}}: 対応していません。{{CSSxRef("border-inline-end-color")}} を使用してください。
- `-moz-border-end-style` {{deprecated_inline}}: 対応していません。{{CSSxRef("border-inline-end-style")}} を使用してください。
- `-moz-border-end-width` {{deprecated_inline}}: 対応していません。{{CSSxRef("border-inline-end-width")}} を使用してください。
- `-moz-border-image` {{deprecated_inline}}: 対応していません。{{CSSxRef("border-inline-end-width")}} を使用してください。
- `-moz-border-start` {{deprecated_inline}}: 対応していません。{{CSSxRef("border-inline-start")}} を使用してください。
- `-moz-border-start-color` {{deprecated_inline}}: 対応していません。{{CSSxRef("border-inline-start-color")}} を使用してください。
- `-moz-border-start-style` {{deprecated_inline}}: 対応していません。{{CSSxRef("border-inline-start-style")}} を使用してください。
- `-moz-border-start-width` {{deprecated_inline}}: 対応していません。{{CSSxRef("border-inline-start-width")}} を使用してください。
- {{CSSxRef("box-sizing", "-moz-box-sizing")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。

### C

- `-moz-column-count` {{deprecated_inline}}: 対応していません。{{CSSxRef("column-count")}} を使用してください。
- `-moz-column-fill` {{deprecated_inline}}: 対応していません。{{CSSxRef("column-fill")}} を使用してください。
- `-moz-column-gap` {{deprecated_inline}}: 対応していません。{{CSSxRef("column-gap")}} を使用してください。
- `-moz-column-width` {{deprecated_inline}}: 対応していません。{{CSSxRef("column-width")}} を使用してください。
- `-moz-column-rule` {{deprecated_inline}}: 対応していません。{{CSSxRef("column-rule")}} を使用してください。
- `-moz-column-rule-width` {{deprecated_inline}}: 対応していません。{{CSSxRef("column-rule-width")}} を使用してください。
- `-moz-column-rule-style` {{deprecated_inline}}: 対応していません。{{CSSxRef("column-rule-style")}} を使用してください。
- `-moz-column-rule-color` {{deprecated_inline}}: 対応していません。{{CSSxRef("column-rule-color")}} を使用してください。

### F–M

- {{CSSxRef("font-feature-settings","-moz-font-feature-settings")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("font-language-override","-moz-font-language-override")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("hyphens", "-moz-hyphens")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- `-moz-margin-end` {{deprecated_inline}}: 対応していません。{{CSSxRef("margin-inline-end")}} を使用してください。
- `-moz-margin-start` {{deprecated_inline}}: 対応していません。{{CSSxRef("margin-inline-start")}} を使用してください。

### O-P

- `-moz-opacity` {{deprecated_inline}}: 対応していません。{{CSSxRef("opacity")}} を使用してください。
- `-moz-outline` {{deprecated_inline}}: 対応していません。{{CSSxRef("outline")}} を使用してください。
- `-moz-outline-color` {{deprecated_inline}}: 対応していません。{{CSSxRef("outline-color")}} を使用してください。
- `-moz-outline-offset` {{deprecated_inline}}: 対応していません。{{CSSxRef("outline-offset")}} を使用してください。
- `-moz-outline-style` {{deprecated_inline}}: 対応していません。{{CSSxRef("outline-style")}} を使用してください。
- `-moz-outline-width` {{deprecated_inline}}: 対応していません。{{CSSxRef("outline-width")}} を使用してください。
- `-moz-padding-end` {{deprecated_inline}}: 対応していません。{{CSSxRef("padding-inline-end")}} を使用してください。
- `-moz-padding-start` {{deprecated_inline}}: 対応していません。{{CSSxRef("padding-inline-start")}} を使用してください。
- {{CSSxRef("perspective", "-moz-perspective")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("perspective-origin", "-moz-perspective-origin")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。

### T–Z

- `-moz-tab-size`: {{CSSxRef("tab-size")}} を使用してください。
- `-moz-text-align-last` {{deprecated_inline}}: 対応していません。{{CSSxRef("text-align-last")}} を使用してください。
- `-moz-text-decoration-color` {{deprecated_inline}}: 対応していません。{{CSSxRef("text-decoration-color")}} を使用してください。
- `-moz-text-decoration-line` {{deprecated_inline}}: 対応していません。{{CSSxRef("text-decoration-line")}} を使用してください。
- `-moz-text-decoration-style` {{deprecated_inline}}: 対応していません。{{CSSxRef("text-decoration-style")}} を使用してください。
- `-moz-text-size-adjust`: {{CSSxRef("text-size-adjust")}} {{Experimental_Inline}} を参照してください。
- {{CSSxRef("transform", "-moz-transform")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("transform-origin", "-moz-transform-origin")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- {{CSSxRef("transform-style", "-moz-transform-style")}} {{deprecated_inline}}: 接頭辞付き版もまだ対応しています。
- `-moz-transition` {{deprecated_inline}}: 対応していません。{{CSSxRef("transition")}} を使用してください。
- `-moz-transition-delay` {{deprecated_inline}}: 対応していません。{{CSSxRef("transition-delay")}} を使用してください。
- `-moz-transition-duration` {{deprecated_inline}}: 対応していません。{{CSSxRef("transition-duration")}} を使用してください。
- `-moz-transition-property` {{deprecated_inline}}: 対応していません。{{CSSxRef("transition-property")}} を使用してください。
- `-moz-transition-timing-function` {{deprecated_inline}}: 対応していません。{{CSSxRef("transition-timing-function")}} を使用してください。
- `-moz-user-select`: {{CSSxRef("user-select")}} を使用してください。

## -moz 接頭辞の付いたプロパティ値

### グローバル値

- `-moz-initial`: {{CSSxRef("initial")}} を参照してください。

### background-image

**プロパティ:** {{CSSxRef("background-image")}}

- `-moz-linear-gradient` {{deprecated_inline}}: {{CSSxRef("gradient/linear-gradient")}} を使用してください。
- `-moz-radial-gradient` {{deprecated_inline}}: {{CSSxRef("gradient/radial-gradient")}} を使用してください。
- `-moz-element` {{deprecated_inline}}: {{CSSxRef("element")}} を使用してください。
- {{CSSxRef("-moz-image-rect")}} {{deprecated_inline}}

### order-style and outline-style

**プロパティ:** {{CSSxRef("border-style")}} と {{CSSxRef("outline-style")}}

- `-moz-bg-inset` {{deprecated_inline}}
- `-moz-bg-outset` {{deprecated_inline}}
- `-moz-bg-solid` {{deprecated_inline}}

### &lt;color&gt; キーワード

**型:** {{CSSxRef("&lt;color&gt;")}}

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

**プロパティ:** {{CSSxRef("empty-cells")}}

- `-moz-show-background` （後方互換モードでの既定値）

### font-family

**プロパティ:** {{CSSxRef("font-family")}}

- `-moz-fixed`

### image-rendering

**プロパティ:** {{CSSxRef("image-rendering")}}

- `-moz-crisp-edges` {{deprecated_inline}}: [`crisp-edges`](/ja/docs/Web/CSS/Reference/Properties/image-rendering#crisp-edges) を使用してください。

### &lt;length&gt;

**Type:** {{CSSxRef("&lt;length&gt;")}}

- `-moz-calc`{{deprecated_inline}}: {{CSSxRef("calc")}} を使用してください。

### list-style-type

**プロパティ:** {{CSSxRef("list-style-type")}}

`list-style-type` のベンダー接頭辞付きの一部の値は、以下のリストにあるものを除き、 `-moz-` 接頭辞なしで標準の値として対応するようになりました。
詳しくは[ブラウザーの互換性](/ja/docs/Web/CSS/Reference/Properties/list-style-type#ブラウザーの互換性)を参照してください。

- `-moz-ethiopic-halehame`
- `-moz-ethiopic-halehame-am`
- `-moz-ethiopic-halehame-ti-er`
- `-moz-ethiopic-halehame-ti-et`
- `-moz-hangul`
- `-moz-hangul-consonant`
- `-moz-urdu`

### text-align

**プロパティ:** {{CSSxRef("text-align")}}

- `-moz-center` {{deprecated_inline}}: {{CSSxRef("text-align", "text-align: center")}} を使用してください。
- `-moz-left` {{deprecated_inline}}: {{CSSxRef("text-align", "text-align: left")}} を使用してください。
- `-moz-right` {{deprecated_inline}}: {{CSSxRef("text-align", "text-align: right")}} を使用してください。

### width, min-width, and max-width

**Properties:** {{CSSxRef("width")}}, {{CSSxRef("min-width")}}, and {{CSSxRef("max-width")}}

- `-moz-min-content`: {{CSSxRef("min-content")}} を参照してください。
- `-moz-fit-content`: {{CSSxRef("fit-content")}} を参照してください。
- `-moz-max-content`: {{CSSxRef("max-content")}} を参照してください。
- `-moz-available`: [`stretch`](/ja/docs/Web/CSS/Reference/Properties/width#stretch) を参照してください。

## 擬似クラス

- `:-moz-any` {{deprecated_inline}}: {{CSSxRef(":is")}} を使用してください。
- `:-moz-any-link` {{deprecated_inline}}: {{CSSxRef(":any-link")}} を使用してください。
- {{CSSxRef(":-moz-broken")}} {{deprecated_inline}}
- {{CSSxRef(":-moz-drag-over")}}
- {{CSSxRef(":-moz-first-node")}}
- `:-moz-full-screen` {{deprecated_inline}}: 対応していません。{{CSSxRef(":fullscreen")}} を使用してください。
- `:-moz-full-screen-ancestor` {{deprecated_inline}}: 対応していません。{{CSSxRef(":fullscreen")}} を使用してください。
- {{CSSxRef(":-moz-handler-blocked")}}
- {{CSSxRef(":-moz-handler-crashed")}}
- {{CSSxRef(":-moz-handler-disabled")}}
- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":-moz-loading")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
- `:-moz-native-anonymous`
- `:-moz-placeholder` {{deprecated_inline}}: {{CSSxRef(":placeholder-shown")}} を使用してください。
- {{CSSxRef(":-moz-only-whitespace")}}
- `:-moz-read-only` {{deprecated_inline}}: {{CSSxRef(":read-only")}} を使用してください。
- `:-moz-read-write` {{deprecated_inline}}: {{CSSxRef(":read-write")}} を使用してください。
- {{CSSxRef(":-moz-submit-invalid")}}: {{CSSxRef(":invalid")}} を参照してください。
- {{CSSxRef(":-moz-suppressed")}}
- `:-moz-ui-invalid` {{deprecated_inline}}: {{CSSxRef(":user-invalid")}} を使用してください。
- `:-moz-ui-valid` {{deprecated_inline}}: {{CSSxRef(":user-valid")}} を使用してください。
- {{CSSxRef(":-moz-user-disabled")}}
- {{CSSxRef(":-moz-window-inactive")}}

## 擬似要素

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
- `::-moz-placeholder` {{deprecated_inline}}: {{CSSxRef("::placeholder")}} を使用してください。
- {{CSSxRef("::-moz-progress-bar")}}
- {{CSSxRef("::-moz-range-progress")}}
- {{CSSxRef("::-moz-range-thumb")}}
- {{CSSxRef("::-moz-range-track")}}
- `::-moz-scrolled-canvas`
- `::-moz-scrolled-content`
- `::-moz-selection` {{deprecated_inline}}: {{CSSxRef("::selection")}} を使用してください。
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

## アットルール

- {{CSSxRef("@document", "@-moz-document")}}

## メディア特性

- {{CSSxRef("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}} {{deprecated_inline}}
- `-moz-platform`
- `-moz-windows-glass`

## その他

- `-moz-alt-content`: [Firefox バグ 11011](https://bugzil.la/11011) を参照してください。

## 関連情報

- [WebKit (-webkit-) ベンダー接頭辞付き CSS 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions)
- {{glossary("Vendor Prefix", "ベンダー接頭辞")}}: 用語集の項目
