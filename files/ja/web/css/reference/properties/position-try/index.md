---
title: position-try
slug: Web/CSS/Reference/Properties/position-try
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

**`position-try`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{cssxref("position-try-order")}} プロパティと {{cssxref("position-try-fallbacks")}} プロパティに対応する一括指定です。

## 構成要素のプロパティ

このプロパティは次の CSS プロパティの一括指定です。

- {{cssxref("position-try-order")}}
- {{cssxref("position-try-fallbacks")}}

## 構文

```css
/* position-try-fallbacks のみ */
position-try: normal flip-block;
position-try: top;
position-try: --custom-try-option;
position-try: flip-block flip-inline;
position-try: top, right, bottom;
position-try: --custom-try-option1, --custom-try-option2;
position-try:
  normal flip-block,
  right,
  --custom-try-option;

/* position-try-order および position-try-fallbacks */
position-try: normal none;
position-try:
  most-width --custom-try-option1,
  --custom-try-option2;
position-try:
  most-height flip-block,
  right,
  --custom-try-option;

/* グローバル値 */
position-try: inherit;
position-try: initial;
position-try: revert;
position-try: revert-layer;
position-try: unset;
```

### 値

値の説明は {{cssxref("position-try-order")}} と {{cssxref("position-try-fallbacks")}} を参照してください。

`position-try` 一括指定は `position-try-fallbacks` の値、または `position-try-order` および `position-try-fallbacks` の値をその順序で指定することができます。`position-try-order` が省略された場合、プロパティの初期値、すなわち `normal` が設定されますので、位置指定試行代替オプションはプロパティに現れる順に試行されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `position-try` の使い方

個のデモは、 `position-try` の効果を示します。

#### HTML

この HTML には、アンカーと位置指定要素となる 2 つの {{htmlelement("div")}} 要素があります。

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>これは情報ボックスです。</p>
</div>
```

#### CSS

このCSSでは、アンカーに {{cssxref("anchor-name")}} を指定し、{{cssxref("position")}} の値として `absolute` を設定しています。{{cssxref("top")}} と {{cssxref("left")}} の値を使用して、ビューポートの上半分に配置します。

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
  position: absolute;
  top: 100px;
  left: 45%;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

次に、カスタム位置オプション `--custom-bottom` を指定します。これにより要素はアンカーの下に配置され、適切なマージンが適用されます。

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

最初に要素をアンカー要素の上に配置し、次に `position-try` 値を設定します。これにより `position-try-order` が `most-height` となり、`position-try-fallbacks` リストにはカスタム代替プションのみが含まれます。

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try: most-height --custom-bottom;
}
```

#### 結果

要素はアンカー要素の下に表示されます。これは、要素が最初にアンカー要素の上に配置されているにもかかわらず発生します。この現象は、アンカー要素の下に上よりももっと縦の空間が存在するためです。`most-height` の優先順序により、`--custom-bottom` の代替オプションが適用され、位置指定要素は包含ブロックに最大の高さを与える位置に配置されます。

{{ EmbedLiveSample("Basic `position-try` usage", "100%", "300") }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}} アットルール
- [`<position-area>`](/ja/docs/Web/CSS/Reference/Values/position-area_value) 値
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)ガイド
- [オーバーフロー時の代替オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)ガイド
