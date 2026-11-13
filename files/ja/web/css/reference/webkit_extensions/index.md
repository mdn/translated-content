---
title: WebKit (-webkit-) ベンダー接頭辞付きの CSS 拡張
slug: Web/CSS/Reference/Webkit_extensions
l10n:
  sourceCommit: 0d155984425e8964c889efb63ec39593e11bbc14
---

{{glossary("vendor prefix", "ベンダー接頭辞")}}は、ある機能が特定のブラウザーに固有であることを示すために使用されます。
WebKit や Blink をベースとするユーザーエージェント（Safari や Chrome など）は、[CSS](/ja/docs/Web/CSS) に対するいくつかの拡張機能を対応しており、これらには `-webkit-` という接頭辞が付いています。

## 標準化された同等物のない -webkit- 接頭辞付きプロパティ

> [!NOTE]
> これらのプロパティは、対応状況の注記に別段の記載がない限り、WebKit または Blink ベースのブラウザーで動作します。
> 本番環境のウェブサイトでは、これらのプロパティの使用を避けるべきです。

### A-C

- `-webkit-app-region` {{deprecated_inline}}: Safari では対応終了。
- `-webkit-border-horizontal-spacing`
- `-webkit-border-vertical-spacing`
- {{CSSxRef("-webkit-box-reflect")}}: 互換性のため、すべてのブラウザーで `-webkit-` 付きで対応。
- `-webkit-column-axis`: Chrome では未対応。
- `-webkit-column-progression`: Chrome では未対応。
- `-webkit-cursor-visibility`: Chrome では未対応。

### D-L

- `-webkit-font-smoothing`: {{CSSxRef("font-smooth")}} を参照。
- `-webkit-hyphenate-limit-after`: Chrome では未対応。
- `-webkit-hyphenate-limit-before`: Chrome では未対応。
- `-webkit-hyphenate-limit-lines`: Chrome では未対応。
- `-webkit-line-align`: Chrome では未対応。
- `-webkit-line-box-contain`: Chrome では未対応。
- `-webkit-line-grid`: Chrome では未対応。
- `-webkit-line-snap`: Chrome では未対応。
- `-webkit-locale`
- `-webkit-logical-height`
- `-webkit-logical-width`

### M

- {{CSSxRef("-webkit-mask-box-image")}}: {{cssxref("mask-border")}} および {{cssxref("border-image")}} を参照。
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-outset")}}: {{cssxref("mask-border")}} および {{cssxref("border-image")}} を参照。
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-repeat")}}: {{cssxref("mask-border")}} および {{cssxref("border-image")}} を参照。
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-slice")}}: {{cssxref("mask-border")}} および {{cssxref("border-image")}} を参照。
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-source")}}: {{cssxref("mask-border")}} および {{cssxref("border-image")}} を参照。
- {{CSSxRef("-webkit-mask-box-image", "-webkit-mask-box-image-width")}}: {{cssxref("mask-border")}} および {{cssxref("border-image")}} を参照。
- {{CSSxRef("-webkit-mask-composite")}}: {{cssxref("mask-border")}} および {{cssxref("border-image")}} を参照。
- {{CSSxRef("-webkit-mask-position-x")}}: 互換性のため、すべてのブラウザーで `-webkit-` 付きで対応。
- {{CSSxRef("-webkit-mask-position-y")}}: 互換性のため、すべてのブラウザーで `-webkit-` 付きで対応。
- {{CSSxRef("-webkit-mask-repeat-x")}} {{deprecated_inline}}: 対応終了。{{CSSxRef("mask-repeat")}} を参照。
- {{CSSxRef("-webkit-mask-repeat-y")}} {{deprecated_inline}}: 対応終了。{{CSSxRef("mask-repeat")}} を参照。
- `-webkit-mask-source-type`: Chrome では未対応。
- `-webkit-max-logical-height`
- `-webkit-max-logical-width`
- `-webkit-min-logical-height`
- `-webkit-min-logical-width`

### N-Z

