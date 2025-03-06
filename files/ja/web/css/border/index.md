---
title: border
slug: Web/CSS/border
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`border`** は [一括指定](/ja/docs/Web/CSS/Shorthand_properties) の [CSS](/ja/docs/Web/CSS) プロパティで、要素の境界を設定します。これは {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, {{Cssxref("border-color")}} の値を設定します。

{{EmbedInteractiveExample("pages/css/border.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-width`](/ja/docs/Web/CSS/border-width)
- [`border-style`](/ja/docs/Web/CSS/border-style)
- [`border-color`](/ja/docs/Web/CSS/border-color)

## 構文

```css
/* 種類 */
border: solid;

/* 幅 | 種類 */
border: 2px dotted;

/* 種類 | 色 */
border: outset #f33;

/* 幅 | 種類 | 色 */
border: medium dashed green;

/* グローバル値 */
border: inherit;
border: initial;
border: revert;
border: revert-layer;
border: unset;
```

`border` プロパティは、以下に挙げる値の 1 ～ 3 つを使用して指定します。値の順序は関係ありません。

> [!NOTE]
> style が指定されていない場合は境界線は表示されません。 style の既定値が `none` だからです。

### 値

- `<line-width>`
  - : 境界線の太さを設定します。指定されなかった場合は既定値の `medium` になります。 {{Cssxref("border-width")}} を参照してください。
- {{cssxref("&lt;line-style&gt;")}}
  - : 境界線の種類を設定します。指定されなかった場合は既定値の `none` になります。 {{cssxref("border-style")}} を参照してください。
- {{cssxref("&lt;color&gt;")}}
  - : 境界線の色を設定します。指定されなかった場合は既定値で要素の {{cssxref("color")}} プロパティになります。 {{cssxref("border-color")}} を参照してください。

## 解説

他の一括指定プロパティと同様、省略された部分値は[初期値](/ja/docs/Web/CSS/initial_value)に設定されます。重要なことですが、 `border` は {{cssxref("border-image")}} のカスタム値を指定することができず、初期値、つまり `none` に設定します。

`border` による一括指定は、四辺をすべて同じに設定したい場合に特に便利です。しかし、それぞれが異なる場合は、それぞれの辺に異なる値を設定できる個別指定の {{cssxref("border-width")}}、 {{cssxref("border-style")}}、 {{cssxref("border-color")}} プロパティを使用してください。他に、一度に一つの境界線を対象とした、物理的 ({{cssxref("border-top")}} など) や論理的 ({{cssxref("border-block-start")}} など) な境界線プロパティを使用することもできます。

### 境界線と輪郭線

境界線と[輪郭線](/ja/docs/Web/CSS/outline)はよく似ています。しかし、輪郭線は以下の点で境界線とは異なります。

- 輪郭線は領域を占有せず、要素のコンテンツの外側に描画されます。
- 輪郭線は普通は矩形ですが、仕様によれば、矩形である必要はありません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ピンク色の出っ張った境界の設定

#### HTML

```html-nolint live-sample___setting_a_pink_outset_border
<div>ここには境界線、概要、ボックスシャドウがあります！すごいと思いませんか？</div>
```

#### CSS

```css live-sample___setting_a_pink_outset_border
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

#### 結果

{{EmbedLiveSample('Setting_a_pink_outset_border')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("border-width")}}
- {{Cssxref("border-style")}}
- {{Cssxref("border-color")}}
- {{Cssxref("outline")}}
- [背景と境界](/ja/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS の学習: 背景と境界](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