- `-webkit-nbsp-mode`: Chrome では未対応。
- `-webkit-perspective-origin-x`
- `-webkit-perspective-origin-y`
- `-webkit-rtl-ordering`
- {{CSSxRef("-webkit-tap-highlight-color")}}: iOS 版 Safari のみで対応。
- `-webkit-text-decoration-skip`: Chrome では未対応。
- `-webkit-text-decorations-in-effect`
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke")}}
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- `-webkit-text-zoom`: Chrome では未対応。
- {{CSSxRef("-webkit-touch-callout")}} {{deprecated_inline}}: iOS 版 Safari のみで対応。
- `-webkit-transform-origin-x`
- `-webkit-transform-origin-y`
- `-webkit-transform-origin-z`
- `-webkit-user-drag`
- `-webkit-user-modify`

## 標準化された同等物のある -webkit- 接頭辞付きプロパティ

`-webkit-` 接頭辞を持つプロパティの中には、対応する標準プロパティが存在するものがあります。
名前や構文が異なっていても、これらはもう使用すべきではありません。
下記のそれぞれのプロパティについては、対応する標準プロパティを使用してください。

### A-B

- `-webkit-border-after`: {{CSSxRef("border-block-end")}} を使用してください。
- `-webkit-border-after-color`: {{CSSxRef("border-block-end-color")}} を使用してください。
- `-webkit-border-after-style`: {{CSSxRef("border-block-end-style")}} を使用してください。
- `-webkit-border-after-width`: {{CSSxRef("border-block-end-width")}} を使用してください。
- {{CSSxRef("-webkit-border-before")}}: {{CSSxRef("border-block-start")}} を使用してください。
- `-webkit-border-before-color`: {{CSSxRef("border-block-start-color")}} を使用してください。
- `-webkit-border-before-style`: {{CSSxRef("border-block-start-style")}} を使用してください。
- `-webkit-border-before-width`: {{CSSxRef("border-block-start-width")}} を使用してください。
- `-webkit-border-end`: {{CSSxRef("border-inline-end")}} を使用してください。
- `-webkit-border-end-color`: {{CSSxRef("border-inline-end-color")}} を使用してください。
- `-webkit-border-end-style`: {{CSSxRef("border-inline-end-style")}} を使用してください。
- `-webkit-border-end-width`: {{CSSxRef("border-inline-end-width")}} を使用してください。
- `-webkit-border-start`: {{CSSxRef("border-inline-start")}} を使用してください。
- `-webkit-border-start-color`: {{CSSxRef("border-inline-start-color")}} を使用してください。
- `-webkit-border-start-style`: {{CSSxRef("border-inline-start-style")}} を使用してください。
- `-webkit-border-start-width`: {{CSSxRef("border-inline-start-width")}} を使用してください。
- `-webkit-box-align`: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)で {{CSSxRef("align-items")}} を使用してください。
- `-webkit-box-direction`: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)で {{CSSxRef("flex-direction")}} を使用してください。
- {{CSSxRef("box-flex-group", "-webkit-box-flex-group")}}: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)で {{CSSxRef("flex-basis")}}, {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} を使用してください。
- `-webkit-box-flex`: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)で {{CSSxRef("flex-grow")}} を使用してください。
- `-webkit-box-lines`: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)で {{CSSxRef("flex-flow")}} を使用してください。
- `-webkit-box-ordinal-group`: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)で {{CSSxRef("order")}} を使用してください。
- `-webkit-box-orient`: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)で {{CSSxRef("flex-direction")}} を使用してください。
- `-webkit-box-pack`: [CSS フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)で {{CSSxRef("justify-content")}} を使用してください。
- {{CSSxRef("-webkit-box-reflect")}}: CSS {{cssxref("element()")}} 関数を使用してください。

### C-I

- `-webkit-column-break-after`: [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout) で {{CSSxRef("break-after")}} を使用してください。
- `-webkit-column-break-before`: [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout) で {{CSSxRef("break-before")}} を使用してください。
- `-webkit-column-break-inside`: [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout) で {{CSSxRef("break-inside")}} を使用してください。
- `-webkit-font-feature-settings`: {{CSSxRef("font-feature-settings")}} を使用してください（接頭辞付きのバージョンは Safari では未対応）。
- `-webkit-hyphenate-character`: {{CSSxRef("hyphenate-character")}} を使用してください。
- `-webkit-initial-letter`: {{CSSxRef("initial-letter")}} を使用してください。

### J-Z

- `-webkit-line-clamp`: {{CSSxRef("line-clamp")}} を使用してください。
- `-webkit-margin-after`: {{CSSxRef("margin-block-end")}} を使用してください。
- `-webkit-margin-before`: {{CSSxRef("margin-block-start")}} を使用してください。
- `-webkit-margin-end`: {{CSSxRef("margin-inline-end")}} を使用してください。
- `-webkit-margin-start`: {{CSSxRef("margin-inline-start")}} を使用してください。
- `-webkit-padding-after`: {{CSSxRef("padding-block-end")}} を使用してください。
- `-webkit-padding-before`: {{CSSxRef("padding-block-start")}} を使用してください。
- `-webkit-padding-end`: {{CSSxRef("padding-inline-end")}} を使用してください。
- `-webkit-padding-start`: {{CSSxRef("padding-inline-start")}} を使用してください。

## -webkit- 接頭辞付きプロパティ値

- `-webkit-fill-available`
  - : {{CSSxRef("width")}} や {{CSSxRef("height")}} といったサイズ指定プロパティと組み合わせて使用し、要素が親コンテナ内の利用できる空間をすべて占めることができるようにします。
    `stretch` 値は標準の代替手段として提供されますが、下位互換性を確保するため、ブラウザーでは `-webkit-fill-available` を別名として対応しています。

## 擬似クラス

> [!NOTE]
> セレクターのチェーンやグループ内に無効な擬似クラスがある場合、セレクターリスト全体が無効となります。

- `:-webkit-any()`: {{CSSxRef(":is")}} を使用してください。
- `:-webkit-any-link`: {{CSSxRef(":any-link")}} を使用してください。
- `:-webkit-autofill`: {{CSSxRef(":autofill")}} を使用してください。
- `:-webkit-autofill-strong-password`: {{CSSxRef(":autofill")}} を使用してください。
- `:-webkit-drag`
- `:-webkit-full-page-media`: {{CSSxRef(":fullscreen")}} を使用してください。
- `:-webkit-full-screen`: {{CSSxRef(":fullscreen")}} を使用してください。
- `:-webkit-full-screen-ancestor`: {{CSSxRef(":fullscreen")}} を使用してください。
- `:-webkit-full-screen-document`: {{CSSxRef(":fullscreen")}} を使用してください。
- `:-webkit-full-screen-controls-hidden`: {{CSSxRef(":fullscreen")}} を使用してください。

## 擬似要素

ウェブの互換性を確保するため、Blink、WebKit、Gecko 系のブラウザーでは、`::-webkit-` で始まるすべての擬似要素を有効なものとして扱います。
セレクターの連鎖やグループ内に無効な擬似要素や擬似クラスが含まれている場合、セレクターリスト全体が無効とみなされます。
擬似要素（擬似クラスを除く）に `-webkit-` 接頭辞を持つ場合、Blink、WebKit、および Gecko ブラウザーはそれを有効であると想定するため、セレクターリストは無効とはなりません。

- `::-webkit-file-upload-button`: {{CSSxRef("::file-selector-button")}} を使用してください。
- {{CSSxRef("::-webkit-inner-spin-button")}}
- `::-webkit-input-placeholder`: {{CSSxRef("::placeholder")}} を使用してください。
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

## メディア特性

- {{CSSxRef("@media/-webkit-animation")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-device-pixel-ratio")}}: 各ブラウザーで対応
- {{CSSxRef("@media/-webkit-transform-2d")}} {{deprecated_inline}}
- {{CSSxRef("@media/-webkit-transform-3d")}}: 各ブラウザーで対応
- {{CSSxRef("@media/-webkit-transition")}} {{deprecated_inline}}

## 関連情報

- [Mozilla (-moz-) ベンダー接頭辞付きの CSS 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)
- {{glossary("Vendor Prefix", "ベンダー接頭辞")}} - 用語集の項目
